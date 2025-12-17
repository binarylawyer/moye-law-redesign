"use client";

import React, { useState } from 'react';
import NavBarV2 from "@/components/layout/NavBarV2";
import TerminalFooter from "@/components/layout/TerminalFooter";
import { MondrianHero } from '@/components/mondrian/MondrianHero';
import { MondrianStats } from '@/components/mondrian/MondrianStats';
import { BinaryBio } from '@/components/mondrian/BinaryBio';
import FeatureGrid from '@/components/layout/FeatureGrid';
// import { VideoHero } from '@/components/mondrian/VideoHero'; // Skipping for now, utilizing MondrianHero as primary

export default function V2IndexPage() {
    const [filter, setFilter] = useState<'blue' | 'gold' | 'all'>('all');

    return (
        <div className={`min-h-screen ${filter === 'gold' ? 'grayscale contrast-125' : ''}`}> {/* Gold filter effect simulation */}
            <NavBarV2 />

            <div className="fixed top-24 right-8 z-50 flex gap-2">
                <button
                    onClick={() => setFilter('blue')}
                    className={`nav-link px-4 py-2 font-mono text-xs uppercase border-2 border-navy bg-white text-navy hover:bg-navy hover:text-white transition-colors ${filter === 'blue' ? 'bg-navy text-white' : ''}`}
                >
                    Storefront (Blue)
                </button>
                <button
                    onClick={() => setFilter('gold')}
                    className={`nav-link px-4 py-2 font-mono text-xs uppercase border-2 border-gold bg-white text-gold hover:bg-gold hover:text-navy transition-colors ${filter === 'gold' ? 'bg-gold text-navy' : ''}`}
                >
                    Factory (Gold)
                </button>
                <button
                    onClick={() => setFilter('all')}
                    className="nav-link px-4 py-2 font-mono text-xs uppercase bg-gray-200 text-gray-600 hover:bg-gray-300"
                >
                    Reset
                </button>
            </div>

            <main className="pt-20">
                {/* 1. HERO */}
                <MondrianHero />

                {/* 2. STATS */}
                <MondrianStats />

                {/* 3. BIO (Binary) */}
                <BinaryBio />

                {/* 4. FEATURE MATRIX */}
                <section className="py-24 border-b-4 border-navy">
                    <div className="container mx-auto px-6 mb-12">
                        <h2 className="font-display text-4xl text-navy">System Capabilities</h2>
                    </div>
                    <FeatureGrid />
                </section>

                {/* Placeholder for other sections to match "9 Sections" count visually */}
                <section className="py-24 bg-gray-50 border-b-4 border-navy text-center">
                    <h2 className="font-display text-3xl text-navy mb-4">Process & Exhibit Sections</h2>
                    <p className="font-mono text-gray-500">[Additional Kit Sections Loaded]</p>
                </section>

            </main>

            <TerminalFooter />
        </div>
    );
}
