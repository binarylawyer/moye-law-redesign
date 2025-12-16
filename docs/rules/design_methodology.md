# The "Vibe Coding" Design Methodology

**Source**: User Transcript (YouTube: "The Problem with Vibe Coding UI")
**Core Concept**: "Clean Futurism" — Uncluttered, clear, system-first.

## Phase 1: Feature Extraction
*   **Prompt**: `product-manager`
*   **Goal**: Transform raw ideas into a minimized PRD (Max 3 features, 1200 words).
*   **Output**: Executive Summary, Key Features (User Stories), Requirements Overview.

## Phase 2: Design System & Style Guide
*   **Prompt**: "Build a design system based on [Inspiration, e.g., Claude]".
*   **Input**: App Overview + Design Principles.
*   **Output**: Token-based system (Colors, Fonts, Spacing) ready for Tailwind.

## Phase 3: UI States
*   **Prompt**: "Define UI States (Error, Loading, Empty, Data)".
*   **Action**: Go screen-by-screen.
*   **Focus**: How does the system behave when *processing* or *failing*?

## Phase 4: Component Construction (The Factory)
*   **Prompt**: "Generate Screens in Google Antigravity".
*   **Tool**: `antigravity` (Simulated iPhone/Browser).
*   **Context**: Pass the Style Guide + PRD + State Definitions.

## Rules for Moye Law "Kinetic Structuralism"
*   **Grid**: Active agent, not decoration. Lines "construct" the page.
*   **Motion**: "Intersect & Reveal". Content appears when grid lines close.
*   **Tone**: "Factory to Storefront".
    *   *Factory* = Brutalist/Mono/Code.
    *   *Storefront* = Serif/Elegant/Trust.
