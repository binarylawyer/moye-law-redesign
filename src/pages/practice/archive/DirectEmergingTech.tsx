import React from 'react';
import { logger } from '@/utils/logger';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MondrianClassicComposition from '@/components/MondrianClassicComposition';
import { Link } from 'react-router-dom';
import '../../styles/mondrian.css';

// Content sections
const techAreas = [
  {
    title: "Blockchain & Cryptocurrency",
    description: "Legal frameworks for blockchain applications, token offerings, smart contracts, and cryptocurrency ventures."
  },
  {
    title: "Artificial Intelligence",
    description: "Navigating the complex legal landscape of AI development, data usage, liability, and intellectual property protection."
  },
  {
    title: "Internet of Things (IoT)",
    description: "Addressing privacy, security, and regulatory compliance for connected devices and systems."
  },
  {
    title: "Automated Systems",
    description: "Legal guidance for robotic process automation, autonomous vehicles, and other automated technologies."
  }
];

// Principles based on the Mondrian aesthetic
const principles = [
  {
    number: "1",
    title: "Future-Oriented Approach",
    description: "We stay ahead of evolving legal frameworks for emerging technologies, anticipating regulatory developments before they impact your business operations.",
    color: "mondrian-blue"
  },
  {
    number: "2",
    title: "Technical Fluency",
    description: "Our team combines deep legal expertise with genuine understanding of technical concepts, enabling meaningful guidance that bridges legal and technical considerations.",
    color: "mondrian-red"
  },
  {
    number: "3",
    title: "Adaptable Frameworks",
    description: "We create legal structures that accommodate rapid technological change, providing necessary protection while maintaining flexibility for innovation and growth.",
    color: "mondrian-yellow"
  }
];

// Process steps
const process = [
  {
    number: "01",
    title: "Technology Assessment",
    description: "We begin with a comprehensive assessment of your technology and its unique legal considerations to identify specific compliance needs and risks.",
    color: "mondrian-blue"
  },
  {
    number: "02",
    title: "Regulatory Mapping",
    description: "We identify applicable regulatory frameworks across all relevant jurisdictions, creating a clear compliance roadmap for your technology.",
    color: "mondrian-yellow"
  },
  {
    number: "03",
    title: "Risk Mitigation",
    description: "We develop tailored strategies to address identified legal risks while enabling innovation and technology development.",
    color: "mondrian-red"
  },
  {
    number: "04",
    title: "Ongoing Advisory",
    description: "We provide continuous guidance as your technology evolves and regulatory landscapes change, ensuring consistent legal protection.",
    color: "mondrian-blue"
  }
];

// Related services
const relatedServices = [
  {
    title: "IP Licensing",
    path: "ip-licensing",
    description: "Strategic frameworks for technology licensing and intellectual property monetization."
  },
  {
    title: "Digital Asset Protection",
    path: "digital-asset-protection",
    description: "Comprehensive protection for digital assets, from NFTs to digital IP."
  },
  {
    title: "IP Consulting",
    path: "ip-consulting",
    description: "Strategic guidance for intellectual property in emerging technology contexts."
  }
];

