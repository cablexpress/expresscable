# CableXpress Website

Ultra-fast fiber internet service provider website built with React, TypeScript, and Tailwind CSS.

## 🚀 Live Site

- **Production**: https://cablexpres.com
- **GitHub Pages**: https://cablexpress.github.io/expresscable/

## ✨ Features

- Responsive design for all devices (mobile, tablet, desktop)
- Modern hexagon logo with network connectivity theme
- Animated hero slider with call-to-action buttons
- Service showcase with alternating layouts
- Pricing plans with feature comparison
- Customer testimonials carousel
- FAQ accordion
- Contact form
- Fully accessible navigation

## 🛠️ Technologies

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Routing**: React Router
- **Icons**: Lucide React

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/cablexpress/expresscable.git
cd expresscable

# Install dependencies
npm install
# or
bun install

# Start development server
npm run dev
# or
bun run dev
```

Visit http://localhost:8080

## 🏗️ Build

```bash
# Create production build
npm run build
# or
bun run build

# Preview production build
npm run preview
# or
bun run preview
```

## 🚀 Deployment

This project automatically deploys to GitHub Pages using GitHub Actions.

### Automatic Deployment

Every push to the `main` branch triggers:
1. Build process via GitHub Actions
2. Deployment to GitHub Pages
3. Updates at cablexpres.com

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment information.

## 📁 Project Structure

```
src/
├── components/
│   ├── home/           # Home page sections
│   ├── ui/             # Reusable UI components
│   ├── Navigation.tsx  # Main navigation
│   └── Footer.tsx      # Site footer
├── pages/              # Page components
├── lib/                # Utilities and helpers
├── hooks/              # Custom React hooks
└── assets/             # Images and static files
```

## 📝 License

All rights reserved © 2024 CableXpress
