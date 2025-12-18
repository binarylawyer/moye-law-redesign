"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";

/**
 * KineticMondrianDemo
 * A demonstration of "Construction" physics with SCROLL-LINKED animation.
 * The animation scrubs based on scroll position:
 * - Scroll Down: Blocks fly IN (assemble)
 * - Scroll Up: Blocks fly OUT (disassemble)
 */

const blocks = [
    { id: 1, color: "#0A2342", span: "col-span-2 row-span-2", initial: { x: -200, y: -200, rotate: -15, opacity: 0 } }, // Navy
    { id: 2, color: "#FFD700", span: "col-span-1 row-span-1", initial: { x: 0, y: -200, rotate: 45, opacity: 0 } },    // Yellow
    { id: 3, color: "#FFFFFF", span: "col-span-1 row-span-2", initial: { x: 200, y: -100, rotate: -20, opacity: 0 } },  // White
    { id: 4, color: "#E31C23", span: "col-span-1 row-span-1", initial: { x: 100, y: 0, rotate: 90, opacity: 0 } },     // Red
    { id: 5, color: "#FFFFFF", span: "col-span-2 row-span-1", initial: { x: -100, y: 100, rotate: -10, opacity: 0 } },   // White
    { id: 6, color: "#0055A4", span: "col-span-1 row-span-1", initial: { x: 0, y: 200, rotate: 30, opacity: 0 } },      // Blue
    { id: 7, color: "#F3F4F6", span: "col-span-1 row-span-1", initial: { x: 200, y: 200, rotate: -45, opacity: 0 } },    // Gray
    { id: 8, color: "#FFD700", span: "col-span-1 row-span-1", initial: { x: -200, y: 100, rotate: 60, opacity: 0 } },    // Yellow
    { id: 9, color: "#0A2342", span: "col-span-1 row-span-1", initial: { x: 100, y: -100, rotate: -90, opacity: 0 } },   // Navy
];

function Block({ block, progress }: { block: any, progress: MotionValue }) {
    // Map scroll progress (0 -> 1) to animation values
    // 0 = Start (Chaos state)
    // 1 = End (Assembled state)

    // We used a smooth range: animation completes by 0.8 progress to lock it in
    const x = useTransform(progress, [0, 0.8], [block.initial.x, 0]);
    const y = useTransform(progress, [0, 0.8], [block.initial.y, 0]);
    const rotate = useTransform(progress, [0, 0.8], [block.initial.rotate, 0]);
    const opacity = useTransform(progress, [0, 0.3], [0, 1]); // Fade in quickly
    const scale = useTransform(progress, [0, 0.8], [0.5, 1]);

    return (
        <motion.div
            className={`${block.span} shadow-sm relative flex items-center justify-center`}
            style={{
                backgroundColor: block.color,
                x,
                y,
                rotate,
                opacity,
                scale
            }}
        >
            <span className="absolute bottom-2 right-2 font-mono text-[10px] opacity-30 mix-blend-difference text-white">
                0{block.id}
            </span>
        </motion.div>
    );
}

export default function KineticMondrianDemo() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "center center"] // Start animating when top enters view, finish when center is in center
    });

    // Add spring physics for smooth scrubbing (so it doesn't feel jerky)
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section ref={containerRef} className="py-24 bg-gray-50 border-t border-gray-200 overflow-hidden min-h-[100vh]">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="mb-12 sticky top-24 z-10 bg-gray-50/80 backdrop-blur-sm p-4 rounded-lg">
                    <span className="font-mono text-xs text-navy tracking-widest uppercase block mb-2">Motion Study 03</span>
                    <h2 className="font-display text-4xl text-navy">Kinetic Assembly</h2>
                    <p className="font-sans text-gray-600 mt-4 max-w-xl">
                        The "Convergence" effect.
                        <strong> Scroll down</strong> to assemble.
                        <strong> Scroll up</strong> to disassemble.
                    </p>
                </div>

                {/* THE STAGE */}
                <div className="relative h-[800px] w-full bg-white border border-gray-200 flex items-center justify-center overflow-hidden rounded-xl">

                    <div className="grid grid-cols-4 grid-rows-4 gap-2 w-full max-w-2xl h-[400px]">
                        {blocks.map((block) => (
                            <Block key={block.id} block={block} progress={smoothProgress} />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
