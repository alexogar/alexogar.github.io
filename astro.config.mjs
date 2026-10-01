import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://alexogar.github.io",
  output: "static",
  trailingSlash: "always",
  integrations: [sitemap({ filter: (url) => !url.endsWith("/404/") })],
});
