# 🎸 The Black Ravens - Template Groupe de Musique HTML

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

Template HTML rock moderne pour groupes de musique, artistes solo, orchestres, DJ et tous musiciens professionnels.

## ✨ Caractéristiques

### Design & Ambiance
- ✅ Design rock moderne et énergique
- ✅ Palette sombre (noir, rouge, or)
- ✅ Typographies percutantes (Montserrat + Roboto Condensed)
- ✅ Hero full-screen avec image de concert
- ✅ Animations dynamiques et fluides
- ✅ Effets de survol spectaculaires
- ✅ 100% Responsive

### Sections Incluses
- 🎵 **Hero** - Image immersive avec effet zoom, titre impactant
- 👥 **Le Groupe** - Histoire + 4 membres avec photos et réseaux sociaux
- 💿 **Musique** - Discographie (albums/EPs) + liens streaming
- 🎤 **Concerts** - Dates de tournée avec statut billets
- 📸 **Galerie** - Photos et vidéos de concerts
- 📧 **Booking** - Formulaire demande + contacts management
- 🔗 **Réseaux Sociaux** - Liens vers toutes plateformes

### Fonctionnalités Techniques
- Formulaire booking avec mailto (pas d'inscription)
- Conformité RGPD intégrée
- Animations AOS (Animate On Scroll)
- Navigation sticky responsive
- Parallax sur hero
- Galerie interactive
- Statistiques animées
- Liens vers plateformes de streaming

### Technologies
- HTML5 sémantique
- CSS3 (Grid, Flexbox, Animations avancées)
- JavaScript ES6+ Vanilla
- AOS 2.3.1
- Font Awesome 6.4.0
- Google Fonts (Montserrat + Roboto Condensed)

## 🎨 Personnalisation

### Couleurs

Modifiez les variables CSS dans `css/style.css`:

```css
:root {
    --primary: #E31837;        /* Rouge rock */
    --primary-dark: #B91229;   /* Rouge foncé */
    --secondary: #1A1A1A;      /* Gris très foncé */
    --accent: #FFD700;         /* Or */
    --bg-dark: #0D0D0D;        /* Noir doux */
    --bg-darker: #000000;      /* Noir pur */
}
```

**Suggestions de palettes par style musical:**
- **Rock** (défaut): Rouge/Noir `#E31837`, `#000000`
- **Metal**: Gris/Rouge sang `#8B0000`, `#2C2C2C`
- **Pop**: Rose/Violet `#FF1493`, `#8A2BE2`
- **Jazz**: Bleu nuit/Or `#191970`, `#FFD700`
- **Électro**: Cyan/Violet `#00FFFF`, `#9D00FF`
- **Hip-Hop**: Noir/Or `#000000`, `#FFD700`

### Contenu

#### Nom du Groupe
```html
<div class="logo">
    <i class="fas fa-guitar"></i>
    <span>THE BLACK RAVENS</span>
</div>
```

**Icônes Font Awesome par style:**
- Rock/Metal: `fa-guitar`, `fa-drum`, `fa-guitar-electric`
- DJ/Électro: `fa-headphones`, `fa-compact-disc`
- Orchestre: `fa-music`, `fa-violin`
- Rap: `fa-microphone`, `fa-microphone-alt`

#### Titre Hero
```html
<h1 class="hero-title">THE BLACK RAVENS</h1>
<p class="hero-subtitle">Rock • Alternative • Live Energy</p>
```

Personnalisez selon votre style : "Jazz • Soul • Groove" ou "EDM • House • Techno"

#### Statistiques
```html
<div class="stat-item">
    <div class="stat-number">150+</div>
    <div class="stat-label">Concerts</div>
</div>
```

Modifiez avec vos vraies stats : concerts, albums, fans, années d'activité.

### Membres du Groupe

#### Ajouter/Modifier un Membre
```html
<div class="membre-card">
    <div class="membre-image">
        <img src="URL_PHOTO" alt="Nom Membre">
        <div class="membre-overlay">
            <div class="membre-social">
                <a href="URL_INSTAGRAM"><i class="fab fa-instagram"></i></a>
                <a href="URL_TWITTER"><i class="fab fa-twitter"></i></a>
            </div>
        </div>
    </div>
    <div class="membre-info">
        <h3 class="membre-name">Nom MEMBRE</h3>
        <p class="membre-role">Instrument/Rôle</p>
    </div>
</div>
```

**Conseils photos membres:**
- Format portrait ou action scène
- Résolution: 600x800px minimum
- Style cohérent pour tous
- Fond noir ou flou
- Compresser avec TinyPNG

### Discographie / Albums

#### Ajouter un Album
```html
<div class="album-card">
    <div class="album-cover">
        <img src="images/albums/nom-album.jpg" alt="Nom Album">
        <div class="album-play">
            <i class="fas fa-play"></i>
        </div>
    </div>
    <div class="album-info">
        <h3 class="album-title">Nom de l'Album</h3>
        <p class="album-year">2024</p>
        <p class="album-tracks">12 titres</p>
        <div class="album-links">
            <a href="URL_SPOTIFY" class="album-link">
                <i class="fab fa-spotify"></i> Spotify
            </a>
            <a href="URL_APPLE" class="album-link">
                <i class="fab fa-apple"></i> Apple Music
            </a>
            <a href="URL_YOUTUBE" class="album-link">
                <i class="fab fa-youtube"></i> YouTube
            </a>
        </div>
    </div>
</div>
```

**Plateformes de streaming à lier:**
- Spotify
- Apple Music
- YouTube Music
- Deezer
- SoundCloud
- Bandcamp

### Concerts / Dates de Tournée

#### Ajouter une Date de Concert
```html
<div class="concert-card">
    <div class="concert-date">
        <div class="date-day">25</div>
        <div class="date-month">DÉC</div>
    </div>
    <div class="concert-info">
        <h3 class="concert-venue">Nom de la Salle</h3>
        <p class="concert-location">
            <i class="fas fa-map-marker-alt"></i> Ville, Pays
        </p>
        <p class="concert-time">
            <i class="far fa-clock"></i> 20h30 - Portes 19h30
        </p>
    </div>
    <div class="concert-actions">
        <span class="concert-status">Places disponibles</span>
        <a href="URL_BILLETERIE" class="btn btn-primary btn-sm">Billets</a>
    </div>
</div>
```

**Pour un concert sold out:**
```html
<div class="concert-card sold-out">
    <!-- ... -->
    <div class="concert-actions">
        <span class="concert-status sold">SOLD OUT</span>
        <button class="btn btn-disabled btn-sm" disabled>Complet</button>
    </div>
</div>
```

**Plateformes de billeterie:**
- Ticketmaster
- Fnac Spectacles
- Digitick
- Eventbrite
- Billetreduc

## 📧 Formulaire Booking avec mailto

### Comment ça fonctionne ?

Le formulaire utilise **mailto:** - aucune inscription ni service externe requis.

Quand un organisateur soumet:
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

Dans `js/main.js`, ligne 163, modifiez l'adresse email:

```javascript
const mailto = 'booking@theblackravens.fr'; // ← CHANGEZ ICI
```

**Emails recommandés:**
- `booking@votregroupe.com` - Demandes de concerts
- `management@votregroupe.com` - Management général
- `contact@votregroupe.com` - Contact général

### RGPD - Conformité

Le formulaire inclut une case à cocher RGPD **obligatoire**:

```html
<input type="checkbox" id="rgpd" name="rgpd" required>
<label for="rgpd">
    J'accepte que mes données personnelles soient utilisées pour traiter
    ma demande de booking. Conformément au RGPD, vous disposez d'un droit
    d'accès, de rectification et de suppression de vos données.
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

### Sources Gratuites

**Photos de concerts:**
- **Unsplash** - https://unsplash.com/s/photos/concert
- **Pexels** - https://www.pexels.com/search/band/
- **Pixabay** - https://pixabay.com/images/search/music concert/

**Recherches suggérées:**
- "rock concert"
- "live music"
- "band performance"
- "music festival"
- "stage lights"

### Optimisation

**Avant mise en ligne:**
1. Compresser avec TinyPNG ou Squoosh
2. Format: JPG pour photos, PNG pour logos/covers
3. Résolution:
   - Hero: 1920x1080px
   - Albums: 1000x1000px (carré)
   - Membres: 600x800px
   - Galerie: 800x800px

## 🎵 Intégration Streaming

### Spotify

**Widget Spotify** (optionnel):
```html
<iframe src="https://open.spotify.com/embed/artist/VOTRE_ID"
        width="100%" height="380" frameBorder="0"
        allow="encrypted-media"></iframe>
```

Obtenez votre ID artiste sur Spotify for Artists.

### SoundCloud

**Widget SoundCloud**:
```html
<iframe width="100%" height="300" scrolling="no" frameborder="no"
        src="https://w.soundcloud.com/player/?url=URL_TRACK"></iframe>
```

### YouTube

**Intégrer une vidéo:**
```html
<iframe width="100%" height="400"
        src="https://www.youtube.com/embed/VIDEO_ID"
        frameborder="0" allowfullscreen></iframe>
```

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

## 🔍 SEO Musique

### Métadonnées

```html
<title>The Black Ravens - Groupe de Rock Français | Albums, Concerts, Booking</title>
<meta name="description" content="The Black Ravens, groupe de rock français depuis 2018. Découvrez nos albums, prochains concerts et réservez vos billets.">
<meta name="keywords" content="the black ravens, rock français, groupe rock, concert rock, booking groupe">
```

### Schema.org pour Musiciens

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  "name": "The Black Ravens",
  "genre": ["Rock", "Alternative Rock"],
  "foundingDate": "2018",
  "member": [
    {
      "@type": "Person",
      "name": "Alex Stone",
      "roleName": "Chant & Guitare"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/theblackravens",
    "https://www.instagram.com/theblackravens",
    "https://open.spotify.com/artist/ID"
  ],
  "url": "https://www.theblackravens.fr"
}
</script>
```

## 🎯 Adaptations par Style Musical

### Groupe Metal

1. **Couleurs**: Noir/Rouge sang
```css
--primary: #8B0000;
--bg-darker: #000000;
```

2. **Typo**: Plus aggressive, tout en majuscules

3. **Design**: Plus sombre, moins de couleurs vives

### DJ / Électro

1. **Couleurs**: Néons cyan/violet
```css
--primary: #00FFFF;
--accent: #9D00FF;
```

2. **Sections**: Focus sur sets, festivals, tracks

3. **Galerie**: Plus de vidéos que photos

### Artiste Solo

1. **Section Groupe**: Renommer en "L'Artiste"

2. **Membres**: Remplacer par bio détaillée + collaborateurs

3. **Navigation**: Adapter les menus

### Orchestre Classique

1. **Couleurs**: Or/Bordeaux élégant
```css
--primary: #800020;
--accent: #FFD700;
```

2. **Typo**: Plus classique (serif)

3. **Sections**: Répertoire au lieu de discographie

## ✅ Checklist Avant Mise en Ligne

### Contenu
- [ ] Changer le nom du groupe partout
- [ ] Modifier les couleurs selon votre style
- [ ] Personnaliser hero (titre, sous-titre)
- [ ] Réécrire la bio du groupe
- [ ] Ajouter vos vrais membres avec photos
- [ ] Mettre vos vraies statistiques
- [ ] Ajouter vos albums/EPs
- [ ] Lier plateformes streaming
- [ ] Mettre à jour dates de concerts
- [ ] Lier billeteries
- [ ] Remplacer toutes les photos galerie

### Technique
- [ ] Configurer email booking (js/main.js ligne 163)
- [ ] Mettre contacts management
- [ ] Lier réseaux sociaux partout
- [ ] Tester formulaire booking
- [ ] Vérifier responsive sur mobile
- [ ] Optimiser toutes images
- [ ] Configurer SEO et métadonnées
- [ ] Ajouter Schema.org
- [ ] Tester tous liens externes

### Marketing
- [ ] Créer comptes sociaux
- [ ] Lier Spotify for Artists
- [ ] Lier YouTube Artist
- [ ] Préparer press kit
- [ ] Configurer Google Analytics
- [ ] Newsletter (optionnel)

## 💡 Idées d'Améliorations

### Fonctionnalités Avancées

**1. Lecteur Audio Intégré**

Intégrez un player pour écouter directement:
- Howler.js - Lecteur audio JavaScript
- Plyr - Player moderne personnalisable

**2. Boutique Merchandising**

Vendez vos produits:
- Shopify
- WooCommerce
- Big Cartel (simple)

**3. Newsletter / Mailing List**

Construisez votre base fans:
- Mailchimp (gratuit jusqu'à 500 abonnés)
- Sendinblue
- ConvertKit

**4. Blog / Actualités**

Partagez news et coulisses:
- Système de blog simple
- Intégration WordPress
- Medium embed

### Réseaux Sociaux Essentiels

**Pour un Groupe de Musique:**

1. **Instagram** (Priorité #1)
   - Photos concerts
   - Stories quotidiennes
   - Reels performances
   - IGTV sessions

2. **Facebook**
   - Page artiste
   - Événements concerts
   - Lives streaming

3. **YouTube**
   - Clips officiels
   - Sessions acoustiques
   - Vlogs tournée

4. **Spotify**
   - Profile vérifié
   - Canvas (vidéos courtes)
   - Playlists

5. **TikTok**
   - Extraits concerts
   - Behind the scenes
   - Challenges

## 📄 Structure des Fichiers

```
groupe-musique/
├── index.html              # Page principale (900+ lignes)
├── css/
│   └── style.css          # Styles rock (1400+ lignes)
├── js/
│   └── main.js            # JavaScript + mailto booking
├── images/                # VOS images (à créer)
│   ├── hero/
│   ├── membres/
│   ├── albums/
│   ├── galerie/
│   └── logo.png
└── README.md              # Ce fichier
```

## 🆘 Support

### Problèmes Courants

**Le formulaire n'ouvre pas l'email**
- Vérifiez qu'un client email est installé
- Sur mobile, vérifiez permissions
- Alternative: Formspree

**Les animations ne fonctionnent pas**
- Vérifiez que AOS est chargé (F12 > Console)
- Connexion internet OK ? (CDN)

**Les liens streaming ne fonctionnent pas**
- Vérifiez les URLs
- Assurez-vous que vos profils sont publics

### Ressources

- [MDN Web Docs](https://developer.mozilla.org) - Documentation
- [Font Awesome Icons](https://fontawesome.com/icons) - Icônes
- [Spotify for Artists](https://artists.spotify.com) - Gérer profil
- [YouTube Music for Artists](https://artists.youtube.com) - Analytics
- [Bandcamp](https://bandcamp.com) - Vendre musique direct

## 📧 Licence & Contact

**Licence:** MIT - Utilisation libre pour projets personnels et commerciaux

**Support:** Consultez ce README ou MDN Web Docs

---

**Template créé pour les musiciens passionnés 🎸**

**Rock on et bon succès avec votre musique ! 🤘🎵**
