# Weather journal

`/weather/` is a separate, installable page of Dom’s notebook. It uses the existing Poppins, Lexend, Caveat and IBM Plex Mono fonts, a 32px dot grid, and the existing crane geometry. Its hand-drawn weather icons are SVG and CSS; there are no runtime image-generation services. Astronomy Engine calculates lunar phase locally, without another network request.

Forecasts sit directly on the dot paper without white panels. Temperatures, rain percentages, wind speeds and detail readouts use Caveat; rain/wind shortcuts pair simple lettering with small drawn icons. Light shading and hatched rain bars keep the illustrations connected to the notebook.

## What it does

- Current temperature, feels-like, high/low, wind, humidity, pressure, cloud cover and visibility.
- A compact forecast on Now switches between seven days and six hours at a time. Tap a forecast to update the illustrated sky; tap it again or Back to now to return to current conditions.
- All twenty-four hours fit on one temperature, rain-probability or wind graph. Drag or use arrow keys to select an hour; six readable forecast cards follow the selection, with paging through the day. See this sky opens its preview on Now.
- A seven-day high/low graph shares its selection with the daily details and Now preview. Daily previews explicitly show the day's high, low and aggregate conditions, without inventing an hourly temperature or feels-like reading. Seven daily details expand to ten; each day unfolds for precipitation, UV, wind and sunrise/sunset.
- Two-hour precipitation estimates at 15-minute intervals, clearly labeled as model output rather than radar.
- Modeled air quality, particulate concentrations and grass pollen where available.
- Sunrise, sunset, daylight progress, astronomically calculated moon phase, and a suggested two-hour outdoor window. The suggestion requires consecutive daylight hours, known rain/wind values and suitable conditions.
- Optional device location, city/postal search, six bookmarked places, US/metric measurements and local persistence.
- Paper switches at the selected place’s sunrise/sunset, including while the page stays open. Day/night overrides and reduced-motion support remain available.
- Individually traced clouds, rain, snow, fog, sunlight and a phase-correct moon. Touch and keyboard activate the same interactions.
- Official U.S. NWS alerts when coverage is available. A failed or unsupported lookup is never presented as “no alerts.”
- Offline app shell and up to five dated forecast snapshots. Nothing is silently described as live when offline or stale.

## Provider decision, researched October 3, 2026

There is no defensible universal “most accurate” provider. Accuracy depends on location, terrain, weather variable and forecast horizon. This app selects Open-Meteo for its regional-model selection and broad no-key coverage; it does not claim a forecast skill ranking.

