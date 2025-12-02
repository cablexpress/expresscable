# CableXpress Website

Ultra-fast fiber internet service provider website built with React, TypeScript, and Tailwind CSS.

## 🚀 Deployment

This website is automatically deployed to GitHub Pages using GitHub Actions.

### Live Site
- **Production**: https://cablexpres.com
- **GitHub Pages**: https://cablexpress.github.io/expresscable/

### Automatic Deployment

Every push to the `main` branch triggers an automatic deployment:

1. GitHub Actions builds the project
2. Deploys to GitHub Pages
3. Updates live at cablexpres.com

### Custom Domain Setup

The site is configured with the custom domain `cablexpres.com`:

1. CNAME file in `/public/CNAME` points to `cablexpres.com`
2. DNS settings should have:
   - A records pointing to GitHub Pages IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Or CNAME record: `cablexpress.github.io`

## 🛠️ Development

### Prerequisites
- Node.js 20+
- Bun (recommended) or npm

### Installation

```bash
# Install dependencies
bun install
# or
npm install
```

### Development Server

```bash
# Start dev server
bun run dev
# or
npm run dev
```

Visit http://localhost:8080

### Build

```bash
# Create production build
bun run build
# or
npm run build
```

### Preview Production Build

```bash
# Preview the production build locally
bun run preview
# or
npm run preview
```

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

## 🎨 Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Routing**: React Router
- **Icons**: Lucide React

## 📝 License

All rights reserved © 2024 CableXpress
