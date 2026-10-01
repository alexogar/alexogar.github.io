# Alexey Ogarkov

A static CV and engineering portfolio at **https://alexogar.github.io**.
Astro + strict TypeScript, semantic HTML, local fonts and CSS. No client-side
JavaScript, React, analytics or runtime third-party requests.

## Development

Use Node.js 24 and pnpm 11.19.0 (the version in `packageManager`).

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

Development: http://127.0.0.1:4321. Production:

```sh
pnpm format:check
pnpm check
pnpm build
pnpm preview
```

Edit professional facts in `src/data/profile.ts`; the homepage and `/cv/` share
this content, with concise CV variants for longer project stories. See
[architecture](docs/architecture.md). Historical posts are in `src/content/blog/`.
All content is rendered at build time. The contact details use the original site’s
email and the matching public LinkedIn profile (Berlin).

## Quality checks

```sh
pnpm exec playwright install chromium
pnpm verify
pnpm lighthouse
```

Scripts start a production preview automatically. `SITE_URL` uses an existing
server instead. `CHROME_PATH` can select an installed Chromium/Chrome binary.
The verification script checks every generated HTML page, every recorded legacy
content route, internal links/assets/fragment targets, metadata, two-page PDF,
Atom feeds and manifest icons. It runs axe WCAG A/AA audits on key routes at
320, 390, 768 and 1440 pixels, checks overflow, keyboard skip navigation,
reduced motion, print chrome and operation with JavaScript disabled.

`pnpm lighthouse` runs three mobile audits and requires median scores of **95+**
for performance, accessibility, best practices and SEO. Reports and desktop/mobile
screenshots are written to `artifacts/`. Automated accessibility checks complement
manual review; they do not establish complete WCAG conformance.

Optional external-link verification: `CHECK_EXTERNAL=1 pnpm verify`. External
sites can reject automated requests; 403/429 responses (and LinkedIn’s 999) are reported for manual
review. CI checks internal links deterministically, without relying on external
sites to be available.

## CV and static assets

The committed `public/alexey-ogarkov-cv.pdf` is the reviewed downloadable CV.
The `/cv/` page has A4 print styles with a deliberate page break, readable URLs,
no navigation/footer, and two-page output. After changing CV content:

```sh
pnpm build
pnpm pdf
pnpm build
pnpm verify
```

Review both PDF pages before committing. PDF generation uses Chromium’s tagged
PDF output from the same `/cv/` page; the web version remains richer than the PDF.
Deployment serves the committed PDF and does not replace it automatically.

To regenerate the local icons and social preview, run `node scripts/assets.mjs`
after installing Playwright’s browser. Fontsource packages supply locally hosted
Newsreader and DM Sans under their included SIL Open Font Licenses.

## Preserved legacy routes

- `/blog/2013/08/01/github-injustice/`
- `/blog/2013/08/17/z-dot-script/`
- `/blog/archives/`
- `/blog/categories/`
- `/blog/categories/{git,gitflow,zsh,terminal}/`
- `/atom.xml` and `/blog/categories/{git,gitflow,zsh,terminal}/atom.xml`
- `/sitemap.xml` (compatibility sitemap index) and `/favicon.png`

`/blog/` also opens the archive. Article prose and code examples remain intact;
the external nvie link now uses HTTPS, and code blocks use semantic markup.
The original Atom entry identifiers are preserved with HTTPS. All 15 recorded
content/sitemap URLs are covered by `docs/legacy-routes.json` and `pnpm verify`.

Retired resources: unused Octopress theme images/CSS, Font Awesome, jQuery,
Fancybox, Flash/JWPlayer, Google+, Google Analytics, AddThis and Disqus embeds.
The repository had no article media depending on these assets. Historical comments
were hosted externally and were not present in the repository. No article,
category or feed route was retired; no hosting-specific redirects are needed.

## GitHub Pages deployment

The `site.yml` workflow verifies pull requests. On `master`, all quality gates must
pass before the static `dist/` artifact deploys through GitHub Pages Actions.
PR builds never deploy. Only the deploy job receives Pages/OIDC write permissions.
Reports are retained as Actions artifacts. No external SaaS is required.

**One-time repository setup:** under Settings → Pages → Build and deployment,
select **GitHub Actions** as the source. The old site currently uses legacy
branch-based publishing; make this switch when merging the rebuild. Enable HTTPS
enforcement there if it is available. The configured production/canonical origin
is `https://alexogar.github.io`, with no project subpath or custom domain.

Local checks and committed assets are sufficient to review the change before
merging. Keep changes on feature branches and merge through pull requests.
