
import React, { useRef, useEffect } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ConsultationCTA from "../components/ConsultationCTA";
import { Shield, Code, Brain, Lock, Server, FileText } from 'lucide-react';

const TechnologyApproach: React.FC = () => {
  const elementsRef = useRef<Array<HTMLElement | null>>([]);
  
  // Animation for elements when they come into view
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    const elements = elementsRef.current.filter(Boolean) as HTMLElement[];
    elements.forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      elements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <>
      <Header />
      <main className="pt-32 bg-white">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 
                ref={el => elementsRef.current[0] = el}
                className="reveal font-serif text-4xl md:text-5xl text-navy mb-6"
              >
                Our Technology Approach
              </h1>
              <p 
                ref={el => elementsRef.current[1] = el}
                className="reveal text-lg text-charcoal/80 mb-8"
                style={{ transitionDelay: '0.1s' }}
              >
                At Moye Law, we leverage advanced technology to enhance our legal services while maintaining the personal attention that defines our practice. Our approach integrates innovation with expertise to provide solutions that are both efficient and personalized.
              </p>
            </div>
          </div>
        </section>

        {/* Key Technology Areas */}
        <section className="py-16 bg-light-gray">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 
                ref={el => elementsRef.current[2] = el}
                className="reveal font-serif text-3xl text-navy mb-12 text-center"
                style={{ transitionDelay: '0.2s' }}
              >
                How We Use Technology
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div 
                  ref={el => elementsRef.current[3] = el}
                  className="reveal bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                  style={{ transitionDelay: '0.3s' }}
                >
                  <div className="flex items-start">
                    <div className="bg-navy/10 p-3 rounded-lg mr-4">
                      <Brain className="h-6 w-6 text-navy" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-navy mb-3">AI-Enhanced Document Analysis</h3>
                      <p className="text-charcoal/80">
                        We utilize artificial intelligence to analyze complex legal documents quickly and accurately, 
                        identifying potential issues and opportunities that might otherwise be missed.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div 
                  ref={el => elementsRef.current[4] = el}
                  className="reveal bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                  style={{ transitionDelay: '0.4s' }}
                >
                  <div className="flex items-start">
                    <div className="bg-navy/10 p-3 rounded-lg mr-4">
                      <Lock className="h-6 w-6 text-navy" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-navy mb-3">Secure Client Portal</h3>
                      <p className="text-charcoal/80">
                        Our encrypted client portal provides secure access to your documents and communications, 
                        ensuring confidentiality while allowing convenient, 24/7 access to your legal information.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div 
                  ref={el => elementsRef.current[5] = el}
                  className="reveal bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                  style={{ transitionDelay: '0.5s' }}
                >
                  <div className="flex items-start">
                    <div className="bg-navy/10 p-3 rounded-lg mr-4">
                      <FileText className="h-6 w-6 text-navy" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-navy mb-3">Automated Document Generation</h3>
                      <p className="text-charcoal/80">
                        Our sophisticated document automation system allows us to create customized legal 
                        documents efficiently, reducing errors and ensuring consistency while still allowing 
                        for personalization to your specific needs.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div 
                  ref={el => elementsRef.current[6] = el}
                  className="reveal bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                  style={{ transitionDelay: '0.6s' }}
                >
                  <div className="flex items-start">
                    <div className="bg-navy/10 p-3 rounded-lg mr-4">
                      <Server className="h-6 w-6 text-navy" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-navy mb-3">Digital Asset Management</h3>
                      <p className="text-charcoal/80">
                        We employ specialized tools for tracking and managing digital assets, including 
                        cryptocurrencies and NFTs, ensuring these modern assets are properly integrated 
                        into your estate and asset protection plans.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security First Approach */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div 
                ref={el => elementsRef.current[7] = el}
                className="reveal text-center mb-12"
                style={{ transitionDelay: '0.7s' }}
              >
                <div className="bg-navy/10 p-4 rounded-full inline-flex mb-4">
                  <Shield className="h-8 w-8 text-navy" />
                </div>
                <h2 className="font-serif text-3xl text-navy mb-4">Security-First Philosophy</h2>
                <p className="text-charcoal/80">
                  Our technology decisions are guided by an unwavering commitment to protecting your confidential 
                  information. We implement bank-level encryption, multi-factor authentication, and regular 
                  security audits to ensure your data remains secure.
                </p>
              </div>
              
              <div 
                ref={el => elementsRef.current[8] = el}
                className="reveal bg-white p-8 rounded-lg shadow-sm border border-gray-100"
                style={{ transitionDelay: '0.8s' }}
              >
                <h3 className="font-serif text-2xl text-navy mb-4 text-center">The Human Element</h3>
                <p className="text-charcoal/80 mb-4">
                  While we embrace technology, we recognize that legal services fundamentally require human 
                  judgment, empathy, and creativity. Our technology strategy focuses on:
                </p>
                <ul className="space-y-3 text-charcoal/80">
                  <li className="flex items-start">
                    <div className="bg-gold h-2 w-2 rounded-full mt-2 mr-3"></div>
                    <p>Using technology to handle routine tasks, allowing our attorneys to focus on complex strategic issues</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-gold h-2 w-2 rounded-full mt-2 mr-3"></div>
                    <p>Enhancing, rather than replacing, the attorney-client relationship</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-gold h-2 w-2 rounded-full mt-2 mr-3"></div>
                    <p>Improving accessibility of legal information through user-friendly interfaces</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-gold h-2 w-2 rounded-full mt-2 mr-3"></div>
                    <p>Supporting informed decision-making with data-driven insights</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Continuous Innovation */}
        <section className="py-16 bg-light-gray">
          <div className="container mx-auto px-4">
            <div 
              ref={el => elementsRef.current[9] = el}
              className="reveal max-w-3xl mx-auto text-center"
              style={{ transitionDelay: '0.9s' }}
            >
              <div className="bg-navy/10 p-4 rounded-full inline-flex mb-4">
                <Code className="h-8 w-8 text-navy" />
              </div>
              <h2 className="font-serif text-3xl text-navy mb-4">Continuous Innovation</h2>
              <p className="text-charcoal/80 mb-6">
                We continuously evaluate emerging technologies to improve our services. Our legal technology 
                committee regularly reviews new tools and approaches, ensuring we stay at the forefront of 
                legal innovation while maintaining our commitment to personal service.
              </p>
            </div>
          </div>
        </section>

        <ConsultationCTA />
      </main>
      <Footer />
    </>
  );
};

export default TechnologyApproach;
