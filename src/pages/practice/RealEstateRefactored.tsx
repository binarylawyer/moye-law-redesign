import React from 'react';
import { logger } from '@/utils/logger';
import PracticeTemplate from '@/components/practice/PracticeTemplate';
import { realEstateData } from '@/data/practiceAreas/realEstate';

const RealEstateRefactored: React.FC = () => {
  logger.debug('RealEstateRefactored component rendered');
  
  return (
    <PracticeTemplate
      title={realEstateData.title}
      description={realEstateData.description}
      principles={realEstateData.principles}
      process={realEstateData.process}
      phoneNumber={realEstateData.phoneNumber}
      phoneLabel={realEstateData.phoneLabel}
      ctaTitle={realEstateData.ctaTitle}
      ctaDescription={realEstateData.ctaDescription}
      ctaButtonText={realEstateData.ctaButtonText}
      ctaTagline={realEstateData.ctaTagline}
    />
  );
};

export default RealEstateRefactored; 