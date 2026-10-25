/* Kenar Notları – offline support.
   Page and content: network first (so new talks show up), cached copy when offline.
   Fonts and icons: cache first. GitHub API calls are never touched. */
const V = "kenar-v1";
const SHELL = ["./", "index.html", "fonts.css", "manifest.webmanifest", "data/icerik.json",
  "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png"];

self.addEventListener("install", e => {
  e.waitUntil((async () => {
    const c = await caches.open(V);
    await c.addAll(SHELL);
    try {
      const css = await (await fetch("fonts.css")).text();
      const fonts = [...css.matchAll(/url\(([^)]+\.woff2)\)/g)].map(m => m[1]);
      await c.addAll(fonts);
    } catch (_) {}
    self.skipWaiting();
  })());
});

self.addEventListener("activate", e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== V) await caches.delete(k);
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== "GET" || url.origin !== self.location.origin) return;
  const fresh = req.mode === "navigate" || /\/(index\.html|data\/[^/]+\.json|sw\.js)$/.test(url.pathname) || url.pathname.endsWith("/");
  if (fresh) {
    e.respondWith((async () => {
      const c = await caches.open(V);
      try {
        const r = await fetch(req);
        if (r.ok) c.put(req.mode === "navigate" ? "index.html" : req, r.clone());
        return r;
      } catch (_) {
        return (await c.match(req.mode === "navigate" ? "index.html" : req, { ignoreSearch: true })) ||
               (await c.match("index.html")) || Response.error();
      }
    })());
    return;
  }
  e.respondWith((async () => {
    const c = await caches.open(V);
    const hit = await c.match(req, { ignoreSearch: true });
    if (hit) return hit;
    const r = await fetch(req);
    if (r.ok) c.put(req, r.clone());
    return r;
  })());
});
