# 🍔 Burger House - Fast Food HTML Template

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

Un template HTML moderne et professionnel pour restaurants fast-food, food trucks, restaurants de burgers et établissements de restauration rapide.

## ✨ Fonctionnalités

### Design & Interface
- ✅ Design moderne et attractif
- ✅ Fully responsive (Mobile, Tablet, Desktop)
- ✅ Animations fluides avec AOS (Animate On Scroll)
- ✅ Interface utilisateur intuitive
- ✅ Menu de navigation sticky
- ✅ Bouton scroll-to-top

### Sections Incluses
- 🏠 **Hero Section** - Section d'accueil percutante avec CTA
- 🍽️ **Menu** - Grille de produits avec filtrage par catégorie
- 📖 **À Propos** - Présentation de l'entreprise avec statistiques
- 🖼️ **Galerie** - Galerie photo avec lightbox
- ⭐ **Témoignages** - Avis clients avec système de notation
- 📞 **Contact** - Formulaire de contact et informations
- 🔗 **Footer** - Footer complet avec newsletter

### Technologies Utilisées
- HTML5 sémantique
- CSS3 moderne (Grid, Flexbox, Variables CSS)
- JavaScript Vanilla (ES6+)
- Font Awesome 6.4.0
- AOS (Animate On Scroll) 2.3.1
- Google Fonts (Poppins)

### Optimisations
- ⚡ Performance optimisée
- 🎨 Code propre et commenté
- 📱 Mobile-first approach
- 🔍 SEO-friendly
- ♿ Accessible (WCAG)
- 🌐 Cross-browser compatible

## 📁 Structure des Fichiers

```
fastfood/
│
├── index.html          # Page principale
├── css/
│   └── style.css       # Feuille de style principale
├── js/
│   └── main.js         # JavaScript principal
├── images/             # Dossier pour vos images
├── assets/             # Ressources additionnelles
└── README.md           # Ce fichier
```

## 🚀 Installation

### 1. Téléchargement
Téléchargez et extrayez le template dans votre dossier de projet.

### 2. Personnalisation des Images
Les images utilisent actuellement Unsplash (images de démonstration). Remplacez-les par vos propres images :

```html
<!-- Avant -->
<img src="https://images.unsplash.com/photo-..." alt="Burger">

<!-- Après -->
<img src="images/mon-burger.jpg" alt="Mon Burger Délicieux">
```

