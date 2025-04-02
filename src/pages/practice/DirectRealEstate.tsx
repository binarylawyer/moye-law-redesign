import React from 'react';
import { logger } from '@/utils/logger';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Content sections
const realEstateAreas = [
  {
    title: "Commercial Real Estate",
    description: "Legal counsel for acquisition, development, leasing, and disposition of commercial properties."
  },
  {
    title: "Residential Real Estate",
    description: "Guidance for homebuyers, sellers, and investors in residential property transactions."
  },
  {
    title: "Real Estate Finance",
    description: "Legal support for financing strategies, loan documentation, and securitization structures."
  },
  {
    title: "Land Use & Zoning",
    description: "Navigation of complex regulatory frameworks affecting property development and usage."
  }
];

// Principles based on the Mondrian aesthetic
const principles = [
  {
    number: "1",
    title: "Thorough Due Diligence",
    description: "We conduct exhaustive property investigations to identify potential issues early, examining title history, environmental concerns, and regulatory compliance to prevent future complications.",
    color: "mondrian-red"
  },
  {
    number: "2",
    title: "Strategic Negotiation",
    description: "Our approach to contract negotiation balances firmness with flexibility, securing favorable terms while maintaining constructive relationships essential to successful real estate transactions.",
    color: "mondrian-blue"
  },
  {
    number: "3",
    title: "Comprehensive Documentation",
    description: "We prepare meticulous legal documentation that clearly defines all parties' rights and responsibilities, creating a solid foundation for property transactions and ongoing relationships.",
    color: "mondrian-yellow"
  }
];

// Process steps
const process = [
  {
    number: "01",
    title: "Initial Assessment",
    description: "We evaluate your real estate goals, existing documentation, and property details to create a customized legal strategy for your transaction.",
    color: "mondrian-yellow"
  },
  {
    number: "02",
    title: "Document Review & Preparation",
    description: "Our team conducts thorough due diligence while preparing or reviewing all necessary legal documents to protect your interests.",
    color: "mondrian-red"
  },
  {
    number: "03",
    title: "Negotiation & Resolution",
    description: "We handle all negotiations with counterparties, addressing contingencies and resolving potential obstacles to closing.",
    color: "mondrian-blue"
  },
  {
    number: "04",
    title: "Closing & Implementation",
    description: "We oversee the closing process and provide guidance on implementing all post-closing obligations and transition matters.",
    color: "mondrian-yellow"
  }
];

// Related services
const relatedServices = [
  {
    title: "Trusts & Estates",
    path: "trusts-estates",
    description: "Estate planning strategies for real property assets and succession planning."
  },
  {
    title: "Business Law",
    path: "business-law",
    description: "Legal support for business entities involved in real estate ventures."
  },
  {
    title: "Tax Planning",
    path: "tax-planning",
    description: "Strategic tax planning for real estate investments and transactions."
  }
];

