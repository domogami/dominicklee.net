# Notebook design system

The portfolio is a personal notebook: structured writing, deliberate spacing, paper folds, and occasional handwritten annotations. The grid is the organizing principle, not a texture placed arbitrarily behind text.

## Ownership and isolation

- `app/components/notebook/Notebook.tsx`: page composition, header, navigation, contact and motion state.
- `NotebookDrawings.tsx`: banners, handwritten notes, plant, timeline, letter flight and social links.
- `Crane.tsx`: shared vector facets traced from the supplied crane animation. Keep the header and hero geometry identical.
- `HobbyTagline.tsx`: rotating hobbies, measured text width and erase/write timing.
- `app/styles/notebook.css`: scoped new-site styles. Prefix component selectors with `.notebook`; root-only selectors use `:has(.notebook)`.
- The archive is an independent HTML document. Never import archive CSS, scripts or theme state into the notebook.
- `/startpage` and `/drinks` use `legacy-layout.tsx` and the existing legacy stylesheet. Keep changes there separate from notebook styling.

## Palette

| Role       | Value     | Use                                       |
| ---------- | --------- | ----------------------------------------- |
| Paper      | `#efe7d7` | Main paper surface, pale banner faces     |
| Ink        | `#252b2e` | Body copy and dark garden banner          |
| Teal       | `#0e7c79` | Hero illustration panel and Now & then    |
| Mint       | `#43d0c1` | Handwritten index and contact annotations |
| Charcoal   | `#2b3034` | Header, footer and sticky-header backing  |
| Terracotta | `#a34e36` | Rotating hobby and plant pot outline      |
| Soft green | `#d5e3cd` | Post-it and illustrative paper fill       |

Use existing CSS variables (`--paper`, `--ink`, `--teal`, `--mint`, `--grid`, `--gutter`) rather than adding close-but-different shades. Colored handwriting is an accent; regular copy stays high contrast.

## Typography

| Family        | Role                                                   |
| ------------- | ------------------------------------------------------ |
| Poppins       | Name, brand and structural display text                |
| Spline Sans   | Body copy                                              |
| IBM Plex Mono | Navigation, dates/stages, folios and small labels      |
| Kalam Bold    | Banner text, project headings and timeline headings    |
| Caveat        | Informal notes, crane caption, index and hobby tagline |

Fonts are served from `public/fonts/`. Original WOFF2 filenames from the supplied mock are retained; licenses and provenance are listed in [assets.md](assets.md).

Kalam's ink sits high in its line box. `--kalam-baseline: .12em` provides an optical correction on banner labels and headings. Move the ink, not the row or background grid. Do not rotate the header's “— index” or bring back its wavy hover underline.

## Grid and spacing

- Grid pitch and main copy line height: **32px**. Text sits between rows of dots, not on the dots.
- Standard section padding: **64px**; page gutter: `clamp(24px, 5vw, 80px)`; inner width: **1440px** maximum.
- Use 32px multiples for text-bearing vertical spacing. Illustration details can use smaller increments.
- Dot leaders are 2px tall, with a 15px top margin: their centers sit 16px into the row. Keep their grid phase intact when changing typography.
- Keep text and controls stationary during parallax. The white hero is an intentional exception to static grid backgrounds, requested after the initial design. The teal hero dots drift by up to 90px in either direction (roughly 30px of relative movement over an ordinary 300px desktop scroll), while the crane moves at a different depth by at most 3.5px. White hero dots move 12px per 100px scrolled past the panel top, capped at 80px; at the top and in quiet mode they return to the original grid position. The key stays still. Progress is normalized to the panel passing through the viewport, including on mobile.
- Desktop header occupies a stable 96px layout slot. Over the first 32px of scrolling, its visible height reduces to 64px. The sticky backing stays charcoal to prevent light flashes. Mobile header remains 80px.
- Section anchor offsets are 88px desktop and 104px mobile.
- Main responsive changes happen at 1100px and 760px; a 360px adjustment protects the compact brand. Check at 320, 390, 768, 1024, 1440 and 1920px.

## Components

### Headings and paper

