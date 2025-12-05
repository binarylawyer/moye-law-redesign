import React from 'react';
import HeroV2 from '../components/HeroV2';

/**
 * Test page for previewing v-2 components
 * 
 * Navigate to /v2-preview to see the refined Hybrid-Mondrian components
 */

const V2PreviewPage = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* HeroV2 Component Test */}
            <HeroV2 />

            {/* Comparison Note */}
            <section className="py-16 px-8 bg-mondrian-grey">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="font-serif text-4xl font-bold text-mondrian-navy mb-6 border-l-4 border-mondrian-red pl-4">
                        v-2 Component Preview
                    </h2>
                    <div className="font-sans text-lg space-y-4">
                        <p>
                            This page showcases the refined <strong className="font-mono text-mondrian-gold">Hybrid-Mondrian</strong> components before they go live.
                        </p>

                        <div className="bg-white border-4 border-mondrian-navy p-6">
                            <h3 className="font-mono text-xl mb-4 text-mondrian-navy">Key Changes in HeroV2:</h3>
                            <ul className="space-y-2 font-sans">
                                <li className="flex items-start">
                                    <span className="text-mondrian-gold mr-2">✓</span>
                                    <span>Deep Navy (#0A2342) grid lines instead of black</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-mondrian-gold mr-2">✓</span>
                                    <span>Cormorant Garamond serif font for main headline</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-mondrian-gold mr-2">✓</span>
                                    <span>JetBrains Mono monospace for primary CTA button</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-mondrian-gold mr-2">✓</span>
                                    <span>Brutalist shadow on CTA (8px offset)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-mondrian-gold mr-2">✓</span>
                                    <span>Grid line "drawing" animation on load</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-mondrian-gold mr-2">✓</span>
                                    <span>Navy/Gold/Red Mondrian blocks (not primary RGB)</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-mondrian-navy text-white border-4 border-mondrian-gold p-6 mt-6">
                            <p className="font-serif text-lg italic">
                                "The grid is justice" - Piet Mondrian's philosophy applied to legal precision
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Components Coming Soon */}
            <section className="py-16 px-8 bg-white">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="font-mono text-2xl text-mondrian-navy mb-8">
                        &gt; COMPONENTS_IN_DEVELOPMENT
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* SplitServiceCard Preview */}
                        <div className="border-4 border-mondrian-navy p-6">
                            <h3 className="font-serif text-xl mb-2">Split Service Card</h3>
                            <p className="font-sans text-sm text-gray-600 mb-4">The signature "Product vs Service" layout</p>
                            <div className="flex gap-2">
                                <div className="flex-1 bg-mondrian-grey p-3 border-r-4 border-mondrian-navy">
                                    <p className="font-mono text-xs">Product/Factory</p>
                                </div>
                                <div className="flex-1 bg-white p-3">
                                    <p className="font-serif text-xs italic">Service/Counsel</p>
                                </div>
                            </div>
                        </div>

                        {/* NavBarV2 Preview */}
                        <div className="border-4 border-mondrian-navy p-6">
                            <h3 className="font-serif text-xl mb-2">Mondrian Navigation</h3>
                            <p className="font-sans text-sm text-gray-600 mb-4">Grid-based nav with cell highlighting</p>
                            <div className="flex border-4 border-mondrian-navy">
                                <div className="flex-1 p-2 border-r-4 border-mondrian-navy font-mono text-xs text-center">Home</div>
                                <div className="flex-1 p-2 border-r-4 border-mondrian-navy font-mono text-xs text-center bg-mondrian-gold">Services</div>
                                <div className="flex-1 p-2 font-mono text-xs text-center">Contact</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default V2PreviewPage;
