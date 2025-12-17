import React from 'react';
import { ArrowRight, Check, Server, Feather, Box, Scale } from 'lucide-react';

/**
 * SplitServiceCard (The "Domino"): Vertical Split for Hybrid Mondrian
 * 
 * Based on Hybrid Mondrian Spec:
 * - Vertical Column Layout
 * - Top Half: The Store/Service (White, Serif)
 * - Bottom Half: The Factory/Product (Grey, Mono)
 * - STRICT PALETTE: Navy, Gold, White, Grey. No bright primaries.
 */

interface SplitServiceCardProps {
    title: string;          // e.g. "Estate Planning"
    serviceTitle: string;   // e.g. "Custom Strategy"
    productTitle: string;   // e.g. "LegacyOS_Bundle"
    serviceDesc: string;    // e.g. "For complex assets and family dynamics."
    productDesc: string;    // e.g. "Automated, fixed-price, rapid delivery."
}

const SplitServiceCard: React.FC<SplitServiceCardProps> = ({
    title = "Estate Planning",
    serviceTitle = "Custom Strategy",
    productTitle = "LegacyOS_Bundle",
    serviceDesc = "For complex assets and family dynamics.",
    productDesc = "Automated, fixed-price, rapid delivery."
}) => {
    return (
        <div className="w-full border-4 border-mondrian-navy shadow-[8px_8px_0px_0px_#0A2342] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_#0A2342] transition-all duration-200 group">

            {/* HEADER (The Category) */}
            <div className="bg-mondrian-navy text-white p-3 text-center border-b-4 border-mondrian-navy">
                <h3 className="font-serif text-xl italic">{title}</h3>
            </div>

            {/* TOP HALF: THE STORE (Service) */}
            <div className="bg-white p-8 border-b-4 border-mondrian-navy relative h-64 flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-12 h-12 bg-mondrian-gold/20 rounded-bl-full"></div>

                <div>
                    <Scale className="w-8 h-8 text-mondrian-navy mb-4" />
                    <h4 className="font-serif text-2xl text-mondrian-navy font-bold mb-2">{serviceTitle}</h4>
                    <p className="font-sans text-sm text-gray-600 leading-relaxed">{serviceDesc}</p>
                </div>

                <button className="text-left font-serif italic text-mondrian-navy hover:text-mondrian-gold transition-colors flex items-center mt-4">
                    Book Consultation <ArrowRight className="ml-2 w-4 h-4" />
                </button>
            </div>

            {/* BOTTOM HALF: THE FACTORY (Product) */}
            <div className="bg-mondrian-grey p-8 relative h-64 flex flex-col justify-between overflow-hidden">
                {/* Technical Grid Background */}
                <div className="absolute inset-0 opacity-5"
                    style={{ backgroundImage: 'linear-gradient(#0A2342 1px, transparent 1px), linear-gradient(90deg, #0A2342 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                </div>

                <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-4">
                        <Box className="w-6 h-6 text-mondrian-navy" />
                        <span className="font-mono text-xs bg-mondrian-navy text-white px-1">FIXED_PRICE</span>
                    </div>
                    <h4 className="font-mono text-xl text-mondrian-navy font-bold mb-2">{productTitle}</h4>
                    <p className="font-mono text-xs text-gray-600 leading-relaxed">{productDesc}</p>
                </div>

                <button className="relative z-10 w-full py-3 border-2 border-mondrian-navy bg-white font-mono text-xs text-mondrian-navy hover:bg-mondrian-navy hover:text-white transition-colors uppercase tracking-wider">
                    INITIALIZE_ORDER()
                </button>
            </div>
        </div>
    );
};

export default SplitServiceCard;
