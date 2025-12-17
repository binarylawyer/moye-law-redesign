import React from 'react';
import PracticeTemplate from '@/components/practice/PracticeTemplate';
import { realEstateData } from '@/data/practiceAreas/realEstate';

export const metadata = {
    title: realEstateData.title,
    description: realEstateData.description,
};

export default function RealEstatePage() {
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
}
