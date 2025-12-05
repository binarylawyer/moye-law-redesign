import React from 'react';
import HeroV2 from '../components/HeroV2';
import SplitServiceCard from '../components/SplitServiceCard';

/**
 * V2PreviewPage: Showcasing the Intensified Mondrian Layout
 */

const V2PreviewPage = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* 1. THE ART OF ENGINEERING HERO */}
            <HeroV2 />

            {/* 2. THE SPLIT SERVICE CARDS */}
            <section className="py-24 px-4 md:px-8 bg-white">
                <div className="container mx-auto">
                    <div className="mb-16 text-center">
                        <h2 className="font-serif text-4xl md:text-5xl text-mondrian-navy mb-4">
                            The Binary Approach
                        </h2>
                        <p className="font-sans text-xl text-gray-600 max-w-2xl mx-auto">
                            We separate the <span className="font-mono text-mondrian-navy bg-mondrian-grey px-1">Product</span> (Efficiency)
                            from the <span className="font-serif italic text-mondrian-navy">Service</span> (Counsel), giving you the best of both worlds.
                        </p>
                    </div>

                    {/* Example 1: Estate Planning */}
                    <SplitServiceCard
                        title="Estate Planning"
                        productTitle="EstateOS_Core"
                        serviceTitle="Legacy Architecture"
                        productFeatures={["Automated Will Generation", "Digital Asset Vault", "Flat Fee: $2,500"]}
                        serviceFeatures={["Multi-Generational Strategy", "Special Needs Trusts", "Family Governance"]}
                    />

                    {/* Example 2: IP Law */}
                    <SplitServiceCard
                        title="Intellectual Property"
                        productTitle="Trademark_Bot_v1"
                        serviceTitle="Brand Strategy"
                        productFeatures={["USPTO Search Algorithm", "Automated Filing", "Status Monitoring"]}
                        serviceFeatures={["Infringement Defense", "Licensing Negotiation", "Global IP Strategy"]}
                    />
                </div>
            </section>

            {/* 3. MONDRIAN FOOTER STRIP */}
            <div className="h-8 w-full flex border-t-4 border-mondrian-navy">
                <div className="w-1/3 bg-mondrian-navy border-r-4 border-mondrian-navy"></div>
                <div className="w-1/6 bg-mondrian-gold border-r-4 border-mondrian-navy"></div>
                <div className="w-1/6 bg-mondrian-red border-r-4 border-mondrian-navy"></div>
                <div className="w-1/3 bg-mondrian-grey"></div>
            </div>
        </div>
    );
};

export default V2PreviewPage;
