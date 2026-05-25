self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('krevni-tlak-cache').then(cache => {
            return cache.addAll([
                './',
                './index.html',
                './html2pdf.bundle.min.js'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
