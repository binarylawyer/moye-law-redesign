# V2 Core Components (Hybrid Mondrian)

These components are the "New Standard" using the V2 design system. They live in `v-2/components/`.

## 1. MondrianGridWrapper (`MondrianGridWrapper.tsx`)
**The Color Injector.**
*   **Purpose:** Wraps clean content sections in a decorative "Busy" grid of Red/Blue/Yellow blocks.
*   **Props:** `intensity` ('low', 'medium', 'high').
*   **Usage:** Use "High" for major transitions (like between Hero and Services). Use "Medium" for grid lists. Avoid "High" for distinct text-heavy reading areas.

## 2. SplitServiceCard ("The Domino") (`SplitServiceCard.tsx`)
**The Dual-Mode Product Card.**
*   **Design:** A vertical split card.
    *   **Top (Service):** White background, Serif type. "The Human Service."
    *   **Bottom (Product):** Grey background, Mono type. "The AI Product."
*   **Usage:** Use for all primary service offerings to show the "Manual + Automated" value prop.

## 3. PracticeCardV2 ("The Brutalist") (`PracticeCardV2.tsx`)
**The Technical Module.**
*   **Design:** White card, 4px Navy border, **8px Hard Navy Shadow** (Brutalist).
*   **Interaction:** Snaps down on hover (Mechanical Feel).
*   **Usage:** Use for listing Practice Areas (Art Law, Corporate, etc).

## 4. HeroV2 ("The Binary Split") (`HeroV2.tsx`)
**The First Impression.**
*   **Design:** Golden Ratio split. Left side is "Promise" (Serif). Right side is "Human" (Portrait).
*   **Interaction:** "Glitch" hover effect on the portrait reveals the "Engineer" schematic.

## 5. NavBarV2 ("System Status Bar") (`NavBarV2.tsx`)
**The Navigation Grid.**
*   **Design:** Fixed top row of the grid. Not floating.
*   **Structure:**
    *   **Brand (Left):** Serif.
    *   **Links (Middle):** Mono.
    *   **Terminal (Right):** "Client Portal" status block.