const DirectEmergingTech: React.FC = () => {
  logger.debug('DirectEmergingTech component rendered');
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32 md:pt-40">
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
                <h1 className="font-display text-black text-4xl md:text-5xl lg:text-6xl mb-8">Emerging Technology</h1>
                <p className="text-xl text-black/80">
                  Our emerging technology practice provides forward-thinking legal guidance for 
                  innovators at the frontier of technological development, addressing novel 
                  legal challenges while enabling continued innovation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Principles Section */}
        <section className="py-16">
          <div className="container mx-auto px-8">
            <div className="mondrian-grid mb-16">
              <div className="col-span-3 mondrian-red"></div>
              <div className="col-span-6 mondrian-grid-item bg-white p-8 text-center">
                <h2 className="font-display text-black text-3xl mb-8">Our Principles</h2>
              </div>
              <div className="col-span-3 mondrian-white border-r-4 border-b-4 border-black"></div>
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
              <div className="col-span-3 mondrian-white border-r-4 border-b-4 border-black"></div>
              <div className="col-span-6 mondrian-grid-item bg-white p-8 text-center">
                <h2 className="font-display text-black text-3xl mb-8">Our Process</h2>
              </div>
              <div className="col-span-3 mondrian-blue"></div>
            </div>
            
            <div className="space-y-8 max-w-5xl mx-auto">
              {/* Process step 1 */}
              <div className="flex flex-col md:flex-row">
                <div className="mondrian-blue w-full md:w-48 flex-shrink-0 flex items-center justify-center p-8">
                  <span className="font-display text-white text-3xl font-bold">{process[0].number}</span>
                </div>
                <div className="bg-white p-6 border-4 border-black flex-grow">
                  <h3 className="font-display text-black text-2xl mb-4">{process[0].title}</h3>
                  <p className="text-black/80 text-lg">{process[0].description}</p>
                </div>
              </div>
              
              {/* Process step 2 */}
              <div className="flex flex-col md:flex-row-reverse">
                <div className="mondrian-yellow w-full md:w-48 flex-shrink-0 flex items-center justify-center p-8">
                  <span className="font-display text-white text-3xl font-bold">{process[1].number}</span>
                </div>
                <div className="bg-white p-6 border-4 border-black flex-grow">
                  <h3 className="font-display text-black text-2xl mb-4">{process[1].title}</h3>
                  <p className="text-black/80 text-lg">{process[1].description}</p>
                </div>
              </div>
              
              {/* Process step 3 */}
              <div className="flex flex-col md:flex-row">
                <div className="mondrian-red w-full md:w-48 flex-shrink-0 flex items-center justify-center p-8">
                  <span className="font-display text-white text-3xl font-bold">{process[2].number}</span>
                </div>
                <div className="bg-white p-6 border-4 border-black flex-grow">
                  <h3 className="font-display text-black text-2xl mb-4">{process[2].title}</h3>
                  <p className="text-black/80 text-lg">{process[2].description}</p>
                </div>
              </div>
              
              {/* Process step 4 with Mondrian decoration */}
              <div className="flex flex-col md:flex-row-reverse">
                <div className="mondrian-blue w-full md:w-48 flex-shrink-0 flex items-center justify-center p-8">
                  <span className="font-display text-white text-3xl font-bold">{process[3].number}</span>
                </div>
                <div className="bg-white p-6 border-4 border-black flex-grow relative">
                  <h3 className="font-display text-black text-2xl mb-4">{process[3].title}</h3>
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
              <div className="mondrian-blue h-8 w-16 flex-shrink-0"></div>
              <div className="flex-grow bg-white border-t-4 border-b-4 border-black py-4 px-6 text-center">
                <span className="text-xl">Ask us about Emerging Technology Law: (212) 555-0123</span>
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
                {/* Mondrian composition for the left section */}
                <div className="w-full md:w-1/4 flex-shrink-0 h-64 md:h-auto">
                  <MondrianClassicComposition />
                </div>
                
                <div className="bg-white w-full md:w-16 p-8 hidden md:block"></div>
                
                <div className="bg-white w-full md:flex-1 p-8 border-4 border-black">
                  <h2 className="font-display text-3xl mb-4">Navigate the Future of Tech Law — Contact Us Today</h2>
                  <p className="mb-6">Schedule a consultation to discuss your emerging technology legal needs and discover how our innovative approach can help secure your technological future.</p>
                  
                  <div className="inline-block bg-white border-2 border-black px-8 py-3 font-medium">
                    TECH-FORWARD LEGAL SOLUTIONS
                  </div>
                </div>
                
                <div className="bg-gray-200 w-full md:w-1/6 p-8"></div>
              </div>
              
              <div className="mt-8 text-center">
                <Link to="/contact" className="mondrian-blue hover:bg-blue-700 text-white font-bold py-3 px-6 border-2 border-black inline-flex items-center">
                  Request Your Technology Law Consultation
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

export default DirectEmergingTech; 