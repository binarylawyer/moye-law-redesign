import React from 'react';

interface ProcessStep {
  title: string;
  description: string;
}

interface PracticeAreaProcessProps {
  title?: string;
  steps: ProcessStep[];
}

const PracticeAreaProcess: React.FC<PracticeAreaProcessProps> = ({ 
  title = "Our Process", 
  steps 
}) => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-8">
        <div className="mondrian-grid mb-6">
          <div className="col-span-3 mondrian-light-blue"></div>
          <div className="col-span-6 mondrian-grid-item bg-white p-6 text-center">
            <h2 className="reveal font-display text-black text-3xl mb-3">{title}</h2>
          </div>
          <div className="col-span-3 mondrian-white border-r-4 border-b-4 border-black"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="reveal mondrian-grid mb-3"
              style={{ transitionDelay: `${0.1 * index}s` }}
            >
              {/* For even indices, show red block and content */}
              {index % 2 === 0 && (
                <>
                  <div className="col-span-12 md:col-span-3 mondrian-red flex items-center justify-center p-4">
                    <span className="font-display text-white text-3xl">0{index + 1}</span>
                  </div>
                  <div className="col-span-12 md:col-span-9 mondrian-grid-item bg-white p-5">
                    <h3 className="font-display text-black text-xl mb-2">{step.title}</h3>
                    <p className="text-black/80">{step.description}</p>
                  </div>
                </>
              )}
              
              {/* For odd indices, show blue block and content */}
              {index % 2 === 1 && (
                <>
                  <div className="col-span-12 md:col-span-9 mondrian-grid-item bg-white p-5">
                    <h3 className="font-display text-black text-xl mb-2">{step.title}</h3>
                    <p className="text-black/80">{step.description}</p>
                  </div>
                  <div className="col-span-12 md:col-span-3 mondrian-light-blue flex items-center justify-center p-4">
                    <span className="font-display text-white text-3xl">0{index + 1}</span>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreaProcess; 