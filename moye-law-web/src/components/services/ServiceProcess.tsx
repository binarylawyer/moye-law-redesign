"use client";

import React, { useRef } from 'react';
import { Process } from '@/types/services';
import { motion, useInView } from 'framer-motion';

interface ServiceProcessProps {
    process: Process;
}

const ServiceProcess: React.FC<ServiceProcessProps> = ({ process }) => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-10%" });

    if (!process) return null;
    const { title, steps } = process;

    return (
        <div ref={containerRef} className="py-20 md:py-32">
            {/* Section Title - Large, minimal typography with ample space */}
            <div className="container mx-auto px-4 md:px-8 max-w-6xl mb-16 md:mb-24">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-display font-normal tracking-tight"
                >
                    {title}
                </motion.h2>
            </div>

            {/* Gallery-style Grid Layout */}
            <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
                    {/* Map through each step */}
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="process-card group relative transition-all duration-300 hover:translate-y-[-4px]"
                        >
                            {/* Step Number - Large and prominent */}
                            <div className="mb-5">
                                <span className="text-6xl md:text-7xl font-display font-light text-navy/80">
                                    {String(idx + 1).padStart(2, '0')}
                                </span>
                            </div>

                            {/* Step Title - Clean typography with proper spacing */}
                            <h3 className="text-xl md:text-2xl font-display font-medium mb-4">
                                {step.title}
                            </h3>

                            {/* Step Description - Lighter weight, clean typography */}
                            <p className="text-base font-sans text-gray-700 leading-relaxed">
                                {step.description}
                            </p>

                            {/* Minimal Color Accent - Small dot with Mondrian colors */}
                            <div className={`mt-6 w-4 h-4 rounded-full ${idx % 3 === 0 ? 'bg-mondrian-blue' :
                                    idx % 3 === 1 ? 'bg-mondrian-red' :
                                        'bg-mondrian-yellow'
                                }`}></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceProcess; 
