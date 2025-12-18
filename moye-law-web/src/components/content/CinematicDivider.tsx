"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * CinematicDivider
 * A full-width parallax image section inspired by VanMoof / Cinematic Legal Dramas.
 * Breaks the grid density with full-bleed imagery and massive typography.
 */

interface CinematicDividerProps {
    imageSrc?: string;
    title: string;
    subtitle?: string;
}

export default function CinematicDivider({
    imageSrc = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
    title,
    subtitle
}: CinematicDividerProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    // Parallax Logic
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);

    return (
        <section ref={containerRef} className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center bg-navy">

            {/* Parallax Background */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0 h-[120%] w-full"
            >
                <img
                    src={imageSrc}
                    alt="Cinematic Background"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-transparent to-navy/90" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 text-center max-w-4xl px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="font-display text-6xl md:text-8xl text-white mb-6 tracking-tight drop-shadow-2xl"
                >
                    {title}
                </motion.h2>

                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="font-sans text-xl md:text-2xl text-white/80 font-light tracking-wide"
                    >
                        {subtitle}
                    </motion.p>
                )}
            </div>

            {/* Mondrian Overlay Borders */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-white/20" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20" />
            <div className="absolute top-0 right-32 w-[1px] h-full bg-white/10" />

        </section>
    );
}
