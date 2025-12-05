import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Terminal, Scale } from 'lucide-react';

/**
 * HeroV2: "The Art of Engineering" - Structural Mondrian Grid
 * 
 * Based on Design Spec 2.2:
 * - 12-Column CSS Grid
 * - Cols 1-7: The Statement (White Block, Cormorant Garamond)
 * - Cols 8-12: The Visual (Nested Grid of Navy/Gold/Red)
 * - "Drawing" grid lines animation
 */

const HeroV2 = () => {
    const [typedCode, setTypedCode] = useState('');
    const fullCode = "const justice = new Law.Builder()\n  .withValues('FAMILY')\n  .withTech('AI_CORE')\n  .build();";

    // Typing animation for the code snippet
    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setTypedCode(fullCode.substring(0, i));
            i++;
            if (i > fullCode.length) clearInterval(interval);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full min-h-screen bg-mondrian-navy pt-20 md:pt-24 pb-8 px-4 md:px-8 flex flex-col justify-center">

            {/* THE MASTER GRID - 12 Columns */}
            <div className="max-w-[1800px] mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-0 border-4 border-mondrian-navy bg-mondrian-navy shadow-[16px_16px_0px_0px_#0A2342]">

                {/* === COLS 1-7: THE STATEMENT (The Artist) === */}
                <div className="col-span-1 md:col-span-7 bg-white p-8 md:p-16 flex flex-col justify-center relative min-h-[60vh] border-b-4 md:border-b-0 md:border-r-4 border-mondrian-navy">
                    {/* Decorative Mondrian accent in top left */}
                    <div className="absolute top-0 left-0 w-24 h-24 border-r-4 border-b-4 border-mondrian-navy bg-mondrian-red"></div>

                    <div className="relative z-10 mt-12">
                        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-mondrian-navy leading-[0.9] tracking-tight mb-8">
                            The Intersection of <br />
                            <span className="italic text-mondrian-gold">Art</span>, Law, <br />
                            and <span className="font-mono text-4xl md:text-6xl text-mondrian-navy opacity-80">Code</span>.
                        </h1>

                        <p className="font-sans text-xl md:text-2xl text-gray-600 max-w-xl mb-12 leading-relaxed">
                            We don't just practice law; we engineer outcomes.
                            Merging traditional legal counsel with the precision of modern technology.
                        </p>

                        <div className="flex flex-wrap gap-6">
                            <Link
                                to="/contact"
                                className="group relative inline-flex items-center justify-center px-8 py-4 
                         bg-mondrian-navy text-white font-mono text-lg
                         border-4 border-mondrian-navy overflow-hidden
                         hover:text-mondrian-gold transition-colors duration-200"
                            >
                                <span className="relative z-10 flex items-center">
                                    &gt; EXECUTE_STRATEGY <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                                {/* Hover fill effect */}
                                <div className="absolute inset-0 bg-black transform translate-y-full group-hover:translate-y-0 transition-transform duration-200 ease-out"></div>
                                from {width: 0; height: 0; }
                                to {width: 100%; height: 100%; }
        }
      `}</style>
                        </div>
                        );
};

                        export default HeroV2;
