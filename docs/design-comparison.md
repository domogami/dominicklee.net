# Temporary design comparison

All review settings live in **`app/preview/config.ts`**. No history rewrite or full-site rollback is needed to choose a design.

- **Dom’s Idea** (`latest`): ongoing redesign in `app/components/notebook` and `app/styles/notebook.css`.
- **Ally’s Edit** (`mainline`): frozen mainline at `1a34ac880531a7094c92c395cac83ef98b2877cd`, stored in `app/preview/mainline`. Pushing new changes will not overwrite this baseline.

The header shows the active design. Clicking the control opens the other design in a fresh document, with only that design’s stylesheet. `/` serves `defaultDesign`; `/preview/mainline` serves the alternative and is marked noindex. Shared images/fonts remain unchanged.

## Finish the review or roll back the visual design

Edit `app/preview/config.ts`:

- Keep Dom’s Idea: `defaultDesign: 'latest'`, `enabled: false`.
- Keep Ally’s Edit: `defaultDesign: 'mainline'`, `enabled: false`.
- Reopen comparison: `enabled: true`.

Rebuild and deploy normally. Disabling comparison removes the header control, comparison CSS link, and preview route. The chosen design remains at `/`; the other source remains available for a reversible decision. Existing archive/project routes and unrelated work are unaffected.

## Permanently remove the comparison later

Once the decision is settled, import the chosen Notebook and its stylesheet directly in `app/routes/_index.tsx`. If choosing Ally’s Edit, move its frozen component files and stylesheet into the normal notebook locations first. Remove both DesignSwitch imports/usages, the conditional preview route and its config import, `app/routes/preview.mainline.tsx`, `app/components/notebook/DesignSwitch.tsx`, `app/styles/design-switch.css`, and the remaining `app/preview` directory. Remove the comparison-only browser test. Keep the separate original portfolio archive.

Run `npm run check` and `npm test` after cleanup. During review, browser tests assume Dom’s Idea is the default; update design-specific expectations if selecting Ally’s Edit permanently.
