# ARCHITECTURE.md — Moye Law Website: Complete Technical Reference

> **Purpose**: This document is the single source of truth for the Moye Law website. It is structured for consumption by AI agents (Claude, GPT, Cursor, etc.) to enable rapid, accurate code generation and review. Every claim is backed by a specific file path relative to the repo root.
>
> **Repo**: `github.com/binarylawyer/moye-law-redesign` (public)
>
> **Last Updated**: April 2026

---

## TABLE OF CONTENTS

1. [System Context](#1-system-context)
2. [Current State and Live URLs](#2-current-state-and-live-urls)
3. [Project History Timeline](#3-project-history-timeline)
4. [Repository Structure Map](#4-repository-structure-map)
5. [Tech Stack — Production App](#5-tech-stack--production-app-moye-law-web)
6. [Architecture and Rendering Model](#6-architecture-and-rendering-model)
7. [Complete Route Map](#7-complete-route-map)
8. [Design System — Hybrid Mondrian / Kinetic Structuralism](#8-design-system--hybrid-mondrian--kinetic-structuralism)
9. [Component Inventory](#9-component-inventory)
10. [Data Model and Content Architecture](#10-data-model-and-content-architecture)
11. [SEO and Metadata Analysis](#11-seo-and-metadata-analysis)
12. [Known Issues and Technical Debt](#12-known-issues-and-technical-debt)
13. [Firebase Retirement Plan](#13-firebase-retirement-plan)
14. [Environment Variables and Secrets](#14-environment-variables-and-secrets)
15. [Deployment and CI/CD](#15-deployment-and-cicd)
16. [Priority Action Items for LLM Agent](#16-priority-action-items-for-llm-agent)

---

## 1. SYSTEM CONTEXT

### What This Is

Moye Law is a law firm website for a boutique legal practice specializing in estate planning, intellectual property, elder law, digital assets, and art/entertainment law. The firm serves high-net-worth individuals with a dual value proposition: **"Family Values, Future-Forward Legal Solutions"** — combining traditional legal counsel with technology-forward automation.

### The Business Model: "Factory to Storefront"

The firm operates on a three-layer model:

- **The Factory ("Sushi Kitchen")**: Backend AI automation hub that builds legal workflow tools. This is NEVER exposed on the public site.
- **The IP Holder ("Sushi Legal")**: The entity that structures and certifies automated legal products. Also behind the curtain.
- **The Storefront ("Moye Law")**: The client-facing website. This is what we are building. It presents polished legal services — some automated ("products"), some bespoke ("counsel") — without revealing the engineering machinery.

### Target User Personas

| Persona | Name | Age | Profile | Needs | UX Expectations |
|---------|------|-----|---------|-------|-----------------|
| **Tech Innovator** | Alex Chen | 38 | NYC tech founder, Series B startup | IP protection, digital assets, startup equity planning | Efficiency, speed, minimal UX, clear security signals |
| **Executive Caregiver** | Barbara Miller | 52 | Financial executive, caring for aging parents | Estate planning AND elder law, healthcare directives | Personal attention, clear explanations, human connection, warmth |
| **Wealth Patriarch** | David Rodriguez | 63 | UHNW retired banker, multi-generational family | Dynasty trusts, tax minimization, family governance | Sophistication, discretion, premium feel, proactive advice |

### Core Brand Identity

- **Voice**: Sophisticated precision. Not corporate jargon. Not casual.
- **Metaphor**: Legal outcomes are "engineered" and "architected" — not merely "provided."
- **Terms to use**: Architecture, Deployment, Bundle, Legacy, Craft, System
- **Terms to NEVER use on the public site**: Sushi, Omakase, Chef, Menu, Kitchen, Ingredients

---

## 2. CURRENT STATE AND LIVE URLS

### Two Sites Are Live From This Repo

| Site | URL | Stack | Status | Purpose |
|------|-----|-------|--------|---------|
| **V1 (Legacy)** | `https://moye.law` | Vite 5 + React 18 SPA | **RETIRING** | Old client-side rendered site with SEO problems |
| **V2 (Production Target)** | `https://moye-law-version-2.vercel.app` | Next.js 16 + React 19 | **ACTIVE — moving to moye.law** | New server-rendered site with V2 design system |

### Key Facts

- **GitHub Repo**: `https://github.com/binarylawyer/moye-law-redesign` (public, single `main` branch, 459 commits)
- **V1 deploys from**: Root `dist/` folder to Firebase Hosting + GitHub Pages
- **V2 deploys from**: `moye-law-web/` subdirectory to Vercel (auto-deploy on push)
- **Domain migration plan**: Point `moye.law` DNS from Firebase to Vercel once V2 is production-ready

### The Problem That Started This

The V1 site at `moye.law` is a pure client-side SPA. Every URL serves the same empty `index.html` shell. Search engines, LLM crawlers, and social previews see zero per-page content. The V2 Next.js app solves this architecturally with React Server Components, but needs completion work (metadata, missing pages, bugs).

---

## 3. PROJECT HISTORY TIMELINE

| Period | Phase | Key Changes |
|--------|-------|-------------|
| **Mar 2025** | Genesis | Scaffolded via GPT Engineer using `vite_react_shadcn_ts` template. Initial homepage, practice areas, contact page. React 18 + Vite + shadcn/ui + Tailwind CSS 3. |
| **Mar-Jun 2025** | Design Iteration | Multiple font changes (PP Mori -> Inter -> Cormorant/Poppins). Color scheme refinements. Outlign-inspired design direction. Added whitespace and polish. |
| **Jun-Sep 2025** | Content Build-out | Built out ~50+ pages: all practice areas, services, resources hub, articles, podcasts, FAQ, books, research papers. Added Firebase Cloud Functions for contact form email delivery. |
| **Sep-Nov 2025** | V2 Design System | "Hybrid Mondrian" / "Kinetic Structuralism" design language defined. V2 prototype components built in `v-2/` and `v-2/sushi-ui/`. MkDocs documentation site created in `docs/`. Design rules codified in `docs/rules/`. |
| **Nov-Dec 2025** | Next.js Migration | `moye-law-web/` created with Next.js 16 + App Router + React 19. Supabase replaces Firebase for data. V2 components ported. Server Components for SSR. Admin dashboard, design system preview pages, Payload CMS scaffolding. Last commit: Dec 20, 2025. |
| **Jan-Apr 2026** | Dormant | No commits. Site remains on Vercel at `moye-law-version-2.vercel.app`. |

### Key Architectural Decisions

1. **Vite was chosen initially** because GPT Engineer scaffolded it; it was fast to prototype.
2. **Firebase was chosen** because it was easy to add contact form handling without a backend.
3. **Next.js migration was started** specifically to solve the SEO/SSR problem and adopt the V2 design.
4. **Supabase replaced Firebase** in the Next.js app because it provides SSR-compatible auth, a Postgres database, and a better developer experience for server components.
5. **Payload CMS was scaffolded** to eventually manage content dynamically, but its dependencies were never added to `package.json`.

---

## 4. REPOSITORY STRUCTURE MAP

```
moye-law-redesign/                     # Repo root
├── .agent/rules/                      # Strategic design docs and AI agent rules
│   ├── Mondrian/                      # Reference images (mondrian-1.jpg through mondrian-5.png)
│   ├── sushiKitchen/                  # Deep operational/strategic docs for the Sushi ecosystem
│   ├── Concept-Ecosystem-Architecture.md
│   ├── Concept-Private-Banking-Strategy.md
│   ├── Strategic Design Spec & System Prompt_ Moye Law Hybrid-Mondrian Identity.md
│   └── System Prompt_ The Moye Law Hybrid-Mondrian Architecture.md
│
├── .cursor/rules/                     # Cursor IDE rules
│   └── website-notes.mdc             # Persona awareness, design system, branding rules
│
├── .github/workflows/
│   └── deploy.yml                     # GitHub Pages deployment (V1 Vite build only)
│
├── docs/                              # MkDocs design system documentation
│   ├── index.md                       # Design philosophy overview
│   ├── rules/                         # Formal design rules
│   │   ├── 00-methodology.md          # Kinetic Structuralism methodology
│   │   ├── 01-color-system.md         # Complete color palette and usage rules
│   │   ├── 02-typography.md           # Font families, type scale, hierarchy
│   │   ├── 03-layout-grid.md         # 4px borders, grid system, container rules
│   │   ├── 04-motion-physics.md       # Animation timing, core animations
│   │   ├── 05-ui-states.md           # State machine for components
│   │   └── design_methodology.md      # "Vibe Coding" design workflow
│   ├── components/                    # Component documentation
│   │   ├── v1-legacy.md
│   │   └── v2-core.md
│   └── v2-strategy/
│       └── strategy-dump.md           # Strategic architecture blueprint
│
├── firebase/functions/                # DUPLICATE of functions/ (not used by deploy config)
│   └── index.js
│
├── functions/                         # Firebase Cloud Functions (ACTIVE for V1)
│   ├── index.js                       # sendBookIncentive + notifyTeamOfNewSubmission
│   ├── package.json                   # Node 18, firebase-admin, nodemailer, validator
│   ├── firestore.rules
│   └── firestore.indexes.json
│
├── moye-law-web/                      # *** PRODUCTION APP (Next.js 16) ***
│   ├── src/
│   │   ├── app/                       # Next.js App Router (all routes)
│   │   ├── components/                # V2 component library (48 components)
│   │   ├── data/                      # Static data modules (6 practice area files)
│   │   ├── lib/                       # Supabase client/server setup
│   │   ├── legacy_v2/                 # Old Vite-style code (not used)
│   │   ├── middleware.ts              # Supabase auth + route protection
│   │   └── payload.config.ts          # Payload CMS config (deps NOT in package.json)
│   ├── public/                        # Static assets
│   ├── package.json                   # Next.js 16, React 19, Supabase, Tailwind 4
│   ├── next.config.ts                 # Minimal (empty config)
│   ├── postcss.config.mjs             # @tailwindcss/postcss (Tailwind v4)
│   └── tsconfig.json
│
├── public/                            # Static assets for V1 Vite app
│   ├── images/
│   ├── logos/
│   ├── fonts/
│   ├── robots.txt
│   └── manifest.json
│
├── src/                               # V1 Vite/React SPA source (LEGACY)
│   ├── App.tsx                        # BrowserRouter with ~50+ routes
│   ├── main.tsx                       # createRoot entry point (CSR)
│   ├── components/                    # V1 component library (~100+ files)
│   ├── data/                          # Static TS data modules
│   ├── hooks/
│   ├── lib/                           # firebase.ts, tokens.ts, utils.ts
│   ├── pages/                         # All V1 page components
│   ├── styles/
│   └── utils/
│
├── v-2/                               # V2 design prototype components (LEGACY)
│   ├── components/
│   ├── pages/
│   ├── sushi-ui/                      # Sushi UI kit prototype
│   └── styles/
│
├── firebase.json                      # Firebase Hosting config (V1)
├── .firebaserc                        # Firebase project: moyelaw-e3158
├── index.html                         # V1 Vite entry HTML
├── vite.config.ts                     # V1 Vite config
├── tailwind.config.ts                 # V1 Tailwind CSS 3 config
├── components.json                    # V1 shadcn/ui config
├── mkdocs.yml                         # MkDocs Material theme config
├── package.json                       # V1 Vite app dependencies
└── README.md                          # Firebase setup instructions (V1)
```

### What Is Active vs Legacy

| Directory | Status | Used By |
|-----------|--------|---------|
| `moye-law-web/` | **ACTIVE** | Production V2 Next.js app |
| `docs/` | **ACTIVE** | Design system reference (used by developers and AI agents) |
| `.agent/rules/` | **ACTIVE** | Strategic design docs for AI agent context |
| `.cursor/rules/` | **ACTIVE** | Cursor IDE rules |
| `functions/` | **ACTIVE (V1 only)** | Firebase Cloud Functions for V1 contact form |
| `src/` | **LEGACY** | V1 Vite SPA source — to be retired |
| `v-2/` | **LEGACY** | V2 prototypes — superseded by `moye-law-web/src/components/` |
| `firebase/functions/` | **LEGACY** | Duplicate of `functions/`, not referenced by `firebase.json` |

---

## 5. TECH STACK — PRODUCTION APP (`moye-law-web/`)

### Core Framework

| Package | Version | Purpose |
|---------|---------|---------|
| `next` | `16.0.10` | React meta-framework with App Router, SSR, RSC, file-based routing |
| `react` | `19.2.1` | UI library (React 19 with Server Components) |
| `react-dom` | `19.2.1` | DOM renderer |
| `typescript` | `^5` | Type safety |

### Styling

| Package | Version | Purpose |
|---------|---------|---------|
| `tailwindcss` | `^4` | Utility-first CSS framework (v4 with `@theme` directive) |
| `@tailwindcss/postcss` | `^4` | PostCSS integration for Tailwind v4 |
| `@tailwindcss/typography` | `^0.5.19` | Prose styling for article content |
| `class-variance-authority` | `^0.7.1` | Component variant management (cva) |
| `clsx` | `^2.1.1` | Conditional class joining |
| `tailwind-merge` | `^3.4.0` | Intelligent Tailwind class merging |
| `tailwindcss-animate` | `^1.0.7` | Animation utilities |

### Data and Backend

| Package | Version | Purpose |
|---------|---------|---------|
| `@supabase/supabase-js` | `^2.88.0` | Supabase client SDK (browser-side auth, form submissions) |
| `@supabase/ssr` | `^0.8.0` | Supabase SSR integration (server-side auth with cookies) |

### UI and Animation

| Package | Version | Purpose |
|---------|---------|---------|
| `framer-motion` | `^12.23.26` | Animation library (kinetic reveals, transitions, hover effects) |
| `lucide-react` | `^0.561.0` | Icon library |

### Forms and Validation

| Package | Version | Purpose |
|---------|---------|---------|
| `react-hook-form` | `^7.68.0` | Form state management |
| `@hookform/resolvers` | `^5.2.2` | Validation resolver bridge |
| `zod` | `^4.2.1` | Schema validation |

### Development

| Package | Version | Purpose |
|---------|---------|---------|
| `eslint` | `^9` | Linting |
| `eslint-config-next` | `16.0.10` | Next.js ESLint rules |
| `@types/node` | `^20` | Node.js type definitions |
| `@types/react` | `^19` | React type definitions |
| `@types/react-dom` | `^19` | React DOM type definitions |

### NOT Installed But Referenced in Code

| Package | Referenced In | Status |
|---------|--------------|--------|
| `payload` | `moye-law-web/src/payload.config.ts` | **MISSING from package.json** — CMS routes will fail |
| `@payloadcms/db-postgres` | `moye-law-web/src/payload.config.ts` | **MISSING** |
| `@payloadcms/richtext-lexical` | `moye-law-web/src/payload.config.ts` | **MISSING** |
| `@payloadcms/storage-s3` | `moye-law-web/src/payload.config.ts` | **MISSING** |
| `@payloadcms/next` | `moye-law-web/src/app/(payload)/` | **MISSING** |
| `sharp` | `moye-law-web/src/payload.config.ts` | **MISSING** |

### Fonts (loaded via `next/font/google` in root layout)

| Font | CSS Variable | Usage |
|------|-------------|-------|
| **Inter** | `--font-inter` | Body text, UI elements, navigation, buttons |
| **Cormorant Garamond** | `--font-cormorant` | Headings, display text, blockquotes |
| **JetBrains Mono** | `--font-jetbrains` | Data labels, metadata, technical readouts, footer |

---

## 6. ARCHITECTURE AND RENDERING MODEL

### Next.js App Router Architecture

The app uses the Next.js 16 **App Router** with React Server Components (RSC) as the default rendering model.

```
moye-law-web/src/app/
├── layout.tsx              # Root layout (Server Component) — fonts, globals.css, default metadata
├── page.tsx                # Home page (Server Component) — composes NavBarV2 + V2 sections
├── globals.css             # Tailwind v4 @theme tokens, base styles
├── error.tsx               # Error boundary
├── global-error.tsx        # Global error boundary
├── practice/
│   ├── layout.tsx          # Practice segment layout — NavBarV2 + TerminalFooter wrapper
│   ├── page.tsx            # Practice index (Client Component)
│   └── [area]/page.tsx     # Individual practice pages (mixed server/client)
├── services/
│   ├── page.tsx            # Services index (Client Component)
│   └── [service]/page.tsx  # Individual service pages (all Client Components)
├── resources/
│   ├── page.tsx            # Resources hub (Server Component, Supabase fetch)
│   ├── articles/page.tsx   # Articles list (Server Component, Supabase fetch)
│   ├── articles/[slug]/page.tsx  # Article detail (Server Component, generateMetadata)
│   ├── podcasts/page.tsx
│   ├── faq/page.tsx
│   └── case-studies/page.tsx
├── contact/page.tsx        # Contact (Server Component shell, Client form)
├── firm/page.tsx           # About the firm (Client Component)
├── how-we-work/page.tsx    # Process page (Client Component)
├── books/page.tsx
├── login/page.tsx          # Auth (Client Component, Supabase auth)
├── admin/
│   ├── layout.tsx          # Admin sidebar layout (Client Component, auth check)
│   ├── page.tsx
│   └── design/             # Design system preview pages
└── (payload)/              # Payload CMS routes (BROKEN — deps missing)
```

### Server Components vs Client Components

**Server Components** (default in App Router — HTML rendered on the server, SEO-visible):
- `app/layout.tsx` (root layout)
- `app/page.tsx` (homepage)
- `app/practice/layout.tsx` (practice wrapper)
- `app/resources/page.tsx` (Supabase fetch)
- `app/resources/articles/page.tsx` (Supabase fetch)
- `app/resources/articles/[slug]/page.tsx` (Supabase fetch + generateMetadata)
- `app/contact/page.tsx`
- Practice pages using `PracticeTemplate` via data files: `elder-law`, `trusts-estates`, `ip-licensing`, `ip-asset-protection`, `emerging-tech`, `real-estate`
- `app/admin/design/page.tsx`

**Client Components** (marked with `"use client"` — rendered in browser, CANNOT export metadata):
- `app/practice/page.tsx` (practice index)
- `app/services/page.tsx` (services index)
- ALL service pages: `estate-planning`, `licensing-transactions`, `ip-consulting-strategy`, `probate-administration`
- MOST practice pages (16 of 23): `intellectual-property`, `estate-legacy`, `ai-machine-learning`, `art-law`, `arts-media-law`, `blockchain-digital-assets`, `digital-asset-protection`, `digital-media-law`, `entertainment-law`, `innovation-patent-law`, `ip-consulting`, `real-estate-consulting`, `real-estate-hub`, `real-estate-transactions`, `software-licensing`, `emerging-technology-hub`
- `app/firm/page.tsx`
- `app/how-we-work/page.tsx`
- `app/login/page.tsx`
- `app/admin/layout.tsx`
- `app/strategy/page.tsx`
- `app/v2-index/page.tsx`
- ALL admin/design sub-pages

**ISSUE**: The 37 client-component pages listed above CANNOT export `metadata` or `generateMetadata`. They all fall back to the root layout's generic title "Moye Law Systems | Advanced Legal Architecture". This is the primary SEO problem to solve.

### Data Fetching Patterns

1. **Supabase Server-Side** (`@/lib/supabase/server`): Used in `resources/page.tsx`, `resources/articles/page.tsx`, `resources/articles/[slug]/page.tsx` — creates a server client with `cookies()` and fetches from Supabase tables directly in the component body.

2. **Supabase Client-Side** (`@/lib/supabase/client`): Used in `login/page.tsx` for auth, `admin/layout.tsx` for sign-out, `V2ContactForm` for form submissions.

3. **Static Data Files** (`src/data/practiceAreas/*.ts`): Six practice areas use pre-defined TypeScript objects passed as props to `PracticeTemplate`.

4. **Inline Content**: Most pages (especially client-component practice/service pages) have ALL content hardcoded directly in the `page.tsx` file — arrays of objects, strings, etc. defined inline.

5. **Fallback/Seed Data**: Resources pages include hardcoded fallback arrays used when Supabase returns empty results or is unavailable.

### Middleware

**File**: `moye-law-web/src/middleware.ts`

- Creates Supabase SSR client with cookie management
- **Protects `/admin/*`**: Redirects unauthenticated users to `/login`
- **Build safety**: If Supabase env vars are missing, middleware passes through (prevents build failures)
- **Matcher**: All paths except `_next/static`, `_next/image`, `favicon.ico`, image files

### Layout Chain

```
app/layout.tsx (root)
├── Fonts: Inter, Cormorant Garamond, JetBrains Mono
├── CSS: globals.css
├── Metadata: "Moye Law Systems | Advanced Legal Architecture"
├── Body: font variables + antialiased + bg-white + text-navy
│
├── app/practice/layout.tsx (practice segment)
│   ├── NavBarV2
│   ├── <main>{children}</main>
│   └── TerminalFooter
│
├── app/admin/layout.tsx (admin segment — "use client")
│   ├── Sidebar navigation
│   ├── Auth check (Supabase)
│   └── Content area
│
└── All other pages: NO segment layout
    └── Each page must include its own NavBarV2 + TerminalFooter
```

**ISSUE**: Pages outside `/practice/*` and `/admin/*` have NO shared layout for navigation. The homepage, services, resources, contact, firm, and how-we-work pages each include NavBarV2 and TerminalFooter individually. The `/services/*` sub-pages do NOT include nav/footer at all (they use `ServiceTemplate` which has no chrome).

---

## 7. COMPLETE ROUTE MAP

### Public Pages

| URL | File Path | Rendering | Has Metadata | Data Source | Nav/Footer |
|-----|-----------|-----------|-------------|-------------|------------|
| `/` | `app/page.tsx` | Server | ROOT ONLY | Inline props | Yes (in page) |
| `/contact` | `app/contact/page.tsx` | Server | ROOT ONLY | None | Yes (in page) |
| `/firm` | `app/firm/page.tsx` | **Client** | ROOT ONLY | Inline | Yes (in page) |
| `/how-we-work` | `app/how-we-work/page.tsx` | **Client** | ROOT ONLY | Inline | Yes (in page) |
| `/books` | `app/books/page.tsx` | Server | ROOT ONLY | Supabase/fallback | Yes (in page) |
| `/strategy` | `app/strategy/page.tsx` | **Client** | ROOT ONLY | Inline | Unknown |
| `/v2-index` | `app/v2-index/page.tsx` | **Client** | ROOT ONLY | Inline | Unknown |

### Practice Areas (all under `/practice/*`, wrapped by `practice/layout.tsx` which provides NavBarV2 + TerminalFooter)

| URL | File Path | Rendering | Has Metadata | Data Source |
|-----|-----------|-----------|-------------|-------------|
| `/practice` | `app/practice/page.tsx` | **Client** | ROOT ONLY | Inline |
| `/practice/directory` | `app/practice/directory/page.tsx` | **Client** | ROOT ONLY | Inline |
| `/practice/elder-law` | `app/practice/elder-law/page.tsx` | Server | **YES** (from data file) | `data/practiceAreas/elderLaw.ts` |
| `/practice/trusts-estates` | `app/practice/trusts-estates/page.tsx` | Server | **YES** (from data file) | `data/practiceAreas/trustsEstates.ts` |
| `/practice/ip-licensing` | `app/practice/ip-licensing/page.tsx` | Server | **YES** (from data file) | `data/practiceAreas/ipLicensing.ts` |
| `/practice/ip-asset-protection` | `app/practice/ip-asset-protection/page.tsx` | Server | **YES** (from data file) | `data/practiceAreas/ipAssetProtection.ts` |
| `/practice/emerging-tech` | `app/practice/emerging-tech/page.tsx` | Server | **YES** (from data file) | `data/practiceAreas/emergingTech.ts` |
| `/practice/real-estate` | `app/practice/real-estate/page.tsx` | Server | **YES** (from data file) | `data/practiceAreas/realEstate.ts` |
| `/practice/intellectual-property` | `app/practice/intellectual-property/page.tsx` | **Client** | ROOT ONLY | Inline |
| `/practice/estate-legacy` | `app/practice/estate-legacy/page.tsx` | **Client** | ROOT ONLY | Inline |
| `/practice/ai-machine-learning` | `app/practice/ai-machine-learning/page.tsx` | **Client** | ROOT ONLY | Inline |
| `/practice/art-law` | `app/practice/art-law/page.tsx` | **Client** | ROOT ONLY | Inline |
| `/practice/arts-media-law` | `app/practice/arts-media-law/page.tsx` | **Client** | ROOT ONLY | Inline |
| `/practice/blockchain-digital-assets` | `app/practice/blockchain-digital-assets/page.tsx` | **Client** | ROOT ONLY | Inline |
| `/practice/digital-asset-protection` | `app/practice/digital-asset-protection/page.tsx` | **Client** | ROOT ONLY | Inline |
| `/practice/digital-media-law` | `app/practice/digital-media-law/page.tsx` | **Client** | ROOT ONLY | Inline |
| `/practice/entertainment-law` | `app/practice/entertainment-law/page.tsx` | **Client** | ROOT ONLY | Inline |
| `/practice/innovation-patent-law` | `app/practice/innovation-patent-law/page.tsx` | **Client** | ROOT ONLY | Inline |
| `/practice/ip-consulting` | `app/practice/ip-consulting/page.tsx` | **Client** | ROOT ONLY | Inline |
| `/practice/probate-administration` | `app/practice/probate-administration/page.tsx` | **Client** | ROOT ONLY | Inline |
| `/practice/real-estate-consulting` | `app/practice/real-estate-consulting/page.tsx` | **Client** | ROOT ONLY | Inline |
| `/practice/real-estate-hub` | `app/practice/real-estate-hub/page.tsx` | **Client** | ROOT ONLY | Inline |
| `/practice/real-estate-transactions` | `app/practice/real-estate-transactions/page.tsx` | **Client** | ROOT ONLY | Inline |
| `/practice/software-licensing` | `app/practice/software-licensing/page.tsx` | **Client** | ROOT ONLY | Inline |
| `/practice/emerging-technology-hub` | `app/practice/emerging-technology-hub/page.tsx` | **Client** | ROOT ONLY | Inline |

### Services

| URL | File Path | Rendering | Has Metadata | Data Source | Nav/Footer |
|-----|-----------|-----------|-------------|-------------|------------|
| `/services` | `app/services/page.tsx` | **Client** | ROOT ONLY | Inline | **MISSING** |
| `/services/estate-planning` | `app/services/estate-planning/page.tsx` | **Client** | ROOT ONLY | Inline ServiceData | **MISSING** (ServiceTemplate has no nav) |
| `/services/licensing-transactions` | `app/services/licensing-transactions/page.tsx` | **Client** | ROOT ONLY | Inline ServiceData | **MISSING** |
| `/services/ip-consulting-strategy` | `app/services/ip-consulting-strategy/page.tsx` | **Client** | ROOT ONLY | Inline ServiceData | **MISSING** |
| `/services/probate-administration` | `app/services/probate-administration/page.tsx` | **Client** | ROOT ONLY | Inline ServiceData | **MISSING** |

### Resources

| URL | File Path | Rendering | Has Metadata | Data Source | Nav/Footer |
|-----|-----------|-----------|-------------|-------------|------------|
| `/resources` | `app/resources/page.tsx` | Server | ROOT ONLY | Supabase (articles, podcasts, case_studies, books) | Yes (in page) |
| `/resources/articles` | `app/resources/articles/page.tsx` | Server | ROOT ONLY | Supabase (articles) | Yes (in page) |
| `/resources/articles/[slug]` | `app/resources/articles/[slug]/page.tsx` | Server | **YES** (generateMetadata) | Supabase (single article) | Yes (in page) |
| `/resources/podcasts` | `app/resources/podcasts/page.tsx` | Server | ROOT ONLY | Supabase/fallback | Yes (likely) |
| `/resources/faq` | `app/resources/faq/page.tsx` | Server | ROOT ONLY | Supabase/fallback | Yes (likely) |
| `/resources/case-studies` | `app/resources/case-studies/page.tsx` | Server | ROOT ONLY | Supabase/fallback | Yes (likely) |

### Auth and Admin

| URL | File Path | Rendering | Purpose |
|-----|-----------|-----------|---------|
| `/login` | `app/login/page.tsx` | **Client** | Supabase email/password auth |
| `/admin` | `app/admin/page.tsx` | Server (behind client layout) | Admin dashboard |
| `/admin/design` | `app/admin/design/page.tsx` | Server | Design system hub |
| `/admin/design/colors` | Client | Color palette preview |
| `/admin/design/typography` | Client | Typography scale preview |
| `/admin/design/components` | Client | Component showcase |
| `/admin/design/motion` | Client | Motion/animation demos |
| `/admin/design/bento-grids` | Client | Bento grid layouts |
| `/admin/design/foundations` | Client | Design foundations |
| `/admin/design/protocol` | Client | Design protocol |
| `/admin/design/product` | Client | Product page design |
| `/admin/design/service` | Client | Service page design |
| `/admin/design/service-components` | Client | Service component showcase |

### CMS (BROKEN)

| URL | File Path | Status |
|-----|-----------|--------|
| `/cms/[[...slug]]` | `app/(payload)/cms/[[...slug]]/page.tsx` | **WILL NOT BUILD** — Payload deps missing from package.json |
| `/api/[...slug]` | `app/(payload)/api/[...slug]/route.ts` | **WILL NOT BUILD** |
| `/api/graphql` | `app/(payload)/api/graphql/route.ts` | **WILL NOT BUILD** |

### Routes Missing From V2 (present in V1 Vite app)

| V1 URL | Description | Priority |
|--------|-------------|----------|
| `/about` | About page (V2 has `/firm` instead) | Low (renamed) |
| `/team` | Team listing page | Medium |
| `/team/:memberId` | Individual team member profiles | Medium |
| `/research` | Research papers listing | Low |
| `/research/:slug` | Individual research paper | Low |
| `/books/:slug` | Individual book detail page | Low |
| `/client-chat` | Simulated client chat | Low |
| `/experience-the-difference` | Marketing page | Low |
| `/resources/how-we-work` | V2 has `/how-we-work` at top level | Low (moved) |
| `/resources/technology-approach` | Technology approach page | Low |
| `/services/elder-law` | Elder law service page | Medium |
| `/services/digital-asset-tech-protection` | Digital asset service | Medium |
| `/services/art-entertainment-law` | Art/entertainment service | Medium |

---

## 8. DESIGN SYSTEM — HYBRID MONDRIAN / KINETIC STRUCTURALISM

### 8.1 Philosophy

The design system is called **"Kinetic Structuralism"** — a fusion of Piet Mondrian's rigid geometric grid with kinetic, mechanical motion. The website does not just "load"; it "constructs" itself.

Core principles:
- **"The Grid is Justice"** — All content is contained within 4px Deep Navy borders
- **"The Binary Lawyer"** — Dual personality: serif (The Counsel/Art) vs mono (The Engineer/Data)
- **"Legal Luxury"** — Reject standard corporate blue; embrace a palette that feels like a private club
- **"Factory to Storefront"** — The engineering stays behind the curtain; the public site is polished and curated

### 8.2 Color Palette

#### Core Palette (V2 Immutable Constants)

| Token | Hex | CSS Variable | Tailwind Class | Purpose | Rules |
|-------|-----|-------------|----------------|---------|-------|
| **MOYE NAVY** | `#0A2342` | `--color-navy` | `text-navy`, `bg-navy`, `border-navy` | Structure, authority, primary | Dominant force. Headers, borders, footer, "factory" backgrounds |
| **MOYE GOLD** | `#C99D56` | `--color-gold` | `text-gold`, `bg-gold` | Value, CTAs, emphasis | NEVER for large backgrounds. Action buttons and keylines only |
| **VENETIAN RED** | `#8B0000` | `--color-red` | `text-red`, `bg-red` | Alert, art law accent, errors | Use sparingly — demands immediate attention |
| **ENGINEERING GRAY** | `#F3F4F6` | `--color-grey` | `bg-grey` | Technical surfaces, form inputs | "Paper" surface for technical backgrounds |
| **CANVAS WHITE** | `#FFFFFF` | `--background` | `bg-white` | Content containers, reading | 70%+ of page surface should be white |

#### Mondrian Automata Palette (Artistic/Motion Layer)

| Token | Hex | CSS Variable | Purpose |
|-------|-----|-------------|---------|
| **MONDRIAN RED** | `#E31C23` | `--color-mondrian-red` | Primary focus, "heartbeat" of the grid |
| **MONDRIAN BLUE** | `#0055A4` | `--color-mondrian-blue` | Deep logic, stability blocks |
| **MONDRIAN YELLOW** | `#FFD700` | `--color-mondrian-yellow` | Energy, motion triggers |

#### Color Rules

- **Navy** is the dominant force. **Gold** determines the path.
- NEVER use Gold for large backgrounds (it fatigues the eye)
- ALWAYS use Navy for structural borders (`border-4`)
- Venetian Red demands immediate attention — use only for errors and art-specific branding
- Mondrian colors are allowed to MOVE (slide, reveal). Core colors (Navy) are STATIC.
- Mondrian colors may overlap Core colors, representing "Art breaking through Law"

#### Accessibility (WCAG AA)

- **ON NAVY**: White text, Gold text (large text only)
- **ON WHITE**: Navy text, Venetian Red text
- **ON GOLD**: Navy text only (NEVER white text on gold)
- **ON RED**: White text only

#### Quarantined Colors (EXPLICITLY FORBIDDEN)

- No `#FA8072` (Salmon) — banned
- No terminal green on black — no "hacker" aesthetics
- No neon colors of any kind
- No legacy blue `#4682B4` (deprecated, replace with Navy or Gold)

### 8.3 Typography

#### Font Families

| Role | Font | CSS Variable | Tailwind | Usage |
|------|------|-------------|----------|-------|
| **The Artist** (Display) | Cormorant Garamond | `--font-display` | `font-display` | Headings (h1-h3), blockquotes, manifesto text |
| **The Engineer** (Body) | Inter | `--font-sans` | `font-sans` | Body text, UI elements, navigation, buttons |
| **The Data** (Technical) | JetBrains Mono | `--font-mono` | `font-mono` | Data labels, metadata, IDs, footer readouts |

#### Type Scale

| Role | Element | Size (Desktop) | Weight | Font | Case |
|------|---------|---------------|--------|------|------|
| Megaphone | `h1.hero` | 6rem (96px) | Medium | Cormorant | Sentence |
| Headline | `h1` | 3.75rem (60px) | Medium | Cormorant | Sentence |
| Section | `h2` | 2.25rem (36px) | Regular | Cormorant | Sentence |
| Subhead | `h3` | 1.5rem (24px) | Bold | Cormorant | Sentence |
| Lead | `p.lead` | 1.25rem (20px) | Regular | Inter | Sentence |
| Body | `p` | 1rem (16px) | Regular | Inter | Sentence |
| Label | `span.label` | 0.75rem (12px) | Bold | JetBrains | **UPPERCASE** |
| Micro | `small` | 0.625rem (10px) | Regular | JetBrains | **UPPERCASE** |

#### Spacing and Tracking Rules

- **Headings**: `tracking-tight` (-0.02em) — pull letters tighter for solidity
- **Body**: `tracking-normal`
- **Labels (Mono)**: `tracking-widest` (0.25em-0.3em) — expand for technical precision
- **The Label Rule**: When using JetBrains Mono for metadata, ALWAYS use uppercase + wide tracking

### 8.4 Layout System

#### The 4px Standard

The defining visual trait of V2:
- **Border width**: `4px` (`border-4` in Tailwind)
- **Border color**: Navy `#0A2342` (structure) or Black `#000000` (art)
- **Border radius**: `0px` — **ABSOLUTE ZERO. NO ROUNDED CORNERS. EVER.**

#### Container System

- **Page wrapper**: `margin-top: 5rem` (80px) to clear fixed NavBar, `bg-gray-50`
- **Content max-width**: `max-w-7xl` (1280px) or custom `max-width: 1400px`
- **Golden Ratio Split**: `grid-cols-12` with `col-span-8` (66%) content / `col-span-4` (33%) sidebar

#### The Sushi Card (Standard Content Unit)

- Top/Left: Image or Icon (visual)
- Bottom/Right: Text and Action to the edges
- Hover: Border color changes to Navy, shadow becomes hard (`box-shadow: 4px 4px 0 Navy`)

### 8.5 Motion System

#### Timing Functions

| Name | Bezier | Duration | Usage |
|------|--------|----------|-------|
| **Mechanical Snap** | `cubic-bezier(0.2, 0.8, 0.2, 1)` | 300ms | Hover states, button clicks, card reveals |
| **Heavy Slide** | `cubic-bezier(0.7, 0, 0.3, 1)` | 800ms-1200ms | Page transitions, Open Sesame door, large panels |

#### Core Animations

1. **Open Sesame Door** (`OpenSesameDoor.tsx`): 3D perspective split revealing content behind a wall. Perspective: 1200px, RotateY: -110deg, Origin: left center.

2. **Mondrian Reveal**: Lines draw themselves, then content appears. Step 1: Lines expand (height: 0 -> 100%). Step 2: Colors fill (opacity: 0 -> 1). Step 3: Text slides in (translateY: 20px -> 0).

3. **Hard Shadow Hover**: Elements physically "lift" off the page. Rest: `box-shadow: 0 0 0`. Hover: `transform: translate(-4px, -4px); box-shadow: 4px 4px 0 Navy`.

4. **Kinetic Drop**: Elements drop or slide into place, mimicking mechanical assembly. `transform: translateY(-20px) -> 0`, timing: `0.5s cubic-bezier(0.2, 0.8, 0.2, 1)`.

#### Motion Rules

- Things do NOT fade. They SLIDE, LOCK, and SNAP.
- NO opacity-only fades for hover states. MOVEMENT is required.
- All animations MUST respect `prefers-reduced-motion` (instant transitions, no movement)

### 8.6 UI State Machine

Every component is a state machine with these states:

| State | Visual Metaphor | Tokens |
|-------|----------------|--------|
| **IDLE** | "Factory Floor" — clean, ready | `bg-white`, `border-navy` |
| **HOVER** | "The Lift" — factory activates | `translate(-4px, -4px)`, hard shadow |
| **LOADING** | "Blueprint" — schematic view | `animate-pulse`, `bg-gray-100`, skeleton blocks |
| **EMPTY** | "Empty Desk" — potential space | `bg-gray-50`, `border-dashed border-gray-300` |
| **ERROR** | "Red Alert" — system halt | `border-venetian-red`, `bg-red-50` |
| **SUCCESS** | "Gold Seal" — validated | `border-gold`, `bg-gold/10` |

### 8.7 The Quarantine Protocol

Explicitly forbidden on the public site:

- No "Sushi" metaphors (Omakase, Menu, Chef, Ingredients, Kitchen)
- No Salmon (#FA8072) or Neon colors
- No "Hacker" aesthetics (terminal green on black, glitch effects)
- No ultra-light hairline borders (borders must be 4px structural)
- No rounded corners (radius is always 0)
- No "washy" fades (motion must be kinetic/mechanical)

---

## 9. COMPONENT INVENTORY

All components are in `moye-law-web/src/components/`. Every component listed below is a **Client Component** (`"use client"`) unless marked otherwise.

### Layout Components

| Component | File | Purpose |
|-----------|------|---------|
| `NavBarV2` | `layout/NavBarV2.tsx` | Fixed top navigation bar. Links: Practice Areas, The Firm, Resources, Admin. Right CTA "Inquiry Terminal" -> `/contact`. Mobile hamburger present but **menu not wired**. |
| `TerminalFooter` | `layout/TerminalFooter.tsx` | Navy/gold footer with JetBrains Mono. Social placeholders, address, live clock. Terminal aesthetic. |
| `HeroV2` | `layout/HeroV2.tsx` | Homepage hero with Mondrian grid, "Architecture of Legacy" headline, CTA to `/contact`, portrait placeholder, animated stats. |
| `ExecuteCTA` | `layout/ExecuteCTA.tsx` | Bottom-of-page CTA section. "Ready to Engineer Your Legacy?" with contact link. |
| `TechnicalProcess` | `layout/TechnicalProcess.tsx` | Four-step process visualization (Audit, Architect, Deploy, Monitor). |
| `FeatureGrid` | `layout/FeatureGrid.tsx` | Grid layout for feature cards. |
| `SushiServiceHero` | `layout/SushiServiceHero.tsx` | Service page hero with static image. Used by `ServiceTemplate`. |
| `SushiVideoHero` | `layout/SushiVideoHero.tsx` | Service page hero with video. Used by `ServiceTemplate` when featured content is `.mp4`. |

### Content Components

| Component | File | Purpose |
|-----------|------|---------|
| `BinaryBio` | `content/BinaryBio.tsx` | Christopher Moye bio with toggle between "Lawyer" and "Engineer" personas. Navy/white for Lawyer, dark mode for Engineer. |
| `SplitServiceCard` | `content/SplitServiceCard.tsx` | "Paired Services" card — left side: product (automated/fixed price), right side: counsel (bespoke/consultation). |
| `MondrianStats` | `content/MondrianStats.tsx` | Horizontal stats strip with Mondrian border treatment. |
| `KineticBentoWrapper` | `content/KineticBentoWrapper.tsx` | Animated wrapper for bento-grid-style layouts. Wraps child cards with staggered reveal. |
| `ICPHub` | `content/ICPHub.tsx` | "Ideal Client Profile" persona selection hub. Three personas (Innovator, Investor, Executor). |
| `CinematicDivider` | `content/CinematicDivider.tsx` | Full-width statement divider. "The Structure of Peace." |
| `LegalExhibit` | `content/LegalExhibit.tsx` | Client testimonials/social proof section. |
| `KineticMondrianDemo` | `content/KineticMondrianDemo.tsx` | Interactive Mondrian composition demo with Framer Motion. |
| `KineticMondrianLines` | `content/KineticMondrianLines.tsx` | Animated Mondrian line drawing effect. |
| `FloatingBentoGrid` | `content/FloatingBentoGrid.tsx` | Floating/animated bento grid layout. |
| `StripeBentoGrid` | `content/StripeBentoGrid.tsx` | Stripe-inspired bento grid layout. |
| `SolutionCard` | `content/SolutionCard.tsx` | Individual solution/feature card. |

### Mondrian Components

| Component | File | Purpose |
|-----------|------|---------|
| `MondrianClassicComposition` | `mondrian/MondrianClassicComposition.tsx` | Animated Mondrian-style color block composition. Used as hero decoration in practice pages. |
| `MondrianHero` | `mondrian/MondrianHero.tsx` | Hero variant with full Mondrian grid treatment. |
| `BinaryBio` (mondrian) | `mondrian/BinaryBio.tsx` | Duplicate/variant of content BinaryBio with Mondrian styling. |
| `MondrianStats` (mondrian) | `mondrian/MondrianStats.tsx` | Duplicate/variant of content MondrianStats with Mondrian styling. |

### Template Components

| Component | File | Purpose |
|-----------|------|---------|
| `ServiceTemplate` | `templates/ServiceTemplate.tsx` | Reusable service page template. Renders: hero (static or video) -> optional technical innovation section -> features -> process -> considerations -> related services -> CTA. **Does NOT include NavBarV2 or TerminalFooter.** |
| `PracticeTemplate` | `practice/PracticeTemplate.tsx` | Reusable practice area template. Renders: Mondrian hero -> principles -> key considerations (3 cards) -> process grid -> phone strip -> CTA. Uses IntersectionObserver for `.reveal` animations. |

### Service Sub-Components

| Component | File | Purpose |
|-----------|------|---------|
| `ServiceFeature` | `services/ServiceFeature.tsx` | Feature highlight section within service pages. |
| `ServiceProcess` | `services/ServiceProcess.tsx` | Step-by-step process section (gray background). |
| `ServiceConsiderations` | `services/ServiceConsiderations.tsx` | Key considerations/warnings section. |
| `ServiceRelated` | `services/ServiceRelated.tsx` | Related services links section. |

### Contact Components

| Component | File | Purpose |
|-----------|------|---------|
| `V2ContactForm` | `contact/V2ContactForm.tsx` | Multi-step contact form with persona selection. Submits to Supabase. |
| `V2ContactInfo` | `contact/V2ContactInfo.tsx` | Contact information display (address, phone, email). |
| `V2PersonaSelection` | `contact/V2PersonaSelection.tsx` | Persona selection step (Innovator, Investor, Executor). |

### Resources Components

| Component | File | Purpose |
|-----------|------|---------|
| `ResourcesGrid` | `resources/ResourcesGrid.tsx` | Grid display for mixed resource types. |
| `BooksGrid` | `resources/BooksGrid.tsx` | Grid display for books. |
| `PodcastHub` | `resources/PodcastHub.tsx` | Podcast listing/player section. |
| `FAQChat` | `resources/FAQChat.tsx` | Chat-style FAQ interface. |
| `CaseStudyTimeline` | `resources/CaseStudyTimeline.tsx` | Timeline-style case study display. |

### UI Primitives

| Component | File | Purpose |
|-----------|------|---------|
| `MondrianGrid` | `ui/MondrianGrid.tsx` | Reusable Mondrian grid decoration/background. |
| `OpenSesameDoor` | `ui/OpenSesameDoor.tsx` | 3D door-opening reveal animation. |
| `KineticDoor` | `ui/KineticDoor.tsx` | Variant door animation. |
| `ProcessTimeline` | `ui/ProcessTimeline.tsx` | Step-by-step timeline component. |
| `Accordion` | `ui/Accordion.tsx` | Expandable/collapsible sections. |
| `FAQGrid` | `ui/FAQGrid.tsx` | Grid layout for FAQ items. |
| `ComparisonGrid` | `ui/ComparisonGrid.tsx` | Side-by-side comparison layout. |
| `RelatedGrid` | `ui/RelatedGrid.tsx` | Related items grid. |
| `VideoHighlight` | `ui/VideoHighlight.tsx` | Video embed with highlight treatment. |

### Common

| Component | File | Purpose |
|-----------|------|---------|
| `StickyHeading` | `common/StickyHeading.tsx` | Heading that sticks to top on scroll. |

---

## 10. DATA MODEL AND CONTENT ARCHITECTURE

### Static Data Files

Located in `moye-law-web/src/data/practiceAreas/`:

| File | Export | Used By | Shape |
|------|--------|---------|-------|
| `elderLaw.ts` | `elderLawData` | `/practice/elder-law` | `{ title, description, phoneNumber, phoneCta, phoneLabel, ctaTitle, ctaDescription, ctaButtonText, principles[], keyConsiderations[], process[] }` |
| `trustsEstates.ts` | `trustsEstatesData` | `/practice/trusts-estates` | Same shape |
| `realEstate.ts` | `realEstateData` | `/practice/real-estate` | Same shape |
| `emergingTech.ts` | `emergingTechData` | `/practice/emerging-tech` | Same shape |
| `ipLicensing.ts` | `ipLicensingData` | `/practice/ip-licensing` | Same shape |
| `ipAssetProtection.ts` | `ipAssetProtectionData` | `/practice/ip-asset-protection` | Same shape |

### Supabase Tables (queried by resources pages)

| Table | Queried By | Fields Used |
|-------|-----------|-------------|
| `articles` | `resources/page.tsx`, `resources/articles/page.tsx`, `resources/articles/[slug]/page.tsx` | `id`, `title`, `slug`, `excerpt`, `content`, `published_at`, `category`, `author`, `image_url` |
| `podcasts` | `resources/page.tsx`, `resources/podcasts/page.tsx` | Similar structure |
| `case_studies` | `resources/page.tsx`, `resources/case-studies/page.tsx` | Similar structure |
| `books` | `resources/page.tsx`, `books/page.tsx` | Similar structure |
| `faqs` | `resources/faq/page.tsx` | `question`, `answer`, `category` |

### Contact Form Schema

Defined in `moye-law-web/src/lib/supabase/client.ts`:

```typescript
interface ContactSubmission {
    id?: string;
    persona: 'Tech Innovator' | 'Family Steward' | 'Legacy Architect';
    status: 'new' | 'reviewing' | 'archived';
    incentive_requested: boolean;
    contact_data: {
        name: string;
        email: string;
        phone?: string;
    };
    form_data: any;
    metadata: {
        userAgent: string;
        timestamp: string;
        referral?: string;
    };
}
```

### Inline Content Pattern

The majority of pages (especially client-component practice and service pages) have ALL content defined inline in the page.tsx file. This includes:
- Hero titles and descriptions
- Feature arrays with titles, descriptions, and icons
- Process step arrays
- Case study objects
- CTA text and links

This means content changes require code changes. There is no CMS driving content for these pages.

### Fallback/Seed Data

Resources pages include hardcoded fallback arrays that render when Supabase returns empty or is unavailable. Example from `resources/articles/page.tsx`: if the Supabase query returns nothing, a predefined array of mock articles renders instead.

---

## 11. SEO AND METADATA ANALYSIS

### Current State

**Root metadata** (applies to ALL pages without their own):
```typescript
// moye-law-web/src/app/layout.tsx
export const metadata: Metadata = {
  title: "Moye Law Systems | Advanced Legal Architecture",
  description: "The premier firm for the 5th Wave of legal services. Specializing in Estate Planning, IP, and Corporate Structure.",
};
```

### Pages WITH Unique Metadata (7 of 57 pages)

| Page | Metadata Type | Source |
|------|--------------|--------|
| `/practice/elder-law` | `export const metadata` | `elderLawData.title` / `elderLawData.description` |
| `/practice/trusts-estates` | `export const metadata` | `trustsEstatesData` |
| `/practice/ip-licensing` | `export const metadata` | `ipLicensingData` |
| `/practice/ip-asset-protection` | `export const metadata` | `ipAssetProtectionData` |
| `/practice/emerging-tech` | `export const metadata` | `emergingTechData` |
| `/practice/real-estate` | `export const metadata` | `realEstateData` |
| `/resources/articles/[slug]` | `generateMetadata()` | Slug-derived title (NOT from DB) |

### Pages WITHOUT Unique Metadata (50 of 57 pages)

Every other page falls back to the root layout's generic "Moye Law Systems | Advanced Legal Architecture" title. This includes:
- The homepage (`/`)
- All service pages (`/services/*`)
- 16 practice area pages (the client-component ones)
- Contact, Firm, How We Work
- All resources pages except article detail
- All admin pages
- Books, Strategy, V2 Index

### Why Most Pages CAN'T Have Metadata

In Next.js App Router, **only Server Components can export `metadata` or `generateMetadata()`**. The 37 pages marked `"use client"` are architecturally blocked from setting per-page SEO metadata through the standard Next.js mechanism.

### What's Missing

1. **Per-page `<title>` tags**: 50 pages share the same generic title
2. **Per-page `<meta description>`**: 50 pages share the same generic description
3. **Open Graph tags**: No per-page OG title, description, or image
4. **JSON-LD structured data**: No schema.org markup (LawFirm, Attorney, LegalService, FAQPage, etc.)
5. **Canonical URLs**: Not set on any page
6. **Sitemap**: No `sitemap.ts` file in the Next.js app (V1 had `vite-plugin-sitemap`)
7. **robots.txt**: No `robots.ts` file in the Next.js app

### Recommendations

**P0 — Fix metadata for ALL public pages:**
- For Server Component pages: Add `export const metadata` with unique title/description
- For Client Component pages: Either (a) convert to Server Component wrapping a client child, or (b) create a thin server-component wrapper page that exports metadata and renders the client component
- Pattern for (b):
  ```typescript
  // page.tsx (Server Component)
  import { Metadata } from 'next';
  import IntellectualPropertyClient from './IntellectualPropertyClient';

  export const metadata: Metadata = {
    title: 'Intellectual Property Law | Moye Law',
    description: 'Comprehensive IP protection for patents, trademarks, copyrights, and trade secrets.',
  };

  export default function Page() {
    return <IntellectualPropertyClient />;
  }
  ```

**P1 — Add sitemap and robots.txt:**
- Create `moye-law-web/src/app/sitemap.ts` using Next.js `MetadataRoute.Sitemap`
- Create `moye-law-web/src/app/robots.ts` using Next.js `MetadataRoute.Robots`

**P2 — Add JSON-LD structured data:**
- Homepage: `LawFirm` schema
- Practice/Service pages: `LegalService` schema
- Team page (when built): `Attorney` schema
- FAQ page: `FAQPage` schema
- Articles: `Article` schema

---

## 12. KNOWN ISSUES AND TECHNICAL DEBT

### P0 — Critical (blocks production readiness)

| ID | Issue | Location | Impact | Fix |
|----|-------|----------|--------|-----|
| **BUG-001** | 50 of 57 pages have NO unique metadata | All `"use client"` pages | SEO invisible — every page shows same title/description | Convert to server component wrappers (see Section 11) |
| **BUG-002** | Double NavBarV2 + TerminalFooter on `/practice` index | `app/practice/page.tsx` renders its own nav/footer AND `app/practice/layout.tsx` wraps with nav/footer | Duplicate header and footer visible | Remove nav/footer from `practice/page.tsx` (the layout provides it) |
| **BUG-003** | `/services/*` pages have NO navigation or footer | `ServiceTemplate` does not include NavBarV2/TerminalFooter, and there is no `services/layout.tsx` | Users can't navigate away from service pages without using browser back | Create `app/services/layout.tsx` with NavBarV2 + TerminalFooter, or add nav/footer to ServiceTemplate |
| **BUG-004** | Mobile menu not wired in NavBarV2 | `components/layout/NavBarV2.tsx` | Mobile users cannot access navigation | Wire the mobile hamburger menu to show nav links |

### P1 — Important (degrades quality)

| ID | Issue | Location | Impact | Fix |
|----|-------|----------|--------|-----|
| **DEBT-001** | No sitemap.xml or robots.txt in Next.js app | `moye-law-web/src/app/` | Search engines can't discover pages efficiently | Add `sitemap.ts` and `robots.ts` |
| **DEBT-002** | No canonical URLs set | Any page | Potential duplicate content issues | Add canonical to metadata on all pages |
| **DEBT-003** | No JSON-LD structured data | Any page | Reduced rich snippet eligibility in search results | Add schema.org markup |
| **DEBT-004** | `generateMetadata` in `articles/[slug]` uses slug, not real title | `app/resources/articles/[slug]/page.tsx` | Article SEO uses title-cased slug instead of actual article title from Supabase | Fetch article title in generateMetadata |
| **DEBT-005** | Payload CMS dependencies missing from package.json | `moye-law-web/package.json` vs `src/payload.config.ts` | CMS routes (`/cms/*`, `/api/*`) will crash | Either add Payload deps or remove the `(payload)` route group |
| **DEBT-006** | Supabase placeholder fallback masks data issues | `lib/supabase/client.ts` uses `https://placeholder.supabase.co` when env vars missing | App appears to work but serves no real data from Supabase | Require env vars or clearly show a setup-needed state |
| **DEBT-007** | Homepage and many pages don't share nav via layout | `app/page.tsx`, `app/contact/page.tsx`, etc. | If NavBarV2 or TerminalFooter changes, every page must be updated individually | Consider a top-level layout group for public pages with shared chrome |

### P2 — Nice to Have

| ID | Issue | Location | Impact | Fix |
|----|-------|----------|--------|-----|
| **DEBT-008** | Missing routes from V1 (team, research, book detail) | See Section 7 route gap table | Content not available to users or search engines | Build missing pages |
| **DEBT-009** | Duplicate components (BinaryBio, MondrianStats exist in both `content/` and `mondrian/`) | `components/content/` vs `components/mondrian/` | Confusion about which to use, maintenance burden | Consolidate to single source |
| **DEBT-010** | No error boundary for resources Supabase failures | Resource pages | If Supabase is down, pages may crash instead of showing fallback | Add try/catch with explicit fallback rendering |
| **DEBT-011** | `.env` file committed to public repo | Root `.env` | Firebase API keys exposed (should be rotated) | Add `.env` to `.gitignore`, rotate keys |
| **DEBT-012** | next.config.ts is empty | `moye-law-web/next.config.ts` | No image optimization domains, no redirects, no headers configured | Add production config (images, security headers, redirects) |

---

## 13. FIREBASE RETIREMENT PLAN

### Current Firebase Usage (V1 Only)

| Service | Usage | Replacement in V2 |
|---------|-------|-------------------|
| **Firebase Hosting** | Serves V1 Vite `dist/` with SPA rewrite | **Vercel** (already hosting V2) |
| **Firestore** | `contactFormSubmissions` collection (contact form data) | **Supabase** (V2 contact form already writes to Supabase via `V2ContactForm`) |
| **Cloud Functions** | `sendBookIncentive` (sends PDF guide emails on form submit) + `notifyTeamOfNewSubmission` (sends team notification email) | **Next.js API Route** + email service (Resend, Postmark, or Nodemailer via serverless) |
| **Firebase Analytics** | Initialized but Google Analytics (gtag) is the primary tracker | **Keep gtag directly** (no Firebase dependency needed) |
| **Firebase Auth** | Not used | N/A |
| **Cloud Storage** | Referenced in Cloud Functions for PDF ebooks (`ebooks/` bucket path) | **Supabase Storage** or **Vercel Blob** or **S3** |

### Migration Steps

1. **Verify V2 contact form works**: Confirm `V2ContactForm` successfully writes to Supabase
2. **Build email notification API route**: Create `moye-law-web/src/app/api/contact/route.ts` that:
   - Receives form data from V2ContactForm
   - Writes to Supabase (or is triggered by Supabase webhook)
   - Sends client email with book incentive (use Resend or Postmark)
   - Sends team notification email
3. **Migrate PDF ebooks**: Upload to Supabase Storage or Vercel Blob
4. **Add Google Analytics**: Add gtag script to `moye-law-web/src/app/layout.tsx` (or use `@next/third-parties`)
5. **Point moye.law DNS to Vercel**: Update DNS records
6. **Decommission Firebase**: Remove Firebase Hosting deployment, delete Cloud Functions, archive Firestore data

### Firebase Project Details

- **Project ID**: `moyelaw-e3158`
- **Config file**: `.firebaserc` at repo root
- **Hosting config**: `firebase.json` at repo root
- **Functions source**: `functions/` directory

---

## 14. ENVIRONMENT VARIABLES AND SECRETS

### Required for V2 Next.js App

| Variable | Required | Where Used | Description |
|----------|----------|-----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | **Yes** | `lib/supabase/client.ts`, `lib/supabase/server.ts`, `middleware.ts` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | **Yes** | Same as above | Supabase anonymous/public key |

### Optional / Future

| Variable | Required | Where Used | Description |
|----------|----------|-----------|-------------|
| `DATABASE_URL` | No (Payload) | `payload.config.ts` | PostgreSQL connection string for Payload CMS |
| `PAYLOAD_SECRET` | No (Payload) | `payload.config.ts` | Payload encryption secret |
| `S3_*` | No (Payload) | `payload.config.ts` | S3 storage credentials for Payload |

### Security Issue

**WARNING**: The file `.env` at the repo root is committed to the PUBLIC GitHub repository. It contains Firebase API keys (`VITE_FIREBASE_*`). While Firebase client keys are technically safe to expose (they're restricted by Firestore rules), this is bad practice. The keys should be rotated, and `.env` should be added to `.gitignore`.

---

## 15. DEPLOYMENT AND CI/CD

### Current State

| App | Platform | Trigger | Build Command | Output |
|-----|----------|---------|---------------|--------|
| V1 Vite | GitHub Pages | Push to `main` (GitHub Actions) | `npm run build` (root) | `./dist` |
| V1 Vite | Firebase Hosting | Manual `firebase deploy --only hosting` | `npm run build` (root) | `./dist` |
| V2 Next.js | Vercel | Auto-deploy on push to `main` | `next build` (in `moye-law-web/`) | `.next/` |

### Target State

Only the V2 Next.js app should deploy:

- **Platform**: Vercel
- **Root Directory**: Set to `moye-law-web` in Vercel project settings
- **Build Command**: `next build`
- **Framework Preset**: Next.js (auto-detected)
- **Node.js Version**: 18+ (match Functions runtime)
- **Domain**: `moye.law` (custom domain on Vercel)

### CI/CD Changes Needed

1. **Update or remove `.github/workflows/deploy.yml`** — it currently deploys the V1 Vite build to GitHub Pages
2. **Configure Vercel**: Ensure root directory is `moye-law-web`, environment variables are set
3. **Set up preview deployments**: Vercel provides this automatically for PRs
4. **Add build checks**: ESLint and TypeScript checks in CI

---

## 16. PRIORITY ACTION ITEMS FOR LLM AGENT

These are ordered by priority. Each item is scoped to be actionable as a single task.

### P0 — Must Fix Before Production

**TASK 1: Fix metadata/SEO on all pages**
- For each of the 37 `"use client"` page files in `moye-law-web/src/app/`:
  - Rename the current file to `[PageName]Client.tsx`
  - Create a new `page.tsx` that is a Server Component
  - Export `metadata` (or `generateMetadata`) with unique title, description, and OG tags
  - Import and render the client component
- For the 13 Server Component pages without metadata: add `export const metadata`
- **Estimated scope**: 50 files need metadata added

**TASK 2: Create `services/layout.tsx`**
- Create `moye-law-web/src/app/services/layout.tsx`
- Mirror the pattern from `practice/layout.tsx`: NavBarV2 + main + TerminalFooter
- Remove any nav/footer from `services/page.tsx` if present

**TASK 3: Fix double chrome on `/practice` index**
- Edit `moye-law-web/src/app/practice/page.tsx`
- Remove the NavBarV2 and TerminalFooter renders (the layout already provides them)

**TASK 4: Wire mobile navigation in NavBarV2**
- Edit `moye-law-web/src/components/layout/NavBarV2.tsx`
- Connect the hamburger button to a mobile menu panel with all nav links

### P1 — Should Fix Soon

**TASK 5: Add sitemap.ts and robots.ts**
- Create `moye-law-web/src/app/sitemap.ts` listing all public routes with `https://moye.law` hostname
- Create `moye-law-web/src/app/robots.ts` allowing all crawlers, pointing to sitemap

**TASK 6: Add JSON-LD structured data**
- Homepage: `LawFirm` schema with name, address, practiceAreas
- Practice pages: `LegalService` schema
- FAQ page: `FAQPage` schema
- Article pages: `Article` schema

**TASK 7: Create shared public layout**
- Create a route group `(public)` for all non-admin, non-auth pages
- Add a `layout.tsx` with NavBarV2 + TerminalFooter
- Remove individual nav/footer from each page

**TASK 8: Fix article generateMetadata**
- In `moye-law-web/src/app/resources/articles/[slug]/page.tsx`
- Fetch the actual article title and description from Supabase in `generateMetadata` instead of deriving from slug

### P2 — Build Missing Features

**TASK 9: Build team pages**
- Create `/team` route with team listing
- Create `/team/[memberId]` route with individual profiles
- Use Christopher Moye, Penny Moye, Christopher Moye Jr. data from firm page

**TASK 10: Build remaining service pages**
- `/services/elder-law`
- `/services/digital-asset-tech-protection`
- `/services/art-entertainment-law`

**TASK 11: Configure next.config.ts for production**
- Add image optimization domains
- Add security headers
- Add redirects for V1 URL changes (e.g., `/about` -> `/firm`)
- Configure metadata base URL

**TASK 12: Add Google Analytics**
- Add gtag to root layout or use `@next/third-parties/google`
- Track page views on route changes

### P3 — Cleanup

**TASK 13: Resolve Payload CMS**
- Either: Install Payload dependencies and wire CMS properly
- Or: Remove `(payload)` route group and `payload.config.ts` entirely

**TASK 14: Consolidate duplicate components**
- Merge `content/BinaryBio.tsx` and `mondrian/BinaryBio.tsx` into one
- Merge `content/MondrianStats.tsx` and `mondrian/MondrianStats.tsx` into one

**TASK 15: Security cleanup**
- Add `.env` to `.gitignore`
- Rotate exposed Firebase API keys
- Remove `.env` from git history (or accept that Firebase client keys are public)

---

## APPENDIX A: DESIGN SYSTEM CSS TOKENS

The V2 design tokens are defined in `moye-law-web/src/app/globals.css` using Tailwind v4 `@theme`:

```css
@import "tailwindcss";

@theme {
  --color-navy: #0A2342;
  --color-gold: #C99D56;
  --color-red: #8B0000;
  --color-grey: #F3F4F6;
  --color-mondrian-red: #E31C23;
  --color-mondrian-blue: #0055A4;
  --color-mondrian-yellow: #FFD700;
  --font-display: var(--font-cormorant);
  --font-sans: var(--font-inter);
  --font-mono: var(--font-jetbrains);
  --animate-accordion-down: accordion-down 0.2s ease-out;
  --animate-accordion-up: accordion-up 0.2s ease-out;
  --animate-fade-in: fade-in 0.5s ease-out forwards;
}
```

## APPENDIX B: KEY FILE QUICK REFERENCE

| Purpose | File Path (from repo root) |
|---------|---------------------------|
| **Next.js root layout** | `moye-law-web/src/app/layout.tsx` |
| **Homepage** | `moye-law-web/src/app/page.tsx` |
| **Global CSS / design tokens** | `moye-law-web/src/app/globals.css` |
| **Next.js config** | `moye-law-web/next.config.ts` |
| **Package.json (V2)** | `moye-law-web/package.json` |
| **Supabase client** | `moye-law-web/src/lib/supabase/client.ts` |
| **Supabase server** | `moye-law-web/src/lib/supabase/server.ts` |
| **Middleware** | `moye-law-web/src/middleware.ts` |
| **NavBarV2** | `moye-law-web/src/components/layout/NavBarV2.tsx` |
| **TerminalFooter** | `moye-law-web/src/components/layout/TerminalFooter.tsx` |
| **HeroV2** | `moye-law-web/src/components/layout/HeroV2.tsx` |
| **ServiceTemplate** | `moye-law-web/src/components/templates/ServiceTemplate.tsx` |
| **PracticeTemplate** | `moye-law-web/src/components/practice/PracticeTemplate.tsx` |
| **V2ContactForm** | `moye-law-web/src/components/contact/V2ContactForm.tsx` |
| **Practice layout** | `moye-law-web/src/app/practice/layout.tsx` |
| **Practice data (example)** | `moye-law-web/src/data/practiceAreas/elderLaw.ts` |
| **Design rules: colors** | `docs/rules/01-color-system.md` |
| **Design rules: typography** | `docs/rules/02-typography.md` |
| **Design rules: layout** | `docs/rules/03-layout-grid.md` |
| **Design rules: motion** | `docs/rules/04-motion-physics.md` |
| **Design rules: UI states** | `docs/rules/05-ui-states.md` |
| **Design rules: methodology** | `docs/rules/00-methodology.md` |
| **Strategy document** | `docs/v2-strategy/strategy-dump.md` |
| **Design system overview** | `docs/index.md` |
| **Cursor IDE rules** | `.cursor/rules/website-notes.mdc` |
| **Firebase functions** | `functions/index.js` |
| **Firebase config** | `firebase.json` |
| **V1 Vite entry** | `index.html` |
| **V1 App routes** | `src/App.tsx` |
| **V1 Vite config** | `vite.config.ts` |
| **V1 Tailwind config** | `tailwind.config.ts` |
| **GitHub Actions (V1)** | `.github/workflows/deploy.yml` |

## APPENDIX C: DESIGN SYSTEM DOCUMENTATION INDEX

The full design system documentation lives in `docs/` and is viewable via MkDocs (`mkdocs.yml` config at repo root):

| Document | Path | Content |
|----------|------|---------|
| Philosophy overview | `docs/index.md` | Hybrid Mondrian philosophy, dual persona, legal luxury palette, storefront vs factory |
| Methodology | `docs/rules/00-methodology.md` | Kinetic Structuralism workflow: feature extraction, token selection, state simulation |
| Color system | `docs/rules/01-color-system.md` | Complete palette, usage rules, accessibility, Tailwind implementation |
| Typography | `docs/rules/02-typography.md` | Font families, type scale, spacing/tracking, hierarchy patterns |
| Layout/grid | `docs/rules/03-layout-grid.md` | 4px standard, container system, golden ratio, kinetic layouts |
| Motion physics | `docs/rules/04-motion-physics.md` | Timing functions, core animations, reduced motion support |
| UI states | `docs/rules/05-ui-states.md` | State matrix, loading/empty/error/success specifications |
| Design methodology | `docs/rules/design_methodology.md` | "Vibe Coding" critique, structured design phases |
| Strategy blueprint | `docs/v2-strategy/strategy-dump.md` | Intersect & Reveal, navy-duotone imaging, data mesh, quarantine protocol, Fifth Wave strategy, paired services UX |
| Ecosystem architecture | `.agent/rules/Concept-Ecosystem-Architecture.md` | Factory -> Builder -> Endpoint pattern |
| Hybrid-Mondrian spec | `.agent/rules/Strategic Design Spec & System Prompt_ Moye Law Hybrid-Mondrian Identity.md` | Full design specification with system prompt for code generation |

---

*End of document. This file should be kept in sync with the codebase as changes are made.*
