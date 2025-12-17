"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { RevealContent } from './MondrianGrid';

interface ComparisonColumn {
    title: string;
    items: string[];
    borderColor: string;
    iconColor: string;
}

interface ComparisonGridProps {
    title?: string;
    columns: ComparisonColumn[];
    className?: string;
}

export const ComparisonGrid: React.FC<ComparisonGridProps> = ({
    title = "How We're Different",
    columns,
    className = ""
}) => {
    return (
        <div className={`py-12 ${className}`}>
            <RevealContent>
                <h2 className="font-display text-4xl text-navy mb-16 text-center">{title}</h2>
            </RevealContent>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {columns.map((col, idx) => (
                    <motion.div
                        key={idx}
                        className={`border-t-8 pt-6`}
                        style={{ borderColor: col.borderColor }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                    >
                        <h3 className="font-display text-2xl text-navy mb-4">{col.title}</h3>
                        <ul className="space-y-4">
                            {col.items.map((item, itemIdx) => (
                                <li key={itemIdx} className="flex items-start">
                                    <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-1" style={{ color: col.iconColor }} />
                                    <span className="text-lg text-navy/70">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
