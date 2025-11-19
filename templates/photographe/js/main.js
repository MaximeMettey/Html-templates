// ===================================
// Alexandre Moreau - Photography Portfolio
// Main JavaScript
// ===================================

// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    easing: 'ease-out-cubic'
});

// ===================================
// Loader
// ===================================

window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('hidden');
        document.body.classList.add('loaded');
    }, 1000);
});

// ===================================
// Navigation
// ===================================

const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

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
// Hero Slider
// ===================================

const slides = document.querySelectorAll('.hero-slide');
const indicators = document.querySelectorAll('.indicator');
const prevBtn = document.getElementById('prevSlide');
const nextBtn = document.getElementById('nextSlide');
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    // Remove active class from all slides and indicators
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));

    // Handle index wrapping
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    // Add active class to current slide and indicator
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function startSlider() {
    slideInterval = setInterval(nextSlide, 5000);
}

function stopSlider() {
    clearInterval(slideInterval);
}

// Event listeners for slider controls
if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        nextSlide();
        stopSlider();
        startSlider();
    });
}

if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        prevSlide();
        stopSlider();
        startSlider();
    });
}

// Indicator clicks
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        showSlide(index);
        stopSlider();
        startSlider();
    });
});

// Start auto-slider
startSlider();

// Pause slider on hover
const heroSection = document.querySelector('.hero');
if (heroSection) {
    heroSection.addEventListener('mouseenter', stopSlider);
    heroSection.addEventListener('mouseleave', startSlider);
}

// ===================================
// Portfolio Filtering
// ===================================

const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        // Filter portfolio items
        portfolioItems.forEach(item => {
            const category = item.getAttribute('data-category');

            if (filterValue === 'all' || category === filterValue) {
                item.style.display = 'block';
                // Re-trigger AOS animation
                item.classList.remove('aos-animate');
                setTimeout(() => {
                    item.classList.add('aos-animate');
                }, 100);
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// ===================================
// Portfolio Lightbox
// ===================================

portfolioItems.forEach(item => {
    const viewBtn = item.querySelector('.btn-view');
    if (viewBtn) {
        viewBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const img = item.querySelector('.portfolio-image img');
            const imgSrc = img.getAttribute('src');
            const title = item.querySelector('.portfolio-info h3').textContent;
            const category = item.querySelector('.portfolio-info p').textContent;

            openLightbox(imgSrc, title, category);
        });
    }
});

function openLightbox(imgSrc, title, category) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <button class="lightbox-close">&times;</button>
            <img src="${imgSrc}" alt="${title}">
            <div class="lightbox-info">
                <h3>${title}</h3>
                <p>${category}</p>
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

    const img = lightbox.querySelector('img');
    img.style.cssText = `
        max-width: 100%;
        max-height: 80vh;
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
}

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
// Contact Form
// ===================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const inputs = contactForm.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], input[type="date"], select, textarea');
        const name = inputs[0].value;
        const email = inputs[1].value;
        const phone = inputs[2]?.value || '';
        const service = contactForm.querySelector('select')?.value || '';
        const date = contactForm.querySelector('input[type="date"]')?.value || '';
        const message = contactForm.querySelector('textarea').value;
        const rgpd = contactForm.querySelector('input[type="checkbox"]')?.checked;

        // Validation RGPD
        if (!rgpd) {
            alert('Vous devez accepter la politique de confidentialité pour continuer.');
            return;
        }

        // Create email body
        const emailBody = `
DEMANDE DE RÉSERVATION PHOTO - ${name}
======================================

INFORMATIONS CLIENT
-------------------
Nom: ${name}
Email: ${email}
Téléphone: ${phone}

PROJET
------
Type de prestation: ${service}
Date souhaitée: ${date || 'À déterminer'}

MESSAGE
-------
${message}

---
Demande envoyée via le site.
RGPD accepté le ${new Date().toLocaleDateString('fr-FR')}
        `.trim();

        // Create mailto link
        const mailtoLink = `mailto:contact@alexandremoreau.fr?subject=${encodeURIComponent('Demande Photo - ' + name)}&body=${encodeURIComponent(emailBody)}`;

        // Open email client
        window.location.href = mailtoLink;

        // Show confirmation
        setTimeout(() => {
            alert('Votre client email va s\'ouvrir. Vérifiez et envoyez.\n\nSi rien ne s\'ouvre, appelez le +33 6 12 34 56 78.');
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
        this.style.borderColor = '#c49b63';
        this.style.transform = 'translateY(-2px)';
    });

    input.addEventListener('blur', function() {
        this.style.transform = 'translateY(0)';
        if (this.value.trim() === '' && this.hasAttribute('required')) {
            this.style.borderColor = '#dc3545';
        } else {
            this.style.borderColor = 'transparent';
        }
    });
});

// ===================================
// Parallax Effect
// ===================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;

    // Parallax for hero
    const heroSlides = document.querySelectorAll('.hero-slide');
    heroSlides.forEach(slide => {
        const parallax = scrolled * 0.5;
        slide.style.transform = `translateY(${parallax}px)`;
    });
});

// ===================================
// Service Card Hover Effects
// ===================================

const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.borderTop = '4px solid #c49b63';
    });

    card.addEventListener('mouseleave', function() {
        this.style.borderTop = 'none';
    });
});

// ===================================
// Lazy Loading Images (Simple implementation)
// ===================================

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

console.log('📸 Alexandre Moreau Photography - Template loaded successfully!');
