"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * KineticMondrianDemo
 * A demonstration of "Construction" physics.
 * 9 distinct blocks start off-screen and fly together to form a cohesive Mondrian composition.
 */

const blocks = [
    { id: 1, color: "bg-navy", span: "col-span-2 row-span-2", initial: { x: -100, y: -100, rotate: -5 } }, // Big Navy
    { id: 2, color: "bg-gold", span: "col-span-1 row-span-1", initial: { x: 0, y: -100, rotate: 10 } },    // Top Gold
    { id: 3, color: "bg-white", span: "col-span-1 row-span-2", initial: { x: 100, y: -50, rotate: -8 } },  // Tall White
    { id: 4, color: "bg-mondrian-red", span: "col-span-1 row-span-1", initial: { x: 50, y: 0, rotate: 15 } }, // Red Accent
    { id: 5, color: "bg-white", span: "col-span-2 row-span-1", initial: { x: -50, y: 50, rotate: -3 } },   // Wide White
    { id: 6, color: "bg-mondrian-blue", span: "col-span-1 row-span-1", initial: { x: 0, y: 100, rotate: 12 } }, // Blue Footer
    { id: 7, color: "bg-gray-200", span: "col-span-1 row-span-1", initial: { x: 100, y: 100, rotate: -10 } }, // Gray Corner
    { id: 8, color: "bg-white", span: "col-span-1 row-span-1", initial: { x: -100, y: 50, rotate: 6 } }, // Extra White
    { id: 9, color: "bg-navy", span: "col-span-1 row-span-1", initial: { x: 50, y: -50, rotate: -15 } },  // Small Navy
];

export default function KineticMondrianDemo() {
    return (
        <section className="py-24 bg-gray-50 border-t border-gray-200 overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="mb-12">
                    <span className="font-mono text-xs text-navy tracking-widest uppercase block mb-2">Motion Study 03</span>
                    <h2 className="font-display text-4xl text-navy">Kinetic Assembly</h2>
                    <p className="font-sans text-gray-600 mt-4 max-w-xl">
                        The "Convergence" effect. Independent chaos becomes structural order.
                        Elements arrive from calculated vectors to lock into a rigid grid.
                    </p>
                </div>

                {/* THE STAGE */}
                <div className="relative h-[600px] w-full bg-white border border-gray-200 flex items-center justify-center overflow-hidden">

                    <div className="grid grid-cols-4 grid-rows-4 gap-2 w-full max-w-2xl h-[400px]">
                        {blocks.map((block, i) => (
                            <motion.div
                                key={block.id}
                                className={`${block.span} ${block.color} shadow-sm relative`}
                                initial={{
                                    opacity: 0,
                                    x: block.initial.x * 5, // Exaggerate distance
                                    y: block.initial.y * 5,
                                    scale: 0.5,
                                    rotate: block.initial.rotate
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    y: 0,
                                    scale: 1,
                                    rotate: 0,
                                    transition: {
                                        type: "spring",
                                        damping: 20,
                                        stiffness: 60,
                                        delay: i * 0.1, // Ripple effect
                                        duration: 1.5
                                    }
                                }}
                                viewport={{ once: false, margin: "-100px" }} // Re-animates on scroll
                            >
                                <span className="absolute bottom-2 right-2 font-mono text-[10px] opacity-30 mix-blend-difference text-white">
                                    0{block.id}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
