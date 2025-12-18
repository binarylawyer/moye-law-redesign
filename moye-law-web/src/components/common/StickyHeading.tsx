"use client";

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface StickyHeadingProps {
    title: string;
    subtitle?: string;
    children?: ReactNode;
    accentLine?: boolean;
    accentColor?: string;
    topOffset?: number;
}

const StickyHeading: React.FC<StickyHeadingProps> = ({
    title,
    subtitle,
    children,
    accentLine = true,
    accentColor = '#8B0000',
    topOffset = 100
}) => {
    return (
        <div className="sticky" style={{
            position: 'sticky',
            top: `${topOffset}px`,
            height: 'fit-content'
        }}>
            <motion.h2
                className="text-3xl md:text-4xl font-display font-normal mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                {title}
            </motion.h2>

            {subtitle && (
                <motion.p
                    className="text-gray-700 mb-6 text-base"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    {subtitle}
                </motion.p>
            )}

            {accentLine && (
                <motion.div
                    className="w-16 h-1"
                    style={{ backgroundColor: accentColor }}
                    initial={{ width: 0 }}
                    whileInView={{ width: 64 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                />
            )}

            {children && (
                <motion.div
                    className="mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {children}
                </motion.div>
            )}
        </div>
    );
};

export default StickyHeading; 
