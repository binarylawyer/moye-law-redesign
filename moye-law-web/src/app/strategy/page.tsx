"use client";

import React, { useState } from 'react';
import NavBarV2 from '@/components/layout/NavBarV2';
import TerminalFooter from '@/components/layout/TerminalFooter';
import { motion } from 'framer-motion';
import { Shield, Cpu, Activity, Lock, Layers, Zap, Scale, Anchor, Monitor } from 'lucide-react';
import { OpenSesameDoor } from '@/components/ui/OpenSesameDoor';
import { MondrianGrid, RevealContent } from '@/components/ui/MondrianGrid';

// --- HELPER COMPONENTS (Ported from Legacy) ---

// Duotone Image with Hover Effects
const DuotoneImage = ({ src, label, variant = 'navy' }: { src: string, label: string, variant?: 'navy' | 'gold' | 'navy-light' }) => {
    const [isHovered, setIsHovered] = useState(false);

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
        overlayOpacity = 0.7;
    }

    const overlayMode = variant === 'navy-light' ? 'multiply' : 'lighten';
    const baseFilter = variant === 'navy-light'
        ? 'grayscale(100%) sepia(40%) contrast(1.1)'
        : 'grayscale(100%) contrast(1.1)';

    return (
        <div
            className="group relative cursor-crosshair"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className={`relative h-64 overflow-hidden border-4 ${variant.includes('navy') ? 'border-navy' : 'border-gold'} transition-colors duration-300`}
                style={{ backgroundColor: baseColor }}
            >
                {/* Image Element */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={src}
                    alt={label}
                    className="w-full h-full object-cover transition-all duration-700 ease-out"
                    style={{
                        filter: isHovered ? 'none' : baseFilter,
                        mixBlendMode: isHovered ? 'normal' : 'multiply',
                        transform: isHovered ? 'scale(1.05)' : 'scale(1)'
                    }}
                />

                {/* Overlay */}
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

// Kinetic Grid Demo Component
const KineticGridDemo = () => {
    return (
        <div className="w-full h-96 bg-gray-50 border-4 border-navy relative overflow-hidden">
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
                <KineticCell delay={0.2} label="QUADRANT_01" content="Analysis" />
                <KineticCell delay={0.8} label="QUADRANT_02" content="Strategy" />
                <KineticCell delay={1.4} label="QUADRANT_03" content="Execution" />
                <KineticCell delay={2.0} label="QUADRANT_04" content="Result" />
            </div>

            {/* The Constructing Lines */}
            <motion.div
                className="absolute top-0 bottom-0 left-1/2 w-1 bg-navy z-20"
                initial={{ height: "0%" }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                viewport={{ once: false }}
            />
            <motion.div
                className="absolute left-0 right-0 top-1/2 h-1 bg-navy z-20"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                viewport={{ once: false }}
            />

            <div className="absolute bottom-2 right-2 font-mono text-[10px] text-navy/50">
                System_Status::Constructing
            </div>
        </div>
    );
};

const KineticCell = ({ delay, label, content }: { delay: number, label: string, content: string }) => {
    return (
        <div className="relative w-full h-full flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: delay + 0.5 }}
                className="text-center"
            >
                <div className="font-mono text-[10px] text-gold tracking-widest mb-2">{label}</div>
                <div className="font-display text-3xl text-navy">{content}</div>
            </motion.div>
        </div>
    )
}

// --- MAIN PAGE COMPONENT ---

export default function StrategyPage() {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-navy selection:text-gold pt-24">
            <NavBarV2 />
            <MondrianGrid delay={0} />

            <div className="max-w-4xl mx-auto px-6 py-12 relative z-10">

                {/* HEADLINE */}
                <RevealContent delay={0.2}>
                    <div className="mb-20 border-l-4 border-navy pl-8 py-4">
                        <span className="font-mono text-gold text-xs tracking-[0.3em] uppercase block mb-4">
                            Strategic Architecture v2.0
                        </span>
                        <h1 className="font-display text-5xl md:text-6xl text-navy mb-6 leading-none">
                            Kinetic <br /> Structuralism
                        </h1>
                        <p className="font-sans text-xl text-gray-500 max-w-2xl leading-relaxed">
                            The definitive blueprint for the "Fifth Wave" legal interface.
                            Merging the rigid engineering of Mondrian with the narrative tension of Saul Bass.
                        </p>
                    </div>
                </RevealContent>

                {/* SECTION 1: KINETIC STRUCTURALISM */}
                <section className="mb-24 relative">
                    <RevealContent delay={0.3}>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-navy text-white p-3">
                                <Activity className="w-6 h-6" />
                            </div>
                            <h2 className="font-display text-3xl text-navy">01. Intersect & Reveal</h2>
                        </div>
                        <div className="prose prose-lg text-gray-600 mb-8 font-sans">
                            <p>
                                We are abandoning the static grid for a <strong>living architecture</strong>.
                                The website does not simply load; it <em>constructs</em> itself.
                                Using an "Apple-style" scrollytelling mechanic, content is initially hidden
                                and only revealed when vertical and horizontal grid lines physically intersect
                                to close the frame.
                            </p>
                        </div>
                        <KineticGridDemo />
                    </RevealContent>
                </section>

                {/* SECTION 2: THE FIFTH WAVE */}
                <section className="mb-24">
                    <RevealContent delay={0.4}>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-navy text-white p-3">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h2 className="font-display text-3xl text-navy">02. The Fifth Wave</h2>
                        </div>
                        <div className="prose prose-lg text-gray-600 mb-8 font-sans">
                            <p>
                                The industry is shifting from the <strong>Artisan Billable Hour</strong> (Wave 2)
                                to the <strong>Computed Agentic Outcome</strong> (Wave 5).
                                In this era, value is not defined by time spent, but by the autonomous execution
                                of complex tasks. We are moving from "Analytical Assistance" to "Autonomous Generation."
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-0 border-4 border-navy">
                            <div className="p-8 bg-gray-100 border-r-4 border-navy text-center opacity-50">
                                <h3 className="font-serif text-xl mb-2">The Old Way</h3>
                                <p className="font-mono text-xs">Lawyer + Tool</p>
                                <p className="font-mono text-xs mt-2">Billable Hour</p>
                            </div>
                            <div className="p-8 bg-navy text-white text-center">
                                <h3 className="font-serif text-xl mb-2 text-gold">The New Way</h3>
                                <p className="font-mono text-xs">Lawyer + Agent</p>
                                <p className="font-mono text-xs mt-2">Computed Outcome</p>
                            </div>
                        </div>
                    </RevealContent>
                </section>

                {/* SECTION 3: FACTORY VS STOREFRONT */}
                <section className="mb-24">
                    <RevealContent delay={0.5}>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-navy text-white p-3">
                                <Layers className="w-6 h-6" />
                            </div>
                            <h2 className="font-display text-3xl text-navy">03. Factory vs. Storefront</h2>
                        </div>
                        <div className="text-gray-600 mb-8 font-sans">
                            <p className="mb-4">
                                To prevent brand dissonance, we must separate the <strong>backend engine</strong> from the <strong>client interface</strong>.
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>The Factory (Sushi Kitchen):</strong> Backend, Brutalist, "Binary Lawyer," focused on raw power and "Hacker" aesthetics.</li>
                                <li><strong>The Storefront (Moye Law):</strong> Frontend, Mondrian, "Family Values," focused on trust, empathy, and refined engineering.</li>
                            </ul>
                        </div>
                    </RevealContent>
                </section>

                {/* SECTION 6: NAVY-DUOTONE PROTOCOL */}
                <section className="mb-24">
                    <RevealContent delay={0.6}>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-navy text-white p-3">
                                <Monitor className="w-6 h-6" />
                            </div>
                            <h2 className="font-display text-3xl text-navy">06. Navy-Duotone Protocol</h2>
                        </div>
                        <div className="text-gray-600 mb-8 font-sans">
                            <p>
                                Photography must not break the system. We resolve the tension between Abstract Graphics and Human Photography by treating photos <em>as</em> graphics.
                                All hero imagery undergoes a strict <strong>Duotone Mapping</strong>.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            <DuotoneImage src="/assets/v2/architecture.png" label="FIG 01.1: STRUCTURE [NAVY]" variant="navy" />
                            <DuotoneImage src="/assets/v2/handshake.png" label="FIG 01.2: HUMANITY [NAVY]" variant="navy" />
                        </div>
                    </RevealContent>
                </section>

                {/* SECTION 9: KINETIC MONDRIAN (Live Proof) */}
                <section className="mb-24">
                    <RevealContent delay={0.7}>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-navy text-white p-3">
                                <Monitor className="w-6 h-6" />
                            </div>
                            <h2 className="font-display text-3xl text-navy">09. Kinetic Mondrian (Live Proof)</h2>
                        </div>

                        {/* THE KINETIC MONDRIAN GRID */}
                        <div className="w-full relative h-[900px] border-8 border-navy bg-white overflow-hidden">

                            {/* 1. Prime Vertical */}
                            <motion.div className="absolute top-0 bottom-0 left-[38.2%] w-2 bg-navy z-30" initial={{ height: "0%" }} whileInView={{ height: "100%" }} transition={{ duration: 1.2 }} viewport={{ once: false }} />

                            {/* 3. Prime Horizontal */}
                            <motion.div className="absolute left-0 right-0 top-[25%] h-2 bg-navy z-30" initial={{ width: "0%" }} whileInView={{ width: "100%" }} transition={{ duration: 1.3, delay: 0.1 }} viewport={{ once: false }} />

                            {/* BLOCK D: THE GOLD ENGINE (Open Sesame) */}
                            <div className="absolute top-[25%] left-[38.2%] w-[36.8%] h-[35%] overflow-hidden">
                                <OpenSesameDoor
                                    title="Strategy"
                                    revealedText="ACCESS GRANTED"
                                />
                            </div>

                            {/* More blocks can be added here as needed */}
                        </div>
                    </RevealContent>
                </section>

            </div>
            <TerminalFooter />
        </div>
    );
}
