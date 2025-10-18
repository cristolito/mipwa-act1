const CACHE_NAME = 'notas-pwa-v1';
const ARCHIVOS_A_CACHEAR = [
    '/',
    '/index.html',
    '/styles.css',
    '/app.js',
    '/manifest.json'
];
// Seguidamente vamos a instalar el service worker dentro del navegador y vamos a mantener
// los archivos “cacheados”
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(ARCHIVOS_A_CACHEAR);
            })
    );
});
// Mientras nos encontremos dentro de la red, vamos a interceptar las peticiones de la misma,
// utilizando fetch
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(respuesta => {
                return respuesta || fetch(event.request);
            })
    );
});
