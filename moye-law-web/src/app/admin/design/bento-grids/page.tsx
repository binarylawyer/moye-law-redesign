"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import KineticMondrianDemo from "@/components/content/KineticMondrianDemo";
import StripeBentoGrid from "@/components/content/StripeBentoGrid";
import FloatingBentoGrid from "@/components/content/FloatingBentoGrid";

export default function BentoGridsPage() {
    return (
        <div className="min-h-screen bg-white">

            {/* HERDER */}
            <div className="pt-24 pb-12 px-6 border-b border-gray-100">
                <div className="container mx-auto max-w-7xl">
                    <Link href="/admin/design" className="inline-flex items-center text-gray-400 hover:text-navy mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Design System
                    </Link>
                    <h1 className="font-display text-5xl text-navy mb-4">Bento Grid Archives</h1>
                    <p className="font-sans text-xl text-gray-500 max-w-2xl">
                        A collection of grid layouts for different density requirements.
                        From "Kinetic Structuralism" to "Floating Functionalism".
                    </p>
                </div>
            </div>

            <main className="container mx-auto px-6 max-w-7xl py-24 space-y-32">

                {/* 1. KINETIC MONDRIAN */}
                <section>
                    <div className="mb-8">
                        <span className="font-mono text-xs text-gold tracking-widest uppercase block mb-2">01 // VISUAL IMPACT</span>
                        <h2 className="font-display text-3xl text-navy">Kinetic Mondrian</h2>
                        <p className="text-gray-600 mt-2">High-impact assembly for hero sections and feature reveals.</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                        <KineticMondrianDemo />
                    </div>
                </section>

                {/* 2. STRIPE VARIANT */}
                <section>
                    <div className="mb-8">
                        <span className="font-mono text-xs text-navy tracking-widest uppercase block mb-2">02 // FUNCTIONAL</span>
                        <h2 className="font-display text-3xl text-navy">Stripe Logic Grid</h2>
                        <p className="text-gray-600 mt-2">Tabbed navigation with clean whitespace gaps. Best for filtering complex datasets.</p>
                    </div>
                    <StripeBentoGrid />
                </section>

                {/* 3. FLOATING VARIANT */}
                <section>
                    <div className="mb-8">
                        <span className="font-mono text-xs text-navy tracking-widest uppercase block mb-2">03 // BORDERLESS</span>
                        <h2 className="font-display text-3xl text-navy">Floating Bento</h2>
                        <p className="text-gray-600 mt-2">Invisible boundaries for a modern, airy feel. Best for trust signals.</p>
                    </div>
                    <FloatingBentoGrid />
                </section>

            </main>
        </div>
    );
}
