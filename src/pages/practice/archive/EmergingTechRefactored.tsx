import React from 'react';
import PracticeTemplate from '@/components/practice/PracticeTemplate';
import { emergingTechData } from '@/data/practiceAreas/emergingTech';
import { logger } from '@/utils/logger';

const EmergingTechRefactored: React.FC = () => {
  logger.debug('EmergingTechRefactored component rendered');
  
  return (
    <PracticeTemplate
      title={emergingTechData.title}
      description={emergingTechData.description}
      principles={emergingTechData.principles}
      keyConsiderations={emergingTechData.keyConsiderations}
      process={emergingTechData.process}
      phoneNumber={emergingTechData.phoneNumber}
      ctaTitle={emergingTechData.ctaTitle}
      ctaDescription={emergingTechData.ctaDescription}
      ctaButtonText={emergingTechData.ctaButtonText}
      ctaTagline={emergingTechData.ctaTagline}
      phoneLabel={emergingTechData.phoneLabel}
    />
  );
};

export default EmergingTechRefactored; 