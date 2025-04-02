import React from 'react';
import { logger } from '@/utils/logger';
import PracticeTemplate from '@/components/practice/PracticeTemplate';
import { trustsEstatesData } from '@/data/practiceAreas/trustsEstates';

const TrustsEstatesRefactored: React.FC = () => {
  logger.debug('TrustsEstatesRefactored component rendered');
  
  return (
    <PracticeTemplate
      title={trustsEstatesData.title}
      description={trustsEstatesData.description}
      principles={trustsEstatesData.principles}
      keyConsiderations={trustsEstatesData.keyConsiderations}
      process={trustsEstatesData.process}
      phoneNumber={trustsEstatesData.phoneNumber}
      phoneLabel={trustsEstatesData.phoneLabel}
      ctaTitle={trustsEstatesData.ctaTitle}
      ctaDescription={trustsEstatesData.ctaDescription}
      ctaButtonText={trustsEstatesData.ctaButtonText}
      ctaTagline={trustsEstatesData.ctaTagline}
    />
  );
};

export default TrustsEstatesRefactored; 