import React, { ReactNode } from 'react';
import MondrianDecoration from '@/components/MondrianDecoration';

interface PracticeAreaContentProps {
  title: string;
  children: ReactNode;
  variant?: 'default' | 'alternate';
  decorationVariant?: number;
  decorationPosition?: 'left' | 'right' | 'none';
}

const PracticeAreaContent: React.FC<PracticeAreaContentProps> = ({ 
  title, 
  children, 
  variant = 'default',
  decorationVariant = 1,
  decorationPosition = 'left'
}) => {
  // Determine color based on variant
  const getHeaderColor = () => {
    return variant === 'default' ? 'mondrian-blue' : 'mondrian-red';
  };
  
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-8">
        <div className="mondrian-grid mb-16">
          <div className="col-span-3 mondrian-white border-r-4 border-b-4 border-black"></div>
          <div className="col-span-6 mondrian-grid-item bg-white p-8 text-center">
            <h2 className="reveal font-serif text-black text-3xl mb-4">{title}</h2>
          </div>
          <div className={`col-span-3 ${getHeaderColor()}`}></div>
        </div>
        
        <div className="max-w-5xl mx-auto relative">
          {decorationPosition === 'left' && (
            <div className="hidden md:block absolute -left-24 top-10">
              <MondrianDecoration position="left" variant={decorationVariant} />
            </div>
          )}
          
          <div className="mondrian-border bg-white p-8">
            {children}
          </div>
          
          {decorationPosition === 'right' && (
            <div className="hidden md:block absolute -right-24 top-32">
              <MondrianDecoration position="right" variant={decorationVariant} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreaContent; 