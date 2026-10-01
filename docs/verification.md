# Verification — 1 October 2026

Local production output verified with Node.js 24.19.0, Astro 7.3.5,
Headless Chrome 154 and Lighthouse 13.5.0. Lighthouse used its default simulated
mobile configuration on localhost. These are lab results; deployed hosting and
real devices can differ. GitHub Actions repeats the same 95+ median gate on Linux.

| Category       | Run 1 | Run 2 | Run 3 | Median |
| -------------- | ----: | ----: | ----: | -----: |
| Performance    |   100 |   100 |   100 |    100 |
| Accessibility  |   100 |   100 |   100 |    100 |
| Best Practices |   100 |   100 |   100 |    100 |
| SEO            |   100 |   100 |   100 |    100 |

The revised homepage loaded about **100 KB** including local fonts, with **0 bytes of
client-side JavaScript**, zero total blocking time, approximately 1.65s LCP and
0.0012 CLS. Detailed measurements: [Lighthouse summary](quality/lighthouse-summary.json).

Passed commands:

```sh
pnpm install --frozen-lockfile
pnpm format:check
pnpm check
pnpm build
pnpm verify
pnpm lighthouse
```

- Astro check: zero errors, warnings or hints.
- 3 HTML pages and 23 internal link/asset/fragment references passed.
- 12 axe WCAG A/AA audits: homepage, CV and 404 page at 320, 390, 768 and
  1440px. Zero violations.
- No horizontal overflow at those widths. The portfolio and CV remain usable with
  JavaScript disabled. Keyboard skip-link navigation and reduced-motion CSS passed.
- SVG geometry and labels in the skills radar remain within its view box at all
  four widths. Every evidence link resolves to its supporting work.
- CV print checks hide navigation/actions/footer. Poppler confirms two A4 pages,
  tagged PDF, no PDF JavaScript. Both rasterized pages were visually reviewed for
  clipping, spacing and legibility.
- Desktop/mobile homepage screenshots and the social preview were visually reviewed.
- Contact and project URLs are unchanged. The initial rebuild checked external links:
  all returned HTTP 200 except LinkedIn (HTTP 999 for automated requests). Its matching
  public profile and contact/location details were confirmed in the task.

Automated audits do not establish complete WCAG conformance. No manual screen-reader
or physical-device test is claimed. CI checks internal links; external checks remain
optional to avoid third-party availability blocking deployment.

Screenshots: [desktop](screenshots/desktop.png), [mobile](screenshots/mobile.png),
[full desktop page](screenshots/desktop-full.png), [full mobile page](screenshots/mobile-full.png).
Raw audit HTML/JSON and full screenshots are also retained in the CI quality artifact.

GitHub Pages is configured for GitHub Actions. This content revision deploys after
its feature PR is merged into `master`; the published site remains unchanged until then.
