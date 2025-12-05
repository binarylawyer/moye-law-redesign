import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PracticeCardV2Props {
    title: string;
    description: string;
    icon: React.ReactNode;
    path: string;
}

/**
 * PracticeCardV2: Brutalist Mondrian Style
 * 
 * Features:
 * - 4px Deep Navy Border
 * - 0px Border Radius
 * - "Brutalist Shadow": 8px hard offset (no blur)
 * - Hover Effect: Card snaps down to cover the shadow (mechanical feel)
 */
const PracticeCardV2: React.FC<PracticeCardV2Props> = ({
    title,
    description,
    icon,
    path
}) => {
    return (
        <Link
            to={path}
            className="group block relative bg-white border-4 border-mondrian-navy 
                 shadow-[8px_8px_0px_0px_#0A2342] 
                 hover:shadow-[0px_0px_0px_0px_#0A2342] 
                 hover:translate-x-[4px] hover:translate-y-[4px] 
                 transition-all duration-150 ease-out"
        >
            <div className="p-8 h-full flex flex-col">
                {/* Header: Icon + Arrow */}
                <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-mondrian-grey border-2 border-mondrian-navy text-mondrian-navy">
                        {icon}
                    </div>
                    <ArrowUpRight className="w-6 h-6 text-mondrian-navy opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
                </div>

                {/* Content */}
                <h3 className="font-serif text-2xl font-bold text-mondrian-navy mb-3 group-hover:text-mondrian-gold transition-colors">
                    {title}
                </h3>

                <p className="font-sans text-gray-600 leading-relaxed flex-grow">
                    {description}
                </p>

                {/* Footer: Technical Spec Tag */}
                <div className="mt-6 pt-4 border-t-2 border-mondrian-grey group-hover:border-mondrian-gold/30 transition-colors">
                    <span className="font-mono text-xs text-mondrian-navy/60 uppercase tracking-wider">
                        MODULE_TYPE: SERVICE
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default PracticeCardV2;
