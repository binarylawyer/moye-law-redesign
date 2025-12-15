import React from 'react';
import V2PageWrapper from '../components/V2PageWrapper';
import SushiSplitCard from '../sushi-ui/components/SushiSplitCard';
import { StorefrontTheme } from '../sushi-ui/theme/themes';

const PracticeIndex = () => {
    return (
        <V2PageWrapper className="pt-20">
            <div className="max-w-7xl mx-auto px-6 py-12">

                {/* HEADER */}
                <header className="mb-20 border-b-4 border-navy pb-8 flex flex-col md:flex-row justify-between items-end">
                    <div>
                        <span className="font-mono text-gold text-xs tracking-[0.3em] uppercase block mb-4">Moye Law Systems v2.1</span>
                        <h1 className="font-display text-6xl text-navy leading-none">System <br />Capabilities.</h1>
                    </div>
                    <div className="mt-8 md:mt-0 text-right">
                        <div className="font-mono text-xs text-navy/50">MODULES: 06</div>
                        <div className="font-mono text-xs text-navy/50">STATUS: OPERATIONAL</div>
                    </div>
                </header>

                {/* FILTER BAR (Visual Only) */}
                <div className="mb-12 flex space-x-4 overflow-x-auto pb-4">
                    <button className="bg-navy text-white font-mono text-xs px-4 py-2 uppercase tracking-wide">All Modules</button>
                    <button className="bg-gray-100 text-navy hover:bg-gold hover:text-white transition-colors font-mono text-xs px-4 py-2 uppercase tracking-wide">Estate Planning</button>
                    <button className="bg-gray-100 text-navy hover:bg-gold hover:text-white transition-colors font-mono text-xs px-4 py-2 uppercase tracking-wide">Corporate</button>
                    <button className="bg-gray-100 text-navy hover:bg-gold hover:text-white transition-colors font-mono text-xs px-4 py-2 uppercase tracking-wide">Intellectual Property</button>
                    <button className="bg-gray-100 text-navy hover:bg-gold hover:text-white transition-colors font-mono text-xs px-4 py-2 uppercase tracking-wide">Real Estate</button>
                </div>

                {/* THE MATRIX */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* ESTATE PLANNING */}
                    <SushiSplitCard
                        theme={StorefrontTheme}
                        title="Estate Planning"
                        serviceSide={{
                            title: "Private Client Strategy",
                            description: "Legacy planning for high-net-worth portfolios.",
                        }}
                        productSide={{
                            title: "Will & Trust Generator",
                            description: "Instant, attorney-verified documents.",
                            codeLabel: "LegacyOS"
                        }}
                    />

                    {/* INTELLECTUAL PROPERTY */}
                    <SushiSplitCard
                        theme={StorefrontTheme}
                        title="Intellectual Property"
                        serviceSide={{
                            title: "Global IP Architecture",
                            description: "Defensive strategy for international brands.",
                        }}
                        productSide={{
                            title: "Auto-Trademark Filing",
                            description: "Secure your brand identity in minutes.",
                            codeLabel: "BrandGuard"
                        }}
                    />

                    {/* BUSINESS FORMATION */}
                    <SushiSplitCard
                        theme={StorefrontTheme}
                        title="Business Formation"
                        serviceSide={{
                            title: "Complex Entity Structuring",
                            description: "Tax-optimized architecture for scaling ventures.",
                        }}
                        productSide={{
                            title: "LLC Launch Protocol",
                            description: "50-state compliant formation engine.",
                            codeLabel: "Entity_OS"
                        }}
                    />

                    {/* ELDER LAW */}
                    <SushiSplitCard
                        theme={StorefrontTheme}
                        title="Elder Law"
                        serviceSide={{
                            title: "Medicaid Crisis Planning",
                            description: "Urgent asset protection strategies.",
                        }}
                        productSide={{
                            title: "Eligibility Calculator",
                            description: "Determine your benefits status instantly.",
                            codeLabel: "Care_Kernel"
                        }}
                    />

                    {/* DIGITAL ASSETS */}
                    <SushiSplitCard
                        theme={StorefrontTheme}
                        title="Digital Assets"
                        serviceSide={{
                            title: "Key Succession Counsel",
                            description: "Recovering locked assets and cold storage.",
                        }}
                        productSide={{
                            title: "Dead Man's Switch",
                            description: "Automated crypto-access transfer protocol.",
                            codeLabel: "Vault_API"
                        }}
                    />

                    {/* REAL ESTATE */}
                    <SushiSplitCard
                        theme={StorefrontTheme}
                        title="Real Estate"
                        serviceSide={{
                            title: "Commercial Closing",
                            description: "Complex deal structuring and diligence.",
                        }}
                        productSide={{
                            title: "Deed Generator",
                            description: "Transfer property titles automatically.",
                            codeLabel: "Prop_Tech"
                        }}
                    />
                </div>

            </div>
        </V2PageWrapper>
    );
};

export default PracticeIndex;
