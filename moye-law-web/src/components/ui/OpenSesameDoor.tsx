"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface OpenSesameDoorProps {
    title: string;
    revealedText?: string;
    className?: string;
}

/**
 * OpenSesameDoor (The "Saul Bass" Door)
 * 
 * A heavy, decisive opening mechanism used for high-value reveals.
 * Uses CSS 3D Transforms with a custom bezier curve to mimic mechanical weight.
 * 
 * Easing: cubic-bezier(0.25, 0.46, 0.45, 0.94)
 * Duration: 1.2s
 * Rotation: -110deg (Y-Axis)
 */
export const OpenSesameDoor: React.FC<OpenSesameDoorProps> = ({
    title,
    revealedText = "CONTENT_REVEALED",
    className = ""
}) => {
    return (
        <motion.div
            className={`w-64 h-80 cursor-pointer relative ${className}`}
            style={{ perspective: "1000px" }}
            initial="closed"
            whileHover="open"
        >
            {/* BACK LAYER (REVEALED CONTENT) */}
            <div className="absolute inset-0 z-0 bg-navy flex items-center justify-center border-4 border-navy">
                <span className="font-mono text-xs text-gold tracking-widest text-center px-4">
                    {revealedText}
                </span>
            </div>

            {/* FRONT DOOR (ROTATING ELEMENT) */}
            <motion.div
                className="absolute inset-0 z-10 bg-gold border-4 border-navy origin-left flex items-center justify-center p-6 shadow-xl"
                variants={{
                    closed: { rotateY: 0 },
                    open: { rotateY: -110 }
                }}
                transition={{
                    duration: 1.2,
                    ease: [0.25, 0.46, 0.45, 0.94]
                }}
            >
                <div className="text-center">
                    <div className="font-display text-2xl text-navy mb-2">{title}</div>
                    <div className="h-0.5 w-8 bg-navy opacity-30 mx-auto"></div>
                </div>
            </motion.div>
        </motion.div>
    );
};
