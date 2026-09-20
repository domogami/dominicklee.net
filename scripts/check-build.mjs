import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

// Fail locally and in CI if the deployment adapter stops producing a handler.
const handlerPath = '.netlify/v1/functions/react-router-server.mjs';
await access('build/server/index.js');
await access('build/client/favicon.svg');
const { default: handler, config } = await import(
  pathToFileURL(resolve(handlerPath))
);
assert.equal(typeof handler, 'function');
assert.equal(config.path, '/*');
assert.equal(config.preferStatic, true);
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
