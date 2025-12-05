# v-2: Hybrid-Mondrian Redesign

This directory contains refined components implementing the **Hybrid-Mondrian** design system before they go live.

## Philosophy

The v-2 redesign embodies the "Binary Lawyer" identity:
- **The Artist** (Cormorant Garamond serif) - Traditional legal expertise
- **The Engineer** (JetBrains Mono monospace) - Technical innovation

## Directory Structure

```
v-2/
├── lib/
│   └── tokens.ts          # Design system tokens (colors, typography, spacing)
├── components/
│   ├── HeroV2.tsx         # Refined hero with Navy grid
│   ├── NavBarV2.tsx       # Mondrian navigation structure  
│   ├── SplitServiceCard.tsx  # Product vs Service layout (SIGNATURE COMPONENT)
│   ├── PracticeCardV2.tsx    # Practice area cards with brutalist shadows
│   └── MondrianLayout.tsx    # Master grid wrapper
└── pages/
    └── (refined page implementations)
```

## Key Design Tokens

### Colors
- **Deep Navy** (#0A2342) - Grid lines (replaces Mondrian's black)
- **Warm Gold** (#C99D56) - CTAs and luxury accents
- **Venetian Red** (#8B0000) - Art law accent (use sparingly)
- **Cool Grey** (#F3F4F6) - Technical/product backgrounds

### Grid Rules
- **4px borders** - The Mondrian standard (never violate)
- **0px border-radius** - Pure rectangles only
- **Golden Ratio** (1:1.618) - For asymmetric layouts

### Typography
- **font-serif** → Cormorant Garamond (emotional, counsel content)
- **font-mono** → JetBrains Mono (technical, product content)
- **font-sans** → Inter (body text, readability bridge)

## Components to Build

### Phase 2: Core Components
- [ ] HeroV2 - Bold Mondrian hero with Navy grid
- [ ] NavBarV2 - Grid-based navigation
- [ ] SplitServiceCard - The signature "Product vs Service" component

### Phase 3: Cards & Layouts
- [ ] PracticeCardV2 - Mondrian practice cards
- [ ] MondrianSection - Reusable section wrapper
- [ ] MondrianLayout - Master page wrapper

## Development Workflow

1. **Build in v-2** - Create and test components here
2. **Review** - Test locally, get feedback
3. **Migrate** - Once approved, move to src/ for production

## Notes

- Tailwind config already updated in main repo (backward compatible)
- All new designs use design tokens from `lib/tokens.ts`
- Components should work standalone for easy testing
