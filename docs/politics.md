# Voting notebook · 2026 general election

Route: `/politics/` (canonical target `https://dominicklee.net/politics/`). Dom approved publication on October 28, 2026. The release is based on the current production branch, with unrelated local name-study work excluded.

## Contents and research scope

- Default: Queen Anne, Seattle, based on Congressional District 7, Legislative District 36, King County Council District 4, West District Court, Seattle Municipal Court, statewide Supreme Court and King County Court of Appeals races.
- 27 candidate races, 37 candidates in that starting view. This is not an address-verified ballot. VoteWA remains the authoritative personalized guide.
- Three statewide initiatives (IP26-645, IL26-001, IL26-638), plus Seattle Proposition 1, the transit measure.
- Secondary browser: all 97 offices / 153 candidates listed by King County. Research depth outside the default view is explicitly uneven; do not describe every county profile as a deep review.
- Every default candidate has a short sourced history. Platform summaries, selected official votes, official biographies, candidate statements, judicial video statements and social evidence are included where verified. Missing current platforms or inaccessible social posts are identified rather than inferred.

Research snapshot: October 28, 2026. State and local measures were checked against initiative/ordinance text, official explanations, fiscal analyses and attributed pro/con statements. The county roster is the source for candidate names, office positions, order and filed campaign websites. Historical social statements carry dates; no policy position is inferred from an account link alone. No Firecrawl was used.

The detailed measure comparison and candidate method notes are in `docs/politics-research/`. Original research working files are retained in the `Politics/research/` workspace. Runtime data is bundled in `app/politics/data/`; no live source scrape occurs when a visitor opens the guide. Recheck the roster and material legal/fiscal changes before any later election release.

## Notebook behavior

Choices, candidate notes, measure notes and annotations on individual bullets persist in `localStorage`, key `dom-politics:2026-general:v1`. There is no account or cross-device sync. Choices and notes are not sent to the server by this feature. Same-origin JavaScript can access browser storage; exports contain the user's private choices and notes.

Export produces a versioned JSON backup. Import validates schema, size and candidate/measure IDs, then asks before replacing the current notebook. Clear asks before removing the notebook. Storage failure keeps the session usable and displays an export reminder. A storage event updates an open second tab. Nothing is preselected. Marking this guide does not submit an official ballot.

## Domino UI adoption

The implementation uses the actual `@domlee/ui` library: Button, Input, Select, Badge, Tabs, RadioGroup, Textarea, Dialog, Chevron, ThemeProvider and ThemeToggle. Fonts and semantic tokens are consumed from the package. App-specific layout and the original ballot sketch belong to this route.

Pinned upstream revision: `7421c4f955fc396e8d5fc533815f4c5339df302c`, the existing production-site dependency. The politics section uses the same pinned Git package as the portfolio’s shared Polaroid stack; no library downgrade or component copy is included in this release. The manifest and lockfile preserve HTTPS access for clean builds.

The existing root touch-feedback provider remains the only feedback controller. Theme preference is separate (`politics-theme`), and leaving the route restores the previous document theme. The original portfolio and in-progress name study are preserved.

## Verification and maintenance

Run `npm run typecheck`, `npm run build`, and `npm run check:build`. The focused browser suite is `tests/politics.spec.ts`; `playwright.politics.config.ts` points at a production preview on port 3017. Start that preview after the build with `PORT=3017 npm start`, then run `npx playwright test --config playwright.politics.config.ts`.

The suite exercises default and full-county scope, search, source links, dated social summaries, saved choices, one choice per race, notes and per-bullet annotations, reload persistence, export/import, malformed backups, failed browser storage, keyboard tabs, theme changes and 320px reflow. Screenshots are saved in `previews/politics-*.png`.

Desktop Chrome and mobile Chrome emulation are automated checks. They do not establish physical iPhone/Safari behavior, screen-reader conformance or production-domain availability. The app handles reduced motion and expands disclosures before browser printing.

Rollback: remove the route entry, the new politics component/data/style/route files, the politics test/config/docs, the `@domlee/ui` dependency and its unused transitive dependency, and the vendor package. Do not remove unrelated local changes. Preserve exported notebooks before changing the storage schema.

Final local result (October 28, 2026): typecheck, production build, Netlify handler/static-asset smoke check and all 8 focused desktop/mobile Chrome checks passed. Desktop and mobile screenshots were visually inspected. Release checks were repeated successfully with a clean Node 24 install and the current production-site UI dependency before publication. The shared stylesheet uses the same module import as the homepage to keep server and browser stylesheet references consistent.

Safari scroll safety (October 28, 2026): the reading surface opts out of auxiliary native-switch overlays. The retained root controller consumes `isNativeTapTargetEligible` from `@domlee/ui/native-tap-policy`, excluding collapsed/nested disclosure bodies, summaries, expandable controls and ancestor opt-outs before geometry measurements. Nonzero WebKit rectangles do not prove a hidden control is visible. New regression checks exercise genuine Chromium touch drags on expanded judge headers and reading content; WebKit hit-testing verifies the problematic overlay layer is absent. Mobile chevrons retain at least a 24px right inset. Physical iPhone pan behavior remains a device check.
