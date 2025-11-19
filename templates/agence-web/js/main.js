// Init AOS
AOS.init({ duration: 1000, once: true, offset: 100 });

// Navigation
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger?.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger?.classList.remove('active');
    });
});

// Active link on scroll
window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    document.querySelectorAll('section[id]').forEach(section => {
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
            window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
        }
    });
});

// Portfolio Filter
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        portfolioItems.forEach(item => {
            const category = item.getAttribute('data-category');
            if (filter === 'all' || category === filter) {
                item.style.display = 'block';
                item.classList.remove('aos-animate');
                setTimeout(() => item.classList.add('aos-animate'), 100);
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Contact Form avec mailto + RGPD
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const inputs = contactForm.querySelectorAll('input[type="text"], input[type="email"], select, textarea');
        const name = inputs[0].value;
        const email = inputs[1].value;
        const company = inputs[2]?.value || '';
        const projectType = contactForm.querySelectorAll('select')[0].value;
        const budget = contactForm.querySelectorAll('select')[1]?.value || 'Non spécifié';
        const message = contactForm.querySelector('textarea').value;
        const rgpd = contactForm.querySelector('input[type="checkbox"]').checked;

        if (!rgpd) {
            alert('Vous devez accepter la politique de confidentialité.');
            return;
        }

        const emailBody = `
NOUVEAU PROJET WEB - ${name}
============================

CLIENT
------
Nom: ${name}
Email: ${email}
Entreprise: ${company}

PROJET
------
Type: ${projectType}
Budget: ${budget}

DESCRIPTION
-----------
${message}

---
Demande via formulaire Digital Wave
RGPD accepté le ${new Date().toLocaleDateString('fr-FR')}
        `.trim();

        const mailtoLink = `mailto:hello@digitalwave.fr?subject=${encodeURIComponent('Nouveau Projet - ' + projectType)}&body=${encodeURIComponent(emailBody)}`;
        window.location.href = mailtoLink;

        setTimeout(() => {
            alert('Votre client email s\'ouvre. Vérifiez et envoyez.\n\nPas d\'email ? Appelez le +33 6 12 34 56 78');
            contactForm.reset();
        }, 500);
    });
}

// Scroll to top
const scrollTop = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
    scrollTop.classList.toggle('active', window.scrollY > 300);
});
scrollTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

console.log('🚀 Digital Wave - Template loaded!');
