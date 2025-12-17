"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, FileText, Scale, BookOpen, Search, Layers, Award, Brush, FilePlus } from 'lucide-react';
import { RevealContent } from './MondrianGrid';

// Icons for cards
const CARD_ICONS = [Shield, FilePlus, Brush, Scale, BookOpen, Search, Layers, Award, FileText];
const COLORS = ['#D42E12', '#0A2342', '#F9D923', '#226CE0', '#C99D56'];

interface FAQItem {
    title: string;
    description: string;
}

interface FAQGridProps {
    title?: string;
    subtitle?: string;
    items: FAQItem[];
    className?: string;
}

export const FAQGrid: React.FC<FAQGridProps> = ({
    title = "Frequently Asked Questions",
    subtitle = "Key considerations when planning for your legal needs.",
    items,
    className = ""
}) => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    // Limit to 9 items for aesthetic grid
    const displayItems = items.slice(0, 9);

    return (
        <section className={`py-24 bg-gray-50 relative ${className}`}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 gap-x-8 lg:gap-x-16 relative">

                {/* Left column with sticky heading */}
                <div className="lg:col-span-3 relative">
                    <RevealContent>
                        <div className="sticky top-32">
                            <h2 className="font-display text-4xl text-navy mb-4 leading-tight">{title}</h2>
                            <div className="w-12 h-1 bg-red-800 mb-6"></div>
                            <p className="font-sans text-gray-600 font-medium">{subtitle}</p>
                        </div>
                    </RevealContent>
                </div>

                {/* Scrolling cards on the right */}
                <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {displayItems.map((item, idx) => {
                        const IconComponent = CARD_ICONS[idx % CARD_ICONS.length];
                        const isHovered = hoveredCard === idx;
                        const color = COLORS[idx % COLORS.length];

                        return (
                            <motion.div
                                key={idx}
                                className="bg-white rounded-lg shadow-sm overflow-hidden group relative flex flex-col h-full min-h-[220px]"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ duration: 0.5, delay: idx * 0.05 }}
                                whileHover={{
                                    y: -6,
                                    boxShadow: "0 8px 20px rgba(0,0,0,0.07)",
                                    zIndex: 10,
                                    transition: { duration: 0.2 }
                                }}
                                onHoverStart={() => setHoveredCard(idx)}
                                onHoverEnd={() => setHoveredCard(null)}
                            >
                                {/* Card header color strip */}
                                <div className="h-1.5 w-full" style={{ backgroundColor: color }} />

                                {/* Static Card content */}
                                <div className="p-6 flex-grow flex flex-col">
                                    <div className="mb-4">
                                        <div className="p-2 w-fit rounded-full bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300">
                                            <IconComponent size={20} style={{ color: color }} />
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-semibold font-display mb-3 text-navy group-hover:text-blue-900 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Animated Dropdown content - Appears on hover */}
                                <AnimatePresence>
                                    {isHovered && (
                                        <motion.div
                                            className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg border-t border-gray-100 z-20 p-6"
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.25 }}
                                            style={{ top: 'auto', bottom: 0, height: '100%' }} // Overlay entire card on hover for better stability
                                        >
                                            <div className="flex flex-col h-full bg-white">
                                                <h4 className="text-sm font-semibold mb-2 text-navy">{item.title}</h4>
                                                <p className="text-gray-700 text-sm overflow-y-auto pr-2 custom-scrollbar">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