| Provider                                                                           | Access and tradeoff                                                                                                                                                     | Decision                                                                                  |
| ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| [Open-Meteo](https://open-meteo.com/en/docs)                                       | No account/key for the noncommercial open-access service; regional and global models, hourly/daily/minutely data. Current values are model estimates.                   | Main forecast, plus its geocoding and CAMS air-quality endpoints.                         |
| [National Weather Service](https://www.weather.gov/documentation/services-web-api) | Free, no key currently; U.S. coverage, identifying User-Agent and reasonable unpublished limits.                                                                        | Official U.S. alerts, with a point lookup to establish coverage.                          |
| [MET Norway](https://api.met.no/doc/TermsOfService)                                | Free without a key; requires app identification, caching and a backend proxy. A useful global forecast alternative, but would add a second forecast normalization path. | Considered; not queried.                                                                  |
| [RainViewer](https://www.rainviewer.com/api/weather-maps-api.html)                 | No-key personal-use radar; the current endpoint documents two hours of historical imagery and zoom through level 7. Coverage varies.                                    | Considered; not loaded. Rain timing in this version is a forecast chart, not a radar map. |

Open-Meteo’s [free limits](https://open-meteo.com/en/pricing) are 600 calls/minute, 5,000/hour, 10,000/day and 300,000/month, without an uptime guarantee. Requests with more than ten variables can count as multiple calls. This rich forecast must not be budgeted as exactly one billable call. Free access is for **noncommercial use**; monetization or substantial public traffic needs a fresh terms/capacity review. The existing website hosting plan still applies.

The server coalesces requests with a bounded 100-entry in-memory cache: forecast 15 minutes, alerts 5 minutes, search 1 hour. HTTP cache headers also permit CDN caching. The browser reuses recent saved forecasts, refreshes every 15 minutes while visible, and refreshes on return/reconnection. There are no automatic retry loops. Coordinate requests are validated and rounded to three decimals. No API keys or environment variables are required.

## Attribution and data limits

The Details tab’s Sources & privacy disclosure links Open-Meteo, [CAMS air-quality data](https://open-meteo.com/en/docs/air-quality-api), GeoNames, NWS and the CC BY 4.0 license, and identifies rounding/illustration changes. Air-quality failures do not prevent the forecast from loading. Missing values remain missing, including rain and AQI; they never become a reassuring zero. Pollen availability is regional and seasonal.

Minutely precipitation is model data with geographic differences in resolution, including interpolation in some regions. Longer-range forecasts become less certain. Moon phase and illumination use the MIT-licensed [Astronomy Engine](https://github.com/cosinekitty/astronomy) ephemeris, bundled locally. The illuminated shape follows its calculated fraction and waxing/waning direction; the drawing mirrors in the southern hemisphere. Its upright composition does not model the local sky tilt or whether the Moon is above the horizon. The main sky, hourly icons and almanac share the same calculation, including the selected forecast hour. Primary phase regression dates come from the [U.S. Naval Observatory](https://aa.usno.navy.mil/calculated/moon/phases?date=2026-09-01&nump=8). This app does not provide radar imagery, background weather monitoring, severe-weather push notifications, native iOS widgets or Live Activities.

## Home-screen installation

After deploying over HTTPS, open `https://dominicklee.net/weather/` in Safari on iPhone or iPad. Choose **Share → Add to Home Screen** and enable **Open as Web App** if offered. The installed name is Weather, with a custom moon/cloud icon on dark dotted paper. Separate dark/light SVGs and 1024px PNGs are in `public/weather/`; regenerate the icon family with `python3 scripts/generate-app-icons.py`. Versioned installation links and worker cache v2 refresh the previous artwork. See [WebKit’s home-screen web app documentation](https://webkit.org/blog/13878/web-push-for-web-apps-on-ios-and-ipados/).

The manifest uses `/weather/` as its ID, start URL and scope. `/weather` redirects to the trailing slash so the service-worker scope includes the page. Safe-area padding accommodates the status bar and home indicator; the layout responds to available width for tablet split views and phone landscape.

The production-only service worker caches the shell, hashed scripts/styles and local fonts. It only controls `/weather/`, never the homepage. Forecast snapshots are separate timestamped local-storage records, expiring after 48 hours; alert responses are never stored offline. Offline reopening requires a completed first online load. Location permissions are requested only after opening Places and tapping Use my location. No account, analytics or cross-device sync is added.

`npm run dev` deliberately does not register a worker. Use `npm run build && npm start` to test installation and offline behavior. The worker cache version is in `public/weather/sw.js`; bump it if changing shell/cache policy. New hashed assets are cached after each online visit.

## Files and checks

- `app/routes/weather*.ts*`: page and same-origin resource endpoints.
- `app/weather/`: provider normalization, bounded caching, units, time handling, preferences and forecast state.
- `app/components/weather/`: journal, disclosures and illustrated skies.
- `app/styles/weather.css`: responsive weather presentation.
- `public/weather/`: manifest, worker, icon sources/PNGs and social artwork.
- `scripts/generate-weather-assets.py`: optional asset regeneration using fonttools and librsvg; not part of deployment.
- `tests/weather*.ts`: deterministic provider fixtures, interaction and responsive checks, edge cases, offline reopening and manifest/API validation.

Run `npm run check` and `npm test`. The weather browser tests cover widths 320–1440px. Live forecast, geocoding, air quality and the NWS coverage/alerts endpoints were also checked locally. Physical iOS home-screen installation must be checked on the deployed HTTPS URL; desktop browser emulation cannot establish that hardware-specific result. No publication occurs as part of these commands.

## Compact app layout

The viewport-sized shell has Now, Hours, Week and Details tabs. Now shows the place, a compact active-alert strip, the illustrated sky, current temperature, feels-like/high/low, rain/wind shortcuts, and a glanceable forecast. The week/hours switch sits directly above that forecast. Daily and hourly taps preview the selection in place; its context and Back to now stay visible above the drawing. The Hours graph replaces the long horizontal strip, with two-hour precipitation timing available in a sheet from its Rain timing button. Alerts open a full sheet with all provider instructions. Places, bookmarks and optional geolocation share one sheet; installation and appearance live in Settings. Detailed forecasts scroll inside their own panels, keeping the bottom navigation in place.

`PocketChrome.tsx` and `pocket-app.css` share the navigation, safe-area handling and hand-drawn crane with the calculator. The SVG sky draws individual paths in sequence, then fades in its color, following the notebook plant’s animation. Rain has a quiet repeating motion after the drawing completes. Tap the sky to replay. Reduced motion renders a complete, still drawing.

Home Screen apps use `100vh` only inside `(display-mode: standalone)`, avoiding WebKit's [installed-app viewport-height issue](https://bugs.webkit.org/show_bug.cgi?id=254868). Regular Safari retains `100dvh` for its expanding/collapsing browser controls. The status-bar and home-indicator insets remain inside the shared frame, with no additional bottom compensation. The standalone layout regression check simulates the undersized dynamic viewport and safe insets; physical iOS verification still requires the installed app.

`tests/pocket-apps.spec.ts` verifies that primary screens fit short mobile viewports, phone landscape and tablets, plus tab keyboard behavior, drawing timing and replay.

`tests/weather-forecast.spec.ts` covers forecast switching, linked hour/day previews, chart dragging and keyboard selection, missing data, truncated/expired forecasts and dates across time zones.

## Touch feedback and pen arrows

All notebook arrows use `SketchArrow.tsx` SVG strokes, including mobile forecast paging, undo, refresh and the raised city chevron. The shared root `TouchFeedback.tsx` provides short touch pulses, discrete graph-scrubbing ticks, calculator success/error patterns, and finish cues for explicitly replayed sky, plant, crane and photo animations. Finish cues use the actual `animationend` event. Ambient rain, hover and automatic page drawings never arm a cue. A new interaction, navigation, lost focus or hidden page clears pending cues; reduced motion and the shared Touch feedback preference keep them quiet. That preference persists across the notebook, weather and calculator.

Android browsers with [the Vibration API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/vibrate) can provide these custom patterns after a real touch. Browser policy, OS settings and hardware still determine whether a motor activates. iOS Safari does not expose this API. Actual visible [native switch controls](https://webkit.org/blog/15054/an-html-switch-control/) can provide browser-managed feedback; motion and Touch feedback settings use them when feedback is enabled. [WebKit blocks programmatically clicking a hidden switch or its label](https://github.com/WebKit/WebKit/commit/fc1ef83) to manufacture arbitrary haptics, so the production feedback module does not use that workaround. Desktop tests mock the motor API to verify timing, touch gating, cancellation and unsupported-browser behavior; they do not verify physical vibration on phones.

The linked [WebHaptics 0.0.6 source](https://github.com/lochie/web-haptics/blob/main/packages/web-haptics/src/lib/web-haptics/index.ts) still uses that programmatic label-click fallback, with [reports of failure on iOS 26.5](https://github.com/lochie/web-haptics/issues/38). A [different direct-tap approach](https://github.com/m1ckc3s/project-fathom) keeps native switch appearance, places a transparent rendered switch inside the visible button shape, and lets the real finger toggle it. Its author reports verification on a physical iPhone running iOS 26.5. Dom also confirmed the direct-tap sample works on his iPhone in Safari. This provides a single native tick per tap; it does not provide arbitrary delayed drawing-finish feedback or custom patterns.

`/studies/haptics` remains an isolated, unlinked, noindex comparison page for physical-phone testing. It compares a direct transparent target, a visible native switch, and the library's old scripted-label mechanism. The experiment uses no library, audio simulation, or Android motor calls; its counters only confirm events. `tests/haptics-study.spec.ts` checks real touch targeting, native appearance, clipping, keyboard behavior, and that test samples do not accidentally invoke the site's Android motor API.

`nativeTapTargets.ts` now applies that direct-touch method to buttons and disclosure summaries throughout the notebook, weather and calculator on touch browsers with native switches and no Vibration API. It adds transparent native targets in a separate layer, clipped to each actual control and its scroll panel. Real controls retain their accessible names, roles, focus and keyboard handlers; the native targets are excluded from the accessibility tree and tab order. Dialog targets live inside the open dialog's top layer. Touch feedback off, reduced motion, disabled/hidden controls and navigation remove or update the targets. Ordinary links keep their native preview/context menus, and the photo's swipe surface and forecast graph keep their pointer gestures. Android continues to use the existing patterns and animation-finish cues. `tests/native-tap.spec.ts` emulates feature detection to check targeting, single activation, caret editing, dialog focus, settings, resizing and graph access; it cannot verify a physical motor.
