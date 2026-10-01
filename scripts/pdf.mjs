import { mkdir, copyFile } from "node:fs/promises";
import { launchBrowser, withSite } from "./site.mjs";

await withSite(async (site) => {
  const browser = await launchBrowser();
  try {
    const page = await browser.newPage();
    await page.goto(site + "/cv/");
    await page.emulateMedia({ media: "print" });
    await page.evaluate(() => document.fonts.ready);
    await mkdir("public", { recursive: true });
    await page.pdf({
      path: "public/alexey-ogarkov-cv.pdf",
      format: "A4",
      preferCSSPageSize: true,
      printBackground: true,
      tagged: true,
      outline: true,
    });
    await copyFile(
      "public/alexey-ogarkov-cv.pdf",
      "dist/alexey-ogarkov-cv.pdf",
    );
    console.log(
      "Generated public/alexey-ogarkov-cv.pdf from /cv/ print CSS. Review before committing.",
    );
  } finally {
    await browser.close();
  }
});
