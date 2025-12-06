import React from "react";
import { MoveRight, Terminal, Shield, Scale, Code, Briefcase } from "lucide-react";
import PracticeCardV2 from "../components/PracticeCardV2";
import SplitServiceCard from "../components/SplitServiceCard";
import MondrianGridWrapper from "../components/MondrianGridWrapper";
import { colors, typography } from "../lib/tokens";

const DesignSystemPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-white font-sans text-mondrian-body">
            {/* Header */}
            <div className="bg-mondrian-navy text-white p-12 border-b-4 border-mondrian-gold">
                <h1 className="font-serif text-5xl mb-4">Moye Law Design System</h1>
                <p className="font-mono text-mondrian-gold tracking-wide">
                    v2.0.0 // HYBRID_MONDRIAN_ARCH
                </p>
            </div>

            <div className="max-w-7xl mx-auto p-12 space-y-24">

                {/* SECTION 1: THE TRINITY CONCEPTS */}
                <section className="space-y-8">
                    <h2 className="font-serif text-4xl text-mondrian-navy border-b-4 border-mondrian-navy inline-block pb-2">
                        1. The Ecosystem Trinity
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* The Factory */}
                        <div className="border-4 border-mondrian-grey bg-mondrian-grey p-8 relative group">
                            <div className="absolute top-0 right-0 p-2 bg-mondrian-navy text-white font-mono text-xs">FACTORY</div>
                            <Code className="w-12 h-12 text-mondrian-navy mb-4" />
                            <h3 className="font-mono text-xl text-mondrian-navy mb-2">Sushi Kitchen</h3>
                            <p className="font-mono text-sm text-gray-600 mb-4">"The FinTech Core"</p>
                            <p className="text-sm">Raw, industrial, efficient. The backend engine that powers automation.</p>
                            <div className="mt-4 p-4 bg-white border border-gray-300 font-mono text-xs">
                                $ build legacy_os<br />
                                {'>'} compiling assets...<br />
                                {'>'} ready.
                            </div>
                        </div>

                        {/* The Storefront */}
                        <div className="border-4 border-mondrian-navy bg-white p-8 relative">
                            <div className="absolute top-0 right-0 p-2 bg-mondrian-gold text-mondrian-navy font-bold font-serif text-xs">STOREFRONT</div>
                            <Scale className="w-12 h-12 text-mondrian-navy mb-4" />
                            <h3 className="font-serif text-2xl text-mondrian-navy mb-2">Moye Law</h3>
                            <p className="font-sans text-sm text-gray-600 mb-4">"The Bank Branch"</p>
                            <p className="text-sm">Trusted, clean, accessible. The seamless blend of high-tech efficiency and human counsel.</p>
                            <div className="mt-4 flex gap-2">
                                <button className="bg-mondrian-navy text-white px-4 py-2 font-mono text-xs hover:bg-mondrian-gold transition-colors">Client Portal</button>
                                <button className="border-2 border-mondrian-navy text-mondrian-navy px-4 py-2 font-serif italic text-sm">Consultation</button>
                            </div>
                        </div>

                        {/* The Builder */}
                        <div className="border-4 border-mondrian-navy bg-mondrian-navy p-8 relative">
                            <div className="absolute top-0 right-0 p-2 bg-mondrian-red text-white font-mono text-xs">BUILDER (IP)</div>
                            <Shield className="w-12 h-12 text-mondrian-gold mb-4" />
                            <h3 className="font-serif text-2xl text-white mb-2">Sushi Legal</h3>
                            <p className="font-mono text-sm text-mondrian-gold mb-4">"The Bank Charter"</p>
                            <p className="text-sm text-gray-300">The IP holder. Secure, regulatory, foundational. Certified products.</p>
                        </div>
                    </div>
                </section>

                {/* SECTION 2: PALETTE & TYPOGRAPHY */}
                <section className="space-y-8">
                    <h2 className="font-serif text-4xl text-mondrian-navy border-b-4 border-mondrian-navy inline-block pb-2">
                        2. Visual Language
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="font-mono text-lg text-gray-500 mb-4">THE PALETTE</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-24 h-24 bg-mondrian-navy border-2 border-black"></div>
                                    <div>
                                        <p className="font-bold text-mondrian-navy">Deep Navy (#0A2342)</p>
                                        <p className="text-sm text-gray-600">The Structure. Authority. The Grid.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-24 h-24 bg-mondrian-gold border-2 border-black"></div>
                                    <div>
                                        <p className="font-bold text-mondrian-navy">Warm Gold (#C99D56)</p>
                                        <p className="text-sm text-gray-600">The Value. Luxury. CTAs.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-24 h-24 bg-mondrian-grey border-2 border-black"></div>
                                    <div>
                                        <p className="font-bold text-mondrian-navy">Cool Grey (#F3F4F6)</p>
                                        <p className="text-sm text-gray-600">The Machine. Product Areas.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-mono text-lg text-gray-500 mb-4">THE TYPOGRAPHY</h3>
                            <div className="space-y-8 border-l-4 border-mondrian-gold pl-8">
                                <div>
                                    <p className="font-serif text-5xl text-mondrian-navy leading-tight">
                                        The Artist speaks in Serif.
                                    </p>
                                    <p className="font-mono text-xs text-gray-400 mt-2">font-family: Cormorant Garamond</p>
                                </div>
                                <div>
                                    <p className="font-mono text-2xl text-mondrian-navy">
                                        The Engineer speaks in Mono.
                                    </p>
                                    <p className="font-mono text-xs text-gray-400 mt-2">font-family: JetBrains Mono</p>
                                </div>
                                <div>
                                    <p className="font-sans text-lg text-gray-700 max-w-md">
                                        The Bridge speaks in Sans. Used for long form content and readability across the site.
                                    </p>
                                    <p className="font-mono text-xs text-gray-400 mt-2">font-family: Inter</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 3: COMPONENT SHOWCASE */}
                <section className="space-y-8">
                    <h2 className="font-serif text-4xl text-mondrian-navy border-b-4 border-mondrian-navy inline-block pb-2">
                        3. The Components (Storefront vs Factory)
                    </h2>

                    {/* WET BOT SHOWCASE */}
                    <MondrianGridWrapper intensity="medium">
                        <div className="bg-mondrian-grey/10 p-12">
                            <div className="mb-8 text-center">
                                <h3 className="font-serif text-3xl text-mondrian-navy">The "Paired" Service Card</h3>
                                <p className="text-gray-600">Demonstrating the retail "Split" model.</p>
                            </div>

                            <div className="max-w-4xl mx-auto">
                                <SplitServiceCard
                                    title="Estate Planning"
                                    serviceTitle="Custom Strategy"
                                    productTitle="WET Bot"
                                    serviceDesc="Protecting your legacy with precision and empathy."
                                    productDesc="Automated Wills, Trusts & Estates monitoring system. Powered by Sushi Kitchen."
                                />
                            </div>
                        </div>
                    </MondrianGridWrapper>

                    {/* BRUTALIST CARDS */}
                    <div className="space-y-8">
                        <h3 className="font-serif text-3xl text-mondrian-navy">Practice Cards (The Brutalist Shadow)</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 bg-gray-50">
                            <PracticeCardV2
                                title="Intellectual Property"
                                description="Securing the assets of the future."
                                icon={<Shield className="w-6 h-6" />}
                                path="#"
                            />
                            <PracticeCardV2
                                title="Art Law"
                                description="Protecting creativity in a digital age."
                                icon={<Scale className="w-6 h-6" />}
                                path="#"
                            />
                            <PracticeCardV2
                                title="Corporate General Counsel"
                                description="Strategic advice for scale."
                                icon={<Briefcase className="w-6 h-6" />}
                                path="#"
                            />
                        </div>
                    </div>

                </section>

            </div>
        </div>
    );
};

export default DesignSystemPage;
