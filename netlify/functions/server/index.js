const path = require('path');
const fs = require('fs/promises');
const { createRequestHandler } = require('@netlify/remix-adapter');

const PROJECT_ROOT = path.resolve(__dirname, '../../..');
const BUILD_DIR = path.join(PROJECT_ROOT, 'netlify');
const PUBLIC_DIR = path.join(PROJECT_ROOT, 'public');
const CONTENT_TYPES = {
  '.css': 'text/css; charset=utf-8',
  '.ico': 'image/x-icon',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

function purgeRequireCache() {
  // purge require cache on requests for "server side HMR" this won't let
  // you have in-memory objects between requests in development,
  // netlify typically does this for you, but we've found it to be hit or
  // miss and some times requires you to refresh the page after it auto reloads
  // or even have to restart your server
  for (const key in require.cache) {
    if (key.startsWith(BUILD_DIR)) {
      delete require.cache[key];
    }
  }
}

function getRawPath(event) {
  let rawPath = event.path;
  const searchParams = new URLSearchParams();
  const queryParams = event.multiValueQueryStringParameters || {};

  for (const key of Object.keys(queryParams)) {
    const values = queryParams[key];
    if (!values) continue;
    for (const val of values) {
      searchParams.append(key, val);
    }
  }

  const rawQuery = searchParams.toString();
  if (rawQuery) rawPath += `?${rawQuery}`;
  return rawPath;
}

function createNetlifyRequest(event) {
  const requestUrl =
    process.env.NODE_ENV === 'development'
      ? `http://${event.headers.host}${getRawPath(event)}`
      : event.rawUrl;

  const headers = new Headers();
  const headerValues = event.multiValueHeaders || {};
  for (const [key, values] of Object.entries(headerValues)) {
    if (!values) continue;
    for (const value of values) {
      headers.append(key, value);
    }
  }

  const init = {
    method: event.httpMethod,
    headers,
  };

  if (event.httpMethod !== 'GET' && event.httpMethod !== 'HEAD' && event.body) {
    init.body = event.isBase64Encoded
      ? Buffer.from(event.body, 'base64')
      : event.body;
  }

  return new Request(requestUrl, init);
}

function getPathnameFromValue(value) {
  if (!value || typeof value !== 'string') return null;

  if (value.startsWith('/')) {
    return value.split('?')[0];
  }

  try {
    return new URL(value).pathname;
  } catch {
    return null;
  }
}

function getRequestPathname(event) {
  const headers = event.headers || {};
  const originalPathCandidates = [
    event.path,
    headers['x-original-url'],
    headers['x-original-uri'],
    headers['x-nf-original-path'],
    headers['x-forwarded-uri'],
    headers['x-rewrite-url'],
  ];

  for (const candidate of originalPathCandidates) {
    const pathname = getPathnameFromValue(candidate);
    if (!pathname || pathname === '/.netlify/functions/server') continue;
    return pathname;
  }

  const rawPathname = getPathnameFromValue(event.rawUrl);
  if (rawPathname) return rawPathname;

  const host = headers.host || headers.Host || 'localhost';
  try {
    return new URL(`http://${host}${getRawPath(event)}`).pathname;
  } catch {
    return '/';
  }
}

function resolvePublicBuildPath(pathname) {
  if (!pathname.startsWith('/build/')) return null;

  const relativePath = path.posix.normalize(pathname).replace(/^\/+/, '');
  if (relativePath.startsWith('..')) return null;

  const filePath = path.join(PUBLIC_DIR, relativePath);
  if (!filePath.startsWith(`${PUBLIC_DIR}${path.sep}`)) return null;

  return filePath;
}

async function maybeServeStaticBuildAsset(event) {
  const pathname = getRequestPathname(event);
  const filePath = resolvePublicBuildPath(pathname);
  if (!filePath) return null;

  try {
    const body = await fs.readFile(filePath);
    const extension = path.extname(filePath).toLowerCase();
    const contentType = CONTENT_TYPES[extension] || 'application/octet-stream';

    return {
      statusCode: 200,
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable',
        'Content-Type': contentType,
      },
      body: body.toString('base64'),
      isBase64Encoded: true,
    };
  } catch {
    return null;
  }
}

async function createNetlifyResponse(response) {
  const multiValueHeaders = {};
  response.headers.forEach((value, key) => {
    if (!multiValueHeaders[key]) {
      multiValueHeaders[key] = [];
    }
    multiValueHeaders[key].push(value);
  });

  return {
    statusCode: response.status,
    multiValueHeaders,
    body: await response.text(),
    isBase64Encoded: false,
  };
}

async function handle(event, context) {
  if (
    process.env.NODE_ENV === 'development' &&
    event.path?.startsWith('/build/')
  ) {
    console.log(
      `[asset-debug] cwd=${process.cwd()} projectRoot=${PROJECT_ROOT} event.path=${event.path} rawUrl=${event.rawUrl}`
    );
  }

  if (event.path === '/.well-known/appspecific/com.chrome.devtools.json') {
    return {
      statusCode: 204,
      headers: {
        'Cache-Control': 'no-store',
      },
      body: '',
    };
  }

  const staticBuildAsset = await maybeServeStaticBuildAsset(event);
  if (staticBuildAsset) return staticBuildAsset;

  if (process.env.NODE_ENV !== 'production') {
    purgeRequireCache();
  }

  const requestHandler = createRequestHandler({
    build: require('./build'),
  });
  const request = createNetlifyRequest(event);
  const response = await requestHandler(request, context);
  return createNetlifyResponse(response);
}

exports.handler = handle;
