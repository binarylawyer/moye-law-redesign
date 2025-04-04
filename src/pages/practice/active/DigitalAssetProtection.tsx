import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Lock, Database, Globe, Key, Server, Wallet, Check, Briefcase, DollarSign, AlertTriangle, FileText } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MondrianClassicComposition from '@/components/MondrianClassicComposition';
import { logger } from '@/utils/logger';

const DigitalAssetProtection: React.FC = () => {
  // Refs for scroll animations
  const protectionTypesRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const personaPathwaysRef = useRef<HTMLDivElement>(null);
  const caseStudiesRef = useRef<HTMLDivElement>(null);
  const securityFrameworkRef = useRef<HTMLDivElement>(null);
  const approachRef = useRef<HTMLDivElement>(null);

  // Log page visit
  useEffect(() => {
    logger.info('Digital Asset Protection practice area visited');
  }, []);

  // Intersection Observer for reveal animations
  useEffect(() => {
    // Make all sections visible initially, then apply animations
    const sections = [
      protectionTypesRef.current,
      servicesRef.current,
      personaPathwaysRef.current,
      caseStudiesRef.current,
      securityFrameworkRef.current,
      approachRef.current
    ];
    
    sections.filter(Boolean).forEach((section) => {
      if (section) {
        // First make sure it's visible
        section.classList.remove('opacity-0');
        section.classList.add('opacity-100');
        
        // Then add animation class
        setTimeout(() => {
          section.classList.add('animate-fade-in-slow');
        }, 100);
      }
    });
    
    // Original animation logic with IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-slow');
        }
      });
    }, { threshold: 0.15 });
    
    sections.filter(Boolean).forEach((section) => section && observer.observe(section));
    
    return () => {
      sections.filter(Boolean).forEach((section) => section && observer.unobserve(section));
    };
  }, []);

  // Protection Types
  const protectionTypes = [
    {
      icon: <Wallet className="h-8 w-8 text-[#003B98]" />,
      title: "Cryptocurrency Protection",
      description: "Comprehensive legal strategies for securing digital currency holdings, wallet succession planning, and regulatory compliance.",
      color: "border-[#003B98]",
      bgColor: "bg-[#003B98]/5"
    },
    {
      icon: <Database className="h-8 w-8 text-[#D6001C]" />,
      title: "Digital Content Security",
      description: "Robust protection frameworks for digital creative works, proprietary information, and intellectual property in digital formats.",
      color: "border-[#D6001C]",
      bgColor: "bg-[#D6001C]/5"
    },
    {
      icon: <Lock className="h-8 w-8 text-[#FFEB80]" />,
      title: "NFT & Digital Collectibles",
      description: "Strategic legal structures for non-fungible tokens and digital collectibles, addressing ownership, authenticity, and transfer rights.",
      color: "border-[#FFEB80]",
      bgColor: "bg-[#FFEB80]/5"
    },
    {
      icon: <Server className="h-8 w-8 text-[#4D80D4]" />,
      title: "Digital Infrastructure",
      description: "Legal protection mechanisms for digital infrastructure assets, including architecture designs, operational systems, and cloud resources.",
      color: "border-[#4D80D4]",
      bgColor: "bg-[#4D80D4]/5"
    }
  ];

  // Key Services
  const services = [
    {
      icon: <Key className="h-8 w-8 text-[#D6001C]" />,
      title: "Custody & Access Planning",
      description: "Advanced legal structures for digital asset custody, including succession planning, emergency access protocols, and multi-signature arrangements.",
      color: "border-[#D6001C]"
    },
    {
      icon: <Shield className="h-8 w-8 text-[#003B98]" />,
      title: "Rights Protection Strategy",
      description: "Comprehensive approaches to securing legal rights in digital assets, including enforcement mechanisms and monitoring frameworks.",
      color: "border-[#003B98]"
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-[#FFEB80]" />,
      title: "Regulatory Compliance",
      description: "Strategic navigation of evolving regulatory landscapes for digital assets, ensuring operational compliance while maximizing protection.",
      color: "border-[#FFEB80]"
    },
    {
      icon: <Globe className="h-8 w-8 text-[#4D80D4]" />,
      title: "Cross-Border Protection",
      description: "Specialized legal frameworks addressing the borderless nature of digital assets, ensuring protection across multiple jurisdictions.",
      color: "border-[#4D80D4]"
    }
  ];

  // Security Framework Elements
  const securityElements = [
    {
      title: "Legal Documentation",
      description: "Comprehensive legal structures documenting ownership, rights, and succession arrangements for digital assets.",
      icon: <FileText className="h-8 w-8 text-[#D6001C]" />,
      color: "text-[#D6001C]"
    },
    {
      title: "Technical Integration",
      description: "Legal strategies that integrate with technical security measures, including key management, encryption, and access controls.",
      icon: <Lock className="h-8 w-8 text-[#003B98]" />,
      color: "text-[#003B98]"
    },
    {
      title: "Operational Protocols",
      description: "Structured operational guidelines for secure digital asset management, transfer, and recovery with legal enforceability.",
      icon: <Shield className="h-8 w-8 text-[#FFEB80]" />,
      color: "text-black"
    }
  ];

  // Persona-specific pathways
  const personaPathways = [
    {
      persona: "For Tech Innovators",
      icon: <Server className="h-8 w-8 text-[#4D80D4]" />,
      heading: "Innovation Protection",
      description: "We develop comprehensive protection frameworks for digital creators and tech innovators, securing digital assets while enabling continued innovation and value creation.",
      color: "border-[#4D80D4]",
      textColor: "text-[#4D80D4]",
      checks: [
        "Creator rights protection",
        "NFT and digital collectible structures",
        "Digital content monetization security",
        "Technical implementation guidance"
      ]
    },
    {
      persona: "For Business Executives",
      icon: <Briefcase className="h-8 w-8 text-[#D6001C]" />,
      heading: "Business Digital Security",
      description: "We structure digital asset protection approaches that safeguard business-critical digital properties while enabling operational flexibility and strategic growth.",
      color: "border-[#D6001C]",
      textColor: "text-[#D6001C]",
      checks: [
        "Digital property portfolios",
        "Cross-border protection frameworks",
        "Operational security integration",
        "Strategic risk mitigation"
      ]
    },
    {
      persona: "For Wealth Preservation",
      icon: <DollarSign className="h-8 w-8 text-[#FFEB80]" />,
      heading: "Legacy Security Planning",
      description: "We develop sophisticated digital asset succession plans that ensure the secure transfer and preservation of digital wealth across generations.",
      color: "border-[#FFEB80]",
      textColor: "text-black",
      checks: [
        "Cryptocurrency succession planning",
        "Digital estate documentation",
        "Multi-signature custody arrangements",
        "Recovery protocol development"
      ]
    }
  ];

  // Case Studies
  const caseStudies = [
    {
      title: "Secure Digital Legacy Structure",
      sector: "High Net Worth Individual",
      description: "Created a comprehensive digital asset protection and succession framework for a significant cryptocurrency portfolio, integrating technical security with legal enforceability.",
      outcome: "The multi-layered protection structure provided both immediate security and long-term succession planning, preserving digital assets valued at over $25 million across multiple jurisdictions.",
      color: "border-t-[#D6001C]"
    },
    {
      title: "NFT Creator Protection Framework",
      sector: "Digital Art Platform",
      description: "Developed a strategic approach to protecting creator rights for a digital art platform launching an NFT marketplace, balancing technical implementation with legal protection.",
      outcome: "The framework successfully protected creator interests through multiple transaction layers while establishing clear ownership rights, increasing artist participation by 60%.",
      color: "border-t-[#4D80D4]"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with Mondrian-inspired design */}
      <section className="pt-32 md:pt-40 pb-16">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row">
            {/* Mondrian composition on left */}
            <div className="w-full md:w-1/4 flex-shrink-0 h-64 md:h-auto">
              <MondrianClassicComposition />
            </div>
            
            {/* Added spacing between Mondrian and content */}
            <div className="bg-white w-full md:w-16 p-8 hidden md:block"></div>
            
            {/* White content block */}
            <div className="bg-white border-4 border-black p-8 md:p-12 w-full md:flex-1 text-center">
              <h1 className="font-display text-black text-4xl md:text-5xl lg:text-6xl mb-8">
                Digital Asset Protection
              </h1>
              <p className="text-xl text-black/80">
                Advanced protection mechanisms for digital properties, addressing unique vulnerabilities of technological assets.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Protection Types Section */}
      <section 
        ref={protectionTypesRef}
        className="py-24 bg-gray-50 opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Digital Asset Categories</h2>
            <p className="text-gray-700">Our protection frameworks address the unique security challenges of diverse digital asset classes, from cryptocurrencies to digital infrastructure.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {protectionTypes.map((type, index) => (
              <div 
                key={index}
                className={`border-2 ${type.color} p-8 rounded-md transition-all duration-300 hover:shadow-lg ${type.bgColor} h-full`}
              >
                <div className="mb-6">
                  {type.icon}
                </div>
                <h3 className="font-display text-xl text-black mb-4">{type.title}</h3>
                <p className="text-gray-700">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Key Services Section */}
      <section 
        ref={servicesRef}
        className="py-24 opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Protection Services</h2>
            <p className="text-gray-700">Our practice offers sophisticated legal protection services designed specifically for the unique challenges of digital assets.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index}
                className="flex gap-6 p-6 rounded-md hover:bg-gray-50 transition-colors duration-300"
              >
                <div className={`flex-shrink-0 p-3 rounded-md ${service.color} bg-white`}>
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-display text-xl text-black mb-2">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Client Persona Pathways */}
      <section 
        ref={personaPathwaysRef}
        className="py-24 bg-gray-50 opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Your Protection Journey</h2>
            <p className="text-gray-700">Our approach adapts to your specific digital asset portfolio, providing tailored protection strategies aligned with your objectives.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {personaPathways.map((path, index) => (
              <div 
                key={index}
                className={`border-l-4 ${path.color} p-8 bg-white shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0">
                    {path.icon}
                  </div>
                  <p className={`${path.textColor} font-medium`}>{path.persona}</p>
                </div>
                <h3 className="font-display text-2xl text-black mb-4">{path.heading}</h3>
                <p className="text-gray-700 mb-6">{path.description}</p>
                <div className="mt-auto">
                  <h4 className="font-medium text-black mb-4">Protection Focus:</h4>
                  <ul className="space-y-2">
                    {path.checks.map((check, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{check}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Case Studies */}
      <section 
        ref={caseStudiesRef}
        className="py-24 opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Featured Protection Work</h2>
            <p className="text-gray-700">Examples of our strategic approach to digital asset protection across diverse contexts.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {caseStudies.map((study, index) => (
              <div 
                key={index}
                className={`bg-white ${study.color} p-8 shadow-sm border-t-4`}
              >
                <h3 className="font-display text-2xl text-black mb-3">{study.title}</h3>
                <p className="text-sm text-gray-500 mb-6">{study.sector}</p>
                <p className="text-gray-700 mb-6">{study.description}</p>
                <div className="border-l-4 border-gray-200 pl-4">
                  <p className="italic text-gray-600">{study.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Security Framework */}
      <section 
        ref={securityFrameworkRef}
        className="py-24 bg-gray-50 opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Security Framework</h2>
            <p className="text-gray-700">We implement a comprehensive, multi-layered approach to digital asset protection that integrates legal, technical, and operational security.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {securityElements.map((element, index) => (
              <div 
                key={index}
                className="bg-white p-8 shadow-sm text-center"
              >
                <div className="flex justify-center mb-6">
                  {element.icon}
                </div>
                <h3 className={`font-display text-xl mb-4 ${element.color}`}>{element.title}</h3>
                <p className="text-gray-700">{element.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Approach */}
      <section 
        ref={approachRef}
        className="py-24 opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Our Protection Approach</h2>
            <p className="text-gray-700">We blend technical understanding with legal expertise to address the unique challenges of securing digital assets.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white border-2 border-black p-8">
              <h3 className="font-display text-2xl text-black mb-6">Proactive Protection</h3>
              <p className="text-gray-700 mb-4">
                Our digital asset protection practice emphasizes proactive security frameworks that anticipate vulnerabilities and establish protective measures before incidents occur.
              </p>
              <p className="text-gray-700">
                This forward-looking approach addresses both current threats and emerging risks in the rapidly evolving digital asset landscape.
              </p>
            </div>
            
            <div className="bg-white border-2 border-black p-8">
              <h3 className="font-display text-2xl text-black mb-6">Technical Integration</h3>
              <p className="text-gray-700 mb-4">
                We develop legal protection frameworks that integrate seamlessly with technical security measures, creating comprehensive protection that bridges legal and technological domains.
              </p>
              <p className="text-gray-700">
                This integrated approach ensures that legal protections are technically implementable and technical measures have legal enforceability.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-gray-50 relative">
        <div className="absolute bottom-0 right-0 w-1/3 h-4 bg-[#4D80D4] z-10"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 border-l-4 border-b-4 border-black z-10"></div>
        
        <div className="container mx-auto px-6 max-w-4xl text-center relative">
          <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Secure Your Digital Assets</h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            Schedule a consultation to discuss how we can develop comprehensive protection strategies for your valuable digital assets.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-8 py-3 bg-[#FFEB80] border-4 border-black text-black font-display text-lg hover:bg-[#D6001C] hover:text-white transition-colors mondrian-button"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default DigitalAssetProtection; 