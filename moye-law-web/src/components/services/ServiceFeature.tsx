"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ServiceFeature as ServiceFeatureType } from '@/types/services';
import { Shield, FileText, Scale, Zap, Globe, Lock } from 'lucide-react';

// Map string icon names to Lucide components if needed, or pass component directly
const ICON_MAP: Record<string, any> = {
    'shield': Shield,
    'file-text': FileText,
    'scale': Scale,
    'zap': Zap,
    'globe': Globe,
    'lock': Lock
};

interface ServiceFeatureProps {
    features: ServiceFeatureType[];
    title?: string;
    description?: string;
}

const ServiceFeature: React.FC<ServiceFeatureProps> = ({
    features,
    title = "Service Highlights",
    description
}) => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-10%" });

    return (
        <div ref={containerRef} className="py-20 md:py-32">
            {/* Section title with clean typography */}
            <div className="container mx-auto px-4 md:px-8 max-w-6xl mb-16 md:mb-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-5 lg:col-start-2">
                        <motion.h2
                            className="text-3xl md:text-5xl font-display font-normal tracking-tight text-black mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6 }}
                        >
                            {title}
                        </motion.h2>
                    </div>

                    <div className="lg:col-span-5">
                        {description && (
                            <motion.p
                                className="text-lg text-gray-700 font-sans leading-relaxed"
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : {}}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                {description}
                            </motion.p>
                        )}
                    </div>
                </div>
            </div>

            {/* Feature grid with numbered items - similar to process section */}
            <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
                    {features.map((feature, idx) => {
                        const IconComponent = feature.icon ? ICON_MAP[feature.icon] || Shield : Shield;

                        return (
                            <motion.div
                                key={idx}
                                className="feature-card relative transition-all duration-300 hover:translate-y-[-4px]"
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                            >
                                {/* Feature Number - Large and prominent */}
                                <div className="mb-5">
                                    <span className="text-6xl md:text-7xl font-display font-light text-navy/80">
                                        {String(idx + 1).padStart(2, '0')}
                                    </span>
                                </div>

                                {/* Icon display */}
                                <div className="absolute top-6 right-0">
                                    <div className="w-12 h-12 flex items-center justify-center">
                                        <IconComponent size={24} className={`text-${idx % 5 === 0 ? '[#D42E12]' : // Mondrian red 
                                                idx % 5 === 1 ? '[#0A2342]' : // Navy
                                                    idx % 5 === 2 ? '[#F9D923]' : // Mondrian yellow
                                                        idx % 5 === 3 ? '[#226CE0]' : // Mondrian blue
                                                            '[#C99D56]' // Gold accent
                                            }`} />
                                    </div>
                                </div>

                                {/* Feature title - Clean typography */}
                                <h3 className="text-xl md:text-2xl font-display font-medium mb-4">
                                    {feature.title}
                                </h3>

                                {/* Feature description - Lighter weight, clean typography */}
                                <p className="text-base font-sans text-gray-700 leading-relaxed">
                                    {feature.description}
                                </p>

                                {/* Minimal Color Accent - Small dot with Mondrian colors */}
                                <div className={`mt-6 w-4 h-4 rounded-full ${idx % 3 === 0 ? 'bg-[#003B98]' : // Navy blue
                                        idx % 3 === 1 ? 'bg-[#D6001C]' : // Red
                                            'bg-[#FFD500]' // Yellow
                                    }`}></div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ServiceFeature; 
