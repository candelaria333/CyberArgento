document.addEventListener('DOMContentLoaded', function() {
    console.log("¡Bienvenido a CyberArgento!");

    // Cambiar color del encabezado al hacer scroll
    window.addEventListener('scroll', function() {
        let scrollPosition = window.scrollY;
        const header = document.querySelector('header');
        if (scrollPosition > 50) {
            header.style.backgroundColor = '#2c3e50';
        } else {
            header.style.backgroundColor = '#111';
        }
    });

    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const modal = document.getElementById("serviceModal");
    const closeBtn = document.querySelector(".close");

    function openModal(element) {
        var modal = document.createElement("div");
        modal.classList.add("modal");
    
        // Crear contenido para el modal
        var modalContent = document.createElement("div");
        modalContent.classList.add("modal-content");
    
        // Crear botón de cerrar
        var closeButton = document.createElement("span");
        closeButton.classList.add("close");
        closeButton.innerHTML = "&times;";
        closeButton.onclick = function() {
            modal.style.display = "none"; // Cerrar el modal
        };
    
        // Crear el título
        var title = document.createElement("h2");
        title.textContent = element.getAttribute("data-title"); // Título del servicio
    
        // Crear la descripción
        var description = document.createElement("p");
        description.textContent = element.getAttribute("data-description"); // Descripción
    
        // Crear el botón "Saber más"
        var saberMasButton = document.createElement("a");
        saberMasButton.classList.add("saber-mas-btn");
        saberMasButton.href = "https://wa.me/542657779173"; // Asegúrate de cambiar el número por el real
        saberMasButton.target = "_blank"; // Abrir en una nueva pestaña
        saberMasButton.textContent = "Saber más";
    
        // Agregar los elementos al contenido del modal
        modalContent.appendChild(closeButton);
        modalContent.appendChild(title);
        modalContent.appendChild(description);
        modalContent.appendChild(saberMasButton); // Añadir el botón "Saber más"
    
        // Agregar el contenido al modal
        modal.appendChild(modalContent);
    
        // Mostrar el modal
        document.body.appendChild(modal);
        modal.style.display = "block"; // Mostrar el modal
    }
    
    
    
    
    // Añadir evento de clic a cada imagen de servicio
    const carouselItems = document.querySelectorAll('.carousel-item');
    carouselItems.forEach(item => {
        item.addEventListener('click', function() {
            openModal(item);  // Pasamos el 'item' directamente
        });
    });
    


    // Mostrar el carrusel en su posición actual
    function showItem(index) {
        if (index < 0) {
            currentIndex = totalItems - 1;
        } else if (index >= totalItems) {
            currentIndex = 0;
        }
        const offset = -currentIndex * 320;
        document.querySelector('.carousel').style.transform = `translateX(${offset}px)`;
    }

    prevButton.addEventListener('click', () => {
        currentIndex--;
        showItem(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex++;
        showItem(currentIndex);
    });



    // Cerrar el modal si se hace clic fuera de la ventana
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    showItem(currentIndex); // Inicializar carrusel

    // Funcionalidad para el menú móvil
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Agregar animaciones al hacer scroll
    const elementsToAnimate = document.querySelectorAll('.section');

    // Detectar si el elemento está visible
    function checkVisibility() {
        elementsToAnimate.forEach(element => {
            let position = element.getBoundingClientRect();
            if (position.top >= 0 && position.bottom <= window.innerHeight) {
                element.classList.add('animate');
            } else {
                element.classList.remove('animate');
            }
        });
    }

    checkVisibility();
    window.addEventListener('scroll', function() {
        clearTimeout(window.scrollTimeout);
        window.scrollTimeout = setTimeout(checkVisibility, 100);
    });


    
});

document.addEventListener("DOMContentLoaded", function () {
    const cajaVerde = document.getElementById("cajaVerde"); // Corregido
    const cajaNegra = document.querySelector(".caja-negra");

    function addHoverEffect(element) {
        element.addEventListener("mouseover", function () {
            element.style.transform = "scale(1.05)";
            element.style.transition = "transform 0.3s ease";
        });

        element.addEventListener("mouseout", function () {
            element.style.transform = "scale(1)";
        });
    }

    addHoverEffect(cajaVerde);
    addHoverEffect(cajaNegra);
});


window.onscroll = function() {
    var menu = document.getElementById("menu");
    if (window.scrollY > 0) {
        menu.style.top = "0"; // Se mantiene en la parte superior al hacer scroll
    }
};
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const menuOverlay = document.querySelector(".menu-overlay");
    const menuBg = document.createElement("div"); // Creamos el fondo oscuro dinámicamente
    const menuLinks = document.querySelectorAll(".menu-links a"); // Todos los enlaces
    menuBg.classList.add("menu-overlay-bg");
    document.body.appendChild(menuBg); // Lo agregamos al body

    // Función para abrir el menú
    function openMenu() {
        menuOverlay.classList.add("active");
        menuBg.classList.add("active");
    }

    // Función para cerrar el menú
    function closeMenu() {
        menuOverlay.classList.remove("active");
        menuBg.classList.remove("active");
    }

    // Evento para abrir el menú al tocar el icono
    menuIcon.addEventListener("click", openMenu);

    // Evento para cerrar el menú al tocar fuera de él
    menuBg.addEventListener("click", closeMenu);

    menuLinks.forEach(link => {
        link.addEventListener("click", function() {
            closeMenu();  // Cierra el menú cuando se hace clic en un enlace
        });
    });
});




