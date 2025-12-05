import React from 'react';
import { ArrowRight, Check, Server, Feather } from 'lucide-react';

/**
 * SplitServiceCard: The "Binary Lawyer" Signature Component
 * 
 * Based on Design Spec 2.3:
 * - Heavy Navy Border Container
 * - Vertical 4px Divider
 * - Left: "The Product" (Grey, Mono, Technical)
 * - Right: "The Service" (White, Serif, Empathetic)
 */

interface SplitServiceCardProps {
    title: string;
    productTitle: string;
    serviceTitle: string;
    productFeatures: string[];
    serviceFeatures: string[];
}

const SplitServiceCard: React.FC<SplitServiceCardProps> = ({
    title = "Estate Planning",
    productTitle = "EstateOS_Bundle",
    serviceTitle = "Legacy Strategy",
    productFeatures = ["Automated Drafting", "Fixed Price: $2,500", "72h Turnaround"],
    serviceFeatures = ["Bespoke Counsel", "Family Dynamics", "Tax Strategy"]
}) => {
    return (
        <div className="w-full max-w-5xl mx-auto my-12">
            {/* Section Header */}
            <div className="mb-4 border-l-4 border-mondrian-gold pl-4">
                <h2 className="font-serif text-3xl text-mondrian-navy font-bold">{title}</h2>
            </div>

            {/* THE SPLIT CARD CONTAINER */}
            <div className="flex flex-col md:flex-row border-4 border-mondrian-navy shadow-[8px_8px_0px_0px_#0A2342]">

                {/* LEFT: THE PRODUCT (Engineering/Factory) */}
                <div className="flex-1 bg-mondrian-grey p-8 border-b-4 md:border-b-0 md:border-r-4 border-mondrian-navy relative overflow-hidden group">
                    {/* Mondrian Red Accent Bar */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-mondrian-red"></div>

                    {/* Technical background pattern */}
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Server className="w-24 h-24 text-mondrian-navy" />
                    </div>

                    <div className="relative z-10 mt-4">
                        <div className="inline-block bg-mondrian-navy text-white px-2 py-1 font-mono text-xs mb-4 border-l-4 border-mondrian-red">
              // PRODUCT_LAYER
                        </div>

                        <h3 className="font-mono text-2xl text-mondrian-navy mb-6">{productTitle}</h3>

                        <ul className="space-y-3 mb-8">
                            {productFeatures.map((feature, idx) => (
                                <li key={idx} className="flex items-center font-mono text-sm text-gray-700">
                                    <span className="text-mondrian-red mr-2">&gt;</span> {feature}
                                </li>
                            ))}
                        </ul>

                        <button className="w-full py-3 bg-white border-2 border-mondrian-navy font-mono text-mondrian-navy hover:bg-mondrian-navy hover:text-white transition-colors duration-75 text-sm uppercase tracking-wider shadow-[4px_4px_0px_0px_#E30022] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                            Initialize_Order()
                        </button>
                    </div>
                </div>

                {/* RIGHT: THE SERVICE (Art/Counsel) */}
                <div className="flex-1 bg-white p-8 relative group">
                    {/* Mondrian Blue Accent Bar */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-mondrian-blue"></div>

                    {/* Artistic background accent */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-mondrian-blue/10 rounded-bl-full"></div>

                    <div className="relative z-10 mt-4">
                        <div className="inline-block border-b-2 border-mondrian-blue text-mondrian-navy px-0 py-1 font-serif italic text-sm mb-4">
                            The Counsel Layer
                        </div>

                        <h3 className="font-serif text-3xl text-mondrian-navy mb-6 italic">{serviceTitle}</h3>

                        <ul className="space-y-3 mb-8">
                            {serviceFeatures.map((feature, idx) => (
                                <li key={idx} className="flex items-center font-sans text-gray-700">
                                    <Feather className="w-4 h-4 text-mondrian-blue mr-3" /> {feature}
                                </li>
                            ))}
                        </ul>

                        <button className="w-full py-3 bg-mondrian-navy text-white font-serif text-lg italic hover:bg-mondrian-blue hover:text-white transition-colors duration-300 border-4 border-mondrian-navy">
                            Request Consultation
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SplitServiceCard;
