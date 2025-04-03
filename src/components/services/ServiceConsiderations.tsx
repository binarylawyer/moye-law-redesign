import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ServiceConsideration } from '@/types/services';
import { 
  Brush, 
  FilePlus, 
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
const CARD_ICONS = [Shield, FilePlus, Brush, Scale, BookOpen, Search, Layers, Award, FileText];

const ServiceConsiderations: React.FC<ServiceConsiderationsProps> = ({
  considerations,
  title = "Frequently Asked Questions"
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const headingWrapperRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  
  // Track which cards are hovered
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  // State for heading position
  const [headingPosition, setHeadingPosition] = useState<'static' | 'fixed' | 'bottom'>('static');
  const [headingStyles, setHeadingStyles] = useState<React.CSSProperties>({});

  // Fixed heading positioning logic
  useEffect(() => {
    if (!sectionRef.current || !headingRef.current || !headingWrapperRef.current || !cardsContainerRef.current) {
      return;
    }

    const updateHeadingPosition = () => {
      const sectionRect = sectionRef.current!.getBoundingClientRect();
      const headingRect = headingRef.current!.getBoundingClientRect();
      const cardsRect = cardsContainerRef.current!.getBoundingClientRect();
      const wrapperRect = headingWrapperRef.current!.getBoundingClientRect();
      
      const topOffset = 80; // Top padding when fixed
      const sectionTop = sectionRect.top;
      const sectionBottom = sectionRect.bottom;
      const headingHeight = headingRect.height;
      const cardsBottom = cardsRect.bottom;
      
      // Get the initial offset before any scrolling happens
      const initialTop = wrapperRect.top - sectionTop;
      
      if (window.scrollY > sectionTop + initialTop - topOffset) {
        // If we've scrolled past where the heading should start being fixed
        if (window.scrollY + topOffset + headingHeight < sectionTop + cardsRect.height) {
          // Fixed position as we scroll through the cards
          setHeadingPosition('fixed');
          setHeadingStyles({
            position: 'fixed',
            top: `${topOffset}px`,
            width: `${wrapperRect.width}px`
          });
        } else {
          // Bottom position when we've scrolled to the end of the cards
          setHeadingPosition('bottom');
          setHeadingStyles({
            position: 'absolute',
            top: `${cardsRect.height - headingHeight}px`,
            width: `${wrapperRect.width}px`
          });
        }
      } else {
        // Above the sticky point, normal positioning
        setHeadingPosition('static');
        setHeadingStyles({
          position: 'static',
          top: 'auto',
          width: 'auto'
        });
      }
    };

    // Initial positioning
    updateHeadingPosition();
    
    // Update on scroll and resize
    window.addEventListener('scroll', updateHeadingPosition);
    window.addEventListener('resize', updateHeadingPosition);
    
    return () => {
      window.removeEventListener('scroll', updateHeadingPosition);
      window.removeEventListener('resize', updateHeadingPosition);
    };
  }, []);

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
      style={{ minHeight: '100vh' }}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 gap-x-8 lg:gap-x-16">
          {/* Fixed left column with title and description */}
          <div 
            ref={headingWrapperRef}
            className="lg:col-span-3 relative"
          >
            <div
              ref={headingRef}
              style={{
                ...headingStyles,
                transition: 'all 0.2s ease'
              }}
            >
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
          </div>
          
          {/* Scrolling cards on the right */}
          <div 
            ref={cardsContainerRef}
            className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {displayCards.map((card, idx) => {
              // Use modulo to assign icons and keep within bounds
              const IconComponent = CARD_ICONS[idx % CARD_ICONS.length];
              const isHovered = hoveredCard === idx;
              
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
                    zIndex: 10,
                    transition: { duration: 0.2 }
                  }}
                  onHoverStart={() => setHoveredCard(idx)}
                  onHoverEnd={() => setHoveredCard(null)}
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
                  
                  {/* Card content - Reducing size a bit */}
                  <div className="p-5 md:p-6 h-full flex flex-col">
                    {/* Icon with animation */}
                    <div className="mb-3 flex items-center">
                      <motion.div
                        className={`p-2 rounded-full bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300`}
                        whileHover={{ rotate: 5 }}
                      >
                        <IconComponent size={20} className={`
                          transition-colors duration-300
                          ${idx % 5 === 0 ? 'text-[#D42E12]' : 
                            idx % 5 === 1 ? 'text-[#0A2342]' : 
                            idx % 5 === 2 ? 'text-[#F9D923]' : 
                            idx % 5 === 3 ? 'text-[#226CE0]' : 
                            'text-[#C99D56]'}
                        `} />
                      </motion.div>
                    </div>
                    
                    {/* Title with hover effect - Slightly smaller */}
                    <h3 className="text-lg font-display mb-3 group-hover:text-[#0A2342] transition-colors duration-300">
                      {card.title}
                    </h3>
                    
                    {/* Description - Truncated by default */}
                    <p className="text-gray-700 text-sm leading-relaxed line-clamp-2 group-hover:line-clamp-none">
                      {card.description}
                    </p>
                    
                    {/* Expandable content that drops down on hover */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div 
                          className="mt-3 pt-3 border-t border-gray-100"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="text-gray-600 text-xs">
                            Our specialized attorneys provide comprehensive counsel on all aspects of {card.title.toLowerCase()}, 
                            ensuring your creative and business interests remain protected throughout the process.
                          </p>
                          
                          <motion.div 
                            className="flex items-center text-xs font-medium text-[#0A2342] mt-3"
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                          >
                            <span>Learn more</span>
                            <svg className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
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