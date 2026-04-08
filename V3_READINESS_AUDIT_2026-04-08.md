# Moye Law v3 Deep-Dive Readiness Audit (2026-04-08)

## What this revision adds

This version replaces the earlier high-level memo with:

1. A deeper **design-system conformance analysis** against RULES-00 through RULES-05.
2. A concrete **distance-to-go scorecard** for the current Next.js v2 target.
3. A prioritized **"make it work better with the design system" implementation plan**.
4. A copy-paste **super-prompt addendum** designed to speed v3 launch execution.

---

## 1) Scope and evidence base

### Live surfaces reviewed

- v1: `https://moye.law`
- v2: `https://moye-law-version-2.vercel.app/`

### Code/doc surfaces reviewed

- Architecture baseline and known debt: `ARCHITECTURE.md`
- Design system rules:
  - `docs/rules/00-methodology.md`
  - `docs/rules/01-color-system.md`
  - `docs/rules/02-typography.md`
  - `docs/rules/03-layout-grid.md`
  - `docs/rules/04-motion-physics.md`
  - `docs/rules/05-ui-states.md`
- Strategy and quarantine protocol: `docs/v2-strategy/strategy-dump.md`
- V2 implementation targets:
  - `moye-law-web/src/components/layout/NavBarV2.tsx`
  - `moye-law-web/src/components/layout/TerminalFooter.tsx`
  - `moye-law-web/src/components/content/LegalExhibit.tsx`
  - `moye-law-web/src/components/templates/ServiceTemplate.tsx`
  - `moye-law-web/src/app/page.tsx`
  - `moye-law-web/src/app/practice/page.tsx`
  - `moye-law-web/src/app/practice/layout.tsx`
  - `moye-law-web/src/app/services/page.tsx`
  - `moye-law-web/src/app/contact/page.tsx`
  - `moye-law-web/src/app/globals.css`

### Quantitative repo checks run

- Rounded-corner utility usage in `moye-law-web/src`: **172** hits (conflicts with absolute-zero radius rule intent).
- `border-4` usage in `moye-law-web/src`: **137** hits (strong adoption of structural border motif).
- `prefers-reduced-motion`/equivalent usage in `moye-law-web/src`: **0** hits (motion accessibility gap).
- App routes (`page.tsx`) in Next.js app: **57**.
- Route pages exporting metadata/generateMetadata: **8**.
- `"use client"` pages under app router: **38**.
- `sitemap.ts`/`robots.ts`: **not found**.

---

## 2) Current-state diagnosis: how far are we from stated design-system goals?

## A. Rule-by-rule conformance scorecard

Scoring scale:
- **Green** = largely aligned
- **Yellow** = partially aligned / inconsistent
- **Red** = materially off-target for production

### RULES-00 (Methodology: system-first, state-driven)
- **Status: Yellow/Red**
- Strengths:
  - Strong visual language and reusable component inventory exist.
- Gaps:
  - State-matrix discipline is not consistently encoded at component level.
  - Many pages are still client components without clear server/client split for metadata and reliability.
  - Design process artifacts are not yet enforced in CI/lint (no objective quality gates tied to rule docs).

### RULES-01 (Color tokens and usage discipline)
- **Status: Yellow**
- Strengths:
  - Core color tokens are defined in `globals.css` and widely used (`navy`, `gold`, etc.).
  - `border-4` structural style appears broadly adopted.
- Gaps:
  - Token drift appears in direct hex literals (multiple per-page values and ad hoc shades).
  - Quarantine guidance exists, but language/content tone still leaks terminal/factory framing into public surfaces.

### RULES-02 (Typography hierarchy and role separation)
- **Status: Yellow**
- Strengths:
  - Serif/sans/mono triad is implemented in theme variables.
  - Label-style mono text appears consistently in navigation/footer/system labels.
- Gaps:
  - Copy tone in some areas is still over-technical for client storefront goals.
  - Role hierarchy appears inconsistent across pages (especially legacy and migrated sections).

### RULES-03 (Layout grid, 4px borders, zero radius)
- **Status: Yellow/Red**
- Strengths:
  - Heavy borders and grid-like segmentation are prevalent.
- Gaps:
  - `rounded*` classes are still widespread (172 usages), conflicting with “Absolute Zero” intent.
  - Shared layout application is inconsistent (e.g., route groups where nav/footer are duplicated or missing).

