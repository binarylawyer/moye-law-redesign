"use client";

import React from 'react';
import NavBarV2 from "@/components/layout/NavBarV2";
import TerminalFooter from "@/components/layout/TerminalFooter";
import SplitServiceCard from "@/components/content/SplitServiceCard";
import { RevealContent, MondrianGrid } from '@/components/ui/MondrianGrid';

export default function PracticeAreaPage() {
    return (
        <div className="min-h-screen bg-white">
            <NavBarV2 />

            {/* HEADER */}
            <div className="relative pt-32 pb-20 px-6 border-b-4 border-navy overflow-hidden">
                <MondrianGrid delay={0.2} />
                <div className="container mx-auto max-w-7xl relative z-10">
                    <RevealContent delay={0.4}>
                         <div className="flex flex-col md:flex-row justify-between items-end">
                            <div>
                                <span className="font-mono text-gold text-xs tracking-[0.3em] uppercase block mb-4">Moye Law Systems vNEXT</span>
                                <h1 className="font-display text-6xl md:text-8xl text-navy leading-none">System <br />Capabilities.</h1>
                            </div>
                            <div className="mt-8 md:mt-0 text-right">
                                <RevealContent delay={0.6}>
                                    <div className="font-mono text-xs text-navy/50">MODULES: 06</div>
                                    <div className="font-mono text-xs text-navy/50">STATUS: OPERATIONAL</div>
                                </RevealContent>
                            </div>
                        </div>
                    </RevealContent>
                </div>
            </div>

            {/* FILTER BAR (Visual Only) - Kept for fidelity to V2 design */}
            <div className="border-b-4 border-navy bg-gray-50">
                 <div className="container mx-auto px-6 py-4 overflow-x-auto">
                    <RevealContent delay={0.5} className="flex space-x-4">
                        <button className="bg-navy text-white font-mono text-xs px-4 py-2 uppercase tracking-wide">All Modules</button>
                        <button className="bg-white border-2 border-gray-200 text-navy hover:bg-gold hover:text-white hover:border-gold transition-colors font-mono text-xs px-4 py-2 uppercase tracking-wide">Estate Planning</button>
                        <button className="bg-white border-2 border-gray-200 text-navy hover:bg-gold hover:text-white hover:border-gold transition-colors font-mono text-xs px-4 py-2 uppercase tracking-wide">Corporate</button>
                        <button className="bg-white border-2 border-gray-200 text-navy hover:bg-gold hover:text-white hover:border-gold transition-colors font-mono text-xs px-4 py-2 uppercase tracking-wide">Intellectual Property</button>
                        <button className="bg-white border-2 border-gray-200 text-navy hover:bg-gold hover:text-white hover:border-gold transition-colors font-mono text-xs px-4 py-2 uppercase tracking-wide">Real Estate</button>
                    </RevealContent>
                 </div>
            </div>

            <main className="container mx-auto px-6 max-w-7xl py-24">
                
                {/* THE MATRIX */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    {/* ESTATE PLANNING */}
                    <RevealContent delay={0.6}>
                        <SplitServiceCard
                            title="Estate Planning"
                            serviceTitle="Custom Strategy"
                            productTitle="LegacyOS_Bundle"
                            serviceDesc="Privatized legacy planning for complex family dynamics and high-net-worth portfolios."
                            productDesc="Automated, attorney-verified will and trust generation engine."
                        />
                    </RevealContent>

                    {/* INTELLECTUAL PROPERTY */}
                    <RevealContent delay={0.7}>
                        <SplitServiceCard
                            title="Intellectual Property"
                            serviceTitle="Global IP Architecture"
                            productTitle="BrandGuard_Protocol"
                            serviceDesc="Defensive strategy for international brands and trade secret protection."
                            productDesc="Rapid auto-trademark filing and monitoring service."
                        />
                    </RevealContent>

                    {/* BUSINESS FORMATION */}
                    <RevealContent delay={0.8}>
                        <SplitServiceCard
                            title="Business Formation"
                            serviceTitle="Entity Structuring"
                            productTitle="Launch_Sequence"
                            serviceDesc="Tax-optimized corporate architecture for scaling ventures."
                            productDesc="50-state compliant LLC formation engine with 24h turnaround."
                        />
                    </RevealContent>

                    {/* ELDER LAW */}
                    <RevealContent delay={0.9}>
                        <SplitServiceCard
                            title="Elder Law"
                            serviceTitle="Crisis Planning"
                            productTitle="Care_Kernel"
                            serviceDesc="Urgent asset protection strategies for long-term care scenarios."
                            productDesc="Instant Medicaid eligibility calculator and application assistant."
                        />
                    </RevealContent>

                    {/* DIGITAL ASSETS */}
                    <RevealContent delay={1.0}>
                        <SplitServiceCard
                            title="Digital Assets"
                            serviceTitle="Key Succession"
                            productTitle="Vault_API"
                            serviceDesc="Legal frameworks for recovering locked assets and cold storage access."
                            productDesc="Dead Man's Switch automated crypto-access transfer protocol."
                        />
                    </RevealContent>

                    {/* REAL ESTATE */}
                    <RevealContent delay={1.1}>
                        <SplitServiceCard
                            title="Real Estate"
                            serviceTitle="Commercial Deal Flow"
                            productTitle="Deed_Generator"
                            serviceDesc="Complex deal structuring, diligence, and closing management."
                            productDesc="Automated property title transfer and deed generation."
                        />
                    </RevealContent>

                </div>

            </main>

            <TerminalFooter />
        </div>
    );
}
