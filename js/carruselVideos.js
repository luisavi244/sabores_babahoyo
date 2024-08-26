function scrollLeft() {
    const container = document.querySelector('.videos');
    container.scrollBy({ left: -300, behavior: 'smooth' });
}

function scrollRight() {
    const container = document.querySelector('.videos');
    container.scrollBy({ left: 300, behavior: 'smooth' });
}
