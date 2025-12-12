import React from 'react';
import { ArrowRight, Box, Terminal } from 'lucide-react';
import { SushiTheme } from '../theme/types';

interface SushiSplitCardProps {
    theme: SushiTheme;
    title: string; // The overarching practice area (e.g. Estate Planning)

    // PRIMARY: The Automated Product (Retail / ATM)
    productSide: {
        title: string;
        description: string;
        codeLabel: string;
        priceLabel?: string;
    };

    // UPGRADE: The Custom Service (Private Vault)
    serviceSide: {
        title: string;
        description: string;
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
            className="w-full flex flex-col border-4 border-navy shadow-[8px_8px_0px_0px_#0A2342] bg-white group hover:-translate-y-1 transition-transform duration-300 h-full"
        >
            {/* ------------------------------------------------------------
               TOP CELL: PROMINENT AUTOMATION (Retail/Product)
               Spec: White/Grey, Clean, "Start Now"
               ------------------------------------------------------------ */}
            <div className="flex-grow p-8 bg-white text-navy flex flex-col items-start justify-between min-h-[220px]">
                <div className="w-full">
                    <div className="flex items-center justify-between mb-4 w-full border-b border-navy/10 pb-4">
                        <span className="font-serif italic text-xl font-bold">{title}</span>
                        <div className="bg-gray-100 text-navy text-[10px] px-2 py-1 font-mono uppercase tracking-widest border border-navy/10 rounded-sm">
                            {productSide.codeLabel}
                        </div>
                    </div>

                    <h4 className="font-display text-3xl text-navy mb-3 leading-none">
                        {productSide.title}
                    </h4>

                    <p className="font-sans text-gray-500 text-sm leading-relaxed mb-6">
                        {productSide.description}
                    </p>
                </div>

                <button className="flex items-center gap-3 font-mono text-xs font-bold text-white bg-navy px-4 py-3 hover:bg-gold hover:text-navy transition-all uppercase tracking-wide w-full justify-center">
                    <Terminal className="w-4 h-4" />
                    <span>Launch_Automated_Protocol</span>
                </button>
            </div>

            {/* ------------------------------------------------------------
               BOTTOM STRIP: THE UPGRADE (Private Client)
               Spec: Gold/Navy, "Exclusive", "Upgrade"
               ------------------------------------------------------------ */}
            <div className="bg-[#F3F4F6] border-t-4 border-navy p-6 flex flex-col items-start gap-3 relative overflow-hidden group/upgrade cursor-pointer hover:bg-navy hover:text-white transition-colors">

                {/* Visual Texture */}
                <div className="absolute top-0 right-0 p-2 opacity-10 group-hover/upgrade:opacity-20 transition-opacity">
                    <Box className="w-12 h-12" />
                </div>

                <div className="relative z-10 w-full">
                    <p className="font-serif italic text-sm text-navy/60 group-hover/upgrade:text-gold mb-1">
                        Need higher capacity?
                    </p>
                    <div className="flex items-center justify-between w-full">
                        <span className="font-display text-lg text-navy group-hover/upgrade:text-white">
                            Upgrade to {serviceSide.title}
                        </span>
                        <ArrowRight className="w-4 h-4 text-navy group-hover/upgrade:text-gold transition-transform group-hover/upgrade:translate-x-1" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SushiSplitCard;
