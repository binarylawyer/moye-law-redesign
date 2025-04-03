import React, { useEffect } from 'react';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceFeature from '@/components/services/ServiceFeature';
import ServiceConsiderations from '@/components/services/ServiceConsiderations';
import ServiceProcess from '@/components/services/ServiceProcess';
import ServiceCTA from '@/components/services/ServiceCTA';
import ServiceRelated from '@/components/services/ServiceRelated';
import ServiceFeaturedContent from '@/components/services/ServiceFeaturedContent';
import { logger } from '@/utils/logger';
import { ServiceFeature as ServiceFeatureType, FeaturedContent, ServiceConsideration, Process, RelatedService } from '@/types/services';

interface ServiceTemplateProps {
  serviceName: string;
  serviceId: string;
  description: string;
  featuredContent: FeaturedContent;
  features: ServiceFeatureType[];
  considerations: ServiceConsideration[];
  process: Process;
  relatedServices: RelatedService[];
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
  phoneNumber?: string;
  children?: React.ReactNode;
}

const ServiceTemplate: React.FC<ServiceTemplateProps> = ({
  serviceName,
  serviceId,
  description,
  featuredContent,
  features,
  considerations,
  process,
  relatedServices,
  ctaTitle,
  ctaDescription,
  ctaButtonText,
  phoneNumber,
  children,
}) => {
  useEffect(() => {
    // Log component mount for debugging
    logger.debug(`ServiceTemplate mounted: ${serviceName} (${serviceId})`);
    
    // Clean up
    return () => {
      logger.debug(`ServiceTemplate unmounted: ${serviceName}`);
    };
  }, [serviceName, serviceId]);
  
  return (
    <>
      {/* Hero Section */}
      <ServiceHero 
        title={serviceName}
        description={description}
      />
      
      {/* Main Content - MOMA-inspired layout with more deliberate spacing */}
      <main className="min-h-screen">
        
        {/* Featured Content Section - Full width with museum-like presentation */}
        <section className="mb-24 md:mb-40">
          <ServiceFeaturedContent content={featuredContent} />
        </section>
        
        {/* Service Features - Offset grid with museum exhibit feel */}
        <section className="mb-24 md:mb-36 bg-gray-50 py-20">
          <ServiceFeature features={features} />
        </section>
        
        {/* Process Section - Breathing room with gallery-like spacing */}
        <section className="mb-24 md:mb-36 max-w-7xl mx-auto px-4 lg:px-8">
          <ServiceProcess process={process} />
        </section>
        
        {/* Additional Custom Content - Museum-like flexibility */}
        {children && (
          <section className="mb-24 md:mb-36">
             {children}
          </section>
        )}
        
        {/* Key Considerations - MOMA-style whitespace and layout */}
        {considerations && considerations.length > 0 && (
          <section className="mb-24 md:mb-36 bg-white py-20">
            <ServiceConsiderations considerations={considerations} />
          </section>
        )}
        
        {/* Related Services - Gallery-like presentation */}
        <section className="mb-24 md:mb-36 max-w-7xl mx-auto px-4 lg:px-8">
          <ServiceRelated relatedServices={relatedServices} />
        </section>
        
      </main>
      
      {/* Call to Action Section */}
      <ServiceCTA
        title={ctaTitle}
        description={ctaDescription}
        buttonText={ctaButtonText}
        phoneNumber={phoneNumber}
      />
    </>
  );
};

export default ServiceTemplate; 