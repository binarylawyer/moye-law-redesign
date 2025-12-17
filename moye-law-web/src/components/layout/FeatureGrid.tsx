"use client";

import React from 'react';
import { Shield, Lock, Globe, Zap, Database, ChevronRight, Activity } from 'lucide-react';
import { RevealContent } from '@/components/ui/MondrianGrid';

const FeatureGrid: React.FC = () => {
    return (
        <div className="w-full bg-[#FAFAFA] border-b-4 border-navy py-12">
            <div className="container mx-auto px-6 max-w-7xl">

                <div className="text-center mb-12">
                    <RevealContent delay={0.2}>
                        <span className="font-mono text-navy text-xs tracking-[0.3em] uppercase block mb-4">
                            System_Modules::Section_9
                        </span>
                        <h2 className="font-display text-4xl text-navy">
                            The Grid Architecture
                        </h2>
                    </RevealContent>
                </div>

                {/* 
                    COMPLEX MONDRIAN GRID (12x12)
                 */}
                <div className="bg-navy border-4 border-navy p-0 grid grid-cols-12 grid-rows-[repeat(12,minmax(50px,auto))] gap-1 shadow-[12px_12px_0px_0px_#0A2342] min-h-[800px]">

                    {/* 1. DOMINANT WHITE (Top Left) */}
                    <div className="col-start-1 col-end-12 md:col-end-8 row-start-1 row-end-7 bg-white p-8 md:p-12 relative flex flex-col justify-between group overflow-hidden">
                        <RevealContent delay={0.4} className="h-full flex flex-col justify-between relative z-10">
                            <div>
                                <Shield className="w-12 h-12 text-navy mb-6" />
                                <h3 className="font-display text-4xl md:text-5xl text-navy leading-none mb-4">
                                    Global Asset<br />Fortification
                                </h3>
                                <p className="font-sans text-gray-500 max-w-sm">
                                    Structuring wealth across borders with impenetrable legal architecture.
                                </p>
                            </div>
                        </RevealContent>
                        {/* Subtle grid pattern overlay */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(10,35,66,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(10,35,66,0.03)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
                    </div>

                    {/* 2. GOLD WIDE (Top Right Center) */}
                    <div className="col-start-8 md:col-start-8 col-end-13 row-start-1 row-end-4 bg-gold p-6 flex items-center justify-center relative group hover:bg-[#b08845] transition-colors">
                        <RevealContent delay={0.6}>
                            <div className="text-center text-navy">
                                <Lock className="w-8 h-8 mx-auto mb-2" />
                                <span className="font-mono text-xs font-bold uppercase tracking-widest">Digital_Vault</span>
                            </div>
                        </RevealContent>
                    </div>

                    {/* 3. GREY TALL (Far Right Mid) */}
                    <div className="hidden md:flex col-start-10 col-end-13 row-start-4 row-end-8 bg-gray-100 p-6 flex-col justify-between hover:bg-white transition-colors">
                        <RevealContent delay={0.8} className="h-full flex flex-col justify-between">
                            <Database className="w-6 h-6 text-gray-400" />
                            <div className="font-mono text-[10px] text-gray-500">
                                &gt; ENCRYPTION: 256<br />
                                &gt; BACKUP: AUTO<br />
                                &gt; NODES: 12
                            </div>
                        </RevealContent>
                    </div>

                    {/* 4. RED ALERT (Middle center) */}
                    <div className="col-start-8 col-end-13 md:col-end-10 row-start-4 row-end-7 bg-[#8B0000] p-4 flex items-center justify-center text-white text-center hover:bg-red-900 transition-colors cursor-pointer">
                        <RevealContent delay={0.7}>
                            <div>
                                <Activity className="w-8 h-8 mx-auto mb-2 text-gold animate-pulse" />
                                <span className="font-mono text-[10px] text-gold uppercase">CRITICAL</span>
                            </div>
                        </RevealContent>
                    </div>

                    {/* 5. NAVY BLOCK (Bottom Left Mid) */}
                    <div className="col-start-1 col-end-13 md:col-end-6 row-start-7 row-end-11 bg-navy p-8 text-white relative flex flex-col justify-end group">
                        <RevealContent delay={0.9} className="w-full">
                            <Globe className="w-16 h-16 text-white/10 absolute top-4 right-4 group-hover:text-white/20 transition-colors" />
                            <div className="mt-auto">
                                <h4 className="font-mono text-xl text-gold mb-2">&gt; Network_Ops</h4>
                                <p className="font-sans text-sm text-gray-400">
                                    Monitoring 50+ jurisdictions for regulatory changes in real-time.
                                </p>
                            </div>
                        </RevealContent>
                    </div>

                    {/* 6a. Filler White (Small) */}
                    <div className="col-start-6 col-end-10 row-start-7 row-end-8 bg-white p-4 hidden md:flex items-center justify-center border-l-4 border-navy">
                        <RevealContent delay={1.0}>
                            <span className="font-serif italic text-navy text-sm">"Precision is our currency."</span>
                        </RevealContent>
                    </div>

                    {/* 6b. Main White Horizontal */}
                    <div className="col-start-1 md:col-start-6 col-end-13 row-start-8 row-end-11 bg-white p-8 flex items-center gap-6 group hover:bg-gray-50 transition-colors">
                        <RevealContent delay={1.1} className="flex items-center gap-6 w-full">
                            <div className="bg-gray-100 p-4 rounded-none border-2 border-navy">
                                <Zap className="w-6 h-6 text-gold" />
                            </div>
                            <div>
                                <h4 className="font-display text-2xl text-navy">Rapid Deployment</h4>
                                <p className="font-sans text-sm text-gray-500">Entities formed in 24 hours.</p>
                            </div>
                            <ChevronRight className="ml-auto w-6 h-6 text-navy/30 group-hover:text-navy transition-colors" />
                        </RevealContent>
                    </div>

                    {/* 7. GREY SMALL (Bottom Left) */}
                    <div className="col-start-1 col-end-4 row-start-11 row-end-13 bg-gray-200 p-4 flex items-center justify-center">
                        <span className="font-mono text-xs text-gray-500">FIG_9.3</span>
                    </div>

                    {/* 8. WHITE WIDE (Bottom Center) */}
                    <div className="col-start-4 col-end-11 row-start-11 row-end-13 bg-white p-6 flex items-center justify-between">
                        <RevealContent delay={1.2} className="flex w-full justify-between items-center">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 bg-navy"></div>
                                <div className="w-3 h-3 bg-gold"></div>
                                <div className="w-3 h-3 bg-[#8B0000]"></div>
                            </div>
                            <span className="font-mono text-xs text-navy/50 tracking-[0.2em] uppercase hidden md:inline">Architecture of Truth</span>
                        </RevealContent>
                    </div>

                    {/* 9. GOLD SMALL (Bottom Right) */}
                    <div className="col-start-11 col-end-13 row-start-11 row-end-13 bg-navy flex items-center justify-center text-gold cursor-pointer hover:bg-gold hover:text-navy transition-colors">
                        <span className="font-mono text-sm font-bold">-&gt;</span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FeatureGrid;
