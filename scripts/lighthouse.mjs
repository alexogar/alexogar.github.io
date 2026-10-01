import assert from "node:assert/strict";
import { mkdir, writeFile, mkdtemp, rm } from "node:fs/promises";
import { spawn } from "node:child_process";
import { createServer } from "node:net";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { setTimeout } from "node:timers/promises";
import lighthouse from "lighthouse";
import { chromium } from "playwright";
import { withSite } from "./site.mjs";

await mkdir("artifacts/lighthouse", { recursive: true });
await withSite(async (site) => {
  const probe = createServer();
  await new Promise((resolve) => probe.listen(0, "127.0.0.1", resolve));
  const port = probe.address().port;
  await new Promise((resolve) => probe.close(resolve));
  const profile = await mkdtemp(join(tmpdir(), "alexey-lighthouse-"));
  const chrome = spawn(
    process.env.CHROME_PATH ?? chromium.executablePath(),
    [
      "--headless",
      "--no-sandbox",
      "--disable-gpu",
      `--remote-debugging-port=${port}`,
      `--user-data-dir=${profile}`,
    ],
    { stdio: "ignore" },
  );
  try {
    let ready = false;
    for (let attempt = 0; attempt < 100; attempt++) {
      try {
        ready = (await fetch(`http://127.0.0.1:${port}/json/version`)).ok;
      } catch {}
      if (ready) break;
      await setTimeout(100);
    }
    assert.ok(ready, "Chrome debugging endpoint did not become ready");
    const runs = [];
    for (let run = 1; run <= 3; run++) {
      const result = await lighthouse(site, {
        port,
        output: ["html", "json"],
        onlyCategories: [
          "performance",
          "accessibility",
          "best-practices",
          "seo",
        ],
        logLevel: "error",
      });
      assert.ok(
        result && !result.lhr.runtimeError,
        `Lighthouse run ${run} failed`,
      );
      await writeFile(
        `artifacts/lighthouse/mobile-${run}.html`,
        result.report[0],
      );
      await writeFile(
        `artifacts/lighthouse/mobile-${run}.json`,
        result.report[1],
      );
      const scores = Object.fromEntries(
        Object.entries(result.lhr.categories).map(([key, value]) => [
          key,
          Math.round(value.score * 100),
        ]),
      );
      const metrics = Object.fromEntries(
        [
          "first-contentful-paint",
          "largest-contentful-paint",
          "total-blocking-time",
          "cumulative-layout-shift",
          "speed-index",
        ].map((key) => [key, result.lhr.audits[key].numericValue]),
      );
      runs.push({ scores, metrics });
      console.log(`Mobile Lighthouse run ${run}: ${JSON.stringify(scores)}`);
    }
    const median = Object.fromEntries(
      Object.keys(runs[0].scores).map((key) => [
        key,
        runs.map((run) => run.scores[key]).sort((a, b) => a - b)[1],
      ]),
    );
    await writeFile(
      "artifacts/lighthouse/summary.json",
      JSON.stringify({ runs, median }, null, 2) + "\n",
    );
    for (const [category, score] of Object.entries(median))
      assert.ok(score >= 95, `${category}: median ${score}, expected ≥95`);
    console.log(
      `Lighthouse median: ${JSON.stringify(median)} (95+ gate passed)`,
    );
  } finally {
    if (chrome.exitCode === null) {
      chrome.kill();
      await new Promise((resolve) => chrome.once("exit", resolve));
    }
    await rm(profile, { recursive: true, force: true });
  }
});
