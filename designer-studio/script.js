// ==========================================
// CREATIVE STUDIO - JAVASCRIPT
// ==========================================

document.addEventListener('DOMContentLoaded', function() {

    // ==========================================
    // AOS ANIMATION INITIALIZATION
    // ==========================================
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
        easing: 'ease-out-cubic'
    });

    // ==========================================
    // MOBILE NAVIGATION
    // ==========================================
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // ==========================================
    // NAVBAR SCROLL EFFECT
    // ==========================================
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        // Add scrolled class when scrolling down
        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // ==========================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Ignore empty or just # links
            if (href === '#' || href === '') {
                e.preventDefault();
                return;
            }

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offsetTop = target.offsetTop - 80; // 80px offset for fixed navbar

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ==========================================
    // PORTFOLIO FILTER
    // ==========================================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');

            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Filter portfolio items
            portfolioItems.forEach(item => {
                const category = item.getAttribute('data-category');

                if (filter === 'all' || category === filter) {
                    item.classList.remove('hidden');
                    // Re-trigger AOS animation
                    item.classList.add('aos-animate');
                } else {
                    item.classList.add('hidden');
                }
            });

            // Refresh AOS
            AOS.refresh();
        });
    });

    // ==========================================
    // CONTACT FORM HANDLING
    // ==========================================
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            company: document.getElementById('company').value || 'Non spécifié',
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value || 'Non spécifié',
            service: document.getElementById('service').value,
            budget: document.getElementById('budget').value || 'Non spécifié',
            message: document.getElementById('message').value,
            rgpd: document.getElementById('rgpd').checked
        };

        // Validate RGPD checkbox
        if (!formData.rgpd) {
            alert('Veuillez accepter la politique de confidentialité pour continuer.');
            return;
        }

        // Create mailto link
        const subject = encodeURIComponent(`Nouveau brief projet - ${formData.service}`);
        const body = encodeURIComponent(`
Nouveau brief projet reçu

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INFORMATIONS CLIENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Nom: ${formData.name}
Entreprise: ${formData.company}
Email: ${formData.email}
Téléphone: ${formData.phone}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DÉTAILS DU PROJET
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Type de projet: ${formData.service}
Budget estimé: ${formData.budget}

Description du projet:
${formData.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consentement RGPD: Oui
Date: ${new Date().toLocaleDateString('fr-FR')}
        `);

        // Open email client
        window.location.href = `mailto:hello@creativestudio.com?subject=${subject}&body=${body}`;

        // Show success message
        alert('Votre brief va être envoyé par email. Merci pour votre confiance !');

        // Reset form
        contactForm.reset();
    });

    // ==========================================
    // FORM VALIDATION REAL-TIME
    // ==========================================
    const requiredFields = contactForm.querySelectorAll('[required]');

    requiredFields.forEach(field => {
        field.addEventListener('blur', function() {
            if (this.value.trim() === '') {
                this.style.borderColor = '#FF4500';
            } else {
                this.style.borderColor = '#DDDDDD';
            }
        });

        field.addEventListener('input', function() {
            if (this.value.trim() !== '') {
                this.style.borderColor = '#DDDDDD';
            }
        });
    });

    // Email validation
    const emailField = document.getElementById('email');
    emailField.addEventListener('blur', function() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(this.value)) {
            this.style.borderColor = '#FF4500';
        } else {
            this.style.borderColor = '#DDDDDD';
        }
    });

    // ==========================================
    // PORTFOLIO HOVER EFFECT ENHANCEMENT
    // ==========================================
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.querySelector('.portfolio-image img').style.transform = 'scale(1.1)';
        });

        item.addEventListener('mouseleave', function() {
            this.querySelector('.portfolio-image img').style.transform = 'scale(1)';
        });
    });

    // ==========================================
    // STATS COUNTER ANIMATION
    // ==========================================
    const stats = document.querySelectorAll('.stat-number');
    let statsAnimated = false;

    function animateStats() {
        if (statsAnimated) return;

        const statsSection = document.querySelector('.stats-bar');
        const statsSectionTop = statsSection.offsetTop;
        const statsSectionHeight = statsSection.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollTop = window.pageYOffset;

        // Check if stats section is in viewport
        if (scrollTop + windowHeight > statsSectionTop + (statsSectionHeight / 2)) {
            statsAnimated = true;

            stats.forEach(stat => {
                const target = parseInt(stat.textContent);
                const duration = 2000; // 2 seconds
                const increment = target / (duration / 16); // 60fps
                let current = 0;

                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        stat.textContent = Math.floor(current) + '+';
                        requestAnimationFrame(updateCounter);
                    } else {
                        stat.textContent = target + '+';
                    }
                };

                updateCounter();
            });
        }
    }

    // Run on scroll
    window.addEventListener('scroll', animateStats);
    // Run on load in case already in view
    animateStats();

    // ==========================================
    // ACTIVE NAVIGATION LINK ON SCROLL
    // ==========================================
    const sections = document.querySelectorAll('section[id]');

    function highlightNavigation() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                navLink.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNavigation);

    // ==========================================
    // CONSOLE MESSAGE
    // ==========================================
    console.log('%c🎨 Creative Studio Template', 'font-size: 20px; font-weight: bold; color: #FF4500;');
    console.log('%cDesign minimaliste noir/blanc avec accent orange', 'font-size: 12px; color: #666;');
    console.log('%c© 2024 - Template HTML professionnel', 'font-size: 10px; color: #999;');

    // ==========================================
    // PREVENT DEFAULT ON PORTFOLIO LINKS
    // ==========================================
    const portfolioLinks = document.querySelectorAll('.portfolio-link');
    portfolioLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Cette fonctionnalité serait normalement liée à une page de détail du projet.');
        });
    });

    // ==========================================
    // LOADING ANIMATION (OPTIONAL)
    // ==========================================
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.5s ease';
            document.body.style.opacity = '1';
        }, 100);
    });

});

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

// Debounce function for scroll events optimization
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll events if needed
// Example: window.addEventListener('scroll', debounce(yourFunction, 10));
