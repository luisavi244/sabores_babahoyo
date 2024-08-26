// Seleccionar todos los elementos de la galería
const images = document.querySelectorAll('.galeria_container img');
const modal = document.getElementById("modal");
const modalImg = document.getElementById("imgAmpliada");
const captionText = document.getElementById("caption");
const closeModal = document.querySelector('.close');

images.forEach(img => {
    img.addEventListener('click', function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
});

// Cerrar el modal
closeModal.addEventListener('click', function() {
    modal.style.display = "none";
});
