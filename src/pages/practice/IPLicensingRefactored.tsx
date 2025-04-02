import React from 'react';
import { logger } from '@/utils/logger';
import PracticeTemplate from '@/components/practice/PracticeTemplate';
import { ipLicensingData } from '@/data/practiceAreas/ipLicensing';

const IPLicensingRefactored: React.FC = () => {
  logger.debug('IPLicensingRefactored component rendered');
  
  return (
    <PracticeTemplate
      title={ipLicensingData.title}
      description={ipLicensingData.description}
      principles={ipLicensingData.principles}
      process={ipLicensingData.process}
      phoneNumber={ipLicensingData.phoneNumber}
      phoneLabel={ipLicensingData.phoneLabel}
      ctaTitle={ipLicensingData.ctaTitle}
      ctaDescription={ipLicensingData.ctaDescription}
      ctaButtonText={ipLicensingData.ctaButtonText}
      ctaTagline={ipLicensingData.ctaTagline}
    />
  );
};

export default IPLicensingRefactored; 