"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Terminal } from 'lucide-react';
import { MondrianGrid, RevealContent } from '@/components/ui/MondrianGrid';

/**
 * HeroV2: "The Binary Lawyer" - Golden Ratio Split
 * Now with "Kinetic Structuralism" Animations.
 */
const HeroV2 = () => {
    return (
        <div className="relative w-full min-h-[90vh] bg-white pt-20 md:pt-24 flex flex-col overflow-hidden">

            {/* THE MASTER GRID - Draw Lines First */}
            <MondrianGrid delay={0.2} />

            <div className="flex-grow grid grid-cols-1 md:grid-cols-12 h-full relative z-10">

                {/* === BLOCK A: THE PROMISE (60% approx - Cols 1-7) === */}
                <div className="col-span-1 md:col-span-7 bg-transparent p-8 md:p-16 flex flex-col justify-center relative">
                    <RevealContent delay={1.2} className="max-w-3xl">
                        <h1 className="font-display text-6xl md:text-8xl font-bold text-navy leading-[0.9] tracking-tight mb-8">
                            The Architecture <br />
                            of <span className="italic text-gold">Legacy</span>.
                        </h1>

                        <p className="font-sans text-xl md:text-2xl text-gray-600 max-w-xl mb-12 leading-relaxed border-l-4 border-gold pl-6">
                            Family values engineered for a digital future.
                            We don't just draft documents; we deploy systems.
                        </p>

                        {/* CTA Block */}
                        <div className="inline-flex">
                            <Link
                                href="/contact"
                                className="group relative inline-flex items-center justify-center px-8 py-5 
                         bg-navy text-white font-mono text-lg tracking-wide
                         border-4 border-navy
                         hover:bg-gold hover:text-navy hover:border-navy
                         transition-all duration-75 shadow-[8px_8px_0px_0px_#C99D56]"
                            >
                                &gt; INITIALIZE_CONSULTATION
                                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </RevealContent>
                </div>

                {/* === BLOCK B: THE HUMAN (40% approx - Cols 8-12) === */}
                <div className="col-span-1 md:col-span-5 bg-grey/50 relative overflow-hidden group h-full min-h-[50vh]">

                    <RevealContent delay={1.5} className="w-full h-full absolute inset-0">
                        {/* Portrait Placeholder */}
                        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                            <span className="font-display text-gray-400 italic text-2xl">Portrait: Christopher Moye</span>
                        </div>
                    </RevealContent>

                    {/* THE GLITCH OVERLAY (Hover Effect - Interactive, no delay needed for hover) */}
                    <div className="absolute inset-0 bg-navy/90 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-center items-center p-8 backdrop-blur-sm z-20">
                        {/* Schematic Grid */}
                        <div className="absolute inset-0 opacity-20"
                            style={{ backgroundImage: 'linear-gradient(#C99D56 1px, transparent 1px), linear-gradient(90deg, #C99D56 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                        </div>

                        {/* Data Points */}
                        <div className="relative z-10 grid grid-cols-2 gap-8 w-full max-w-md">
                            <div className="text-center">
                                <RevealContent delay={0}>
                                    <div className="font-mono text-4xl text-gold font-bold mb-1">20+</div>
                                    <div className="font-sans text-white text-sm tracking-widest uppercase">Years Practice</div>
                                </RevealContent>
                            </div>
                            <div className="text-center">
                                <RevealContent delay={0.1}>
                                    <div className="font-mono text-4xl text-gold font-bold mb-1">500+</div>
                                    <div className="font-sans text-white text-sm tracking-widest uppercase">Cases Engineered</div>
                                </RevealContent>
                            </div>
                            <div className="text-center col-span-2 mt-4">
                                <RevealContent delay={0.2}>
                                    <div className="inline-flex items-center gap-2 px-4 py-2 border border-gold text-gold font-mono text-xs">
                                        <Terminal className="w-4 h-4" /> SYSTEM_ARCHITECT
                                    </div>
                                </RevealContent>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroV2;
