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
   
   if(event.request.url.includes('main.jpg')) {
    const nuevaImagen = fetch('img/main-patas-arriba.jpg');
    event.respondWith(nuevaImagen);
   }
   */
   /*
   Con este código gestionamos los errores del evento de las peticiones
   Hemos escrito sin querer main-2.jpg en el html y ahora debemos manejar
   el error

   En este caso en concreto, estamos manejando los errores 404, que son errores
   que el .catch no recoge, así que debemos manejarlos con el .then

   Para poder manejar los errores, el .then debe retornar un valor
   Y para poder manejar los errores, primero debemos cogerlos. Para ello
   nos centraremos en el status de la respuesta, si este es falso es que la
   petición ha fallado, así que es la mejor manera de recoger los errores
   */
   // con esta respuesta del evento fetch, el service worker gestiona todas las
   // peticiones que entran en la aplicación
    event.respondWith(
        fetch(event.request)
            .then(resp => {
                /*
                es importante anotar que este .then solo manejará las imágenes
                en caso de que el archivo css esté mal indicado, este error no 
                lo manejará
                */
                if(resp.ok) {
                    return resp;
                } else {
                    return fetch('img/main.jpg');
                }
                
            })
    );
});