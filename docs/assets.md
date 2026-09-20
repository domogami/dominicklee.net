# Assets and provenance

## Current portfolio

- Crane facets: hand-authored SVG geometry based on the user-provided `Crane_Logo_V5 (1).mp4`. Shared by header and hero; the source video is not shipped.
- SNAP75 photographs: user-provided `IMG_4961.JPG` (top view) and `IMG_4962.JPG` (desk view). Optimized 1600px copies are shipped as `public/images/snap75-top.jpg` and `snap75-desk.jpg`; original files are not modified.
- Banners, plant, timeline, paper airplane and social sketches: code-authored SVG/CSS. No external image service is required at runtime.
- Favicon: `public/favicon.svg` combines the current paper-colored crane with the original rounded hexagon silhouette in teal. `public/favicon.ico` contains matching 16, 32, 48 and 256px fallbacks.
- `ColorSchemeIdea1.jpeg` and `ColorSchemeIdea2.jpeg`: existing root-level design references, retained unchanged; not used in the production page.

## Fonts

The supplied standalone HTML provided the WOFF2 subsets. Kalam Bold was added from the Google Fonts source repository. All five families use the SIL Open Font License; copies are included beside the fonts.

| Family        | Files                                    | Source                                                                                  |
| ------------- | ---------------------------------------- | --------------------------------------------------------------------------------------- |
| Caveat        | `63f1500a-…woff2`                        | [Google Fonts Caveat](https://github.com/google/fonts/tree/main/ofl/caveat)             |
| IBM Plex Mono | `bc027d93-…`, `099c655e-…`, `92001f50-…` | [Google Fonts IBM Plex Mono](https://github.com/google/fonts/tree/main/ofl/ibmplexmono) |
| Poppins       | `577d5b99-…`, `7e9c2124-…`, `f9cc56a6-…` | [Google Fonts Poppins](https://github.com/google/fonts/tree/main/ofl/poppins)           |
| Spline Sans   | `a6f754ca-…woff2`                        | [Google Fonts Spline Sans](https://github.com/google/fonts/tree/main/ofl/splinesans)    |
| Kalam Bold    | `Kalam-Bold.ttf`                         | [Google Fonts Kalam](https://github.com/google/fonts/tree/main/ofl/kalam)               |

The legacy projects/archive retain their original font loading behavior, including Google Fonts imports. The notebook itself loads its fonts locally.

Notebook typography: `Lexend-Light.ttf` (weight 300), downloaded from Google Fonts, replaces Spline Sans for notebook body copy and key labels. License: `public/fonts/lexend-OFL.txt` ([Google Fonts source](https://github.com/google/fonts/tree/main/ofl/lexend)). Original Spline Sans assets are retained for comparison.

Timeline milestone headings use the self-hosted `Lexend-Medium.ttf` (weight 500), covered by the same Lexend OFL license.
