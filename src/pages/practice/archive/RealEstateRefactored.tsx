import React from 'react';
import PracticeTemplate from '@/components/practice/PracticeTemplate';
import { realEstateData } from '@/data/practiceAreas/realEstate';
import { logger } from '@/utils/logger';

const RealEstateRefactored: React.FC = () => {
  logger.debug('RealEstateRefactored component rendered');
  
  return (
    <PracticeTemplate
      title={realEstateData.title}
      description={realEstateData.description}
      principles={realEstateData.principles}
      keyConsiderations={realEstateData.keyConsiderations}
      process={realEstateData.process}
      phoneNumber={realEstateData.phoneNumber}
      ctaTitle={realEstateData.ctaTitle}
      ctaDescription={realEstateData.ctaDescription}
      ctaButtonText={realEstateData.ctaButtonText}
      ctaTagline={realEstateData.ctaTagline}
      phoneLabel={realEstateData.phoneLabel}
    />
  );
};

export default RealEstateRefactored; 