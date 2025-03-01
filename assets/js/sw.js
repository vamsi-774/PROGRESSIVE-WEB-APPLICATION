const CACHE_NAME = 'anon-ecommerce-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/assets/css/style-prefix.css',
  '/assets/js/script.js',
  '/assets/images/logo/logo.svg',
  '/assets/images/banner-1.jpg',
  '/assets/images/banner-2.jpg',
  '/assets/images/banner-3.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});