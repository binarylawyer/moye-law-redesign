import React from 'react';
import SushiVideoHero from './components/layout/SushiVideoHero';

const MondrianKit: React.FC = () => {
    return (
        <div className="bg-white min-h-screen font-sans">
            {/* -----------------------------------------------------------------
                SECTION 1: VIDEO HERO
                ----------------------------------------------------------------- */}
            <section id="kit-section-1" className="relative">
                <div className="absolute top-4 left-4 z-50 bg-black/50 text-white px-2 text-xs font-mono border border-white/50">
                    1. Video Hero
                </div>
                <SushiVideoHero
                    title="The Art of Engineering"
                    subtitle="Where rigorous legal strategy meets the precision of code."
                    heightClass="h-[80vh]"
                    primaryAction={{ label: "Initialize Strategy", path: "/contact" }}
                    secondaryAction={{ label: "View System", path: "/about" }}
                />
            </section>

            {/* -----------------------------------------------------------------
                SECTION 2: MONDRIAN HERO (To Be Built)
                ----------------------------------------------------------------- */}
            <section id="kit-section-2" className="py-24 border-b-4 border-navy relative bg-white">
                <div className="absolute top-0 left-0 bg-navy text-white px-2 py-1 text-xs font-mono">
                    2. Structural Hero (Asymmetrical)
                </div>
                <div className="container mx-auto px-6">
                    <div className="bg-gray-100 h-96 border-4 border-navy flex items-center justify-center text-navy/50 font-mono">
                        [ Pending Implementation: MondrianHero.tsx ]
                    </div>
                </div>
            </section>

            {/* -----------------------------------------------------------------
                SECTION 3: PAIRED SERVICE GRID (The Domino)
                 ----------------------------------------------------------------- */}
            <section id="kit-section-3" className="py-24 bg-gray-50 border-b-4 border-navy relative">
                <div className="absolute top-0 left-0 bg-navy text-white px-2 py-1 text-xs font-mono">
                    3. Paired Services (Domino)
                </div>
                <div className="container mx-auto px-6">
                    <div className="bg-white h-64 border-4 border-navy flex items-center justify-center text-navy/50 font-mono">
                        [ Pending Implementation: Paired Service Grid ]
                    </div>
                </div>
            </section>

            {/* -----------------------------------------------------------------
                SECTION 4: BINARY BIO TOGGLE (Hover)
                 ----------------------------------------------------------------- */}
            <section id="kit-section-4" className="py-24 bg-navy border-b-4 border-gold relative">
                <div className="absolute top-0 left-0 bg-gold text-navy px-2 py-1 text-xs font-mono">
                    4. Binary Bio (Hover Toggle)
                </div>
                <div className="container mx-auto px-6">
                    <div className="bg-navy-800 h-96 border border-white/20 flex items-center justify-center text-white/50 font-mono">
                        [ Pending Implementation: BinaryBio.tsx ]
                    </div>
                </div>
            </section>

            {/* -----------------------------------------------------------------
                SECTION 5: HARD DATA STATS
                 ----------------------------------------------------------------- */}
            <section id="kit-section-5" className="py-12 bg-white border-b-4 border-navy relative">
                <div className="container mx-auto px-6">
                    <div className="h-24 bg-gray-100 border-4 border-navy flex items-center justify-center text-navy/50 font-mono">
                        [ Pending Implementation: MondrianStats.tsx ]
                    </div>
                </div>
            </section>

            {/* ... More Placeholders to follow ... */}
            <div className="py-24 text-center font-mono text-gray-400">
                [ Remaining 5 Sections Loading... ]
            </div>

        </div>
    );
};

export default MondrianKit;
