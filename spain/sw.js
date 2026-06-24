/* Service worker for ¡Vámonos! — Familia España
   Strategy: network-first for the page (so the family always sees the latest
   itinerary when online), cache fallback when offline. Static assets are
   cache-first and refreshed in the background. Bump CACHE on every deploy. */
const CACHE = 'spain-trip-v3';
const ASSETS = [
  './', './index.html', './manifest.json',
  './apple-touch-icon.png', './favicon-32.png', './favicon-16.png', './favicon.ico',
  './icon-512.png', './icon-512-maskable.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => Promise.all(
      ASSETS.map(a => c.add(a).catch(() => null))   // never let one missing asset fail install
    ))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;

  const isNav = req.mode === 'navigate' ||
    (req.headers.get('accept') || '').includes('text/html');

  if (isNav) {
    // network-first: fresh planner when online, cached when offline
    e.respondWith(
      fetch(req).then(res => {
        // only cache a genuine same-origin 200 — never a captive portal, 404, 5xx or redirect
        if (res && res.ok && res.type === 'basic') {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(req, clone));
        }
        return res;
      }).catch(() => caches.match(req).then(r => r || caches.match('./index.html')))
    );
    return;
  }

  // static assets: cache-first, revalidate in background
  e.respondWith(
    caches.match(req).then(cached => {
      const network = fetch(req).then(res => {
        if (res && res.status === 200 && req.url.startsWith(self.location.origin)) {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(req, clone));
        }
        return res;
      }).catch(() => cached);
      return cached || network;
    })
  );
});
