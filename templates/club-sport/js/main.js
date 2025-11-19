// ===================================
// AOS Animation Init
// ===================================
AOS.init({
    duration: 800,
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
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// ===================================
// Sticky Header on Scroll
// ===================================
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.background = 'rgba(26, 26, 46, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.background = 'rgba(26, 26, 46, 0.95)';
        header.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
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
// Formulaire d'Inscription avec mailto
// ===================================
const inscriptionForm = document.getElementById('inscriptionForm');

if (inscriptionForm) {
    inscriptionForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Vérification RGPD
        const rgpd = inscriptionForm.querySelector('input[name="rgpd"]').checked;

        if (!rgpd) {
            alert('Vous devez accepter la politique de confidentialité pour continuer.');
            return;
        }

        // Récupération des données
        const nom = inscriptionForm.querySelector('#nom').value;
        const prenom = inscriptionForm.querySelector('#prenom').value;
        const dateNaissance = inscriptionForm.querySelector('#date-naissance').value;
        const categorie = inscriptionForm.querySelector('#categorie').value;
        const email = inscriptionForm.querySelector('#email').value;
        const telephone = inscriptionForm.querySelector('#telephone').value;
        const experience = inscriptionForm.querySelector('#experience').value;
        const message = inscriptionForm.querySelector('#message').value;

        // Conversion catégorie
        const categorieText = {
            'ecole': 'École de Sport (6-12 ans) - 150€/an',
            'jeunes': 'Jeunes (13-17 ans) - 200€/an',
            'seniors': 'Seniors (18+ ans) - 250€/an'
        }[categorie] || categorie;

        // Construction du message email
        const emailSubject = `DEMANDE D'INSCRIPTION - ${nom.toUpperCase()} ${prenom}`;

        const emailBody = `DEMANDE D'INSCRIPTION - OLYMPIQUE CLUB

═══════════════════════════════════════

INFORMATIONS PERSONNELLES
------------------------
Nom : ${nom}
Prénom : ${prenom}
Date de naissance : ${dateNaissance}
Email : ${email}
Téléphone : ${telephone}

INSCRIPTION
-----------
Catégorie demandée : ${categorieText}
Niveau d'expérience : ${experience}

${message ? `MESSAGE\n--------\n${message}\n\n` : ''}CONSENTEMENT RGPD
-----------------
✓ La personne a accepté le traitement de ses données personnelles
  Date de consentement : ${new Date().toLocaleDateString('fr-FR')}

═══════════════════════════════════════

Email envoyé depuis le formulaire d'inscription sur olympiqueclub.fr`;

        // Adresse email du club (À PERSONNALISER)
        const mailto = 'contact@olympiqueclub.fr';

        // Ouverture du client email
        const mailtoLink = `mailto:${mailto}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

        window.location.href = mailtoLink;

        // Message de confirmation
        setTimeout(() => {
            alert('Votre client email va s\'ouvrir. Veuillez vérifier le message et l\'envoyer pour finaliser votre inscription.');
            inscriptionForm.reset();
        }, 500);
    });
}

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
        const nom = contactForm.querySelector('#contact-nom').value;
        const email = contactForm.querySelector('#contact-email').value;
        const telephone = contactForm.querySelector('#contact-tel').value || 'Non renseigné';
        const sujet = contactForm.querySelector('#contact-sujet').value;
        const message = contactForm.querySelector('#contact-message').value;

        // Conversion sujet
        const sujetText = {
            'inscription': 'Demande d\'inscription',
            'partenariat': 'Proposition de partenariat',
            'sponsor': 'Devenir sponsor',
            'autre': 'Autre question'
        }[sujet] || sujet;

        // Construction du message email
        const emailSubject = `CONTACT SITE WEB - ${sujetText.toUpperCase()}`;

        const emailBody = `NOUVEAU MESSAGE - OLYMPIQUE CLUB

═══════════════════════════════════════

COORDONNÉES
-----------
Nom : ${nom}
Email : ${email}
Téléphone : ${telephone}

SUJET
-----
${sujetText}

MESSAGE
-------
${message}

CONSENTEMENT RGPD
-----------------
✓ La personne a accepté le traitement de ses données personnelles
  Date de consentement : ${new Date().toLocaleDateString('fr-FR')}

═══════════════════════════════════════

Email envoyé depuis le formulaire de contact sur olympiqueclub.fr`;

        // Adresse email du club (À PERSONNALISER)
        const mailto = 'contact@olympiqueclub.fr';

        // Ouverture du client email
        const mailtoLink = `mailto:${mailto}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

        window.location.href = mailtoLink;

        // Message de confirmation
        setTimeout(() => {
            alert('Votre client email va s\'ouvrir. Veuillez vérifier le message et l\'envoyer.');
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
                let currentValue = 0;
                const isNumber = !isNaN(parseInt(finalValue));

                if (isNumber) {
                    const duration = 2000;
                    const increment = parseInt(finalValue) / (duration / 16);

                    const counter = setInterval(() => {
                        currentValue += increment;
                        if (currentValue >= parseInt(finalValue)) {
                            target.textContent = finalValue;
                            clearInterval(counter);
                        } else {
                            target.textContent = Math.floor(currentValue);
                        }
                    }, 16);
                }

                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => observer.observe(stat));
};

// Lancer l'animation des stats au chargement
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', animateStats);
} else {
    animateStats();
}

// ===================================
// Scroll Indicator Animation
// ===================================
const scrollIndicator = document.querySelector('.scroll-indicator');

if (scrollIndicator) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.visibility = 'hidden';
        } else {
            scrollIndicator.style.opacity = '1';
            scrollIndicator.style.visibility = 'visible';
        }
    });
}

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
console.log('%c🏆 OLYMPIQUE CLUB - Site Officiel 🏆', 'color: #E31837; font-size: 20px; font-weight: bold;');
console.log('%cPassion • Excellence • Victoire', 'color: #FFD700; font-size: 14px;');
