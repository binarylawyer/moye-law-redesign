"use client";

import React from 'react';
import { MondrianGrid, RevealContent } from '@/components/ui/MondrianGrid';

// --- HELPER COMPONENTS ---

const ColorBlock = ({ name, hex, usage }: { name: string, hex: string, usage: string }) => (
    <div className="group">
        <div
            className="h-32 w-full mb-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none"
            style={{ backgroundColor: hex }}
        ></div>
        <div className="font-mono text-xs font-bold text-navy mb-1">{name}</div>
        <div className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-2">{hex}</div>
        <div className="font-sans text-xs text-gray-600 leading-snug border-l-2 border-gold pl-2">
            {usage}
        </div>
    </div>
);

const TypeSpecimen = ({ role, font, weight, size, usage, sample }: { role: string, font: string, weight: string, size: string, usage: string, sample: string }) => (
    <div className="border-b border-gray-200 py-8 first:pt-0">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
                <div className="font-mono text-xs text-gold uppercase tracking-widest mb-2">{role}</div>
                <div className="font-bold text-navy text-sm mb-1">{font}</div>
                <div className="text-xs text-gray-400">{weight} • {size}</div>
            </div>
            <div className="md:col-span-9">
                <div className={`text-navy mb-4 ${font.includes('Cormorant') ? 'font-serif' : font.includes('JetBrains') ? 'font-mono' : 'font-sans'}`} style={{ fontSize: size }}>
                    {sample}
                </div>
                <div className="font-mono text-[10px] text-gray-500 bg-gray-50 p-2 inline-block">
                    USAGE: {usage}
                </div>
            </div>
        </div>
    </div>
);

// --- MAIN PAGE ---

