document.addEventListener("DOMContentLoaded", () => {
    console.log("Blog JS cargado correctamente");

    // Definir los datos de cada blog para mostrar en el modal
    const blogData = {
        1: {
            title: "La clave para el éxito en la era digital",
            description: "Hoy en día, el mercado está más conectado que nunca. Tener una presencia digital bien estructurada es clave para crecer y destacar frente a la competencia. En este artículo exploramos cómo aprovechar las herramientas digitales para potenciar tu negocio."
        },
        2: {
            title: "La importancia de un diseño atractivo",
            description: "El diseño de tu página web no solo impacta la estética, sino también la experiencia del usuario. Un diseño atractivo y funcional puede aumentar el tiempo de permanencia y mejorar la conversión de clientes."
        },
        3: {
            title: "Marketing digital para pequeñas empresas",
            description: "Las pequeñas empresas pueden aprovechar el marketing digital para competir con las grandes marcas. Desde SEO hasta redes sociales, te mostramos las estrategias clave para impulsar tu negocio online."
        },
        4: {
            title: "Cómo mejorar tu presencia en redes sociales",
            description: "Las redes sociales son esenciales para cualquier negocio en la era digital. Aprende las mejores prácticas para generar engagement, atraer clientes y mejorar tu estrategia de contenido."
        }
    };

    // Función para abrir el modal con la información del blog correspondiente
    window.openModal = function(id) {
        const modal = document.getElementById("serviceModal");
        const modalContent = document.querySelector(".modal-content");
        const modalTitle = document.getElementById("modalTitle");
        const modalDescription = document.getElementById("modalDescription");
    
        if (blogData[id]) {
            modalTitle.textContent = blogData[id].title;
            modalDescription.textContent = blogData[id].description;
            modal.style.display = "flex";  // Cambia el display a flex para centrarlo
    
            // Asegurar que el modal se centre correctamente
            setTimeout(() => {
                modal.style.alignItems = "center";
                modal.style.justifyContent = "center";
                modalContent.style.margin = "0"; // Elimina márgenes si existen
                modalTitle.style.marginBottom = "30px";
                modalDescription.style.marginTop = "20px";
                modalDescription.style.marginBottom = "25px";
            }, 0);
        } else {
            console.warn("No se encontró información para el blog ID: " + id);
        }
    };
    
    

    // Función para cerrar el modal
    window.closeModal = function() {
        const modal = document.getElementById("serviceModal");
        modal.style.display = "none";
    };

    // Cerrar el modal si el usuario hace clic fuera del contenido
    window.onclick = function(event) {
        const modal = document.getElementById("serviceModal");
        if (event.target === modal) {
            closeModal();
        }
    };
});

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

