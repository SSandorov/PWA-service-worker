// en el service worker no se suele escribir lógica del programa, sino que se emplea
// para eventos que esperan una determianda acción en la página web

// este evento está atento a una petición http
self.addEventListener('fetch', (event) => {
    event.respondWith(fetch(event.request));
});