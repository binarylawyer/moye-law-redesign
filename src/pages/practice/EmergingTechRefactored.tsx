import React from 'react';
import { logger } from '@/utils/logger';
import PracticeTemplate from '@/components/practice/PracticeTemplate';
import { emergingTechData } from '@/data/practiceAreas/emergingTech';

const EmergingTechRefactored: React.FC = () => {
  logger.debug('EmergingTechRefactored component rendered');
  
  return (
    <PracticeTemplate
      title={emergingTechData.title}
      description={emergingTechData.description}
      principles={emergingTechData.principles}
      process={emergingTechData.process}
      phoneNumber={emergingTechData.phoneNumber}
      phoneLabel={emergingTechData.phoneLabel}
      ctaTitle={emergingTechData.ctaTitle}
      ctaDescription={emergingTechData.ctaDescription}
      ctaButtonText={emergingTechData.ctaButtonText}
      ctaTagline={emergingTechData.ctaTagline}
    />
  );
};

export default EmergingTechRefactored; 