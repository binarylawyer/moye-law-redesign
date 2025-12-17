"use client";

import React from 'react';
import Link from 'next/link';
import { Terminal } from 'lucide-react';

const NavBarV2 = () => {
    const navItems = [
        { name: 'Practice Areas', path: '/practice' },
        { name: 'The Firm', path: '/firm' },
        { name: 'Resources', path: '/resources' },
        { name: 'Admin', path: '/admin/design' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b-4 border-navy h-16 md:h-20 flex items-stretch">

            {/* LEFT CELL: BRAND (The Artist) */}
            <div className="flex-shrink-0 px-6 md:px-12 flex items-center border-r-4 border-navy bg-white hover:bg-grey transition-colors duration-75">
                <Link href="/" className="flex flex-col justify-center">
                    <span className="font-display text-2xl md:text-3xl font-bold text-navy tracking-tight leading-none">
                        MOYE LAW
                    </span>
                    <span className="font-sans text-[10px] tracking-[0.2em] text-navy/60 uppercase mt-1">
                        Est. 2024
                    </span>
                </Link>
            </div>

            {/* MIDDLE CELLS: NAVIGATION (The Engineer) */}
            <div className="flex-grow hidden md:flex items-stretch">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.path}
                        className="flex-1 flex items-center justify-center border-r-4 border-navy 
                     font-mono text-sm tracking-wider text-navy
                     hover:bg-gold hover:text-navy
                     transition-colors duration-75 uppercase"
                    >
                        {item.name}
                    </Link>
                ))}
            </div>

            {/* RIGHT CELL: ACTION (The Terminal) */}
            <div className="flex-shrink-0 w-48 md:w-64 bg-navy flex items-center justify-center hover:bg-gold group transition-colors duration-75 cursor-pointer border-l-4 border-navy md:border-l-0">
                <Link href="/contact" className="flex items-center gap-3">
                    <Terminal className="w-5 h-5 text-gold group-hover:text-navy" />
                    <div className="flex flex-col items-start">
                        <span className="font-mono text-xs text-gold group-hover:text-navy font-bold">
                            INQUIRY_TERMINAL
                        </span>
                        <span className="font-mono text-[10px] text-white/60 group-hover:text-navy/80">
                            STATUS: ONLINE
                        </span>
                    </div>
                </Link>
            </div>

            {/* MOBILE MENU TRIGGER (Visible only on mobile) */}
            <div className="md:hidden flex-grow flex items-center justify-end px-6 bg-white">
                <button className="space-y-2 group">
                    <div className="w-8 h-1 bg-navy group-hover:bg-gold transition-colors"></div>
                    <div className="w-8 h-1 bg-navy group-hover:bg-gold transition-colors"></div>
                    <div className="w-8 h-1 bg-navy group-hover:bg-gold transition-colors"></div>
                </button>
            </div>
        </nav>
    );
};

export default NavBarV2;
