const path = require('path');
const { createRequestHandler } = require('@netlify/remix-adapter');

const BUILD_DIR = path.join(process.cwd(), 'netlify');

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
  if (event.path === '/.well-known/appspecific/com.chrome.devtools.json') {
    return {
      statusCode: 204,
      headers: {
        'Cache-Control': 'no-store',
      },
      body: '',
    };
  }

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
