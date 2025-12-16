# The Moye Law V2 Color System
**Document ID:** RULES-01
**Status:** ACTIVE
**Inheritance:** V1 (Hybrid), Mondrian (Golden Age)

## 0. The Philosophy
The V2 Color System ("Kinetic Structuralism") is not merely aesthetic but functional. Colors denote **mode of operation**:
- **Navy** represents Structure, Authority, and the "Factory" (The Law).
- **Gold** represents Value, Outcome, and "Storefront" (The Client).
- **Mondrian Primaries (Red/Blue/Yellow)** represent **Motion** and **Art** (The Human Element).

---

## 1. The Master Palette (V2 Core)
These are the immutable constants of the brand identity.

| Token Name | Hex Code | Purpose | Context |
| :--- | :--- | :--- | :--- |
| **MOYE NAVY** | `#0A2342` | **Structure** | Primary headers, borders, footer, "Factory" backgrounds. |
| **MOYE GOLD** | `#C99D56` | **Value** | Keylines, Action Buttons (Secondary), Emphasis text. |
| **VENETIAN RED** | `#8B0000` | **Alert** | Critical notifications, "Art Law" specific branding, Errors. |
| **ENGINEERING GRAY** | `#F3F4F6` | **Substrate** | Technical backgrounds, Form inputs, "Paper" surfaces. |
| **CANVAS WHITE** | `#FFFFFF` | **Clarity** | Content containers, Reading surfaces. |

### Usage Rules
> [!IMPORTANT]
> **Navy** is the dominant force. **Gold** determines the path.
- **Never** use Gold for large backgrounds (it fatigues the eye).
- **Always** use Navy for structural borders (`border-4`).
- **Use** Venetian Red sparingly—it demands immediate attention.

---

## 2. The Mondrian Automata Palette (Artistic Layer)
Used for the "Kinetic" layer—animations, transitions, and "MondrianGrid" decorative elements. These colors are derived directly from Piet Mondrian's later works (Broadway Boogie Woogie).

| Token Name | Hex Code | Purpose |
| :--- | :--- | :--- |
| **MONDRIAN RED** | `#D6001C` | Primary Focus, The "Heartbeat" of the grid. |
| **MONDRIAN BLUE** | `#003B98` | Deep Logic, Stability blocks. |
| **MONDRIAN YELLOW** | `#FFD500` | Energy, "Traffic Lights", Motion triggers. |
| **LIGHT BLUE** | `#4D80D4` | Transitional state, hover effects for Blue. |
| **LIGHT YELLOW** | `#FFEB80` | Transitional state, hover effects for Yellow. |

### Kinetic Rules
- **Motion:** Mondrian colors are allowed to *move* (slide, reveal). Core colors (Navy) are static.
- **Overlap:** Mondrian colors may overlap Core colors, representing "Art breaking through Law".

---

## 3. Legacy & Extended (Quarantined)
These colors exist in the codebase but are restricted to specific legacy contexts or subtle UI nuances.

| Token Name | Hex Code | Status | Notes |
| :--- | :--- | :--- | :--- |
| **LEGACY BLUE** | `#4682B4` | **Deprecated** | Old link color. Replace with Navy or Gold. |
| **CERULEAN** | `#4A90E2` | **Restricted** | Used only in specific "Tech" illustrations. |
| **OCEAN** | `#0EA5E9` | **Restricted** | Gradient maps only. |
| **PASTEL BLUE** | `#D3E4FD` | **Utility** | Subtle alerts/info backgrounds. |
| **SOFT GOLD** | `#F2E3C9` | **Utility** | Warning backgrounds. |

---

## 4. Accessibility & Contrast
All text/background combinations must meet **WCAG AA** standards.

- **ON NAVY:** White, Gold (Large Text Only).
- **ON WHITE:** Navy, Venetian Red.
- **ON GOLD:** Navy Only. (Never White text on Gold).
- **ON RED:** White Only.

## 5. Implementation (Tailwind)
The system is codified in `tailwind.config.ts`.
```typescript
colors: {
  'mondrian': {
    'navy': '#0A2342',
    'gold': '#C99D56',
    'red': '#8B0000', // Venetian
  },
  // Authentic Extensions
  'art': {
    'red': '#D6001C',
    'blue': '#003B98',
    'yellow': '#FFD500'
  }
}
```
**Note:** `mondrian-red` in CSS classes (`bg-red-600`) often maps to Tailwind's default Palette in legacy code. **V2 Components must use specific hex codes or custom config tokens.**
