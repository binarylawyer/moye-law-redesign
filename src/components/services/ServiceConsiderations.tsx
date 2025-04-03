import React, { useState } from 'react';
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
  title = "Key Considerations"
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
    // Remove outer section padding and bg-gray-50
    <div className="considerations-section">
      {/* Title Area */}
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-display mb-4 text-primary">{title}</h2>
        {/* Removed subtitle */}
      </div>

      {/* Use grid for considerations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mondrian-border"> {/* Main border */}
        {considerations.map((item, idx) => {
          const isOpen = openItems.includes(idx);
          // Define border classes dynamically
          const borderClasses = `mondrian-border-t ${idx % 2 !== 0 ? 'md:border-l-4' : 'md:border-l-0'} ${idx >= considerations.length - (considerations.length % 2 === 0 ? 2 : 1) ? 'border-b-0' : 'md:border-b-4'} border-black`;

          return (
            // Each consideration is a grid cell
            <div 
              key={idx}
              className={`bg-white ${borderClasses}`}
              data-animation="fade-in"
              data-animation-delay={`${idx * 100}`}
            >
              {/* Button uses flex, padding, and Mondrian interactive style */}
              <button
                className={`flex justify-between w-full p-6 md:p-8 text-left font-display text-lg ${isOpen ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100 focus:outline-none mondrian-interactive`}
                onClick={() => toggleItem(idx)}
                aria-expanded={isOpen}
              >
                <span className="text-primary flex-1 mr-4">{item.question}</span>
                {/* Use a simple +/- indicator with Mondrian color */}
                <span className={`flex-shrink-0 w-6 h-6 flex items-center justify-center text-white ${isOpen ? 'mondrian-blue' : 'mondrian-red'}`}>
                  {isOpen ? '−' : '+'}
                </span>
                {/* <Icon
                  name={isOpen ? "ChevronUp" : "ChevronDown"}
                  className={`w-5 h-5 text-primary transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
                /> */}
              </button>
              
              {/* Answer revealed below, padding matches button */}
              {isOpen && (
                <div className="p-6 md:p-8 pt-0">
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceConsiderations; 