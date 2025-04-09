import React from "react";
import { motion } from "framer-motion";

interface PersonaSelectionProps {
  onSelect: (persona: string) => void;
}

const PersonaSelection: React.FC<PersonaSelectionProps> = ({ onSelect }) => {
  // Animation variants for staggered card entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      }
    }
  };
  
  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="step-container text-center">
      <h2 className="text-2xl md:text-3xl font-display font-bold text-navy mb-2">
        What Brings You Here Today?
      </h2>
      <p className="text-gray-600 mb-8">
        Select the option that best describes your needs:
      </p>
      
      <motion.div 
        className="grid md:grid-cols-3 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.button 
          onClick={() => onSelect("Protect My Startup's Future")}
          className="persona-button p-6 border-2 border-gray-200 rounded-lg hover:border-gold hover:shadow-lg transition-all bg-white text-left flex flex-col h-full"
          variants={cardVariants}
        >
          <span className="text-4xl mb-4">🚀</span>
          <h3 className="text-xl font-display font-bold text-navy mb-2">
            Protect My Startup's Future
          </h3>
          <p className="text-gray-600 text-sm">
            For tech founders seeking to protect intellectual property and digital assets
          </p>
        </motion.button>
        
        <motion.button 
          onClick={() => onSelect("Plan Care for My Aging Parent")}
          className="persona-button p-6 border-2 border-gray-200 rounded-lg hover:border-gold hover:shadow-lg transition-all bg-white text-left flex flex-col h-full"
          variants={cardVariants}
        >
          <span className="text-4xl mb-4">👨‍👩‍👧</span>
          <h3 className="text-xl font-display font-bold text-navy mb-2">
            Plan Care for My Aging Parent
          </h3>
          <p className="text-gray-600 text-sm">
            For professionals balancing career with elder care responsibilities
          </p>
        </motion.button>
        
        <motion.button 
          onClick={() => onSelect("Manage Multi-Generational Wealth")}
          className="persona-button p-6 border-2 border-gray-200 rounded-lg hover:border-gold hover:shadow-lg transition-all bg-white text-left flex flex-col h-full"
          variants={cardVariants}
        >
          <span className="text-4xl mb-4">💼</span>
          <h3 className="text-xl font-display font-bold text-navy mb-2">
            Manage Multi-Generational Wealth
          </h3>
          <p className="text-gray-600 text-sm">
            For high-net-worth individuals focused on legacy and tax planning
          </p>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default PersonaSelection; 