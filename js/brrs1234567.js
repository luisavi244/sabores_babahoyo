// script.js

// Variable para controlar el estado de pago
let pagado = false;

// Función para activar el efecto borroso
function activarBlurr() {
    if (!pagado) {
        document.body.classList.add('blurr');
    }
}

// Función para desactivar el efecto borroso cuando se realiza el pago
function confirmarPago() {
    pagado = true;
    document.body.classList.remove('blurr');
}

// Aplicar el efecto borroso al cargar la página
window.onload = function() {
    activarBlurr();
    
    // Configurar un observador de mutaciones para monitorear cambios en la clase del body
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (!document.body.classList.contains('blurr') && !pagado) {
                activarBlurr(); // Re-aplicar el efecto si alguien intenta desactivarlo y no se ha pagado
            }
        });
    });

    // Configuración del observador
    const config = { attributes: true, attributeFilter: ['class'] };

    // Iniciar la observación
    observer.observe(document.body, config);
};

// Esta función se llamaría cuando recibas el pago
function realizarPago() {
    confirmarPago();
    // Aquí podrías añadir cualquier otra acción que quieras realizar después del pago
}
