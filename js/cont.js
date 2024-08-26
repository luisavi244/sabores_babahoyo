document.addEventListener('DOMContentLoaded', () => {
    let contador1 = 0;
    let contador2 = 0;
    let contador3 = 0;

    let incremento1 = 240;
    let incremento2 = 1;
    let incremento3 = 1;

    const options = {
        root: null, // el viewport
        rootMargin: '0px',
        threshold: 0.5 // El 50% del elemento debe estar visible
    };

    const startCounters = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Iniciar los contadores solo si aún no han sido iniciados
                if (!entry.target.classList.contains('counted')) {
                    entry.target.classList.add('counted'); // Evitar que se inicie más de una vez

                    // contador 1
                    let interval_uno = setInterval(() => {
                        if (contador1 < 170578) {
                            contador1 += incremento1;
                            if (contador1 > 170578) {
                                contador1 = 170578;
                            }
                            document.getElementById("contador_uno").innerText = contador1;
                        } else {
                            clearInterval(interval_uno);
                        }
                    }, 1);

                    // contador 2
                    let interval_dos = setInterval(() => {
                        if (contador2 < 24) {
                            contador2 += incremento2;
                            if (contador2 > 24) {
                                contador2 = 24;
                            }
                            document.getElementById("contador_dos").innerText = contador2;
                        } else {
                            clearInterval(interval_dos);
                        }
                    }, 30);

                    // contador 3
                    let interval_tres = setInterval(() => {
                        if (contador3 < 53) {
                            contador3 += incremento3;
                            if (contador3 > 53) {
                                contador3 = 53;
                            }
                            document.getElementById("contador_tres").innerText = contador3;
                        } else {
                            clearInterval(interval_tres);
                        }
                    }, 30);
                }
            }
        });
    };

    const observer = new IntersectionObserver(startCounters, options);

    // Selecciona el contenedor de los contadores
    const contadorSection = document.querySelector('.contador');
    observer.observe(contadorSection);
});
