import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Terminal } from 'lucide-react';

/**
 * HeroV2: "The Binary Lawyer" - Golden Ratio Split
 * 
 * Based on Hybrid Mondrian Spec (System Prompt):
 * - Golden Ratio Split (1.618)
 * - Block A (60%): The Promise (White, Serif Headline)
 * - Block B (40%): The Human (Portrait with Glitch Overlay)
 * - Block C: Nested CTA (Gold)
 * - NO BRIGHT PRIMARIES. Strict Navy/Gold/White/Grey.
 */

const HeroV2 = () => {
    return (
        <div className="relative w-full min-h-[90vh] bg-white pt-20 md:pt-24 flex flex-col">

            {/* THE MASTER GRID - Golden Ratio Split */}
            <div className="flex-grow grid grid-cols-1 md:grid-cols-12 h-full border-b-4 border-mondrian-navy">

                {/* === BLOCK A: THE PROMISE (60% approx - Cols 1-7) === */}
                <div className="col-span-1 md:col-span-7 bg-white p-8 md:p-16 flex flex-col justify-center relative border-r-4 border-mondrian-navy">
                    <div className="max-w-3xl">
                        <h1 className="font-serif text-6xl md:text-8xl font-bold text-mondrian-navy leading-[0.9] tracking-tight mb-8">
                            The Architecture <br />
                            of <span className="italic text-mondrian-gold">Legacy</span>.
                        </h1>

                        <p className="font-sans text-xl md:text-2xl text-gray-600 max-w-xl mb-12 leading-relaxed border-l-4 border-mondrian-gold pl-6">
                            Family values engineered for a digital future.
                            We don't just draft documents; we deploy systems.
                        </p>

                        {/* CTA Block - Nested in the layout */}
                        <div className="inline-flex">
                            <Link
                                to="/consultation"
                                className="group relative inline-flex items-center justify-center px-8 py-5 
                         bg-mondrian-navy text-white font-mono text-lg tracking-wide
                         border-4 border-mondrian-navy
                         hover:bg-mondrian-gold hover:text-mondrian-navy hover:border-mondrian-navy
                         transition-all duration-75 shadow-[8px_8px_0px_0px_#C99D56]"
                            >
                                &gt; INITIALIZE_CONSULTATION
                                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* === BLOCK B: THE HUMAN (40% approx - Cols 8-12) === */}
                <div className="col-span-1 md:col-span-5 bg-mondrian-grey relative overflow-hidden group h-full min-h-[50vh]">
                    {/* Portrait Placeholder (simulating Christopher Moye) */}
                    <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                        {/* In production, this would be: <img src="/chris-moye-portrait.jpg" className="w-full h-full object-cover" /> */}
                        <span className="font-serif text-gray-500 italic text-2xl">Portrait: Christopher Moye</span>
                    </div>

                    {/* THE GLITCH OVERLAY (Hover Effect) */}
                    <div className="absolute inset-0 bg-mondrian-navy/90 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-center items-center p-8 backdrop-blur-sm">
                        {/* Schematic Grid */}
                        <div className="absolute inset-0 opacity-20"
                            style={{ backgroundImage: 'linear-gradient(#C99D56 1px, transparent 1px), linear-gradient(90deg, #C99D56 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                        </div>

                        {/* Data Points */}
                        <div className="relative z-10 grid grid-cols-2 gap-8 w-full max-w-md">
                            <div className="text-center">
                                <div className="font-mono text-4xl text-mondrian-gold font-bold mb-1">20+</div>
                                <div className="font-sans text-white text-sm tracking-widest uppercase">Years Practice</div>
                            </div>
                            <div className="text-center">
                                <div className="font-mono text-4xl text-mondrian-gold font-bold mb-1">500+</div>
                                <div className="font-sans text-white text-sm tracking-widest uppercase">Cases Engineered</div>
                            </div>
                            <div className="text-center col-span-2 mt-4">
                                <div className="inline-flex items-center gap-2 px-4 py-2 border border-mondrian-gold text-mondrian-gold font-mono text-xs">
                                    <Terminal className="w-4 h-4" /> SYSTEM_ARCHITECT
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroV2;
