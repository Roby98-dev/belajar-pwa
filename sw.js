self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./assets/css/main-front.css", "./images-icons/icon_192.png"]);
        })
    );
});

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});