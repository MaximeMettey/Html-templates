# 🎨 Creative Studio - Template HTML Designer/Studio Créatif

Template HTML professionnel pour studios de design, agences créatives, designers freelance et professionnels de la création visuelle.

![Version](https://img.shields.io/badge/version-1.0.0-orange)
![HTML5](https://img.shields.io/badge/HTML5-100%25-orange)
![CSS3](https://img.shields.io/badge/CSS3-100%25-black)
![Responsive](https://img.shields.io/badge/responsive-100%25-orange)

---

## ✨ Aperçu

Design minimaliste noir et blanc avec accents **orange vif** (#FF4500), parfait pour mettre en valeur vos créations et projets de design. Une approche moderne et épurée qui met l'accent sur votre travail.

### 🎯 Public cible

- **Studios de design créatif**
- **Agences de branding**
- **Designers freelance** (graphistes, web designers, UI/UX)
- **Directeurs artistiques**
- **Professionnels du design print et digital**

---

## 🌟 Caractéristiques

### Design & Style
- ✅ **Palette minimaliste** : Noir/Blanc avec accent orange vif
- ✅ **Typographies élégantes** : Inter (texte) + Playfair Display (titres)
- ✅ **Design épuré** : Mise en page aérée et moderne
- ✅ **100% Responsive** : Mobile, tablette, desktop
- ✅ **Animations AOS** : Effets au scroll fluides

### Sections complètes
1. **Hero** - Hero minimaliste avec titre impactant
2. **Stats Bar** - Chiffres clés (projets, années, clients, awards)
3. **À propos** - Présentation du studio avec image
4. **Services** - 3 services (Branding, Web Design, Print Design)
5. **Portfolio** - Galerie filtreable (All, Branding, Web, Print)
6. **Process** - 4 étapes du workflow créatif
7. **Clients** - Logos clients + testimonials
8. **Contact** - Formulaire brief projet complet

### Fonctionnalités
- 🎨 **Portfolio avec filtres** : Filtre par catégorie (Branding/Web/Print)
- 📧 **Formulaire brief projet** : Collecte détaillée des besoins
- 📱 **Menu mobile** : Navigation hamburger responsive
- ✅ **RGPD compliant** : Checkbox consentement obligatoire
- 🎭 **Animations hover** : Effets sur portfolio et boutons
- ⚡ **Performance optimisée** : Code léger et rapide

---

## 📁 Structure des fichiers

```
designer-studio/
│
├── index.html          # Structure HTML principale
├── style.css           # Styles CSS (design minimaliste)
├── script.js           # JavaScript (filtres, formulaire, animations)
└── README.md           # Documentation (ce fichier)
```

---

## 🚀 Installation

### 1. Téléchargement
Téléchargez tous les fichiers dans un même dossier :
- `index.html`
- `style.css`
- `script.js`

### 2. Ouverture
Ouvrez simplement `index.html` dans votre navigateur web préféré.

### 3. C'est prêt !
Le template fonctionne immédiatement, sans serveur ni configuration.

---

## 🎨 Personnalisation

### 1️⃣ Couleurs

Les couleurs sont définies en **variables CSS** dans `style.css` (lignes 8-24) :

```css
:root {
    /* Couleur principale (orange vif) */
    --color-primary: #FF4500;        /* ← Modifiez ici */
    --color-primary-dark: #CC3700;
    --color-primary-light: #FF6A33;

    /* Noir/Blanc/Gris */
    --color-black: #000000;
    --color-white: #FFFFFF;
    --color-gray-100: #F8F8F8;
    /* ... */
}
```

**💡 Suggestions de palettes alternatives :**

```css
/* Cyan électrique */
--color-primary: #00D9FF;
--color-primary-dark: #00A8CC;
--color-primary-light: #33E0FF;

/* Rose néon */
--color-primary: #FF006E;
--color-primary-dark: #CC0058;
--color-primary-light: #FF338A;

/* Vert acide */
--color-primary: #00FF41;
--color-primary-dark: #00CC34;
--color-primary-light: #33FF66;

/* Jaune électrique */
--color-primary: #FFDD00;
--color-primary-dark: #CCB100;
--color-primary-light: #FFE433;
```

### 2️⃣ Typographies

Modifiez les polices dans `index.html` (ligne 18) et `style.css` (ligne 27-28) :

**Actuellement :**
```html
<!-- Inter + Playfair Display -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&family=Playfair+Display:wght@700;900&display=swap" rel="stylesheet">
```

**Alternatives suggérées :**

```html
<!-- Poppins + Merriweather (moderne + élégant) -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;900&family=Merriweather:wght@700;900&display=swap" rel="stylesheet">

<!-- Montserrat + Cormorant Garamond (clean + luxe) -->
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700;900&family=Cormorant+Garamond:wght@700&display=swap" rel="stylesheet">

<!-- Work Sans + Crimson Pro (minimaliste + classique) -->
<link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;600;700;900&family=Crimson+Pro:wght@700;900&display=swap" rel="stylesheet">
```

Puis dans `style.css` :
```css
--font-primary: 'Poppins', sans-serif;      /* Police principale */
--font-display: 'Merriweather', serif;      /* Police titres */
```

### 3️⃣ Logo

**Remplacer le logo texte (ligne 30-34 dans `index.html`) :**

```html
<!-- Option 1 : Logo image -->
<a href="#" class="logo">
    <img src="votre-logo.png" alt="Creative Studio" style="height: 40px;">
</a>

<!-- Option 2 : Garder le logo texte et modifier -->
<a href="#" class="logo">
    <span class="logo-text">VotreStudio</span>
    <span class="logo-dot">.</span>
</a>
```

### 4️⃣ Contenu texte

#### Modifier les informations du studio

**Hero Section** (ligne 47-56) :
```html
<h1 class="hero-title">
    We Design<br>
    <span class="highlight">Experiences</span><br>
    That Matter
</h1>
<p class="hero-subtitle">
    Studio de design créatif basé à Paris.<br>
    Nous transformons vos idées en identités visuelles puissantes.
</p>
```

**Stats** (lignes 69-88) - Modifiez les chiffres :
```html
<h3 class="stat-number">120+</h3>
<p class="stat-label">Projets réalisés</p>
```

**Contact** (lignes 594-613) :
```html
<a href="mailto:hello@creativestudio.com">hello@creativestudio.com</a>
<a href="tel:+33123456789">+33 1 23 45 67 89</a>
<p>42 Rue de Rivoli<br>75001 Paris, France</p>
```

### 5️⃣ Portfolio

#### Ajouter/Modifier des projets

Chaque projet suit cette structure (lignes 232-249) :

```html
<div class="portfolio-item" data-category="branding" data-aos="fade-up">
    <div class="portfolio-image">
        <img src="URL_IMAGE" alt="Description">
        <div class="portfolio-overlay">
            <div class="portfolio-info">
                <span class="portfolio-category">Branding</span>
                <h3 class="portfolio-title">Nom du Projet</h3>
                <p class="portfolio-description">Description courte</p>
                <a href="#" class="portfolio-link">
                    Voir le projet <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>
    </div>
</div>
```

**Catégories disponibles :**
- `data-category="branding"` → Branding
- `data-category="web"` → Web Design
- `data-category="print"` → Print

#### Sources d'images gratuites

**Unsplash (actuellement utilisé) :**
```
https://images.unsplash.com/photo-PHOTO_ID?w=800&q=80
```

**Alternatives :**
- [Pexels](https://www.pexels.com) - Photos et vidéos gratuites
- [Pixabay](https://pixabay.com) - Images et illustrations
- [Freepik](https://www.freepik.com) - Designs et mockups

### 6️⃣ Services

Modifier les services (lignes 133-194) :

```html
<div class="service-card" data-aos="fade-up">
    <div class="service-icon">
        <i class="fas fa-palette"></i>  <!-- Icône Font Awesome -->
    </div>
    <h3 class="service-title">Branding</h3>
    <p class="service-description">Description du service</p>
    <ul class="service-list">
        <li>Prestation 1</li>
        <li>Prestation 2</li>
        <li>Prestation 3</li>
        <li>Prestation 4</li>
    </ul>
</div>
```

**Icônes Font Awesome disponibles :**
- `fa-palette` - Branding
- `fa-desktop` - Web Design
- `fa-print` - Print
- `fa-mobile-alt` - Mobile
- `fa-pen-nib` - Illustration
- `fa-camera` - Photographie
- `fa-video` - Vidéo

### 7️⃣ Process créatif

Modifier les étapes (lignes 411-482) :

```html
<div class="process-step" data-aos="fade-right">
    <div class="step-number">01</div>
    <div class="step-content">
        <h3 class="step-title">Titre de l'étape</h3>
        <p class="step-description">Description</p>
        <ul class="step-list">
            <li>Détail 1</li>
            <li>Détail 2</li>
            <li>Détail 3</li>
        </ul>
    </div>
</div>
```

### 8️⃣ Formulaire de contact

#### Modifier l'email de réception

Dans `script.js` (ligne 132) :

```javascript
window.location.href = `mailto:hello@creativestudio.com?subject=${subject}&body=${body}`;
//                              ↑ Remplacez par votre email
```

#### Personnaliser les options du formulaire

**Type de projet** (ligne 641-649) :
```html
<select id="service" name="service" required>
    <option value="">Sélectionnez un service</option>
    <option value="branding">Branding & Identité visuelle</option>
    <option value="web">Web Design & UI/UX</option>
    <option value="print">Print Design</option>
    <option value="multiple">Projet multi-services</option>
    <option value="other">Autre</option>
</select>
```

**Budget** (ligne 653-661) :
```html
<select id="budget" name="budget">
    <option value="">Sélectionnez une fourchette</option>
    <option value="5k-10k">5 000€ - 10 000€</option>
    <option value="10k-25k">10 000€ - 25 000€</option>
    <option value="25k-50k">25 000€ - 50 000€</option>
    <option value="50k+">50 000€+</option>
</select>
```

---

## 📱 Responsive Design

Le template est **100% responsive** avec 3 breakpoints :

| Device | Breakpoint | Modifications |
|--------|-----------|---------------|
| **Mobile** | < 768px | Menu hamburger, grille 1 colonne, stack vertical |
| **Tablette** | 768px - 1024px | Grille 2 colonnes, espacements réduits |
| **Desktop** | > 1024px | Grille complète, tous effets visuels |

### Tester le responsive

1. **Chrome DevTools** : F12 → Toggle device toolbar
2. **Firefox** : F12 → Responsive Design Mode
3. **Safari** : Develop → Enter Responsive Design Mode

---

## 🎭 Animations

### AOS (Animate On Scroll)

Animations configurées dans `script.js` (lignes 9-14) :

```javascript
AOS.init({
    duration: 1000,     // Durée des animations (ms)
    once: true,         // Animation une seule fois
    offset: 100,        // Offset avant déclenchement (px)
    easing: 'ease-out-cubic'
});
```

**Modifier une animation :**

Dans `index.html`, changez les attributs `data-aos` :

```html
<!-- Exemples d'animations disponibles -->
<div data-aos="fade-up">         <!-- Fondu vers le haut -->
<div data-aos="fade-down">       <!-- Fondu vers le bas -->
<div data-aos="fade-left">       <!-- Fondu depuis la gauche -->
<div data-aos="fade-right">      <!-- Fondu depuis la droite -->
<div data-aos="zoom-in">         <!-- Zoom avant -->
<div data-aos="flip-left">       <!-- Rotation 3D -->

<!-- Avec délai -->
<div data-aos="fade-up" data-aos-delay="200">
```

[Toutes les animations AOS](https://michalsnik.github.io/aos/)

---

## 🔧 Configuration avancée

### Modifier les espacements

Dans `style.css` (lignes 30-35) :

```css
:root {
    --spacing-xs: 0.5rem;   /* 8px */
    --spacing-sm: 1rem;     /* 16px */
    --spacing-md: 2rem;     /* 32px */
    --spacing-lg: 4rem;     /* 64px */
    --spacing-xl: 6rem;     /* 96px */
    --spacing-xxl: 8rem;    /* 128px */
}
```

Utilisés dans les sections :
```css
.about {
    padding: var(--spacing-xxl) 0;  /* 128px haut/bas */
}
```

### Modifier les transitions

Dans `style.css` (lignes 41-44) :

```css
:root {
    --transition-fast: 0.2s ease;
    --transition-normal: 0.3s ease;
    --transition-slow: 0.5s ease;
}
```

---

## 🌐 SEO & Métadonnées

### Modifier les balises meta

Dans `index.html` (lignes 5-13) :

```html
<meta name="description" content="Votre description (150-160 caractères)">
<meta name="keywords" content="design, studio, branding, vos mots-clés">

<!-- Open Graph (réseaux sociaux) -->
<meta property="og:title" content="Votre Titre">
<meta property="og:description" content="Votre description">
<meta property="og:image" content="URL_IMAGE_PREVIEW">
<meta property="og:url" content="https://votre-site.com">
```

### Title

```html
<title>Votre Studio - Design & Branding</title>
```

---

## 📊 Statistiques du template

- **Lignes HTML** : ~730
- **Lignes CSS** : ~1150
- **Lignes JavaScript** : ~280
- **Total** : ~2160 lignes de code
- **Poids total** : ~120 KB (hors images)
- **Performance** : Chargement < 1s

---

## 🎨 Palette de couleurs

### Actuelle (Orange vif)

| Couleur | HEX | Usage |
|---------|-----|-------|
| Orange vif | `#FF4500` | Accent principal, CTA, highlights |
| Orange foncé | `#CC3700` | Hover états |
| Orange clair | `#FF6A33` | Variantes |
| Noir | `#000000` | Titres, texte important |
| Blanc | `#FFFFFF` | Fond, texte sur noir |
| Gris 600 | `#666666` | Texte secondaire |

### Alternatives suggérées

**Cyan moderne :**
```css
--color-primary: #00D9FF;  /* Cyan vif */
```

**Rose créatif :**
```css
--color-primary: #FF006E;  /* Rose magenta */
```

**Jaune énergique :**
```css
--color-primary: #FFDD00;  /* Jaune vif */
```

---

## 🔌 Dépendances externes

### CDN utilisés

1. **Google Fonts** (gratuit)
   - Inter : texte
   - Playfair Display : titres

2. **Font Awesome 6.4.0** (gratuit)
   - Icônes

3. **AOS 2.3.4** (gratuit)
   - Animations au scroll

**Avantage** : Pas d'installation, tout fonctionne via CDN.
**Note** : Connexion internet requise.

---

## 🐛 Résolution de problèmes

### Les animations ne fonctionnent pas

**Solution :** Vérifiez que AOS est bien chargé :
```html
<link rel="stylesheet" href="https://unpkg.com/aos@2.3.4/dist/aos.css">
<script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>
```

### Le formulaire ne s'envoie pas

**Cause** : Le template utilise `mailto:` (pas de backend).
**Solution** : Vérifiez que vous avez un client email configuré, ou intégrez un service comme [Formspree](https://formspree.io) ou [EmailJS](https://www.emailjs.com).

### Les filtres portfolio ne fonctionnent pas

**Vérification** :
1. `script.js` est bien lié dans `index.html`
2. Les boutons ont l'attribut `data-filter`
3. Les items ont l'attribut `data-category`

### Menu mobile ne s'ouvre pas

**Vérification** :
1. JavaScript est activé dans le navigateur
2. `script.js` est chargé après le HTML
3. Pas d'erreurs dans la console (F12)

---

## 📝 Mentions légales

### Licenses

- **Template** : Libre d'utilisation (personnel et commercial)
- **Google Fonts** : SIL Open Font License
- **Font Awesome** : Font Awesome Free License
- **AOS** : MIT License
- **Images Unsplash** : Unsplash License (gratuites)

### Crédits

- **Template** : HTML Business Templates Collection
- **Typographies** : Google Fonts
- **Icônes** : Font Awesome
- **Animations** : AOS Library
- **Images** : Unsplash (à remplacer par vos propres images)

---

## 📞 Support

Pour toute question ou problème :

1. **Vérifiez la documentation** ci-dessus
2. **Consultez les commentaires** dans le code source
3. **Testez dans un navigateur moderne** (Chrome, Firefox, Safari, Edge)

---

## 🚀 Prochaines étapes

### Après installation

1. ✅ **Personnaliser les couleurs** selon votre identité
2. ✅ **Remplacer le contenu** par vos informations
3. ✅ **Ajouter vos projets** dans le portfolio
4. ✅ **Modifier les images** par vos visuels
5. ✅ **Configurer le formulaire** avec votre email
6. ✅ **Tester le responsive** sur tous les devices
7. ✅ **Optimiser les images** (compression, tailles adaptées)
8. ✅ **Héberger en ligne** (GitHub Pages, Netlify, Vercel...)

### Améliorations possibles

- [ ] Ajouter une lightbox pour le portfolio
- [ ] Intégrer un backend pour le formulaire
- [ ] Créer des pages de détail pour chaque projet
- [ ] Ajouter un blog
- [ ] Intégrer Google Analytics
- [ ] Optimiser le SEO
- [ ] Ajouter un mode sombre

---

## ✅ Checklist de lancement

Avant de mettre en ligne :

- [ ] Toutes les couleurs sont personnalisées
- [ ] Tous les textes sont modifiés
- [ ] Email de contact est configuré
- [ ] Images sont remplacées et optimisées
- [ ] Logo est ajouté
- [ ] Réseaux sociaux sont liés
- [ ] Meta tags SEO sont remplis
- [ ] Site testé sur mobile, tablette, desktop
- [ ] Formulaire de contact testé
- [ ] Mentions légales ajoutées
- [ ] Politique de confidentialité (RGPD)

---

## 📈 Version

**Version actuelle :** 1.0.0
**Date de création :** Novembre 2024
**Dernière mise à jour :** Novembre 2024

---

**🎨 Bon design et bonne créativité avec votre nouveau template !**

*Template conçu pour les professionnels du design qui veulent une présence en ligne élégante, minimaliste et efficace.*
