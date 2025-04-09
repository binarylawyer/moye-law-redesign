import React, { useEffect } from "react";
import { motion } from "framer-motion";

interface PersonaSelectionProps {
  onSelect: (persona: string) => void;
}

const PersonaSelection: React.FC<PersonaSelectionProps> = ({ onSelect }) => {
  // Log when component mounts
  useEffect(() => {
    console.log("PersonaSelection component mounted");
    
    // Check if framer-motion is available
    if (typeof motion !== 'function' && typeof motion !== 'object') {
      console.error("Framer motion not available:", motion);
    } else {
      console.log("Framer motion initialized properly");
    }
    
    return () => {
      console.log("PersonaSelection component unmounted");
    };
  }, []);
  
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
  
  // Enhanced click handler with logging
  const handlePersonaSelect = (persona: string) => {
    console.log(`Persona card clicked: "${persona}"`);
    try {
      console.log("Calling onSelect function...");
      onSelect(persona);
      console.log("onSelect function called successfully");
    } catch (error) {
      console.error("Error in persona selection handler:", error);
    }
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
        onAnimationStart={() => console.log("Container animation started")}
        onAnimationComplete={() => console.log("Container animation completed")}
      >
        <motion.button 
          onClick={() => handlePersonaSelect("Protect My Startup's Future")}
          className="persona-button p-6 border-2 border-gray-200 rounded-lg hover:border-gold hover:shadow-lg transition-all bg-white text-left flex flex-col h-full"
          variants={cardVariants}
          whileHover={{ scale: 1.03 }}
          data-persona="tech"
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
          onClick={() => handlePersonaSelect("Plan Care for My Aging Parent")}
          className="persona-button p-6 border-2 border-gray-200 rounded-lg hover:border-gold hover:shadow-lg transition-all bg-white text-left flex flex-col h-full"
          variants={cardVariants}
          whileHover={{ scale: 1.03 }}
          data-persona="caregiver"
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
          onClick={() => handlePersonaSelect("Manage Multi-Generational Wealth")}
          className="persona-button p-6 border-2 border-gray-200 rounded-lg hover:border-gold hover:shadow-lg transition-all bg-white text-left flex flex-col h-full"
          variants={cardVariants}
          whileHover={{ scale: 1.03 }}
          data-persona="wealth"
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
      
      {/* Fallback buttons if animation is causing issues */}
      <div className="mt-6 pt-6 border-t border-gray-100 hidden">
        <p className="text-sm text-gray-500 mb-4">If you experience any issues with the options above, please use these alternatives:</p>
        <div className="flex flex-wrap gap-2 justify-center">
          <button 
            onClick={() => handlePersonaSelect("Protect My Startup's Future")}
            className="px-4 py-2 bg-navy text-white rounded-md text-sm"
          >
            Tech Founder
          </button>
          <button 
            onClick={() => handlePersonaSelect("Plan Care for My Aging Parent")}
            className="px-4 py-2 bg-navy text-white rounded-md text-sm"
          >
            Caregiver
          </button>
          <button 
            onClick={() => handlePersonaSelect("Manage Multi-Generational Wealth")}
            className="px-4 py-2 bg-navy text-white rounded-md text-sm"
          >
            Wealth Manager
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonaSelection; 