import React from 'react';
import PracticeTemplate from '@/components/practice/PracticeTemplate';
import { emergingTechData } from '@/data/practiceAreas/emergingTech';

// Metadata for SEO (Optional but recommended)
export const metadata = {
    title: emergingTechData.title,
    description: emergingTechData.description,
};

export default function EmergingTechPage() {
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
}
