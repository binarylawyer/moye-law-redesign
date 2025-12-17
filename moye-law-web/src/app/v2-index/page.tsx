"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, FileText, Activity, Layout, Palette } from 'lucide-react';
import NavBarV2 from "@/components/layout/NavBarV2";
import TerminalFooter from "@/components/layout/TerminalFooter";

interface PageDoc {
    title: string;
    path: string;
    description: string;
    funnelRole: string;
    designSpecs: {
        colors: string;
        typography: string;
        layout: string;
        motion: string;
    };
}

const pages: PageDoc[] = [
    {
        title: "Home / Landing",
        path: "/",
        description: "The main entry point featuring the 'Kinetic Structuralism' grid. It introduces the brand dichotomy (Storefront vs Factory) and utilizes complex Mondrian animations to reveal content.",
        funnelRole: "Brand Awareness & Positioning. Establishes the 'High-Tech + High-Touch' value proposition immediately.",
        designSpecs: {
            colors: "Navy (#0A2342), Gold (#C99D56), White, Grey-50.",
            typography: "Display: Cormorant Garamond. Body: Inter. Code: JetBrains Mono.",
            layout: "Mondrian Grid (12-col). Section 9 Feature Grid. Kinetic Hero.",
            motion: "Intersect & Reveal (Grid lines draw first, content fades in). Parallax Scroll."
        }
    },
    {
        title: "Firm Profile (The Architects)",
        path: "/firm",
        description: "A showcase of the human expertise behind the system. Features a 'Manifesto' section alongside a 'Team Grid' that uses duotone hover effects.",
        funnelRole: "Trust & Authority Building. Humanizes the 'System' by showing the experts running it.",
        designSpecs: {
            colors: "Navy Dominant, Gold Accents, Maroon (#8B0000) for cues.",
            typography: "Heavy use of Cormorant for 'Manifesto' quotes.",
            layout: "Dual-Column Manifesto. 3-Column Team Grid.",
            motion: "Staggered Reveal (Team cards enter sequentially). Duotone Image Filters on Hover."
        }
    },
    {
        title: "Practice Areas (System Capabilities)",
        path: "/practice",
        description: "The service catalog. Uses 'Split Service Cards' to visually demonstrate the two modes of engagement: Custom Strategy (Top/White) vs Automated Products (Bottom/Grey).",
        funnelRole: "Service Selection & Education. Helps users self-segment into 'Besoke' or 'Product' funnels.",
        designSpecs: {
            colors: "White/Grey Split. Navy Borders.",
            typography: "Inter for Services. JetBrains Mono for Products.",
            layout: "Responsive Grid (1-3 cols). Split-Card Component.",
            motion: "Cards slide up with RevealContent. Hover states lift cards (3D effect)."
        }
    },
    {
        title: "Contact / Inquiry Terminal",
        path: "/contact",
        description: "A multi-step, interactive 'Terminal' for intake. It replaces standard forms with a 'Persona Selection' wizard and integrates directly with Supabase.",
        funnelRole: "Conversion. The final step to capture the lead data with high fidelity.",
        designSpecs: {
            colors: "White clean form. Navy inputs.",
            typography: "JetBrains Mono for labels and status. Inter for inputs.",
            layout: "Single-Column Wizard. Progress Steps.",
            motion: "Step transitions (Slide/Fade). Interactive Selection Cards."
        }
    },
    {
        title: "Admin Dashboard",
        path: "/admin",
        description: "The secure backend for managing the Design System and Content. Protected by Supabase Auth.",
        funnelRole: "Internal Operations. Not for public users.",
        designSpecs: {
            colors: "Sidebar: Navy. Content: White.",
            typography: "System Fonts.",
            layout: "Dashboard Sidebar Layout.",
            motion: "Minimal."
        }
    }
];

export default function V2IndexPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <NavBarV2 />

            <div className="pt-32 pb-24 container mx-auto px-6 max-w-5xl">

                <header className="mb-16 border-b-4 border-navy pb-8">
                    <span className="font-mono text-xs text-navy/50 tracking-[0.2em] uppercase mb-4 block">
                        System_Documentation::Index
                    </span>
                    <h1 className="font-display text-5xl md:text-6xl text-navy mb-6">
                        Migration Index (V2 &rarr; Next.js)
                    </h1>
                    <p className="font-sans text-xl text-gray-600 max-w-2xl">
                        This index serves as the "Source of Truth" for the new Next.js architecture.
                        It documents the features, design specifications, and funnel purpose of every active page.
                    </p>
                </header>

                <div className="grid gap-12">
                    {pages.map((page) => (
                        <div key={page.path} className="bg-white border-4 border-navy p-8 shadow-[8px_8px_0px_0px_#0A2342] group hover:shadow-[12px_12px_0px_0px_#C99D56] transition-all duration-300">

                            <div className="flex flex-col md:flex-row justify-between mb-8 border-b-2 border-gray-100 pb-6">
                                <div>
                                    <h2 className="font-display text-3xl text-navy mb-2 group-hover:text-gold transition-colors">
                                        <Link href={page.path} className="flex items-center gap-2">
                                            {page.title} <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform" />
                                        </Link>
                                    </h2>
                                    <code className="font-mono text-sm text-gray-400 bg-gray-100 px-2 py-1 rounded">
                                        {page.path}
                                    </code>
                                </div>
                                <div className="mt-4 md:mt-0">
                                    <span className="inline-block bg-navy text-white text-xs font-mono px-3 py-1 uppercase tracking-wider">
                                        Status: Active
                                    </span>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">

                                {/* CONTEXT COLUMN */}
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="flex items-center font-mono text-xs font-bold text-navy uppercase mb-2">
                                            <FileText className="w-4 h-4 mr-2" /> Description
                                        </h3>
                                        <p className="font-sans text-sm text-gray-600 leading-relaxed">
                                            {page.description}
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="flex items-center font-mono text-xs font-bold text-gold uppercase mb-2">
                                            <Activity className="w-4 h-4 mr-2" /> User Funnel Fit
                                        </h3>
                                        <p className="font-serif italic text-lg text-navy leading-relaxed">
                                            "{page.funnelRole}"
                                        </p>
                                    </div>
                                </div>

                                {/* TECH DOCS COLUMN */}
                                <div className="bg-gray-50 p-6 border-l-4 border-navy space-y-4 font-mono text-xs text-navy/80">
                                    <div>
                                        <strong className="block text-gray-400 mb-1 flex items-center"><Palette className="w-3 h-3 mr-2" /> COLORS</strong>
                                        {page.designSpecs.colors}
                                    </div>
                                    <div>
                                        <strong className="block text-gray-400 mb-1">TYPOGRAPHY</strong>
                                        {page.designSpecs.typography}
                                    </div>
                                    <div>
                                        <strong className="block text-gray-400 mb-1 flex items-center"><Layout className="w-3 h-3 mr-2" /> LAYOUT</strong>
                                        {page.designSpecs.layout}
                                    </div>
                                    <div>
                                        <strong className="block text-gray-400 mb-1">MOTION</strong>
                                        {page.designSpecs.motion}
                                    </div>
                                </div>

                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-100 text-right">
                                <Link href={page.path} className="inline-flex items-center font-mono text-sm text-navy hover:text-gold uppercase font-bold tracking-widest group-hover:translate-x-2 transition-transform">
                                    View Live Page <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </div>

                        </div>
                    ))}
                </div>

            </div>

            <TerminalFooter />
        </div>
    );
}
