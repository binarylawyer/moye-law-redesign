"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { RevealContent } from './MondrianGrid';

interface RelatedItem {
    title: string;
    description: string;
    href: string;
}

interface RelatedGridProps {
    title?: string;
    items: RelatedItem[];
    className?: string;
}

export const RelatedGrid: React.FC<RelatedGridProps> = ({
    title = "Explore Related Services",
    items,
    className = ""
}) => {
    if (!items || items.length === 0) return null;

    return (
        <div className={`py-16 md:py-28 ${className}`}>
            <RevealContent>
                <h2 className="text-3xl md:text-5xl font-display font-normal tracking-tight mb-16 md:mb-24">{title}</h2>
            </RevealContent>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
                {items.map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                    >
                        <Link href={item.href} className="group block h-full">
                            {/* Minimal separator line in Mondrian color */}
                            <div className={`w-12 h-px mb-6 ${idx % 3 === 0 ? 'bg-blue-600' :
                                    idx % 3 === 1 ? 'bg-red-600' :
                                        'bg-yellow-400'
                                }`}></div>

                            <h3 className="font-display text-xl md:text-2xl text-navy mb-4 group-hover:text-gray-700 transition-colors duration-300">
                                {item.title}
                            </h3>

                            <p className="text-gray-700 font-sans leading-relaxed mb-6">
                                {item.description}
                            </p>

                            <span className="inline-block text-navy text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                                View <span className="ml-1 font-normal">→</span>
                            </span>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
