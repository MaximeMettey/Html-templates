// ===================================
// AOS Animation Init
// ===================================
AOS.init({
    duration: 1000,
    easing: 'ease-out-cubic',
    once: true,
    offset: 100
});

// ===================================
// Mobile Navigation Toggle
// ===================================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = navToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = navToggle.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});

// ===================================
// Sticky Header on Scroll
// ===================================
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        header.style.background = 'rgba(13, 13, 13, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(220, 20, 60, 0.3)';
    } else {
        header.style.background = 'rgba(13, 13, 13, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    }
});

// ===================================
// Active Navigation Link on Scroll
// ===================================
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
});

// ===================================
// Smooth Scroll for Anchor Links
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            const headerHeight = header.offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Scroll to Top Button
// ===================================
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('active');
    } else {
        scrollTopBtn.classList.remove('active');
    }
});

if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===================================
// Animation des statistiques au scroll
// ===================================
const animateStats = () => {
    const stats = document.querySelectorAll('.stat-number');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = target.textContent;
                const hasPercent = finalValue.includes('%');
                const hasPlus = finalValue.includes('+');
                const hasK = finalValue.includes('K');

                // Extract numeric value
                let numericValue = parseInt(finalValue.replace(/[^0-9]/g, ''));

                if (!isNaN(numericValue)) {
                    let currentValue = 0;
                    const duration = 2000;
                    const increment = numericValue / (duration / 16);

                    const counter = setInterval(() => {
                        currentValue += increment;
                        if (currentValue >= numericValue) {
                            target.textContent = numericValue + (hasK ? 'K' : '') + (hasPercent ? '%' : '') + (hasPlus ? '+' : '');
                            clearInterval(counter);
                        } else {
                            target.textContent = Math.floor(currentValue) + (hasK ? 'K' : '') + (hasPercent ? '%' : '') + (hasPlus ? '+' : '');
                        }
                    }, 16);
                }

                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => observer.observe(stat));
};

// Lancer l'animation des stats
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', animateStats);
} else {
    animateStats();
}

// ===================================
// Formulaire Contact avec mailto
// ===================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Vérification RGPD
        const rgpd = contactForm.querySelector('input[name="rgpd"]').checked;

        if (!rgpd) {
            alert('Vous devez accepter la politique de confidentialité pour continuer.');
            return;
        }

        // Récupération des données
        const nom = contactForm.querySelector('#nom').value;
        const email = contactForm.querySelector('#email').value;
        const telephone = contactForm.querySelector('#telephone').value;
        const vehicule = contactForm.querySelector('#vehicule').value || 'Non spécifié';
        const service = contactForm.querySelector('#service').value;
        const date = contactForm.querySelector('#date').value || 'Non spécifiée';
        const message = contactForm.querySelector('#message').value || 'Aucun message supplémentaire';

        // Conversion type de service
        const serviceText = {
            'vidange': 'Vidange & Entretien',
            'revision': 'Révision Complète',
            'diagnostic': 'Diagnostic Électronique',
            'pneus': 'Pneus & Géométrie',
            'climatisation': 'Climatisation',
            'freinage': 'Freinage & Suspension',
            'distribution': 'Distribution & Embrayage',
            'controle-technique': 'Contrôle Technique',
            'carrosserie': 'Carrosserie & Peinture',
            'depannage': 'Dépannage',
            'autre': 'Autre'
        }[service] || service;

        // Construction du message email
        const emailSubject = `DEMANDE RDV GARAGE - ${serviceText.toUpperCase()} - ${nom}`;

        const emailBody = `DEMANDE DE RENDEZ-VOUS - GARAGE AUTO EXPERT

═══════════════════════════════════════

INFORMATIONS CLIENT
-------------------
Nom : ${nom}
Email : ${email}
Téléphone : ${telephone}
Véhicule : ${vehicule}

PRESTATION SOUHAITÉE
--------------------
Service : ${serviceText}
Date souhaitée : ${date}

MESSAGE
-------
${message}

CONSENTEMENT RGPD
-----------------
✓ Le client a accepté le traitement de ses données personnelles
  Date de consentement : ${new Date().toLocaleDateString('fr-FR')}

═══════════════════════════════════════

Email envoyé depuis le formulaire de contact sur autoexpert.fr`;

        // Adresse email du garage (À PERSONNALISER)
        const mailto = 'contact@autoexpert.fr';

        // Ouverture du client email
        const mailtoLink = `mailto:${mailto}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

        window.location.href = mailtoLink;

        // Message de confirmation
        setTimeout(() => {
            alert('Votre client email va s\'ouvrir. Veuillez vérifier le message et l\'envoyer pour finaliser votre demande de rendez-vous.');
            contactForm.reset();
        }, 500);
    });
}

// ===================================
// Set Minimum Date for Date Input
// ===================================
const dateInput = document.querySelector('#date');
if (dateInput) {
    const today = new Date();
    const minDate = today.toISOString().split('T')[0];
    dateInput.setAttribute('min', minDate);
}

// ===================================
// Galerie Lightbox (Simple)
// ===================================
const galerieItems = document.querySelectorAll('.galerie-item');

galerieItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        if (img) {
            // Simple - pour une vraie lightbox, utiliser une bibliothèque
            window.open(img.src, '_blank');
        }
    });
});

// ===================================
// Parallax Effect on Hero (Léger)
// ===================================
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        const heroHeight = hero.offsetHeight;

        if (scrolled < heroHeight) {
            const heroBg = hero.querySelector('.hero-bg');
            if (heroBg) {
                heroBg.style.transform = `translateY(${scrolled * 0.3}px)`;
            }
        }
    }
});

// ===================================
// Performance: Lazy Loading des images
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
});

// ===================================
// Gestion des erreurs de chargement
// ===================================
window.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG') {
        console.warn('Image failed to load:', e.target.src);
    }
}, true);

// ===================================
// Console Message
// ===================================
console.log('%c🔧 GARAGE AUTO EXPERT 🔧', 'color: #DC143C; font-size: 24px; font-weight: bold; font-family: Rajdhani;');
console.log('%cVotre garage de confiance depuis 2003', 'color: #808080; font-size: 14px; font-weight: bold;');
console.log('%cEntretien • Réparation • Diagnostic', 'color: #1A1A1A; font-size: 12px;');
