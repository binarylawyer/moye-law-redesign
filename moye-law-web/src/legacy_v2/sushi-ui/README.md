# Sushi UI (The Monorepo Library)

**This directory (`v-2/sushi-ui/`) is the "Warehouse".**
It contains the source code for the shared component system that powers the entire Sushi Ecosystem.

## 📂 Structure
*   `components/`: The abstract, theme-aware React components (e.g., `SushiCard.tsx`).
*   `theme/`: The design token definitions (e.g., `primary`, `secondary`) and brand presets (Moye Law vs Sushi Kitchen).

## 🆚 vs. The Design System Page
*   **Sushi UI (`v-2/sushi-ui/`):** The code itself. Import from here to build your app.
*   **Design System Page (`/v2-design-system`):** The "Showroom". A webpage that displays these components for review.

## 🛠 Usage
```typescript
import { SushiCard } from 'v-2/sushi-ui/components/SushiCard';
import { StorefrontTheme } from 'v-2/sushi-ui/theme/themes';

<SushiCard theme={StorefrontTheme} title="..." />
```
