import React from 'react';
import PracticeTemplate from '@/components/practice/PracticeTemplate';
import { ipAssetProtectionData } from '@/data/practiceAreas/ipAssetProtection';
import { logger } from '@/utils/logger';

const IPAssetProtectionRefactored: React.FC = () => {
  logger.debug('IPAssetProtectionRefactored component rendered');
  
  return (
    <PracticeTemplate
      title={ipAssetProtectionData.title}
      description={ipAssetProtectionData.description}
      principles={ipAssetProtectionData.principles}
      keyConsiderations={ipAssetProtectionData.keyConsiderations}
      process={ipAssetProtectionData.process}
      phoneNumber={ipAssetProtectionData.phoneNumber}
      ctaTitle={ipAssetProtectionData.ctaTitle}
      ctaDescription={ipAssetProtectionData.ctaDescription}
      ctaButtonText={ipAssetProtectionData.ctaButtonText}
      ctaTagline={ipAssetProtectionData.ctaTagline}
      phoneLabel={ipAssetProtectionData.phoneLabel}
    />
  );
};

export default IPAssetProtectionRefactored; 