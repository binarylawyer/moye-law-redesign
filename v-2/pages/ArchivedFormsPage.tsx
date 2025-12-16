import React from 'react';
import V2PageWrapper from '../components/V2PageWrapper';

// Legacy Form Components
import ContactHero from '../../src/components/contact/ContactHero';
import MultiStepForm from '../../src/components/contact/MultiStepForm';
import OfficeLocations from '../../src/components/contact/OfficeLocations';
import PrivacyMessage from '../../src/components/contact/PrivacyMessage';

const ArchivedFormsPage = () => {
    return (
        <V2PageWrapper className="pt-20">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <header className="mb-20 border-b-4 border-navy pb-8">
                    <span className="font-mono text-gold text-xs tracking-[0.3em] uppercase block mb-4">Moye Law Systems v2.1</span>
                    <h1 className="font-display text-6xl text-navy leading-none">Archived <br />Logic Forms.</h1>
                    <p className="mt-4 font-sans text-gray-500 max-w-2xl">
                        Preservation of complex React/Hook Form logic for Contact & Intake.
                        These components contain routing logic, validation, and Supabase integration.
                    </p>
                </header>

                <div className="space-y-24">

                    {/* CONTACT HERO */}
                    <div className="border-4 border-gray-200 p-8 bg-gray-50">
                        <h2 className="font-display text-3xl text-navy mb-8">Contact Hero (Static)</h2>
                        <div className="bg-white border-2 border-gray-300 relative h-96 overflow-hidden">
                            <ContactHero />
                        </div>
                    </div>

                    {/* MULTI-STEP FORM */}
                    <div className="border-4 border-red-200 p-8 bg-red-50">
                        <div className="flex justify-between items-start mb-8">
                            <div>
                                <h2 className="font-display text-3xl text-navy">Multi-Step Logic Engine</h2>
                                <p className="font-mono text-xs text-red-600 mt-2">CRITICAL ASSET: Contains Branching Logic</p>
                            </div>
                            <span className="bg-red-100 text-red-800 text-xs px-2 py-1 font-bold border border-red-300">INTERACTIVE</span>
                        </div>
                        <div className="bg-white border-2 border-gray-300 p-4">
                            {/* Form requires context usually, but checking if it renders standalone */}
                            <MultiStepForm />
                        </div>
                    </div>

                    {/* OFFICE LOCATIONS */}
                    <div className="border-4 border-gray-200 p-8 bg-gray-50">
                        <h2 className="font-display text-3xl text-navy mb-8">Office Data</h2>
                        <div className="bg-white border-2 border-gray-300 p-4">
                            <OfficeLocations />
                        </div>
                    </div>

                    {/* PRIVACY MESSAGE */}
                    <div className="border-4 border-gray-200 p-8 bg-gray-50">
                        <h2 className="font-display text-3xl text-navy mb-8">Privacy Policy</h2>
                        <div className="bg-white border-2 border-gray-300 p-4">
                            <PrivacyMessage />
                        </div>
                    </div>

                </div>
            </div>
        </V2PageWrapper>
    );
};

export default ArchivedFormsPage;
