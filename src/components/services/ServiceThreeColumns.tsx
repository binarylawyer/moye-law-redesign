import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const ServiceThreeColumns: React.FC = () => {
  return (
    <div className="container mx-auto px-8 max-w-7xl">
      <h2 className="font-display text-4xl text-navy mb-16 text-center">How We're Different</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Column 1 */}
        <motion.div 
          className="border-t-8 border-[#D6001C] pt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-display text-2xl text-navy mb-4">Traditional Firms</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-gray-400 mr-3 flex-shrink-0 mt-1" />
              <span className="text-lg text-navy/70">Separate specialists for different legal needs</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-gray-400 mr-3 flex-shrink-0 mt-1" />
              <span className="text-lg text-navy/70">Paper-heavy processes</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-gray-400 mr-3 flex-shrink-0 mt-1" />
              <span className="text-lg text-navy/70">One-size-fits-all templates</span>
            </li>
          </ul>
        </motion.div>
        
        {/* Column 2 */}
        <motion.div 
          className="border-t-8 border-[#003B98] pt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="font-display text-2xl text-navy mb-4">Tech-Only Solutions</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-gray-400 mr-3 flex-shrink-0 mt-1" />
              <span className="text-lg text-navy/70">Efficiency without personal connection</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-gray-400 mr-3 flex-shrink-0 mt-1" />
              <span className="text-lg text-navy/70">Missing nuance and complex needs</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-gray-400 mr-3 flex-shrink-0 mt-1" />
              <span className="text-lg text-navy/70">Limited human oversight</span>
            </li>
          </ul>
        </motion.div>
        
        {/* Column 3 */}
        <motion.div 
          className="border-t-8 border-[#FFD500] pt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="font-display text-2xl text-navy mb-4">The Moye Difference</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-1" />
              <span className="text-lg text-navy/70">Integrated approach across all legal needs</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-1" />
              <span className="text-lg text-navy/70">Tech-enhanced + human-centered</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-1" />
              <span className="text-lg text-navy/70">Family values with professional precision</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceThreeColumns; 