**Sources d'images gratuites recommandées :**
- [Unsplash](https://unsplash.com) - Photos haute qualité
- [Pexels](https://pexels.com) - Images et vidéos gratuites
- [Pixabay](https://pixabay.com) - Images libres de droits
- [Foodiesfeed](https://foodiesfeed.com) - Spécialisé dans la nourriture

### 3. Personnalisation des Couleurs
Les couleurs sont définies via des variables CSS dans `css/style.css` :

```css
:root {
    --primary-color: #ff6b35;      /* Orange principal */
    --secondary-color: #f7931e;    /* Orange secondaire */
    --dark-color: #1a1a1a;         /* Couleur sombre */
    --light-color: #ffffff;        /* Couleur claire */
    /* ... */
}
```

Modifiez simplement ces valeurs pour changer toute la palette de couleurs du site.

### 4. Personnalisation du Contenu

#### Logo et Nom
```html
<div class="logo">
    <i class="fas fa-burger"></i>
    <span>Burger House</span>  <!-- Changez le nom ici -->
</div>
```

#### Menu Items
Pour ajouter un nouveau produit au menu :

```html
<div class="menu-item" data-category="burgers">
    <div class="menu-item-image">
        <img src="images/votre-burger.jpg" alt="Votre Burger">
        <div class="menu-item-badge">Nouveau</div>
    </div>
    <div class="menu-item-content">
        <h3 class="menu-item-title">Nom du Burger</h3>
        <p class="menu-item-description">Description du burger</p>
        <div class="menu-item-footer">
            <span class="menu-item-price">12.90€</span>
            <button class="btn btn-small btn-primary">
                <i class="fas fa-shopping-cart"></i> Ajouter
            </button>
        </div>
    </div>
</div>
```

#### Informations de Contact
Modifiez les informations dans la section contact :

```html
<p>123 Avenue de la République<br>75011 Paris, France</p>
<p>01 23 45 67 89<br>06 12 34 56 78</p>
<p>contact@burgerhouse.fr</p>
```

## 🎨 Personnalisation Avancée

### Ajouter une Nouvelle Catégorie au Menu

1. Ajoutez un bouton de catégorie :
```html
<button class="category-btn" data-category="salades">Salades</button>
```

2. Ajoutez des items avec cette catégorie :
```html
<div class="menu-item" data-category="salades">
    <!-- Contenu -->
</div>
```

### Modifier les Animations
Les animations sont gérées par AOS. Modifiez les attributs `data-aos` :

```html
<div data-aos="fade-up" data-aos-delay="100">
    <!-- Contenu -->
</div>
```

Options disponibles :
- `fade-up`, `fade-down`, `fade-left`, `fade-right`
- `zoom-in`, `zoom-out`
- `flip-left`, `flip-right`
- `data-aos-delay="100"` (délai en ms)
- `data-aos-duration="1000"` (durée en ms)

### Intégration E-commerce
Pour connecter à un système de commande en ligne, modifiez les boutons "Ajouter" :

```javascript
// Dans js/main.js
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const menuItem = this.closest('.menu-item');
        const title = menuItem.querySelector('.menu-item-title').textContent;
        const price = menuItem.querySelector('.menu-item-price').textContent;

        // Ajoutez votre logique d'ajout au panier ici
        addToCart({ title, price });
    });
});
```

## 📱 Responsive Breakpoints

```css
/* Desktop: > 1024px */
/* Tablet: 768px - 1024px */
@media (max-width: 1024px) { }

/* Mobile: < 768px */
@media (max-width: 768px) { }

/* Small Mobile: < 480px */
@media (max-width: 480px) { }
```

## 🔧 Configuration du Formulaire de Contact

Le formulaire est actuellement en mode démonstration. Pour le connecter à un backend :

### Option 1 : PHP Mail
```javascript
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);

    const response = await fetch('send-email.php', {
        method: 'POST',
        body: formData
    });

    if (response.ok) {
        alert('Message envoyé avec succès !');
    }
});
```

### Option 2 : Services Email (Formspree, EmailJS)
Utilisez des services comme [Formspree](https://formspree.io) ou [EmailJS](https://www.emailjs.com) pour gérer les emails sans backend.

## 🌐 Hébergement

### Sites d'Hébergement Recommandés
- **Netlify** - Gratuit, idéal pour sites statiques
- **Vercel** - Déploiement rapide et gratuit
- **GitHub Pages** - Gratuit avec GitHub
- **Hostinger** - Hébergement professionnel abordable
- **OVH** - Hébergeur français fiable

### Déploiement Rapide sur Netlify
```bash
# Installez Netlify CLI
npm install -g netlify-cli

# Déployez
netlify deploy --prod
```

## 🔍 SEO Best Practices

Le template inclut les optimisations SEO de base. N'oubliez pas de :

1. **Modifier le titre et la description** dans `<head>` :
```html
<title>Votre Titre - Mots-clés Principaux</title>
<meta name="description" content="Votre description optimisée">
```

2. **Ajouter des balises Open Graph** pour les réseaux sociaux :
```html
<meta property="og:title" content="Burger House">
<meta property="og:description" content="Les meilleurs burgers">
<meta property="og:image" content="images/og-image.jpg">
```

3. **Optimiser les images** :
   - Utilisez des formats modernes (WebP)
   - Compressez vos images
   - Ajoutez des attributs `alt` descriptifs

4. **Ajouter un sitemap.xml** et un **robots.txt**

## 📊 Performance

### Optimisations Appliquées
- Lazy loading des images
- CSS et JS minifiés (en production)
- Utilisation de CDN pour les librairies
- Animations optimisées GPU

### Pour Aller Plus Loin
```bash
# Minifiez votre CSS
npx cssnano css/style.css css/style.min.css

# Minifiez votre JavaScript
npx terser js/main.js -o js/main.min.js
```

## 🆘 Support & Ressources

### Documentation Externe
- [MDN Web Docs](https://developer.mozilla.org) - Documentation HTML/CSS/JS
- [CSS-Tricks](https://css-tricks.com) - Tutoriels CSS
- [AOS Documentation](https://michalsnik.github.io/aos/) - Animations
- [Font Awesome](https://fontawesome.com) - Icônes

### Problèmes Communs

**Les images ne s'affichent pas**
- Vérifiez les chemins d'accès relatifs
- Assurez-vous que les images sont dans le dossier `images/`

**Les animations ne fonctionnent pas**
- Vérifiez que AOS est bien chargé
- Ouvrez la console pour voir les erreurs

**Le menu mobile ne s'ouvre pas**
- Vérifiez que `main.js` est bien chargé
- Contrôlez les IDs des éléments

## 📝 Changelog

### Version 1.0.0 (2024)
- ✅ Release initiale
- ✅ Design responsive complet
- ✅ Système de filtrage menu
- ✅ Animations AOS
- ✅ Formulaire de contact
- ✅ Galerie avec lightbox

## 📄 Licence

Ce template est fourni sous licence MIT. Vous êtes libre de l'utiliser pour des projets personnels et commerciaux.

## 🤝 Crédits

- **Design & Développement** : Template professionnel
- **Polices** : Google Fonts (Poppins)
- **Icônes** : Font Awesome
- **Animations** : AOS Library
- **Images de démonstration** : Unsplash, Pexels

---

**Besoin d'aide ?** N'hésitez pas à consulter la documentation ou à demander du support.

**Bon développement ! 🚀**
