import React from 'react';
import { Process } from '@/types/services';

interface ServiceProcessProps {
  process: Process;
}

const ServiceProcess: React.FC<ServiceProcessProps> = ({ process }) => {
  // Add null check for safety, though ServiceTemplate should always pass it now
  if (!process) return null; 
  
  const { title, steps } = process;

  // Determine grid columns based on number of steps for responsiveness
  const gridColsClass = steps.length <= 3 ? 'md:grid-cols-3' : 
                        steps.length === 4 ? 'md:grid-cols-4' : 
                        'md:grid-cols-3 lg:grid-cols-5'; // Default for 5+

  return (
    // Remove outer section padding
    <div className="process-section">
      {/* Title Area */}
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-display mb-4 text-primary">{title}</h2>
        {/* Optional description if added to Process type later */}
        {/* <p className="text-lg text-gray-700 max-w-3xl mx-auto md:mx-0">Optional description here</p> */}
      </div>

      {/* Mondrian Grid for Process Steps */}
      <div className={`grid grid-cols-1 ${gridColsClass} gap-0 mondrian-border`}> {/* Add main border */}
        {steps.map((step, idx) => {
          // Assign Mondrian colors cyclically
          const colors = ['mondrian-red', 'mondrian-blue', 'mondrian-yellow'];
          const colorClass = colors[idx % colors.length];
          
          // Determine border classes based on position in grid
          // This logic is simplified and might need refinement for perfect grid lines across rows
          const borderClasses = `mondrian-border-t ${idx > 0 ? 'md:border-l-4' : 'md:border-l-0'} border-black`;

          return (
            <div 
              key={idx}
              // Apply dynamic borders and padding
              className={`p-6 md:p-8 flex flex-col ${borderClasses}`}
              data-animation="fade-in"
              data-animation-delay={`${idx * 100}`}
            >
              {/* Step Number with Color Accent */}
              <div className="mb-4 flex items-center">
                 <span className={`inline-block w-8 h-8 mr-3 flex items-center justify-center font-display text-sm text-white ${colorClass}`}>
                   {String(idx + 1).padStart(2, '0')}
                 </span>
                 <h3 className="font-display text-xl text-primary flex-1">{step.title}</h3>
              </div>
                            
              {/* Step Description */}
              <p className="text-gray-700 flex-grow">{step.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceProcess; 