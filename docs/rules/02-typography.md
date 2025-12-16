# The Moye Law V2 Typography System
**Document ID:** RULES-02
**Status:** ACTIVE

## 0. The Philosophy
Our typography reflects the **Dual Nature** of the firm:
1.  **The Architect (Serif):** Traditional, authoritative, elegant. Represents "The Law" and "History".
2.  **The Engineer (Sans/Mono):** Modern, efficient, transparent. Represents "The Machine" and "Data".

---

## 1. Type Families

### A. The Voice of Authority (Display)
**Font:** `Cormorant Garamond`
**Usage:** Headings (`h1` - `h3`), Blockquotes, "Manifesto" text.
**Characteristics:** High contrast, elegant ligatures, "Old World" feel.
**Fallback:** `Georgia`, `serif`.

### B. The Voice of Reality (Body)
**Font:** `Inter`
**Usage:** Body text, UI elements, Navigation, Buttons.
**Characteristics:** High legibility, neutral, "Tech-forward".
**Fallback:** `system-ui`, `sans-serif`.

### C. The Voice of Data (Technical)
**Font:** `JetBrains Mono` (or `Fira Code`)
**Usage:** Data points, Labels (`CLIENT_ID`), Footnotes, "Factory" readouts.
**Characteristics:** Monospaced, coding aesthetic, "Raw Truth".
**Fallback:** `Consolas`, `monospace`.

---

## 2. Type Scale (Fluid)

| Role | Element | Size (Desktop) | Weight | Font Family | Case |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Megaphone** | `h1.hero` | `6rem` (96px) | Medium | Cormorant | Sentence |
| **Headline** | `h1` | `3.75rem` (60px) | Medium | Cormorant | Sentence |
| **Section** | `h2` | `2.25rem` (36px) | Regular | Cormorant | Sentence |
| **Subhead** | `h3` | `1.5rem` (24px) | Bold | Cormorant | Sentence |
| **Lead** | `p.lead` | `1.25rem` (20px) | Regular | Inter | Sentence |
| **Body** | `p` | `1rem` (16px) | Regular | Inter | Sentence |
| **Label** | `span.label` | `0.75rem` (12px) | Bold | JetBrains | **UPPERCASE** |
| **Micro** | `small` | `0.625rem` (10px) | Regular | JetBrains | **UPPERCASE** |

---

## 3. Spacing & Tracking
- **Headings:** `tracking-tight` (-0.02em). We pull letters tighter to create solidity.
- **Body:** `tracking-normal`.
- **Labels (Mono):** `tracking-widest` (0.25em to 0.3em). We expand labels to create "breath" and technical precision.

> [!TIP]
> **The "Label" Rule:** Whenever using `JetBrains Mono` for metadata (dates, authors, IDs), **always** use Uppercase and Wide Tracking. This distinguishes "Data" from "Content".

---

## 4. Hierarchy Patterns
The standard "Article" stack:
1.  **Label:** `DATA_SOURCE: V2_DB` (Mono, Gold)
2.  **Headline:** `Trust & Estate Architecture` (Serif, Navy)
3.  **Lead:** `The new way to manage legacy.` (Sans, Gray-500)
4.  **Divider:** `border-b-4 border-navy`
5.  **Body:** `Content goes here...` (Sans, Navy)
