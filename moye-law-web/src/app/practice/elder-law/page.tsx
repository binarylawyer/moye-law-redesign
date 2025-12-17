import React from 'react';
import PracticeTemplate from '@/components/practice/PracticeTemplate';
import { elderLawData } from '@/data/practiceAreas/elderLaw';

export const metadata = {
    title: elderLawData.title,
    description: elderLawData.description,
};

export default function ElderLawPage() {
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
}