### RULES-04 (Motion mechanics + reduced-motion)
- **Status: Red**
- Strengths:
  - Some mechanical motion motifs are present.
- Gaps:
  - Documented reduced-motion requirement has no detected implementation hooks.
  - Motion system appears stylistic rather than centrally tokenized and enforceable.

### RULES-05 (UI state machine discipline)
- **Status: Yellow/Red**
- Strengths:
  - Some loading patterns exist (`animate-pulse` appears in codebase).
- Gaps:
  - Not all major user-critical surfaces expose clear empty/error/success state patterns.
  - No consistent state contract pattern across service/practice/resource templates.

### Overall design-system distance

**Estimated conformance to stated v2 design-system intent: ~55–65%.**

- Visual identity language: stronger (~70%+).
- Structural consistency (layout/state/accessibility/metadata): weaker (~40–55%).
- Production-grade governance (rule enforcement + launch gates): weak (~30–40%).

---

## 3) Why the site doesn’t yet “work better with the design system”

The main issue is not missing creative direction. The issue is **missing enforcement architecture**.

In practical terms:

1. **The design system exists as documentation + examples, not as hard constraints.**
   - Rules are clear, but there is no reliable guardrail to stop violations from shipping.

2. **Route/layout architecture and design system are decoupled.**
   - Shared chrome is uneven across route groups.
   - Client-heavy route construction blocks metadata and weakens SEO/structure outcomes.

3. **Content and compliance are not codified into publish gates.**
   - Public pages still contain phrases/claims that should fail pre-merge checks.

4. **Parallel code paths increase drift.**
   - `src/`, `v-2/`, and `moye-law-web/` coexist, allowing rule drift and duplicate debt.

---

## 4) Critical compliance + trust blockers still visible

These remain high-priority and should be treated as launch blockers:

1. Named testimonials that appear fabricated/unverified in public-facing components.
2. Wrong office location still present in public pages/footer.
3. Wrong firm naming/copyright line in footer.
4. Misleading framework-version text on a public client-facing surface.
5. Productized automation claims presented as active offerings where implementation status appears ambiguous.

---

## 5) What to do to make the site work better with the design system

## A. Establish enforceable “Design System Contracts” (DSCs)

Create explicit contracts for each high-value surface:

- **Layout Contract:** shared nav/footer requirements by route group.
- **Token Contract:** disallow raw hex in component JSX except in approved token files.
- **Geometry Contract:** no `rounded-*` on public pages unless explicitly whitelisted.
- **Motion Contract:** all animated components must implement reduced-motion fallback.
- **State Contract:** every data surface must implement at least loading/empty/error/success states.
- **Copy/Compliance Contract:** banned phrases + required firm naming patterns.

Implement via lint rules + grep checks + CI fail conditions.

## B. Canonicalize component ownership

- Declare `moye-law-web/src/components/*` as canonical.
- Freeze legacy duplicates under `legacy_v2` and mark deprecated.
- Consolidate duplicate component names (e.g., `BinaryBio`, `MondrianStats`) to one source of truth.

## C. Repair route architecture to mirror visual architecture

- Build a public route group layout that applies shared chrome consistently.
- Remove duplicated nav/footer on routes where nested layout already provides them.
- Add missing services layout wrapper to maintain structural continuity.

## D. Move from “visual parity” to “interaction parity”

- Implement state-driven patterns from RULES-05 as reusable primitives.
- Add reduced-motion support globally.
- Normalize hover/active interactions to mechanical-lift semantics where intended.

## E. Make content strategy a first-class design-system input

- Rewrite over-automated copy to consultation-first language where systems are not yet live.
- Keep storefront voice: sophisticated legal counsel, not internal factory jargon.
- Add testimonial support/disclaimer policy and enforce it.

---

## 6) Prioritized execution plan (10-day high-intensity plan)

## Phase 0 (Day 1): Launch blockers only

1. Compliance patch set (testimonials/address/copyright/version/capability claims).
2. Remove or quarantine public strings that violate naming and factual-support posture.
3. Add temporary compliance CI checks (regex-based) to prevent regression.

**Outcome:** publish-safe legal surface.

## Phase 1 (Days 2–3): Architecture integrity

1. Add route-group public layout and normalize shared chrome.
2. Fix duplicate/missing nav-footer behavior.
3. Implement `sitemap.ts` + `robots.ts`.
4. Create metadata wrappers for client pages to restore per-route SEO.

