import React from 'react';
import { ArrowRight, Box, Terminal } from 'lucide-react';
import { SushiTheme } from '../theme/types';

interface SushiSplitCardProps {
    theme: SushiTheme;
    title: string; // The overarching practice area (e.g. Estate Planning)

    // LEFT SIDE: The Factory / Product (Engineering)
    productSide: {
        title: string;
        description: string;
        codeLabel: string;
    };

    // RIGHT SIDE: The Storefront / Service (Counsel)
    serviceSide: {
        title: string;
        description: string;
        icon?: React.ReactNode;
    };
}

const SushiSplitCard: React.FC<SushiSplitCardProps> = ({
    theme,
    title,
    productSide,
    serviceSide
}) => {
    return (
        <div
            className="w-full h-full flex flex-col lg:flex-row border-4 border-navy shadow-[8px_8px_0px_0px_#0A2342] bg-white group hover:-translate-y-1 transition-transform duration-300"
        >
            {/* ------------------------------------------------------------
               LEFT CELL: THE PRODUCT (Factory)
               Spec: Cool Grey, Mono, "Deploy" CTA
               Target: Tech Innovator
               ------------------------------------------------------------ */}
            <div className="w-full lg:w-5/12 bg-[#F3F4F6] p-8 flex flex-col justify-between border-b-4 lg:border-b-0 lg:border-r-4 border-navy relative overflow-hidden">
                {/* Decorative Grid Line */}
                <div className="absolute top-0 right-8 w-[1px] h-full bg-navy/10 pointer-events-none"></div>

                <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-6">
                        <Terminal className="w-5 h-5 text-navy" />
                        <span className="bg-navy text-white text-xs px-2 py-1 font-mono uppercase tracking-widest">
                            {productSide.codeLabel}
                        </span>
                    </div>

                    <h4 className="font-mono text-xl text-navy font-bold mb-3">
                        {productSide.title}
                    </h4>

                    <p className="font-mono text-xs text-navy/70 leading-relaxed mb-6">
                        {productSide.description}
                    </p>
                </div>

                <button className="flex items-center gap-2 font-mono text-xs font-bold text-navy uppercase hover:text-gold transition-colors group/btn w-fit">
                    <span className="text-gold">&gt;</span> DEPLOY_SOLUTION
                </button>
            </div>

            {/* ------------------------------------------------------------
               RIGHT CELL: THE SERVICE (Storefront)
               Spec: White, Serif, "Consult" CTA
               Target: Caregiver / Prudent Investor
               ------------------------------------------------------------ */}
            <div className="w-full lg:w-7/12 bg-white p-8 flex flex-col justify-between relative">

                <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                        {serviceSide.icon && (
                            <div className="text-navy">{serviceSide.icon}</div>
                        )}
                        <span className="font-serif italic text-navy/40 text-lg">
                            {title}
                        </span>
                    </div>

                    <h4 className="font-display text-3xl text-navy mb-4">
                        {serviceSide.title}
                    </h4>

                    <p className="font-sans text-gray-600 leading-relaxed text-sm mb-6 max-w-sm">
                        {serviceSide.description}
                    </p>
                </div>

                <button className="flex items-center justify-between px-6 py-3 bg-white border-2 border-navy text-navy font-serif italic hover:bg-navy hover:text-white transition-colors w-full sm:w-auto self-start">
                    <span>Request Counsel</span>
                    <ArrowRight className="w-4 h-4 ml-4" />
                </button>
            </div>
        </div>
    );
};

export default SushiSplitCard;
