"use client";

import React from 'react';
import { ArrowRight, Shield, Zap, Lock, Globe, Database, Scale, Briefcase, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

interface SolutionCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    tags: string[];
}

const SolutionCard: React.FC<SolutionCardProps> = ({
    title = "Asset Protection",
    description = "Secure your legacy with impenetrable legal architecture.",
    icon = <Shield className="w-8 h-8 text-navy" />,
    tags = ["Trusts", "Privacy"]
}) => {
    return (
        <motion.div
            className="group relative bg-white border-4 border-navy p-8 h-full flex flex-col justify-between hover:bg-navy transition-colors duration-500 cursor-pointer"
            whileHover={{ y: -5 }}
        >
            {/* HOVER LAYER: GOLD BORDER */}
            <div className="absolute inset-0 border-4 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div>
                {/* ICON HEADER */}
                <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-gray-50 border-2 border-navy group-hover:bg-white group-hover:border-gold transition-colors duration-300">
                        {/* Clone icon to enforce color change on hover */}
                        {React.cloneElement(icon as React.ReactElement<{ className?: string }>, {
                            className: "w-6 h-6 text-navy group-hover:text-gold transition-colors duration-300"
                        })}
                    </div>
                    <ArrowRight className="w-6 h-6 text-navy/20 group-hover:text-gold transition-colors duration-300 -rotate-45 group-hover:rotate-0 transform" />
                </div>

                {/* TITLE */}
                <h3 className="font-display text-3xl text-navy group-hover:text-white mb-3">
                    {title}
                </h3>

                {/* DESCRIPTION */}
                <p className="font-sans text-sm text-gray-600 group-hover:text-gray-300 leading-relaxed mb-6">
                    {description}
                </p>
            </div>

            {/* TAGS */}
            <div className="flex flex-wrap gap-2 mt-auto">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 bg-gray-100 text-navy border border-gray-200 group-hover:bg-navy-light group-hover:text-gold group-hover:border-gold/30 transition-colors duration-300"
                    >
                        {tag}
                    </span>
                ))}
            </div>

        </motion.div>
    );
};

export default SolutionCard;
