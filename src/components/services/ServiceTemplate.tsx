import React, { ReactNode, useEffect, useState, Children, isValidElement } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MondrianDividerCTA from '@/components/MondrianDividerCTA';
import { specializedServiceData, getServiceByName } from '@/data/practiceAreasData'; // We'll keep using the same data source
import ServiceHero from './ServiceHero';
import CallToAction from '@/components/shared/CallToAction';
import { logger } from '@/utils/logger';

interface ServiceTemplateProps {
  children: ReactNode;
  serviceName: string;
  serviceId?: string;
}

const ServiceTemplate: React.FC<ServiceTemplateProps> = ({ 
  children, 
  serviceName,
  serviceId
}) => {
  const [serviceInfo, setServiceInfo] = useState<{title: string, description: string} | null>(null);
  
  // Find service data if it exists
  useEffect(() => {
    try {
      if (serviceId) {
        logger.debug('ServiceTemplate: Looking for service with ID:', serviceId);
        
        // Log available services to help with debugging
        const availableServices = specializedServiceData?.map?.(s => s.id).join(', ') || 'No services available';
        logger.debug('Available services:', availableServices);
        
        // First try with the exact ID
        const foundService = specializedServiceData?.find?.(service => 
          service.id === serviceId ||
          service.id.replace(/-/g, '') === serviceId.replace(/-/g, '')
        );
        
        if (foundService) {
          setServiceInfo({
            title: foundService.title,
            description: foundService.description
          });
          logger.debug('Service info found by exact ID match:', foundService.id, foundService.title);
        } else {
          // If not found by ID, try to match by normalized name
          const normalizedId = serviceId.toLowerCase().replace(/\s+/g, '-');
          logger.debug('Trying normalized ID:', normalizedId);
          
          const serviceByName = specializedServiceData?.find?.(service => {
            const normalizedTitle = service.title?.toLowerCase().replace(/\s+/g, '-');
            const normalizedShortTitle = service.shortTitle?.toLowerCase().replace(/\s+/g, '-');
            
            logger.debug(`Comparing with: ${service.id} (${normalizedTitle}, ${normalizedShortTitle})`);
            
            return normalizedTitle === normalizedId || normalizedShortTitle === normalizedId;
          });

          if (serviceByName) {
            setServiceInfo({
              title: serviceByName.title,
              description: serviceByName.description
            });
            logger.debug('Service info found by name:', serviceByName.title, serviceByName.description);
          } else {
            // Fallback to the serviceName if no service found
            logger.warn(`No service info found for ID: ${serviceId}. Using serviceName instead.`);
            setServiceInfo({
              title: serviceName,
              description: `${serviceName} provided by Moye Law.`
            });
          }
        }
      } else {
        // Set a default if no serviceId is provided
        setServiceInfo({
          title: serviceName,
          description: `${serviceName} provided by Moye Law.`
        });
      }
    } catch (error) {
      logger.error('Error in ServiceTemplate when finding service info:', error);
      // Set a fallback in case of error
      setServiceInfo({
        title: serviceName,
        description: `${serviceName} provided by Moye Law.`
      });
    }
  }, [serviceId, serviceName]);

  // Function to render the hero directly if we have service info
  const renderHero = () => {
    if (!serviceInfo) return null;
    
    return (
      <section className="py-12 md:py-16 relative overflow-hidden">
        <div className="container mx-auto px-8">
          <div className="mondrian-grid">
            {/* Mondrian-style colored block - color determined by title */}
            <div className={`col-span-3 ${getMondrianColor(serviceInfo.title)}`}></div>
            
            {/* Content in white block with Mondrian border */}
            <div className="col-span-6 mondrian-grid-item bg-white p-6 text-center">
              <h1 className="reveal font-serif text-black text-4xl md:text-5xl mb-6 !opacity-100">
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
  const getMondrianColor = (title: string = '') => {
    const firstLetter = (title || '').toLowerCase().charAt(0);
    if (firstLetter <= 'h') return 'mondrian-red';
    if (firstLetter <= 'p') return 'mondrian-blue';
    return 'mondrian-yellow';
  };

  // Function to check if children contain a ServiceHero
  const hasHeroComponent = () => {
    let hasHero = false;
    try {
      Children.forEach(children, (child) => {
        if (isValidElement(child)) {
          // Check if the component is ServiceHero by name or type
          const componentName = typeof child.type === 'function' 
            ? (child.type as any).name 
            : typeof child.type === 'string' ? child.type : '';
          
          if (componentName === 'ServiceHero' || child.type === ServiceHero) {
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
        
        {/* If we have service info and no hero in children, render our own hero */}
        {serviceInfo && !hasHeroComponent() && renderHero()}
        
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
        
        {/* Consistent Mondrian divider with CTA specific to service */}
        <div className="max-w-7xl mx-auto px-8 mb-1">
          <MondrianDividerCTA 
            text={`Have questions about ${serviceName}? Call us for a free consultation:`}
          />
        </div>
        
        {/* New Mondrian-inspired Call To Action */}
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default ServiceTemplate; 