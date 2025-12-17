"use client";

import React from 'react';
import { OpenSesameDoor } from '@/components/ui/OpenSesameDoor';
import { MondrianGrid, RevealContent } from '@/components/ui/MondrianGrid';

export default function DesignMotionPage() {
    return (
        <div className="min-h-screen bg-white">

            {/* HEADER */}
            <div className="relative pt-32 pb-20 px-6 border-b-4 border-navy overflow-hidden">
                <MondrianGrid delay={0.2} />
                <div className="container mx-auto max-w-7xl relative z-10">
                    <RevealContent delay={0.4}>
                        <div className="flex flex-col md:flex-row justify-between items-end">
                            <div>
                                <span className="font-mono text-gold text-xs tracking-[0.3em] uppercase block mb-4">Design System v2.1</span>
                                <h1 className="font-display text-6xl md:text-8xl text-navy leading-none">Kinetic Physics <br />& Motion Laws.</h1>
                            </div>
                        </div>
                    </RevealContent>
                </div>
            </div>

            <main className="container mx-auto px-6 max-w-7xl py-24">

                {/* SECTION 1: THE SAUL BASS DOOR */}
                <section className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <RevealContent delay={0.6}>
                            <div className="flex items-center mb-8">
                                <div className="w-12 h-1 bg-gold mr-4"></div>
                                <h2 className="font-display text-3xl text-navy">The "Saul Bass" Door</h2>
                            </div>
                            <p className="font-sans text-gray-600 mb-8 max-w-md leading-relaxed">
                                A heavy, decisive opening mechanism typically used for high-value reveals.
                                Uses <strong>CSS 3D Transforms</strong> with a custom bezier curve to mimic mechanical weight.
                                <br /><br />
                                The motion should feel "oiled" and "mechanical," not bouncy or rubbery.
                                <span className="font-mono text-xs text-navy bg-gray-100 p-4 block mt-4 border-l-2 border-gold">
                                    Easing: cubic-bezier(0.25, 0.46, 0.45, 0.94)<br />
                                    Duration: 1.2s<br />
                                    Rotation: -110deg (Y-Axis)
                                </span>
                            </p>
                        </RevealContent>
                    </div>

                    <RevealContent delay={0.8}>
                        <div className="bg-gray-50 p-12 flex items-center justify-center border-4 border-dashed border-gray-200 min-h-[500px]">
                            <OpenSesameDoor title="Hover Me" revealedText="ACCESS_GRANTED" />
                        </div>
                    </RevealContent>
                </section>

                {/* SECTION 2: MONDRIAN GRID CONSTRUCTION */}
                <section className="mb-12">
                    <RevealContent delay={1.0}>
                        <div className="flex items-center mb-8">
                            <div className="w-12 h-1 bg-gold mr-4"></div>
                            <h2 className="font-display text-3xl text-navy">Structural Grid Construction</h2>
                        </div>
                        <div className="w-full h-64 relative border-4 border-navy overflow-hidden bg-gray-50">
                            <MondrianGrid delay={0} />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="font-mono text-xs text-navy/50 bg-white/80 p-2">
                                    INTERSECT & REVEAL PROTOCOL ACTIVATED
                                </div>
                            </div>
                        </div>
                    </RevealContent>
                </section>

            </main>
        </div>
    );
}
