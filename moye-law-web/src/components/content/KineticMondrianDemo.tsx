"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * KineticMondrianDemo
 * A demonstration of "Construction" physics.
 * 9 distinct blocks start off-screen and fly together to form a cohesive Mondrian composition.
 */

const blocks = [
    { id: 1, color: "#0A2342", span: "col-span-2 row-span-2", initial: { x: -100, y: -100, rotate: -5 }, className: "text-white" }, // Navy
    { id: 2, color: "#FFD700", span: "col-span-1 row-span-1", initial: { x: 0, y: -100, rotate: 10 }, className: "text-navy" },    // Yellow
    { id: 3, color: "#FFFFFF", span: "col-span-1 row-span-2", initial: { x: 100, y: -50, rotate: -8 }, className: "text-navy" },   // White
    { id: 4, color: "#E31C23", span: "col-span-1 row-span-1", initial: { x: 50, y: 0, rotate: 15 }, className: "text-white" },    // Red
    { id: 5, color: "#FFFFFF", span: "col-span-2 row-span-1", initial: { x: -50, y: 50, rotate: -3 }, className: "text-navy" },    // White
    { id: 6, color: "#0055A4", span: "col-span-1 row-span-1", initial: { x: 0, y: 100, rotate: 12 }, className: "text-white" },   // Blue
    { id: 7, color: "#F3F4F6", span: "col-span-1 row-span-1", initial: { x: 100, y: 100, rotate: -10 }, className: "text-navy" },  // Gray
    { id: 8, color: "#FFD700", span: "col-span-1 row-span-1", initial: { x: -100, y: 50, rotate: 6 }, className: "text-navy" },    // Yellow
    { id: 9, color: "#0A2342", span: "col-span-1 row-span-1", initial: { x: 50, y: -50, rotate: -15 }, className: "text-white" },  // Navy
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    visible: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        transition: {
            type: "spring",
            damping: 20,
            stiffness: 60,
            duration: 1.5
        }
    }
};

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

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }} // Trigger when 20% visible
                        variants={containerVariants}
                        className="grid grid-cols-4 grid-rows-4 gap-2 w-full max-w-2xl h-[400px]"
                    >
                        {blocks.map((block) => (
                            <motion.div
                                key={block.id}
                                className={`${block.span} shadow-sm relative flex items-center justify-center`}
                                style={{ backgroundColor: block.color }}
                                variants={{
                                    hidden: {
                                        opacity: 0,
                                        x: block.initial.x * 5,
                                        y: block.initial.y * 5,
                                        scale: 0.5,
                                        rotate: block.initial.rotate
                                    },
                                    visible: itemVariants.visible
                                }}
                            >
                                <span className={`absolute bottom-2 right-2 font-mono text-[10px] opacity-50 ${block.className}`}>
                                    0{block.id}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
