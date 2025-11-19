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
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
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
// Product Filter Functionality
// ===================================
const filterBtns = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));

        // Add active class to clicked button
        btn.classList.add('active');

        // Get filter value
        const filterValue = btn.getAttribute('data-filter');

        // Filter product cards
        productCards.forEach(card => {
            const category = card.getAttribute('data-category');

            if (filterValue === 'all' || category === filterValue) {
                card.style.display = 'block';
                // Re-trigger AOS animation
                card.classList.add('aos-animate');
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// ===================================
// Formulaire de Contact/Commande avec mailto
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
        const type = contactForm.querySelector('#type').value;
        const date = contactForm.querySelector('#date').value || 'Non spécifiée';
        const personnes = contactForm.querySelector('#personnes').value || 'Non spécifié';
        const message = contactForm.querySelector('#message').value;

        // Conversion type commande
        const typeText = {
            'evenement': 'Événement (mariage, baptême...)',
            'entreprise': 'Commande entreprise',
            'patisserie': 'Pâtisserie sur mesure',
            'autre': 'Autre'
        }[type] || type;

        // Construction du message email
        const emailSubject = `COMMANDE SPÉCIALE - ${typeText.toUpperCase()} - ${nom}`;

        const emailBody = `DEMANDE DE COMMANDE SPÉCIALE - AU BON PAIN DORÉ

═══════════════════════════════════════

INFORMATIONS CLIENT
-------------------
Nom : ${nom}
Email : ${email}
Téléphone : ${telephone}

COMMANDE
--------
Type : ${typeText}
Date souhaitée : ${date}
Nombre de personnes : ${personnes}

DÉTAILS DE LA COMMANDE
-----------------------
${message}

CONSENTEMENT RGPD
-----------------
✓ Le client a accepté le traitement de ses données personnelles
  Date de consentement : ${new Date().toLocaleDateString('fr-FR')}

═══════════════════════════════════════

Email envoyé depuis le formulaire de commande sur aubonpaindore.fr`;

        // Adresse email de la boulangerie (À PERSONNALISER)
        const mailto = 'contact@aubonpaindore.fr';

        // Ouverture du client email
        const mailtoLink = `mailto:${mailto}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

        window.location.href = mailtoLink;

        // Message de confirmation
        setTimeout(() => {
            alert('Votre client email va s\'ouvrir. Veuillez vérifier le message et l\'envoyer pour finaliser votre commande.');
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
    // Minimum 2 jours à l'avance pour les commandes spéciales
    const minDate = new Date(today);
    minDate.setDate(minDate.getDate() + 2);

    const minDateString = minDate.toISOString().split('T')[0];
    dateInput.setAttribute('min', minDateString);
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

                // Extract numeric value
                let numericValue = parseInt(finalValue.replace(/[^0-9]/g, ''));

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
// Animation de la badge sur hero au scroll
// ===================================
const heroBadge = document.querySelector('.hero-badge');

if (heroBadge) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroHeight = document.querySelector('.hero').offsetHeight;

        if (scrolled < heroHeight) {
            heroBadge.style.transform = `translateY(${scrolled * 0.3}px)`;
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
    }
}, true);

// ===================================
// Console Message
// ===================================
console.log('%c🥖 Au Bon Pain Doré 🥖', 'color: #8B4513; font-size: 20px; font-weight: bold; font-family: Playfair Display;');
console.log('%cBoulangerie artisanale depuis 1985', 'color: #D2691E; font-size: 14px;');