const DirectRealEstate: React.FC = () => {
  logger.debug('DirectRealEstate component rendered');
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32 md:pt-40">
        {/* Hero Section */}
        <section className="py-16">
          <div className="container mx-auto px-8">
            <div className="flex flex-col md:flex-row">
              {/* Red Mondrian block on left */}
              <div className="bg-red-600 w-full md:w-1/3"></div>
              
              {/* White content block */}
              <div className="bg-white border-4 border-black p-8 md:p-12 w-full md:w-2/3">
                <h1 className="font-serif text-black text-4xl md:text-5xl lg:text-6xl mb-8">Real Estate</h1>
                <p className="text-xl text-black/80">
                  Our Real Estate practice provides strategic legal guidance across all aspects of property 
                  transactions, development, and management. We navigate complex regulatory environments 
                  while protecting your investments and facilitating successful deals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Principles Section */}
        <section className="py-16">
          <div className="container mx-auto px-8">
            <div className="mondrian-grid mb-16">
              <div className="col-span-3 mondrian-blue"></div>
              <div className="col-span-6 mondrian-grid-item bg-white p-8 text-center">
                <h2 className="font-serif text-black text-3xl mb-8">Our Principles</h2>
              </div>
              <div className="col-span-3 mondrian-white border-r-4 border-b-4 border-black"></div>
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
              <div className="col-span-3 mondrian-yellow"></div>
              <div className="col-span-6 mondrian-grid-item bg-white p-8 text-center">
                <h2 className="font-serif text-black text-3xl mb-8">Our Process</h2>
              </div>
              <div className="col-span-3 mondrian-red"></div>
            </div>
            
            <div className="space-y-8 max-w-5xl mx-auto">
              {/* Process step 1 */}
              <div className="flex flex-col md:flex-row">
                <div className="mondrian-yellow w-full md:w-48 flex-shrink-0 flex items-center justify-center p-8">
                  <span className="font-serif text-white text-3xl font-bold">{process[0].number}</span>
                </div>
                <div className="bg-white p-6 border-4 border-black flex-grow">
                  <h3 className="font-serif text-black text-2xl mb-4">{process[0].title}</h3>
                  <p className="text-black/80 text-lg">{process[0].description}</p>
                </div>
              </div>
              
              {/* Process step 2 */}
              <div className="flex flex-col md:flex-row-reverse">
                <div className="mondrian-red w-full md:w-48 flex-shrink-0 flex items-center justify-center p-8">
                  <span className="font-serif text-white text-3xl font-bold">{process[1].number}</span>
                </div>
                <div className="bg-white p-6 border-4 border-black flex-grow">
                  <h3 className="font-serif text-black text-2xl mb-4">{process[1].title}</h3>
                  <p className="text-black/80 text-lg">{process[1].description}</p>
                </div>
              </div>
              
              {/* Process step 3 */}
              <div className="flex flex-col md:flex-row">
                <div className="mondrian-blue w-full md:w-48 flex-shrink-0 flex items-center justify-center p-8">
                  <span className="font-serif text-white text-3xl font-bold">{process[2].number}</span>
                </div>
                <div className="bg-white p-6 border-4 border-black flex-grow">
                  <h3 className="font-serif text-black text-2xl mb-4">{process[2].title}</h3>
                  <p className="text-black/80 text-lg">{process[2].description}</p>
                </div>
              </div>
              
              {/* Process step 4 with Mondrian decoration */}
              <div className="flex flex-col md:flex-row-reverse">
                <div className="mondrian-yellow w-full md:w-48 flex-shrink-0 flex items-center justify-center p-8">
                  <span className="font-serif text-white text-3xl font-bold">{process[3].number}</span>
                </div>
                <div className="bg-white p-6 border-4 border-black flex-grow relative">
                  <h3 className="font-serif text-black text-2xl mb-4">{process[3].title}</h3>
                  <p className="text-black/80 text-lg">{process[3].description}</p>
                  
                  {/* Small Mondrian decoration in bottom right */}
                  <div className="absolute bottom-3 right-3 w-24 h-24 grid grid-cols-2 grid-rows-2 gap-1">
                    <div className="mondrian-yellow"></div>
                    <div className="bg-white border border-black"></div>
                    <div className="bg-white border border-black"></div>
                    <div className="mondrian-red"></div>
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
                <span className="text-xl">Ask us about Real Estate services: (212) 555-0123</span>
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
                <div className="bg-yellow-400 w-full md:w-1/4 p-8"></div>
                <div className="bg-blue-500 w-full md:w-16 p-8 hidden md:block"></div>
                
                <div className="bg-white w-full md:flex-1 p-8 border-4 border-black">
                  <h2 className="font-serif text-3xl mb-4">Secure Your Property Investment — Contact Us Today</h2>
                  <p className="mb-6">Schedule a consultation to discuss your real estate needs and discover how our strategic approach can help you navigate complex property transactions.</p>
                  
                  <div className="inline-block bg-white border-2 border-black px-8 py-3 font-medium">
                    TRUSTED REAL ESTATE COUNSEL FOR 30+ YEARS
                  </div>
                </div>
                
                <div className="bg-red-600 w-full md:w-1/6 p-8"></div>
              </div>
              
              <div className="mt-8 text-center">
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 border-2 border-black inline-flex items-center">
                  Request Your Real Estate Consultation
                  <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DirectRealEstate; 