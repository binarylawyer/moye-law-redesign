import React from 'react';
import SushiServiceHero from '../components/layout/SushiServiceHero';
import SushiVideoHero from '../components/layout/SushiVideoHero'; // Import Video Hero
import ServiceConsiderations from '@/components/services/ServiceConsiderations'; // Reusing V1 FAQ as requested
import { ServiceFeature as ServiceFeatureType, ServiceConsideration, Process, RelatedService } from '@/types/services';
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
    // New Props for Video Toggle
    useVideoHero?: boolean;
    videoData?: {
        src?: string;
        ctaText?: string;
        ctaLink?: string;
    };
}

const SushiServiceTemplate: React.FC<SushiServiceTemplateProps> = ({
    serviceName,
    description,
    features,
    considerations,
    process,
    relatedServices,
    useVideoHero = false,
    videoData
}) => {
    return (
        <div className="bg-white min-h-screen">
            {/* -------------------------------------------------------------
                 SECTION 1: HERO (CONDITIONAL)
                 Component: SushiServiceHero OR SushiVideoHero
                 ------------------------------------------------------------- */}
            <div id="service-hero-section">
                {useVideoHero ? (
                    <SushiVideoHero
                        title={serviceName}
                        subtitle={description}
                        videoSrc={videoData?.src}
                        heightClass="h-[60vh]" // Tighter video for service pages
                        primaryAction={videoData?.ctaText ? { label: videoData.ctaText, path: videoData.ctaLink || '/contact' } : undefined}
                    />
                ) : (
                    <SushiServiceHero
                        title={serviceName}
                        description={description}
                    />
                )}
            </div>

            {/* 2. MAIN CONTENT (Reduced whitespace) */}
            <main>
                {/* -------------------------------------------------------------
                    SECTION 2: FEATURES (GRID)
                    Component: ServiceFeature
                    ------------------------------------------------------------- */}
                <section id="service-features-section" className="py-12 bg-gray-50">
                    <div className="container mx-auto px-4 mb-4">
                        {/* Developer Label for Team Analysis */}
                        <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest border-b border-gray-200 inline-block pb-1">
                            [Component: Service Features]
                        </p>
                    </div>
                    <ServiceFeature features={features} />
                </section>

                {/* -------------------------------------------------------------
                     SECTION 3: PROCESS (STEPS)
                     Component: ServiceProcess
                     ------------------------------------------------------------- */}
                <section id="service-process-section" className="py-12 max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="mb-4">
                        <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest border-b border-gray-200 inline-block pb-1">
                            [Component: Process]
                        </p>
                    </div>
                    <ServiceProcess process={process} />
                </section>

                {/* -------------------------------------------------------------
                    SECTION 4: FAQ (CONSIDERATIONS)
                    Component: ServiceConsiderations (Legacy Reused)
                    ------------------------------------------------------------- */}
                <section id="service-faq-section" className="py-12 bg-white">
                    {/* Note: ServiceConsiderations has its own padding/layout logic we might need to override if it's too big, 
                       but user liked it 'as is'. */}
                    <ServiceConsiderations considerations={considerations} />
                </section>

                {/* -------------------------------------------------------------
                     SECTION 5: RELATED SERVICES
                     Component: ServiceRelated
                     ------------------------------------------------------------- */}
                <section id="service-related-section" className="py-12 bg-gray-50 border-t">
                    <div className="container mx-auto px-4 mb-4">
                        <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest border-b border-gray-200 inline-block pb-1">
                            [Component: Related Services]
                        </p>
                    </div>
                    <ServiceRelated relatedServices={relatedServices} />
                </section>
            </main>
        </div>
    );
};

export default SushiServiceTemplate;
