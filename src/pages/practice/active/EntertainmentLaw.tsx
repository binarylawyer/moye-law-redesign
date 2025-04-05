import React from 'react';
import { logger } from '@/utils/logger';
import MondrianClassicComposition from '@/components/MondrianClassicComposition';
import { Link } from 'react-router-dom';
import '@/styles/mondrian.css';

// Content sections
const entertainmentLawAreas = [
  {
    title: "Music Law",
    description: "Comprehensive legal services for artists, labels, publishers, and music technology companies."
  },
  {
    title: "Film & Television",
    description: "Legal guidance for production, distribution, financing, and talent representation."
  },
  {
    title: "Digital Media",
    description: "Solutions for streaming platforms, content creators, and interactive entertainment."
  },
  {
    title: "Gaming & Interactive Media",
    description: "Legal frameworks for game developers, esports organizations, and interactive content."
  }
];

// Principles based on the Mondrian aesthetic
const principles = [
  {
    number: "1",
    title: "Creative Protection",
    description: "We safeguard creative works through comprehensive rights protection, ensuring artists and creators maintain control of their intellectual property.",
    color: "mondrian-blue"
  },
  {
    number: "2",
    title: "Strategic Monetization",
    description: "Our approach helps entertainment clients maximize revenue opportunities across traditional and emerging channels while preserving artistic integrity.",
    color: "mondrian-yellow"
  },
  {
    number: "3",
    title: "Industry Navigation",
    description: "We guide clients through the complex entertainment ecosystem, leveraging deep industry relationships and knowledge of evolving business models.",
    color: "mondrian-red"
  }
];

// Process steps
const process = [
  {
    number: "01",
    title: "Rights Assessment",
    description: "We conduct a comprehensive inventory and evaluation of your creative works, identifying all exploitable rights and potential revenue streams.",
    color: "mondrian-blue"
  },
  {
    number: "02",
    title: "Protection Strategy",
    description: "Our team develops a customized legal strategy to secure your entertainment rights through appropriate registrations, agreements, and monitoring systems.",
    color: "mondrian-red"
  },
  {
    number: "03",
    title: "Deal Structuring",
    description: "We structure and negotiate entertainment agreements that maximize your benefits while maintaining appropriate creative control and future flexibility.",
    color: "mondrian-yellow"
  },
  {
    number: "04",
    title: "Ongoing Counsel",
    description: "Our relationship continues with strategic advice as your entertainment career evolves, addressing new opportunities and challenges in this dynamic industry.",
    color: "mondrian-blue"
  }
];

// Related services
const relatedServices = [
  {
    title: "IP Licensing",
    path: "ip-licensing",
    description: "Strategic licensing of entertainment properties and creative works."
  },
  {
    title: "IP Asset Protection",
    path: "ip-asset-protection",
    description: "Protection for creative works, trademarks, and entertainment brands."
  },
  {
    title: "Emerging Tech",
    path: "emerging-tech",
    description: "Legal guidance for Web3, AR/VR, and other emerging entertainment platforms."
  }
];

