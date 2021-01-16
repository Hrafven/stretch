this.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('v1').then(function(cache) {
            return cache.addAll([
                '/stretch/app/',
                '/stretch/app/index.html',
                '/stretch/app/style.css',
                '/stretch/app/app.js',
                '/stretch/icon/',
                '/stretch/icon/android-icon-192x192.png',
                '/stretch/icon/apple-icon-57x57.png',
                '/stretch/icon/apple-icon-60x60.png',
                '/stretch/icon/apple-icon-72x72.png',
                '/stretch/icon/apple-icon-76x76.png',
                '/stretch/icon/apple-icon-114x114.png',
                '/stretch/icon/apple-icon-120x120.png',
                '/stretch/icon/apple-icon-144x144.png',
                '/stretch/icon/apple-icon-152x152.png',
                '/stretch/icon/apple-icon-180x180.png',
                '/stretch/icon/favicon-16x16.png',
                '/stretch/icon/favicon-32x32.png',
                '/stretch/icon/favicon-96x96.png',
                '/stretch/manifest.webmanifest'
            ]);
        })
    );
});

this.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
    );
});