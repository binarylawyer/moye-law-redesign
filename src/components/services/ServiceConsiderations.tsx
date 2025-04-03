import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { ServiceConsideration } from '@/types/services';
import { 
  Brush, 
  FileContract, 
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
const CARD_ICONS = [Shield, FileContract, Brush, Scale, BookOpen, Search, Layers, Award, FileText];

const ServiceConsiderations: React.FC<ServiceConsiderationsProps> = ({
  considerations,
  title = "Frequently Asked Questions"
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  // Add additional placeholder cards if needed to reach minimum of 7
  const allCards = considerations.length >= 7 
    ? considerations 
    : [
        ...considerations,
        ...Array(Math.max(0, 7 - considerations.length))
          .fill(0)
          .map((_, i) => ({
            title: `Additional Consideration ${i + 1}`,
            description: "Our firm offers comprehensive guidance on all aspects of art and entertainment law, ensuring your creative works are protected and your business interests are secure."
          }))
      ];

  // Limit to maximum of 9 cards
  const displayCards = allCards.slice(0, 9);

  return (
    <section 
      ref={sectionRef}
      className="py-24 md:py-40 bg-gray-50 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 gap-x-12 lg:gap-x-24">
          {/* Fixed left column with title and description */}
          <div className="lg:col-span-3 lg:sticky lg:top-32 self-start">
            <motion.h2 
              className="text-3xl md:text-4xl font-display font-normal mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {title}
            </motion.h2>
            <motion.p
              className="text-gray-700 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Key considerations when navigating the legal aspects of art and entertainment.
            </motion.p>
            <motion.div 
              className="w-16 h-1 bg-[#8B0000]"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>
          
          {/* Scrolling cards on the right */}
          <div 
            ref={containerRef}
            className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {displayCards.map((card, idx) => {
              // Use modulo to assign icons and keep within bounds
              const IconComponent = CARD_ICONS[idx % CARD_ICONS.length];
              
              return (
                <motion.div
                  key={idx}
                  className="bg-white rounded-md shadow-sm overflow-hidden group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  whileHover={{ 
                    y: -8, 
                    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                    transition: { duration: 0.2 }
                  }}
                >
                  {/* Card header with colored accent */}
                  <div 
                    className={`h-1 w-full ${
                      idx % 5 === 0 ? 'bg-[#D42E12]' : // Red
                      idx % 5 === 1 ? 'bg-[#0A2342]' : // Navy
                      idx % 5 === 2 ? 'bg-[#F9D923]' : // Yellow
                      idx % 5 === 3 ? 'bg-[#226CE0]' : // Blue
                      'bg-[#C99D56]' // Gold
                    }`}
                  />
                  
                  {/* Card content */}
                  <div className="p-6 md:p-8 h-full flex flex-col">
                    {/* Icon with animation */}
                    <div className="mb-6 flex items-center">
                      <motion.div
                        className={`p-3 rounded-full bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300`}
                        whileHover={{ rotate: 5 }}
                      >
                        <IconComponent size={24} className={`
                          transition-colors duration-300
                          ${idx % 5 === 0 ? 'text-[#D42E12]' : 
                            idx % 5 === 1 ? 'text-[#0A2342]' : 
                            idx % 5 === 2 ? 'text-[#F9D923]' : 
                            idx % 5 === 3 ? 'text-[#226CE0]' : 
                            'text-[#C99D56]'}
                        `} />
                      </motion.div>
                    </div>
                    
                    {/* Title with hover effect */}
                    <h3 className="text-xl font-display mb-4 group-hover:text-[#0A2342] transition-colors duration-300">
                      {card.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-700 text-base leading-relaxed">
                      {card.description}
                    </p>
                    
                    {/* Read more indicator that appears on hover */}
                    <div className="mt-auto pt-4 overflow-hidden">
                      <motion.div 
                        className="flex items-center text-sm font-medium text-[#0A2342] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ y: 20 }}
                        whileInView={{ y: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span>Read more</span>
                        <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
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