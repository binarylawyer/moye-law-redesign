"use client";

import React from 'react';
import { motion } from 'framer-motion';

/**
 * MondrianGrid: The "Active Agent" of the interface.
 * Draws grid lines using Framer Motion SVG paths or div scaling.
 * 
 * Strategy: "Intersect & Reveal"
 * - Horizontal lines draw from left to right.
 * - Vertical lines draw from top to bottom.
 * - Content reveals only after lines pass? Or simultaneously?
 * 
 * For simplicity and performance, we use CSS variables for positioning 
 * and Framer Motion for the 'scaleX' / 'scaleY' expansion.
 */

interface MondrianGridProps {
    className?: string; // Additional classes
    delay?: number;     // Start delay
}

export const MondrianGrid: React.FC<MondrianGridProps> = ({ className = "", delay = 0 }) => {
    return (
        <div className={`absolute inset-0 pointer-events-none z-0 ${className}`}>

            {/* Horizontal Line (Top) */}
            <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-navy origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: delay }}
            />

            {/* Horizontal Line (Bottom) */}
            <motion.div
                className="absolute bottom-0 left-0 w-full h-1 bg-navy origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: delay + 0.2 }}
            />

            {/* Vertical Line (Left) */}
            <motion.div
                className="absolute top-0 left-0 w-1 h-full bg-navy origin-top"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: delay + 0.4 }}
            />

            {/* Vertical Line (Right) */}
            <motion.div
                className="absolute top-0 right-0 w-1 h-full bg-navy origin-top"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: delay + 0.6 }}
            />

            {/* The "Golden Ratio" Vertical Split (approx 60%) */}
            <motion.div
                className="hidden md:block absolute top-0 left-[58.33%] w-1 h-full bg-navy origin-top"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: delay + 0.8 }}
            />

        </div>
    );
};

export const RevealContent: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({
    children,
    delay = 1.0,
    className = ""
}) => {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: delay }}
        >
            {children}
        </motion.div>
    );
};
