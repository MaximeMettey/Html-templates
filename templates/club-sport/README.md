# 🏆 Olympique Club - Template Club Sportif HTML

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

Template HTML professionnel pour clubs sportifs : football, basketball, volleyball, tennis, rugby, handball et tous sports d'équipe ou individuels.

## ✨ Caractéristiques

### Design & Fonctionnalités
- ✅ Hero full-screen avec statistiques animées
- ✅ Section équipe avec cards joueurs et stats
- ✅ Staff technique (entraîneur, préparateur, médecin)
- ✅ Calendrier des prochains matchs
- ✅ Résultats avec scores et classement
- ✅ Actualités du club (3 articles)
- ✅ Formulaire d'inscription avec catégories (école, jeunes, seniors)
- ✅ Section partenaires/sponsors
- ✅ Formulaire contact avec mailto (pas d'inscription)
- ✅ Conformité RGPD intégrée
- ✅ 100% Responsive

### Sections Incluses
- 🏠 **Hero** - Titre percutant, statistiques club, CTA inscription
- 👥 **Équipe** - Joueurs avec photos, numéros, postes, statistiques
- 📅 **Calendrier** - Prochains matchs avec dates, lieux, compétitions
- 📊 **Résultats** - Derniers scores + classement championnat
- 📰 **Actualités** - News avec images et badges catégories
- 📝 **Inscription** - 3 catégories (école/jeunes/seniors) avec tarifs
- 🤝 **Partenaires** - Logos sponsors
- 📞 **Contact** - Infos pratiques + formulaire

### Technologies
- HTML5 sémantique
- CSS3 (Grid, Flexbox, Animations)
- JavaScript ES6+ Vanilla
- AOS (Animate On Scroll)
- Font Awesome 6.4.0
- Google Fonts (Bebas Neue + Roboto)

## 🎨 Personnalisation

### Couleurs

Modifiez les variables CSS dans `css/style.css`:

```css
:root {
    --primary: #E31837;        /* Rouge principal */
    --primary-dark: #B91229;   /* Rouge foncé */
    --secondary: #1A1A2E;      /* Bleu/noir secondaire */
    --accent: #FFD700;         /* Or accent */
}
```

**Suggestions de couleurs par sport:**
- **Football**: Rouge `#E31837` (défaut)
- **Basketball**: Orange `#FF6B35`
- **Volleyball**: Bleu `#0066CC`
- **Tennis**: Vert `#00A86B`
- **Rugby**: Bordeaux `#800020`
- **Handball**: Jaune/Noir `#FFD700` + `#1A1A2E`

### Contenu

#### Logo et Nom du Club
```html
<div class="logo">
    <i class="fas fa-futbol"></i>  <!-- Changez l'icône -->
    <span>OLYMPIQUE CLUB</span>    <!-- Votre nom -->
</div>
```

**Icônes Font Awesome par sport:**
- Football: `fa-futbol`
- Basketball: `fa-basketball-ball`
- Volleyball: `fa-volleyball-ball`
- Tennis: `fa-table-tennis`
- Baseball: `fa-baseball-ball`
- Hockey: `fa-hockey-puck`
- Rugby: `fa-football-ball`

#### Titre Hero
```html
<h1 class="hero-title">
    <span class="title-line">PASSION</span>
    <span class="title-line">EXCELLENCE</span>
    <span class="title-line">VICTOIRE</span>
</h1>
```

Personnalisez selon votre philosophie de club.

#### Statistiques
```html
<div class="stat-item">
    <div class="stat-number">15</div>
    <div class="stat-label">Titres</div>
</div>
```

Modifiez avec vos vraies stats : titres, membres, années d'histoire.

### Équipe

#### Ajouter un Joueur
```html
<div class="player-card" data-aos="fade-up">
    <div class="player-image">
        <img src="URL_PHOTO" alt="Nom Joueur">
        <div class="player-number">10</div>
    </div>
    <div class="player-info">
        <h3 class="player-name">Nom JOUEUR</h3>
        <p class="player-position">Poste</p>
        <div class="player-stats">
            <span><i class="fas fa-futbol"></i> 12 buts</span>
            <span><i class="fas fa-hands-helping"></i> 8 passes</span>
        </div>
    </div>
</div>
```

**Stats par sport:**
- **Football**: Buts, passes, clean sheets
- **Basketball**: Points, rebonds, assists
- **Volleyball**: Points, aces, blocks
- **Tennis**: Victoires, tournois, classement

#### Photos des Joueurs

Remplacez les URLs Unsplash par vos vraies photos:
```html
<img src="images/joueurs/martin-lucas.jpg" alt="Lucas Martin">
```

**Conseils photos:**
- Format portrait 3:4
- Résolution: 600x800px minimum
- Fond uni ou action sur terrain
- Compressez avec TinyPNG

### Calendrier

#### Ajouter un Match
```html
<div class="match-card" data-aos="fade-up">
    <div class="match-header">
        <span class="match-competition">Championnat Régional</span>
        <span class="match-date"><i class="far fa-calendar"></i> Sam 25 Nov 2024 - 15h00</span>
    </div>
    <div class="match-teams">
        <div class="team team-home">
            <div class="team-logo"><i class="fas fa-futbol"></i></div>
            <h4 class="team-name">Votre Club</h4>
        </div>
        <div class="match-vs">VS</div>
        <div class="team team-away">
            <div class="team-logo"><i class="fas fa-shield-alt"></i></div>
            <h4 class="team-name">Adversaire</h4>
        </div>
    </div>
    <div class="match-venue">
        <i class="fas fa-map-marker-alt"></i> Lieu - Tarif entrée
    </div>
</div>
```

### Résultats

Les résultats ont 3 classes selon l'issue:
```html
<!-- Victoire -->
<div class="result-card result-win">...</div>

<!-- Match nul -->
<div class="result-card result-draw">...</div>

<!-- Défaite -->
<div class="result-card result-lose">...</div>
```

### Tarifs d'Inscription

Modifiez les 3 catégories selon vos tarifs:
```html
<div class="info-card">
    <i class="fas fa-trophy"></i>
    <h3>Seniors (18+ ans)</h3>
    <p>Compétition et loisirs selon votre niveau</p>
    <div class="price">250€/an</div>
    <ul class="benefits">
        <li><i class="fas fa-check"></i> Entraînements illimités</li>
        <li><i class="fas fa-check"></i> Accès salle musculation</li>
        <li><i class="fas fa-check"></i> Événements club</li>
    </ul>
</div>
```

## 📧 Formulaires avec mailto

### Comment ça fonctionne ?

Les 2 formulaires (inscription + contact) utilisent **mailto:** - aucune inscription ni service externe requis.

Quand l'utilisateur soumet:
1. Les données sont collectées
2. Un email pré-rempli s'ouvre dans son client email
3. Il peut vérifier et envoyer

**Avantages:**
- ✅ Pas de backend nécessaire
- ✅ Pas d'inscription à un service
- ✅ Gratuit à 100%
- ✅ RGPD compliant
- ✅ Fonctionne immédiatement

### Configuration Email

Dans `js/main.js`, modifiez l'email du club (2 endroits):

**Formulaire d'inscription (ligne 126):**
```javascript
const mailto = 'contact@olympiqueclub.fr'; // ← Votre email
```

**Formulaire de contact (ligne 209):**
```javascript
const mailto = 'contact@olympiqueclub.fr'; // ← Votre email
```

### RGPD - Texte Légal

Les 2 formulaires incluent une case à cocher RGPD **obligatoire**:

```html
<input type="checkbox" id="rgpd" name="rgpd" required>
<label for="rgpd">
    J'accepte que mes données personnelles soient utilisées pour me recontacter
    dans le cadre de ma demande. Conformément au RGPD, vous disposez d'un droit
    d'accès, de rectification et de suppression de vos données.
</label>
```

### Alternative: Service Email

Si mailto ne convient pas, utilisez **Formspree** (gratuit, simple):

```html
<form action="https://formspree.io/f/VOTRE_ID" method="POST">
    <!-- Gardez vos champs tels quels -->
</form>
```

## 🏅 Adaptation par Sport

### Basketball

1. **Couleurs**: Orange/Noir
```css
--primary: #FF6B35;
--secondary: #1A1A2E;
--accent: #FFA500;
```

2. **Icône logo**: `fa-basketball-ball`

3. **Stats joueurs**: Points, Rebonds, Assists

4. **Titre hero**: "DRIBBLE • SHOOT • VICTOIRE"

### Volleyball

1. **Couleurs**: Bleu/Blanc
```css
--primary: #0066CC;
--secondary: #FFFFFF;
--accent: #FFD700;
```

2. **Icône logo**: `fa-volleyball-ball`

3. **Stats joueurs**: Points, Aces, Blocks

4. **Titre hero**: "SERVICE • SMASH • VICTOIRE"

### Tennis

1. **Couleurs**: Vert/Blanc
```css
--primary: #00A86B;
--secondary: #1A1A2E;
--accent: #FFD700;
```

2. **Icône logo**: `fa-table-tennis`

3. **Stats individuelles**: Victoires, Tournois, Classement ATP

4. **Remplacer "Équipe"** par "Joueurs du Club"

### Rugby

1. **Couleurs**: Bordeaux/Or
```css
--primary: #800020;
--secondary: #1A1A2E;
--accent: #FFD700;
```

2. **Icône logo**: `fa-football-ball`

3. **Stats joueurs**: Essais, Transformations, Plaquages

4. **Titre hero**: "FORCE • HONNEUR • VICTOIRE"

## 🖼️ Images

### Sources d'Images Sportives Gratuites

- **Unsplash** - https://unsplash.com/s/photos/sport
- **Pexels** - https://www.pexels.com/search/sports/
- **Pixabay** - https://pixabay.com/images/search/sport/

### Optimisation

- Format: JPG pour photos, PNG pour logos
- Résolution: 1920x1080px pour hero, 800x600px pour galerie
- Compression: Utilisez TinyPNG ou Squoosh
- Nommage: `hero-background.jpg`, `joueur-martin.jpg`

## 📱 Responsive

Testé sur:
- 📱 Mobile: iPhone, Android (320px+)
- 📱 Tablet: iPad (768px+)
- 💻 Desktop: PC, Mac (1024px+)

Breakpoints CSS:
- 1024px: Tablettes
- 768px: Mobile menu
- 480px: Petits mobiles

## 🚀 Déploiement

### Hébergement Gratuit

**Netlify** (recommandé):
```bash
npm install -g netlify-cli
netlify deploy --prod
```

**GitHub Pages**:
1. Créez un repository
2. Pushez vos fichiers
3. Activez Pages dans Settings

**Vercel**:
```bash
npm install -g vercel
vercel --prod
```

### Hébergement Payant

- **OVH**: ~3€/mois, français, support FR
- **Hostinger**: ~2€/mois, rapide
- **o2switch**: ~5€/mois, illimité, français

## 🔍 SEO

### Métadonnées

Personnalisez dans `<head>`:

```html
<title>Olympique Club - Football Amateur à Paris | Inscriptions Ouvertes</title>
<meta name="description" content="Club de football amateur à Paris depuis 1985. 15 titres régionaux. Inscriptions ouvertes pour école de foot, jeunes et seniors.">
<meta name="keywords" content="club football paris, football amateur, école de foot, inscription football, olympique club">
```

### Local SEO

Ajoutez Schema.org pour meilleur référencement local:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SportsTeam",
  "name": "Olympique Club",
  "sport": "Football",
  "memberOf": {
    "@type": "SportsOrganization",
    "name": "Ligue Régionale de Football"
  },
  "telephone": "+33612345678",
  "email": "contact@olympiqueclub.fr",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "12 Avenue des Champions",
    "addressLocality": "Paris",
    "postalCode": "75015",
    "addressCountry": "FR"
  },
  "foundingDate": "1985",
  "url": "https://www.olympiqueclub.fr"
}
</script>
```

## ✅ Checklist Avant Mise en Ligne

- [ ] Changer tous les textes (nom club, slogan, etc.)
- [ ] Modifier les couleurs selon votre sport
- [ ] Remplacer l'icône du logo
- [ ] Mettre à jour les statistiques hero
- [ ] Ajouter vos vrais joueurs avec photos
- [ ] Renseigner le calendrier des matchs
- [ ] Mettre à jour les résultats
- [ ] Modifier les tarifs d'inscription
- [ ] Configurer les emails mailto (2 endroits)
- [ ] Ajouter vos partenaires/sponsors
- [ ] Mettre les bonnes coordonnées contact
- [ ] Tester les 2 formulaires
- [ ] Vérifier responsive sur mobile
- [ ] Optimiser toutes les images
- [ ] Configurer SEO et métadonnées

## 💡 Astuces

### Ajouter une Galerie Photo

Créez une nouvelle section après Actualités:

```html
<section class="section galerie" id="galerie">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">GALERIE</h2>
        </div>
        <div class="gallery-grid">
            <!-- Vos photos ici -->
        </div>
    </div>
