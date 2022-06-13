// Preguntamos al navegador si puede emplear el service worker
if(navigator.serviceWorker) {
    console.log('Podemos usar el service worker en este navegador');

    /*
    -   en caso de que se pueda emplear el service worker, lo instalamos en el navegador
        utilizamos la ruta absoluta poniendo el / sin puntos
        una vez instalado

    -   Tenemos que tener en cuenta que una vez que el service worker esté instalado en 
        el buscador, ya no ejecutará esta línea otra vez, y nuestra llamada en consola no
        se verá de nuevo
        Si quisiésemos volver a instalarlo, tendremos que irnos a 
        application --> service worker --> unregister

    -   Es muy importante que todas las páginas de nuestra web tengan la referencia a la 
        instalación del service worker, ya que nunca sabemos a través de qué página el 
        usuario entrará, y si guarda la web en su dispositivo, el service worker debe 
        estar instalado
    */
    navigator.serviceWorker.register('/sw.js');
}