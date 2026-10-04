import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

// Fail locally and in CI if the deployment adapter stops producing a handler.
const handlerPath = '.netlify/v1/functions/react-router-server.mjs';
await access('build/server/index.js');
const serverBuild = await readFile('build/server/index.js', 'utf8');
assert(
  !/\b(?:from\s*|import\s*\(\s*)['"]astronomy-engine['"]/.test(serverBuild),
  'The moon ephemeris must be bundled: Netlify cannot resolve its mixed ESM/CJS exports.'
);
await access('build/client/favicon.svg');
await access('build/client/images/notebook-preview.png');
for (const asset of [
  'manifest.webmanifest',
  'sw.js',
  'icon-192.png',
  'icon-512.png',
  'icon-maskable.png',
  'apple-touch-icon.png',
  'social.png',
]) {
  await access(`build/client/weather/${asset}`);
  await access(`build/client/calculator/${asset}`);
}
const { default: handler, config } = await import(
  pathToFileURL(resolve(handlerPath))
);
assert.equal(typeof handler, 'function');
assert.equal(config.path, '/*');
assert.equal(config.preferStatic, true);
for (const [pathname, marker] of [
  ['/', 'An open notebook'],
  ['/weather/', 'weather-journal'],
  ['/calculator/', 'calculator-journal'],
]) {
  const response = await handler(
    new Request(`https://dominicklee.net${pathname}`),
    {}
  );
  assert.equal(response.status, 200, `Server rendering failed: ${pathname}`);
  assert((await response.text()).includes(marker), `Missing page: ${pathname}`);
}
const pkg = JSON.parse(await readFile('package.json', 'utf8'));
for (const name of Object.keys({
  ...pkg.dependencies,
  ...pkg.devDependencies,
})) {
  assert(
    !/^(@aws-sdk\/|aws-sdk$|@prisma\/|prisma$|@editorjs\/|@remix-run\/)/.test(
      name
    ),
    `Retired dependency: ${name}`
  );
}
console.log(
  'Netlify handler imports successfully; static assets and retired dependency checks pass.'
);
