"use client";

import React from 'react';
import { MondrianGrid, RevealContent } from '@/components/ui/MondrianGrid';
import { Shield, Zap, Lock } from 'lucide-react';

// --- HELPER COMPONENTS ---

const ProductCard = ({ title, desc, icon: Icon }: { title: string, desc: string, icon: any }) => (
    <div className="border-4 border-navy p-6 hover:bg-navy group transition-colors duration-500 cursor-pointer relative overflow-hidden">
        <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 text-navy group-hover:text-white">
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

// --- MAIN PAGE ---

export default function DesignProductPage() {
    return (
        <div className="min-h-screen bg-white">

            {/* HEADER */}
            <div className="relative pt-32 pb-20 px-6 border-b-4 border-navy overflow-hidden">
                <MondrianGrid delay={0.2} />
                <div className="container mx-auto max-w-7xl relative z-10">
                    <RevealContent delay={0.4}>
                        <div className="flex justify-between items-end">
                            <div>
                                <span className="font-mono text-gold text-xs tracking-[0.3em] uppercase block mb-4">Design System v2.1</span>
                                <h1 className="font-display text-6xl text-navy leading-none mb-6">Global Product <br />& Color Logic.</h1>
                            </div>
                            <div className="text-right hidden md:block">
                                <div className="font-mono text-xs text-navy/50">NODE: 01</div>
                                <div className="font-mono text-xs text-navy/50">STATUS: ACTIVE</div>
                            </div>
                        </div>
                    </RevealContent>
                </div>
            </div>

            <main className="container mx-auto px-6 max-w-7xl py-24">

                {/* SECTION 1: AUTOMATED OFFERINGS (The Factory) */}
                <section className="mb-32">
                    <RevealContent delay={0.6}>
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
                    </RevealContent>
                </section>

            </main>
        </div>
    );
};
