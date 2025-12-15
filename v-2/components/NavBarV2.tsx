import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal } from 'lucide-react';

/**
 * NavBarV2: The System Status Bar
 * 
 * Based on Hybrid Mondrian Spec:
 * - Top row of the grid (Fixed)
 * - Left: Brand (Serif) - "Family Values"
 * - Middle: Nav (Mono) - "Code/Tech"
 * - Right: Action (Navy Block) - "The Terminal"
 */

const NavBarV2 = () => {
    const navItems = [
        { name: 'Practice Areas', path: '/practice-areas' },
        { name: 'The Firm', path: '/about' },
        { name: 'Resources', path: '/resources' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b-4 border-navy h-16 md:h-20 flex items-stretch">

            {/* LEFT CELL: BRAND (The Artist) */}
            <div className="flex-shrink-0 px-6 md:px-12 flex items-center border-r-4 border-mondrian-navy bg-white hover:bg-mondrian-grey transition-colors duration-75">
                <Link to="/" className="flex flex-col justify-center">
                    <span className="font-serif text-2xl md:text-3xl font-bold text-mondrian-navy tracking-tight leading-none">
                        MOYE LAW
                    </span>
                    <span className="font-sans text-[10px] tracking-[0.2em] text-mondrian-navy/60 uppercase mt-1">
                        Est. 2024
                    </span>
                </Link>
            </div>

            {/* MIDDLE CELLS: NAVIGATION (The Engineer) */}
            <div className="flex-grow hidden md:flex items-stretch">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        to={item.path}
                        className="flex-1 flex items-center justify-center border-r-4 border-mondrian-navy 
                     font-mono text-sm tracking-wider text-mondrian-navy
                     hover:bg-mondrian-gold hover:text-mondrian-navy
                     transition-colors duration-75 uppercase"
                    >
                        {item.name}
                    </Link>
                ))}
            </div>

            {/* RIGHT CELL: ACTION (The Terminal) */}
            <div className="flex-shrink-0 w-48 md:w-64 bg-mondrian-navy flex items-center justify-center hover:bg-mondrian-gold group transition-colors duration-75 cursor-pointer border-l-4 border-mondrian-navy md:border-l-0">
                <a href="/portal" className="flex items-center gap-3">
                    <Terminal className="w-5 h-5 text-mondrian-gold group-hover:text-mondrian-navy" />
                    <div className="flex flex-col items-start">
                        <span className="font-mono text-xs text-mondrian-gold group-hover:text-mondrian-navy font-bold">
                            CLIENT_PORTAL
                        </span>
                        <span className="font-mono text-[10px] text-white/60 group-hover:text-mondrian-navy/80">
                            STATUS: ONLINE
                        </span>
                    </div>
                </a>
            </div>

            {/* MOBILE MENU TRIGGER (Visible only on mobile) */}
            <div className="md:hidden flex-grow flex items-center justify-end px-6 bg-white">
                <button className="space-y-2 group">
                    <div className="w-8 h-1 bg-mondrian-navy group-hover:bg-mondrian-gold transition-colors"></div>
                    <div className="w-8 h-1 bg-mondrian-navy group-hover:bg-mondrian-gold transition-colors"></div>
                    <div className="w-8 h-1 bg-mondrian-navy group-hover:bg-mondrian-gold transition-colors"></div>
                </button>
            </div>
        </nav>
    );
};

export default NavBarV2;
