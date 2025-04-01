import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ConsultationCTA from '@/components/ConsultationCTA';
import ResourcePageHeader from '@/components/resources/ResourcePageHeader';

interface CaseStudy {
  id: string;
  title: string;
  clientType: string;
  challenge: string;
  solution: string;
  results: string[];
  practiceArea: string;
  practiceAreaPath: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "tech-founder-estate",
    title: "Protecting a Tech Founder's Legacy",
    clientType: "Tech Entrepreneur",
    challenge: "A successful tech founder needed to protect intellectual assets while establishing a multigenerational wealth transfer structure that would support both family and philanthropic goals.",
    solution: "We created a comprehensive estate plan incorporating specialized trusts for digital assets, intellectual property protection, and strategic philanthropic structures.",
    results: [
      "Reduced potential estate tax exposure by over 40%",
      "Created secure succession protocols for digital assets",
      "Established foundation structure aligned with client's values"
    ],
    practiceArea: "Estate Planning",
    practiceAreaPath: "/practice/estate-planning"
  },
  {
    id: "family-elder-care",
    title: "Navigating Elder Care for a Family Matriarch",
    clientType: "Family Office",
    challenge: "A family needed to establish comprehensive care for their aging matriarch while protecting assets and ensuring quality of life.",
    solution: "We developed an integrated elder care strategy combining legal documents, care coordination frameworks, and asset protection techniques.",
    results: [
      "Preserved 95% of assets from long-term care costs",
      "Established clear decision-making protocols across family members",
      "Created sustainable funding structure for premium care options"
    ],
    practiceArea: "Elder Law",
    practiceAreaPath: "/practice/elder-law"
  },
  {
    id: "artist-ip-protection",
    title: "Securing a Renowned Artist's Creative Legacy",
    clientType: "Professional Artist",
    challenge: "A successful visual artist needed to protect intellectual property across multiple media while establishing structures for posthumous rights management.",
    solution: "We implemented a comprehensive IP protection strategy alongside specialized art trusts and licensing frameworks.",
    results: [
      "Registered complete portfolio of works across multiple jurisdictions",
      "Established transparent artist-friendly licensing structure",
      "Created foundation for posthumous exhibition and reproduction"
    ],
    practiceArea: "Art Law",
    practiceAreaPath: "/practice/art-law"
  },
  {
    id: "software-licensing",
    title: "Strategic Licensing Framework for SaaS Platform",
    clientType: "Technology Company",
    challenge: "A growing software company needed to restructure their licensing agreements to support expansion while protecting their intellectual property.",
    solution: "We developed a tiered licensing framework with clear terms, usage metrics, and enforcement protocols tailored to different market segments.",
    results: [
      "Increased licensing revenue by 35% in the first year",
      "Reduced unauthorized usage by implementing clear compliance terms",
      "Created scalable framework supporting international expansion"
    ],
    practiceArea: "Intellectual Property",
    practiceAreaPath: "/practice/intellectual-property"
  }
];

