import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
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
    <section className="py-24 bg-white border-t-4 border-navy relative overflow-hidden">
      {/* Geometric design elements */}
      <div className="absolute top-0 right-0 w-32 h-full bg-[#003B98]/80 -z-0"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#FFD500]/80 -z-0"></div>
      
      <div className="container mx-auto px-8 max-w-7xl relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              className="font-display text-4xl text-navy mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {title}
            </motion.h2>
            
            <motion.p 
              className="text-xl text-navy/70 max-w-xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {description}
            </motion.p>
          </div>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link 
              to="/contact" 
              className="w-full sm:w-auto bg-[#003B98] hover:bg-navy text-white font-medium py-3 px-6 transition-colors border-4 border-black"
            >
              {buttonText}
            </Link>
            
            {phoneNumber && (
              <div className="flex items-center">
                <div className="h-10 w-10 bg-[#D6001C] flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-navy/50 mb-1">Call us</p>
                  <p className="text-navy font-medium">{phoneNumber}</p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA; 