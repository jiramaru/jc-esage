# 🎉 Journée Culturelle ESGAE 2026

Un site vitrine moderne pour l'événement annuel "Journée Culturelle" organisé par ESGAE.

## 🎯 Objectif

Créer une plateforme web élégante pour présenter et promouvoir la Journée Culturelle ESGAE 2026, avec un design inspiré des visuels officiels et une expérience utilisateur exceptionnelle.

## ✨ Caractéristiques

- ✅ **Compte à rebours dynamique** jusqu'au 04 Avril 2026 à 09h00
- ✅ **Design responsive** mobile-first
- ✅ **Animations élégantes** avec Framer Motion
- ✅ **Sections complètes** : Hero, Programme, Galerie, Infos pratiques, Localisation
- ✅ **Palette de couleurs** inspirée du design africain
- ✅ **Optimisation des performances** avec next/image
- ✅ **Navigation fluide** avec scroll smooth

## 🚀 Stack Technique

- **Next.js 16** (App Router)
- **React 19** 
- **TypeScript**
- **TailwindCSS 4**
- **Framer Motion** (animations)
- **Lucide React** (icônes)
- **Google Fonts** (Montserrat, Inter)

## 🛠️ Installation & Démarrage Rapide

### Prérequis
- Node.js 18+
- pnpm (recommandé) ou npm

### Installation

```bash
# Installer les dépendances
pnpm install
# ou
npm install

# Lancer le serveur de développement
pnpm dev
# ou
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) pour voir le site.

### Build Production

```bash
pnpm build
pnpm start
```

## 📁 Structure des Composants

```
components/
├── Navbar.tsx          # Navigation sticky
├── Hero.tsx            # Section d'accueil
├── Countdown.tsx       # Compte à rebours
├── About.tsx           # À propos
├── Programme.tsx       # Programme d'activités
├── ActivityCard.tsx    # Carte réutilisable
├── Gallery.tsx         # Galerie photos
├── EventInfo.tsx       # Infos pratiques
├── MapSection.tsx      # Localisation
├── SectionTitle.tsx    # Titre réutilisable
└── Footer.tsx          # Pied de page
```

## 🎨 Design System

| Élément | Couleur | Code |
|---------|---------|------|
| Primaire | Orange Gold | `#D98E04` |
| Texte | Deep Black | `#0B0B0B` |
| Fond | Warm White | `#F7F7F2` |
| Accent | Brown Earth | `#7A3E12` |
| Succès | Green Accent | `#1E9E57` |
| Alerte | Red Accent | `#B91C1C` |

## 📋 Sections

1. **Hero** - Titre principal + Infos clés + CTA
2. **Countdown** - Compte à rebours en temps réel
3. **About** - Présentation + Valeurs
4. **Programme** - 5 activités principales
5. **Galerie** - Photos d'événements passés
6. **Infos** - Lieu, heure, prix, billets
7. **Localisation** - Carte + adresse
8. **Footer** - Réseaux sociaux + Navigation

## 📸 Images

Les images utilisent Pexels. Pour ajouter vos images :

1. Téléchargez dans `/public/assets/gallery/`
2. Mettez à jour les URLs dans `components/Gallery.tsx`

## 🌐 Déploiement Vercel

```bash
vercel deploy
```

Ou connectez votre repo GitHub directement à Vercel.

## 📱 Responsive Design

- **Mobile** : 1 colonne
- **Tablette** : 2 colonnes  
- **Desktop** : 3-4 colonnes

## 🎬 Animations

- Fade-in au scroll
- Slide-up 
- Scale on hover
- Pulse glow
- Stagger animations

## 🔍 SEO

Métadonnées optimisées :
- Titre : "Journée Culturelle ESGAE 2026"
- Description : "Événement culturel ESGAE - 04 Avril 2026"
- OpenGraph tags

## 📝 À Faire

- [ ] Ajouter vraies images
- [ ] Configurer réseaux sociaux
- [ ] Email de contact
- [ ] Système de paiement (optionnel)

## 🔗 Ressources

- [Next.js Docs](https://nextjs.org/docs)
- [TailwindCSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Lucide Icons](https://lucide.dev)

## 📄 Licence

© 2026 Journée Culturelle ESGAE - Tous droits réservés

---

**Fait avec ❤️ pour la culture** 🎭🎵🎨
