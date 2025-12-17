"use client";

import React from 'react';
import { Scale, Globe, Zap, Shield, Database, Briefcase } from 'lucide-react';
import NavBarV2 from "@/components/layout/NavBarV2";
import TerminalFooter from "@/components/layout/TerminalFooter";
import SolutionCard from "@/components/content/SolutionCard";
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

                {/* THE SOLUTION CATALOG (Visible) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* 1. ESTATE PLANNING */}
                    <RevealContent delay={0.6}>
                        <SolutionCard
                            title="Legacy Architecture"
                            description="Structuring generational wealth and succession with precision."
                            icon={<Scale />}
                            tags={["Trusts", "Wills", "Tax Strategy"]}
                        />
                    </RevealContent>

                    {/* 2. INTELLECTUAL PROPERTY */}
                    <RevealContent delay={0.7}>
                        <SolutionCard
                            title="Global Brand Guard"
                            description="Defensive IP strategy for international commerce and trade secrets."
                            icon={<Globe />}
                            tags={["Trademarks", "Copyright", "Licensing"]}
                        />
                    </RevealContent>

                    {/* 3. BUSINESS FORMATION */}
                    <RevealContent delay={0.8}>
                        <SolutionCard
                            title="Entity Launchpad"
                            description="Rapid corporate structuring and 50-state compliant formation."
                            icon={<Zap />}
                            tags={["LLC Formation", "Founders Agreement", "Scale"]}
                        />
                    </RevealContent>

                    {/* 4. ELDER LAW */}
                    <RevealContent delay={0.9}>
                        <SolutionCard
                            title="Care & Crisis Ops"
                            description="Urgent asset protection and Medicaid eligibility planning."
                            icon={<Shield />}
                            tags={["Medicaid", "Asset Protection", "Healthcare"]}
                        />
                    </RevealContent>

                    {/* 5. DIGITAL ASSETS */}
                    <RevealContent delay={1.0}>
                        <SolutionCard
                            title="Digital Vault"
                            description="Recovery protocols and legal frameworks for crypto/NFT assets."
                            icon={<Database />}
                            tags={["Crypto", "Cold Storage", "Access Recovery"]}
                        />
                    </RevealContent>

                    {/* 6. REAL ESTATE */}
                    <RevealContent delay={1.1}>
                        <SolutionCard
                            title="Property Systems"
                            description="Commercial deal flow, diligence, and automated closings."
                            icon={<Briefcase />}
                            tags={["Commercial", "Closing", "Deeds"]}
                        />
                    </RevealContent>

                </div>

            </main>

            <TerminalFooter />
        </div>
    );
}
