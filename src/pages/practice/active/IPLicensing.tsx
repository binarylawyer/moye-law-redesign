import React from 'react';
import PracticeTemplate from '@/components/practice/PracticeTemplate';
import { ipLicensingData } from '@/data/practiceAreas/ipLicensing';
import { logger } from '@/utils/logger';

const IPLicensing: React.FC = () => {
  logger.debug('IPLicensing component rendered');
  
  return (
    <PracticeTemplate
      title={ipLicensingData.title}
      description={ipLicensingData.description}
      principles={ipLicensingData.principles}
      keyConsiderations={ipLicensingData.keyConsiderations}
      process={ipLicensingData.process}
      phoneNumber={ipLicensingData.phoneNumber}
      ctaTitle={ipLicensingData.ctaTitle}
      ctaDescription={ipLicensingData.ctaDescription}
      ctaButtonText={ipLicensingData.ctaButtonText}
      ctaTagline={ipLicensingData.ctaTagline}
      phoneLabel={ipLicensingData.phoneLabel}
    />
  );
};

export default IPLicensing; 