</section>
```

### Ajouter un Live Score

Intégrez un widget de score en temps réel:
- **LiveScore** - https://www.livescore.com/en/widgets/
- **SofaScore** - https://www.sofascore.com/widgets

### Newsletter

Ajoutez Mailchimp ou Sendinblue dans le footer:

```html
<div class="newsletter">
    <h4>Newsletter</h4>
    <form action="https://votrelien.us1.list-manage.com/subscribe" method="post">
        <input type="email" name="EMAIL" placeholder="Votre email" required>
        <button type="submit">S'abonner</button>
    </form>
</div>
```

### Statistiques Avancées

Ajoutez Google Analytics ou Plausible pour suivre vos visiteurs.

## 📄 Structure des Fichiers

```
club-sport/
├── index.html              # Page principale
├── css/
│   └── style.css          # Styles (1200+ lignes)
├── js/
│   └── main.js            # JavaScript avec mailto
├── images/                # Vos images (à créer)
│   ├── hero/
│   ├── joueurs/
│   ├── galerie/
│   └── partenaires/
└── README.md              # Ce fichier
```

## 🆘 Support

### Problèmes Courants

**Les formulaires n'ouvrent pas l'email**
- Vérifiez qu'un client email est installé (Outlook, Thunderbird, Mail)
- Sur mobile, vérifiez les permissions d'applications
- Alternative: utilisez Formspree

**Les animations ne fonctionnent pas**
- Vérifiez que AOS est chargé (F12 > Console)
- Vérifiez la connexion internet (AOS chargé via CDN)

**Le menu mobile ne s'ouvre pas**
- Vérifiez que main.js est chargé
- Ouvrez la console (F12) pour voir les erreurs

### Ressources

- [MDN Web Docs](https://developer.mozilla.org) - Documentation
- [Font Awesome Icons](https://fontawesome.com/icons) - Liste icônes
- [Google Fonts](https://fonts.google.com) - Polices
- [AOS Documentation](https://michalsnik.github.io/aos/) - Animations

## 📧 Contact & Licence

**Licence:** MIT - Utilisation libre pour projets personnels et commerciaux

**Support:** Consultez ce README ou la documentation en ligne

---

**Template créé pour les clubs sportifs passionnés 🏆**

**Bon développement ! ⚽🏀🎾**
