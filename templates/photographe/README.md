# 📸 Alexandre Moreau - Photography Portfolio Template

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

Template HTML élégant et professionnel pour photographes, studios photo, et créatifs visuels.

## ✨ Caractéristiques

### Design & Fonctionnalités
- ✅ Design minimaliste et élégant
- ✅ Hero slider avec transitions douces
- ✅ Portfolio filtrable par catégories
- ✅ Lightbox pour visualisation plein écran
- ✅ Grille masonry responsive
- ✅ Animations sophistiquées
- ✅ Loader personnalisé
- ✅ 100% Responsive

### Sections
- 🏠 **Hero Slider** - Diaporama automatique avec contrôles
- 🎨 **Portfolio** - Galerie filtrable (Mariages, Portraits, Événements, Nature)
- 👤 **À Propos** - Présentation avec statistiques animées
- 💼 **Services** - Cartes de prestations avec tarifs
- ⭐ **Témoignages** - Avis clients
- 📧 **Contact** - Formulaire et informations

### Technologies
- HTML5
- CSS3 (Grid, Flexbox, Animations)
- JavaScript ES6+
- AOS (Animate On Scroll)
- Font Awesome
- Google Fonts (Playfair Display + Raleway)

## 🎨 Personnalisation

### Couleurs
Modifiez les variables CSS dans `css/style.css`:

```css
:root {
    --primary-color: #2c3e50;      /* Couleur principale */
    --secondary-color: #c49b63;    /* Couleur accent (or) */
    --dark-color: #1a1a1a;
    --light-color: #ffffff;
}
```

### Images du Slider
Remplacez les images dans la section hero:

```html
<div class="hero-slide active" style="background-image: url('images/slide-1.jpg');">
```

### Portfolio
Pour ajouter une image au portfolio:

```html
<div class="portfolio-item" data-category="wedding">
    <div class="portfolio-image">
        <img src="images/photo.jpg" alt="Description">
        <div class="portfolio-overlay">
            <div class="portfolio-info">
                <h3>Titre</h3>
                <p>Description</p>
                <button class="btn-view">
                    <i class="fas fa-search-plus"></i>
                </button>
            </div>
        </div>
    </div>
</div>
```

**Catégories disponibles:**
- `wedding` - Mariages
- `portrait` - Portraits
- `event` - Événements
- `nature` - Nature

### Services & Tarifs
Personnalisez vos prestations dans la section services:

```html
<div class="service-card">
    <div class="service-icon">
        <i class="fas fa-camera"></i>
    </div>
    <h3 class="service-title">Votre Service</h3>
    <p class="service-description">Description...</p>
    <div class="service-price">
        <span class="price-amount">Prix€</span>
    </div>
</div>
```

## 📸 Sources d'Images Gratuites

- **[Unsplash](https://unsplash.com)** - Photos haute qualité
- **[Pexels](https://pexels.com)** - Banque d'images gratuites
- **[Pixabay](https://pixabay.com)** - Images libres de droits
- **[Burst by Shopify](https://burst.shopify.com)** - Photos business

## 🚀 Utilisation

1. **Téléchargez** le template
2. **Personnalisez** le contenu (nom, photos, services, tarifs)
3. **Modifiez** les couleurs selon votre identité visuelle
4. **Ajoutez** vos propres photos dans le dossier `images/`
5. **Déployez** sur votre hébergement

## 💡 Fonctionnalités JavaScript

### Slider Automatique
Le slider défile automatiquement toutes les 5 secondes. Modifiez l'intervalle dans `js/main.js`:

```javascript
function startSlider() {
    slideInterval = setInterval(nextSlide, 5000); // 5000ms = 5s
}
```

### Filtrage Portfolio
Le filtrage est automatique. Pour ajouter une nouvelle catégorie:

1. Ajoutez un bouton de filtre:
```html
<button class="filter-btn" data-filter="nouvelle">Nouvelle Catégorie</button>
```

2. Ajoutez l'attribut aux items:
```html
<div class="portfolio-item" data-category="nouvelle">
```

### Lightbox
La lightbox s'active automatiquement au clic sur le bouton de visualisation.

## 📱 Responsive

Le template s'adapte automatiquement à tous les écrans:
- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## 🔧 Intégrations

### Formulaire de Contact
Connectez à un backend ou service email:

```javascript
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    // Votre logique d'envoi
    await sendEmail(formData);
});
```

**Services recommandés:**
- [Formspree](https://formspree.io)
- [EmailJS](https://www.emailjs.com)
- [Netlify Forms](https://www.netlify.com/products/forms/)

### Galerie Instagram
Intégrez votre feed Instagram avec [SnapWidget](https://snapwidget.com/) ou [InstaWidget](https://instawidget.net/).

## 🌐 SEO

Optimisez votre référencement:

```html
<title>Votre Nom - Photographe Professionnel à [Ville]</title>
<meta name="description" content="Photographe spécialisé en...">
<meta name="keywords" content="photographe, mariage, portrait, [ville]">
```

Ajoutez Open Graph pour les réseaux sociaux:

```html
<meta property="og:title" content="Alexandre Moreau Photography">
<meta property="og:image" content="images/og-image.jpg">
<meta property="og:description" content="Photographe professionnel">
```

## 📊 Performance

### Optimisation des Images
- Utilisez WebP pour les images modernes
- Compressez avec [TinyPNG](https://tinypng.com)
- Dimensionnez correctement (max 1920px largeur)

### Lazy Loading
Activez le lazy loading natif:

```html
<img src="image.jpg" loading="lazy" alt="Description">
```

## 🎯 Cas d'Usage

Ce template est parfait pour:
- Photographes de mariage
- Photographes portraitistes
- Studios photo
- Photographes d'événements
- Photographes corporate
- Photographes nature/paysage

## 📄 Licence

MIT License - Libre d'utilisation pour projets personnels et commerciaux.

## 🤝 Support

Pour toute question sur l'utilisation du template, consultez la documentation ou les ressources en ligne.

---

**Développé avec passion pour les créatifs visuels 📸**
