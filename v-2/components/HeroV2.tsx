import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

/**
 * HeroV2: Hybrid-Mondrian Hero Section
 * 
 * KEY CHANGES FROM ORIGINAL:
 * - Deep Navy (#0A2342) grid lines instead of black
 * - 4px border width (Mondrian standard)
 * - Cormorant Garamond for main headline (The Artist)
 * - JetBrains Mono for CTA buttons (The Engineer)
 * - Navy/Gold/Venetian Red color blocks (not primary RGB)
 * - Grid line "drawing" animation on load
 */

const HeroV2 = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const video Ref = useRef<HTMLVideoElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    // Parallax scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (heroRef.current && videoRef.current) {
                const scrollY = window.scrollY;
                const offset = scrollY * 0.15;
                videoRef.current.style.transform = `translateX(${offset}px)`;
                const opacity = Math.max(0.6, 1 - (scrollY * 0.002));
                videoRef.current.style.opacity = opacity.toString();
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Grid line drawing animation on mount
    useEffect(() => {
        const grid = gridRef.current;
        if (grid) {
            // Trigger animation by adding class
            setTimeout(() => {
                grid.classList.add('grid-drawn');
            }, 100);
        }
    }, []);

    return (
        <div className="relative border-b-4 border-mondrian-navy" ref={heroRef}>
            {/* Video container - full height */}
            <div className="h-screen overflow-hidden relative">
                {/* Video with parallax effect */}
                <div className="absolute inset-0 w-[120%] h-full overflow-hidden">
                    <video
                        ref={videoRef}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute top-0 left-0 w-full h-full object-cover transition-transform"
                    >
                        <source src="/videos/legal-craftsmanship.mp4" type="video/mp4" />
                    </video>

                    {/* HYBRID-MONDRIAN GRID OVERLAY */}
                    <div
                        ref={gridRef}
                        className="absolute inset-0 grid-lines"
                    >
                        {/* Vertical lines - Deep Navy at 4px */}
                        <div className="absolute top-0 left-1/4 h-full w-1 bg-mondrian-navy/80 grid-line-vertical"></div>
                        <div className="absolute top-0 right-1/3 h-full w-1 bg-mondrian-navy/80 grid-line-vertical"></div>

                        {/* Horizontal lines */}
                        <div className="absolute top-1/3 left-0 right-0 h-1 bg-mondrian-navy/80 grid-line-horizontal"></div>
                        <div className="absolute bottom-1/4 left-0 right-0 h-1 bg-mondrian-navy/80 grid-line-horizontal"></div>

                        {/* Mondrian Color Blocks - Navy/Gold/Red palette */}
                        <div className="absolute top-0 left-0 w-1/5 h-1/3 bg-mondrian-red/25"></div>
                        <div className="absolute bottom-0 right-0 w-1/4 h-1/2 bg-mondrian-navy/30"></div>
                        <div className="absolute top-1/3 right-1/4 w-1/6 h-1/4 bg-mondrian-gold/25"></div>
                    </div>

                    {/* Dark overlay for text readability */}
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>
            </div>

            {/* Mondrian accent strip below hero */}
            <div className="h-4 w-full flex border-t-4 border-mondrian-navy">
                <div className="w-1/5 bg-mondrian-red border-r-4 border-mondrian-navy"></div>
                <div className="w-2/5 bg-white border-r-4 border-mondrian-navy"></div>
                <div className="w-1/5 bg-mondrian-navy border-r-4 border-mondrian-navy"></div>
                <div className="w-1/5 bg-mondrian-gold"></div>
            </div>

            {/* Content overlay - THE BINARY LAWYER typography */}
            <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-8">
                    <div className="max-w-3xl">
                        {/* Headline: Cormorant Garamond (The Artist) */}
                        <h1 className="font-serif text-4xl md:text-6xl text-white mb-6 font-bold tracking-tight reveal">
                            Family Values, <br />
                            <span className="text-mondrian-gold">Future-Forward</span> Legal Solutions
                        </h1>

                        {/* Subheader: Inter (The Bridge) */}
                        <p className="font-sans text-xl text-white/80 mb-8 reveal" style={{ transitionDelay: '0.1s' }}>
                            Sophisticated legal strategies with personal attention, powered by innovative technology.
                        </p>

                        {/* CTA Buttons - Binary style */}
                        <div className="flex flex-col md:flex-row gap-4 mb-12 reveal" style={{ transitionDelay: '0.2s' }}>
                            {/* Primary: Engineer/Execute style (JetBrains Mono) */}
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center px-8 py-3 
                         font-mono text-lg tracking-wide
                         bg-mondrian-gold text-mondrian-navy
                         border-4 border-mondrian-navy
                         hover:bg-mondrian-navy hover:text-mondrian-gold hover:border-mondrian-gold
                         transition-all duration-75
                         shadow-[4px_4px_0px_0px_rgba(10,35,66,1)]
                         hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]"
                            >
                                &gt; SCHEDULE_CONSULTATION <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>

                            {/* Secondary: Counsel/Traditional style (Cormorant Garamond) */}
                            <Link
                                to="/experience-the-difference"
                                className="inline-flex items-center justify-center px-8 py-3 
                         font-serif text-lg italic
                         text-white border-4 border-white 
                         hover:bg-white/10
                         transition-all duration-75"
                            >
                                Our Approach
                            </Link>
                        </div>

                        {/* 30 year badge - Mondrian accent */}
                        <div className="relative mt-8 ml-2 reveal border-l-4 border-mondrian-red" style={{ transitionDelay: '0.2s' }}>
                            <p className="text-white text-lg pl-4 py-1 font-sans">
                                <span className="font-semibold">Established 1994</span> — <span className="text-mondrian-gold font-bold">30 years</span> of legal excellence
                            </p>
                        </div>

                        {/* Scroll indicator */}
                        <div className="mt-12 reveal flex items-center" style={{ transitionDelay: '0.3s' }}>
                            <div className="h-1 w-8 bg-mondrian-gold"></div>
                            <span className="text-white/70 text-sm font-mono pl-2 tracking-wide">scroll_to_explore()</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* CSS for grid line drawing animation */}
            <style jsx>{`
        /* Grid lines start at 0 size */
        .grid-lines .grid-line-vertical {
          width: 0;
          transition: width 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .grid-lines .grid-line-horizontal {
          height: 0;
          transition: height 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        /* When grid is "drawn", expand to full size */
        .grid-lines.grid-drawn .grid-line-vertical {
          width: 4px;
        }
        
        .grid-lines.grid-drawn .grid-line-horizontal {
          height: 4px;
        }
        
        /* Reveal animation for content */
        .reveal {
          opacity: 0;
          transform: translateY(20px);
          animation: reveal-in 0.8s ease forwards;
        }
        
        @keyframes reveal-in {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </div>
    );
};

export default HeroV2;
