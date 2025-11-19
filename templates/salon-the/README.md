# 🍵 Le Jardin Secret - Template Salon de Thé HTML

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

Template HTML élégant et raffiné pour salons de thé, maisons de thé, tea rooms, coffee shops haut de gamme et pâtisseries françaises.

## ✨ Caractéristiques

### Design & Ambiance
- ✅ Design élégant et minimaliste
- ✅ Palette de couleurs douce (beige, or rose, crème)
- ✅ Typographies raffinées (Cormorant Garamond + Lora)
- ✅ Hero full-screen avec overlay élégant
- ✅ Animations douces et subtiles
- ✅ Ambiance cosy et chaleureuse
- ✅ 100% Responsive

### Sections Incluses
- 🏠 **Hero** - Image immersive avec titre poétique
- 📖 **Notre Histoire** - Présentation avec statistiques
- 🍰 **Carte** - Menu filtrable (Thés, Pâtisseries, Brunch, Boissons)
- 📸 **Ambiance** - Galerie photos 6 images
- 🎉 **Événements** - Privatisation (anniversaires, baby shower, entreprise)
- ⭐ **Témoignages** - Avis clients avec étoiles
- 📞 **Contact** - Formulaire avec mailto + coordonnées

### Fonctionnalités Techniques
- Menu filtrable par catégories (JavaScript)
- Formulaire contact avec mailto (pas d'inscription)
- Conformité RGPD intégrée
- Animations AOS (Animate On Scroll)
- Navigation sticky responsive
- Galerie d'images interactive
- Validation de formulaire

### Technologies
- HTML5 sémantique
- CSS3 (Grid, Flexbox, Transitions)
- JavaScript ES6+ Vanilla
- AOS 2.3.1 (Animate On Scroll)
- Font Awesome 6.4.0
- Google Fonts (Cormorant Garamond + Lora)

## 🎨 Personnalisation

### Couleurs

Modifiez les variables CSS dans `css/style.css`:

```css
:root {
    --primary: #C9A063;        /* Or rose */
    --primary-dark: #A67C52;   /* Or foncé */
    --secondary: #8B7355;      /* Marron doux */
    --accent: #D4AF37;         /* Or métallique */
    --cream: #F5F1E8;          /* Crème */
    --beige: #E8DCC8;          /* Beige */
    --text-dark: #3E2C1C;      /* Marron foncé */
    --text-light: #7A6A55;     /* Taupe */
}
```

**Suggestions de palettes:**
- **Classique** (défaut): Beige/Or `#C9A063`, `#F5F1E8`
- **Rose Poudré**: Rose/Blanc `#E8B4B8`, `#FFF5F7`
- **Vert Menthe**: Vert/Crème `#A8D5BA`, `#F5F5DC`
- **Lavande**: Violet/Blanc `#C8B8DB`, `#FAF9F6`

### Contenu

#### Nom et Logo
```html
<div class="logo">
    <i class="fas fa-leaf"></i>  <!-- Icône à changer -->
    <span>Le Jardin Secret</span> <!-- Votre nom -->
</div>
```

**Icônes Font Awesome suggérées:**
- `fa-leaf` - Feuille de thé (défaut)
- `fa-coffee` - Tasse de café
- `fa-mug-hot` - Tasse chaude
- `fa-birthday-cake` - Pâtisserie
- `fa-heart` - Cœur élégant
- `fa-spa` - Zen/relaxation

#### Titre Hero
```html
<h1 class="hero-title">L'Art du Thé à la Française</h1>
<p class="hero-subtitle">Une parenthèse de douceur dans votre journée</p>
```

Personnalisez selon votre philosophie et votre style.

#### Histoire et Statistiques
```html
<div class="stat-box">
    <div class="stat-number">25+</div>
    <div class="stat-label">Ans d'Excellence</div>
</div>
```

Modifiez avec vos vraies données : années d'existence, variétés de thés, avis clients.

### Menu / Carte

#### Ajouter un Article au Menu
```html
<div class="menu-item" data-category="thes" data-aos="fade-up">
    <div class="menu-item-header">
        <h3 class="menu-item-name">Nom du Thé</h3>
        <span class="menu-item-price">6€</span>
    </div>
    <p class="menu-item-description">Description délicate et appétissante...</p>
    <div class="menu-item-tag">Bio</div> <!-- Optionnel -->
</div>
```

**Catégories disponibles** (attribut `data-category`):
- `thes` - Thés et infusions
- `patisseries` - Pâtisseries et desserts
- `brunch` - Formules brunch
- `boissons` - Autres boissons

**Tags suggérés:**
- Bio
- Grand Cru
- Signature
- Sans théine
- Vegan
- Sans gluten
- Frais

### Galerie d'Ambiance

Remplacez les URLs Unsplash par vos propres photos:

```html
<div class="gallery-item">
    <img src="images/galerie/interieur-1.jpg" alt="Description">
    <div class="gallery-overlay">
        <i class="fas fa-search-plus"></i>
    </div>
</div>
```

**Conseils photos:**
- Qualité professionnelle (photographe recommandé)
- Lumière naturelle de préférence
- Format 1:1 (carré) ou 4:3
- Résolution: 800x800px minimum
- Compresser avec TinyPNG
- Montrez: intérieur, produits, service, détails

**Que photographier:**
- Tasses de thé fumantes
- Pâtisseries bien présentées
- Décoration intérieure cosy
- Table dressée
- Détails vintage
- Clients souriants (avec autorisation)

### Événements Privés

Modifiez les 3 types d'événements ou ajoutez les vôtres:

```html
<div class="event-card">
    <div class="event-icon">
        <i class="fas fa-icon-name"></i>
    </div>
    <h3 class="event-title">Type d'Événement</h3>
    <p class="event-description">Description...</p>
    <ul class="event-features">
        <li><i class="fas fa-check"></i> Avantage 1</li>
        <li><i class="fas fa-check"></i> Avantage 2</li>
        <li><i class="fas fa-check"></i> Avantage 3</li>
    </ul>
</div>
```

**Événements suggérés:**
- Anniversaires
- Baby Shower
- Enterrement de vie de jeune fille (EVJF)
- Réunions d'entreprise / Séminaires
- Ateliers dégustation de thés
- Cours de pâtisserie
- Brunchs privés

## 📧 Formulaire avec mailto

### Comment ça fonctionne ?

Le formulaire utilise **mailto:** - aucune inscription ni service externe requis.

Quand un client soumet:
1. Les données sont collectées
2. Son client email s'ouvre avec un message pré-rempli
3. Il vérifie et envoie

**Avantages:**
- ✅ Pas de backend nécessaire
- ✅ Pas d'inscription à FormsPree, EmailJS, etc.
- ✅ Gratuit à 100%
- ✅ RGPD compliant
- ✅ Fonctionne immédiatement

### Configuration Email

Dans `js/main.js`, ligne 200, modifiez l'adresse email:

```javascript
const mailto = 'contact@lejardinsecret.fr'; // ← CHANGEZ ICI
```

### RGPD - Conformité

Le formulaire inclut une case à cocher RGPD **obligatoire**:

```html
<input type="checkbox" id="rgpd" name="rgpd" required>
<label for="rgpd">
    J'accepte que mes données personnelles soient utilisées pour me recontacter
    dans le cadre de ma demande. Conformément au RGPD, vous disposez d'un droit
    d'accès, de rectification et de suppression de vos données.
</label>
```

### Alternative: Service Email

Si mailto ne convient pas (par ex: formulaires lourds), utilisez **Formspree**:

1. Créez un compte sur https://formspree.io (gratuit)
2. Obtenez votre endpoint
3. Modifiez le formulaire:

```html
<form action="https://formspree.io/f/VOTRE_ID" method="POST">
    <!-- Gardez tous vos champs identiques -->
</form>
```

## 🖼️ Images

### Sources Gratuites

- **Unsplash** - https://unsplash.com/s/photos/tea
- **Pexels** - https://www.pexels.com/search/pastry/
- **Pixabay** - https://pixabay.com/images/search/tea room/

### Recherches suggérées:
- "tea cup"
- "french pastry"
- "tea room interior"
- "afternoon tea"
- "macaron"
- "cozy cafe"

### Optimisation

**Avant mise en ligne:**
1. Compresser avec TinyPNG ou Squoosh
2. Format: JPG pour photos, PNG pour logos
3. Nommer clairement: `hero-salon.jpg`, `macaron-rose.jpg`

## 📱 Responsive

Testé sur:
- 📱 Mobile: iPhone, Android (320px+)
- 📱 Tablet: iPad (768px+)
- 💻 Desktop: PC, Mac (1024px+)

Points de rupture CSS:
- 1024px: Tablettes et petits laptops
- 768px: Menu mobile activé
- 480px: Petits smartphones

## 🚀 Déploiement

### Hébergement Gratuit

**Netlify** (recommandé - le plus simple):
```bash
# Via CLI
npm install -g netlify-cli
netlify deploy --prod

# Ou via interface web
# 1. Créez un compte sur netlify.com
# 2. Glissez-déposez votre dossier
# 3. Site en ligne en 30 secondes !
```

**GitHub Pages**:
```bash
# 1. Créez un repository sur GitHub
# 2. Pushez vos fichiers
git init
git add .
git commit -m "Initial commit"
git remote add origin URL_VOTRE_REPO
git push -u origin main

# 3. Activez Pages dans Settings > Pages
```

**Vercel**:
```bash
npm install -g vercel
vercel --prod
```

### Hébergement Payant (Recommandé pour Commerce)

- **OVH** - ~3€/mois, français, support FR
- **o2switch** - ~5€/mois, illimité, très bien noté
- **Hostinger** - ~2€/mois, international
- **Ionos** - ~4€/mois, allemand, sérieux

## 🔍 SEO

### Métadonnées Essentielles

Personnalisez dans `<head>`:

```html
<title>Le Jardin Secret - Salon de Thé & Pâtisserie Fine à Paris</title>
<meta name="description" content="Salon de thé élégant à Paris. Plus de 80 thés d'exception, pâtisseries artisanales maison, brunch gourmand. Privatisation possible.">
<meta name="keywords" content="salon de thé paris, thé paris, pâtisserie paris, brunch paris, tea room, maison de thé">
```

### Local SEO (Référencement Local)

Ajoutez Schema.org dans `<head>` pour apparaître dans Google Maps:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  "name": "Le Jardin Secret",
  "image": "https://www.lejardinsecret.fr/images/facade.jpg",
  "servesCuisine": "Thé, Pâtisserie Française",
  "priceRange": "€€",
  "telephone": "+33142345678",
  "email": "contact@lejardinsecret.fr",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "24 Rue des Rosiers",
    "addressLocality": "Paris",
    "postalCode": "75004",
    "addressCountry": "FR"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "10:00",
      "closes": "19:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday", "Sunday"],
      "opens": "09:00",
      "closes": "20:00"
    }
  ],
  "url": "https://www.lejardinsecret.fr"
}
</script>
```

### Google My Business

1. Créez un compte Google My Business
2. Ajoutez votre établissement
3. Remplissez TOUTES les infos
4. Ajoutez de belles photos
5. Demandez des avis clients

## 🎯 Adaptations par Type

### Coffee Shop Moderne

1. **Couleurs**: Marron café
```css
--primary: #6F4E37;
--cream: #F5F5DC;
```

2. **Icône**: `fa-coffee`

3. **Sections**: Ajoutez "Nos Cafés", retirez catégorie Thés

4. **Ambiance**: Plus moderne, moins classique

### Pâtisserie Française

1. **Couleurs**: Rose poudré
```css
--primary: #E8B4B8;
--cream: #FFF5F7;
```

2. **Icône**: `fa-birthday-cake`

3. **Carte**: Focus sur pâtisseries, retirez brunch

4. **Sections**: Ajoutez "Nos Créations", "Chef Pâtissier"

### Bubble Tea

1. **Couleurs**: Coloré et fun
```css
--primary: #FF6B9D;
--secondary: #00D4FF;
```

2. **Design**: Plus jeune et dynamique

3. **Menu**: Bubble tea, smoothies, desserts asiatiques

## ✅ Checklist Avant Mise en Ligne

### Contenu
- [ ] Changer le nom du salon partout
- [ ] Modifier les couleurs selon votre charte
- [ ] Remplacer l'icône du logo
- [ ] Personnaliser titre et sous-titre hero
- [ ] Réécrire la section "Notre Histoire"
- [ ] Mettre vos vrais chiffres (statistiques)
- [ ] Compléter la carte avec vos produits et vrais prix
- [ ] Remplacer toutes les photos
- [ ] Adapter les types d'événements privés
- [ ] Modifier les témoignages (ou supprimer)

### Technique
- [ ] Configurer l'email mailto (js/main.js ligne 200)
- [ ] Mettre les bonnes coordonnées (adresse, tél, email)
- [ ] Ajuster les horaires d'ouverture
- [ ] Tester le formulaire de contact
- [ ] Vérifier responsive sur mobile réel
- [ ] Optimiser toutes les images (TinyPNG)
- [ ] Configurer SEO et métadonnées
- [ ] Ajouter Schema.org
- [ ] Tester sur différents navigateurs

### Marketing
- [ ] Créer Google My Business
- [ ] Créer comptes réseaux sociaux
- [ ] Lier Instagram, Facebook, Pinterest
- [ ] Préparer politique de confidentialité
- [ ] Préparer mentions légales
- [ ] Configurer Google Analytics (optionnel)

## 💡 Idées d'Améliorations

### Fonctionnalités Avancées

**1. Système de Réservation en Ligne**

Intégrez un outil comme:
- **OpenTable** - Standard restauration
- **TheFork** - Populaire en France
- **SimplyBook.me** - Flexible et abordable

**2. Boutique en Ligne**

Vendez vos thés et pâtisseries:
- **Shopify** - Solution complète
- **WooCommerce** - Si vous utilisez WordPress
- **Square Online** - Gratuit pour commencer

**3. Programme de Fidélité**

- Carte de fidélité digitale
- App mobile (Stamp Me, FidMe)
- Réductions membres

**4. Actualités / Blog**

Ajoutez une section blog:
- Recettes de thé
- Histoire des thés
- Événements passés
- Nouveautés du menu

### Réseaux Sociaux

**Instagram** (Priorité #1 pour salons de thé):
- Belles photos de produits
- Stories quotidiennes
- Reels courts et esthétiques
- Hashtags: #salondethe #tearoom #paris #patisserie

**Pinterest**:
- Épinglez vos photos
- Créez des boards thématiques
- Très efficace pour ce secteur

**Facebook**:
- Page professionnelle
- Événements
- Avis clients

## 📄 Structure des Fichiers

```
salon-the/
├── index.html              # Page principale (700+ lignes)
├── css/
│   └── style.css          # Styles élégants (1000+ lignes)
├── js/
│   └── main.js            # JavaScript avec mailto
├── images/                # VOS images (à créer)
│   ├── hero/
│   ├── galerie/
│   ├── produits/
│   └── logo.png
└── README.md              # Ce fichier
```

## 🆘 Support

### Problèmes Courants

**Le formulaire n'ouvre pas l'email**
- Vérifiez qu'un client email est installé
- Sur mobile, vérifiez les permissions
- Alternative: utilisez Formspree

**Le filtre du menu ne fonctionne pas**
- Vérifiez que main.js est chargé
- Ouvrez la console (F12) pour voir les erreurs
- Vérifiez l'attribut `data-category` sur chaque item

**Les images ne s'affichent pas**
- Vérifiez les chemins des images
- Utilisez des chemins relatifs: `images/photo.jpg`
- Vérifiez les permissions des fichiers

### Ressources

- [MDN Web Docs](https://developer.mozilla.org) - Documentation web
- [Font Awesome Icons](https://fontawesome.com/icons) - Toutes les icônes
- [Google Fonts](https://fonts.google.com) - Polices gratuites
- [TinyPNG](https://tinypng.com) - Compression images
- [Canva](https://www.canva.com) - Création graphique

## 📧 Licence & Contact

**Licence:** MIT - Utilisation libre pour projets personnels et commerciaux

**Support:** Consultez ce README ou MDN Web Docs

---

**Template créé avec passion pour les amoureux du thé 🍵**

**Bon développement et belle réussite à votre salon ! ☕✨**
