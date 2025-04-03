import React, { useRef } from 'react';
import { Process } from '@/types/services';
import { motion, useInView } from 'framer-motion';

interface ServiceProcessProps {
  process: Process;
}

// Color sequence configuration
const colorSequence = [
  { main: 'mondrian-blue', accent: 'mondrian-red' },
  { main: 'mondrian-red', accent: 'mondrian-yellow' },
  { main: 'mondrian-yellow', accent: 'mondrian-blue' }
];

// Mondrian Connector Component
const MondrianConnector = ({ currentColor, nextColor }: { currentColor: string; nextColor: string }) => (
  <div className="grid grid-cols-3 grid-rows-2 w-24 h-16 mx-auto my-8 transform -rotate-6">
    <div className={`${currentColor} col-span-2 border-2 border-black`}></div>
    <div className="bg-white border-2 border-black"></div>
    <div className="bg-white border-2 border-black"></div>
    <div className={`${nextColor} col-span-2 border-2 border-black`}></div>
  </div>
);

const ServiceProcess: React.FC<ServiceProcessProps> = ({ process }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  if (!process) return null;
  const { title, steps } = process;

  return (
    <div ref={containerRef} className="process-section py-16">
      {/* Title Area */}
      <motion.div 
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">{title}</h2>
      </motion.div>

      {/* Steps Container */}
      <div className="max-w-6xl mx-auto">
        {steps.map((step, idx) => {
          const colors = colorSequence[idx % colorSequence.length];
          const nextColors = colorSequence[(idx + 1) % colorSequence.length];

          return (
            <motion.div 
              key={idx}
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              {/* Step Card */}
              <div 
                className={`
                  bg-white p-8 border-4 border-black 
                  hover:shadow-xl transition-shadow duration-300
                  ${colors.main} bg-opacity-5
                `}
              >
                {/* Number and Title */}
                <div className="flex items-center mb-6">
                  <div className={`
                    ${colors.main} w-16 h-16 
                    flex items-center justify-center 
                    border-4 border-black
                    font-display font-bold text-2xl
                  `}>
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-display text-2xl ml-6">{step.title}</h3>
                </div>

                {/* Description */}
                <p className="font-sans text-lg text-gray-700 ml-22">
                  {step.description}
                </p>

                {/* Accent Line */}
                <div className={`
                  absolute left-0 top-0 bottom-0 w-1 
                  ${colors.accent}
                `}></div>
              </div>

              {/* Connector between steps */}
              {idx < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: idx * 0.2 + 0.3 }}
                >
                  <MondrianConnector 
                    currentColor={colors.main} 
                    nextColor={nextColors.main} 
                  />
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceProcess; 