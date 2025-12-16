# The Moye Law V2 UI States System
**Document ID:** RULES-05
**Status:** ACTIVE

## 0. The Philosophy
A component is not a static image. It is a state machine. We must design for every state in the lifecycle.

---

## 1. The State Matrix

| State | Visual Metaphor | Tokens Used |
| :--- | :--- | :--- |
| **IDLE (Default)** | The "Factory Floor". Clean, ready. | `bg-white` (Canvas), `border-navy` (Structure). |
| **HOVER (Interaction)** | The "Lift". The factory activates. | `transform: translate(-4px, -4px)`, `shadow-kinetic`. |
| **LOADING (Fetch)** | The "Blueprint". Schematic view. | `animate-pulse`, `bg-gray-100` (Skeleton), `text-gray-300`. |
| **EMPTY (Zero)** | The "Empty Desk". Potential space. | `bg-gray-50`, `border-dashed border-gray-300`. |
| **ERROR (Failure)** | The "Red Alert". System halt. | `border-venetian-red`, `bg-red-50`, `text-venetian-red`. |
| **SUCCESS (Complete)** | The "Gold Seal". Validated. | `border-gold`, `bg-gold/10`. |

---

## 2. Detailed State Specifications

### A. The Loading State (Skeleton)
We generally avoid spinning loaders. We use **Skeleton Blocks**.
**Rule:** The skeleton must match the *geometry* of the content it replaces.
- **Header:** `h-10 w-3/4 bg-gray-200`
- **Body:** `h-4 w-full bg-gray-100`
- **Animation:** `animate-pulse` (Gentle breathe).

### B. The Empty State
Never leave a blank space. Tell the user *why* it is empty and *how* to fill it.
**Components:**
1.  **Icon:** `StrokeWidth={1}`, Gray-400, Scale 1.5.
2.  **Message:** "No Cases Found" (H3).
3.  **Action:** "Initialize New Case" (Button).

### C. The Error State
Errors are "System Interruptions". They must be stark.
**Style:**
- **Border:** 4px Solid Venetian Red (`#8B0000`).
- **Background:** White or Red-50.
- **Icon:** Alert Triangle (Red).
- **Text:** Mono font for the error code (`ERR_FETCH_500`).

### D. The Hover State (Kinetic Lift)
See `RULES-04`.
The element physically lifts off the page. The shadow *hardens* to Navy or Gold.
**NO** opacity fades. **NO** color-only shifts. **MOVEMENT** is required.

---

## 3. Interaction Patterns

### The "Click" (Active)
When clicked, the element presses *down*.
- **Transform:** `translate(0px, 0px)` (Returns to origin).
- **Shadow:** `none`.
This provides tactile feedback that the "button was pressed".

### The "Disabled"
- **Opacity:** 50%.
- **Cursor:** `not-allowed`.
- **Border:** Gray-300.
- **No Hover Effects.**
