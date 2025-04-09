import React, { useEffect } from "react";

interface PersonaSelectionProps {
  onSelect: (persona: string) => void;
}

const PersonaSelection: React.FC<PersonaSelectionProps> = ({ onSelect }) => {
  // Log when component mounts
  useEffect(() => {
    console.log("PersonaSelection component mounted (motion removed for testing)");
    return () => {
      console.log("PersonaSelection component unmounted");
    };
  }, []);

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
      
      {/* Standard div instead of motion.div */}
      <div 
        className="grid md:grid-cols-3 gap-4"
      >
        {/* Standard button instead of motion.button */}
        <button 
          onClick={() => handlePersonaSelect("Protect My Startup's Future")}
          className="persona-button p-6 border-2 border-gray-200 rounded-lg hover:border-gold hover:shadow-lg transition-all bg-white text-left flex flex-col h-full"
          data-persona="tech"
        >
          <span className="text-4xl mb-4">🚀</span>
          <h3 className="text-xl font-display font-bold text-navy mb-2">
            Protect My Startup's Future
          </h3>
          <p className="text-gray-600 text-sm">
            For tech founders seeking to protect intellectual property and digital assets
          </p>
        </button>
        
        {/* Standard button instead of motion.button */}
        <button 
          onClick={() => handlePersonaSelect("Plan Care for My Aging Parent")}
          className="persona-button p-6 border-2 border-gray-200 rounded-lg hover:border-gold hover:shadow-lg transition-all bg-white text-left flex flex-col h-full"
          data-persona="caregiver"
        >
          <span className="text-4xl mb-4">👨‍👩‍👧</span>
          <h3 className="text-xl font-display font-bold text-navy mb-2">
            Plan Care for My Aging Parent
          </h3>
          <p className="text-gray-600 text-sm">
            For professionals balancing career with elder care responsibilities
          </p>
        </button>
        
        {/* Standard button instead of motion.button */}
        <button 
          onClick={() => handlePersonaSelect("Manage Multi-Generational Wealth")}
          className="persona-button p-6 border-2 border-gray-200 rounded-lg hover:border-gold hover:shadow-lg transition-all bg-white text-left flex flex-col h-full"
          data-persona="wealth"
        >
          <span className="text-4xl mb-4">💼</span>
          <h3 className="text-xl font-display font-bold text-navy mb-2">
            Manage Multi-Generational Wealth
          </h3>
          <p className="text-gray-600 text-sm">
            For high-net-worth individuals focused on legacy and tax planning
          </p>
        </button>
      </div>
      
      {/* Fallback buttons (can likely be removed later) */}
      {/* <div className="mt-6 pt-6 border-t border-gray-100 hidden"> ... </div> */}
    </div>
  );
};

export default PersonaSelection; 