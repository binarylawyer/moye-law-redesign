"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface KineticDoorProps {
    title?: string;
    revealedText?: string;
    frontContent?: React.ReactNode;
    backContent?: React.ReactNode;
    className?: string;
}

/**
 * KineticDoor (The "Refined" Saul Bass/Mondrian Door)
 * 
 * DESIGN CONTEXT: "Kinetic Structuralism"
 * A fusion of Piet Mondrian’s rigid engineering and Saul Bass’s cinematic tension.
 * 
 * MOTION PROFILE:
 * - Duration: 0.6s (Sweet spot between instantaneous and sluggish)
 * - Easing: cubic-bezier(0.3, 0.0, 0.2, 1) (Strong, confident friction snap)
 * - Rotation: -110deg (Y-Axis)
 * 
 * COLORS:
 * - Door (Front): Deep Navy (#0A2342) + Warm Gold Border
 * - Reveal (Back): Warm Gold (#C99D56) + Navy Text
 */
export const KineticDoor: React.FC<KineticDoorProps> = ({
    title,
    revealedText,
    frontContent,
    backContent,
    className = ""
}) => {
    return (
        <div
            className={`group relative perspective-1000 w-64 h-80 cursor-crosshair ${className}`}
            style={{ perspective: "1000px" }}
        >
            {/* 1. THE REVEAL LAYER (Static Background - The "Prize") */}
            <div className="absolute inset-0 z-0 bg-gold flex items-center justify-center border-4 border-navy">
                {backContent ? backContent : (
                    <div className="text-center p-4">
                        <span className="font-mono text-xs text-navy tracking-widest uppercase font-bold">
                            {revealedText || "ACCESS_GRANTED"}
                        </span>
                    </div>
                )}
            </div>

            {/* 2. THE DOOR LAYER (The Kinetic Element) */}
            <div
                className="absolute inset-0 z-10 bg-navy border-4 border-gold origin-left flex items-center justify-center 
                           transition-transform duration-600 ease-[cubic-bezier(0.3,0.0,0.2,1)] 
                           group-hover:-rotate-y-110 shadow-2xl"
                style={{ transformStyle: 'preserve-3d' }}
            >
                {frontContent ? frontContent : (
                    <div className="text-center p-6 bg-navy w-full h-full flex flex-col items-center justify-center">
                        <div className="font-display text-3xl text-gold mb-2 leading-none">{title || "Open"}</div>
                        <div className="h-1 w-12 bg-gold opacity-50 mt-2"></div>
                        <div className="absolute bottom-4 right-4 font-mono text-[10px] text-gold/60">
                            FIG 2.0
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
