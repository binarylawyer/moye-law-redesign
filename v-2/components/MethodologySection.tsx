import React from 'react';
import { Box, Scale, ArrowRight, Clock, Shield } from 'lucide-react';

/**
 * MethodologySection: Explaining the "Two Ways to Engage"
 * 
 * Purpose:
 * - Educate the client on the "Product vs Service" model
 * - Provide the "Why" before showing the "What"
 * - Use Mondrian grid to visually separate but connect the concepts
 */

const MethodologySection = () => {
    return (
        <section className="py-20 bg-white border-b-4 border-mondrian-navy">
            <div className="container mx-auto px-4 md:px-8">

                {/* 1. THE EXPLAINER HEADER */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <span className="font-mono text-mondrian-gold text-sm tracking-widest uppercase mb-4 block">
                        Our Methodology
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl text-mondrian-navy font-bold mb-6">
                        Two Ways to Engage. <br />
                        <span className="italic text-mondrian-blue">One Standard of Excellence.</span>
                    </h2>
                    <p className="font-sans text-xl text-gray-600 leading-relaxed">
                        We believe legal services shouldn't be "one size fits all."
                        We've engineered two distinct engagement models to match the complexity of your needs—giving you
                        <span className="font-bold text-mondrian-navy"> efficiency where possible</span> and
                        <span className="font-bold text-mondrian-navy"> depth where necessary</span>.
                    </p>
                </div>

                {/* 2. THE MONDRIAN COMPARISON GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-4 border-mondrian-navy shadow-[12px_12px_0px_0px_#0A2342]">

                    {/* LEFT: THE LAB (Product) */}
                    <div className="bg-mondrian-grey p-10 md:p-12 border-b-4 md:border-b-0 md:border-r-4 border-mondrian-navy relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-3 bg-mondrian-red"></div>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-mondrian-navy flex items-center justify-center text-white">
                                <Box className="w-6 h-6" />
                            </div>
                            <h3 className="font-serif text-3xl text-mondrian-navy font-bold">The Lab</h3>
                        </div>

                        <p className="font-sans text-lg text-gray-700 mb-8 leading-relaxed">
                            For defined, predictable legal needs. We've "productized" our expertise into streamlined workflows.
                            Think of this as high-end manufacturing: precise, efficient, and cost-effective.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="font-mono text-mondrian-red font-bold">01</span>
                                <span className="font-sans font-bold text-mondrian-navy">Fixed Pricing</span>
                            </div>
                            <p className="font-sans text-sm text-gray-600 pl-8 mb-4">Know exactly what you pay upfront. No hourly surprises.</p>

                            <div className="flex items-center gap-3">
                                <span className="font-mono text-mondrian-red font-bold">02</span>
                                <span className="font-sans font-bold text-mondrian-navy">Rapid Turnaround</span>
                            </div>
                            <p className="font-sans text-sm text-gray-600 pl-8 mb-4">Automated document generation speeds up delivery by 3x.</p>

                            <div className="flex items-center gap-3">
                                <span className="font-mono text-mondrian-red font-bold">03</span>
                                <span className="font-sans font-bold text-mondrian-navy">Tech-Driven</span>
                            </div>
                            <p className="font-sans text-sm text-gray-600 pl-8">Powered by our proprietary EstateOS and IP_Bot systems.</p>
                        </div>
                    </div>

                    {/* RIGHT: THE STUDIO (Service) */}
                    <div className="bg-white p-10 md:p-12 relative">
                        <div className="absolute top-0 left-0 w-full h-3 bg-mondrian-blue"></div>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-white border-4 border-mondrian-navy flex items-center justify-center text-mondrian-navy">
                                <Scale className="w-6 h-6" />
                            </div>
                            <h3 className="font-serif text-3xl text-mondrian-navy font-bold italic">The Studio</h3>
                        </div>

                        <p className="font-sans text-lg text-gray-700 mb-8 leading-relaxed">
                            For complex, nuanced, or high-stakes situations. This is traditional "white-shoe" legal counsel,
                            tailored specifically to your unique family dynamics or business strategy.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="font-serif italic text-mondrian-blue font-bold text-xl">i.</span>
                                <span className="font-sans font-bold text-mondrian-navy">Bespoke Strategy</span>
                            </div>
                            <p className="font-sans text-sm text-gray-600 pl-8 mb-4">Every clause crafted by hand for your specific situation.</p>

                            <div className="flex items-center gap-3">
                                <span className="font-serif italic text-mondrian-blue font-bold text-xl">ii.</span>
                                <span className="font-sans font-bold text-mondrian-navy">Deep Counsel</span>
                            </div>
                            <p className="font-sans text-sm text-gray-600 pl-8 mb-4">We act as your consigliere, advising on family and business impact.</p>

                            <div className="flex items-center gap-3">
                                <span className="font-serif italic text-mondrian-blue font-bold text-xl">iii.</span>
                                <span className="font-sans font-bold text-mondrian-navy">Relationship Focus</span>
                            </div>
                            <p className="font-sans text-sm text-gray-600 pl-8">Long-term partnership to navigate life's changes.</p>
                        </div>
                    </div>

                </div>

                {/* 3. THE BRIDGE (Connecting the two) */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center justify-center p-4 bg-mondrian-navy/5 border-2 border-mondrian-navy border-dashed">
                        <Shield className="w-6 h-6 text-mondrian-navy mr-3" />
                        <p className="font-sans text-mondrian-navy font-medium">
                            Not sure which you need? <span className="font-bold">Most clients start with a Consultation</span> and we guide them to the right fit.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default MethodologySection;
