import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ServiceConsideration } from '@/types/services';
// Use span for placeholder icon
// import { Icon } from '@/components/ui/Icon';
const Icon = ({ name, className }: { name: string, className?: string }) => <span className={`inline-block ${className}`}>({name})</span>;

interface ServiceConsiderationsProps {
  considerations: ServiceConsideration[];
  title?: string;
}

const ServiceConsiderations: React.FC<ServiceConsiderationsProps> = ({
  considerations,
  title = "Frequently Asked Questions"
}) => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (idx: number) => {
    setOpenItems(prev => 
      prev.includes(idx) 
        ? prev.filter(i => i !== idx) 
        : [...prev, idx]
    );
  };

  return (
    <div className="considerations-section py-16 md:py-28">
      {/* Title with MoMA-inspired styling */}
      <motion.h2 
        className="text-3xl md:text-5xl font-display font-normal tracking-tight mb-16 md:mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h2>

      {/* Clean, minimal FAQ layout */}
      <div className="max-w-4xl">
        {considerations.map((item, idx) => {
          const isOpen = openItems.includes(idx);
          
          return (
            <motion.div 
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="mb-8 pb-8 border-b border-gray-200 last:border-0"
            >
              {/* Question button with minimal styling */}
              <button
                className="flex justify-between w-full text-left group focus:outline-none"
                onClick={() => toggleItem(idx)}
                aria-expanded={isOpen}
              >
                <span className="text-xl md:text-2xl font-display">{item.question}</span>
                <span className="ml-4 flex-shrink-0 text-2xl font-light transform transition-transform duration-200 group-hover:text-gray-700">
                  {isOpen ? '−' : '+'}
                </span>
              </button>
              
              {/* Animated answer panel */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-6 text-gray-700 font-sans leading-relaxed max-w-3xl">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceConsiderations; 