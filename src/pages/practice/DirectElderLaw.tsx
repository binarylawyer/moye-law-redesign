import React from 'react';
import PracticeAreaTemplate from '@/components/practice/PracticeAreaTemplate';
import PracticeAreaHero from '@/components/practice/PracticeAreaHero';
import PracticeAreaContent from '@/components/practice/PracticeAreaContent';
import PracticeAreaProcess from '@/components/practice/PracticeAreaProcess';
import PracticeAreaRelated from '@/components/practice/PracticeAreaRelated';
import ServiceWithFeatureImage from '@/components/practice/ServiceWithFeatureImage';
import { standardizeServicePaths } from '@/utils/practiceHelpers';
import { logger } from '@/utils/logger';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MondrianDividerCTA from '@/components/MondrianDividerCTA';
import CallToAction from '@/components/shared/CallToAction';
import { Link } from 'react-router-dom';

// Content sections
const elderLawAreas = [
  {
    title: "Estate Planning for Seniors",
    description: "Comprehensive planning for the management and distribution of assets, including wills, trusts, and powers of attorney."
  },
  {
    title: "Long-Term Care Planning",
    description: "Strategic planning for future care needs, including Medicaid planning and asset protection strategies."
  },
  {
    title: "Guardianship & Conservatorship",
    description: "Legal arrangements for managing the affairs of individuals who can no longer make decisions for themselves."
  },
  {
    title: "Elder Abuse Protection",
    description: "Legal protection against financial exploitation, physical abuse, and neglect of seniors."
  }
];

// Principles based on the Mondrian aesthetic
const principles = [
  {
    number: "1",
    title: "Compassionate Guidance",
    description: "We believe in providing compassionate legal guidance to seniors and their families. Our team develops thoughtful strategies to protect elderly clients at every stage of life.",
    color: "mondrian-red"
  },
  {
    number: "2",
    title: "Family-First Approach",
    description: "In elder law, family considerations must be prioritized. We implement a family-first approach that ensures your loved ones' needs are addressed with dignity and respect.",
    color: "mondrian-blue"
  },
  {
    number: "3",
    title: "Future-Oriented Planning",
    description: "Beyond immediate concerns, we focus on creating plans that adapt to changing health and financial needs, integrating both immediate care and long-term provisions.",
    color: "mondrian-yellow"
  }
];

// Process steps
const process = [
  {
    number: "01",
    title: "Needs Assessment",
    description: "We conduct a thorough evaluation of your elderly loved one's current situation, identifying immediate concerns, legal needs, and areas requiring protection.",
    color: "mondrian-red"
  },
  {
    number: "02",
    title: "Strategy Development",
    description: "Based on our assessment, we develop a customized elder care plan that aligns with your family's goals, values, and financial resources.",
    color: "mondrian-blue"
  },
  {
    number: "03",
    title: "Documentation",
    description: "Our team handles all legal documentation with meticulous attention to detail, ensuring all directives, powers of attorney, and healthcare documents are properly executed.",
    color: "mondrian-red"
  },
  {
    number: "04",
    title: "Ongoing Support",
    description: "We provide continuous legal guidance as your loved one's needs evolve, helping you navigate changing healthcare requirements and financial situations.",
    color: "mondrian-blue"
  }
];

// Related services
const relatedServices = [
  {
    title: "Trusts & Estates",
    path: "trusts-estates",
    description: "Comprehensive planning for wealth preservation and asset distribution."
  },
  {
    title: "Healthcare Law",
    path: "healthcare-law",
    description: "Legal guidance on healthcare decisions and medical directives."
  },
  {
    title: "Asset Protection",
    path: "digital-asset-protection",
    description: "Strategies to protect assets while ensuring eligibility for needed benefits."
  }
];

