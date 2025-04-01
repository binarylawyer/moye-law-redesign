import React, { ReactNode, useEffect, useState, Children, isValidElement, cloneElement } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ConsultationCTA from '@/components/ConsultationCTA';
import MondrianDividerCTA from '@/components/MondrianDividerCTA';
import { specializedServiceData, getServiceByName, specializedServicePathMap } from '@/data/practiceAreasData';
import PracticeAreaHero from './PracticeAreaHero';

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
  const [serviceInfo, setServiceInfo] = useState<{title: string, description: string} | null>(null);
  
  // Find service data if it exists
  useEffect(() => {
    if (serviceId) {
      // First try with the exact ID
      const foundService = specializedServiceData.find(service => 
        service.id === serviceId ||
        service.id.replace(/-/g, '') === serviceId.replace(/-/g, '')
      );
      
      if (foundService) {
        setServiceInfo({
          title: foundService.title,
          description: foundService.description
        });
        console.log('Service info found:', foundService.title, foundService.description);
      } else {
        // If not found by ID, try to match by normalized name
        const normalizedId = serviceId.toLowerCase().replace(/\s+/g, '-');
        const serviceByName = specializedServiceData.find(service => 
          service.title.toLowerCase().replace(/\s+/g, '-') === normalizedId ||
          service.shortTitle?.toLowerCase().replace(/\s+/g, '-') === normalizedId
        );

        if (serviceByName) {
          setServiceInfo({
            title: serviceByName.title,
            description: serviceByName.description
          });
          console.log('Service info found by name:', serviceByName.title, serviceByName.description);
        } else {
          console.warn(`No service info found for ID: ${serviceId}`);
        }
      }
    }
  }, [serviceId]);

  // Function to render the hero directly if we have service info
  const renderHero = () => {
    if (!serviceInfo) return null;
    
    return (
      <section className="py-20 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-8">
          <div className="mondrian-grid">
            {/* Mondrian-style colored block - color determined by title */}
            <div className={`col-span-3 ${getMondrianColor(serviceInfo.title)}`}></div>
            
            {/* Content in white block with Mondrian border */}
            <div className="col-span-6 mondrian-grid-item bg-white p-8 text-center">
              <h1 className="reveal font-serif text-black text-4xl md:text-5xl lg:text-6xl mb-8 !opacity-100">
                {serviceInfo.title}
              </h1>
              <p className="reveal text-xl text-black/80 mx-auto !opacity-100">
                {serviceInfo.description}
              </p>
            </div>
            
            {/* White block with black border */}
            <div className="col-span-3 mondrian-white border-r-4 border-b-4 border-black"></div>
          </div>
        </div>
      </section>
    );
  };
  
  // Helper function to determine color based on first letter of title
  const getMondrianColor = (title: string) => {
    const firstLetter = title.toLowerCase().charAt(0);
    if (firstLetter <= 'h') return 'mondrian-red';
    if (firstLetter <= 'p') return 'mondrian-blue';
    return 'mondrian-yellow';
  };

  // Function to check if children contain a PracticeAreaHero
  const hasHeroComponent = () => {
    let hasHero = false;
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
    return hasHero;
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow pt-48 relative">
        {/* Decorative Mondrian lines that extend beyond screen width */}
        <div className="absolute top-64 left-0 w-full h-4 mondrian-blue -z-10"></div>
        <div className="absolute top-[32rem] left-0 w-full h-4 mondrian-red -z-10"></div>
        
        {/* If we have service info and no hero in children, render our own hero */}
        {serviceInfo && !hasHeroComponent() && renderHero()}
        
        {/* Always render children */}
        {children}
        
        {/* Consistent Mondrian divider with CTA specific to practice area */}
        <div className="max-w-7xl mx-auto px-8 mb-16">
          <MondrianDividerCTA 
            text={`Have questions about ${areaName}?`}
          />
        </div>
        
        <ConsultationCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default PracticeAreaTemplate; 