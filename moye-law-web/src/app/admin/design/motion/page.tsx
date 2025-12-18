"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { KineticDoor } from '@/components/ui/KineticDoor';
import { MondrianGrid, RevealContent } from '@/components/ui/MondrianGrid';
import KineticMondrianDemo from '@/components/content/KineticMondrianDemo';

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
                                <span className="font-mono text-gold text-xs tracking-[0.3em] uppercase block mb-4">Design System v2.2</span>
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
                                A heavy, decisive opening mechanism distinct to the "Kinetic Structuralism" language.
                                Unlike standard web ease-in-out curves, this door uses a custom cubic-bezier to mimic mechanical friction and release.
                                <br /><br />
                                The motions should feel "engineered," decisively snapping open rather than floating.
                                <span className="font-mono text-xs text-navy bg-gray-100 p-4 block mt-4 border-l-4 border-gold">
                                    Easing: cubic-bezier(0.3, 0.0, 0.2, 1) (The "Snap")<br />
                                    Duration: 0.6s (Mechanical)<br />
                                    Rotation: -110deg (Y-Axis)<br />
                                    Origin: Left-Center
                                </span>
                            </p>
                        </RevealContent>
                    </div>

                    <RevealContent delay={0.8}>
                        <div className="bg-gray-50 p-12 flex items-center justify-center border-4 border-dashed border-gray-200 min-h-[500px]">
                            <KineticDoor
                                title="Hover Me"
                                revealedText="ACCESS_GRANTED"
                            />
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
                            {/* Demo Lines - Replicated from Legacy V2 */}
                            <motion.div
                                className="absolute top-0 bottom-0 left-[33%] w-2 bg-navy"
                                initial={{ height: "0%" }}
                                whileInView={{ height: "100%" }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                            />
                            <motion.div
                                className="absolute top-[50%] left-0 right-0 h-1 bg-gold"
                                initial={{ width: "0%" }}
                                whileInView={{ width: "100%" }}
                                transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
                            />
                            <div className="absolute bottom-4 right-4 font-mono text-xs text-gray-400">
                                INTERSECT & REVEAL PROTOCOL
                            </div>
                        </div>
                    </RevealContent>
                </section>

                {/* SECTION 3: KINETIC MONDRIAN ASSEMBLY */}
                <div className="mt-32">
                    <KineticMondrianDemo />
                </div>

            </main>
        </div>
    );
}