const DirectElderLaw: React.FC = () => {
  logger.debug('DirectElderLaw component rendered');
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32 md:pt-40">
        {/* Hero Section */}
        <section className="py-16">
          <div className="container mx-auto px-8">
            <div className="flex flex-col md:flex-row">
              {/* Blue Mondrian block on left */}
              <div className="bg-blue-600 w-full md:w-1/3"></div>
              
              {/* White content block */}
              <div className="bg-white border-4 border-black p-8 md:p-12 w-full md:w-2/3">
                <h1 className="font-serif text-black text-4xl md:text-5xl lg:text-6xl mb-8">Elder Law</h1>
                <p className="text-xl text-black/80">
                  Our elder law practice provides comprehensive legal services to seniors and their families, 
                  addressing the unique challenges that come with aging through strategic protection, 
                  thoughtful planning, and compassionate guidance.
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
                <h2 className="font-serif text-black text-3xl mb-8">Our Principles</h2>
              </div>
              <div className="col-span-3 mondrian-yellow"></div>
            </div>
            
            <div className="space-y-8 max-w-5xl mx-auto">
              {principles.map((principle, index) => (
                <div key={index} className="flex flex-col md:flex-row">
                  {/* Number block with corresponding Mondrian color */}
                  <div className={`${principle.color} w-full md:w-48 flex-shrink-0 flex items-center justify-center p-8`}>
                    <span className="font-serif text-white text-3xl font-bold">{principle.number}</span>
                  </div>
                  
                  {/* Content block */}
                  <div className="bg-white p-6 border-4 border-black flex-grow">
                    <h3 className="font-serif text-black text-2xl mb-4">{principle.title}</h3>
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
              <div className="col-span-3 mondrian-blue"></div>
              <div className="col-span-6 mondrian-grid-item bg-white p-8 text-center">
                <h2 className="font-serif text-black text-3xl mb-8">Our Process</h2>
              </div>
              <div className="col-span-3 mondrian-white border-r-4 border-b-4 border-black"></div>
            </div>
            
            <div className="space-y-8 max-w-5xl mx-auto">
              {/* Process step 1 */}
              <div className="flex flex-col md:flex-row">
                <div className="mondrian-red w-full md:w-48 flex-shrink-0 flex items-center justify-center p-8">
                  <span className="font-serif text-white text-3xl font-bold">{process[0].number}</span>
                </div>
                <div className="bg-white p-6 border-4 border-black flex-grow">
                  <h3 className="font-serif text-black text-2xl mb-4">{process[0].title}</h3>
                  <p className="text-black/80 text-lg">{process[0].description}</p>
                </div>
              </div>
              
              {/* Process step 2 */}
              <div className="flex flex-col md:flex-row-reverse">
                <div className="mondrian-blue w-full md:w-48 flex-shrink-0 flex items-center justify-center p-8">
                  <span className="font-serif text-white text-3xl font-bold">{process[1].number}</span>
                </div>
                <div className="bg-white p-6 border-4 border-black flex-grow">
                  <h3 className="font-serif text-black text-2xl mb-4">{process[1].title}</h3>
                  <p className="text-black/80 text-lg">{process[1].description}</p>
                </div>
              </div>
              
              {/* Process step 3 */}
              <div className="flex flex-col md:flex-row">
                <div className="mondrian-red w-full md:w-48 flex-shrink-0 flex items-center justify-center p-8">
                  <span className="font-serif text-white text-3xl font-bold">{process[2].number}</span>
                </div>
                <div className="bg-white p-6 border-4 border-black flex-grow">
                  <h3 className="font-serif text-black text-2xl mb-4">{process[2].title}</h3>
                  <p className="text-black/80 text-lg">{process[2].description}</p>
                </div>
              </div>
              
              {/* Process step 4 with Mondrian decoration */}
              <div className="flex flex-col md:flex-row-reverse">
                <div className="mondrian-blue w-full md:w-48 flex-shrink-0 flex items-center justify-center p-8">
                  <span className="font-serif text-white text-3xl font-bold">{process[3].number}</span>
                </div>
                <div className="bg-white p-6 border-4 border-black flex-grow relative">
                  <h3 className="font-serif text-black text-2xl mb-4">{process[3].title}</h3>
                  <p className="text-black/80 text-lg">{process[3].description}</p>
                  
                  {/* Small Mondrian decoration in bottom right */}
                  <div className="absolute bottom-3 right-3 w-24 h-24 grid grid-cols-2 grid-rows-2 gap-1">
                    <div className="mondrian-red"></div>
                    <div className="bg-white border border-black"></div>
                    <div className="bg-white border border-black"></div>
                    <div className="mondrian-blue"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to action button */}
        <section className="py-8">
          <div className="container mx-auto px-8 flex justify-center">
            <div className="mondrian-divider flex items-center w-full max-w-4xl">
              <div className="mondrian-red h-8 w-16 flex-shrink-0"></div>
              <div className="flex-grow bg-white border-t-4 border-b-4 border-black py-4 px-6 text-center">
                <span className="text-xl">Ask us about Elder Law services: (212) 555-0123</span>
              </div>
              <div className="mondrian-yellow h-8 w-32 flex-shrink-0"></div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-8 mb-1">
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row">
                <div className="bg-red-600 w-full md:w-1/4 p-8"></div>
                <div className="bg-blue-500 w-full md:w-16 p-8 hidden md:block"></div>
                
                <div className="bg-white w-full md:flex-1 p-8 border-4 border-black">
                  <h2 className="font-serif text-3xl mb-4">Protect Your Future — Contact Us Today</h2>
                  <p className="mb-6">Schedule a consultation to discuss your legal needs and discover how our firm's vision and forward-thinking approach can help you.</p>
                  
                  <div className="inline-block bg-white border-2 border-black px-8 py-3 font-medium">
                    30 YEARS OF TRUSTED COUNSEL
                  </div>
                </div>
                
                <div className="bg-yellow-400 w-full md:w-1/6 p-8"></div>
              </div>
              
              <div className="mt-8 text-center">
                <Link to="/contact" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 border-2 border-black inline-flex items-center">
                  Request Your Free Consultation
                  <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DirectElderLaw; 