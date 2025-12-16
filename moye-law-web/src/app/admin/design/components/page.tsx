"use client";

import HeroV2 from "@/components/layout/HeroV2";
import SplitServiceCard from "@/components/content/SplitServiceCard";
import { V2PersonaSelection } from '@/components/contact/V2PersonaSelection';

export default function ComponentsLibrary() {
    return (
        <div className="space-y-12">
            <div>
                <h1 className="font-display text-4xl text-navy mb-4">Component Library</h1>
                <p className="font-sans text-lg text-gray-600">
                    The atomic units of the Moye Law interface.
                </p>
            </div>

            <section>
                <h2 className="font-mono text-sm font-bold text-gray-400 uppercase tracking-widest mb-6 pb-2 border-b border-gray-200">
                    01. Hero Unit (Kinetic)
                </h2>
                <div className="border border-gray-200 overflow-hidden scaled-preview">
                    {/* Render the Hero as a preview - scaled down or full width */}
                    <div className="relative transform-gpu origin-top-left scale-[0.6] w-[166%] h-[900px] pointer-events-none">
                        {/* Note: In a real style guide we might use iframes or special wrappers. For now, direct embedding. */}
                        <HeroV2 />
                    </div>
                </div>
            </section>

            <section>
                <h2 className="font-mono text-sm font-bold text-gray-400 uppercase tracking-widest mb-6 pb-2 border-b border-gray-200">
                    02. The Domino Card
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <SplitServiceCard
                        title="Estate Planning"
                        serviceTitle="Private Client Strategy"
                        serviceDesc="Legacy planning for high-net-worth portfolios."
                        productTitle="Will & Trust Generator"
                        productDesc="Instant, attorney-verified documents."
                    />
                    <div className="p-8 bg-gray-50 font-mono text-xs text-gray-500">
                        &lt;SplitServiceCard /&gt;<br />
                        Takes separate Service (Top) and Product (Bottom) props.<br />
                        Implements the "Factory to Storefront" concept.
                    </div>
                </div>
            </section>

            <section>
                <h2 className="font-mono text-sm font-bold text-gray-400 uppercase tracking-widest mb-6 pb-2 border-b border-gray-200">
                    03. Interaction Elements
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Persona Selector Preview */}
                    <div className="border-4 border-navy p-6">
                        <V2PersonaSelection onSelect={() => { }} />
                    </div>
                </div>
            </section>

        </div>
    )
}
