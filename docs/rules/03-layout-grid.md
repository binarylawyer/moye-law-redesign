# The Moye Law V2 Layout System (Mondrian Grid)
**Document ID:** RULES-03
**Status:** ACTIVE

## 0. The Philosophy
The application is not a "page"; it is a **Canvas**. We divide the canvas using the **Rule of Thirds** and **Golden Ratio**, defined by heavy structural borders.
**"The Grid is the Hero."**

---

## 1. The Structure (The 4px Standard)
The defining visual trait of V2 is the **4px Border**.
- **Width:** `4px`
- **Color:** `Navy #0A2342` (Structure) or `Black #000000` (Art).
- **Radius:** `0px` (Absolute Zero). **NO ROUNDED CORNERS.**

> [!WARNING]
> **Zero Tolerance for Radius:** We do not use `rounded-md` or `rounded-lg`. Everything is a box.

---

## 2. The Container System

### A. The Page Wrapper
Every V2 page is wrapped in `V2PageWrapper`.
- `margin-top: 5rem` (80px) to clear the Fixed NavBar.
- `bg-gray-50` (Engineering Gray) to distinguish the "App" from the "Browser".

### B. The Split Screen (Golden Ratio)
Common pattern for Landing & Service pages.
- **Desktop:** `grid-cols-12`
- **Left (Content):** `col-span-8` (66%)
- **Right (Art/Nav):** `col-span-4` (33%)

### C. The Sushi Card (Split Card)
The standard unit of content.
- **Top/Left:** Image or Icon (Visual).
- **Bottom/Right:** Text and Action to the edges.
- **Hover:** Border color changes from Gray to Navy. Shadow becomes hard (`box-shadow: 4px 4px 0 Navy`).

---

## 3. Kinetic Layouts (Mondrian)
When displaying "Art" or "Showcase" sections, we break the standard grid.

### The "Drop" Rule
Elements do not just "fade in". They **drop** or **slide** into place, mimicking mechanical assembly.
- **CSS:** `transform: translateY(-20px) -> 0`
- **Timing:** `0.5s cubic-bezier(0.2, 0.8, 0.2, 1)` (Mechanical Ease).

### The "Overlap" Rule
Color blocks (`mondrian-red`, `mondrian-yellow`) are allowed to overlap borders to create depth (`z-index: 10`).

---

## 4. The Terminal (Footer/Input)
The Footer is treated as a "Terminal" readout.
- **Font:** `JetBrains Mono`
- **Background:** `Navy`
- **Text:** `White`
- **Layout:** Dense, data-heavy, grid-aligned.
