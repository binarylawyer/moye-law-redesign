"use client";

import React from 'react';
import SushiServiceHero from '@/components/layout/SushiServiceHero';
import SushiVideoHero from '@/components/layout/SushiVideoHero';
import ServiceFeature from '@/components/services/ServiceFeature';
import ServiceProcess from '@/components/services/ServiceProcess';
import ServiceConsiderations from '@/components/services/ServiceConsiderations';
import ServiceRelated from '@/components/services/ServiceRelated';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ServiceFeature as ServiceFeatureType, ServiceConsideration, Process, RelatedService, FeaturedContent } from '@/types/services';

interface ServiceTemplateProps {
    serviceName: string;
    serviceId: string;
    description: string;
    featuredContent?: FeaturedContent;
    features: ServiceFeatureType[];
    considerations: ServiceConsideration[];
    process: Process;
    relatedServices: RelatedService[];
    ctaTitle: string;
    ctaDescription: string;
    ctaButtonText: string;
    phoneNumber?: string; // Optional if not used
    technicalInnovation?: any; // For IP Strategy page special section
}

const ServiceTemplate: React.FC<ServiceTemplateProps> = ({
    serviceName,
    description,
    featuredContent,
    features,
    considerations,
    process,
    relatedServices,
    ctaTitle,
    ctaDescription,
    ctaButtonText,
    technicalInnovation
}) => {

    // Determine if we use Video Hero based on featuredContent presence of video
    // Or we can stick to standard hero and use featuredCount as a section below
    // The legacy data had 'featuredContent' with imageSrc which could be a video.
    // Let's use SushiVideoHero if featuresContent.imageSrc ends in .mp4

    const isVideoHero = featuredContent?.imageSrc?.endsWith('.mp4');

    return (
        <div className="bg-white min-h-screen">
            {isVideoHero ? (
                <SushiVideoHero
                    title={serviceName}
                    subtitle={description}
                    videoSrc={featuredContent?.imageSrc}
                    primaryAction={{ label: ctaButtonText, path: '#contact' }}
                />
            ) : (
                <SushiServiceHero
                    title={serviceName}
                    description={description}
                />
            )}

            <main>
                {/* TECHNICAL INNOVATION SECTION (Special for IP Strategy) */}
                {technicalInnovation && (
                    <section className="py-20 bg-navy text-white">
                        <div className="container mx-auto px-6 max-w-7xl">
                            <h2 className="font-display text-4xl mb-12">{technicalInnovation.title}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="space-y-8">
                                    <p className="text-lg opacity-90">{technicalInnovation.description}</p>
                                    <ul className="space-y-6">
                                        {technicalInnovation.leftContent.map((item: any, idx: number) => (
                                            <li key={idx}>
                                                <h4 className="font-bold text-gold mb-1">{item.title}</h4>
                                                <p className="text-sm opacity-80">{item.description}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    {technicalInnovation.rightContent.map((item: any, idx: number) => (
                                        <div key={idx} className={`${item.color} p-6 rounded-lg flex flex-col items-center justify-center text-center aspect-square`}>
                                            <div className="mb-4">{item.icon}</div>
                                            <span className="font-mono text-xs uppercase tracking-widest">{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* FEATURES */}
                <ServiceFeature features={features} />

                {/* PROCESS */}
                <div className="bg-gray-50">
                    <ServiceProcess process={process} />
                </div>

                {/* FEATURED CONTENT (If not used as Hero) - e.g. "Protect Your Family's Future" */}
                {/* If we used it as hero, we might skip this repliciation or render it differently. 
                    Legacy data had specific textual content here. Let's render the text part if it exists. */}
                {!isVideoHero && featuredContent && (
                    <section className="py-20 md:py-32">
                        <div className="container mx-auto px-6 max-w-7xl">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="font-display text-4xl mb-8 text-navy">{featuredContent.title}</h2>
                                    <div className="space-y-4 text-lg text-gray-700 leading-relaxed font-sans">
                                        {Array.isArray(featuredContent.content)
                                            ? featuredContent.content.map((p, i) => <p key={i}>{p}</p>)
                                            : <p>{featuredContent.content}</p>
                                        }
                                    </div>
                                    <div className="mt-8">
                                        <Link href="/contact" className="text-navy font-bold border-b-2 border-gold hover:text-gold transition-colors">
                                            {featuredContent.callToAction}
                                        </Link>
                                    </div>
                                </div>
                                <div className="relative h-[500px] w-full bg-gray-100 overflow-hidden">
                                    {/* Placeholder for image if one exists and isn't video */}
                                    {featuredContent.imageSrc && !featuredContent.imageSrc.endsWith('.mp4') && (
                                        <img src={featuredContent.imageSrc} alt={featuredContent.imageAlt} className="w-full h-full object-cover" />
                                    )}
                                    {!featuredContent.imageSrc && <div className="w-full h-full bg-navy/10 flex items-center justify-center text-navy/30">Image Placeholder</div>}
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* FAQ */}
                <ServiceConsiderations considerations={considerations} />

                {/* RELATED */}
                <ServiceRelated relatedServices={relatedServices} />

                {/* CTA SECTION */}
                <section id="contact" className="py-24 bg-navy text-white text-center">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <h2 className="font-display text-4xl md:text-5xl mb-6">{ctaTitle}</h2>
                        <p className="text-xl opacity-80 mb-10 leading-relaxed">{ctaDescription}</p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center px-8 py-4 bg-gold text-navy font-bold hover:bg-white transition-colors duration-300"
                        >
                            {ctaButtonText} <ArrowRight className="ml-2" />
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ServiceTemplate;
