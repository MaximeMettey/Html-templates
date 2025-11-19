// ===================================
// AOS Animation Init
// ===================================
AOS.init({
    duration: 1000,
    easing: 'ease-out-cubic',
    once: true,
    offset: 120
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
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.padding = '12px 0';
        header.style.boxShadow = '0 2px 20px rgba(212, 175, 55, 0.15)';
    } else {
        header.style.padding = '20px 0';
        header.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.05)';
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
        const sectionTop = section.offsetTop - 150;
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
    if (window.pageYOffset > 400) {
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
    let animated = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                const target = entry.target;
                const finalValue = target.textContent;
                const hasPercent = finalValue.includes('%');
                const hasPlus = finalValue.includes('+');

                // Extract numeric value
                let numericValue = parseInt(finalValue.replace(/[^0-9]/g, ''));

                if (!isNaN(numericValue)) {
                    let currentValue = 0;
                    const duration = 2000;
                    const increment = numericValue / (duration / 16);

                    const counter = setInterval(() => {
                        currentValue += increment;
                        if (currentValue >= numericValue) {
                            target.textContent = numericValue + (hasPercent ? ' %' : '') + (hasPlus ? '+' : '');
                            clearInterval(counter);
                        } else {
                            target.textContent = Math.floor(currentValue) + (hasPercent ? ' %' : '') + (hasPlus ? '+' : '');
                        }
                    }, 16);
                }

                animated = true;
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
        const prenom = contactForm.querySelector('#prenom').value;
        const nom = contactForm.querySelector('#nom').value;
        const email = contactForm.querySelector('#email').value;
        const telephone = contactForm.querySelector('#telephone').value;
        const dateMariage = contactForm.querySelector('#date_mariage').value;
        const lieu = contactForm.querySelector('#lieu').value || 'Non spécifié';
        const invites = contactForm.querySelector('#invites').value;
        const budget = contactForm.querySelector('#budget').value || 'Non spécifié';
        const forfait = contactForm.querySelector('#forfait').value;
        const message = contactForm.querySelector('#message').value;

        // Conversion forfait
        const forfaitText = {
            'essentiel': 'Essentiel - Coordination Jour J',
            'prestige': 'Prestige - Organisation Partielle',
            'excellence': 'Excellence - Organisation Complète',
            'conseil': 'Je ne sais pas encore / Besoin de conseils'
        }[forfait] || forfait;

        // Format date mariage
        let dateFormatted = dateMariage;
        if (dateMariage) {
            const d = new Date(dateMariage);
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            dateFormatted = d.toLocaleDateString('fr-FR', options);
        }

        // Construction du message email
        const emailSubject = `DEMANDE WEDDING PLANNER - ${prenom} & ${nom} - ${dateFormatted}`;

        const emailBody = `DEMANDE D'ORGANISATION MARIAGE - DIVINE WEDDINGS

═══════════════════════════════════════

INFORMATIONS COUPLE
-------------------
Prénom : ${prenom}
Nom : ${nom}
Email : ${email}
Téléphone : ${telephone}

DÉTAILS DU MARIAGE
------------------
📅 Date du mariage : ${dateFormatted}
📍 Lieu souhaité : ${lieu}
👥 Nombre d'invités : ${invites} personnes
💰 Budget estimé : ${budget}

PRESTATION SOUHAITÉE
--------------------
Forfait : ${forfaitText}

PROJET & ENVIES
---------------
${message}

CONSENTEMENT RGPD
-----------------
✓ Le couple a accepté le traitement de ses données personnelles
  Date de consentement : ${new Date().toLocaleDateString('fr-FR')}

═══════════════════════════════════════

Email envoyé depuis le formulaire de contact sur divineweddings.fr

** Premier rendez-vous découverte GRATUIT et sans engagement **`;

        // Adresse email du wedding planner (À PERSONNALISER)
        const mailto = 'contact@divineweddings.fr'; // ← CHANGEZ ICI

        // Ouverture du client email
        const mailtoLink = `mailto:${mailto}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

        window.location.href = mailtoLink;

        // Message de confirmation
        setTimeout(() => {
            alert('Votre client email va s\'ouvrir. Veuillez vérifier le message et l\'envoyer pour finaliser votre demande.\n\n✨ Nous avons hâte d\'en savoir plus sur votre projet de mariage !');
            contactForm.reset();
        }, 500);
    });
}

// ===================================
// Set Minimum Date for Wedding Date
// ===================================
const dateInput = document.querySelector('#date_mariage');
if (dateInput) {
    // Minimum 3 mois dans le futur
    const today = new Date();
    const minDate = new Date(today.setMonth(today.getMonth() + 3));
    const minDateString = minDate.toISOString().split('T')[0];
    dateInput.setAttribute('min', minDateString);
}

// ===================================
// Portfolio Lightbox (Simple)
// ===================================
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        if (img) {
            // Simple - pour une vraie lightbox, utiliser une bibliothèque
            window.open(img.src, '_blank');
        }
    });
});

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
                heroBg.style.transform = `translateY(${scrolled * 0.4}px)`;
            }
        }
    }
});

// ===================================
// Scroll Indicator Fade
// ===================================
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const opacity = Math.max(0, 1 - scrolled / 300);
        scrollIndicator.style.opacity = opacity;
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
// Package Card Hover Effect
// ===================================
const packageCards = document.querySelectorAll('.package-card');
packageCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        packageCards.forEach(c => {
            if (c !== card && !c.classList.contains('featured')) {
                c.style.opacity = '0.7';
            }
        });
    });

    card.addEventListener('mouseleave', () => {
        packageCards.forEach(c => {
            c.style.opacity = '1';
        });
    });
});

// ===================================
// Formulaire Validation
// ===================================
if (contactForm) {
    const inputs = contactForm.querySelectorAll('input[required], select[required], textarea[required]');

    inputs.forEach(input => {
        input.addEventListener('invalid', (e) => {
            e.preventDefault();
            input.style.borderColor = '#E8A5A5';
        });

        input.addEventListener('input', () => {
            if (input.checkValidity()) {
                input.style.borderColor = '#E8E8E8';
            }
        });
    });
}

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
console.log('%c💍 DIVINE WEDDINGS 💍', 'color: #D4AF37; font-size: 24px; font-weight: bold; font-family: Playfair Display;');
console.log('%cWedding Planner de Luxe', 'color: #F4C2C2; font-size: 16px; font-weight: bold;');
console.log('%cCréons ensemble le mariage de vos rêves ✨', 'color: #8B8B8B; font-size: 13px;');
