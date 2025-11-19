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
        header.style.background = 'rgba(0, 0, 0, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(227, 24, 55, 0.3)';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.95)';
        header.style.boxShadow = 'none';
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
// Album Play Buttons
// ===================================
const albumPlays = document.querySelectorAll('.album-play');

albumPlays.forEach(play => {
    play.addEventListener('click', () => {
        // Open Spotify/Apple Music link
        alert('Fonction de lecture - Lien vers plateforme de streaming à configurer');
    });
});

// ===================================
// Gallery Lightbox (Simple)
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
// Formulaire Booking avec mailto
// ===================================
const bookingForm = document.getElementById('bookingForm');

if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Vérification RGPD
        const rgpd = bookingForm.querySelector('input[name="rgpd"]').checked;

        if (!rgpd) {
            alert('Vous devez accepter la politique de confidentialité pour continuer.');
            return;
        }

        // Récupération des données
        const nom = bookingForm.querySelector('#nom').value;
        const email = bookingForm.querySelector('#email').value;
        const telephone = bookingForm.querySelector('#telephone').value;
        const type = bookingForm.querySelector('#type').value;
        const date = bookingForm.querySelector('#date').value || 'Non spécifiée';
        const lieu = bookingForm.querySelector('#lieu').value || 'Non spécifié';
        const budget = bookingForm.querySelector('#budget').value;
        const message = bookingForm.querySelector('#message').value;

        // Conversion type événement
        const typeText = {
            'festival': 'Festival',
            'salle': 'Salle de concert',
            'prive': 'Événement privé',
            'autre': 'Autre'
        }[type] || type;

        // Conversion budget
        const budgetText = {
            'small': 'Moins de 5000€',
            'medium': '5000€ - 10000€',
            'large': 'Plus de 10000€',
            'negocier': 'À négocier'
        }[budget] || 'Non spécifié';

        // Construction du message email
        const emailSubject = `DEMANDE BOOKING - ${typeText.toUpperCase()} - ${nom}`;

        const emailBody = `DEMANDE DE BOOKING - THE BLACK RAVENS

═══════════════════════════════════════

INFORMATIONS CONTACT
--------------------
Nom / Organisation : ${nom}
Email : ${email}
Téléphone : ${telephone}

ÉVÉNEMENT
---------
Type : ${typeText}
Date souhaitée : ${date}
Lieu : ${lieu}
Budget estimé : ${budgetText}

MESSAGE
-------
${message}

CONSENTEMENT RGPD
-----------------
✓ La personne a accepté le traitement de ses données personnelles
  Date de consentement : ${new Date().toLocaleDateString('fr-FR')}

═══════════════════════════════════════

Email envoyé depuis le formulaire de booking sur theblackravens.fr`;

        // Adresse email du groupe (À PERSONNALISER)
        const mailto = 'booking@theblackravens.fr';

        // Ouverture du client email
        const mailtoLink = `mailto:${mailto}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

        window.location.href = mailtoLink;

        // Message de confirmation
        setTimeout(() => {
            alert('Votre client email va s\'ouvrir. Veuillez vérifier le message et l\'envoyer pour finaliser votre demande de booking.');
            bookingForm.reset();
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
                            target.textContent = numericValue + (hasK ? 'K' : '') + (hasPlus ? '+' : '');
                            clearInterval(counter);
                        } else {
                            target.textContent = Math.floor(currentValue) + (hasK ? 'K' : '') + (hasPlus ? '+' : '');
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
// Parallax Effect on Hero
// ===================================
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        const heroHeight = hero.offsetHeight;

        if (scrolled < heroHeight) {
            const heroBg = hero.querySelector('.hero-bg');
            if (heroBg) {
                heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
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
console.log('%c🎸 THE BLACK RAVENS 🎸', 'color: #E31837; font-size: 24px; font-weight: bold; font-family: Montserrat;');
console.log('%cRock • Alternative • Live Energy', 'color: #FFD700; font-size: 14px; font-weight: bold;');
console.log('%cSite web officiel', 'color: #CCCCCC; font-size: 12px;');
