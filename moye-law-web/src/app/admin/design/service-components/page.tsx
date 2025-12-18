"use client";

import React from 'react';
import SushiServiceHero from '@/components/layout/SushiServiceHero';
import ServiceFeature from '@/components/services/ServiceFeature';
import ServiceProcess from '@/components/services/ServiceProcess';
import ServiceConsiderations from '@/components/services/ServiceConsiderations';
import ServiceRelated from '@/components/services/ServiceRelated';
import Link from 'next/link';

// Mock Data for Demos
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

export default function ServiceComponentsPage() {
    return (
        <div className="min-h-screen bg-gray-50 pb-32">
            <header className="bg-navy text-white pt-32 pb-12 px-6">
                <div className="container mx-auto max-w-7xl">
                    <span className="font-mono text-gold text-xs tracking-widest uppercase block mb-4">Design System</span>
                    <h1 className="font-display text-5xl md:text-6xl mb-4">Components for Services</h1>
                    <p className="max-w-xl text-white/70 text-lg">
                        A catalog of all modular components used to build the service pages.
                        Usage: <code>src/components/services/</code>
                    </p>
                </div>
            </header>

            <main className="container mx-auto px-6 max-w-7xl py-12 space-y-20">

                {/* 1. HERO COMPONENT */}
                <section className="bg-white p-8 border border-gray-200">
                    <div className="flex justify-between items-center mb-8 border-b pb-4">
                        <h2 className="font-display text-2xl text-navy">1. Service Hero</h2>
                        <code className="text-xs bg-gray-100 px-2 py-1 rounded">SushiServiceHero.tsx</code>
                    </div>
                    <div className="border border-dashed border-gray-300">
                        <SushiServiceHero
                            title="Service Title Display"
                            description="This is the standard hero component used across all service pages. It supports a title and a descriptive subtitle."
                        />
                    </div>
                </section>

                {/* 2. FEATURES GRID */}
                <section className="bg-white p-8 border border-gray-200">
                    <div className="flex justify-between items-center mb-8 border-b pb-4">
                        <h2 className="font-display text-2xl text-navy">2. Feature Grid</h2>
                        <code className="text-xs bg-gray-100 px-2 py-1 rounded">ServiceFeature.tsx</code>
                    </div>
                    <div className="border border-dashed border-gray-300">
                        <ServiceFeature features={mockFeatures} title="Key Features" description="A grid layout for highlighting key service benefits or features." />
                    </div>
                </section>

                {/* 3. PROCESS STEPS */}
                <section className="bg-white p-8 border border-gray-200">
                    <div className="flex justify-between items-center mb-8 border-b pb-4">
                        <h2 className="font-display text-2xl text-navy">3. Process Timeline</h2>
                        <code className="text-xs bg-gray-100 px-2 py-1 rounded">ServiceProcess.tsx</code>
                    </div>
                    <div className="border border-dashed border-gray-300">
                        <ServiceProcess process={mockProcess} />
                    </div>
                </section>

                {/* 4. FAQ / CONSIDERATIONS */}
                <section className="bg-white p-8 border border-gray-200">
                    <div className="flex justify-between items-center mb-8 border-b pb-4">
                        <h2 className="font-display text-2xl text-navy">4. FAQ & Considerations</h2>
                        <code className="text-xs bg-gray-100 px-2 py-1 rounded">ServiceConsiderations.tsx</code>
                    </div>
                    <div className="border border-dashed border-gray-300">
                        <ServiceConsiderations considerations={mockConsiderations} title="Frequenty Asked Questions" />
                    </div>
                </section>

                {/* 5. RELATED SERVICES */}
                <section className="bg-white p-8 border border-gray-200">
                    <div className="flex justify-between items-center mb-8 border-b pb-4">
                        <h2 className="font-display text-2xl text-navy">5. Related Services</h2>
                        <code className="text-xs bg-gray-100 px-2 py-1 rounded">ServiceRelated.tsx</code>
                    </div>
                    <div className="border border-dashed border-gray-300">
                        <ServiceRelated relatedServices={mockRelated} />
                    </div>
                </section>

            </main>
        </div>
    );
}
