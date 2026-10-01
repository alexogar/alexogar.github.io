import { spawn } from "node:child_process";
import { setTimeout } from "node:timers/promises";
import { chromium } from "playwright";

export const launchBrowser = () =>
  chromium.launch({
    ...(process.env.CHROME_PATH
      ? { executablePath: process.env.CHROME_PATH }
      : {}),
  });

export async function withSite(run) {
  const url = process.env.SITE_URL ?? "http://127.0.0.1:4321";
  const server = process.env.SITE_URL
    ? undefined
    : spawn(
        process.execPath,
        [
          "node_modules/astro/bin/astro.mjs",
          "preview",
          "--ignore-lock",
          "--host",
          "127.0.0.1",
          "--port",
          "4321",
        ],
        {
          env: { ...process.env, ASTRO_TELEMETRY_DISABLED: "1" },
          stdio: "pipe",
        },
      );
  let output = "";
  server?.stdout.on("data", (chunk) => {
    output += chunk;
  });
  server?.stderr.on("data", (chunk) => {
    output += chunk;
  });
  try {
    for (let attempt = 0; attempt < 100; attempt++) {
      if (server && server.exitCode !== null)
        throw new Error(`Preview failed: ${output}`);
      if (!server || output.includes("http://127.0.0.1:4321")) {
        let ready = false;
        try {
          ready = (await fetch(url)).ok;
        } catch {}
        if (ready) return await run(url);
      }
      await setTimeout(100);
    }
    throw new Error(`Preview did not become ready: ${output}`);
  } finally {
    server?.kill();
  }
}
