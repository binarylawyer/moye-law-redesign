# The Moye Law V2 Methodology: Kinetic Structuralism
**Document ID:** RULES-00
**Status:** ACTIVE
**Philosophy:** "Clean Futurism" / Token-Driven / Prompt-First

## 0. The Manifesto
We do not "vibe code". We build **systems**.
Every UI decision is the result of a rigorous, state-driven process. We define the **Problem**, extract the **Features**, build the **System**, and then simulate the **States**.

---

## 1. The Design Workflow (Prompt-Driven)

### Phase 1: Feature Extraction
Before a pixel is placed, we must know the **states**.
- **Input:** User Goal ("I want a contact form").
- **Output:** Feature List & State Matrix.
    - *What happens when the field is empty?*
    - *What happens when the API fails?*
    - *What happens during the 300ms loading latency?*

### Phase 2: Token Selection
We do not pick colors. We pick **Tokens**.
- **Incorrect:** "Make the error red."
- **Correct:** "Apply `Token.Alert.Critical` (Venetian Red) to this state."

### Phase 3: State Simulation
We design for the "Unhappy Paths" first.
1.  **Zero State:** The component has no data. (e.g., Empty Inbox).
2.  **Loading State:** The component is fetching. (Skeleton Screens).
3.  **Partial State:** The component has 1 item.
4.  **Full State:** The component has 1000 items (Pagination/Overflow).
5.  **Error State:** The component failed.

---

## 2. The Core Tenants

### A. "The Grid is the Hero"
Content must respect the 12-column grid. Borders are thick (4px) and absolute.
**Radius:** 0px. Always.

### B. "Motion is Mechanics"
Things do not fade. They **slide**, **lock**, and **snap**.
See `RULES-04` for physics.

### C. "Data is Beautiful"
We do not hide complexity; we structure it. Use `JetBrains Mono` to display metadata, IDs, and statuses as if they were factory readouts.

---

## 3. How to Use These Rules
When creating a new component (e.g., `ClientDashboard.tsx`):
1.  Consult `RULES-05` (UI States) to determine the layout for Loading/Error.
2.  Consult `RULES-02` (Typography) for hierarchy (Label -> H1 -> P).
3.  Consult `RULES-01` (Colors) for valid tokens.
4.  Execute.
