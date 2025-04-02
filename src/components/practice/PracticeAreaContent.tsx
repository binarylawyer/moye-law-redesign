import React, { ReactNode } from 'react';
import MondrianDecoration from '@/components/MondrianDecoration';

interface PracticeAreaContentProps {
  title: string;
  children: ReactNode;
  variant?: 'default' | 'alternate';
  decorationVariant?: number;
  decorationPosition?: 'left' | 'right' | 'none';
  subtitle?: string;
  minHeight?: 'normal' | 'large' | 'none';
}

const PracticeAreaContent: React.FC<PracticeAreaContentProps> = ({ 
  title, 
  children, 
  variant = 'default',
  decorationVariant = 1,
  decorationPosition = 'left',
  subtitle,
  minHeight = 'normal'
}) => {
  const bgClass = variant === 'alternate' ? 'bg-gray-50' : 'bg-white';
  const decorationClass = decorationPosition === 'left' ? 'left-0' : 'right-0';
  const getHeaderColor = () => {
    return variant === 'default' ? 'mondrian-blue' : 'mondrian-red';
  };
  
  // Set minimum height class based on the prop
  const getMinHeightClass = () => {
    switch (minHeight) {
      case 'large':
        return 'min-h-[500px]';
      case 'normal':
        return 'min-h-[300px]';
      default:
        return '';
    }
  };
  
  return (
    <section className={`${bgClass} py-8 relative overflow-hidden`}>
      <div className="container mx-auto px-8">
        <div className="mondrian-grid mb-6">
          <div className="col-span-3 mondrian-light-blue"></div>
          <div className="col-span-6 mondrian-grid-item bg-white p-6 text-center">
            {title && (
              <h2 className="reveal font-display text-3xl text-black mb-3">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="reveal text-xl text-black/80" style={{ transitionDelay: '0.1s' }}>
                {subtitle}
              </p>
            )}
          </div>
          <div className={`col-span-3 ${getHeaderColor()}`}></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className={`mondrian-border bg-white p-6 ${getMinHeightClass()}`}>
            {children}
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      {decorationVariant === 1 && (
        <div className={`absolute ${decorationClass} top-20 -z-10 w-32 h-32 border-8 border-[#D6001C]/20 rounded-full`}></div>
      )}
      {decorationVariant === 2 && (
        <div className={`absolute ${decorationClass} top-40 -z-10 w-40 h-40 bg-[#FFEB80]/20`}></div>
      )}
    </section>
  );
};

export default PracticeAreaContent; 