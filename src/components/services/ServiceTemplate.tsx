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
    // Apply clean white background with no borders
    <div className="service-page bg-white" data-service-id={serviceId}>
      {/* Hero Section */}
      <ServiceHero 
        title={serviceName}
        description={description}
      />
      
      {/* Main Content - Remove container constraints to allow full-width sections */}
      <main className="space-y-16 md:space-y-0">
        
        {/* Featured Content Section */}
        <section>
          <ServiceFeaturedContent content={featuredContent} />
        </section>
        
        {/* Service Features */}
        <section>
          <ServiceFeature features={features} />
        </section>
        
        {/* Process Section */}
        <section>
          <ServiceProcess process={process} />
        </section>
        
        {/* Key Considerations */}
        <section>
          <ServiceConsiderations considerations={considerations} />
        </section>
        
        {/* Additional Custom Content */}
        {children && (
          <section>
             {children}
          </section>
        )}
        
        {/* Related Services */}
        <section>
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
    </div>
  );
};

export default ServiceTemplate; 