import React from 'react';
import V2PageWrapper from '../components/V2PageWrapper';

// Legacy Components - CORE
import Hero from '../../src/components/Hero';
import Approach from '../../src/components/Approach';
import TeamMembers from '../../src/components/TeamMembers';
import PracticeAreas from '../../src/components/PracticeAreas';
import Testimonial from '../../src/components/Testimonial';
import ConsultationCTA from '../../src/components/ConsultationCTA';
import TrustIndicators from '../../src/components/TrustIndicators';
import MondrianIntro from '../../src/components/MondrianIntro';

// Legacy Components - PRACTICE & SERVICE
import PracticeAreaHero from '../../src/components/practice/PracticeAreaHero';
import ServiceHero from '../../src/components/services/ServiceHero';
import ServiceFeatureImage from '../../src/components/services/ServiceFeatureImage';

// Wrapper for Legacy Isolation (attempt to reset V2 resets if needed, or just contain)
const LegacyContainer = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="border-4 border-gray-300 mb-12">
        <div className="bg-gray-100 p-4 border-b-4 border-gray-300 flex justify-between items-center">
            <h3 className="font-mono text-xs font-bold text-gray-500 uppercase">{title}</h3>
            <span className="bg-red-100 text-red-800 text-[10px] px-2 py-1 font-mono rounded">LEGACY_ARTIFACT</span>
        </div>
        <div className="relative overflow-hidden bg-white">
            {children}
        </div>
    </div>
);

const ArchivedComponentsPage = () => {
    return (
        <V2PageWrapper className="pt-20">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <header className="mb-20 border-b-4 border-navy pb-8">
                    <span className="font-mono text-gold text-xs tracking-[0.3em] uppercase block mb-4">Moye Law Systems v2.1</span>
                    <h1 className="font-display text-6xl text-navy leading-none">Archived <br />Components.</h1>
                    <p className="mt-4 font-sans text-gray-500 max-w-2xl">
                        A quarantined gallery of legacy Vue/React components from Version 1.0.
                        Review for migration or deprecation.
                        <span className="block mt-2 font-mono text-xs text-red-600">WARNING: Styles may conflict with Global V2 Reset.</span>
                    </p>
                </header>

                <div className="space-y-24">

                    {/* HERO */}
                    <LegacyContainer title="src/components/Hero.tsx">
                        {/* Hero requires relative positioning context usually supplied by layout */}
                        <div className="relative h-[600px]">
                            <Hero />
                        </div>
                    </LegacyContainer>

                    {/* MONDRIAN INTRO (V1.5) */}
                    <LegacyContainer title="src/components/MondrianIntro.tsx">
                        <MondrianIntro />
                    </LegacyContainer>

                    {/* PRACTICE AREA HERO (Legacy) */}
                    <LegacyContainer title="src/components/practice/PracticeAreaHero.tsx">
                        <PracticeAreaHero
                            title="Estate Planning"
                            description="Preserving wealth for future generations through strategic trust architecture."
                            subtitle="Legacy Protection"
                        />
                    </LegacyContainer>

                    {/* SERVICE HERO (Legacy) */}
                    <LegacyContainer title="src/components/services/ServiceHero.tsx">
                        <ServiceHero
                            title="Specific Service"
                            description="A targeted legal solution for specific needs."
                        />
                    </LegacyContainer>

                    {/* SERVICE FEATURE IMAGE (Legacy) */}
                    <LegacyContainer title="src/components/services/ServiceFeatureImage.tsx">
                        <ServiceFeatureImage
                            title="Process Visualization"
                            description="How we achieve results through structured legal engineering."
                            imageSrc="/images/legal-process.jpg"
                        />
                    </LegacyContainer>


                    {/* APPROACH */}
                    <LegacyContainer title="src/components/Approach.tsx">
                        <Approach />
                    </LegacyContainer>

                    {/* PRACTICE AREAS */}
                    <LegacyContainer title="src/components/PracticeAreas.tsx">
                        <PracticeAreas />
                    </LegacyContainer>

                    {/* TEAM MEMBERS */}
                    <LegacyContainer title="src/components/TeamMembers.tsx">
                        <TeamMembers />
                    </LegacyContainer>

                    {/* TRUST INDICATORS */}
                    <LegacyContainer title="src/components/TrustIndicators.tsx">
                        <div className="py-12">
                            <TrustIndicators />
                        </div>
                    </LegacyContainer>

                    {/* TESTIMONIAL */}
                    <LegacyContainer title="src/components/Testimonial.tsx">
                        <Testimonial />
                    </LegacyContainer>

                    {/* CTA */}
                    <LegacyContainer title="src/components/ConsultationCTA.tsx">
                        <ConsultationCTA />
                    </LegacyContainer>

                </div>
            </div>
        </V2PageWrapper>
    );
};

export default ArchivedComponentsPage;
