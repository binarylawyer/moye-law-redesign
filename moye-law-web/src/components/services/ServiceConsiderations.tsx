"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ServiceConsideration } from '@/types/services';
import StickyHeading from '../common/StickyHeading';
import {
    Brush,
    FilePlus,
    Scale,
    Shield,
    BookOpen,
    Search,
    Layers,
    Award,
    FileText
} from 'lucide-react';

interface ServiceConsiderationsProps {
    considerations: ServiceConsideration[];
    title?: string;
}

// Icons for cards
const CARD_ICONS = [Shield, FilePlus, Brush, Scale, BookOpen, Search, Layers, Award, FileText];

const ServiceConsiderations: React.FC<ServiceConsiderationsProps> = ({
    considerations,
    title = "Frequently Asked Questions"
}) => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    // Add additional placeholder cards if needed
    const allCards = considerations.length >= 7
        ? considerations
        : [
            ...considerations,
            ...Array(Math.max(0, 7 - considerations.length))
                .fill(0)
                .map((_, i) => ({
                    title: `Additional Consideration ${i + 1}`,
                    description: "Our firm offers comprehensive guidance on all aspects of art and entertainment law."
                }))
        ];

    const displayCards = allCards.slice(0, 9);

    return (
        <section
            id="faq-section"
            className="py-24 md:py-40 bg-gray-50 relative"
        >
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 gap-x-8 lg:gap-x-16 relative">
                    {/* Left column with sticky heading */}
                    <div className="lg:col-span-3 relative">
                        <StickyHeading
                            title={title}
                            subtitle="Key considerations when planning for your legal needs."
                            accentColor="#8B0000"
                            topOffset={100}
                        />
                    </div>

                    {/* Scrolling cards on the right */}
                    <div
                        className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                    >
                        {displayCards.map((card, idx) => {
                            const IconComponent = CARD_ICONS[idx % CARD_ICONS.length];
                            const isHovered = hoveredCard === idx;

                            return (
                                <motion.div
                                    key={idx}
                                    className="bg-white rounded-lg shadow-sm overflow-hidden group relative flex flex-col"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
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
                                    {/* Card header */}
                                    <div
                                        className={`h-1.5 w-full ${idx % 5 === 0 ? 'bg-[#D42E12]' : idx % 5 === 1 ? 'bg-[#0A2342]' :
                                                idx % 5 === 2 ? 'bg-[#F9D923]' : idx % 5 === 3 ? 'bg-[#226CE0]' : 'bg-[#C99D56]'
                                            }`}
                                    />

                                    {/* Static Card content - Smaller size */}
                                    <div className="p-4 flex-grow">
                                        <div className="mb-3 flex items-center">
                                            <div className={`p-1.5 rounded-full bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300`}>
                                                <IconComponent size={18} className={`
                          transition-colors duration-300
                          ${idx % 5 === 0 ? 'text-[#D42E12]' : idx % 5 === 1 ? 'text-[#0A2342]' :
                                                        idx % 5 === 2 ? 'text-[#F9D923]' : idx % 5 === 3 ? 'text-[#226CE0]' : 'text-[#C99D56]'}
                        `} />
                                            </div>
                                        </div>
                                        <h3 className="text-md font-semibold font-display mb-2 group-hover:text-[#0A2342] transition-colors duration-300">
                                            {card.title}
                                        </h3>
                                        <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">
                                            {card.description}
                                        </p>
                                    </div>

                                    {/* Animated Dropdown content - Appears on hover */}
                                    <AnimatePresence>
                                        {isHovered && (
                                            <motion.div
                                                className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg border-t border-gray-100 z-20 p-4"
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                transition={{ duration: 0.25 }}
                                            >
                                                <h4 className="text-sm font-semibold mb-2">Details: {card.title || "This Consideration"}</h4>
                                                <p className="text-gray-700 text-xs mb-3">
                                                    {/* Short additional text */}
                                                    Explore key legal strategies and considerations for {card.title ? card.title.toLowerCase() : 'this legal matter'}.
                                                </p>
                                                <a href="#" className="text-xs font-medium text-[#0A2342] hover:underline flex items-center">
                                                    Learn more
                                                    <svg className="ml-1 w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </a>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceConsiderations; 
