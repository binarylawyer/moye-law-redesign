import React, { useEffect } from 'react';
import ServiceTemplate from '@/components/services/ServiceTemplate';
import { digitalAssetProtectionData } from '@/data/services/digitalAssetProtection';
import { logger } from '@/utils/logger';

const DigitalAssetProtection: React.FC = () => {
  // Add component ID for debugging
  useEffect(() => {
    console.log("COMPONENT_ID: SERVICE-DIGITAL-ASSET-PROTECTION-101");
    logger.debug('DigitalAssetProtection service page rendered');
  }, []);

  return (
    <ServiceTemplate 
      serviceName={digitalAssetProtectionData.title}
      serviceId="digital-asset-protection"
      description={digitalAssetProtectionData.description}
      featuredContent={digitalAssetProtectionData.featuredContent}
      features={digitalAssetProtectionData.features}
      considerations={digitalAssetProtectionData.considerations}
      process={digitalAssetProtectionData.process}
      relatedServices={digitalAssetProtectionData.relatedServices}
      ctaTitle={digitalAssetProtectionData.ctaTitle}
      ctaDescription={digitalAssetProtectionData.ctaDescription}
      ctaButtonText={digitalAssetProtectionData.ctaButtonText}
      phoneNumber={digitalAssetProtectionData.phoneNumber}
    />
  );
};

export default DigitalAssetProtection; 