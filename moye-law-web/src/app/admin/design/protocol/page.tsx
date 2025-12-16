"use client";

import React, { useState } from 'react';
import { Copy, Terminal, Check } from 'lucide-react';

const steps = [
    {
        id: 1,
        title: "Feature Extraction (The PRD)",
        desc: "Transform raw ideas into a high-signal, minimal Product Requirement Document.",
        prompt: `name: product-manager
description: Transform raw MVP ideas or business goals into concise, actionable product requirement documents (PRDs). Output only essential information required for MVP validation and early development.
---
You are an expert Product Manager with a SaaS founder’s mindset, focused on clarity, prioritization, and minimalism. Your goal is to help define the Minimum Viable Product, not the entire roadmap.

## Output Objective
Produce a concise, high-signal MVP PRD (target length: under 1200 words).
Include only what’s essential for validating the core hypothesis.
Never generate exhaustive documentation or deep technical designs unless specifically requested.

## Process Constraints
1. Confirm Understanding (briefly)
2. Scope Discipline
3. Clarity Over Completeness

## Output Format
1. Executive Summary
- Elevator Pitch
- Problem Statement
- Target User
- Proposed Solution
- MVP Success Metric

2. Key Features (Max 3)
- Feature Name
- User Story
- Acceptance Criteria
- Priority (P0/P1)

3. Requirements Overview
- Functional (core flows only)
- Non-Functional (perf, security)
- UX Requirements (brief)

4. Validation Plan
5. Critical Questions Checklist

## Final Deliverable
Output a single markdown file: project-documentation/product-manager-output.md`
    },
    {
        id: 2,
        title: "Design System Integration",
        desc: "Ensure new features align with 'Kinetic Structuralism'.",
        prompt: `You are a Design System Architect for "Moye Law Systems".
Your aesthetic is "Kinetic Structuralism" — a blend of Piet Mondrian's grid logic and Saul Bass's cinematic tension.
Core Tenets:
1. The Grid is an Active Agent. It draws itself.
2. Content is Revealed on Intersection.
3. Dualism: "Factory" (Mono/Raw) vs "Storefront" (Serif/Elegant).
4. Colors: Navy (#0A2342), Venetian Gold (#C99D56), Seal Red (#8B0000).

Task:
Given the PRD features above, define the UI Components needed.
For each component, specify:
- The "Factory" elements (labels, data points, mono font).
- The "Storefront" elements (headings, narrative, serif font).
- The "Motion" trigger (how does it enter?).`
    },
    {
        id: 3,
        title: "UI State Matrix",
        desc: "Define the behavior for all edge cases.",
        prompt: `Create a UI State Matrix for the features defined.
For each screen/component, define:
1. Ideal State (Happy Path)
2. Loading State (Skeleton or "Constructing" animation?)
   * Note: We prefer "System Initializing" text over spinners.
3. Empty State (First use)
   * Must include a clear "Initialize [Action]" CTA.
4. Error State
   * Style as a "System Malfunction" or "Terminal Error" (Red/Mono).`
    },
    {
        id: 4,
        title: "Component Fabrication",
        desc: "Generate the actual React/Tailwind code.",
        prompt: `Act as a Senior React Engineer.
Stack: Next.js 14 (App Router), Tailwind CSS, Framer Motion, Lucide Icons.

Input:
1. PRD (Feature Logic)
2. Design System Rules (Mondrian/Bass)
3. UI State Matrix

Task:
Write the code for [COMPONENT_NAME].
- Use "use client" for interactivity.
- Use 'framer-motion' for entrance animations (draw lines first, then fade in content).
- Use 'lucide-react' for icons.
- Ensure strict type safety with TypeScript.
- Do NOT use arbitrary colors; use 'bg-navy', 'text-gold' etc. from tailwind config.`
    }
];

export default function ProtocolsPage() {
    const [copied, setCopied] = useState<number | null>(null);

    const handleCopy = (id: number, text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(id);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <div className="space-y-12">
            <div>
                <span className="font-mono text-xs text-navy tracking-widest uppercase mb-2 block">Standard Operating Procedures</span>
                <h1 className="font-display text-4xl text-navy mb-6">Generative Protocols</h1>
                <p className="font-sans text-lg text-gray-600 max-w-3xl">
                    The Moye Law interface is built using a strict 4-stage generative process.
                    Use these prompts to expand the system while maintaining architectural integrity.
                </p>
            </div>

            <div className="space-y-16">
                {steps.map((step) => (
                    <div key={step.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t-4 border-navy pt-8">

                        <div className="col-span-1 lg:col-span-4">
                            <div className="text-gold font-mono text-4xl font-bold mb-4">0{step.id}</div>
                            <h3 className="font-display text-2xl text-navy mb-2">{step.title}</h3>
                            <p className="font-sans text-gray-500 mb-6">{step.desc}</p>

                            <div className="p-4 bg-gray-50 border border-gray-200">
                                <h4 className="font-mono text-xs font-bold text-navy mb-2 uppercase">Input Required</h4>
                                <ul className="list-disc list-inside font-mono text-xs text-gray-500 space-y-1">
                                    <li>Concept / Idea</li>
                                    {step.id > 1 && <li>Previous Output</li>}
                                    {step.id > 3 && <li>Coffee</li>}
                                </ul>
                            </div>
                        </div>

                        <div className="col-span-1 lg:col-span-8">
                            <div className="relative group">
                                <div className="absolute -top-3 -right-3">
                                    <button
                                        onClick={() => handleCopy(step.id, step.prompt)}
                                        className="bg-navy text-white p-3 shadow-lg hover:bg-gold transition-colors flex items-center gap-2 font-mono text-xs"
                                    >
                                        {copied === step.id ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                        {copied === step.id ? 'COPIED' : 'COPY_PROMPT'}
                                    </button>
                                </div>

                                <div className="bg-navy p-6 pt-12 overflow-x-auto text-white font-mono text-sm leading-relaxed whitespace-pre-wrap border border-navy shadow-[8px_8px_0px_0px_#C99D56]">
                                    {step.prompt}
                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}