const EntertainmentLaw: React.FC = () => {
  logger.debug('EntertainmentLaw component rendered');
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row">
            {/* Mondrian composition on left */}
            <div className="w-full md:w-1/3 h-64 md:h-auto">
              <MondrianClassicComposition />
            </div>
            
            {/* White content block */}
            <div className="bg-white border-4 border-black p-8 md:p-12 w-full md:w-2/3">
              <h1 className="font-display text-black text-4xl md:text-5xl lg:text-6xl mb-8">Entertainment Law</h1>
              <p className="text-xl text-black/80">
                Our Entertainment Law practice provides comprehensive legal guidance for creative professionals
                and entertainment companies. We help navigate complex rights issues, transactions, and 
                protection of creative works across traditional and emerging media.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-16">
        <div className="container mx-auto px-8">
          <div className="mondrian-grid mb-16">
            <div className="col-span-3 mondrian-white border-r-4 border-b-4 border-black"></div>
            <div className="col-span-6 mondrian-grid-item bg-white p-8 text-center">
              <h2 className="font-display text-black text-3xl mb-8">Our Principles</h2>
            </div>
            <div className="col-span-3 mondrian-yellow"></div>
          </div>
          
          <div className="space-y-8 max-w-5xl mx-auto">
            {principles.map((principle, index) => (
              <div key={index} className="flex flex-col md:flex-row">
                {/* Number block with corresponding Mondrian color */}
                <div className={`${principle.color} w-full md:w-48 flex-shrink-0 flex items-center justify-center p-8`}>
                  <span className="font-display text-white text-3xl font-bold">{principle.number}</span>
                </div>
                
                {/* Content block */}
                <div className="bg-white p-6 border-4 border-black flex-grow">
                  <h3 className="font-display text-black text-2xl mb-4">{principle.title}</h3>
                  <p className="text-black/80 text-lg">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-8">
          <div className="mondrian-grid mb-16">
            <div className="col-span-3 mondrian-red"></div>
            <div className="col-span-6 mondrian-grid-item bg-white p-8 text-center">
              <h2 className="font-display text-black text-3xl mb-8">Our Process</h2>
            </div>
            <div className="col-span-3 mondrian-white border-r-4 border-b-4 border-black"></div>
          </div>
          
          <div className="space-y-8 max-w-5xl mx-auto">
            {process.map((step, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                <div className={`${step.color} w-full md:w-48 flex-shrink-0 flex items-center justify-center p-8`}>
                  <span className="font-display text-white text-3xl font-bold">{step.number}</span>
                </div>
                <div className="bg-white p-6 border-4 border-black flex-grow relative">
                  <h3 className="font-display text-black text-2xl mb-4">{step.title}</h3>
                  <p className="text-black/80 text-lg">{step.description}</p>
                  
                  {index === 3 && (
                    <div className="absolute bottom-3 right-3 w-24 h-24 grid grid-cols-2 grid-rows-2 gap-1">
                      <div className="mondrian-red"></div>
                      <div className="bg-white border border-black"></div>
                      <div className="bg-white border border-black"></div>
                      <div className="mondrian-yellow"></div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to action button */}
      <section className="py-8">
        <div className="container mx-auto px-8 flex justify-center">
          <div className="mondrian-divider flex items-center w-full max-w-4xl">
            <div className="mondrian-yellow h-8 w-16 flex-shrink-0"></div>
            <div className="flex-grow bg-white border-t-4 border-b-4 border-black py-4 px-6 text-center">
              <span className="text-xl">Ask us about Entertainment Law: (212) 555-0129</span>
            </div>
            <div className="mondrian-blue h-8 w-32 flex-shrink-0"></div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-8 mb-1">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row">
              {/* Mondrian composition for the left section */}
              <div className="w-full md:w-1/4 flex-shrink-0 h-64 md:h-auto">
                <MondrianClassicComposition />
              </div>
              
              <div className="bg-white w-full md:w-16 p-8 hidden md:block"></div>
              
              <div className="bg-white w-full md:flex-1 p-8 border-4 border-black">
                <h2 className="font-display text-3xl mb-4">Protect Your Creative Vision — Contact Us Today</h2>
                <p className="mb-6">Schedule a consultation to discuss your entertainment law needs and discover how our experienced team can help secure your creative future.</p>
                
                <div className="inline-block bg-white border-2 border-black px-8 py-3 font-medium">
                  ENTERTAINMENT LAW EXPERTISE FOR CREATIVE PROFESSIONALS
                </div>
              </div>
              
              <div className="bg-gray-200 w-full md:w-1/6 p-8"></div>
            </div>
            
            <div className="mt-8 text-center">
              <Link to="/contact" className="mondrian-blue hover:bg-blue-700 text-white font-bold py-3 px-6 border-2 border-black inline-flex items-center">
                Request Your Entertainment Law Consultation
                <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EntertainmentLaw; 