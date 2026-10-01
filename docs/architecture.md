# Rebuild architecture

Product brief: issue #1. Workstreams: content #2, homepage #3, legacy archive #4,
quality/deployment #5 and CV #6. All six open issues were read before implementation;
there were no issue comments or repository-specific agent instructions.

- `src/data/profile.ts`: professional facts and concise CV variants shared by `/`
  and `/cv/`. Completed work, ongoing transformations and pilots remain explicit.
- `src/layouts/Layout.astro`: landmarks, navigation, canonical/social metadata,
  Person structured data and common styles.
- `src/pages/index.astro`: the requested nine-section editorial portfolio.
- `src/pages/cv.astro`: concise CV with print CSS; its print rendering generates the
  versioned PDF in `public/alexey-ogarkov-cv.pdf`.
- `src/content/blog/`: both historical articles, preserving prose and code examples.
- Astro content collection plus generated article/category/feed routes preserve all
  historical content URLs. The archive is secondary navigation in the footer.
- Static assets are local. No React, hydration, analytics, third-party runtime
  requests or client-side JavaScript are needed.
- GitHub Actions verifies builds, links, browser accessibility and mobile Lighthouse
  scores before uploading the Pages artifact; deployment only follows `master`.

Design: warm ivory paper, near-black ink, muted teal accents, locally hosted
Newsreader and DM Sans. Editorial section labels, large serif typography, precise
rules and restrained project panels establish hierarchy without decorative motion.

The PDF is generated from the same CV route and committed for review. Regeneration
is explicit, so deployment does not silently replace a reviewed PDF.
