// ===================================
// AOS Animation Init
// ===================================
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
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
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
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
// Menu Filter Functionality
// ===================================
const filterBtns = document.querySelectorAll('.filter-btn');
const menuItems = document.querySelectorAll('.menu-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));

        // Add active class to clicked button
        btn.classList.add('active');

        // Get filter value
        const filterValue = btn.getAttribute('data-filter');

        // Filter menu items
        menuItems.forEach(item => {
            const category = item.getAttribute('data-category');

            if (filterValue === 'all' || category === filterValue) {
                item.style.display = 'block';
                // Re-trigger AOS animation
                item.classList.add('aos-animate');
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// ===================================
// Gallery Lightbox (Simple)
// ===================================
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        if (img) {
            // Simple alert - pour une vraie lightbox, utiliser une bibliothèque
            window.open(img.src, '_blank');
        }
    });
});

// ===================================
// Formulaire de Contact avec mailto
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
        const telephone = contactForm.querySelector('#telephone').value || 'Non renseigné';
        const sujet = contactForm.querySelector('#sujet').value;
        const date = contactForm.querySelector('#date').value || 'Non spécifiée';
        const personnes = contactForm.querySelector('#personnes').value || 'Non spécifié';
        const message = contactForm.querySelector('#message').value;

        // Conversion sujet
        const sujetText = {
            'reservation': 'Réservation de table',
            'privatisation': 'Demande de privatisation',
            'information': 'Demande d\'information',
            'autre': 'Autre demande'
        }[sujet] || sujet;

        // Construction du message email
        const emailSubject = `${sujetText.toUpperCase()} - ${nom}`;

        const emailBody = `NOUVEAU MESSAGE - LE JARDIN SECRET

═══════════════════════════════════════

COORDONNÉES DU CLIENT
---------------------
Nom : ${nom}
Email : ${email}
Téléphone : ${telephone}

DEMANDE
-------
Type : ${sujetText}
Date souhaitée : ${date}
Nombre de personnes : ${personnes}

MESSAGE
-------
${message}

CONSENTEMENT RGPD
-----------------
✓ La personne a accepté le traitement de ses données personnelles
  Date de consentement : ${new Date().toLocaleDateString('fr-FR')}

═══════════════════════════════════════

Email envoyé depuis le formulaire de contact sur lejardinsecret.fr`;

        // Adresse email du salon de thé (À PERSONNALISER)
        const mailto = 'contact@lejardinsecret.fr';

        // Ouverture du client email
        const mailtoLink = `mailto:${mailto}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

        window.location.href = mailtoLink;

        // Message de confirmation
        setTimeout(() => {
            alert('Votre client email va s\'ouvrir. Veuillez vérifier le message et l\'envoyer pour finaliser votre demande.');
            contactForm.reset();
        }, 500);
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
                const hasPlus = finalValue.includes('+');
                const hasPercent = finalValue.includes('%');
                const numericValue = parseInt(finalValue);

                if (!isNaN(numericValue)) {
                    let currentValue = 0;
                    const duration = 2000;
                    const increment = numericValue / (duration / 16);

                    const counter = setInterval(() => {
                        currentValue += increment;
                        if (currentValue >= numericValue) {
                            target.textContent = numericValue + (hasPlus ? '+' : '') + (hasPercent ? '%' : '');
                            clearInterval(counter);
                        } else {
                            target.textContent = Math.floor(currentValue) + (hasPlus ? '+' : '') + (hasPercent ? '%' : '');
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
// Set Minimum Date for Date Input
// ===================================
const dateInput = document.querySelector('#date');
if (dateInput) {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const minDate = tomorrow.toISOString().split('T')[0];
    dateInput.setAttribute('min', minDate);
}

// ===================================
// Fade elements on scroll
// ===================================
const fadeElements = document.querySelectorAll('.fade-in');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

fadeElements.forEach(el => fadeObserver.observe(el));

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
        // Optionnel: ajouter une image de remplacement
        // e.target.src = 'images/placeholder.jpg';
    }
}, true);

// ===================================
// Console Message
// ===================================
console.log('%c🍵 Le Jardin Secret - Salon de Thé 🍵', 'color: #C9A063; font-size: 18px; font-weight: bold; font-family: serif;');
console.log('%cL\'art du thé à la française', 'color: #8B7355; font-size: 14px; font-style: italic;');
