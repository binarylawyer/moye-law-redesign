import React from 'react';
import { logger } from '@/utils/logger';
import PracticeTemplate from '@/components/practice/PracticeTemplate';
import { ipAssetProtectionData } from '@/data/practiceAreas/ipAssetProtection';

const IPAssetProtectionRefactored: React.FC = () => {
  logger.debug('IPAssetProtectionRefactored component rendered');
  
  return (
    <PracticeTemplate
      title={ipAssetProtectionData.title}
      description={ipAssetProtectionData.description}
      principles={ipAssetProtectionData.principles}
      process={ipAssetProtectionData.process}
      phoneNumber={ipAssetProtectionData.phoneNumber}
      phoneLabel={ipAssetProtectionData.phoneLabel}
      ctaTitle={ipAssetProtectionData.ctaTitle}
      ctaDescription={ipAssetProtectionData.ctaDescription}
      ctaButtonText={ipAssetProtectionData.ctaButtonText}
      ctaTagline={ipAssetProtectionData.ctaTagline}
    />
  );
};

export default IPAssetProtectionRefactored; 