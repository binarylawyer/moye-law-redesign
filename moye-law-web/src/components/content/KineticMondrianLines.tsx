"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";

/**
 * KineticMondrianLines
 * The "Lined" Variation of the Kinetic Assembly.
 * Features:
 * - Animated grid lines (vertical/horizontal) that move/grow with scroll.
 * - Same block assembly logic.
 * - Sticky/Pinned scrolling behavior.
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
    const x = useTransform(progress, [0, 0.7], [block.initial.x, 0]);
    const y = useTransform(progress, [0, 0.7], [block.initial.y, 0]);
    const rotate = useTransform(progress, [0, 0.7], [block.initial.rotate, 0]);
    const opacity = useTransform(progress, [0, 0.3], [0, 1]);
    const scale = useTransform(progress, [0, 0.7], [0.5, 1]);

    return (
        <motion.div
            className={`${block.span} shadow-sm relative flex items-center justify-center z-10`} // z-10 to stay above lines potentially? No lines should be on top for Mondrian look usually, but let's test.
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

function GridLines({ progress }: { progress: MotionValue }) {
    // Vertical Lines (moving into place)
    // Left Line (between col 1 and 2)
    const v1_h = useTransform(progress, [0.2, 0.8], ["0%", "100%"]);
    const v1_y = useTransform(progress, [0.2, 0.8], ["50%", "0%"]); // Grow from center

    // Horizontal Lines
    // Mid Line
    const h1_w = useTransform(progress, [0.1, 0.7], ["0%", "100%"]);

    return (
        <div className="absolute inset-0 z-20 pointer-events-none">
            {/* Vertical Line 1 (approx 25%) */}
            <motion.div
                className="absolute top-0 left-[25%] w-2 bg-navy"
                style={{ height: v1_h, top: v1_y }}
            />
            {/* Vertical Line 2 (approx 50%) */}
            <motion.div
                className="absolute top-0 left-[50%] w-1 bg-navy"
                style={{ height: v1_h, top: v1_y }}
            />
            {/* Vertical Line 3 (approx 75%) */}
            <motion.div
                className="absolute top-0 left-[75%] w-3 bg-navy"
                style={{ height: v1_h, top: v1_y }}
            />

            {/* Horizontal Line 1 (approx 25%) */}
            <motion.div
                className="absolute top-[25%] left-0 h-1 bg-navy"
                style={{ width: h1_w }}
            />
            {/* Horizontal Line 2 (approx 50%) */}
            <motion.div
                className="absolute top-[50%] left-0 h-4 bg-navy"
                style={{ width: h1_w }}
            />
            {/* Horizontal Line 3 (approx 75%) */}
            <motion.div
                className="absolute top-[75%] left-0 h-2 bg-navy"
                style={{ width: h1_w }}
            />
        </div>
    )
}

export default function KineticMondrianLines() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Track scroll through the entire sticky container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const assemblyProgress = useTransform(scrollYProgress, [0, 0.6], [0, 1]); // Complete slightly faster to hold

    const smoothProgress = useSpring(assemblyProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section className="bg-gray-50 border-t border-gray-200">
            {/* STICKY CONTAINER: 200vh height */}
            <div ref={containerRef} className="h-[200vh] relative">

                {/* STICKY WINDOW */}
                <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">

                    <div className="container mx-auto px-6 max-w-7xl z-10">
                        <div className="mb-12 bg-gray-50/80 backdrop-blur-sm p-4 rounded-lg inline-block">
                            <span className="font-mono text-xs text-navy tracking-widest uppercase block mb-2">Variation 02</span>
                            <h2 className="font-display text-4xl text-navy">Structural Assembly</h2>
                            <p className="font-sans text-gray-600 mt-4 max-w-xl">
                                Includes <strong>dynamic grid lines</strong> that grow from the center.
                            </p>
                        </div>

                        {/* THE STAGE */}
                        <div className="relative h-[600px] w-full bg-white border border-gray-200 flex items-center justify-center overflow-hidden rounded-xl shadow-lg">
                            <div className="relative grid grid-cols-4 grid-rows-4 gap-2 w-full max-w-2xl h-[400px]">
                                {/* BLOCKS */}
                                {blocks.map((block) => (
                                    <Block key={block.id} block={block} progress={smoothProgress} />
                                ))}
                                {/* LINES OVERLAY */}
                                <GridLines progress={smoothProgress} />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
