import assert from "node:assert/strict";
import { readdir, readFile, mkdir, writeFile } from "node:fs/promises";
import AxeBuilder from "@axe-core/playwright";
import { launchBrowser, withSite } from "./site.mjs";

const files = await readdir("dist", { recursive: true });
const htmlFiles = files.filter((file) => file.endsWith(".html"));
const routes = htmlFiles.map(
  (file) => "/" + file.replace(/index\.html$/, "").replace(/\\/g, "/"),
);
await mkdir("artifacts", { recursive: true });

await withSite(async (site) => {
  const browser = await launchBrowser();
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  const checkedLinks = new Set();
  const externalLinks = new Set();
  const report = {
    routes: [],
    links: 0,
    accessibility: [],
    viewports: [],
    clientJavaScriptBytes: 0,
  };
  try {
    for (const [index, route] of routes.entries()) {
      const response = await page.goto(site + route);
      assert.equal(response.status(), 200, `Route failed: ${route}`);
      const details = await page.evaluate(() => ({
        title: document.title,
        description: document.querySelector('meta[name="description"]')
          ?.content,
        canonical: document.querySelector('link[rel="canonical"]')?.href,
        headings: document.querySelectorAll("h1").length,
        scripts: document.querySelectorAll(
          'script:not([type="application/ld+json"])',
        ).length,
        references: [
          ...document.querySelectorAll(
            "a[href], link[href], img[src], script[src]",
          ),
        ].map((node) => node.getAttribute("href") ?? node.getAttribute("src")),
        text: document.body.textContent,
      }));
      assert.ok(
        details.title && details.description,
        `Metadata missing: ${route}`,
      );
      assert.equal(details.headings, 1, `Expected one h1: ${route}`);
      assert.equal(
        details.scripts,
        0,
        `Unexpected runtime JavaScript: ${route}`,
      );
      assert.ok(
        details.canonical?.startsWith("https://alexogar.github.io/"),
        `Canonical missing: ${route}`,
      );
      assert.ok(
        !/Google\+|jquery|google-analytics/i.test(details.text),
        `Legacy chrome remains: ${route}`,
      );
      for (const reference of details.references) {
        const target = new URL(reference, site + route);
        if (target.origin !== site)
          assert.notEqual(target.protocol, "http:", `Insecure URL: ${target}`);
        if (
          target.origin !== site &&
          target.origin !== "https://alexogar.github.io"
        ) {
          if (target.protocol === "https:") externalLinks.add(target.href);
          continue;
        }
        const local = new URL(target.pathname + target.search, site);
        const key = local.href + target.hash;
        if (checkedLinks.has(key)) continue;
        checkedLinks.add(key);
        const linked = await fetch(local);
        assert.equal(
          linked.status,
          200,
          `Broken link on ${route}: ${reference}`,
        );
        if (target.hash) {
          const body = await linked.text();
          const id = decodeURIComponent(target.hash.slice(1));
          assert.ok(
            body.includes(`id="${id}"`),
            `Missing fragment: ${reference}`,
          );
        }
      }
      report.routes.push(route);
      console.log(`Routes/links ${index + 1}/${routes.length}: ${route}`);
    }
    const pdf = await readFile("public/alexey-ogarkov-cv.pdf");
    assert.equal(
      pdf.subarray(0, 5).toString(),
      "%PDF-",
      "CV PDF missing/invalid",
    );
    assert.equal(
      (pdf.toString("latin1").match(/\/Type\s*\/Page\b/g) ?? []).length,
      2,
      "CV must be two pages",
    );
    const manifest = JSON.parse(
      await readFile("public/site.webmanifest", "utf8"),
    );
    for (const icon of manifest.icons)
      assert.equal(
        (await fetch(site + icon.src)).status,
        200,
        `Icon missing: ${icon.src}`,
      );
    const keyRoutes = ["/", "/cv/", "/404.html"];
    // Axe injects its own audit script; the separate context above verifies the site without JavaScript.
    const auditContext = await browser.newContext();
    const auditPage = await auditContext.newPage();
    for (const width of [320, 390, 768, 1440]) {
      await auditPage.setViewportSize({ width, height: 900 });
      for (const route of keyRoutes) {
        await auditPage.goto(site + route);
        await auditPage.evaluate(() => document.fonts.ready);
        assert.ok(
          await auditPage.evaluate(
            () => document.documentElement.scrollWidth <= window.innerWidth,
          ),
          `Horizontal overflow: ${route} at ${width}px`,
        );
        const axe = await new AxeBuilder({ page: auditPage })
          .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
          .analyze();
        report.accessibility.push({
          route,
          width,
          violations: axe.violations.length,
        });
        assert.deepEqual(
          axe.violations.map((item) => ({
            id: item.id,
            targets: item.nodes.map((node) => node.target),
          })),
          [],
          `Accessibility violations: ${route} at ${width}px`,
        );
      }
      report.viewports.push(width);
      console.log(`Layout/accessibility: ${width}px passed`);
    }
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(site);
    await page.keyboard.press("Tab");
    assert.equal(await page.locator(":focus").textContent(), "Skip to content");
    await page.keyboard.press("Enter");
    assert.equal(await page.locator(":focus").getAttribute("id"), "main");
    assert.ok(await page.locator(".button-primary").first().isVisible());
    await auditPage.emulateMedia({ reducedMotion: "reduce" });
    await auditPage.goto(site);
    assert.equal(
      await auditPage.evaluate(
        () => getComputedStyle(document.documentElement).scrollBehavior,
      ),
      "auto",
    );
    await auditPage.setViewportSize({ width: 1440, height: 1000 });
    await auditPage.goto(site);
    await auditPage.evaluate(() => document.fonts.ready);
    await auditPage.screenshot({
      path: "artifacts/desktop.png",
      fullPage: true,
    });
    await auditPage.screenshot({ path: "artifacts/desktop-hero.png" });
    await auditPage.setViewportSize({ width: 390, height: 844 });
    await auditPage.screenshot({
      path: "artifacts/mobile.png",
      fullPage: true,
    });
    await auditPage.screenshot({ path: "artifacts/mobile-hero.png" });
    await auditPage.goto(site + "/cv/");
    await auditPage.emulateMedia({ media: "print" });
    assert.equal(await auditPage.locator(".site-header").isVisible(), false);
    assert.equal(await auditPage.locator(".cv-toolbar").isVisible(), false);
    assert.equal(await auditPage.locator(".site-footer").isVisible(), false);
    if (process.env.CHECK_EXTERNAL === "1") {
      for (const url of externalLinks) {
        const response = await fetch(url, {
          signal: AbortSignal.timeout(15000),
        });
        assert.ok(
          response.ok ||
            [403, 429].includes(response.status) ||
            (response.status === 999 &&
              new URL(url).hostname.endsWith(".linkedin.com")),
          `External link failed: ${url} (${response.status})`,
        );
        console.log(
          `External: ${response.status} ${url}${response.ok ? "" : " (blocked automated request; manual review needed)"}`,
        );
      }
    }
    report.links = checkedLinks.size;
    await writeFile(
      "artifacts/verification.json",
      JSON.stringify(report, null, 2) + "\n",
    );
    console.log(
      `Verified ${routes.length} pages, ${report.links} internal references, ${report.accessibility.length} axe audits, keyboard navigation, reduced motion and two-page CV. Zero client-side JavaScript.`,
    );
  } finally {
    await browser.close();
  }
});
