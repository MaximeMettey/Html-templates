// ===================================
// Pro Plomberie - Main JavaScript
// ===================================

// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// ===================================
// Navigation
// ===================================

const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Mobile menu toggle
if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        if (hamburger) {
            hamburger.classList.remove('active');
        }
    });
});

// Active link on scroll
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(sectionId)) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Contact Form with mailto
// ===================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const service = document.getElementById('service').value;
        const ville = document.getElementById('ville').value;
        const message = document.getElementById('message').value;
        const rgpd = document.getElementById('rgpd').checked;

        // Validation RGPD
        if (!rgpd) {
            alert('Vous devez accepter la politique de confidentialité pour continuer.');
            return;
        }

        // Get service label
        const serviceSelect = document.getElementById('service');
        const serviceLabel = serviceSelect.options[serviceSelect.selectedIndex].text;

        // Create email body
        const emailBody = `
DEMANDE DE DEVIS - PRO PLOMBERIE
=================================

INFORMATIONS CLIENT
-------------------
Nom: ${name}
Téléphone: ${phone}
Email: ${email}
Ville: ${ville}

TYPE D'INTERVENTION
-------------------
${serviceLabel}

DESCRIPTION DE LA DEMANDE
-------------------------
${message}

---
Cette demande a été envoyée via le formulaire de contact du site Pro-Plomberie.fr
Le client a accepté la politique de confidentialité (RGPD) le ${new Date().toLocaleDateString('fr-FR')}
        `.trim();

        // Email parameters
        const mailto = 'contact@pro-plomberie.fr';
        const subject = `Demande de devis - ${serviceLabel} - ${ville}`;

        // Create mailto link
        const mailtoLink = `mailto:${mailto}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

        // Open email client
        window.location.href = mailtoLink;

        // Show confirmation message
        setTimeout(() => {
            alert('Votre client email va s\'ouvrir avec votre demande pré-remplie. Vérifiez les informations et envoyez le message.\n\nSi votre client email ne s\'ouvre pas automatiquement, vous pouvez nous contacter directement au 06 12 34 56 78.');

            // Reset form
            contactForm.reset();
        }, 500);
    });
}

// ===================================
// Form Validation & Effects
// ===================================

const formInputs = document.querySelectorAll('.form-control');

formInputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.style.borderColor = '#0066cc';
    });

    input.addEventListener('blur', function() {
        if (this.value.trim() === '' && this.hasAttribute('required')) {
            this.style.borderColor = '#dc3545';
        } else {
            this.style.borderColor = 'transparent';
        }
    });
});

// ===================================
// Statistics Counter Animation
// ===================================

const stats = document.querySelectorAll('.stat-number');
let statsAnimated = false;

const animateStats = () => {
    if (statsAnimated) return;

    stats.forEach(stat => {
        const target = stat.textContent;
        const isNumber = /^\d+/.test(target);

        if (isNumber) {
            const match = target.match(/^(\d+)([+%]*)$/);
            if (match) {
                const finalNumber = parseInt(match[1]);
                const suffix = match[2];
                const duration = 2000;
                const increment = finalNumber / (duration / 16);
                let current = 0;

                const updateCounter = () => {
                    current += increment;
                    if (current < finalNumber) {
                        stat.textContent = Math.floor(current) + suffix;
                        requestAnimationFrame(updateCounter);
                    } else {
                        stat.textContent = finalNumber + suffix;
                    }
                };

                updateCounter();
            }
        }
    });

    statsAnimated = true;
};

// Trigger stats animation when in viewport
const aboutSection = document.querySelector('.about-section');
if (aboutSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
            }
        });
    }, { threshold: 0.5 });

    observer.observe(aboutSection);
}

// ===================================
// Scroll to Top Button
// ===================================

const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('active');
    } else {
        scrollTopBtn.classList.remove('active');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===================================
// Phone Number Formatting (French)
// ===================================

const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');

        // Format: 06 12 34 56 78
        if (value.length > 2) {
            value = value.match(/.{1,2}/g).join(' ');
        }

        e.target.value = value;
    });
}

// ===================================
// Realisation Image Lightbox
// ===================================

const realisationItems = document.querySelectorAll('.realisation-item');

realisationItems.forEach(item => {
    item.addEventListener('click', function() {
        const img = this.querySelector('img');
        const imgSrc = img.getAttribute('src');
        const title = this.querySelector('h3').textContent;
        const description = this.querySelector('p').textContent;

        // Create lightbox
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <button class="lightbox-close">&times;</button>
                <img src="${imgSrc}" alt="${title}">
                <div class="lightbox-info">
                    <h3>${title}</h3>
                    <p>${description}</p>
                </div>
            </div>
        `;

        document.body.appendChild(lightbox);
        document.body.style.overflow = 'hidden';

        // Styles
        lightbox.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 99999;
            animation: fadeIn 0.3s;
        `;

        const content = lightbox.querySelector('.lightbox-content');
        content.style.cssText = `
            position: relative;
            max-width: 90%;
            max-height: 90%;
            text-align: center;
        `;

        const lightboxImg = lightbox.querySelector('img');
        lightboxImg.style.cssText = `
            max-width: 100%;
            max-height: 75vh;
            border-radius: 10px;
            box-shadow: 0 10px 50px rgba(0, 0, 0, 0.5);
        `;

        const info = lightbox.querySelector('.lightbox-info');
        info.style.cssText = `
            color: white;
            margin-top: 20px;
        `;

        const closeBtn = lightbox.querySelector('.lightbox-close');
        closeBtn.style.cssText = `
            position: absolute;
            top: -50px;
            right: 0;
            font-size: 50px;
            color: white;
            background: none;
            border: none;
            cursor: pointer;
            transition: all 0.3s;
        `;

        // Close lightbox
        closeBtn.addEventListener('click', () => {
            lightbox.remove();
            document.body.style.overflow = '';
        });

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.remove();
                document.body.style.overflow = '';
            }
        });

        // Close with escape key
        document.addEventListener('keydown', function escapeClose(e) {
            if (e.key === 'Escape') {
                lightbox.remove();
                document.body.style.overflow = '';
                document.removeEventListener('keydown', escapeClose);
            }
        });
    });
});

// ===================================
// Service Cards Hover Effects
// ===================================

const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.borderLeft = '5px solid #0066cc';
    });

    card.addEventListener('mouseleave', function() {
        this.style.borderLeft = 'none';
    });
});

// ===================================
// Emergency Button Click Tracking
// ===================================

const emergencyBtns = document.querySelectorAll('.btn-emergency, .emergency-btn');

emergencyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('Appel d\'urgence initié');
        // Ici vous pouvez ajouter un tracking analytics si nécessaire
    });
});

// ===================================
// Loading Animation
// ===================================

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

console.log('🔧 Pro Plomberie - Template loaded successfully!');
console.log('📧 Formulaire configuré avec mailto - Pas d\'inscription nécessaire');
console.log('🔒 RGPD compliance activée');
