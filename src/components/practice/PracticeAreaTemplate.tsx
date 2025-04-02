import React, { ReactNode, Children, isValidElement } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MondrianDividerCTA from '@/components/MondrianDividerCTA';
import PracticeAreaHero from './PracticeAreaHero';
import CallToAction from '@/components/shared/CallToAction';
import { logger } from '@/utils/logger';

interface PracticeAreaTemplateProps {
  children: ReactNode;
  areaName: string;
  serviceId?: string;
}

const PracticeAreaTemplate: React.FC<PracticeAreaTemplateProps> = ({ 
  children, 
  areaName,
  serviceId
}) => {
  // Log for debugging
  logger.debug(`PracticeAreaTemplate rendering for: ${areaName} (${serviceId || 'no ID'})`);

  // Function to check if children contain a PracticeAreaHero
  const hasHeroComponent = () => {
    let hasHero = false;
    try {
      Children.forEach(children, (child) => {
        if (isValidElement(child)) {
          // Check if the component is PracticeAreaHero by name or type
          const componentName = typeof child.type === 'function' 
            ? (child.type as any).name 
            : typeof child.type === 'string' ? child.type : '';
          
          if (componentName === 'PracticeAreaHero' || child.type === PracticeAreaHero) {
            hasHero = true;
          }
        }
      });
    } catch (error) {
      logger.error('Error checking for hero component:', error);
    }
    return hasHero;
  };

  // Check if children have any content
  const hasContent = () => {
    return Children.count(children) > 0;
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow pt-48 relative">
        {/* Decorative Mondrian lines that extend beyond screen width */}
        <div className="absolute top-64 left-0 w-full h-4 mondrian-blue -z-10"></div>
        <div className="absolute top-[32rem] left-0 w-full h-4 mondrian-red -z-10"></div>
        
        {/* Always render children with no space between components */}
        <div className="space-y-0 [&>*]:mb-0">
          {children}
        </div>
        
        {/* If there's no content, add a placeholder to help guide users */}
        {!hasContent() && (
          <div className="max-w-7xl mx-auto px-8 mb-16 py-8 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50">
            <p className="text-center text-gray-500 italic">Add service-specific content here</p>
          </div>
        )}
        
        {/* Consistent Mondrian divider with CTA specific to practice area */}
        <div className="max-w-7xl mx-auto px-8 mb-1">
          <MondrianDividerCTA 
            text={`Have questions about ${areaName}? Call us for a free consultation:`}
          />
        </div>
        
        {/* New Mondrian-inspired Call To Action */}
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default PracticeAreaTemplate; 