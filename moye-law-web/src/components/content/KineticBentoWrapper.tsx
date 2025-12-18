"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

/**
 * KineticBentoWrapper
 * A staggered grid where items fly in from different directions as if assembling themselves.
 * Inspired by Dropbox's "Component Assembly" aesthetic.
 */

interface KineticBentoProps {
    children: React.ReactNode;
    className?: string;
}

export default function KineticBentoWrapper({ children, className = "" }: KineticBentoProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    // Track scroll progress relative to this container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Convert children to array to animate them individually
    const items = React.Children.toArray(children);

    return (
        <div ref={containerRef} className={`relative ${className}`}>
            {/* 
            We use a standard grid for layout, but we wrap each child 
            in a motion component with custom entry animations.
        */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((child, index) => (
                    <BentoCell key={index} index={index} total={items.length}>
                        {child}
                    </BentoCell>
                ))}
            </div>
        </div>
    );
}

// Individual Cell with unique entry physics
function BentoCell({ children, index, total }: { children: React.ReactNode; index: number; total: number }) {
    // Determine start position based on index (parity) to create "chaos to order" effect
    // Even items come from left, Odd from right, Middle from bottom
    const xStart = index % 3 === 0 ? -100 : index % 3 === 1 ? 100 : 0;
    const yStart = index % 3 === 2 ? 100 : 0;

    return (
        <motion.div
            initial={{ opacity: 0, x: xStart, y: yStart, scale: 0.9 }}
            whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                transition: {
                    type: "spring",
                    damping: 20,
                    stiffness: 100,
                    delay: index * 0.1 // Stagger effect
                }
            }}
            viewport={{ once: true, margin: "-50px" }}
            className="h-full"
        >
            {/* Hover Lift Effect */}
            <motion.div
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="h-full"
            >
                {children}
            </motion.div>
        </motion.div>
    );
}
