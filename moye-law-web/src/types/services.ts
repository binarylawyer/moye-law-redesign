export interface ServiceFeature {
    title: string;
    description: string;
    icon?: string;
}

export interface ServiceConsideration {
    title: string;
    description: string;
}

export interface ProcessStep {
    title: string;
    description: string;
}

export interface Process {
    title: string;
    steps: ProcessStep[];
}

export interface RelatedService {
    title: string;
    description: string;
    path: string;
}

export interface FeaturedContent {
    title: string;
    content: string[] | string;
    callToAction: string;
    imageSrc?: string;
    imageAlt?: string;
}

// Support for legacy data shape if needed
export interface ServiceData {
    title: string;
    description: string;
    featuredContent: FeaturedContent;
    features: ServiceFeature[];
    considerations: ServiceConsideration[];
    process: Process;
    relatedServices: RelatedService[];
    ctaTitle: string;
    ctaDescription: string;
    ctaButtonText: string;
    phoneNumber?: string;
    technicalInnovation?: any;
}
