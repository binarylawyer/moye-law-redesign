import React from 'react';
import { motion } from 'framer-motion';

// Simplified props
interface ServiceHeroProps {
  title: string;
  description: string;
}

const ServiceHero: React.FC<ServiceHeroProps> = ({ title, description }) => {
  return (
    <section className="bg-white pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-start max-w-4xl">
          {/* Large, minimal title */}
          <motion.h1 
            className="text-5xl md:text-7xl font-display font-normal tracking-tight text-black mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {title}
          </motion.h1>
          
          {/* Description with ample whitespace */}
          <motion.p 
            className="text-lg md:text-xl text-gray-800 max-w-2xl leading-relaxed font-sans"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {description}
          </motion.p>
          
          {/* Minimal accent line - inspired by MoMA's subtle separators */}
          <motion.div 
            className="mt-20 w-24 h-px bg-black"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.8 }}
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceHero; 