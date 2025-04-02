import React from 'react';
import PracticeTemplate from '@/components/practice/PracticeTemplate';
import { elderLawData } from '@/data/practiceAreas/elderLaw';
import { logger } from '@/utils/logger';

const ElderLaw: React.FC = () => {
  logger.debug('ElderLaw component rendered');
  
  return (
    <PracticeTemplate
      title={elderLawData.title}
      description={elderLawData.description}
      principles={elderLawData.principles}
      keyConsiderations={elderLawData.keyConsiderations}
      process={elderLawData.process}
      phoneNumber={elderLawData.phoneNumber}
      ctaTitle={elderLawData.ctaTitle}
      ctaDescription={elderLawData.ctaDescription}
      ctaButtonText={elderLawData.ctaButtonText}
      ctaTagline={elderLawData.ctaTagline}
      phoneLabel={elderLawData.phoneLabel}
    />
  );
};

export default ElderLaw; 