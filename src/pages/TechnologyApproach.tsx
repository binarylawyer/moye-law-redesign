import React, { useRef, useEffect } from 'react';
import ConsultationCTA from "../components/ConsultationCTA";
import ResourcePageHeader from "../components/resources/ResourcePageHeader";
import { Shield, Brain, Lock, Database, Code, Zap, ServerCrash, MicrochipIcon, ShieldCheck } from 'lucide-react';

const TechnologyPlatform: React.FC = () => {
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
    <main className="pt-48 bg-white">
      <ResourcePageHeader 
        title="Our Technology Platform"
        description="At Moye Law, we've developed a proprietary technology platform that leverages advanced artificial intelligence and machine learning capabilities while maintaining DoD-level security protocols."
        variant="blue"
      />

      {/* AI & ML Innovation Section */}
      <section className="py-16 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 
              ref={el => elementsRef.current[2] = el}
              className="reveal font-display text-3xl text-navy mb-6 text-center"
              style={{ transitionDelay: '0.2s' }}
            >
              Advanced AI & ML Capabilities
            </h2>
            <p 
              ref={el => elementsRef.current[3] = el}
              className="reveal text-lg text-center text-charcoal/80 mb-12 max-w-3xl mx-auto"
              style={{ transitionDelay: '0.25s' }}
            >
              Our proprietary algorithms and neural networks transform traditional legal processes into highly efficient, 
              data-driven operations that deliver superior results.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div 
                ref={el => elementsRef.current[4] = el}
                className="reveal bg-white p-8 rounded-lg shadow-sm border border-navy/10 hover:border-navy/20 transition-all"
                style={{ transitionDelay: '0.3s' }}
              >
                <div className="flex items-start">
                  <div className="bg-navy/10 p-4 rounded-lg mr-5">
                    <Brain className="h-8 w-8 text-navy" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-navy mb-3">Neural Document Analysis</h3>
                    <p className="text-charcoal/80 mb-3">
                      Our advanced neural networks can analyze thousands of legal documents in minutes, identifying patterns, 
                      risks, and opportunities that human review might miss.
                    </p>
                    <p className="text-charcoal/80">
                      This system achieves 98.7% accuracy in document classification and extraction, significantly 
                      outperforming traditional methods.
                    </p>
                  </div>
                </div>
              </div>
              
              <div 
                ref={el => elementsRef.current[5] = el}
                className="reveal bg-white p-8 rounded-lg shadow-sm border border-navy/10 hover:border-navy/20 transition-all"
                style={{ transitionDelay: '0.4s' }}
              >
                <div className="flex items-start">
                  <div className="bg-navy/10 p-4 rounded-lg mr-5">
                    <MicrochipIcon className="h-8 w-8 text-navy" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-navy mb-3">Predictive Legal Analytics</h3>
                    <p className="text-charcoal/80 mb-3">
                      Our proprietary machine learning models analyze historical legal outcomes to forecast case scenarios, 
                      allowing for proactive strategy development rather than reactive responses.
                    </p>
                    <p className="text-charcoal/80">
                      These insights enable our attorneys to develop highly targeted, data-informed approaches for each client\'s unique situation.
                    </p>
                  </div>
                </div>
              </div>
              
              <div 
                ref={el => elementsRef.current[6] = el}
                className="reveal bg-white p-8 rounded-lg shadow-sm border border-navy/10 hover:border-navy/20 transition-all"
                style={{ transitionDelay: '0.5s' }}
              >
                <div className="flex items-start">
                  <div className="bg-navy/10 p-4 rounded-lg mr-5">
                    <Zap className="h-8 w-8 text-navy" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-navy mb-3">Intelligent Document Generation</h3>
                    <p className="text-charcoal/80 mb-3">
                      Beyond simple templates, our AI system generates sophisticated legal documents that adapt to complex scenarios 
                      while maintaining precision and compliance with the latest legal standards.
                    </p>
                    <p className="text-charcoal/80">
                      Documents are tailored with client-specific variables while ensuring adherence to jurisdiction-specific requirements.
                    </p>
                  </div>
                </div>
              </div>
              
              <div 
                ref={el => elementsRef.current[7] = el}
                className="reveal bg-white p-8 rounded-lg shadow-sm border border-navy/10 hover:border-navy/20 transition-all"
                style={{ transitionDelay: '0.6s' }}
              >
                <div className="flex items-start">
                  <div className="bg-navy/10 p-4 rounded-lg mr-5">
                    <Database className="h-8 w-8 text-navy" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-navy mb-3">Advanced Digital Asset Protection</h3>
                    <p className="text-charcoal/80 mb-3">
                      Our platform incorporates specialized algorithms for tracking and managing complex digital assets, from 
                      cryptocurrencies to NFTs and emerging tokenized assets.
                    </p>
                    <p className="text-charcoal/80">
                      This technology ensures these modern assets are seamlessly integrated into your comprehensive estate and asset protection plans.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DoD-Level Security Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div 
              ref={el => elementsRef.current[8] = el}
              className="reveal text-center mb-12"
              style={{ transitionDelay: '0.7s' }}
            >
              <div className="bg-navy/10 p-5 rounded-full inline-flex mb-6">
                <ShieldCheck className="h-10 w-10 text-navy" />
              </div>
              <h2 className="font-display text-3xl text-navy mb-4">DoD-Level Security Infrastructure</h2>
              <p className="text-charcoal/80 max-w-3xl mx-auto">
                Your confidential information deserves the highest level of protection. Our technology platform implements 
                security protocols that meet or exceed Department of Defense standards, ensuring your sensitive data 
                remains protected both at rest and in transit.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div 
                ref={el => elementsRef.current[9] = el}
                className="reveal bg-white p-8 rounded-lg shadow-sm border border-navy/10"
                style={{ transitionDelay: '0.8s' }}
              >
                <h3 className="font-display text-2xl text-navy mb-4 flex items-center">
                  <Lock className="h-6 w-6 mr-3 text-gold" />
                  Data-at-Rest Protection
                </h3>
                <ul className="space-y-3 text-charcoal/80">
                  <li className="flex items-start">
                    <div className="bg-gold h-2 w-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p>AES-256 bit encryption for all stored documents and communications</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-gold h-2 w-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p>Redundant, geo-distributed secure data centers with physical access controls</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-gold h-2 w-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p>Regular security audits and penetration testing by independent cybersecurity firms</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-gold h-2 w-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p>Secure data destruction protocols that comply with NIST SP 800-88 guidelines</p>
                  </li>
                </ul>
              </div>

              <div 
                ref={el => elementsRef.current[10] = el}
                className="reveal bg-white p-8 rounded-lg shadow-sm border border-navy/10"
                style={{ transitionDelay: '0.9s' }}
              >
                <h3 className="font-display text-2xl text-navy mb-4 flex items-center">
                  <Shield className="h-6 w-6 mr-3 text-gold" />
                  Data-in-Transit Protection
                </h3>
                <ul className="space-y-3 text-charcoal/80">
                  <li className="flex items-start">
                    <div className="bg-gold h-2 w-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p>TLS 1.3 with perfect forward secrecy for all communication channels</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-gold h-2 w-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p>End-to-end encryption for client portal communications</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-gold h-2 w-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p>Multi-factor authentication with biometric verification options</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-gold h-2 w-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p>Advanced threat detection systems monitoring for unauthorized access attempts</p>
                  </li>
                </ul>
              </div>
            </div>
            
            <div 
              ref={el => elementsRef.current[11] = el}
              className="reveal mx-auto max-w-3xl bg-light-gray p-8 rounded-lg border border-navy/10"
              style={{ transitionDelay: '1.0s' }}
            >
              <h3 className="font-display text-xl text-navy mb-4 text-center">Compliance & Certifications</h3>
              <p className="text-charcoal/80 mb-6 text-center">
                Our technology infrastructure meets stringent industry standards and regulatory requirements:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white p-3 rounded text-center text-navy font-medium text-sm border border-navy/10">HIPAA Compliant</div>
                <div className="bg-white p-3 rounded text-center text-navy font-medium text-sm border border-navy/10">NIST 800-171</div>
                <div className="bg-white p-3 rounded text-center text-navy font-medium text-sm border border-navy/10">SOC 2 Type II</div>
                <div className="bg-white p-3 rounded text-center text-navy font-medium text-sm border border-navy/10">ISO 27001</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Human Expertise Section */}
      <section className="py-16 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div 
              ref={el => elementsRef.current[12] = el}
              className="reveal text-center mb-12"
              style={{ transitionDelay: '1.1s' }}
            >
              <h2 className="font-display text-3xl text-navy mb-6">Technology Enhanced by Human Expertise</h2>
              <p className="text-charcoal/80">
                While our technology platform provides powerful capabilities, we believe the true value lies in how it amplifies the expertise 
                of our attorneys rather than replacing their judgment and insight.
              </p>
            </div>
            
            <div 
              ref={el => elementsRef.current[13] = el}
              className="reveal bg-white p-8 rounded-lg shadow-md"
              style={{ transitionDelay: '1.2s' }}
            >
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-gold/20 p-3 rounded-lg mr-4 flex-shrink-0">
                    <span className="text-navy font-display text-lg">01</span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-navy mb-2">Augmented Intelligence</h3>
                    <p className="text-charcoal/80">
                      Our technology doesn\'t make decisions—it provides our attorneys with comprehensive insights that enhance their 
                      expertise and judgment, allowing them to focus on strategic thinking rather than routine tasks.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gold/20 p-3 rounded-lg mr-4 flex-shrink-0">
                    <span className="text-navy font-display text-lg">02</span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-navy mb-2">Seamless Integration</h3>
                    <p className="text-charcoal/80">
                      Our platform integrates with our attorneys' workflows, providing real-time insights during client meetings 
                      and enabling them to respond to complex questions with data-backed precision.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gold/20 p-3 rounded-lg mr-4 flex-shrink-0">
                    <span className="text-navy font-display text-lg">03</span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-navy mb-2">Continuous Learning</h3>
                    <p className="text-charcoal/80">
                      Our systems continuously learn from new legal developments and case outcomes, ensuring our attorneys always 
                      have access to the most current legal knowledge and precedents.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Continuous Innovation - slightly modified */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div 
            ref={el => elementsRef.current[14] = el}
            className="reveal max-w-3xl mx-auto text-center"
            style={{ transitionDelay: '1.3s' }}
          >
            <div className="bg-navy/10 p-4 rounded-full inline-flex mb-6">
              <Code className="h-8 w-8 text-navy" />
            </div>
            <h2 className="font-display text-3xl text-navy mb-6">Innovation Pipeline</h2>
            <p className="text-charcoal/80 mb-6">
              Our dedicated technology team continually evaluates emerging technologies to enhance our platform capabilities. 
              We maintain strategic partnerships with leading research institutions and legal technology innovators to 
              ensure our clients benefit from the most advanced legal technology available.
            </p>
            <div className="inline-flex items-center justify-center px-6 py-3 bg-gold/10 rounded-full text-navy font-medium">
              <ServerCrash className="h-5 w-5 mr-2" />
              Upcoming: Quantum-resistant encryption protocols
            </div>
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </main>
  );
};

export default TechnologyPlatform;
