// en el service worker no se suele escribir lógica del programa, sino que se emplea
// para eventos que esperan una determianda acción en la página web

// este evento está atento a una petición http
self.addEventListener('fetch', (event) => {

    // de esta forma podemos manejar el evento fetch
    if(event.request.url.includes('.jpg')) {
        console.log(event.request.url);

        // así podemos manipular el enseñar la imagen o no con el service worker
        // esta es la versión de la petición con el enlace
        const fotoReq1 = fetch('img/main.jpg');
        // esta es la versión de la petición con el url que recuperamos
        const fotoReq2 = fetch(event.request.url);
        // y otra alternativa es la petición completa
        const fotoReq3 = fetch(event.request);
        // todas estas versiones son correctas a la hora de trabajar con las peticiones
        // en el service worker
        event.respondWith(fotoReq3);
    }
});