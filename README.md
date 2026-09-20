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

`/archive/portfolio/` is a standalone document in `app/archive/portfolio.html`, served by a resource route with assets in `public/archive/portfolio/`. Its homepage markup was rendered from the original React homepage before replacement; its stylesheet, original images, and theme switch are local to that document. It does not mount inside the new application's DOM and does not load the new site's JavaScript or styles. Navigation uses full document links. Its writing link now points to the digital garden.

`/startpage` and `/drinks` remain separate projects with their own legacy layout and route styles. The first Gatsby portfolio remains linked at https://doms-old-site.netlify.app/.

## Publishing and writing

All writing links point to https://domogami.github.io/. Local blog/admin routes, Editor.js, Prisma, image-upload functions, and application AWS/S3 dependencies have been removed. Old blog and admin URLs return 404. No database or AWS credentials are required.

Netlify uses its maintained React Router Vite adapter, with `npm run build` and `build/client` as the publish directory. The previous custom Remix function is retired. This code change does not delete any externally provisioned AWS resources or change Netlify account environment variables.

## Release gate

Dom approved the redesign for release on September 20, 2026. No publish command is included in the validation workflow. See [migration and release](docs/migration-and-release.md) for deferred account-level cleanup and publishing checks.
