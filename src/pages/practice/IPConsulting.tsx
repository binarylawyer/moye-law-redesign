import React from 'react';
import { FileText, Lightbulb, Scale, Globe } from 'lucide-react';
import PracticeAreaTemplate from '@/components/practice/PracticeAreaTemplate';
import PracticeAreaHero from '@/components/practice/PracticeAreaHero';
import PracticeAreaContent from '@/components/practice/PracticeAreaContent';
import PracticeAreaProcess from '@/components/practice/PracticeAreaProcess';
import PracticeAreaRelated from '@/components/practice/PracticeAreaRelated';

const IPConsulting: React.FC = () => {
  const consultingAreas = [
    {
      icon: <FileText className="h-10 w-10 text-black" />,
      title: "IP Audit & Portfolio Management",
      description: "Comprehensive evaluation and strategic management of intellectual property assets."
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-black" />,
      title: "IP Strategy Development",
      description: "Forward-looking IP strategies aligned with business objectives and market opportunities."
    },
    {
      icon: <Scale className="h-10 w-10 text-black" />,
      title: "IP Valuation & Monetization",
      description: "Expert analysis of IP value and development of strategic monetization pathways."
    },
    {
      icon: <Globe className="h-10 w-10 text-black" />,
      title: "Global IP Protection",
      description: "International strategies to secure and defend intellectual property across borders."
    }
  ];

  const processSteps = [
    {
      title: "Discovery & Assessment",
      description: "We begin with a thorough evaluation of your existing intellectual property assets, business objectives, and competitive landscape. This phase includes identifying registered and unregistered IP, assessing protection status, and uncovering untapped opportunities."
    },
    {
      title: "Strategy Development",
      description: "Based on our assessment, we develop a comprehensive IP strategy tailored to your specific needs and goals. This includes recommendations for protection measures, monetization opportunities, and competitive positioning."
    },
    {
      title: "Implementation Planning",
      description: "We create a detailed implementation plan with clear timelines, responsibilities, and resource requirements. This includes prioritization of actions based on business impact and resource constraints."
    },
    {
      title: "Execution Support",
      description: "We provide ongoing support during the implementation of your IP strategy, including coordination with specialized counsel for registrations, documentation development, and team training."
    },
    {
      title: "Review & Optimization",
      description: "We conduct regular reviews of your IP strategy implementation, measuring results against objectives and recommending adjustments as business needs and market conditions evolve."
    }
  ];

  const relatedServices = [
    {
      title: "IP Licensing",
      path: "/practice/ip-licensing",
      description: "Maximize the value of intellectual assets through strategic licensing agreements."
    },
    {
      title: "Intellectual Property",
      path: "/practice/intellectual-property",
      description: "Strategic protection for entrepreneurs and innovators in the digital economy."
    },
    {
      title: "Emerging Tech",
      path: "/practice/emerging-tech",
      description: "Legal guidance for businesses leveraging AI, ML, blockchain and other emerging technologies."
    }
  ];

  return (
    <PracticeAreaTemplate areaName="IP Consulting" serviceId="ip-consulting">
      <PracticeAreaHero 
        title="IP Consulting Services"
        description="Strategic intellectual property guidance for businesses seeking to maximize value and competitive advantage."
      />
      
      <PracticeAreaContent 
        title="Unlocking IP Value" 
        variant="default"
        decorationPosition="left"
        decorationVariant={3}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <p className="text-lg mb-6">
              Intellectual property represents one of the most valuable assets for modern businesses, yet it often remains underdeveloped and underutilized.
            </p>
            <p className="text-lg mb-6">
              Our IP Consulting practice helps clients identify, protect, and leverage intellectual property to create competitive advantages and generate revenue.
            </p>
            <p className="text-lg">
              We work with businesses of all sizes, from startups to established enterprises, to develop and implement intellectual property strategies that support broader business objectives.
            </p>
          </div>
          <div className="bg-gray-50 p-6 mondrian-border">
            <h3 className="font-serif text-xl text-black mb-4">Our Expertise Covers:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="h-6 w-6 mondrian-red flex items-center justify-center mr-3 mt-1">
                  <span className="text-white font-medium">✓</span>
                </div>
                <span>Patents and technical innovations</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 mondrian-blue flex items-center justify-center mr-3 mt-1">
                  <span className="text-white font-medium">✓</span>
                </div>
                <span>Trademarks and branding assets</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 mondrian-yellow flex items-center justify-center mr-3 mt-1">
                  <span className="text-black font-medium">✓</span>
                </div>
                <span>Copyright and creative works</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 mondrian-light-blue flex items-center justify-center mr-3 mt-1">
                  <span className="text-white font-medium">✓</span>
                </div>
                <span>Trade secrets and confidential information</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 mondrian-light-yellow flex items-center justify-center mr-3 mt-1">
                  <span className="text-black font-medium">✓</span>
                </div>
                <span>Data and database rights</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 mondrian-red flex items-center justify-center mr-3 mt-1">
                  <span className="text-white font-medium">✓</span>
                </div>
                <span>IP portfolio management</span>
              </li>
            </ul>
          </div>
        </div>
      </PracticeAreaContent>
      
      <PracticeAreaContent 
        title="Our Consulting Services" 
        variant="alternate"
        decorationPosition="right"
        decorationVariant={2}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {consultingAreas.map((area, idx) => (
            <div key={idx} className="mondrian-border p-6 bg-white">
              <div className="mb-6">
                {area.icon}
              </div>
              <h3 className="font-serif text-xl text-black mb-4">{area.title}</h3>
              <p className="text-black/80">{area.description}</p>
            </div>
          ))}
        </div>
      </PracticeAreaContent>
      
      <PracticeAreaProcess
        title="Our Consulting Process"
        steps={processSteps}
      />
      
      <PracticeAreaRelated
        title="Related Services"
        items={relatedServices}
      />
    </PracticeAreaTemplate>
  );
};

export default IPConsulting; 