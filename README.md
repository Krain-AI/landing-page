# Krain Landing Page

This is the standalone landing page for Krain, extracted from the monorepo.

## Getting Started

### Prerequisites

- Node.js 20.x
- pnpm 10.x

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
pnpm build
```

### Production

```bash
pnpm start
```

## Project Structure

```
landing-page/
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # React components
│   │   ├── ui/          # UI components (Button, Card, Accordion, etc.)
│   │   └── icons/       # Icon components
│   ├── sections/        # Page sections
│   └── lib/             # Utility functions
├── public/              # Static assets
└── ...config files
```

## Migration Notes

This repository was extracted from the krain-apps monorepo. The following changes were made:

1. **UI Components**: Copied only the required components from `@krain/ui` package:
   - accordion, button, card, custom-carousel, tooltip
   - Icons: logo-coinmarketcap, logo-medium, logo-telegram, XLogo
   - lib/utils (cn function)

2. **Dependencies**: All workspace dependencies have been converted to regular npm packages

3. **Imports**: All `@krain/ui` imports updated to local `@/` imports

4. **Configuration**: TypeScript and ESLint configs are now standalone

## Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm clean` - Clean build artifacts

## Environment Variables

No environment variables are currently required for the landing page.

## Technologies

- Next.js 15
- React 19
- TypeScript 5
- Tailwind CSS 4
- Radix UI components
