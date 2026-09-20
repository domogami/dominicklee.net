# Local verification — 2026-09-20

Status: **Local checks recorded below; release authorized by Dom on September 20, 2026.**

## Completed

| Check                             | Outcome                                                                                                             |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Clean lockfile install (`npm ci`) | Passed                                                                                                              |
| Dependency audit                  | 0 reported vulnerabilities                                                                                          |
| Formatting                        | Passed; notebook stylesheet and source normalized, archive/generated legacy assets excluded                         |
| Type generation and TypeScript    | Passed                                                                                                              |
| Production build                  | Passed                                                                                                              |
| Node 24 compatibility             | `npm run check` passed on Node 24.21.0; production preview served with Node 24                                      |
| Netlify adapter                   | Generated server handler imports successfully; catch-all and static-file preference verified                        |
| Retired dependencies              | No direct AWS SDK, Prisma, Editor.js or Remix packages remain                                                       |
| Browser suite                     | 17 checks passed together in the final release run                                                                  |
| Desktop/mobile visuals            | Garden, contact, projects and notebook drawings inspected; right-aligned plant and 16px separator midpoint retained |
| External destinations             | Garden homepage, Axe Sharpening, Dotfiles article and first Netlify portfolio returned HTTP 200                     |
| Git whitespace check              | Passed                                                                                                              |

The clean install/audit initially used the host's Node 26 runtime. The full check pipeline and final production browser pass were also run with Node 24.21.0, matching the major version configured for deployment.

## Browser coverage

1. Notebook renders without runtime errors, photos load, and writing links point to the garden.
2. Mobile menu opens, traps/restores focus, supports Escape and navigates.
3. Photo stack swaps and the motion control works.
4. Operating-system reduced motion is respected.
5. Archive is an independent document with working images and theme switching.
6. Retired blog/admin/upload paths return 404 in the local app.
7. Startpage and drinks routes render with theme controls.
8. Copy follows the 32px grid at 320, 390, 768, 1024 and 1440px.
9. Hobbies erase/rewrite independently while the prefix and single-line layout stay fixed.
10. Drawings reveal on entry and separators remain at their grid midpoint.
11. Header compacts from 96px to 64px without moving the main document; backing is opaque and index returns to the top.
12. Header crane starts fully drawn, animates on focus and respects reduced motion.
13. Contact invitation is a single mail link; garden link/plant composition holds at 320, 1440 and 1920px.
14. Folios are unique per canonical destination, and all numbered references and links match the shared registry.

15. Plant replays on hover, click and keyboard, respecting quiet motion.
16. Both hero dot grids drift without moving the writing.
17. Navigation dot follows the active section on desktop and mobile.

## Not performed

- Production deployment is not verified by the local checks.
- GitHub Actions configuration is prepared but has not run remotely.
- No Netlify account configuration or existing deployment was changed.
- No AWS resources, credentials or databases were deleted; see [migration and release](migration-and-release.md).
- No production-domain smoke test of this redesign is possible before publication.
- Browser automation uses Chrome/Chromium. Safari and Firefox have not been individually certified in this pass; the contact flight uses modern CSS motion paths and SVG path animation, so inspect it on those browsers before making cross-browser guarantees.
- Mail-link destination/structure is verified without launching an email client or sending a message.

Dom approved the current writing and redesign for release. Test success alone does not verify production deployment.

An earlier folio check run had a transient mobile-menu focus failure; its focused rerun and the final full 17-test run passed.
