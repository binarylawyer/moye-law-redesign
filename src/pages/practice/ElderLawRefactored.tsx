import React from 'react';
import { logger } from '@/utils/logger';
import PracticeTemplate from '@/components/practice/PracticeTemplate';
import { elderLawData } from '@/data/practiceAreas/elderLaw';

const ElderLawRefactored: React.FC = () => {
  logger.debug('ElderLawRefactored component rendered');
  
  return (
    <PracticeTemplate
      title={elderLawData.title}
      description={elderLawData.description}
      principles={elderLawData.principles}
      process={elderLawData.process}
      phoneNumber={elderLawData.phoneNumber}
      phoneLabel={elderLawData.phoneLabel}
      ctaTitle={elderLawData.ctaTitle}
      ctaDescription={elderLawData.ctaDescription}
      ctaButtonText={elderLawData.ctaButtonText}
      ctaTagline={elderLawData.ctaTagline}
    />
  );
};

export default ElderLawRefactored; 