export default function DesignFoundationsPage() {
    return (
        <div className="min-h-screen bg-white">

            {/* HEADER */}
            <div className="relative pt-32 pb-20 px-6 border-b-4 border-navy overflow-hidden">
                <MondrianGrid delay={0.2} />
                <div className="container mx-auto max-w-7xl relative z-10">
                    <RevealContent delay={0.4}>
                        <span className="font-mono text-gold text-xs tracking-[0.3em] uppercase block mb-4">Design System v2.1</span>
                        <h1 className="font-display text-6xl text-navy leading-none">Atomic Foundations.</h1>
                        <p className="font-sans text-xl text-gray-600 mt-6 max-w-2xl">
                            The primitive tokens that construct the Moye Law visual language. Immutable, atomic, and universally applied.
                        </p>
                    </RevealContent>
                </div>
            </div>

            <main className="container mx-auto px-6 max-w-7xl py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* NAVIGATION / TOC (Sticky) */}
                    <div className="lg:col-span-3">
                        <div className="sticky top-32">
                            <h3 className="font-mono text-xs font-bold text-navy mb-6 uppercase border-b-2 border-gold pb-2 inline-block">Index</h3>
                            <ul className="space-y-4 font-mono text-sm text-gray-500">
                                <li><a href="#colors" className="hover:text-navy transition-colors">01. Master Palette</a></li>
                                <li><a href="#typography" className="hover:text-navy transition-colors">02. Typography</a></li>
                                <li><a href="#legacy" className="hover:text-navy transition-colors">03. Legacy Audit</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* CONTENT */}
                    <div className="lg:col-span-9">

                        {/* SECTION 1: COLOR PALETTE */}
                        <section id="colors" className="mb-32">
                            <RevealContent delay={0.6}>
                                <div className="flex items-center mb-12">
                                    <div className="w-12 h-1 bg-gold mr-4"></div>
                                    <div>
                                        <h2 className="font-display text-3xl text-navy">The Master Color Index</h2>
                                        <p className="font-mono text-xs text-gray-400 mt-2">COMPREHENSIVE AUDIT OF ALL SYSTEM COLORS</p>
                                    </div>
                                </div>

                                {/* 1.1 CORE BRAND IDENTITY (V2) */}
                                <h3 className="font-mono text-sm font-bold text-navy mb-6 border-b border-gray-200 pb-2">1. CORE IDENTITY (V2 SYSTEM)</h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                                    <ColorBlock name="MOYE NAVY" hex="#0A2342" usage="Structural Grid, Typography, Headers" />
                                    <ColorBlock name="MOYE GOLD" hex="#C99D56" usage="Action, Emphasis, Keylines" />
                                    <ColorBlock name="VENETIAN RED" hex="#8B0000" usage="Art Law, Critical Alerts" />
                                    <ColorBlock name="ENGINEERING GRAY" hex="#F3F4F6" usage="Backgrounds, Technical Data" />
                                </div>
                            </RevealContent>

                            {/* 1.2 MONDRIAN AUTHENTIC (LEGACY/ARTISTIC) */}
                            <RevealContent delay={0.7}>
                                <div className="flex justify-between items-end mb-6 border-b border-gray-200 pb-2">
                                    <h3 className="font-mono text-sm font-bold text-navy">2. MONDRIAN AUTOMATA (AUTHENTIC)</h3>
                                    <span className="font-mono text-[10px] text-red-600 bg-red-50 px-2 py-1">SOURCE: src/styles/mondrian.css</span>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
                                    <ColorBlock name="MONDRIAN RED" hex="#D6001C" usage="Primary Accent" />
                                    <ColorBlock name="MONDRIAN BLUE" hex="#003B98" usage="Secondary Accent" />
                                    <ColorBlock name="MONDRIAN YELLOW" hex="#FFD500" usage="Highlights" />
                                    <ColorBlock name="LIGHT BLUE" hex="#4D80D4" usage="Supporting Element" />
                                    <ColorBlock name="LIGHT YELLOW" hex="#FFEB80" usage="Supporting Element" />
                                </div>
                            </RevealContent>

                            {/* 1.3 EXTENDED & LEGACY (QUARANTINED) */}
                            <RevealContent delay={0.8}>
                                <div className="flex justify-between items-end mb-6 border-b border-gray-200 pb-2">
                                    <h3 className="font-mono text-sm font-bold text-gray-400">3. EXTENDED / LEGACY (QUARANTINED)</h3>
                                    <span className="font-mono text-[10px] text-gray-400">SOURCE: src/index.css</span>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 opacity-75">
                                    <ColorBlock name="LEGACY BLUE" hex="#4682B4" usage="Old Links (SteelBlue)" />
                                    <ColorBlock name="CERULEAN" hex="#4A90E2" usage="Accent Variable" />
                                    <ColorBlock name="OCEAN" hex="#0EA5E9" usage="Marketing Gradient" />
                                    <ColorBlock name="PASTEL BLUE" hex="#D3E4FD" usage="Background variant" />
                                    <ColorBlock name="SOFT GOLD" hex="#F2E3C9" usage="Background variant" />
                                </div>
                            </RevealContent>
                        </section>

                        {/* SECTION 2: TYPOGRAPHY */}
                        <section id="typography" className="mb-32">
                            <RevealContent delay={0.9}>
                                <div className="flex items-center mb-12">
                                    <div className="w-12 h-1 bg-gold mr-4"></div>
                                    <div>
                                        <h2 className="font-display text-3xl text-navy">Typography Hierarchy</h2>
                                        <p className="font-mono text-xs text-gray-400 mt-2">DUAL-NATURE TYPE SYSTEM</p>
                                    </div>
                                </div>

                                <TypeSpecimen
                                    role="Display / Hero"
                                    font="Cormorant Garamond"
                                    weight="Medium (500)"
                                    size="60px"
                                    usage="Page Titles, Manifestos. The voice of 'The Architect'."
                                    sample="The Architecture of Law."
                                />
                                <TypeSpecimen
                                    role="Section Headers"
                                    font="Cormorant Garamond"
                                    weight="Regular (400)"
                                    size="36px"
                                    usage="H2 Headers. Elegant and authoritative."
                                    sample="Estate Planning & Digital Assets"
                                />
                                <TypeSpecimen
                                    role="Body Copy"
                                    font="Inter"
                                    weight="Regular (400)"
                                    size="18px"
                                    usage="Standard reading text. Neutral and legible."
                                    sample="We do not view the law as a series of documents, but as a rigid architectural framework that holds your legacy together."
                                />
                                <TypeSpecimen
                                    role="Technical Data"
                                    font="JetBrains Mono"
                                    weight="Regular (400)"
                                    size="14px"
                                    usage="Metadata, Labels, Footers. Always Uppercase."
                                    sample="CLIENT_ID: 884-291-AZ // STATUS: ACTIVE"
                                />
                            </RevealContent>
                        </section>

                    </div>
                </div>
            </main>
        </div>
    );
};
