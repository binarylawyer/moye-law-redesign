import React from 'react';
import V2PageWrapper from '../../components/V2PageWrapper';
import { motion } from 'framer-motion';
import { Shield, Zap, Lock, Grid } from 'lucide-react';

/* 
 * DESIGN SYSTEM NODE 01: PRODUCT & COLOR
 * Purpose: Define Automated Offerings & The Kinetic Color System
 */

const ColorBlock = ({ name, hex, usage }: { name: string, hex: string, usage: string }) => (
    <div className="flex flex-col space-y-2">
        <div className="h-32 w-full border-4 border-navy relative group overflow-hidden">
            <div className="absolute inset-0" style={{ backgroundColor: hex }}></div>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="font-mono text-xs text-navy border-l-2 border-gold pl-2">
            <div className="font-bold">{name}</div>
            <div className="text-gray-500">{hex}</div>
            <div className="text-[10px] uppercase tracking-wider text-gold mt-1">{usage}</div>
        </div>
    </div>
);

const ProductCard = ({ title, desc, icon: Icon }: { title: string, desc: string, icon: any }) => (
    <div className="border-4 border-navy p-6 hover:bg-navy group transition-colors duration-500 cursor-pointer relative overflow-hidden">
        <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20">
            <Icon size={120} strokeWidth={1} />
        </div>
        <div className="relative z-10">
            <div className="w-12 h-12 bg-gold flex items-center justify-center mb-4 text-navy">
                <Icon size={24} />
            </div>
            <h3 className="font-display text-2xl text-navy group-hover:text-white mb-2">{title}</h3>
            <p className="font-sans text-sm text-gray-500 group-hover:text-gray-300 leading-relaxed max-w-xs">{desc}</p>
        </div>
        <div className="absolute bottom-0 left-0 w-0 h-1 bg-gold group-hover:w-full transition-all duration-700 ease-in-out"></div>
    </div>
);

const DesignProductPage = () => {
    return (
        <V2PageWrapper className="pt-20">
            <div className="max-w-7xl mx-auto px-6 py-12">

                {/* HEADER */}
                <header className="mb-20 border-b-4 border-navy pb-8">
                    <div className="flex justify-between items-end">
                        <div>
                            <span className="font-mono text-gold text-xs tracking-[0.3em] uppercase block mb-4">Design System v2.1</span>
                            <h1 className="font-display text-6xl text-navy leading-none">Global Product <br />& Color Logic.</h1>
                        </div>
                        <div className="text-right hidden md:block">
                            <div className="font-mono text-xs text-navy/50">NODE: 01</div>
                            <div className="font-mono text-xs text-navy/50">STATUS: ACTIVE</div>
                        </div>
                    </div>
                </header>

                {/* SECTION 1: THE COLOR PALETTE */}
                <section className="mb-32">
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

                    {/* 1.2 MONDRIAN AUTHENTIC (LEGACY/ARTISTIC) */}
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

                    {/* 1.3 EXTENDED & LEGACY (QUARANTINED) */}
                    <div className="flex justify-between items-end mb-6 border-b border-gray-200 pb-2">
                        <h3 className="font-mono text-sm font-bold text-gray-400">3. EXTENDED / LEGACY (QUARANTINED)</h3>
                        <span className="font-mono text-[10px] text-gray-400">SOURCE: src/index.css</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-4 opacity-75">
                        <ColorBlock name="LEGACY BLUE" hex="#4682B4" usage="Old Links (SteelBlue)" />
                        <ColorBlock name="CERULEAN" hex="#4A90E2" usage="Accent Variable" />
                        <ColorBlock name="OCEAN" hex="#0EA5E9" usage="Marketing Gradient" />
                        <ColorBlock name="PASTEL BLUE" hex="#D3E4FD" usage="Background variant" />
                        <ColorBlock name="SOFT GOLD" hex="#F2E3C9" usage="Background variant" />
                    </div>

                </section>

                {/* SECTION 2: AUTOMATED OFFERINGS (The Factory) */}
                <section className="mb-32">
                    <div className="flex items-center mb-12">
                        <div className="w-12 h-1 bg-gold mr-4"></div>
                        <div>
                            <h2 className="font-display text-3xl text-navy">Automated Product Architecture</h2>
                            <p className="font-mono text-xs text-gray-400 mt-2">THE FACTORY OUTPUT (LEFT CELL)</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ProductCard
                            title="LegacyOS Bundle"
                            desc="Complete estate digitalization and asset mapping. Zero-touch deployment for 'Alex' persona."
                            icon={Shield}
                        />
                        <ProductCard
                            title="Compliance Engine"
                            desc="Non-deterministic state machine audits for regulatory environments."
                            icon={Zap}
                        />
                        <ProductCard
                            title="IP Fortress"
                            desc="Blockchain-verified intellectual property registration and monitoring."
                            icon={Lock}
                        />
                    </div>

                    {/* STRATEGY NOTE */}
                    <div className="mt-8 bg-gray-50 border-l-4 border-navy p-6">
                        <h4 className="font-mono text-xs font-bold text-navy mb-2">STRATEGY: FACTORY VS STOREFRONT</h4>
                        <p className="font-sans text-sm text-gray-600">
                            We sell the <strong>output</strong> of the factory (The "Sushi Kitchen") through the refined storefront.
                            Clients buy results, not the machinery.
                        </p>
                    </div>
                </section>

                {/* SECTION 3: TYPOGRAPHY RULES */}
                <section className="mb-12">
                    <div className="flex items-center mb-12">
                        <div className="w-12 h-1 bg-gold mr-4"></div>
                        <h2 className="font-display text-3xl text-navy">Typography Hierarchy</h2>
                    </div>
                    <div className="border-l-4 border-navy pl-12 space-y-12">
                        <div>
                            <span className="font-mono text-xs text-gray-400 block mb-2">DISPLAY (H1 - H3)</span>
                            <div className="font-display text-6xl text-navy">Cormorant Garamond</div>
                        </div>
                        <div>
                            <span className="font-mono text-xs text-gray-400 block mb-2">BODY / UI</span>
                            <div className="font-sans text-4xl text-navy">Inter (San Francisco)</div>
                        </div>
                        <div>
                            <span className="font-mono text-xs text-gray-400 block mb-2">DATA / TECHNICAL</span>
                            <div className="font-mono text-2xl text-navy">JetBrains Mono</div>
                        </div>
                    </div>
                </section>

            </div>
        </V2PageWrapper>
    );
};

export default DesignProductPage;