Standard banners are notched strips. “Now & then” uses the layered ribbon: draw tails and folds first, then the front panel. Its front face has a subtle `0 2px 1.5px` dark teal shadow to separate it from the tails. Keep shadows restrained.

The common-thread post-it uses the reviewed rabbit-hole wording. SNAP75 polaroids have no tape; the second photo comes forward on hover, activation, tap or a horizontal swipe in either direction. Swiping loops through both cards with a 480ms slide-and-tuck animation, disabled when motion is quiet. Swipes preserve vertical page scrolling and pinch zoom; a completed swipe swaps once without triggering a second tap. Provide useful photo alt text and fixed aspect ratios. “Build one for your desk” links to the official nullbits SNAP page; swapping photos stays on the photo stack.

### Garden

The introduction and link stay in the left column; the link always sits below the paragraph. The plant is right-aligned with the section. On mobile, the paragraph spans both columns and the plant sits beside the link. Do not move the link to the far side of a wide screen.

### Journal notation

| Symbol | Personal label     | Meaning                   |
| ------ | ------------------ | ------------------------- |
| •      | on my list         | Actionable task           |
| ×      | made & loved       | Completed task            |
| ○      | a little happening | Dated event               |
| –      | worth a scribble   | Note, observation or idea |
| >      | carried forward    | Migrated task             |

There is deliberately no scheduled-task symbol. Arrows are not generic markers for ongoing work. Garden articles use note dashes. The key links to the [Bullet Journal definitions](https://bulletjournal.com/blogs/faq/what-is-rapid-logging-understand-rapid-logging-bullets-and-signifiers).

## Motion

- Hero crane: outline and facet-fill sequence, replayable by button. Header crane: fully visible initially; replay only on hover/focus, about 1.3 seconds including stagger.
- Banner: 800ms outline, 450ms fill starting at 750ms, letters afterward.
- Handwritten lettering: 70ms reveal per character, 75ms stagger. Complete one letter before starting the next; preserve whole-word wrapping. This is a clipped type reveal, not a literal pen-path tracing engine.
- Hobbies: 4200ms hold, 380ms erase, 650ms rewrite. Only the hobby changes; it is left-aligned after “Currently distracted by”. Measure Caveat after font loading and reserve enough width for the longest hobby so it stays on one line.
- Plant: staggered stem, leaves and terracotta pot outlines, followed by soft fills, finishing around 2.4 seconds. Hover, click, tap, or activate the plant with Enter/Space to replay; the replay still respects quiet/reduced-motion settings.
- Timeline: each visible milestone draws its line/node and heading, then reveals details. No invented dates.
- Contact: entire invitation is one mail link. The letter folds and follows a four-second curved flight on hover/focus. The separate pointer draws last (2800ms delay, 750ms draw) and stops before the paper.
- Social links: dashed sketches become outlined, filled labels on hover/focus. All links retain a visible keyboard focus ring. A small mint dot and `aria-current="location"` identify the section being read in both navigation layouts; the handwritten index is active at the hero. This follows scroll position, not just the URL hash.

Respect both `prefers-reduced-motion` and the footer's session-only motion control. Quiet mode must expose complete text and drawings, not leave invisible animation starting states. Initial HTML also contains complete artwork if JavaScript is unavailable.

## Changing the design

Keep copy changes in the components and metadata. Use [writing-review.md](writing-review.md) before publishing. Run `npm run check` and `npm test` after structural edits. The browser suite checks grid alignment, narrow screens, menu focus, archive isolation, hobbies, header behavior and contact semantics. Manually inspect motion, broad/zoomed-out layouts, and the final appearance; tests cannot decide whether a drawing feels natural.

## Folios

There is one global destination index in `app/components/notebook/pageIndex.ts`. See [page-index.md](page-index.md) for the mapping. The registry owns the number and canonical link; render labels with `folio(key)` and links with `pageIndex[key].href`. Every displayed reference carries `data-page` for consistency checks.

Never derive numbers from array position or restart numbering within a section. New destinations receive the next unused number. Reordering the layout does not renumber them. A garden article and its related repository are different destinations and receive different numbers. Banner variants remain explicit props, independent of folios.