const CaseStudies: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow pt-48 relative overflow-hidden">
        <ResourcePageHeader 
          title="Client Success Stories"
          description="Real-world examples of how we've helped clients navigate complex legal challenges while protecting what matters most. All case studies are anonymized to protect client confidentiality."
          variant="red"
        />
        
        {/* Horizontal lines extending beyond screen width - Position 1 */}
        <div className="absolute w-[150vw] h-4 mondrian-light-blue left-[-25vw] top-[32%] z-10"></div>
        <div className="absolute w-[150vw] h-2 mondrian-blue left-[-25vw] top-[38%] z-10"></div>
        
        {/* Case Studies Layout */}
        <section className="py-20 relative">
          <div className="container mx-auto px-8">
            <div className="relative z-20">
              {caseStudies.map((study, index) => (
                <div 
                  key={study.id} 
                  className={`
                    mb-20 relative
                    ${index % 2 === 0 ? 'ml-0 md:ml-12' : 'mr-0 md:mr-12 ml-auto'}
                    ${index % 2 === 0 ? 'max-w-3xl' : 'max-w-4xl'}
                  `}
                >
                  {/* Multiple decorative squares for more Mondrian-like composition */}
                  <div 
                    className={`
                      absolute w-12 h-12 mondrian-border z-10
                      ${index % 5 === 0 ? 'mondrian-red' : 
                        index % 5 === 1 ? 'mondrian-light-yellow' : 
                        index % 5 === 2 ? 'mondrian-blue' : 
                        index % 5 === 3 ? 'mondrian-light-blue' : 'mondrian-yellow'}
                      ${index % 2 === 0 ? 'top-[-16px] left-[-16px]' : 'bottom-[-16px] right-[-16px]'}
                    `}
                  ></div>
                  
                  {/* Second decorative square for asymmetry */}
                  <div 
                    className={`
                      absolute w-8 h-8 mondrian-border z-10
                      ${index % 5 === 0 ? 'mondrian-light-blue' : 
                        index % 5 === 1 ? 'mondrian-red' : 
                        index % 5 === 2 ? 'mondrian-light-yellow' : 
                        index % 5 === 3 ? 'mondrian-yellow' : 'mondrian-blue'}
                      ${index % 2 === 0 ? 'bottom-[16px] right-[-8px]' : 'top-[20px] left-[-8px]'}
                    `}
                  ></div>
                  
                  {/* Study content */}
                  <div className="bg-white mondrian-border p-8">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-3/4">
                        <h2 className="font-serif text-2xl text-black mb-3">{study.title}</h2>
                        <p className="text-sm text-black/70 mb-6">Client: {study.clientType}</p>
                        
                        <div className="mb-6">
                          <h3 className="font-medium text-black mb-2">Challenge</h3>
                          <p className="text-black/80">{study.challenge}</p>
                        </div>
                        
                        <div className="mb-6">
                          <h3 className="font-medium text-black mb-2">Solution</h3>
                          <p className="text-black/80">{study.solution}</p>
                        </div>
                      </div>
                      
                      <div className="md:w-1/4">
                        <div 
                          className={`
                            p-4 h-full
                            ${index % 5 === 0 ? 'mondrian-light-yellow' : 
                              index % 5 === 1 ? 'mondrian-light-blue' : 
                              index % 5 === 2 ? 'mondrian-yellow' : 
                              index % 5 === 3 ? 'mondrian-blue' : 'mondrian-red'}
                            ${index % 5 === 4 ? 'text-white' : 'text-black'}
                            mondrian-border
                          `}
                        >
                          <h3 className="font-medium mb-2">Results</h3>
                          <ul className="list-none pl-0">
                            {study.results.map((result, idx) => (
                              <li key={idx} className="mb-2 text-sm">{result}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 text-right">
                      <Link 
                        to={study.practiceAreaPath} 
                        className="text-black border-b-2 border-black hover:text-[#D6001C] transition-colors flex items-center justify-end"
                      >
                        Learn more about {study.practiceArea}
                        <ArrowRight className="ml-2" size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Horizontal lines extending beyond screen width - Position 2 */}
        <div className="absolute w-[150vw] h-3 mondrian-light-yellow right-[-25vw] bottom-[28%] z-10"></div>
        <div className="absolute w-[150vw] h-4 mondrian-red right-[-25vw] bottom-[25%] z-10"></div>
        
        {/* CTA Section with mondrian-style grid background */}
        <section className="py-24 relative z-20">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mondrian-highlight">
                <div className="absolute top-[-12px] left-[-12px] w-24 h-24 mondrian-light-blue mondrian-border z-0"></div>
                <div className="absolute bottom-[-12px] right-[-12px] w-20 h-20 mondrian-light-yellow mondrian-border z-0"></div>
                
                <h2 className="font-serif text-3xl text-black mb-6 relative z-10">Your Success Story Begins Here</h2>
                <p className="text-lg mb-8 max-w-2xl mx-auto text-black/80">
                  Every client journey begins with a conversation. Contact us to discuss how we can help you achieve your legal and financial goals.
                </p>
                <Link to="/contact">
                  <Button className="bg-[#D6001C] hover:bg-[#D6001C]/90 text-white px-8 py-6 mondrian-border">
                    Schedule a Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        <ConsultationCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default CaseStudies;
