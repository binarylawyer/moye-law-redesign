import React from 'react';
import NavBarV2 from '../components/NavBarV2';
import HeroV2 from '../components/HeroV2';
import SplitServiceCard from '../components/SplitServiceCard';
import PracticeCardV2 from '../components/PracticeCardV2';
import MethodologySection from '../components/MethodologySection';
import MondrianGridWrapper from '../components/MondrianGridWrapper';
import { Terminal, MoveRight } from 'lucide-react';

/**
 * LandingPage: The Annotated "Hybrid Mondrian" Assembly
 * 
 * Structure:
 * 1. Intro Blurb (Design System Explanation)
 * 2. HeroV2
 * 3. Methodology
 * 4. Service Grid (Wrapped in Mondrian Color)
 * 5. Practice Grid (Wrapped in Mondrian Color)
 * 6. Footer
 */
const LandingPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">

            {/* === 0. DESIGN SYSTEM ANNOTATION HEADER === */}
            <div className="bg-gray-900 text-gray-400 p-4 text-xs font-mono border-b border-gray-700 sticky top-0 z-50">
                <div className="container mx-auto flex justify-between items-center">
                    <span>MOYE_LAW_V2 :: HYBRID_MONDRIAN_ASSEMBLY</span>
                    <span className="hidden md:inline text-gray-500">
                        STATUS: PROTOTYPE // MODE: BUSY_BALANCE
                    </span>
                </div>
            </div>

            {/* === 1. NAVIGATION: The System Status Bar === */}
            {/* 
                ANNOTATION: 
                The Nav is no longer a floating element. It is the top row of the grid. 
                Structured, rigid, authoritative.
            */}
            <NavBarV2 />

            {/* === 2. HERO: The Binary Lawyer === */}
            {/* 
                ANNOTATION: 
                Refined Golden Ratio split. 
                Serif for the "Promise" (Left), Portrait for the "Human" (Right).
                No bright colors here—just Authority (Navy) and Luxury (Gold).
            */}
            <div className="relative">
                <div className="absolute top-4 left-4 z-40 bg-black/80 text-white p-2 text-[10px] font-mono rounded pointer-events-none opacity-50 hover:opacity-100 transition-opacity">
                    COMPONENT: HERO_V2<br />
                    SCHEME: GOLDEN_RATIO_SPLIT
                </div>
                <HeroV2 />
            </div>

            {/* === 3. METHODOLOGY: The Logic === */}
            <div className="relative">
                <div className="absolute top-4 right-4 z-40 bg-black/80 text-white p-2 text-[10px] font-mono rounded pointer-events-none opacity-50 hover:opacity-100 transition-opacity text-right">
                    COMPONENT: METHODOLOGY_SECTION<br />
                    SCHEME: CLEAN_EXPLAINER
                </div>
                <MethodologySection />
            </div>


            {/* === 4. SERVICE GRID (THE DOMINO) === */}
            {/* 
                ANNOTATION: 
                Here we infuse the "Busy" look using the MondrianGridWrapper.
                The content remains clean white/grey cards, but the FRAME is art.
            */}
            <div className="relative">
                <div className="bg-mondrian-navy text-white text-center py-4 font-mono text-sm tracking-widest border-b-4 border-mondrian-navy">
                    VV  SECTION_04: THE_ENGAGEMENT_MODELS  VV
                </div>

                <MondrianGridWrapper intensity="high" className="bg-gray-50">
                    <section className="py-20 px-6 md:px-12">
                        <div className="text-center mb-16">
                            <span className="bg-mondrian-gold text-mondrian-navy px-2 py-1 font-mono text-xs font-bold uppercase mb-4 inline-block">
                                The Dual Engine
                            </span>
                            <h2 className="font-serif text-4xl md:text-5xl text-mondrian-navy font-bold mb-4">
                                Two Ways to Engineer Legacy
                            </h2>
                            <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
                                We separate the <span className="font-serif italic text-mondrian-navy">Counsel</span> from the <span className="font-mono text-mondrian-navy bg-gray-200 px-1">Product</span>.
                                Choose the interface that fits your needs.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <SplitServiceCard
                                title="Estate Planning"
                                serviceTitle="Legacy Strategy"
                                productTitle="EstateOS_Bundle"
                                serviceDesc="Bespoke counsel for complex assets and family dynamics."
                                productDesc="Automated wills, trusts, and healthcare directives."
                            />
                            <SplitServiceCard
                                title="Business Law"
                                serviceTitle="Boardroom Counsel"
                                productTitle="Inc_Launcher_v2"
                                serviceDesc="Strategic M&A guidance and governance."
                                productDesc="LLC formation and employment agreements."
                            />
                            <SplitServiceCard
                                title="Intellectual Property"
                                serviceTitle="Brand Defense"
                                productTitle="Trademark_Bot"
                                serviceDesc="Litigation support and portfolio strategy."
                                productDesc="Automated filing and monitoring systems."
                            />
                        </div>
                    </section>
                </MondrianGridWrapper>
            </div>


            {/* === 5. PRACTICE GRID (THE BRUTALIST) === */}
            {/* 
                ANNOTATION: 
                Another infusion of Mondrian Grid. 
                Using "Medium" intensity for nice balance.
                Cards use the "Brutalist Shadow" (Hard Navy Offset).
            */}
            <div className="relative">
                <div className="bg-mondrian-navy text-white text-center py-4 font-mono text-sm tracking-widest border-b-4 border-mondrian-navy border-t-4">
                    VV  SECTION_05: THE_SPECIALTIES  VV
                </div>

                <MondrianGridWrapper intensity="medium" className="bg-white">
                    <section className="py-20 px-6 md:px-12">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b-4 border-mondrian-grey pb-8">
                            <div>
                                <h2 className="font-serif text-4xl md:text-5xl text-mondrian-navy font-bold mb-2">
                                    Core Competencies
                                </h2>
                                <p className="font-sans text-gray-600 max-w-xl">
                                    Specialized modules for the modern creator and founder.
                                </p>
                            </div>
                            <div className="hidden md:block">
                                <span className="font-mono text-xs text-mondrian-navy/50">
                                    INDEX: 01-06
                                </span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <PracticeCardV2
                                title="Art Law"
                                description="Authentication, title disputes, and gallery representation."
                                path="/practice/art-law"
                                icon={<span className="font-serif text-2xl italic">Al</span>}
                            />
                            <PracticeCardV2
                                title="Entertainment"
                                description="Production deals, talent options, and distribution rights."
                                path="/practice/entertainment"
                                icon={<span className="font-serif text-2xl italic">En</span>}
                            />
                            <PracticeCardV2
                                title="Real Estate"
                                description="Commercial acquisitions, zoning, and development."
                                path="/practice/real-estate"
                                icon={<span className="font-serif text-2xl italic">Re</span>}
                            />
                            {/* ... more cards would go here ... */}
                        </div>

                        <div className="mt-12 flex justify-center">
                            <button className="group flex items-center gap-2 px-8 py-4 border-4 border-mondrian-navy text-mondrian-navy font-mono hover:bg-mondrian-navy hover:text-white transition-colors duration-200">
                                VIEW_FULL_INDEX <MoveRight className="w-4 h-4" />
                            </button>
                        </div>
                    </section>
                </MondrianGridWrapper>
            </div>

            {/* === 6. FOOTER === */}
            <footer className="bg-mondrian-navy text-white py-20 border-t-8 border-mondrian-gold relative overflow-hidden">
                {/* Schematic Background */}
                <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'linear-gradient(#C99D56 1px, transparent 1px), linear-gradient(90deg, #C99D56 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        <div className="col-span-1 lg:col-span-2">
                            <h3 className="font-serif text-4xl mb-4">MOYE LAW</h3>
                            <p className="font-sans text-white/70 max-w-md text-lg leading-relaxed">
                                The intersection of art, law, and code. <br />
                                Engineered for the future of legacy.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-mono text-mondrian-gold mb-6 text-sm tracking-wider">CONNECT</h4>
                            <ul className="space-y-4 font-mono text-sm text-white/80">
                                <li className="hover:text-mondrian-gold cursor-pointer transition-colors">LINKEDIN</li>
                                <li className="hover:text-mondrian-gold cursor-pointer transition-colors">TWITTER_X</li>
                                <li className="hover:text-mondrian-gold cursor-pointer transition-colors">INSTAGRAM</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-mono text-mondrian-gold mb-6 text-sm tracking-wider">SYSTEM_STATUS</h4>
                            <div className="bg-black/40 p-4 border border-mondrian-gold/30 font-mono text-xs text-green-400">
                                <div className="flex justify-between mb-2">
                                    <span>API:</span>
                                    <span>ONLINE</span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span>PORTAL:</span>
                                    <span>SECURE</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>UPTIME:</span>
                                    <span>99.99%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default LandingPage;
