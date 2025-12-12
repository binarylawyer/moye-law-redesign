import React from 'react';
import SushiVideoHero from './components/layout/SushiVideoHero';
import MondrianHero from './components/layout/MondrianHero';
import BinaryBio from './components/content/BinaryBio';
import SushiSplitCard from './components/SushiSplitCard';
import MondrianStats from './components/content/MondrianStats';
import ExecuteCTA from './components/layout/ExecuteCTA';
import LegalExhibit from './components/content/LegalExhibit';
import TechnicalProcess from './components/layout/TechnicalProcess';
import FeatureGrid from './components/layout/FeatureGrid';
import TerminalFooter from './components/layout/TerminalFooter';
import { StorefrontTheme } from './theme/themes';
import { Box, Scale, FileText } from 'lucide-react';

const MondrianKit: React.FC = () => {
    return (
        <div className="bg-white min-h-screen font-sans">
            {/* -----------------------------------------------------------------
                SECTION 1: VIDEO HERO
                ----------------------------------------------------------------- */}
            <section id="kit-section-1" className="relative">
                <div className="absolute top-4 left-4 z-50 bg-black/50 text-white px-2 text-xs font-mono border border-white/50">
                    1. Video Hero (Parallax)
                </div>
                {/* Keeping existing Section 1 content */}
                <SushiVideoHero
                    title="The Art of Engineering"
                    subtitle="Where rigorous legal strategy meets the precision of code."
                    heightClass="h-[80vh]"
                    primaryAction={{ label: "Initialize Strategy", path: "/contact" }}
                    secondaryAction={{ label: "View System", path: "/about" }}
                />
            </section>

            {/* -----------------------------------------------------------------
                SECTION 2: MONDRIAN HERO (Static/Structural)
                ----------------------------------------------------------------- */}
            <section id="kit-section-2" className="relative">
                <div className="absolute top-0 left-0 bg-navy text-white px-2 py-1 text-xs font-mono z-10">
                    2. Structural Hero (Asymmetrical)
                </div>
                <MondrianHero />
            </section>

            {/* -----------------------------------------------------------------
                SECTION 3: PAIRED SERVICE GRID (The Domino)
                 ----------------------------------------------------------------- */}
            <section id="kit-section-3" className="py-24 bg-gray-50 border-b-4 border-navy relative">
                <div className="absolute top-0 left-0 bg-navy text-white px-2 py-1 text-xs font-mono">
                    3. Paired Services (Domino)
                </div>
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-4xl text-navy">The Paired Service Model</h2>
                        <p className="font-sans text-gray-500 mt-4 max-w-2xl mx-auto">Choose your level of engagement. Automated product speed or bespoke counsel depth.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <SushiSplitCard
                            theme={StorefrontTheme}
                            title="Estate Planning"
                            topContent={{
                                title: "Legacy Strategy",
                                description: "Comprehensive multi-generational wealth transfer planning for complex estates.",
                                icon: <Scale className="w-8 h-8" />
                            }}
                            bottomContent={{
                                title: "Basic Will Generator",
                                description: "Instant document creation for simple estates.",
                                codeLabel: "Legacy_OS v1.0"
                            }}
                        />
                        {/* Card 2 */}
                        <SushiSplitCard
                            theme={StorefrontTheme}
                            title="Intellectual Property"
                            topContent={{
                                title: "IP Strategy Counsel",
                                description: "Strategic defense of your brand and creative assets in global markets.",
                                icon: <FileText className="w-8 h-8" />
                            }}
                            bottomContent={{
                                title: "Trademark Bot",
                                description: "Automated filing and monitoring system.",
                                codeLabel: "Brand_Guard_AI"
                            }}
                        />
                        {/* Card 3 */}
                        <SushiSplitCard
                            theme={StorefrontTheme}
                            title="Business Formation"
                            topContent={{
                                title: "Corporate Governance",
                                description: "Structuring your entity for scale, investment, and long-term exit.",
                                icon: <Box className="w-8 h-8" />
                            }}
                            bottomContent={{
                                title: "LLC Launcher",
                                description: "50-state compliant formation in minutes.",
                                codeLabel: "Inc_Protocol"
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* -----------------------------------------------------------------
                SECTION 4: BINARY BIO TOGGLE (Hover)
                 ----------------------------------------------------------------- */}
            <section id="kit-section-4" className="relative">
                <div className="absolute top-0 left-0 bg-gold text-navy px-2 py-1 text-xs font-mono z-10">
                    4. Binary Bio (Hover Toggle)
                </div>
                <BinaryBio />
            </section>

            {/* -----------------------------------------------------------------
                SECTION 5: HARD DATA STATS
                 ----------------------------------------------------------------- */}
            <section id="kit-section-5" className="relative">
                <div className="absolute top-0 left-0 bg-navy text-white px-2 py-1 text-xs font-mono z-10">
                    5. Hard Data Stats
                </div>
                <MondrianStats />
            </section>

            {/* -----------------------------------------------------------------
                SECTION 6: CLIENT VOICES (Exhibits)
                 ----------------------------------------------------------------- */}
            <section id="kit-section-6" className="relative">
                <div className="absolute top-0 left-0 bg-gold text-navy px-2 py-1 text-xs font-mono z-10">
                    6. Client Exhibits
                </div>
                <LegalExhibit />
            </section>

            {/* -----------------------------------------------------------------
                SECTION 7: PROCESS SCHEMATIC (Manufacturing)
                 ----------------------------------------------------------------- */}
            <section id="kit-section-7" className="relative">
                <div className="absolute top-0 left-0 bg-white text-navy px-2 py-1 text-xs font-mono z-10">
                    7. Manufacturing Process
                </div>
                <TechnicalProcess />
            </section>

            {/* -----------------------------------------------------------------
                SECTION 8: EXECUTE CTA
                 ----------------------------------------------------------------- */}
            <section id="kit-section-8" className="relative">
                <div className="absolute top-0 left-0 bg-gold text-navy px-2 py-1 text-xs font-mono z-10">
                    8. Execute CTA
                </div>
                <ExecuteCTA />
            </section>

            {/* -----------------------------------------------------------------
                SECTION 9: FEATURE MATRIX (Bento)
                 ----------------------------------------------------------------- */}
            <section id="kit-section-9" className="relative">
                <div className="absolute top-0 left-0 bg-navy text-white px-2 py-1 text-xs font-mono z-10">
                    9. Feature Grid (Bento)
                </div>
                <FeatureGrid />
            </section>

            {/* -----------------------------------------------------------------
                SECTION 10: TERMINAL FOOTER
                 ----------------------------------------------------------------- */}
            <section id="kit-section-10" className="relative">
                <div className="absolute top-0 left-0 bg-emerald-500 text-navy px-2 py-1 text-xs font-mono z-10">
                    10. Terminal Footer
                </div>
                <TerminalFooter />
            </section>

        </div>
    );
};

export default MondrianKit;
