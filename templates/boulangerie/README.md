# 🥖 Au Bon Pain Doré - Template Boulangerie HTML

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

Template HTML chaleureux et artisanal pour boulangeries, pâtisseries et traiteurs.

## ✨ Caractéristiques

### Design & Ambiance
- ✅ Design chaleureux et accueillant
- ✅ Palette de couleurs pain/marron/beige/crème
- ✅ Typographies élégantes (Playfair Display + Open Sans)
- ✅ Hero avec badge "Meilleure Baguette"
- ✅ Barre info rapide (horaires, artisanal, bio, adresse)
- ✅ Animations douces et professionnelles
- ✅ 100% Responsive

### Sections Incluses
- 🏠 **Hero** - Image immersive avec badge récompense
- ℹ️ **Info Bar** - Informations clés (horaires, bio, adresse)
- 📖 **Histoire** - Présentation avec valeurs artisanales
- 🥐 **Produits** - Catalogue filtrable (Pains, Viennoiseries, Pâtisseries, Sandwichs)
- 👨‍🍳 **Savoir-Faire** - 4 étapes de fabrication + statistiques
- ⭐ **Témoignages** - Avis clients avec étoiles
- 📞 **Contact** - Infos + formulaire commande spéciale

### Fonctionnalités Techniques
- Catalogue produits filtrable (4 catégories)
- Formulaire commande avec mailto (pas d'inscription)
- Conformité RGPD intégrée
- Animations AOS (Animate On Scroll)
- Navigation sticky responsive
- Statistiques animées
- Badge flottant avec parallax

### Technologies
- HTML5 sémantique
- CSS3 (Grid, Flexbox, Transitions)
- JavaScript ES6+ Vanilla
- AOS 2.3.1
- Font Awesome 6.4.0
- Google Fonts (Playfair Display + Open Sans)

## 🎨 Personnalisation

### Couleurs

Modifiez les variables CSS dans `css/style.css`:

```css
:root {
    --primary: #8B4513;        /* Marron principal */
    --primary-dark: #6B3410;   /* Marron foncé */
    --secondary: #D2691E;      /* Chocolat */
    --accent: #DAA520;         /* Or/miel */
    --cream: #FFF8DC;          /* Crème */
    --beige: #F5E6D3;          /* Beige */
}
```

**Suggestions de palettes:**
- **Classique** (défaut): Marron/beige `#8B4513`, `#FFF8DC`
- **Chocolat**: Marron foncé `#6B3410`, `#4A2511`
- **Naturel**: Vert/beige `#8B7D6B`, `#E8DCC8`
- **Moderne**: Gris/blanc `#5D4E37`, `#FFFFFF`

### Contenu

#### Nom de la Boulangerie
```html
<div class="logo">
    <i class="fas fa-bread-slice"></i>
    <span>Au Bon Pain Doré</span>
</div>
```

**Icônes Font Awesome suggérées:**
- `fa-bread-slice` - Tranche de pain (défaut)
- `fa-croissant` - Viennoiserie
- `fa-wheat-awn` - Épi de blé
- `fa-cookie-bite` - Pâtisserie

#### Badge Récompense Hero
```html
<div class="hero-badge">
    <div class="badge-icon">
        <i class="fas fa-award"></i>
    </div>
    <div class="badge-text">
        <strong>Meilleure Baguette</strong>
        <span>de Paris 2023</span>
    </div>
</div>
```

Personnalisez selon vos vraies récompenses ou retirez si non applicable.

#### Titre Hero
```html
<h1 class="hero-title">L'Art du Pain Artisanal</h1>
<p class="hero-subtitle">Chaque jour, nous pétrissons avec passion...</p>
```

#### Histoire et Valeurs
Modifiez le texte dans la section `#histoire` avec votre vraie histoire.

Les 4 valeurs artisanales:
```html
<div class="value-item">
    <i class="fas fa-check-circle"></i>
    <span>Farines françaises Bio</span>
</div>
```

**Valeurs suggérées:**
- Farines bio/locales
- Levain naturel maison
- Pétrissage artisanal
- Cuisson au four traditionnel
- Ingrédients frais
- Recettes familiales

### Catalogue Produits

#### Ajouter un Produit
```html
<div class="product-card" data-category="pains" data-aos="fade-up">
    <div class="product-image">
        <img src="images/produits/nom-produit.jpg" alt="Nom Produit">
        <div class="product-badge">Bio</div> <!-- Optionnel -->
    </div>
    <div class="product-info">
        <h3 class="product-name">Nom du Produit</h3>
        <p class="product-description">Description appétissante...</p>
        <div class="product-price">Prix€</div>
    </div>
</div>
```

**Catégories disponibles** (attribut `data-category`):
- `pains` - Pains et baguettes
- `viennoiseries` - Croissants, pains au chocolat...
- `patisseries` - Tartes, éclairs, gâteaux...
- `sandwichs` - Sandwichs et snacking

**Badges suggérés:**
- Signature
- Bio
- Best-seller
- Végé
- Sans gluten
- Nouveau

#### Photos Produits

**Conseils:**
- Format carré ou 4:3
- Résolution: 800x800px minimum
- Fond clair et neutre
- Bonne lumière naturelle
- Compresser avec TinyPNG

**Sources gratuites:**
- **Unsplash** - https://unsplash.com/s/photos/bread
- **Pexels** - https://www.pexels.com/search/bakery/
- **Pixabay** - https://pixabay.com/images/search/pastry/

### Horaires

Modifiez dans la section contact:
```html
<p>
    <strong>Mardi - Samedi:</strong> 6h30 - 20h00<br>
    <strong>Dimanche:</strong> 7h00 - 13h00<br>
    <strong>Lundi:</strong> Fermé
</p>
```

Et dans l'info bar en haut:
```html
<h3>Ouvert 7j/7</h3>
<p>Mar-Dim: 6h30 - 20h</p>
```

### Savoir-Faire

Les 4 étapes peuvent être personnalisées:
```html
<div class="savoir-card">
    <div class="savoir-icon">
        <i class="fas fa-wheat-awn"></i>
    </div>
    <h3 class="savoir-title">Titre Étape</h3>
    <p class="savoir-description">Description...</p>
</div>
```

**Icônes suggérées:**
- `fa-wheat-awn` - Sélection farines
- `fa-hand-holding-heart` - Pétrissage
- `fa-clock` - Fermentation
- `fa-fire` - Cuisson
- `fa-seedling` - Bio
- `fa-leaf` - Naturel

## 📧 Formulaire Commande avec mailto

### Comment ça fonctionne ?

Le formulaire utilise **mailto:** - aucune inscription ni service externe requis.

Quand un client soumet:
1. Les données sont collectées
2. Son client email s'ouvre avec message pré-rempli
3. Il vérifie et envoie

**Avantages:**
- ✅ Pas de backend nécessaire
- ✅ Pas d'inscription FormsPree, EmailJS, etc.
- ✅ Gratuit à 100%
- ✅ RGPD compliant
- ✅ Fonctionne immédiatement

### Configuration Email

Dans `js/main.js`, ligne 168, modifiez l'adresse email:

```javascript
const mailto = 'contact@aubonpaindore.fr'; // ← CHANGEZ ICI
```

### RGPD - Conformité

Le formulaire inclut une case à cocher RGPD **obligatoire**:

```html
<input type="checkbox" id="rgpd" name="rgpd" required>
<label for="rgpd">
    J'accepte que mes données personnelles soient utilisées pour traiter
    ma commande. Conformément au RGPD, vous disposez d'un droit d'accès,
    de rectification et de suppression de vos données.
</label>
```

### Alternative: Service Email

Si mailto ne convient pas, utilisez **Formspree**:

1. Créez un compte sur https://formspree.io (gratuit)
2. Obtenez votre endpoint
3. Modifiez le formulaire:

```html
<form action="https://formspree.io/f/VOTRE_ID" method="POST">
    <!-- Gardez tous vos champs identiques -->
</form>
```

## 🖼️ Images

### Photos Recommandées

**Ce qu'il faut photographier:**
- Hero: Four avec pain qui sort, boulanger au travail
- Produits: Baguettes, croissants, tartes, gâteaux
- Savoir-faire: Pétrissage, façonnage, cuisson
- Devanture: Vitrine de la boulangerie

**Conseils photo:**
1. Lumière naturelle de préférence
2. Éviter le flash direct
3. Fond simple et propre
4. Mettre en valeur le produit
5. Photographier le matin (produits frais)

### Optimisation

**Avant mise en ligne:**
1. Compresser avec TinyPNG ou Squoosh
2. Format: JPG pour photos
3. Résolution:
   - Hero: 1920x1080px
   - Produits: 800x800px
   - Histoire: 800x600px

## 📱 Responsive

Testé sur:
- 📱 Mobile: iPhone, Android (320px+)
- 📱 Tablet: iPad (768px+)
- 💻 Desktop: PC, Mac (1024px+)

Points de rupture:
- 1024px: Tablettes
- 768px: Menu mobile
- 480px: Petits smartphones

## 🚀 Déploiement

### Hébergement Gratuit

**Netlify** (recommandé):
```bash
npm install -g netlify-cli
netlify deploy --prod
```

**Vercel**:
```bash
npm install -g vercel
vercel --prod
```

**GitHub Pages**:
1. Push sur GitHub
2. Activez Pages dans Settings
3. Site en ligne !

### Hébergement Payant

- **OVH** - ~3€/mois, français
- **o2switch** - ~5€/mois, illimité
- **Hostinger** - ~2€/mois

## 🔍 SEO Boulangerie

### Métadonnées

```html
<title>Au Bon Pain Doré - Boulangerie Artisanale à Paris 11 | Pain Bio</title>
<meta name="description" content="Boulangerie artisanale à Paris 11ème. Pain bio au levain naturel, viennoiseries pur beurre, pâtisseries maison. Depuis 1985.">
<meta name="keywords" content="boulangerie paris 11, pain bio, croissant, pâtisserie artisanale, levain naturel">
```

### Local SEO

Ajoutez Schema.org dans `<head>`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Bakery",
  "name": "Au Bon Pain Doré",
  "image": "https://www.aubonpaindore.fr/images/facade.jpg",
  "priceRange": "€",
  "telephone": "+33143556789",
  "email": "contact@aubonpaindore.fr",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "45 Rue de la Roquette",
    "addressLocality": "Paris",
    "postalCode": "75011",
    "addressCountry": "FR"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "06:30",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "07:00",
      "closes": "13:00"
    }
  ],
  "url": "https://www.aubonpaindore.fr"
}
</script>
```

### Google My Business

**Essentiel pour les boulangeries locales:**

1. Créez un compte Google My Business
2. Vérifiez votre établissement
3. Ajoutez photos de qualité
4. Remplissez tous les champs
5. Demandez des avis clients
6. Mettez à jour les horaires (jours fériés)

## 🎯 Adaptations

### Pâtisserie Pure

1. **Retirer** : Sections pains/sandwichs
2. **Focus** : Pâtisseries et gâteaux sur mesure
3. **Ajouter** : Galerie créations, wedding cakes
4. **Couleurs** : Plus doux (rose, blanc)

### Boulangerie Bio

1. **Couleurs** : Vert/beige naturel
```css
--primary: #5B7B4B;
--secondary: #8B9C6B;
```

2. **Badges** : Mettre "Bio" partout
3. **Textes** : Insister sur certifications
4. **Ajouter** : Section engagements écologiques

### Traiteur Sandwich

1. **Retirer** : Pâtisseries fines
2. **Focus** : Sandwichs, salades, plateaux
3. **Ajouter** : Formules déjeuner, livraison
4. **Section** : Menu du jour

## ✅ Checklist Avant Mise en Ligne

### Contenu
- [ ] Changer le nom partout
- [ ] Modifier les couleurs selon charte
- [ ] Personnaliser hero (titre, badge)
- [ ] Réécrire l'histoire de la boulangerie
- [ ] Mettre les vraies valeurs artisanales
- [ ] Ajouter vos vrais produits avec prix
- [ ] Remplacer toutes les photos
- [ ] Mettre les bons horaires (2 endroits)
- [ ] Adapter la section savoir-faire
- [ ] Modifier/retirer témoignages

### Technique
- [ ] Configurer email commande (js/main.js ligne 168)
- [ ] Mettre la bonne adresse
- [ ] Mettre le bon numéro de téléphone
- [ ] Tester formulaire commande
- [ ] Vérifier responsive sur mobile
- [ ] Optimiser toutes images
- [ ] Configurer SEO et métadonnées
- [ ] Ajouter Schema.org
- [ ] Tester filtres produits

### Marketing
- [ ] Créer Google My Business
- [ ] Créer page Facebook
- [ ] Créer Instagram (photos produits)
- [ ] Préparer politique confidentialité
- [ ] Configurer Google Analytics
- [ ] Ajouter bouton Click & Collect (optionnel)

## 💡 Idées d'Améliorations

### Fonctionnalités Avancées

**1. Click & Collect**

Intégrez une solution de commande en ligne:
- **Zelty** - Spécialisé boulangeries
- **Deliverect** - Multi-plateformes
- **Square** - Simple et efficace

**2. Programme de Fidélité**

- Carte virtuelle sur mobile
- Application dédiée
- Réductions membres

**3. Newsletter**

Communiquez sur vos nouveautés:
- Mailchimp (gratuit jusqu'à 500 abonnés)
- Sendinblue
- Formulaire d'inscription footer

**4. Réservation Gâteaux**

Formulaire spécial pour:
- Gâteaux d'anniversaire
- Wedding cakes
- Pièces montées
- Événements entreprises

### Réseaux Sociaux

**Instagram** (Priorité #1 pour boulangeries):
- Photos produits quotidiennes
- Stories making-of
- Reels process fabrication
- Hashtags: #boulangerie #painartisanal #paris #bakery

**Facebook**:
- Page professionnelle
- Horaires exceptionnels
- Promotions
- Avis clients

**Pinterest**:
- Épinglez vos créations
- Boards thématiques
- Très efficace pour pâtisseries

## 📄 Structure des Fichiers

```
boulangerie/
├── index.html              # Page principale (850+ lignes)
├── css/
│   └── style.css          # Styles chaleureux (1300+ lignes)
├── js/
│   └── main.js            # JavaScript + filtres + mailto
├── images/                # VOS images (à créer)
│   ├── hero/
│   ├── produits/
│   │   ├── pains/
│   │   ├── viennoiseries/
│   │   ├── patisseries/
│   │   └── sandwichs/
│   └── logo.png
└── README.md              # Ce fichier
```

## 🆘 Support

### Problèmes Courants

**Le formulaire n'ouvre pas l'email**
- Vérifiez qu'un client email est installé
- Sur mobile, vérifiez permissions
- Alternative: Formspree

**Les filtres produits ne fonctionnent pas**
- Vérifiez que main.js est chargé
- Ouvrez console (F12) pour voir erreurs
- Vérifiez attribut `data-category` sur chaque produit

**Les images ne s'affichent pas**
- Vérifiez chemins des images
- Utilisez chemins relatifs: `images/produits/pain.jpg`
- Vérifiez permissions fichiers

### Ressources

- [MDN Web Docs](https://developer.mozilla.org) - Documentation
- [Font Awesome Icons](https://fontawesome.com/icons) - Icônes
- [Google Fonts](https://fonts.google.com) - Polices
- [TinyPNG](https://tinypng.com) - Compression images
- [Canva](https://www.canva.com) - Création graphique

## 📧 Licence & Contact

**Licence:** MIT - Utilisation libre pour projets personnels et commerciaux

**Support:** Consultez ce README ou MDN Web Docs

---

**Template créé pour les artisans boulangers passionnés 🥖**

**Bon développement et belle réussite à votre boulangerie ! 🥐✨**
