import React, { ReactNode, useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ConsultationCTA from '@/components/ConsultationCTA';
import MondrianDividerCTA from '@/components/MondrianDividerCTA';
import { specializedServiceData } from '@/data/practiceAreasData';

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
      const foundService = specializedServiceData.find(service => service.id === serviceId);
      if (foundService) {
        setServiceInfo({
          title: foundService.title,
          description: foundService.description
        });
      }
    }
  }, [serviceId]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow pt-48 relative">
        {/* Decorative Mondrian lines that extend beyond screen width */}
        <div className="absolute top-64 left-0 w-full h-4 mondrian-blue -z-10"></div>
        <div className="absolute top-[32rem] left-0 w-full h-4 mondrian-red -z-10"></div>
        
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