import React from 'react';
import { Process } from '@/types/services';

interface ServiceProcessProps {
  process: Process;
}

const ServiceProcess: React.FC<ServiceProcessProps> = ({ process }) => {
  if (!process) return null; 
  
  const { title, steps } = process;

  return (
    <div className="process-section">
      {/* Title Area */}
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-display mb-4 text-primary">{title}</h2>
      </div>

      {/* Mondrian Grid for Process Steps - 3 columns, wider gap, wider container */}
      {/* Apply border to the container, not individual items unless needed for internal lines */}
      <div className={`grid grid-cols-1 md:grid-cols-3 gap-16 max-w-7xl mx-auto`}> {/* Use gap-16, max-w-7xl */}
        {/* Slice to show only the first 3 steps */}
        {steps.slice(0, 3).map((step, idx) => {
          const colors = ['mondrian-red', 'mondrian-blue', 'mondrian-yellow'];
          const colorClass = colors[idx % colors.length];
          // Use border color utility based on the background color class
          const borderColorClass = colorClass.replace('bg-', 'border-'); 

          return (
            // Each step is a card with thick border and large padding
            <div 
              key={idx}
              className={`reveal bg-white p-12 border-4 border-black flex flex-col`}
              data-animation="fade-in"
              data-animation-delay={`${idx * 100}`}
            >
              {/* Simplified Top section like in PracticeTemplate */}
              <div className="flex items-start mb-6 pb-4 border-b-2 border-gray-200">
                 {/* Number with Color Border */}
                 <span 
                   className={`flex-shrink-0 w-12 h-12 flex items-center justify-center font-display text-xl font-bold mr-6 border-4 ${borderColorClass}`}>
                   {String(idx + 1).padStart(2, '0')}
                 </span>
                 {/* Title */}
                 <h3 className="font-display text-primary text-2xl pt-2">{step.title}</h3>
              </div>
                            
              {/* Step Description */}
              <p className="text-gray-700 text-lg flex-grow">{step.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceProcess; 