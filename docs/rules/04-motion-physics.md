# The Moye Law V2 Motion System (Kinetic Physics)
**Document ID:** RULES-04
**Status:** EXPERIMENTAL
**Inspiration:** Saul Bass (Title Sequences), Piet Mondrian (Boogie Woogie).

## 0. The Philosophy
Motion in V2 is **Kinetic**, not "Smooth". It should feel like physical objects sliding, locking, and clicking into place. We avoid "washy" fades. Events are **sharp**.

---

## 1. The Physics (Timing Functions)

### A. The "Mechanical Snap" (Default)
Used for hover states, button clicks, and card reveals.
- **Bezier:** `cubic-bezier(0.2, 0.8, 0.2, 1)`
- **Duration:** `300ms` (Fast)

### B. The "Heavy Slide" (Page Transitions)
Used for the "Open Sesame" Door and large panel movements.
- **Bezier:** `cubic-bezier(0.7, 0, 0.3, 1)` (Slow start, fast middle, friction stop)
- **Duration:** `800ms` - `1200ms`

---

## 2. Core Animations

### A. The "Open Sesame" Door (`OpenSesameDoor.tsx`)
A 3D perspective split that reveals content behind a "Solid Wall".
- **Perspective:** `1200px`
- **RotateY:** `-110deg` (Open outward)
- **Origin:** `left center` (Hinge)

### B. The "Mondrian Reveal"
Lines draw themselves before content appears.
1.  **Step 1:** Vertical/Horizontal Lines expand (`height: 0 -> 100%`).
2.  **Step 2:** Background colors fill (`opacity: 0 -> 1`).
3.  **Step 3:** Text slides in (`translateY: 20px -> 0`).

### C. The "Hard Shadow" Hover
Buttons and Cards do not "glow". They **lift**.
- **Rest:** `box-shadow: 0 0 0`
- **Hover:** `transform: translate(-4px, -4px); box-shadow: 4px 4px 0 Navy;`
This creates a physical "pop-up" effect.

---

## 3. Reduced Motion
All animations must respect `prefers-reduced-motion`.
- If `reduced-motion` is true:
    - Doors disappear instantly (opacity).
    - Lines appear instantly.
    - Hovers are color-only changes, no movement.
