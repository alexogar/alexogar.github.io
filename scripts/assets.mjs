import { mkdir, readFile } from "node:fs/promises";
import { launchBrowser } from "./site.mjs";

await mkdir("public", { recursive: true });
const browser = await launchBrowser();
try {
  const page = await browser.newPage();
  const icon = await readFile("public/favicon.svg", "utf8");
  for (const [size, filename] of [
    [32, "favicon.png"],
    [180, "apple-touch-icon.png"],
    [192, "icon-192.png"],
    [512, "icon-512.png"],
  ]) {
    await page.setViewportSize({ width: size, height: size });
    await page.setContent(
      `<style>body{margin:0}svg{display:block;width:100%;height:100%}</style>${icon}`,
    );
    await page.screenshot({ path: `public/${filename}`, omitBackground: true });
  }
  const serif = (
    await readFile(
      "node_modules/@fontsource/newsreader/files/newsreader-latin-400-normal.woff2",
    )
  ).toString("base64");
  const sans = (
    await readFile(
      "node_modules/@fontsource-variable/dm-sans/files/dm-sans-latin-wght-normal.woff2",
    )
  ).toString("base64");
  await page.setViewportSize({ width: 1200, height: 630 });
  await page.setContent(`<style>
    @font-face{font-family:Newsreader;src:url(data:font/woff2;base64,${serif})}
    @font-face{font-family:DM;src:url(data:font/woff2;base64,${sans})}
    *{box-sizing:border-box}body{margin:0;background:#f7f6f2;color:#242b29;padding:65px 78px;font-family:DM,sans-serif}
    .top{font-size:15px;letter-spacing:2px;text-transform:uppercase;color:#286456;padding-bottom:30px;border-bottom:1px solid #d9ddd5}
    h1{font:112px/.9 Newsreader,serif;letter-spacing:-5px;margin:48px 0 25px}h1 span{color:#286456}
    p{font-size:25px;line-height:1.5;margin:0}p span{color:#5f6964}.bottom{display:flex;justify-content:space-between;margin-top:40px;color:#5f6964;font-size:16px}
  </style><div class="top">Hands-on engineering · Berlin, Germany</div><h1>Alexey Ogarkov<span>.</span></h1><p>Principal Software Engineer<br><span>Frontend &amp; Developer Platforms</span></p><div class="bottom"><span>From first implementation to shared capability.</span><span>alexogar.github.io</span></div>`);
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: "public/social-preview.png" });
  console.log("Generated favicons, app icons and the 1200×630 social preview.");
} finally {
  await browser.close();
}
