export interface ServiceFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface ServiceConsideration {
  question: string;
  answer: string;
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
  path: string;
  description: string;
}

export interface FeaturedContent {
  title: string;
  content: string[];
  callToAction?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export interface ServiceData {
  title: string;
  slug: string;
  description: string;
  featuredContent: FeaturedContent;
  features: ServiceFeature[];
  considerations: ServiceConsideration[];
  process: Process;
  relatedServices: RelatedService[];
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
  phoneNumber: string;
} 