# Calculator journal

`/calculator/` is a pocket calculator on the same paper as the notebook and weather journal. It uses the existing Poppins, Caveat, Kalam, Lexend and IBM Plex Mono fonts, dot grid, teal/sage palette and crane. It adds no runtime dependencies or third-party requests.

The working area sits directly on the dot paper. Numerals and expressions use the site's handwriting fonts; keys have individually drawn SVG pencil outlines, faint green operator shading and a small press animation. There are no white panels or raised plastic keys.

## Features

- Editable expressions, live answers, parentheses, percentages, undo, keyboard input and a tactile paper keypad.
- A separate scientific and memory sheet: powers, square roots, factorials, logarithms, trigonometry and inverse functions, with DEG/RAD modes.
- Seven offline unit converters: length, weight, temperature, area, volume, speed and time. Volume uses US customary measures.
- A scratchpad of the latest 40 answers, reusable results, clear/undo-clear, previous answer and calculator memory.
- Light/dark paper, automatic device appearance, optional animations, reduced-motion support, accessible labels and a settings dialog with focus restoration.
- Separate home-screen identity and offline cache; phone, tablet, narrow split-screen and desktop layouts. The small crane link sketches itself in the header.

## Arithmetic

`app/calculator/math.ts` tokenizes and parses a small, explicit expression language. It never evaluates JavaScript. Powers associate right to left: `2^3^2 = 512`; exponentiation precedes unary minus: `-2^2 = -4`. Implicit multiplication has the same precedence as explicit multiplication and division, processed left to right: `8/2(2+2) = 16`.

Percentages directly added to or subtracted from an amount are relative to that amount: `200 + 10% = 220`. Multiplication and division use the fractional value: `200 * 10% = 20`. An explicit product after a percentage is literal: `200 + 10% * 2 = 200.2`.

Calculations use JavaScript floating-point numbers, displaying up to 14 significant digits. They are not arbitrary-precision arithmetic. Expression length is capped at 256 characters; undefined real operations, overflow and factorials above 170 receive readable errors. Temperature conversion rejects values below absolute zero.

## Installation and storage

On an HTTPS deployment, open `/calculator/` in Safari, then **Share → Add to Home Screen** (and enable **Open as Web App** if offered). The revised icon has a handwritten display and four distinct arithmetic marks on dark dotted paper. Separate dark/light SVGs and 1024px PNGs are in `public/calculator/`; regenerate the icon family with `python3 scripts/generate-app-icons.py`. Versioned installation links and worker cache v2 refresh the previous artwork. Visit once online to cache the page, code and fonts before trying offline. Desktop browsers can also install the manifest. Localhost supports service workers for development; plain HTTP over a LAN does not.

Settings, the current expression, calculator memory and history are stored under `calculator-journal:v1` in this browser's local storage. They are not sent to a server or synced between devices. Browser storage can be cleared or evicted. The worker at `/calculator/sw.js` controls only `/calculator/`; weather has its own worker and cache. Full links back to the site and weather stay outside its offline navigation handling.

## Files and validation

- Route: `app/routes/calculator.tsx`; UI: `app/components/calculator/CalculatorJournal.tsx`; styling: `app/styles/calculator.css`.
- Source SVG, PNG icons, standalone manifest and worker: `public/calculator/`.
- `scripts/generate-calculator-assets.py` regenerates icons and social artwork with `fonttools[woff]` and `rsvg-convert`, using the existing licensed fonts. These tools are not app dependencies.
- `tests/calculator-model.spec.ts` checks parser semantics, domain errors and unit conversions. `tests/calculator.spec.ts` covers interactions, persistence, responsive layout and offline reloads in the production build.
- Run `npm run check` and `npm test`. Real-device Safari installation remains a device-level check; browser emulation does not verify iOS home-screen installation.

## Compact app layout

Calculate, Convert and History have separate bottom tabs. The main screen fits the full keypad in the available viewport, with scientific functions and memory in a dialog rather than extending the page. Selecting a scientific function or recalling memory returns to the calculation. Conversions retain their input across tab changes. History scrolls in its own panel; useful keyboard and arithmetic notes live in Settings. Repeated single-number previews are visually collapsed into one editable number.

Shared shell: `app/components/notebook/PocketChrome.tsx` and `app/styles/pocket-app.css`. `tests/pocket-apps.spec.ts` checks short phone screens, landscape, tablets, keyboard tab navigation and preserved converter state.

On desktop the calculator is centered in the available panel, with a 640px maximum working height. The number field reserves space for Caveat's overhanging final strokes, and single numbers and results reduce their font size to fit the available width. Long expressions remain editable in the normal scrolling text field. The expression field waits for saved state to finish loading before accepting edits. `tests/calculator-layout.spec.ts` checks tall desktop and short phone layouts, font ink metrics, and long number fitting.

Safari direct-touch feedback is shared with the notebook and weather through `TouchFeedback.tsx` and `nativeTapTargets.ts`; see [touch feedback details](weather-journal.md#touch-feedback-and-pen-arrows). This uses native ticks on iPhone button taps, while Android retains custom patterns and feedback on explicitly replayed drawing finishes.
