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
    
    // Simple animation system
    const elements = document.querySelectorAll('[data-animation]');
    elements.forEach(element => {
      const delay = element.getAttribute('data-animation-delay') || '0';
      setTimeout(() => {
        element.classList.add('animate-in');
      }, parseInt(delay));
    });
    
    // Clean up
    return () => {
      logger.debug(`ServiceTemplate unmounted: ${serviceName}`);
    };
  }, [serviceName, serviceId]);
  
  return (
    // Apply a base background and ensure it spans full width
    <div className="service-page bg-white" data-service-id={serviceId}>
      {/* Hero Section - Assuming full width or contained within its own section */}
      <ServiceHero 
        title={serviceName}
        description={description}
      />
      
      {/* Main Content Wrapper - Use container for centered content with padding */}
      {/* We can potentially add Mondrian grid classes here if all content follows a strict grid */}
      <main className="container mx-auto px-4 py-16 md:py-24 space-y-16 md:space-y-24">
        
        {/* Featured Content Section */}
        {/* Wrap each section to allow individual styling/borders if needed */}
        <div className="content-section">
          <ServiceFeaturedContent content={featuredContent} />
        </div>
        
        {/* Service Features */}
        <div className="content-section">
          <ServiceFeature features={features} />
        </div>
        
        {/* Key Considerations */}
        <div className="content-section">
          <ServiceConsiderations considerations={considerations} />
        </div>
        
        {/* Process */}
        <div className="content-section">
          <ServiceProcess process={process} />
        </div>
        
        {/* Additional Custom Content */}
        {children && (
          <div className="content-section">
             {children}
          </div>
        )}
        
        {/* Related Services */}
        <div className="content-section">
          <ServiceRelated 
            relatedServices={relatedServices}
          />
        </div>
        
        {/* Call to Action - Often full-width or distinct layout, maybe outside main */}
        {/* We'll keep it separate for now */}
        
      </main> { /* End Main Content Wrapper */}
      
      {/* Call to Action Section - Could be full width with its own background/borders */}
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