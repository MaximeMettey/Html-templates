# 🔧 Pro Plomberie - Template Artisan HTML

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

Template HTML professionnel pour artisans : plombiers, électriciens, peintres, chauffagistes et tous corps de métier du bâtiment.

## ✨ Caractéristiques

### Design & Fonctionnalités
- ✅ Barre d'urgence 24/7 bien visible
- ✅ Bouton d'appel flottant
- ✅ 6 sections de services détaillées
- ✅ Galerie de réalisations avec lightbox
- ✅ Zone d'intervention avec carte
- ✅ Certifications et garanties mises en avant
- ✅ Formulaire de devis avec mailto (pas d'inscription)
- ✅ Conformité RGPD intégrée
- ✅ 100% Responsive

### Sections Incluses
- 🏠 **Hero avec Urgence** - CTA visible, intervention rapide
- 🛠️ **Services** - 6 prestations détaillées avec listes
- 👨‍🔧 **À Propos** - Présentation, certifications, statistiques
- 📸 **Réalisations** - Galerie projets avec overlay
- 🗺️ **Zone d'Intervention** - Départements couverts
- 📞 **Contact** - Formulaire mailto + coordonnées
- 📜 **Footer** - Complet avec certifications

### Technologies
- HTML5 sémantique
- CSS3 (Grid, Flexbox, Animations)
- JavaScript ES6+ Vanilla
- AOS (Animate On Scroll)
- Font Awesome 6.4.0
- Google Fonts (Montserrat + Open Sans)

## 🎨 Personnalisation

### Couleurs

Modifiez les variables CSS dans `css/style.css`:

```css
:root {
    --primary-color: #0066cc;      /* Bleu principal */
    --secondary-color: #ff9500;    /* Orange accent */
    --emergency-color: #dc3545;    /* Rouge urgence */
    --success-color: #28a745;      /* Vert succès */
}
```

**Suggestions de couleurs par métier:**
- **Plombier**: Bleu `#0066cc`
- **Électricien**: Jaune/Orange `#ff9500`
- **Peintre**: Rouge/Violet `#8b4789`
- **Chauffagiste**: Orange/Rouge `#ff6b35`
- **Menuisier**: Marron `#8b4513`

### Contenu

#### Logo et Nom
```html
<div class="logo">
    <i class="fas fa-wrench"></i>  <!-- Changez l'icône -->
    <span>Pro Plomberie</span>      <!-- Votre nom -->
</div>
```

**Icônes Font Awesome par métier:**
- Plombier: `fa-wrench`, `fa-faucet`, `fa-tools`
- Électricien: `fa-bolt`, `fa-plug`, `fa-lightbulb`
- Peintre: `fa-paint-roller`, `fa-palette`
- Chauffagiste: `fa-fire`, `fa-temperature-high`

#### Numéros de Téléphone
Remplacez dans tout le template:
```html
<!-- Ancien -->
<a href="tel:+33612345678">06 12 34 56 78</a>

<!-- Nouveau -->
<a href="tel:+33VOTRENUMERO">Votre numéro</a>
```

#### Email
```html
<!-- Ancien -->
contact@pro-plomberie.fr

<!-- Nouveau -->
votre@email.fr
```

**Important:** Modifiez aussi l'email dans `js/main.js` ligne 88:
```javascript
const mailto = 'votre@email.fr';
```

### Services

Pour modifier/ajouter un service:

```html
<div class="service-card">
    <div class="service-icon">
        <i class="fas fa-votre-icone"></i>
    </div>
    <h3 class="service-title">Nom du Service</h3>
    <p class="service-description">Description...</p>
    <ul class="service-list">
        <li><i class="fas fa-check"></i> Avantage 1</li>
        <li><i class="fas fa-check"></i> Avantage 2</li>
        <li><i class="fas fa-check"></i> Avantage 3</li>
        <li><i class="fas fa-check"></i> Avantage 4</li>
    </ul>
    <a href="#contact" class="btn btn-outline btn-block">Devis Gratuit</a>
</div>
```

### Zone d'Intervention

Modifiez les départements dans la section `#zone`:

```html
<div class="zone-item">
    <i class="fas fa-map-marker-alt"></i>
    <h4>Votre Département (XX)</h4>
    <p>Vos villes principales...</p>
</div>
```

## 📧 Formulaire de Contact avec mailto

### Comment ça fonctionne ?

Le formulaire utilise **mailto:** - aucune inscription ni service externe requis.

Quand l'utilisateur soumet le formulaire:
1. Les données sont collectées
2. Un email pré-rempli s'ouvre dans son client email
3. Il peut vérifier et envoyer

**Avantages:**
- ✅ Pas de backend nécessaire
- ✅ Pas d'inscription à un service
- ✅ Gratuit à 100%
- ✅ RGPD compliant
- ✅ Fonctionne immédiatement

### Configuration

Dans `js/main.js`, ligne 88:

```javascript
const mailto = 'contact@pro-plomberie.fr'; // ← Changez ici
```

### RGPD - Texte Légal

Le formulaire inclut une case à cocher RGPD **obligatoire**:

```html
<input type="checkbox" id="rgpd" required>
<label for="rgpd">
    J'accepte que mes données personnelles soient utilisées
    pour me recontacter dans le cadre de ma demande de devis.
    Conformément au RGPD, vous disposez d'un droit d'accès,
    de rectification et de suppression de vos données...
</label>
```

**Pour personnaliser**, créez une page `politique-confidentialite.html` et modifiez le lien:

```html
<a href="politique-confidentialite.html" target="_blank">politique de confidentialité</a>
```

### Alternative: Service Email

Si mailto ne convient pas, utilisez **Formspree** (gratuit, simple):

```html
<form action="https://formspree.io/f/VOTRE_ID" method="POST">
    <!-- Gardez vos champs tels quels -->
</form>
```

## 🖼️ Images

### Galerie de Réalisations

Remplacez les URLs Unsplash par vos photos:

```html
<div class="realisation-item">
    <img src="images/realisation-1.jpg" alt="Description">
    <div class="realisation-overlay">
        <h3>Titre Projet</h3>
        <p>Description - Ville</p>
    </div>
</div>
```

**Conseils photos:**
- Format 16:9 ou carré
- Résolution: 800x600px minimum
- Compressez avec TinyPNG
- Nommez clairement: `salle-bain-paris-15.jpg`

### Photo À Propos

```html
<img src="https://images.unsplash.com/photo-..." alt="Plombier">
<!-- Remplacez par -->
<img src="images/artisan-portrait.jpg" alt="Votre Nom">
```

## 🎯 Adaptation par Métier

### Électricien

1. **Couleurs**: Jaune/Orange
```css
--primary-color: #ff9500;
--secondary-color: #ffc107;
```

2. **Icône logo**: `fa-bolt`

3. **Services**: Installation électrique, Dépannage, Mise aux normes, Rénovation, Automatismes, Éclairage

### Peintre

1. **Couleurs**: Violet/Multi-couleurs
```css
--primary-color: #8b4789;
--secondary-color: #c49b63;
```

2. **Icône logo**: `fa-paint-roller`

3. **Services**: Peinture intérieure, Extérieure, Ravalement, Papier peint, Décoration, Finitions

### Chauffagiste

1. **Couleurs**: Orange/Rouge
```css
--primary-color: #ff6b35;
--secondary-color: #f7931e;
```

2. **Icône logo**: `fa-fire`

3. **Services**: Chaudière, Radiateurs, Climatisation, Pompe à chaleur, Entretien, Dépannage

## 🏅 Certifications

Ajoutez vos vraies certifications:

```html
<div class="cert-item">
    <i class="fas fa-certificate"></i>
    <span>Votre Certification</span>
</div>
```

**Certifications courantes:**
- RGE (Reconnu Garant Environnement)
- QualiPac, QualiBat, QualiElec
- Assurance Décennale
- Artisan Certifié

## 📱 Responsive

Testé sur:
- 📱 Mobile: iPhone, Android (320px+)
- 📱 Tablet: iPad (768px+)
- 💻 Desktop: PC, Mac (1024px+)

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

### Hébergement Payant

- **OVH**: ~3€/mois, français
- **Hostinger**: ~2€/mois
- **o2switch**: ~5€/mois, illimité

## 🔍 SEO

### Métadonnées

Personnalisez dans `<head>`:

```html
<title>Votre Nom - Plombier à Ville | Intervention 24h/24</title>
<meta name="description" content="Plombier professionnel à Ville. Dépannage urgence 24h/24. Devis gratuit. +15 ans d'expérience.">
<meta name="keywords" content="plombier, ville, dépannage, urgence, chaudière">
```

### Local SEO

Ajoutez Schema.org:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Plumber",
  "name": "Pro Plomberie",
  "telephone": "+33612345678",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Paris",
    "postalCode": "75011"
  },
  "priceRange": "€€"
}
</script>
```

## ✅ Checklist Avant Mise en Ligne

- [ ] Changer tous les numéros de téléphone
- [ ] Modifier l'email (HTML + JS)
- [ ] Remplacer les images
- [ ] Personnaliser les couleurs
- [ ] Adapter les services à votre métier
- [ ] Mettre à jour la zone d'intervention
- [ ] Ajouter vos certifications
- [ ] Configurer le formulaire mailto
- [ ] Tester sur mobile
- [ ] Vérifier tous les liens
- [ ] Optimiser les images (TinyPNG)
- [ ] Tester le formulaire de contact

## 💡 Astuces

### Bouton d'Urgence Flottant

Le bouton rouge flottant appelle directement. Pour le désactiver:

```css
.emergency-btn {
    display: none;
}
```

### Barre d'Urgence

Pour modifier le texte clignotant:

```html
<div class="emergency-info">
    <i class="fas fa-exclamation-triangle"></i>
    <span>Votre message personnalisé</span>
</div>
```

### Animation Pulse

Le bouton d'urgence pulse pour attirer l'attention. Pour désactiver:

```css
.btn-emergency {
    animation: none;
}
```

## 📄 Licence

MIT License - Utilisation libre pour projets personnels et commerciaux.

## 🆘 Support

### Problèmes Courants

**Le formulaire n'ouvre pas l'email**
- Vérifiez que vous avez un client email installé (Outlook, Thunderbird, Mail)
- Sur mobile, vérifiez les permissions

**Les animations ne fonctionnent pas**
- Vérifiez que AOS est chargé
- Ouvrez la console (F12) pour voir les erreurs

**Le site n'est pas responsive**
- Videz le cache du navigateur
- Vérifiez que `viewport` est dans le `<head>`

### Ressources

- [MDN Web Docs](https://developer.mozilla.org) - Documentation
- [Font Awesome Icons](https://fontawesome.com/icons) - Liste icônes
- [Google Fonts](https://fonts.google.com) - Polices
- [TinyPNG](https://tinypng.com) - Compression images

---

**Template créé pour les artisans professionnels 🔧**

**Bon développement ! 🚀**
