import React from 'react';
import PracticeAreaTemplate from '@/components/practice/PracticeAreaTemplate';
import PracticeAreaHero from '@/components/practice/PracticeAreaHero';
import PracticeAreaContent from '@/components/practice/PracticeAreaContent';
import PracticeAreaProcess from '@/components/practice/PracticeAreaProcess';
import PracticeAreaRelated from '@/components/practice/PracticeAreaRelated';

const Licensing: React.FC = () => {
  const licensingTypes = [
    {
      title: "Technology Licensing",
      description: "Strategic agreements for patents, software, and proprietary technologies that maximize value while protecting core IP assets."
    },
    {
      title: "Content & Media Licensing",
      description: "Tailored solutions for licensing creative content across platforms, territories, and distribution channels."
    },
    {
      title: "Trademark & Brand Licensing",
      description: "Brand extension strategies and merchandising agreements that maintain brand integrity while expanding market reach."
    },
    {
      title: "Cross-Industry Collaborations",
      description: "Innovative licensing structures for partnerships that cross traditional industry boundaries."
    }
  ];

  const processSteps = [
    {
      title: "Asset Evaluation",
      description: "We begin by assessing your licensable intellectual property, identifying its market value, competitive advantages, and potential applications."
    },
    {
      title: "Strategy Development",
      description: "We develop a customized licensing strategy aligned with your business objectives, whether monetization, market expansion, or strategic partnerships."
    },
    {
      title: "Licensee Identification",
      description: "We help identify and evaluate potential licensing partners based on market presence, alignment with your brand values, and implementation capabilities."
    },
    {
      title: "Agreement Structuring",
      description: "We craft licensing agreements with carefully tailored terms for royalties, territory, exclusivity, quality control, and term length to protect your interests."
    },
    {
      title: "Relationship Management",
      description: "We provide ongoing support for license monitoring, compliance verification, royalty auditing, and relationship optimization throughout the agreement term."
    }
  ];

  const relatedServices = [
    {
      title: "IP Consulting",
      path: "/ip-consulting",
      description: "Comprehensive strategies for intellectual property portfolio management and value creation."
    },
    {
      title: "Digital Asset Protection",
      path: "/digital-asset-protection",
      description: "Legal safeguards for licensable digital assets and NFTs in the online marketplace."
    },
    {
      title: "Entertainment Law",
      path: "/entertainment-law",
      description: "Specialized licensing strategies for entertainment properties and content rights."
    }
  ];

  return (
    <PracticeAreaTemplate areaName="IP Licensing">
      <PracticeAreaHero 
        title="IP Licensing Solutions"
        description="Strategic licensing frameworks that transform intellectual property into revenue streams and market advantages."
      />
      
      <PracticeAreaContent 
        title="Unlocking IP Value Through Licensing" 
        variant="default"
        decorationPosition="left"
        decorationVariant={4}
      >
        <div className="grid grid-cols-1 md:grid-cols-1 gap-10">
          <div>
            <p className="text-lg mb-6">
              Intellectual property licensing represents one of the most flexible and powerful strategies for monetizing intangible assets without surrendering ownership or control.
            </p>
            <p className="text-lg mb-6">
              Our IP Licensing practice helps clients develop and implement sophisticated licensing frameworks that create new revenue streams, expand market reach, and forge strategic partnerships.
            </p>
            <p className="text-lg">
              We work with companies of all sizes to structure licensing agreements that balance commercialization opportunities with appropriate protections for core intellectual assets.
            </p>
          </div>
        </div>
      </PracticeAreaContent>
      
      <PracticeAreaContent 
        title="Licensing Solutions" 
        variant="alternate"
        decorationPosition="right"
        decorationVariant={2}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {licensingTypes.map((type, idx) => (
            <div key={idx} className="mondrian-border p-6 bg-white">
              <h3 className="font-serif text-xl text-black mb-4">{type.title}</h3>
              <p className="text-black/80">{type.description}</p>
            </div>
          ))}
        </div>
      </PracticeAreaContent>
      
      <PracticeAreaProcess
        title="Our Licensing Process"
        steps={processSteps}
      />
      
      <PracticeAreaRelated
        title="Related Services"
        items={relatedServices}
      />
    </PracticeAreaTemplate>
  );
};

export default Licensing;
