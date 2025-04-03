import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// Assuming Icon component maps names to SVGs or similar
// import { Icon } from '@/components/ui/Icon'; 
// Using a simple span for icon placeholder for now
const Icon = ({ name, className }: { name: string, className?: string }) => <span className={`inline-block ${className}`}>({name})</span>;

interface ServiceCTAProps {
  title: string;
  description: string;
  buttonText: string;
  phoneNumber?: string;
  ctaTagline?: string; // Add tagline prop from practice CTA
}

const ServiceCTA: React.FC<ServiceCTAProps> = ({
  title,
  description,
  buttonText,
  phoneNumber,
  ctaTagline // Destructure tagline
}) => {
  return (
    <section className="py-16 bg-white border-t border-black/10">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Refined CTA Container */}
        <div className="flex flex-col md:flex-row items-stretch rounded-none overflow-hidden">
          
          {/* Left Content Area - Text and CTA */}
          <div className="w-full md:w-2/3 p-8 md:p-12 flex flex-col justify-center relative">
            {/* Subtle accent line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-navy hidden md:block"></div>
            
            {/* Headline with luxury feel */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              {ctaTagline && (
                <p className="uppercase text-xs font-sans tracking-widest text-gray-500 mb-2">
                  {ctaTagline}
                </p>
              )}
              <h2 className="text-2xl md:text-3xl font-display font-medium text-navy leading-tight">
                {title}
              </h2>
            </motion.div>
            
            {/* Description with refined typography */}
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-base text-gray-700 mb-8 max-w-xl font-sans leading-relaxed"
            >
              {description}
            </motion.p>
            
            {/* More elegant action buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-start gap-6"
            >
              <Link 
                to="/contact" 
                className="group relative overflow-hidden px-8 py-3 border border-navy bg-navy text-white font-sans font-medium text-sm hover:bg-navy/90 transition-colors duration-300"
              >
                {/* Subtle slide animation on hover */}
                <span className="relative z-10 flex items-center">
                  {buttonText}
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </Link>
              
              {phoneNumber && (
                <a 
                  href={`tel:${phoneNumber.replace(/[^0-9]/g, '')}`}
                  className="flex items-center text-navy hover:text-gold transition-colors duration-300 font-sans"
                >
                  <Icon name="Phone" className="mr-2 h-4 w-4" />
                  <span className="text-sm font-medium">{phoneNumber}</span>
                </a>
              )}
            </motion.div>
          </div>
          
          {/* Right Area - Refined Mondrian Design */}
          <div className="hidden md:block md:w-1/3 relative">
            {/* Elegant Mondrian-inspired pattern */}
            <div className="h-full grid grid-cols-3 grid-rows-3">
              <div className="col-span-2 row-span-2 bg-white border-l border-black/10"></div>
              <div className="col-span-1 row-span-2 mondrian-blue opacity-90"></div>
              <div className="col-span-1 row-span-1 mondrian-yellow opacity-90"></div>
              <div className="col-span-1 row-span-1 bg-white border-t border-l border-black/10"></div>
              <div className="col-span-1 row-span-1 mondrian-red opacity-90"></div>
            </div>
            
            {/* Subtle diagonal line element */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-black/10 -rotate-12 transform origin-center"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA; 