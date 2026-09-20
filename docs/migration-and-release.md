# Migration and release handoff

Status: **Dom approved committing and pushing the full redesign on September 20, 2026. Production deployment verification remains a separate step.**

## Framework migration

The old Remix setup has been replaced by React Router 8 framework mode, React 19, Vite 8 and Netlify's React Router adapter v4. The exact resolved versions live in `package-lock.json`; use `npm ci` for repeatable installs. `.nvmrc` and Netlify select Node 24. The package requires at least Node 22.22.

- Explicit route configuration: `app/routes.ts`.
- Default framework client/server entry points replace the custom Remix entries.
- Vite plugin handles React Router build output and the Netlify server function.
- `build/client` is the publish directory; `build/server/index.js` is the local server build.
- `npm run check:build` imports the generated Netlify function and checks routing/static-asset configuration.
- Unregistered duplicate nested route files have been removed; the retained project entries are the dotted filenames in `app/routes/`.
- Source formatting is checked. Archived HTML/assets and generated legacy CSS are deliberately excluded.

References: [Netlify React Router setup](https://docs.netlify.com/build/frameworks/framework-setup-guides/react-router/) and [React Router 8 support](https://www.netlify.com/changelog/2026-06-18-react-router-8-support/).

## Routes and legacy isolation

| URL                                      | Behavior                                           |
| ---------------------------------------- | -------------------------------------------------- |
| `/`                                      | Notebook portfolio                                 |
| `/archive/portfolio/`                    | Original homepage UI, standalone resource document |
| `/startpage`                             | Retained startpage, legacy layout/styles           |
| `/drinks`                                | Retained drinks project, legacy layout/styles      |
| `/blog`, `/blog/*`, `/admin`, `/admin/*` | 404, with garden recovery link                     |
| `/.netlify/functions/uploadImage`        | Retired; local application returns 404             |
| Other unknown paths                      | 404                                                |

The archive uses `app/archive/portfolio.html` and `public/archive/portfolio/`. Its local stylesheet, images and theme script never load into the notebook. Use normal document links across this boundary. The much older first site remains an external Netlify link.

## Data and services

There is **no database migration to run** for the replacement app. The Prisma schema/client, local blog persistence, Editor.js, admin routes, S3 integration, upload handler and application AWS dependencies are removed. The new app requires no secrets or environment variables. Existing local `.env` is ignored and untouched; no values belong in review documents.

This is code retirement, not cloud resource deletion. Before deleting any old hosted data, preserve whatever blog content/assets you want. No AWS buckets, IAM identities, databases, or Netlify account variables were inspected or deleted during this local handoff. Their inventory and decommissioning need a separate authorized account-level pass; do not assume removing source code stops billing or revokes credentials.

Netlify's generated function excludes `/.netlify/*`; the absence of the old upload function must be verified on the real deployment after release. A local 404 alone does not establish the state of an existing hosted function.

## Local commands

```sh
npm ci
npm run dev
# In a separate check session:
npm run check
npm test
npm audit
```

`npm run check` runs formatting, type generation/typechecking, production build and deployment-artifact checks. Browser tests use local Chrome. In CI they use Playwright's bundled Chromium, installed by the workflow. Tests start a production server if port 3000 is free; locally an existing server may be reused, so restart it after rebuilding to avoid testing stale modules.

To preview the release candidate:

```sh
npm run build
PORT=3000 npm start
```

No deployment command is part of these scripts or the check workflow. GitHub checks run on push.

## Before publishing

- [x] Dom approved the current redesign and writing for release.
- [x] Apply approved text edits; rerun `npm run check` and `npm test`.
- [x] Review the diff and included files; keep environment files, generated output and test artifacts out of the commit.
- [ ] Confirm live Netlify project build settings are `npm run build`, `build/client`, Node 24, with no stale custom function/plugin overrides. Repository settings are prepared; account settings were not changed.
- [x] Commit/push authorized by Dom. A push to a connected production branch may publish automatically.
- [ ] After release, verify real-host SSR, assets, archive navigation, retired URLs, anchors, contact mail link and mobile menu.
- [ ] Schedule a separate old-infrastructure cleanup once content backups and resource ownership are confirmed.

## Rollback

Until publishing, the live site is unaffected. After a future release, Netlify can restore the prior successful deployment. Keep the repository's old history and any content backups; the archive route preserves the landing UI only, not the old blog/admin service. Do not restore public credentials or revive the retired editor to roll back visual changes.

## Verification record

See [verification.md](verification.md) for the final local checks and their limits. Production account configuration and post-deploy behavior are intentionally not represented as locally verified.
