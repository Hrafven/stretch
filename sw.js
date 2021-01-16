importScripts('https://cdn.ampproject.org/sw/amp-sw.js');
AMP_SW.init({
    offlinePageOptions: {
        url: 'index.html',
        assets: []
    }
})

self.addEventListener('install', () => {
    self.skipWaiting();
});
// this.addEventListener('install', function(event) {
//     event.waitUntil(
//         caches.open('v1').then(function(cache) {
//             return cache.addAll([
//                 'index.amp.html',
//                 'index.html',
//                 'style.css',
//                 'app.js',
//                 'icon/android-icon-192x192.png',
//                 'icon/apple-icon-57x57.png',
//                 'icon/apple-icon-60x60.png',
//                 'icon/apple-icon-72x72.png',
//                 'icon/apple-icon-76x76.png',
//                 'icon/apple-icon-114x114.png',
//                 'icon/apple-icon-120x120.png',
//                 'icon/apple-icon-144x144.png',
//                 'icon/apple-icon-152x152.png',
//                 'icon/apple-icon-180x180.png',
//                 'icon/favicon-16x16.png',
//                 'icon/favicon-32x32.png',
//                 'icon/favicon-96x96.png',
//                 'icon/maskable_icon.png',
//                 'icon/splash.png',
//                 'manifest.webmanifest'
//             ]);
//         })
//     );
// });

// this.addEventListener('fetch', function(event) {
//     var response;
//     event.respondWith(caches.match(event.request).catch(function() {
//         return fetch(event.request);
//     }).then(function(r) {
//         response = r;
//         caches.open('v1').then(function(cache) {
//             cache.put(event.request, response);
//         });
//         return response.clone();
//     }).catch(function() {
//         return caches.match('index.html');
//     }));
// });