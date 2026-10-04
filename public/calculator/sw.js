/* Calculator-only offline shell. Never intercept the notebook or weather app. */
const CACHE = 'dom-calculator-shell-v1';
const SHELL = '/calculator/';
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) =>
        cache.addAll([
          SHELL,
          '/calculator/manifest.webmanifest',
          '/calculator/icon-192.png',
          '/calculator/icon-512.png',
          '/favicon.svg',
        ])
      )
      .then(() => self.skipWaiting())
  );
});
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((k) => k.startsWith('dom-calculator-shell-') && k !== CACHE)
            .map((k) => caches.delete(k))
        )
      )
      .then(() => self.clients.claim())
  );
});
self.addEventListener('message', (event) => {
  if (event.data?.type !== 'CACHE_ASSETS' || !Array.isArray(event.data.urls))
    return;
  const urls = [...new Set(event.data.urls)].slice(0, 80).filter((value) => {
    try {
      const url = new URL(value);
      return (
        url.origin === self.location.origin &&
        (url.pathname.startsWith('/assets/') ||
          url.pathname.startsWith('/fonts/'))
      );
    } catch {
      return false;
    }
  });
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) => Promise.allSettled(urls.map((url) => cache.add(url))))
  );
});
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.origin !== self.location.origin)
    return;
  if (
    event.request.mode === 'navigate' &&
    (url.pathname === '/calculator/' || url.pathname === '/calculator')
  ) {
    event.respondWith(
      fetch(event.request)
        .then(async (response) => {
          if (response.ok) {
            try {
              const cache = await caches.open(CACHE);
              await cache.put(SHELL, response.clone());
            } catch {
              /* A full cache must not break an online page. */
            }
          }
          return response;
        })
        .catch(() => caches.match(SHELL))
    );
    return;
  }
  if (
    ![
      '/assets/',
      '/fonts/',
      '/calculator/icon-',
      '/calculator/apple-touch-icon',
    ].some((prefix) => url.pathname.startsWith(prefix)) &&
    url.pathname !== '/favicon.svg'
  )
    return;
  event.respondWith(
    caches.match(event.request).then(
      (hit) =>
        hit ||
        fetch(event.request).then(async (response) => {
          if (response.ok) {
            try {
              const cache = await caches.open(CACHE);
              await cache.put(event.request, response.clone());
            } catch {
              /* Keep the network response usable if storage is full. */
            }
          }
          return response;
        })
    )
  );
});
