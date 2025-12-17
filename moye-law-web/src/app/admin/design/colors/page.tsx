"use client";

import React, { useState } from 'react';

// --- HELPER COMPONENT: COLOR BLOCK ---
const ColorBlock = ({ name, hex, usage, lightText = false }: { name: string, hex: string, usage: string, lightText?: boolean }) => (
    <div className="group">
        <div
            className="h-32 w-full mb-4 border-4 border-navy shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none relative"
            style={{ backgroundColor: hex }}
        >
            <div className={`absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity ${lightText ? 'text-white' : 'text-navy'} font-mono text-xs font-bold`}>
                {hex}
            </div>
        </div>
        <div className="font-mono text-xs font-bold text-navy mb-1">{name}</div>
        <div className="font-mono text-[10px] text-gray-400 uppercase tracking-widest mb-2">{hex}</div>
        <div className="font-sans text-xs text-gray-600 leading-snug border-l-2 border-gold pl-2">
            {usage}
        </div>
    </div>
);

// --- HELPER COMPONENT: DUOTONE IMAGE (Ported from StrategyPage.tsx) ---
const DuotoneImage = ({ src, label, variant = 'navy' }: { src: string, label: string, variant?: 'navy' | 'gold' | 'navy-light' }) => {
    const [isHovered, setIsHovered] = useState(false);

    // THE FINAL TUNED RECIPE (As of User's "I like the new gold" Request):
    // Variant Colors & Logic copied from StrategyPage.tsx

    let baseColor = '#FFFFFF';
    let overlayColor = '#0A2342';
    let overlayOpacity = 0.6;

    if (variant === 'navy') {
        baseColor = '#C99D56';
        overlayColor = '#0A2342';
        overlayOpacity = 0.6;
    } else if (variant === 'gold') {
        baseColor = '#FFFFFF';
        overlayColor = '#C99D56';
        overlayOpacity = 0.6;
    } else if (variant === 'navy-light') {
        baseColor = '#FFFFFF';
        overlayColor = '#6495ED'; // Cornflower Blue
        overlayOpacity = 0.7; // 70% Opacity
    }

    // Dynamic Blend Mode
    const overlayMode = variant === 'navy-light' ? 'multiply' : 'lighten';

    // Dynamic Image Filter (Add Sepia for navy-light warmth)
    const baseFilter = variant === 'navy-light'
        ? 'grayscale(100%) sepia(40%) contrast(1.1)' // Warm base
        : 'grayscale(100%) contrast(1.1)'; // Standard base

    return (
        <div
            className="group relative cursor-crosshair"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* The Container */}
            <div
                className={`relative h-64 overflow-hidden border-4 ${variant.includes('navy') ? 'border-navy' : 'border-gold'} transition-colors duration-300`}
                style={{ backgroundColor: baseColor }}
            >

                {/* The Image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={src}
                    alt={label}
                    className="w-full h-full object-cover transition-all duration-700 ease-out"
                    style={{
                        // Step 1: Kill Color or Add Warmth
                        filter: isHovered ? 'none' : baseFilter,
                        // Step 2: Multiply with Base
                        mixBlendMode: isHovered ? 'normal' : 'multiply',
                        opacity: isHovered ? 1 : 1,
                        transform: isHovered ? 'scale(1.05)' : 'scale(1)'
                    }}
                />

                {/* The Overlay */}
                {!isHovered && (
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            backgroundColor: overlayColor,
                            mixBlendMode: overlayMode as any,
                            opacity: overlayOpacity
                        }}
                    />
                )}

            </div>

            <div className={`mt-2 flex justify-between font-mono text-xs ${variant.includes('navy') ? 'text-navy' : 'text-[#C99D56]'} border-t border-navy/10 pt-2`}>
                <span className="font-bold">{label}</span>
                <span className={`transition-colors ${isHovered ? 'text-gold' : 'text-gray-400'}`}>
                    {isHovered ? 'FILTER::BYPASSED' : 'FILTER::ACTIVE'}
                </span>
            </div>
        </div>
    );
};

