# Publication review — 18 October 2026

**Status: requires owner review and, where applicable, Deutsche Bank approval before publication.**

This document is a checklist, not a statement that any internal information has been cleared for disclosure.

## Proposed public narrative

- Hands-on Principal Software Engineer who builds reusable platforms.
- High-level engineering case studies: Autobahn, FINOS Plexus Interop and independent product Lorely.
- Public conference talk and Figma/Deutsche Bank discussion.
- No source code, credentials, client data, internal screenshots or operational instructions from Deutsche Bank.

## Existing content requiring explicit verification

The portfolio and its committed PDF CV predate this change. Review the existing `src/data/profile.ts`, homepage, `/cv/` and `public/alexey-ogarkov-cv.pdf` together, especially:

- **Organization and adoption metrics:** team counts, app counts, engineer reporting lines, historical application growth and adoption of particular components.
- **Operational mechanisms:** resilience/fallback behaviour, caching, session diagnostics, support logging, analytics collection and dependency handling.
- **Security and compliance architecture:** authentication and regulatory features, protocol details, integration boundaries and implementation patterns.
- **Strategy and roadmaps:** application consolidation, infrastructure migrations, developer enablement rollouts and pilot initiatives.
- **Unreleased work:** experimental AI tooling or initiatives that have not been publicly announced.
- **Attribution:** distinguish personal architecture/implementation from team or organization-wide outcomes.

Existing public GitHub content is not evidence of employer approval. Technical accuracy is not a substitute for authorization. If a statement cannot be cleared, replace it with a generic, high-level description or remove it.

**After any substantive content change:** update the web CV and regenerate/review the two-page PDF using the repository's documented workflow. Merely changing `profile.ts` leaves the committed PDF out of date.

## External mentions

- Confirm the TechTrain 2018 session title, conference credit and archival URL.
- Confirm the Figma event description and the intended permanent URL of the publicly visible third-party post before using direct quotations or linking as a primary source.
- Don't imply an endorsement by Figma or Deutsche Bank.

## Privacy and integrity

- Personal email is deliberately public in the portfolio and GitHub profile. Consider a dedicated contact alias if unwanted scraping becomes a problem.
- Avoid personal residence, family information and nonprofessional identifiers.
- Remember that editing a public GitHub file does not remove historical commits or search-engine caches.
- Proofread the case studies for scope of contribution; avoid implying ownership of all outcomes from a large team.

## Release gate

- [ ] User reviewed all three case studies for accuracy.
- [ ] Employer policy/communications approval obtained for relevant Deutsche Bank claims, or content redacted.
- [ ] External appearance references and links checked.
- [ ] Web CV and committed PDF cross-checked.
- [ ] CI, accessibility and link tests passed.
- [ ] Only then merge/deploy and submit for indexing.
