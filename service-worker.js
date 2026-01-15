// Simple service worker for offline support for the improved STEP courses site
// Bump cache name to force update of cached assets when styling changes.
const CACHE_NAME = 'ayed-step-courses-v3-1';
const URLS_TO_CACHE = [
  '/',
  '/index.html',
  '/intensive.html',
  '/comprehensive.html',
  '/referral.html',
  '/level-test.html',
  '/privacy.html',
  '/return.html',
  '/style.css',
  '/script.js',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  '/hero.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(URLS_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});