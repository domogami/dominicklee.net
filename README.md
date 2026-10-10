# Dominick's notebook

Personal portfolio built with React Router 8 (framework mode), React 19, TypeScript, and Vite 8. Requires Node 22.22+; `.nvmrc` and Netlify target Node 24.

```sh
npm ci
npm run dev
npm run check
npm test
```

Start with [the documentation index](docs/README.md), especially the [writing review](docs/writing-review.md) before publishing.

The development site opens at http://localhost:3000. `npm start` serves the production build. Browser tests use locally installed Chrome, or bundled Chromium in CI. `npm test` starts the production server when one is not already running; build first.

## Design

- `app/components/notebook/` contains the entire new portfolio, the shared animated crane, and single-line Caveat hobby tagline.
- `app/styles/notebook.css` owns the new design. Text-bearing backgrounds use a fixed 32px grid and 32px copy line height. Decorative dots and paper drift independently so the writing remains aligned.
- Fonts are served locally from `public/fonts/`, with licenses and provenance documented in `docs/assets.md`. SNAP75 photos are resized copies of the provided originals.
- Crane geometry follows the supplied Crane_Logo_V5 animation: outlines draw in, then paper facets fill. Click the hero crane to replay. Only the hobby word erases and rewrites; the surrounding words stay fixed. The whole tagline scales down to fit one line. Reduced-motion preferences and the footer motion control disable automatic animation.
- Banners trace their outlines, fill, and reveal their lettering on first scroll into view. Handwritten notes reveal letter by letter, and a small plant draws into the digital garden. All drawings respect reduced motion. Row separators sit on the 16px midpoint of each 32px text line.
- The photo stack supports hover, keyboard activation, and tap. The mobile index includes focus containment, Escape to close, and restored focus.

## Archive and remaining projects

`/flight-performance/` is an independent aircraft-performance notebook with its own layout, stylesheet, and navigation. It accepts comma, semicolon, and tab-separated flight CSVs, including ForeFlight exports with metadata preambles and scientific-notation epoch timestamps. Column and shared unit mapping are editable; uploaded records remain in the browser. It identifies steady cruise and observed climb windows, draws handbook-style observation charts, and includes worked calculations, quality notes, results CSV export, and a printable report. Clear climbs with changing speed, heading, or power remain visible as variable-condition observations; hollow chart points distinguish them. Cruise still requires stability, and either phase is excluded for poor altitude fit, inadequate resolution, or excessive recorded GPS vertical error. The math overview compares full-window regression, endpoint altitude gain over time, and overlapping 30-second regressions.

Light, Hybrid, and Dark modes use the notebook palettes; theme and decorative-motion preferences are saved locally without flight records. The SVG airplane idles, banks with pointer movement, and flies a lap on tap or keyboard activation. Motion honors the device reduced-motion setting and can also be paused. The context panel explains the minimum segment length (60 seconds by default); ordinary analysis windows target 120 seconds and still must pass the steady-flight checks.

Historical winds aloft are requested explicitly through `/flight-performance/weather` from Open-Meteo's NOAA GFS archive. Only up to 12 selected midpoint locations, timestamps, and altitudes are submitted. Wind vectors are interpolated in time and height. Recorded TAS takes priority, followed by GPS plus wind, then CAS plus pressure and OAT (IAS is labeled as an approximation). The measured fuel metric requires recorded total fuel flow; the overview explains full-to-full refill averages and POH estimates as alternatives, without inferring fuel from GPS or Hobbs alone. These are observed results at the flight's conditions, not certified POH curves or standard-weight corrections. The page's math overview links to FAA, NIST, NASA, ForeFlight, and weather-provider references.

Graph, metric, altitude-axis, and stability explanations open on hover, keyboard focus, or an info-button click/tap. Escape and outside clicks dismiss them; hover cards stay readable under the pointer, follow all three themes, and remain inside the viewport. Chart points can also be selected by keyboard.

Focused checks: `npm test -- tests/flight-model.spec.ts tests/flight-performance.spec.ts tests/flight-appearance.spec.ts tests/flight-explanations.spec.ts`. Set `FLIGHT_TEST_CSV` to a private local CSV path to validate a supplied ForeFlight log without adding it to public assets or repository fixtures. `FLIGHT_TEST_WEATHER` may point to a previously fetched local weather-result JSON for the optional private browser test; this fixture is replayed locally and makes no external weather request.

`/weather/` is an installable weather journal with the notebook’s typography, dot grid and animated hand-drawn skies. It includes location/search, hourly and ten-day forecasts, rain estimates, air quality, U.S. alerts, day/night paper and offline reading. No API key is required; moon calculations use the bundled Astronomy Engine. See [Weather journal](docs/weather-journal.md) for provider limits, installation and validation.

`/calculator/` brings the same paper and playful motion to everyday arithmetic, scientific functions, offline unit conversions and a private scratchpad. It has its own home-screen icon and works offline after setup. See [Calculator journal](docs/calculator-journal.md) for arithmetic conventions, installation and validation.

`/archive/portfolio/` is a standalone document in `app/archive/portfolio.html`, served by a resource route with assets in `public/archive/portfolio/`. Its homepage markup was rendered from the original React homepage before replacement; its stylesheet, original images, and theme switch are local to that document. It does not mount inside the new application's DOM and does not load the new site's JavaScript or styles. Navigation uses full document links. Its writing link now points to the digital garden.

`/startpage` and `/drinks` remain separate projects with their own legacy layout and route styles. The first Gatsby portfolio remains linked at https://doms-old-site.netlify.app/.

## Publishing and writing

All writing links point to https://domogami.github.io/. Local blog/admin routes, Editor.js, Prisma, image-upload functions, and application AWS/S3 dependencies have been removed. Old blog and admin URLs return 404. No database or AWS credentials are required.

Netlify uses its maintained React Router Vite adapter, with `npm run build` and `build/client` as the publish directory. The previous custom Remix function is retired. This code change does not delete any externally provisioned AWS resources or change Netlify account environment variables.

## Release gate

Dom approved the redesign for release on September 20, 2026. No publish command is included in the validation workflow. See [migration and release](docs/migration-and-release.md) for deferred account-level cleanup and publishing checks.
