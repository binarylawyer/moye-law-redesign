import React from 'react';

interface FormProgressProps {
  currentStep: number;
  totalSteps?: number;
}

const FormProgress: React.FC<FormProgressProps> = ({ 
  currentStep, 
  totalSteps = 3 
}) => {
  return (
    <div className="form-progress mb-8">
      <div className="flex justify-between items-center">
        {Array.from({ length: totalSteps }, (_, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber <= currentStep;
          const isCurrentStep = stepNumber === currentStep;
          
          return (
            <div key={stepNumber} className="flex items-center flex-1">
              {/* Step circle */}
              <div className="flex flex-col items-center">
                <div 
                  className={`
                    w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold
                    ${isActive 
                      ? 'bg-gold text-white' 
                      : 'bg-gray-200 text-gray-600'}
                    ${isCurrentStep ? 'ring-4 ring-gold/20' : ''}
                  `}
                >
                  {stepNumber}
                </div>
                
                {/* Step label */}
                <div className="text-xs mt-2 text-center text-navy">
                  {stepNumber === 1 && "Persona"}
                  {stepNumber === 2 && "Details"}
                  {stepNumber === 3 && "Contact"}
                </div>
              </div>
              
              {/* Connector line between steps (except after last step) */}
              {stepNumber < totalSteps && (
                <div 
                  className={`
                    flex-1 h-1 mx-2
                    ${stepNumber < currentStep ? 'bg-gold' : 'bg-gray-200'}
                  `}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FormProgress; 