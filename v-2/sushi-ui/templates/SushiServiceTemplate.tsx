import React from 'react';
import SushiServiceHero from '../components/layout/SushiServiceHero';
import ServiceConsiderations from '@/components/services/ServiceConsiderations'; // Reusing V1 FAQ as requested
import { ServiceFeature as ServiceFeatureType, FeaturedContent, ServiceConsideration, Process, RelatedService } from '@/types/services';
import ServiceFeature from '@/components/services/ServiceFeature';
import ServiceProcess from '@/components/services/ServiceProcess';
import ServiceRelated from '@/components/services/ServiceRelated';

interface SushiServiceTemplateProps {
    serviceName: string;
    description: string;
    features: ServiceFeatureType[];
    considerations: ServiceConsideration[];
    process: Process;
    relatedServices: RelatedService[];
}

const SushiServiceTemplate: React.FC<SushiServiceTemplateProps> = ({
    serviceName,
    description,
    features,
    considerations,
    process,
    relatedServices
}) => {
    return (
        <div className="bg-white min-h-screen">
            {/* 1. TIGHTER HERO */}
            <SushiServiceHero
                title={serviceName}
                description={description}
            />

            {/* 2. MAIN CONTENT (Reduced whitespace compared to V1) */}
            <main>
                {/* Features */}
                <section className="py-16 bg-gray-50">
                    <ServiceFeature features={features} />
                </section>

                {/* Process */}
                <section className="py-16 max-w-7xl mx-auto px-4 lg:px-8">
                    <ServiceProcess process={process} />
                </section>

                {/* FAQ / Considerations (The User explicitly liked this) */}
                <section className="py-16 bg-white">
                    <ServiceConsiderations considerations={considerations} />
                </section>

                {/* Related */}
                <section className="py-16 bg-gray-50 border-t">
                    <ServiceRelated relatedServices={relatedServices} />
                </section>
            </main>
        </div>
    );
};

export default SushiServiceTemplate;
