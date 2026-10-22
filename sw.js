/* 모아장부 오프라인용. 앱을 고치면 VERSION을 올리세요. 장부 데이터는 여기서 다루지 않아요(브라우저 저장소에 있음). */
const VERSION = "moajangbu-v1";
const FILES = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./icon-maskable-512.png", "./apple-touch-icon.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) {
    // 글꼴: 한 번 받은 뒤에는 오프라인에서도 쓰기
    if (/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)) {
      e.respondWith(caches.open(VERSION + "-fonts").then(c => c.match(req).then(hit => hit || fetch(req).then(res => { c.put(req, res.clone()); return res; }))));
    }
    return;
  }
  if (req.mode === "navigate") {
    // 새 버전이 있으면 받고, 인터넷이 없으면 저장된 화면
    e.respondWith(fetch(req).then(res => { caches.open(VERSION).then(c => c.put("./index.html", res.clone())); return res; }).catch(() => caches.match("./index.html")));
    return;
  }
  e.respondWith(caches.match(req).then(hit => hit || fetch(req)));
});
