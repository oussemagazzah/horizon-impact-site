# Horizon Impact – Scanni landing page

Landing page for **Scanni**, a free mobile app that scans food labels and explains what's in them:
ingredients, E-number additives and nutrition scores based on WHO daily recommendations.

**Live site:** [horizon-impact.site](https://www.horizon-impact.site/)

Scanni was built by team *Horizon Impact* as a community-impact project for **PSC 2026**
at École Polytechnique de Sousse (8 members, 3 developers). I built this landing page and the
Gemini API integration in the app.

## What the page presents

- **Scan OCR & Vision:** photograph a label; OCR and the Gemini API turn it into a structured ingredient list.
- **Anonymous, objective analysis:** no brand ranking, no value judgement, just the facts.
- **Optional profile:** personalised filtering and scan history, with minimal personal data.

The site content is in French, the language of its target audience in Tunisia.

## Tech stack

React 18 · TypeScript · Vite · Tailwind CSS · Radix UI (shadcn/ui) · Framer Motion · Wouter · deployed on Vercel

## Run locally

```bash
npm install
npm run dev        # development server
npm run build      # production build
npm run typecheck  # TypeScript check
```

## Structure

```
src/
├── pages/home.tsx      # the landing page
├── components/ui/      # shadcn/ui components
├── hooks/, lib/        # small helpers
└── main.tsx, App.tsx   # entry point and routing
```
