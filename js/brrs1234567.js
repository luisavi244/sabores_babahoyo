let pagado = false;

function actualizarEstado() {
    const elementoPendiente = document.querySelector('.pendiente');
    if (pagado) {
        document.body.style.overflow = "auto";
        document.body.style.position = "static";
        elementoPendiente.style.display = 'none';
    } else {
        document.body.style.overflow = "hidden";
        document.body.style.position = "fixed";
        elementoPendiente.style.display = 'flex';
    }
}

function verificarEstadoPago() {
    fetch('estado-pago.json')
        .then(response => response.json())
        .then(data => {
            pagado = data.pagado;
            actualizarEstado();
        })
        .catch(error => console.error('Error al cargar el estado de pago:', error));
}

window.onload = verificarEstadoPago;