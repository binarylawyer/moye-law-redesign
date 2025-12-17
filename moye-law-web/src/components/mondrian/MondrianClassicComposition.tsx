"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface MondrianClassicCompositionProps {
    className?: string;
    delay?: number;
    primaryColor?: string; // e.g. "#D6001C" (red) or "#00A650" (green)
}

export const MondrianClassicComposition: React.FC<MondrianClassicCompositionProps> = ({
    className = "",
    delay = 0,
    primaryColor = "#D6001C" // Default Red
}) => {
    // We use inline styles for the dynamic color to avoid complex Tailwind class mapping

    return (
        <div className={`w-full h-full relative bg-white border-4 border-black ${className}`}>
            {/* 
                Structure:
                - Top Row: Large White (Left), Yellow (Right)
                - Mid Row: Blue (Left), Small White (Center), Red/Primary (Right)
                - Bottom Row: White strip
            */}

            <div className="grid grid-cols-12 grid-rows-6 w-full h-full">

                {/* 1. Large White Block (Top Left) */}
                <div className="col-span-8 row-span-4 border-r-4 border-b-4 border-black relative overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: delay + 0.2 }}
                        className="absolute inset-0 bg-gray-50/30"
                    />
                </div>

                {/* 2. Yellow Block (Top Right) */}
                <div className="col-span-4 row-span-2 bg-[#FFEB80] border-b-4 border-black relative overflow-hidden">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: delay + 0.4 }}
                        className="w-full h-full bg-[#FFEB80]"
                    />
                </div>

                {/* 3. White Strip (Mid Right) */}
                <div className="col-span-4 row-span-2 bg-white border-b-4 border-black"></div>

                {/* 4. Blue Block (Bottom Left) */}
                <div className="col-span-3 row-span-2 bg-[#003B98] border-r-4 border-black relative overflow-hidden">
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.5, delay: delay + 0.6 }}
                        className="w-full h-full bg-[#003B98]"
                    />
                </div>

                {/* 5. Small White Center */}
                <div className="col-span-5 row-span-2 border-r-4 border-black bg-white"></div>

                {/* 6. PRIMARY COLOR BLOCK (Bottom Right) - WAS RED */}
                <div className="col-span-4 row-span-2 relative border-black overflow-hidden" style={{ backgroundColor: primaryColor }}>
                    <motion.div
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.5, delay: delay + 0.8 }}
                        className="w-full h-full"
                        style={{ backgroundColor: primaryColor }}
                    />
                </div>

            </div>
        </div>
    );
};
