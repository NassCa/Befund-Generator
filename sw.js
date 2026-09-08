/* Service Worker für den Befundgenerator.
   Muss im selben Verzeichnis liegen wie index.html und über HTTPS ausgeliefert werden.
   Bei jeder neuen Version der HTML-Datei die Zahl in CACHE erhöhen. */
const CACHE = "befund-v1";
const DATEIEN = ["./", "./index.html"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(DATEIEN)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;

  // Netz zuerst, damit eine neue Fassung ankommt; Cache als Rückfallebene ohne Netz.
  e.respondWith(
    fetch(req)
      .then(res => {
        const kopie = res.clone();
        caches.open(CACHE).then(c => c.put(req, kopie));
        return res;
      })
      .catch(() => caches.match(req).then(hit => hit || caches.match("./index.html")))
  );
});
