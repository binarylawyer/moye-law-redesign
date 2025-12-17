import React from 'react';

type Intensity = 'low' | 'medium' | 'high';

interface MondrianGridWrapperProps {
    children: React.ReactNode;
    intensity?: Intensity;
    className?: string;
}

/**
 * MondrianGridWrapper: The "Color Injector"
 * 
 * Purpose:
 * Surrounds minimal/clean content with a grid of decorative Mondrian blocks.
 * This allows us to keep the core components (cards, text) legible and "High-End"
 * while infusing the "Busy" artistic feel the user wants in the negative space.
 * 
 * Logic:
 * - Uses CSS Grid to create a 12-column structure
 * - Randomly (deterministically) places colored blocks in the margins or gutters
 */
const MondrianGridWrapper: React.FC<MondrianGridWrapperProps> = ({
    children,
    intensity = 'medium',
    className = ''
}) => {

    // Decorative Blocks based on intensity
    // Low: Corners only
    // Medium: Sides and corners
    // High: Internal dividers and extra blocks

    return (
        <div className={`relative w-full border-b-4 border-mondrian-navy ${className}`}>

            {/* LEFT BORDER DECORATION */}
            <div className="absolute left-0 top-0 bottom-0 w-4 bg-mondrian-navy z-20 hidden md:block" />

            <div className="grid grid-cols-1 md:grid-cols-12 min-h-[300px]">

                {/* === LEFT GUTTER (The "Art" Strip) === */}
                {/* Visible only on desktop to create asymmetry */}
                <div className="hidden md:flex col-span-1 flex-col border-r-4 border-mondrian-navy">
                    {intensity === 'high' && (
                        <div className="h-32 bg-mondrian-red border-b-4 border-mondrian-navy" />
                    )}
                    <div className="flex-grow bg-white" />
                    <div className="h-24 bg-mondrian-gold border-t-4 border-mondrian-navy" />
                    {intensity !== 'low' && (
                        <div className="h-16 bg-mondrian-navy border-t-4 border-mondrian-navy" />
                    )}
                </div>

                {/* === MAIN CONTENT AREA === */}
                <div className="col-span-1 md:col-span-10 relative">

                    {/* Top Decorative Strip (Mobile Only) */}
                    <div className="md:hidden h-4 flex border-b-4 border-mondrian-navy">
                        <div className="w-1/3 bg-mondrian-red border-r-4 border-mondrian-navy" />
                        <div className="w-1/3 bg-mondrian-gold border-r-4 border-mondrian-navy" />
                        <div className="w-1/3 bg-mondrian-navy" />
                    </div>

                    {/* THE CONTENT */}
                    <div className="h-full bg-white relative z-10">
                        {children}
                    </div>

                    {/* Overlay Grid Lines (Optional "Busy" Texture) */}
                    {intensity === 'high' && (
                        <div className="absolute top-0 right-12 bottom-0 w-1 bg-mondrian-navy/10 pointer-events-none z-20" />
                    )}
                </div>

                {/* === RIGHT GUTTER (The "Balance" Strip) === */}
                <div className="hidden md:flex col-span-1 flex-col border-l-4 border-mondrian-navy">
                    <div className="h-48 bg-white border-b-4 border-mondrian-navy" />
                    {intensity === 'high' ? (
                        <div className="h-64 bg-mondrian-grey border-b-4 border-mondrian-navy" />
                    ) : (
                        <div className="h-24 bg-mondrian-navy border-b-4 border-mondrian-navy" />
                    )}
                    <div className="flex-grow bg-mondrian-grey" />
                    <div className="h-12 bg-mondrian-red border-t-4 border-mondrian-navy" />
                </div>

            </div>

            {/* BOTTOM BORDER DECORATION */}
            {/* A final strip of color to close the section */}
            {intensity !== 'low' && (
                <div className="h-4 flex border-t-0">
                    <div className="w-3/4 bg-mondrian-navy" />
                    <div className="w-1/4 bg-mondrian-gold border-l-4 border-mondrian-navy" />
                </div>
            )}
        </div>
    );
};

export default MondrianGridWrapper;
