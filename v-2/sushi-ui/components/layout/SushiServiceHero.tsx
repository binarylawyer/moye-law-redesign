import React from 'react';
import { motion } from 'framer-motion';
import { SushiTheme } from '../../theme/types';

interface SushiServiceHeroProps {
    title: string;
    description: string;
    theme?: SushiTheme; // Optional theme support for future
}

const SushiServiceHero: React.FC<SushiServiceHeroProps> = ({ title, description }) => {
    return (
        <section className="relative pt-24 pb-12 overflow-hidden bg-white">
            {/* Geometric design elements */}
            {/* Colors kept hardcoded for now or we can use theme tokens if passed */}
            <div className="absolute top-0 left-0 w-32 h-full bg-[#D6001C]/80 -z-0"></div>
            <div className="absolute bottom-0 right-0 w-64 h-48 bg-[#FFD500]/80 -z-0"></div>
            <div className="absolute top-24 right-0 w-24 h-64 bg-[#003B98]/80 -z-0"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="max-w-4xl ml-4 md:ml-12 lg:ml-20">
                    {/* Content */}
                    <motion.h1
                        className="font-display text-4xl md:text-5xl text-navy mb-4 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {title}
                    </motion.h1>

                    <motion.p
                        className="text-base md:text-lg text-navy/70 mb-6 max-w-xl leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        {description}
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default SushiServiceHero;
