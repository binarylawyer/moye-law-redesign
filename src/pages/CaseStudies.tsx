import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

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
      
      <main className="flex-grow">
        {/* Hero Section with adjusted padding to match other pages */}
        <section className="pt-24 pb-12 md:pt-28 md:pb-16">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl text-navy mb-6">
                Client Success Stories
              </h1>
              <p className="text-lg text-charcoal/80 mb-12 max-w-3xl mx-auto">
                Real-world examples of how we've helped clients navigate complex legal challenges while protecting what matters most. All case studies are anonymized to protect client confidentiality.
              </p>
            </div>
          </div>
        </section>
        
        {/* Case Studies List */}
        <section className="bg-light-gray py-20">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {caseStudies.map((study) => (
                <Card key={study.id} className="border border-gray-200 bg-white shadow-sm">
                  <CardContent className="p-8">
                    <h2 className="font-serif text-2xl text-navy mb-3">{study.title}</h2>
                    <p className="text-sm text-charcoal/70 mb-6">Client: {study.clientType}</p>
                    
                    <div className="mb-6">
                      <h3 className="font-medium text-navy mb-2">Challenge</h3>
                      <p className="text-charcoal/80">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="font-medium text-navy mb-2">Solution</h3>
                      <p className="text-charcoal/80">{study.solution}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="font-medium text-navy mb-2">Results</h3>
                      <ul className="list-disc pl-5">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="text-charcoal/80 mb-1">{result}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-8">
                      <Link 
                        to={study.practiceAreaPath} 
                        className="text-gold hover:text-navy transition-colors flex items-center"
                      >
                        Learn more about {study.practiceArea}
                        <ArrowRight className="ml-2" size={16} />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-3xl text-navy mb-6">Your Success Story Begins Here</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto text-charcoal/80">
                Every client journey begins with a conversation. Contact us to discuss how we can help you achieve your legal and financial goals.
              </p>
              <Link to="/contact">
                <Button className="bg-gold hover:bg-gold/90 text-white px-8 py-6">
                  Schedule a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CaseStudies;
