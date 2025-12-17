import React from 'react';
import PracticeTemplate from '@/components/practice/PracticeTemplate';
import { trustsEstatesData } from '@/data/practiceAreas/trustsEstates';

export const metadata = {
    title: trustsEstatesData.title,
    description: trustsEstatesData.description,
};

export default function TrustsEstatesPage() {
    return (
        <PracticeTemplate
            title={trustsEstatesData.title}
            description={trustsEstatesData.description}
            principles={trustsEstatesData.principles}
            keyConsiderations={trustsEstatesData.keyConsiderations}
            process={trustsEstatesData.process}
            phoneNumber={trustsEstatesData.phoneNumber}
            ctaTitle={trustsEstatesData.ctaTitle}
            ctaDescription={trustsEstatesData.ctaDescription}
            ctaButtonText={trustsEstatesData.ctaButtonText}
            ctaTagline={trustsEstatesData.ctaTagline}
            phoneLabel={trustsEstatesData.phoneLabel}
        />
    );
}