**Outcome:** predictable UX frame + crawlability restored.

## Phase 2 (Days 4–6): Design system enforcement

1. Add token lints (no ad hoc hex in page/component files).
2. Add rounded-corner guardrail for public surfaces.
3. Introduce `StatePanel` primitives (Loading/Empty/Error/Success).
4. Add reduced-motion utilities and wire to animated components.

**Outcome:** style guide becomes enforceable behavior.

## Phase 3 (Days 7–10): Consolidation and velocity

1. Retire duplicate legacy component paths from active import graph.
2. Create “v3-ready” templates for practice/service/resource pages.
3. Add visual regression and route smoke tests for top 20 pages.
4. Final DNS readiness checklist + dry run.

**Outcome:** faster iteration and lower regression risk.

---

## 7) “How far are we from v2 stated goals?” (explicit answer)

If the v2 goals are interpreted as:
- strong Kinetic Structuralism identity,
- coherent storefront/factory separation,
- robust SSR discoverability,
- state-driven, token-disciplined, production-ready UI,

then the current implementation is **meaningfully short of completion**.

### Practical estimate

- **Design language presence:** ~70%.
- **Design-system discipline/enforcement:** ~45%.
- **Production quality (SEO + architecture + compliance):** ~40–50%.
- **Overall readiness for safe v3 cutover:** **~50–60%**.

This is not a teardown; it is a tractable gap. Most missing work is integration/governance, not full greenfield rebuild.

---

## 8) Super-prompt additions to launch v3 faster

Below is an addendum you can append to the project super prompt to convert principles into executable operating constraints.

### Suggested addendum: “V3 Delivery Acceleration Protocol”

1. **Definition of Done Gate (hard fail):**
   - A change is not done unless it passes:
     - compliance copy checks,
     - per-route metadata checks,
     - layout integrity checks,
     - state coverage checks,
     - reduced-motion checks.

2. **Single Canonical Surface Rule:**
   - All production changes must target `moye-law-web/` only.
   - `src/` and `v-2/` are reference-only unless explicitly reactivated.

3. **No-Drift Import Rule:**
   - New UI code may not import from legacy/duplicate component paths.
   - If duplicate component names exist, pick one canonical owner and deprecate the other immediately.

4. **Compliance-First Copy Rule (NY RPC aware):**
   - Any claim implying automation, outcomes, or testimonials must be verifiable and currently operational, or marked in-development / consultation-only.
   - Firm naming must always be exactly “Moye Law, PC” on client-facing surfaces.

5. **Design Token Rule:**
   - No ad hoc color hex values in page/components outside token files.
   - No rounded corners on public pages unless specifically exempted in an allowlist.

6. **State Machine Rule:**
   - Any component showing remote or variable data must implement loading, empty, error, and success states before merge.

7. **Route Architecture Rule:**
   - Public route groups must inherit shared chrome from layout; page-level duplication of nav/footer is prohibited.

8. **SEO/Discovery Rule:**
   - Every public route must have unique metadata.
   - `sitemap.ts` and `robots.ts` are mandatory artifacts.

9. **Accessibility Rule:**
   - Motion must respect reduced-motion preferences.
   - Contrast and interaction states must meet WCAG AA.

10. **Execution Mode Rule (for agents):**
    - Each task response must include:
      - objective,
      - files changed,
      - tests/checks run,
      - launch risk if deferred,
      - rollback plan if high-risk.

11. **Sprint Cadence Rule:**
    - Daily checkpoint must report:
      - launch blockers remaining,
      - route count compliant vs non-compliant,
      - unresolved compliance strings,
      - open architecture defects by severity.

---

## 9) Immediate next actions (recommended)

1. Convert this audit into a tracked issue set:
   - `P0-COMPLIANCE`, `P0-ARCH`, `P1-DESIGN-ENFORCEMENT`, `P1-ACCESSIBILITY`, `P1-SEO`.
2. Ship the Day-1 compliance patch as one PR.
3. Ship layout + metadata + sitemap/robots as second PR.
4. Ship token/state/motion enforcement as third PR.
5. Run a final launch readiness review against the new super-prompt acceleration gates.

---

## Bottom line

The project is in a strong conceptual position and a mid-maturity execution position. The shortest path to v3 launch is not more aesthetic experimentation; it is converting the existing design doctrine into enforceable engineering contracts and merge gates.
