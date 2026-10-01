# Rebuild architecture

Product brief: issue #1. Workstreams: content #2, homepage #3, legacy archive #4,
quality/deployment #5 and CV #6. All six open issues were read before implementation;
there were no issue comments or repository-specific agent instructions. Issue #4’s
archive requirement is superseded by Alexey’s decision to retire the old blog.

- `src/data/profile.ts`: professional facts and concise CV variants shared by `/`
  and `/cv/`. Completed work, ongoing transformations and pilots remain explicit.
- `src/layouts/Layout.astro`: landmarks, navigation, canonical/social metadata,
  Person structured data and common styles.
- `src/pages/index.astro`: the requested nine-section editorial portfolio.
- `src/pages/cv.astro`: concise CV with print CSS; its print rendering generates the
  versioned PDF in `public/alexey-ogarkov-cv.pdf`.
- The old blog is intentionally retired at Alexey’s request. Its articles remain
  in Git history; no blog routes, content collection, feeds or archive links are shipped.
- Static assets are local. No React, hydration, analytics, third-party runtime
  requests or client-side JavaScript are needed.
- GitHub Actions verifies builds, links, browser accessibility and mobile Lighthouse
  scores before uploading the Pages artifact; deployment only follows `master`.

Design: warm ivory paper, near-black ink, muted teal accents, locally hosted
Newsreader and DM Sans. Editorial section labels, large serif typography, precise
rules and restrained project panels establish hierarchy without decorative motion.

The PDF is generated from the same CV route and committed for review. Regeneration
is explicit, so deployment does not silently replace a reviewed PDF.

The revised CV separates Autobahn's overall footprint (approximately 300 teams,
250 external apps and 1,000 internal apps), microfrontend adoption (~100 apps across
~20 teams) and Plexus Interop adoption (100+ apps). Ownership wording distinguishes
personal implementations, architecture contributions and delivery by other engineers.
Design-system AI skills are adopted tooling; Project Memory remains a personal pilot.
The FCP contribution is a microfrontend equivalent, rather than a claim that the
browser's page-level metric measures every module independently.
