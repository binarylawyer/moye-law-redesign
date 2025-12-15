import React, { useEffect } from 'react';
import V2PageWrapper from '../components/V2PageWrapper';
import MondrianHero from '../sushi-ui/components/layout/MondrianHero';
import MondrianStats from '../sushi-ui/components/content/MondrianStats';
import TechnicalProcess from '../sushi-ui/components/layout/TechnicalProcess';
import LegalExhibit from '../sushi-ui/components/content/LegalExhibit';
import BinaryBio from '../sushi-ui/components/content/BinaryBio';
import ExecuteCTA from '../sushi-ui/components/layout/ExecuteCTA';
import SushiSplitCard from '../sushi-ui/components/SushiSplitCard';
import SushiSplitCard from '../sushi-ui/components/SushiSplitCard';
import { StorefrontTheme } from '../sushi-ui/theme/themes';
import { Scale, FileText, Box, Shield, Briefcase, Key } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const HomePage: React.FC = () => {
    // Scroll to top on mount
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <V2PageWrapper
            className="pt-16 md:pt-20"
            showNav={true}
            showFooter={true}
        >
            {/* 2. THE HOOK (Hybrid Concept) */}
            <MondrianHero />

            {/* 3. THE PROOF (Data Strip) */}
            <MondrianStats />

            {/* 4. THE PAIRING (Binary Choice Services) */}
            <section id="services" className="py-24 bg-gray-50 border-b-4 border-navy relative">
                <div className="absolute top-0 left-0 bg-navy text-white px-2 py-1 text-xs font-mono">
                    System_Modules::Active
                </div>

                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <span className="font-mono text-navy text-xs tracking-[0.3em] uppercase block mb-4">
                            System Capabilities
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl text-navy">
                            Automated Intelligence. <span className="italic block mt-2 text-3xl opacity-70">Optional Human Oversight.</span>
                        </h2>
                        <p className="font-sans text-gray-500 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
                            Start with our high-velocity automated tools. If your needs exceed the algorithm, seamlessly upgrade to our private client counsel.
                        </p>
                    </div>

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
            </section>

            {/* 5. THE METHODOLOGY (Factory Process) */}
            <TechnicalProcess />

            {/* 6. THE PERSONA (Binary Lawyer) */}
            <BinaryBio />

            {/* 7. SOCIAL PROOF (Exhibits) */}
            <LegalExhibit />

            {/* 8. CONVERSION (Execute) */}
            <ExecuteCTA />

        </V2PageWrapper>
    );
};

export default HomePage;
