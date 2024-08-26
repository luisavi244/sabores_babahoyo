const banner = document.getElementById("baner_introduccion");

const imagenes = [
    '/img/baner/baner.jpg',
    '/img/baner/baner2.jpg',
    '/img/baner/baner3.jpeg',
    '/img/baner/baner4.JPG'
];

function cambiarImagen() {
    const randomIndex = Math.floor(Math.random() * imagenes.length);
    const imagenSeleccionada = imagenes[randomIndex];
    
    // Añade un pequeño retraso antes de cambiar la imagen para hacer la transición más evidente
    setTimeout(() => {
        banner.style.backgroundImage = `linear-gradient(to top, rgb(255, 255, 255), rgba(67, 233, 75, 0.596)), 
                                         url(${imagenSeleccionada})`;
    }, 600); // Este retraso es opcional, pero puede ayudar a la transición visual
}

// Cambia la imagen cada 1.5 segundos
setInterval(cambiarImagen, 10000);

// Cargar la primera imagen al cargar la página
cambiarImagen();