export default function ColorSystem() {
    return (
        <div className="space-y-24 pb-24">

            {/* HEADER */}
            <div>
                <h1 className="font-display text-5xl text-navy mb-6">Color System & Filters</h1>
                <p className="font-sans text-xl text-gray-600 max-w-3xl leading-relaxed">
                    The atomic visual language of Moye Law. A restrained palette of authority featuring
                    no bright primaries, strictly enforced duotone imagery, and high-contrast functionality.
                </p>
            </div>

            {/* SECTION 1: CORE PALETTE */}
            <section>
                <div className="flex items-center mb-12">
                    <div className="w-12 h-1 bg-gold mr-4"></div>
                    <div>
                        <h2 className="font-display text-3xl text-navy">01. Core Identity (V2)</h2>
                        <p className="font-mono text-xs text-gray-400 mt-2">THE IMMUTABLE CONSTANTS</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <ColorBlock name="MOYE NAVY" hex="#0A2342" usage="Structural Grid, Typography, Headers" lightText={true} />
                    <ColorBlock name="MOYE GOLD" hex="#C99D56" usage="Action, Emphasis, Keylines" />
                    <ColorBlock name="VENETIAN RED" hex="#8B0000" usage="Art Law, Critical Alerts" lightText={true} />
                    <ColorBlock name="ENGINEERING GRAY" hex="#F3F4F6" usage="Backgrounds, Technical Data" />
                </div>
            </section>

            {/* SECTION 2: MONDRIAN PALETTE */}
            <section>
                <div className="flex items-center mb-12">
                    <div className="w-12 h-1 bg-red-700 mr-4"></div>
                    <div>
                        <h2 className="font-display text-3xl text-navy">02. Mondrian Automata</h2>
                        <p className="font-mono text-xs text-gray-400 mt-2">ARTISTIC & HERITAGE ACCENTS</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <ColorBlock name="MONDRIAN RED" hex="#D6001C" usage="Primary Accent" lightText={true} />
                    <ColorBlock name="MONDRIAN BLUE" hex="#003B98" usage="Secondary Accent" lightText={true} />
                    <ColorBlock name="MONDRIAN YELLOW" hex="#FFD500" usage="Highlights" />
                    <ColorBlock name="LIGHT BLUE" hex="#4D80D4" usage="Supporting Element" lightText={true} />
                    <ColorBlock name="LIGHT YELLOW" hex="#FFEB80" usage="Supporting Element" />
                </div>
            </section>

            {/* SECTION 3: LEGACY PALETTE */}
            <section className="opacity-60">
                <div className="flex items-center mb-12">
                    <div className="w-12 h-1 bg-gray-300 mr-4"></div>
                    <div>
                        <h2 className="font-display text-3xl text-gray-500">03. Legacy / Quarantined</h2>
                        <p className="font-mono text-xs text-gray-300 mt-2">DO NOT USE IN NEW COMPONENTS</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <ColorBlock name="LEGACY BLUE" hex="#4682B4" usage="Old Links (SteelBlue)" lightText={true} />
                    <ColorBlock name="CERULEAN" hex="#4A90E2" usage="Accent Variable" />
                    <ColorBlock name="OCEAN" hex="#0EA5E9" usage="Marketing Gradient" />
                    <ColorBlock name="PASTEL BLUE" hex="#D3E4FD" usage="Background variant" />
                    <ColorBlock name="SOFT GOLD" hex="#F2E3C9" usage="Background variant" />
                </div>
            </section>

            {/* SECTION 4: VISUAL FILTERS */}
            <section className="border-t-4 border-navy pt-24">
                <div className="flex items-center gap-4 mb-6">
                    <div className="bg-navy text-white p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-monitor"><rect width="20" height="14" x="2" y="3" rx="2" /><line x1="8" x2="16" y1="21" y2="21" /><line x1="12" x2="12" y1="17" y2="21" /></svg>
                    </div>
                    <div>
                        <h2 className="font-display text-3xl text-navy">04. Visual Filter Protocols</h2>
                        <p className="font-mono text-xs text-gray-400 mt-2">DUOTONE MAPPING & IMAGE TREATMENTS</p>
                    </div>
                </div>

                <p className="font-sans text-lg text-gray-600 mb-12 max-w-2xl">
                    Photography must not break the system. We resolve the tension between Abstract Graphics and
                    Human Photography by treating photos <em>as</em> graphics. All hero imagery undergoes a strict
                    <strong> Duotone Mapping</strong> logic.
                </p>

                {/* FILTER 1: NAVY (ENGINEERING) */}
                <div className="mb-16">
                    <div className="mb-4 flex items-center gap-2">
                        <div className="w-4 h-4 bg-navy"></div>
                        <span className="font-mono text-xs font-bold text-navy">VARIANT A: ENGINEERING (NAVY MAP)</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <DuotoneImage
                            src="/images/real-estate-3-people-right.jpg"
                            label="FIG 01.1: PORTRAIT [NAVY]"
                            variant="navy"
                        />
                        <DuotoneImage
                            src="/images/real-estate-3-people-right.jpg"
                            label="FIG 01.2: LANDSCAPE [NAVY]"
                            variant="navy"
                        />
                    </div>
                </div>

                {/* FILTER 2: GOLD (LUXURY) */}
                <div className="mb-16">
                    <div className="mb-4 flex items-center gap-2">
                        <div className="w-4 h-4 bg-gold"></div>
                        <span className="font-mono text-xs font-bold text-navy">VARIANT B: LUXURY (GOLD MAP)</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <DuotoneImage
                            src="/images/real-estate-3-people-right.jpg"
                            label="FIG 02.1: PORTRAIT [GOLD]"
                            variant="gold"
                        />
                        <DuotoneImage
                            src="/images/real-estate-3-people-right.jpg"
                            label="FIG 02.2: LANDSCAPE [GOLD]"
                            variant="gold"
                        />
                    </div>
                </div>

                {/* FILTER 3: LIGHT NAVY (CLEAN) */}
                <div className="mb-16">
                    <div className="mb-4 flex items-center gap-2">
                        <div className="w-4 h-4 bg-navy opacity-30"></div>
                        <span className="font-mono text-xs font-bold text-navy">VARIANT C: CORNFLOWER (LIGHT MAP)</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <DuotoneImage
                            src="/images/real-estate-3-people-right.jpg"
                            label="FIG 03.1: PORTRAIT [LIGHT]"
                            variant="navy-light"
                        />
                        <DuotoneImage
                            src="/images/real-estate-3-people-right.jpg"
                            label="FIG 03.2: LANDSCAPE [LIGHT]"
                            variant="navy-light"
                        />
                    </div>
                </div>


            </section>
        </div>
    )
}

