// en el service worker no se suele escribir lógica del programa, sino que se emplea
// para eventos que esperan una determianda acción en la página web

// este evento está atento a una petición http
self.addEventListener('fetch', (event) => {
    /*
    de esta forma podemos manejar el evento fetch
    if(event.request.url.includes('.jpg')) {
        console.log(event.request.url);

        así podemos manipular el enseñar la imagen o no con el service worker
        esta es la versión de la petición con el enlace
        const fotoReq1 = fetch('img/main.jpg');
        esta es la versión de la petición con el url que recuperamos
        const fotoReq2 = fetch(event.request.url);
        y otra alternativa es la petición completa
        const fotoReq3 = fetch(event.request);
        todas estas versiones son correctas a la hora de trabajar con las peticiones
        en el service worker
        event.respondWith(fotoReq3);
    }
    */
    /*
    Empleando la estructura para manejar el evento fetch, vamos a modificar el
    archivo de los estilos
    Es importante saber que por norma general, emplearemos el caché del navegador
    para modificar el contenido, sin embargo, es importante saber que se puede
    modificar a mano también, como haremos en este ejemplo
    
    if(event.request.url.includes('style.css')) {
        // la instancia Response() es el resultado de cualquier petición fetch
        const respuesta = new Response(`
        body {
            background-color: red !important;
            color: pink;
        }
        `, 
        // debemos especificar en los headers que la respuesta no es un texto plano,
        // sino que es un documento de css
        {
            headers: {
                'Content-Type': 'text/css'
            }
        });

        // devolvemos en respuesta al evento la variable con las modificaciones
        // oportunas
        event.respondWith(respuesta);
    }
    */
   /*
    Tarea:
    Interceptar la petición de la imagen main.jpg y modificar esta imagen a 
    main-patas-arriba.jpg
   */
   if(event.request.url.includes('main.jpg')) {
    const nuevaImagen = fetch('img/main-patas-arriba.jpg');
    event.respondWith(nuevaImagen);
   }
});