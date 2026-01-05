# Éclat AI - Landing Page

Landing page moderne et premium pour Éclat AI, une agence spécialisée dans l'excellence opérationnelle pour cliniques esthétiques grâce à l'intelligence artificielle.

## 🚀 Fonctionnalités

- **Design Premium** : Interface moderne avec animations fluides et effets visuels avancés
- **Responsive** : Optimisé pour tous les appareils (mobile, tablette, desktop)
- **Performance** : Construit avec Vite et React pour des performances optimales
- **Composants Modulaires** : Architecture React avec composants réutilisables
- **Animations Avancées** : Système de révélations au scroll, effets 3D, particules animées

## 📋 Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn

## 🛠️ Installation

1. Clonez le repository :
```bash
git clone https://github.com/TahaBeekey/Eclat-ai-v3.git
cd Eclat-ai-v3
```

2. Installez les dépendances :
```bash
npm install
```

3. Configurez les variables d'environnement :
```bash
cp .env.example .env.local
```

Éditez `.env.local` et ajoutez votre clé API Gemini :
```
GEMINI_API_KEY=your_api_key_here
```

4. Lancez le serveur de développement :
```bash
npm run dev
```

L'application sera accessible sur `http://localhost:3000`

## 📦 Scripts Disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Compile l'application pour la production
- `npm run preview` - Prévisualise la version de production

## 🏗️ Structure du Projet

```
eclat-ai-v3/
├── components/          # Composants React réutilisables
│   ├── Navbar.tsx      # Navigation principale
│   ├── Hero.tsx        # Section hero
│   ├── ValueProposition.tsx
│   ├── Testimonials.tsx
│   ├── HowItWorks.tsx
│   ├── RevenueCalculator.tsx
│   ├── FinalCTA.tsx
│   ├── Footer.tsx
│   └── StickyBottomMenu.tsx
├── App.tsx             # Composant principal
├── index.tsx           # Point d'entrée
├── index.html          # Template HTML
├── index.css           # Styles globaux et animations
├── vite.config.ts      # Configuration Vite
├── tsconfig.json       # Configuration TypeScript
└── package.json        # Dépendances et scripts
```

## 🎨 Technologies Utilisées

- **React 19** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Vite** - Build tool et dev server
- **Tailwind CSS** - Framework CSS utilitaire
- **ElevenLabs ConvAI** - Widget de conversation IA

## 📝 Sections de la Landing Page

1. **Hero** - Présentation principale avec CTA
2. **Value Proposition** - Mise en avant des fonctionnalités clés
3. **Testimonials** - Témoignages clients
4. **How It Works** - Processus en 3 phases
5. **Revenue Calculator** - Calculateur de ROI interactif
6. **Final CTA** - Appel à l'action final
7. **Footer** - Informations et liens

## 🔧 Configuration

### Variables d'Environnement

Créez un fichier `.env.local` à la racine du projet :

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

### Port du Serveur

Le port par défaut est `3000`. Vous pouvez le modifier dans `vite.config.ts`.

## 🚢 Déploiement

### Build de Production

```bash
npm run build
```

Les fichiers optimisés seront générés dans le dossier `dist/`.

### Prévisualisation du Build

```bash
npm run preview
```

## 📄 Licence

Ce projet est privé et propriétaire d'Éclat AI.

## 👥 Contact

Pour toute question ou demande, contactez l'équipe Éclat AI.

---

Développé avec ❤️ par l'équipe Éclat AI
