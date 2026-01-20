/* ============================================
   JARDÍN INFANTIL MI RINCONCITO - JAVASCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {

    // ============================================
    // NAVEGACIÓN
    // ============================================

    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Navbar scroll effect
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });

    // ============================================
    // SMOOTH SCROLL
    // ============================================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================
    // FORMULARIO DE CONTACTO
    // ============================================

    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const childAge = formData.get('child-age');
            const message = formData.get('message');

            // Create WhatsApp message
            let whatsappMessage = `Hola, mi nombre es ${name}.\n\n`;

            if (childAge) {
                whatsappMessage += `Tengo un hijo/a de ${childAge} años.\n\n`;
            }

            if (message) {
                whatsappMessage += `${message}\n\n`;
            }

            whatsappMessage += `Mi correo es: ${email}`;

            if (phone) {
                whatsappMessage += `\nMi teléfono es: ${phone}`;
            }

            // Encode and open WhatsApp
            const encodedMessage = encodeURIComponent(whatsappMessage);
            const whatsappUrl = `https://wa.me/56968204684?text=${encodedMessage}`;

            // Show success message
            showNotification('¡Gracias! Te redirigiremos a WhatsApp para completar tu consulta.');

            // Open WhatsApp after a short delay
            setTimeout(() => {
                window.open(whatsappUrl, '_blank');
            }, 1000);

            // Reset form
            contactForm.reset();
        });
    }

    // ============================================
    // NOTIFICACIONES
    // ============================================

    function showNotification(message, type = 'success') {
        // Remove existing notification
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        `;

        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? '#00B894' : '#FF6B6B'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.15);
            display: flex;
            align-items: center;
            gap: 1rem;
            z-index: 9999;
            animation: slideIn 0.3s ease;
            max-width: 400px;
        `;

        // Add animation keyframes if not exists
        if (!document.querySelector('#notification-styles')) {
            const style = document.createElement('style');
            style.id = 'notification-styles';
            style.textContent = `
                @keyframes slideIn {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                @keyframes slideOut {
                    from {
                        transform: translateX(0);
                        opacity: 1;
                    }
                    to {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }

        document.body.appendChild(notification);

        // Close button functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.style.cssText = `
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            line-height: 1;
        `;

        closeBtn.addEventListener('click', () => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        });

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.animation = 'slideOut 0.3s ease';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }

    // ============================================
    // ANIMACIONES AL SCROLL (Intersection Observer)
    // ============================================

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements
    const animateElements = document.querySelectorAll('.feature-card, .area-card, .facility-card, .vision-card, .method-step');

    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add animation class styles
    const animationStyle = document.createElement('style');
    animationStyle.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(animationStyle);

    // ============================================
    // LAZY LOADING IMAGES
    // ============================================

    const lazyImages = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));

    // ============================================
    // ACTIVE NAVIGATION LINK
    // ============================================

    const sections = document.querySelectorAll('section[id]');

    function highlightNavLink() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector(`.nav-menu a[href="#${sectionId}"]`)?.classList.add('active');
            } else {
                document.querySelector(`.nav-menu a[href="#${sectionId}"]`)?.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNavLink);

    // Add active link styles
    const activeLinkStyle = document.createElement('style');
    activeLinkStyle.textContent = `
        .nav-menu a.active {
            color: var(--color-primary) !important;
        }
        .navbar:not(.scrolled) .nav-menu a.active {
            color: var(--color-accent) !important;
        }
    `;
    document.head.appendChild(activeLinkStyle);

    // ============================================
    // CARGAR CONTENIDO DINÁMICO
    // ============================================

    if (typeof CONTENIDO !== 'undefined') {
        cargarContenidoDinamico();
    }

    function cargarContenidoDinamico() {
        cargarGaleria();
        cargarVideos();
        cargarActividades();
        cargarTestimonios();
    }

    // Cargar galería de fotos
    function cargarGaleria() {
        const galeriaContainer = document.getElementById('galeria-fotos');
        if (!galeriaContainer || !CONTENIDO.galeria) return;

        if (CONTENIDO.galeria.length === 0) {
            galeriaContainer.innerHTML = `
                <div class="gallery-empty">
                    <p>Próximamente agregaremos fotos de nuestras instalaciones</p>
                </div>
            `;
            return;
        }

        let html = '';
        CONTENIDO.galeria.forEach((foto, index) => {
            html += `
                <div class="gallery-item" onclick="abrirLightbox(${index})">
                    <img src="${foto.imagen}" alt="${foto.titulo}"
                         onerror="this.parentElement.classList.add('placeholder'); this.outerHTML='<span>${foto.titulo}</span>'">
                    <div class="gallery-overlay">
                        <h4>${foto.titulo}</h4>
                        <p>${foto.descripcion}</p>
                    </div>
                </div>
            `;
        });
        galeriaContainer.innerHTML = html;
    }

    // Cargar videos de YouTube
    function cargarVideos() {
        const videosContainer = document.getElementById('galeria-videos');
        const videosSection = document.getElementById('videos-section');
        if (!videosContainer || !CONTENIDO.videos) return;

        // Filtrar videos válidos (sin comentarios)
        const videosValidos = CONTENIDO.videos.filter(v => v && v.codigoYoutube);

        if (videosValidos.length === 0) {
            if (videosSection) videosSection.style.display = 'none';
            return;
        }

        if (videosSection) videosSection.style.display = 'block';

        let html = '';
        videosValidos.forEach(video => {
            html += `
                <div class="video-item">
                    <div class="video-wrapper">
                        <iframe
                            src="https://www.youtube.com/embed/${video.codigoYoutube}"
                            title="${video.titulo}"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                    </div>
                    <h4>${video.titulo}</h4>
                    <p>${video.descripcion}</p>
                </div>
            `;
        });
        videosContainer.innerHTML = html;
    }

    // Cargar actividades y noticias
    function cargarActividades() {
        const actividadesContainer = document.getElementById('lista-actividades');
        if (!actividadesContainer || !CONTENIDO.actividades) return;

        if (CONTENIDO.actividades.length === 0) {
            actividadesContainer.innerHTML = `
                <div class="activities-empty">
                    <p>Próximamente publicaremos nuestras actividades</p>
                </div>
            `;
            return;
        }

        let html = '';
        CONTENIDO.actividades.forEach(actividad => {
            const tieneImagen = actividad.imagen && actividad.imagen.trim() !== '';
            html += `
                <div class="activity-card">
                    ${tieneImagen ? `<img src="${actividad.imagen}" alt="${actividad.titulo}" class="activity-image">` : ''}
                    <div class="activity-content">
                        <span class="activity-date">${actividad.fecha}</span>
                        <h3>${actividad.titulo}</h3>
                        <p>${actividad.descripcion}</p>
                    </div>
                </div>
            `;
        });
        actividadesContainer.innerHTML = html;
    }

    // Cargar testimonios
    function cargarTestimonios() {
        const testimoniosContainer = document.getElementById('lista-testimonios');
        if (!testimoniosContainer || !CONTENIDO.testimonios) return;

        if (CONTENIDO.testimonios.length === 0) {
            testimoniosContainer.parentElement.style.display = 'none';
            return;
        }

        let html = '';
        CONTENIDO.testimonios.forEach(testimonio => {
            const tieneFoto = testimonio.foto && testimonio.foto.trim() !== '';
            const iniciales = testimonio.nombre.split(' ').map(n => n[0]).join('').substring(0, 2);

            html += `
                <div class="testimonial-card">
                    <div class="testimonial-header">
                        ${tieneFoto
                            ? `<img src="${testimonio.foto}" alt="${testimonio.nombre}" class="testimonial-photo">`
                            : `<div class="testimonial-avatar">${iniciales}</div>`
                        }
                        <div class="testimonial-info">
                            <h4>${testimonio.nombre}</h4>
                            <span>${testimonio.relacion}</span>
                        </div>
                    </div>
                    <p class="testimonial-text">"${testimonio.texto}"</p>
                </div>
            `;
        });
        testimoniosContainer.innerHTML = html;
    }

    // Lightbox para galería
    window.abrirLightbox = function(index) {
        if (!CONTENIDO.galeria || !CONTENIDO.galeria[index]) return;

        const foto = CONTENIDO.galeria[index];

        // Crear lightbox
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <button class="lightbox-close">&times;</button>
                <img src="${foto.imagen}" alt="${foto.titulo}">
                <div class="lightbox-caption">
                    <h4>${foto.titulo}</h4>
                    <p>${foto.descripcion}</p>
                </div>
                <button class="lightbox-prev">&#10094;</button>
                <button class="lightbox-next">&#10095;</button>
            </div>
        `;

        document.body.appendChild(lightbox);
        document.body.style.overflow = 'hidden';

        // Cerrar lightbox
        lightbox.querySelector('.lightbox-close').addEventListener('click', cerrarLightbox);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) cerrarLightbox();
        });

        // Navegación
        let currentIndex = index;

        lightbox.querySelector('.lightbox-prev').addEventListener('click', (e) => {
            e.stopPropagation();
            currentIndex = (currentIndex - 1 + CONTENIDO.galeria.length) % CONTENIDO.galeria.length;
            actualizarLightbox(currentIndex, lightbox);
        });

        lightbox.querySelector('.lightbox-next').addEventListener('click', (e) => {
            e.stopPropagation();
            currentIndex = (currentIndex + 1) % CONTENIDO.galeria.length;
            actualizarLightbox(currentIndex, lightbox);
        });

        // Teclas
        document.addEventListener('keydown', function handleKeydown(e) {
            if (e.key === 'Escape') cerrarLightbox();
            if (e.key === 'ArrowLeft') {
                currentIndex = (currentIndex - 1 + CONTENIDO.galeria.length) % CONTENIDO.galeria.length;
                actualizarLightbox(currentIndex, lightbox);
            }
            if (e.key === 'ArrowRight') {
                currentIndex = (currentIndex + 1) % CONTENIDO.galeria.length;
                actualizarLightbox(currentIndex, lightbox);
            }
        });

        function cerrarLightbox() {
            lightbox.remove();
            document.body.style.overflow = '';
        }

        function actualizarLightbox(idx, lb) {
            const f = CONTENIDO.galeria[idx];
            lb.querySelector('img').src = f.imagen;
            lb.querySelector('h4').textContent = f.titulo;
            lb.querySelector('.lightbox-caption p').textContent = f.descripcion;
        }
    };

});
