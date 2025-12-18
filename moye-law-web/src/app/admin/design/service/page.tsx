"use client";

import React from 'react';
import { MondrianGrid, RevealContent } from '@/components/ui/MondrianGrid';
import { Scale, Users, FileText } from 'lucide-react';
import SushiServiceHero from '@/components/layout/SushiServiceHero';
import ServiceFeature from '@/components/services/ServiceFeature';
import ServiceProcess from '@/components/services/ServiceProcess';
import ServiceConsiderations from '@/components/services/ServiceConsiderations';
import ServiceRelated from '@/components/services/ServiceRelated';

// --- HELPER COMPONENTS ---

const ServiceTier = ({ level, title, desc, price, icon: Icon }: { level: string, title: string, desc: string, price: string, icon: any }) => (
    <div className="border-4 border-navy p-8 relative overflow-hidden group hover:bg-navy transition-colors duration-500">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 text-navy group-hover:text-white transition-colors">
            <Icon size={140} strokeWidth={1} />
        </div>

        <div className="relative z-10">
            <span className="font-mono text-xs text-gold tracking-widest uppercase mb-2 block">{level}</span>
            <h3 className="font-display text-3xl text-navy group-hover:text-white mb-4 transition-colors">{title}</h3>
            <div className="w-12 h-1 bg-gold mb-6"></div>
            <p className="font-sans text-gray-600 group-hover:text-gray-300 mb-8 leading-relaxed transition-colors">
                {desc}
            </p>
            <div className="font-mono text-sm text-navy group-hover:text-gold border-t border-dashed border-gray-300 group-hover:border-gray-600 pt-4 transition-colors">
                {price}
            </div>
        </div>
    </div>
);

// --- MOCK DATA ---
const mockFeatures = [
    { title: "Rapid Filing", description: "Automated submission to USPTO.", icon: "zap" },
    { title: "Global Search", description: "World-wide conflict check.", icon: "globe" },
    { title: "Asset Locking", description: "Immutable record keeping.", icon: "lock" }
];

const mockProcess = {
    title: "The Execution Protocol",
    steps: [
        { title: "Audit", description: "We analyze your current holdings." },
        { title: "Strategy", description: "We design the protection layer." },
        { title: "Deployment", description: "We execute the filings." }
    ]
};

const mockConsiderations = [
    { title: "How long does it take?", description: "Standard filing takes 3-5 days." },
    { title: "Is it confidential?", description: "All client data is encrypted." },
    { title: "What if I get sued?", description: "We have a defense team on standby." }
];

const mockRelated = [
    { title: "Estate Planning", description: "Protect your legacy.", path: "#" },
    { title: "Business Formation", description: "Start your venture.", path: "#" },
    { title: "IP Licensing", description: "Monetize your assets.", path: "#" }
];

// --- MAIN PAGE ---

export default function DesignServicePage() {
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
                                <h1 className="font-display text-6xl text-navy leading-none mb-6">Service Tiering <br />& Funnel Logic.</h1>
                            </div>
                            <div className="text-right hidden md:block">
                                <div className="font-mono text-xs text-navy/50">NODE: 02</div>
                                <div className="font-mono text-xs text-navy/50">STATUS: ACTIVE</div>
                            </div>
                        </div>
                    </RevealContent>
                </div>
            </div>

            <main className="container mx-auto px-6 max-w-7xl py-24">

                {/* SECTION 1: THE 5TH WAVE FUNNEL */}
                <section className="mb-32">
                    <RevealContent delay={0.6}>
                        <div className="flex items-center mb-12">
                            <div className="w-12 h-1 bg-gold mr-4"></div>
                            <div>
                                <h2 className="font-display text-3xl text-navy">The "Invisible Concierge" Funnel</h2>
                                <p className="font-mono text-xs text-gray-400 mt-2">RETAIL ENTRY -&gt; HIGH VALUE ROUTING</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <ServiceTier
                                level="ENTRY TIER"
                                title="The Storefront"
                                desc="Standardized, productized legal services. High volume, low friction. Looks like a luxury boutique, operates like a factory."
                                price="$$ (Fixed Fee)"
                                icon={Users}
                            />
                            <ServiceTier
                                level="MID TIER"
                                title="Hybrid Counsel"
                                desc="Agent-assisted legal counsel. The 'Cyborg' model where human lawyers are augmented by the Moye Law Engine."
                                price="$$$ (Retainer)"
                                icon={FileText}
                            />
                            <ServiceTier
                                level="APEX TIER"
                                title="Private Banking"
                                desc="The 'Invisible Concierge'. Bespoke, high-touch, ultra-high-net-worth service. Hidden from the main menu, accessed via referral or asset triggers."
                                price="$$$$$ (Equity / %)"
                                icon={Scale}
                            />
                        </div>

                        {/* STRATEGY NOTE */}
                        <div className="mt-12 bg-navy text-white p-8 border-l-4 border-gold">
                            <h4 className="font-mono text-xs font-bold text-gold mb-2">PROTOCOL: THE VELVET ROPE</h4>
                            <p className="font-sans text-lg leading-relaxed opacity-90">
                                The website's primary function is to <strong>segment</strong> the user.
                                90% of users will self-select into the "Storefront" (Product).
                                The remaining 10% (High Net Worth) must be identified by the "Concierge Logic"
                                and routed to the "Private Banking" experience without them explicitly asking for it.
                                This is the "Invisible" part of the concierge.
                            </p>
                        </div>
                    </RevealContent>
                </section>

                {/* SECTION 2: COMPONENT PLAYGROUND */}
                <section className="border-t-4 border-navy pt-24">
                    <div className="flex items-center mb-12">
                        <div className="w-12 h-1 bg-navy mr-4"></div>
                        <h2 className="font-display text-4xl text-navy">Service Template Components</h2>
                    </div>

                    <div className="space-y-24">
                        {/* HERO DEMO */}
                        <div className="border border-gray-200">
                            <div className="bg-gray-100 p-2 font-mono text-xs text-gray-500 uppercase">Component: SushiServiceHero</div>
                            <SushiServiceHero title="Intellectual Property" description="Defend your ideas with military-grade legal architecture." />
                        </div>

                        {/* FEATURES DEMO */}
                        <div className="border border-gray-200">
                            <div className="bg-gray-100 p-2 font-mono text-xs text-gray-500 uppercase">Component: ServiceFeature</div>
                            <ServiceFeature features={mockFeatures} />
                        </div>

                        {/* PROCESS DEMO */}
                        <div className="border border-gray-200">
                            <div className="bg-gray-100 p-2 font-mono text-xs text-gray-500 uppercase">Component: ServiceProcess</div>
                            <ServiceProcess process={mockProcess} />
                        </div>

                        {/* FAQ DEMO */}
                        <div className="border border-gray-200">
                            <div className="bg-gray-100 p-2 font-mono text-xs text-gray-500 uppercase">Component: ServiceConsiderations (FAQ)</div>
                            <ServiceConsiderations considerations={mockConsiderations} />
                        </div>

                        {/* RELATED DEMO */}
                        <div className="border border-gray-200">
                            <div className="bg-gray-100 p-2 font-mono text-xs text-gray-500 uppercase">Component: ServiceRelated</div>
                            <ServiceRelated relatedServices={mockRelated} />
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
};
