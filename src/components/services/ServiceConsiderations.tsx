import React, { useState } from 'react';
import { ServiceConsideration } from '@/types/services';
import { Icon } from '@/components/ui/Icon';

interface ServiceConsiderationsProps {
  considerations: ServiceConsideration[];
  title?: string;
}

const ServiceConsiderations: React.FC<ServiceConsiderationsProps> = ({
  considerations,
  title = "Key Considerations"
}) => {
  // Track which items are open
  const [openItems, setOpenItems] = useState<number[]>([]);

  // Toggle open/closed state
  const toggleItem = (idx: number) => {
    setOpenItems(prev => 
      prev.includes(idx) 
        ? prev.filter(i => i !== idx) 
        : [...prev, idx]
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-display mb-4">{title}</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Important factors to consider when protecting your assets
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {considerations.map((item, idx) => {
            const isOpen = openItems.includes(idx);
            
            return (
              <div 
                key={idx}
                className="mb-4"
                data-animation="fade-in"
                data-animation-delay={`${idx * 100}`}
              >
                <div className="w-full">
                  <button
                    className="flex justify-between w-full px-6 py-4 text-left text-lg font-display bg-white border mondrian-border-thin hover:bg-gray-50 focus:outline-none"
                    onClick={() => toggleItem(idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.question}</span>
                    <Icon
                      name={isOpen ? "ChevronUp" : "ChevronDown"}
                      className={`w-5 h-5 text-primary transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
                    />
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 py-4 bg-white border-l border-r border-b border-black">
                      <p className="text-gray-700">{item.answer}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceConsiderations; 