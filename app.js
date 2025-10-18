// Por último, vamos a “registrar” todos estos movimientos realizados en el Service Worker.
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
        .then(() => console.log('Service Worker registrado'))
        .catch(error => console.error('Fallo en el registro', error));
}