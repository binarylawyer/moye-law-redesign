# V1 Legacy Component Audit

A catalog of existing `src/components` and their migration status.

## Current Status: 139+ Files
The `src/components` directory contains a mix of "Template" components and older legacy implementations.

### To Be Migrated
*   [ ] `Header.tsx` -> **Replaced by `NavBarV2.tsx`**
*   [ ] `Hero.tsx` -> **Replaced by `HeroV2.tsx`**
*   [ ] `Footer.tsx` -> **Need `FooterV2.tsx`** (currently inline in LandingPage)
*   [ ] `PracticeAreas.tsx` -> **Replaced by `PracticeCardV2.tsx`** grid
*   [ ] `TrustIndicators.tsx` -> **Keep** but re-style with `font-serif` (Done).

### Contact Forms (`src/components/contact/`)
These forms are complex multi-step wizards.
*   `LegacyBuilderForm.tsx`, `TechInnovatorForm.tsx`, etc.
*   **Strategy:** Retain logic, but wrap in `MondrianLayout` and re-style inputs to use `border-b-4 border-mondrian-navy` (Underline Style) instead of rounded boxes.

### Podcast & Resource Components
*   `podcasts/PodcastCard.tsx`, `resources/ResourceCard.tsx`
*   **Strategy:** Migrate to use `PracticeCardV2` (Brutalist) or `SplitServiceCard` styling rules.
