import React from 'react';
import PracticeAreaTemplate from '@/components/practice/PracticeAreaTemplate';
import PracticeAreaHero from '@/components/practice/PracticeAreaHero';
import PracticeAreaContent from '@/components/practice/PracticeAreaContent';
import PracticeAreaProcess from '@/components/practice/PracticeAreaProcess';
import PracticeAreaRelated from '@/components/practice/PracticeAreaRelated';

const EntertainmentLaw: React.FC = () => {
  const entertainmentAreas = [
    {
      title: "Film & Television",
      description: "Comprehensive legal services for productions, talent, distributors, and investors in the film and television industry."
    },
    {
      title: "Music & Recording",
      description: "Expert guidance for artists, labels, producers, and publishers in navigating complex music rights and agreements."
    },
    {
      title: "Digital Media & Gaming",
      description: "Legal frameworks for game developers, content creators, streamers, and interactive entertainment companies."
    },
    {
      title: "Literary & Publishing",
      description: "Contract development and rights management for authors, publishers, and literary agencies across traditional and digital formats."
    }
  ];

  const processSteps = [
    {
      title: "Initial Consultation",
      description: "We begin with a comprehensive discussion of your entertainment project or career goals, understanding your vision, timeline, and specific legal needs."
    },
    {
      title: "Rights Assessment",
      description: "We evaluate existing rights, identify potential rights issues, and develop strategies for securing, clearing, or licensing necessary rights for your project."
    },
    {
      title: "Contract Development",
      description: "We draft, review, or negotiate agreements tailored to your specific entertainment venture, focusing on protecting your creative and financial interests."
    },
    {
      title: "Compliance & Clearances",
      description: "We ensure all necessary permissions, releases, and regulatory compliance measures are properly addressed before your content reaches its audience."
    },
    {
      title: "Ongoing Representation",
      description: "We provide continuous legal support throughout the lifecycle of your entertainment career or project, from development through distribution and beyond."
    }
  ];

  const relatedServices = [
    {
      title: "IP Licensing",
      path: "/practice/ip-licensing",
      description: "Strategic licensing arrangements for entertainment properties and intellectual assets."
    },
    {
      title: "Digital Asset Protection",
      path: "/practice/digital-asset-protection",
      description: "Safeguarding valuable digital content, NFTs, and online entertainment assets."
    },
    {
      title: "IP Consulting",
      path: "/practice/ip-consulting",
      description: "Strategic guidance for maximizing the value of entertainment intellectual property."
    }
  ];

  return (
    <PracticeAreaTemplate areaName="Entertainment Law" serviceId="entertainment-law">
      <PracticeAreaHero 
        title="Entertainment Law"
        description="Expert legal guidance for creators, producers, and businesses across the evolving entertainment landscape."
      />
      
      <PracticeAreaContent 
        title="Empowering Creative Industries" 
        variant="default"
        decorationPosition="left"
        decorationVariant={3}
      >
        <div className="grid grid-cols-1 md:grid-cols-1 gap-10">
          <div>
            <p className="text-lg mb-6">
              Today's entertainment industry spans traditional media, digital platforms, and interactive experiences, creating a complex landscape of legal challenges and opportunities for creators and businesses.
            </p>
            <p className="text-lg mb-6">
              Our Entertainment Law practice provides specialized legal guidance at every stage of the creative process, from concept development and rights acquisition to production, distribution, and monetization.
            </p>
            <p className="text-lg">
              We work with individual creators, production companies, studios, publishers, and platforms to navigate the specific legal requirements of their projects while protecting their creative vision and business interests.
            </p>
          </div>
        </div>
      </PracticeAreaContent>
      
      <PracticeAreaContent 
        title="Industry Expertise" 
        variant="alternate"
        decorationPosition="right"
        decorationVariant={1}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {entertainmentAreas.map((area, idx) => (
            <div key={idx} className="mondrian-border p-6 bg-white">
              <h3 className="font-serif text-xl text-black mb-4">{area.title}</h3>
              <p className="text-black/80">{area.description}</p>
            </div>
          ))}
        </div>
      </PracticeAreaContent>
      
      <PracticeAreaProcess
        title="Our Entertainment Law Process"
        steps={processSteps}
      />
      
      <PracticeAreaRelated
        title="Related Services"
        items={relatedServices}
      />
    </PracticeAreaTemplate>
  );
};

export default EntertainmentLaw; 