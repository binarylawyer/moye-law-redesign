import React from 'react';
import { motion } from 'framer-motion';

// Simplified props
interface ServiceHeroProps {
  title: string;
  description: string;
}

const ServiceHero: React.FC<ServiceHeroProps> = ({ title, description }) => {
  return (
    <section className="relative pt-48 pb-32 overflow-hidden bg-white">
      {/* Geometric design elements */}
      <div className="absolute top-0 left-0 w-32 h-full bg-[#D6001C]/80 -z-0"></div>
      <div className="absolute bottom-0 right-0 w-64 h-48 bg-[#FFD500]/80 -z-0"></div>
      <div className="absolute top-64 right-0 w-24 h-64 bg-[#003B98]/80 -z-0"></div>
      
      <div className="container mx-auto px-8 max-w-7xl relative z-10">
        <div className="max-w-4xl ml-40">
          <motion.h1 
            className="font-display text-5xl md:text-7xl text-navy mb-10 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {title}
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-navy/70 mb-16 max-w-xl"
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

export default ServiceHero; 