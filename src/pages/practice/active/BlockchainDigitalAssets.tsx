import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Database, Wallet, Layers, Lock, FileText, Globe, Check, DollarSign, Users, BarChart } from 'lucide-react';
import MondrianClassicComposition from '@/components/MondrianClassicComposition';
import { logger } from '@/utils/logger';

const BlockchainDigitalAssets: React.FC = () => {
  // Refs for scroll animations
  const technologiesRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const personaPathwaysRef = useRef<HTMLDivElement>(null);
  const caseStudiesRef = useRef<HTMLDivElement>(null);
  const regulatoryRef = useRef<HTMLDivElement>(null);
  const approachRef = useRef<HTMLDivElement>(null);

  // Log page visit
  useEffect(() => {
    logger.info('Blockchain & Digital Assets practice area visited');
  }, []);

  // Intersection Observer for reveal animations
  useEffect(() => {
    // Make all sections visible initially, then apply animations
    const sections = [
      technologiesRef.current,
      servicesRef.current,
      personaPathwaysRef.current,
      caseStudiesRef.current,
      regulatoryRef.current,
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

  // Blockchain Technologies we cover
  const technologies = [
    {
      icon: <Database className="h-8 w-8 text-[#003B98]" />,
      title: "Blockchain Protocols",
      description: "Specialized legal structures for permissioned and permissionless blockchain networks, addressing governance, liability, and security concerns.",
      color: "border-[#003B98]",
      bgColor: "bg-[#003B98]/5"
    },
    {
      icon: <Wallet className="h-8 w-8 text-[#D6001C]" />,
      title: "Digital Assets & NFTs",
      description: "Comprehensive frameworks for digital asset creation, trading, custody, and intellectual property protection.",
      color: "border-[#D6001C]",
      bgColor: "bg-[#D6001C]/5"
    },
    {
      icon: <Layers className="h-8 w-8 text-[#FFEB80]" />,
      title: "Smart Contracts",
      description: "Legal approaches for creating, validating, and enforcing smart contract systems with appropriate governance and risk management.",
      color: "border-[#FFEB80]",
      bgColor: "bg-[#FFEB80]/5"
    },
    {
      icon: <Globe className="h-8 w-8 text-[#4D80D4]" />,
      title: "Decentralized Applications",
      description: "Legal structures for dApps and DAOs that balance innovation with appropriate regulatory compliance and risk mitigation.",
      color: "border-[#4D80D4]",
      bgColor: "bg-[#4D80D4]/5"
    }
  ];

  // Specialized Services
  const services = [
    {
      icon: <Shield className="h-8 w-8 text-[#D6001C]" />,
      title: "Regulatory Navigation",
      description: "Strategic guidance through complex and evolving regulatory landscapes for blockchain and digital assets across multiple jurisdictions.",
      color: "border-[#D6001C]"
    },
    {
      icon: <FileText className="h-8 w-8 text-[#003B98]" />,
      title: "Digital Asset Protection",
      description: "Comprehensive legal frameworks for securing, transferring, and preserving digital assets through innovative protection mechanisms.",
      color: "border-[#003B98]"
    },
    {
      icon: <Lock className="h-8 w-8 text-[#FFEB80]" />,
      title: "Tokenization Structures",
      description: "Sophisticated legal structures for asset tokenization that address securities laws, trading frameworks, and regulatory considerations.",
      color: "border-[#FFEB80]"
    },
    {
      icon: <Users className="h-8 w-8 text-[#4D80D4]" />,
      title: "DAO Governance",
      description: "Specialized governance frameworks for decentralized autonomous organizations that balance member interests with legal compliance.",
      color: "border-[#4D80D4]"
    }
  ];

  // Persona-specific pathways
  const personaPathways = [
    {
      persona: "For Tech Innovators",
      icon: <Database className="h-8 w-8 text-[#4D80D4]" />,
      heading: "Protocol Development",
      description: "We design legal frameworks that support innovative blockchain protocol development while addressing regulatory considerations and technical governance issues.",
      color: "border-[#4D80D4]",
      textColor: "text-[#4D80D4]",
      checks: [
        "Developer-centric documentation",
        "Open source licensing strategies",
        "Technical governance structures",
        "Regulatory navigation pathways"
      ]
    },
    {
      persona: "For Enterprise Executives",
      icon: <BarChart className="h-8 w-8 text-[#D6001C]" />,
      heading: "Enterprise Integration",
      description: "We craft legal approaches for integrating blockchain technologies into existing enterprise operations, addressing compliance, risk, and governance concerns.",
      color: "border-[#D6001C]",
      textColor: "text-[#D6001C]",
      checks: [
        "Compliance-driven implementation",
        "Cross-enterprise governance",
        "Risk-calibrated adoption",
        "Legacy system integration"
      ]
    },
    {
      persona: "For Wealth Preservers",
      icon: <DollarSign className="h-8 w-8 text-[#FFEB80]" />,
      heading: "Digital Asset Preservation",
      description: "We develop sophisticated strategies for high-net-worth individuals to securely preserve, manage, and transfer digital assets across generations.",
      color: "border-[#FFEB80]",
      textColor: "text-black",
      checks: [
        "Multi-generational custody solutions",
        "Privacy-preserving structures",
        "Tax-efficient asset management",
        "Estate planning integration"
      ]
    }
  ];

  // Case Studies
  const caseStudies = [
    {
      title: "Investment DAO Legal Structure",
      sector: "Decentralized Finance",
      description: "Developed a comprehensive legal framework for a tokenized investment collective, addressing securities law considerations, governance mechanisms, and member rights/responsibilities.",
      outcome: "The structure enabled compliant operation while preserving core principles of decentralization and member control over investment decisions.",
      color: "border-t-[#D6001C]"
    },
    {
      title: "Digital Asset Trust Structure",
      sector: "Wealth Management",
      description: "Created a specialized trust structure for a multi-generational family office seeking to preserve and manage significant cryptocurrency holdings across generations.",
      outcome: "The framework provided secure custody, governance continuity, and tax-efficient transfer mechanisms tailored to the unique characteristics of digital assets.",
      color: "border-t-[#4D80D4]"
    }
  ];

  // Regulatory Focus Areas
  const regulatoryAreas = [
    {
      title: "Securities Compliance",
      description: "Strategic approaches to securities law considerations for token offerings, security tokens, and decentralized investment structures.",
      icon: <FileText className="h-8 w-8 text-[#D6001C]" />,
      color: "text-[#D6001C]"
    },
    {
      title: "AML/KYC Frameworks",
      description: "Compliant but practical structures for anti-money laundering and know-your-customer requirements in blockchain applications.",
      icon: <Shield className="h-8 w-8 text-[#003B98]" />,
      color: "text-[#003B98]"
    },
    {
      title: "Cross-Border Operations",
      description: "Multi-jurisdictional strategies for blockchain operations that navigate complex and sometimes contradictory regulatory environments.",
      icon: <Globe className="h-8 w-8 text-[#FFEB80]" />,
      color: "text-black"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
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
                Blockchain & Digital Assets
              </h1>
              <p className="text-xl text-black/80">
                Sophisticated legal frameworks for blockchain technologies, cryptocurrencies, and tokenized assets—where innovation meets compliance.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Blockchain Technologies Section */}
      <section 
        ref={technologiesRef}
        className="py-24 bg-gray-50 opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Blockchain Technologies We Cover</h2>
            <p className="text-gray-700">Our expertise spans the entire blockchain ecosystem, with specialized legal approaches for each technology category.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className={`border-2 ${tech.color} p-8 rounded-md transition-all duration-300 hover:shadow-lg ${tech.bgColor} h-full`}
              >
                <div className="mb-6">
                  {tech.icon}
                </div>
                <h3 className="font-display text-xl text-black mb-4">{tech.title}</h3>
                <p className="text-gray-700">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Specialized Services Section */}
      <section 
        ref={servicesRef}
        className="py-24 opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Specialized Blockchain Legal Services</h2>
            <p className="text-gray-700">Our practice offers tailored legal services designed specifically for the unique challenges of blockchain implementation and digital asset management.</p>
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
            <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Your Blockchain Journey</h2>
            <p className="text-gray-700">Our approach adapts to your specific relationship with blockchain technology, providing tailored guidance that aligns with your objectives.</p>
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
                  <h4 className="font-medium text-black mb-4">Strategic Elements:</h4>
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
            <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Featured Blockchain Work</h2>
            <p className="text-gray-700">Examples of our specialized legal approach to blockchain implementation and digital asset management.</p>
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
      
      {/* Regulatory Focus Areas */}
      <section 
        ref={regulatoryRef}
        className="py-24 bg-gray-50 opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Blockchain Regulatory Focus</h2>
            <p className="text-gray-700">We provide sophisticated guidance for navigating the complex and evolving regulatory landscape for blockchain and digital assets.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {regulatoryAreas.map((area, index) => (
              <div 
                key={index}
                className="bg-white p-8 shadow-sm text-center"
              >
                <div className="flex justify-center mb-6">
                  {area.icon}
                </div>
                <h3 className={`font-display text-xl mb-4 ${area.color}`}>{area.title}</h3>
                <p className="text-gray-700">{area.description}</p>
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
            <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Our Blockchain Law Approach</h2>
            <p className="text-gray-700">We blend technical understanding with legal expertise to address the unique challenges of blockchain technology and digital assets.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white border-2 border-black p-8">
              <h3 className="font-display text-2xl text-black mb-6">Technology Fluency</h3>
              <p className="text-gray-700 mb-4">
                Our practice maintains substantive technical understanding of blockchain technologies, enabling us to address legal issues with appropriate technical context and practical relevance.
              </p>
              <p className="text-gray-700">
                This foundation allows us to craft legal solutions that align with the decentralized nature of blockchain while protecting your strategic interests.
              </p>
            </div>
            
            <div className="bg-white border-2 border-black p-8">
              <h3 className="font-display text-2xl text-black mb-6">Regulatory Intelligence</h3>
              <p className="text-gray-700 mb-4">
                We maintain close engagement with evolving blockchain regulations globally to provide guidance that addresses current compliance while positioning you for future regulatory developments.
              </p>
              <p className="text-gray-700">
                This proactive approach helps navigate regulatory uncertainty while enabling innovation in distributed technology and digital assets.
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
          <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Begin Your Blockchain Legal Strategy</h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            Schedule a consultation to discuss how we can address your specific blockchain and digital asset legal needs with sophisticated, tailored guidance.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-8 py-3 bg-[#FFEB80] border-4 border-black text-black font-display text-lg hover:bg-[#D6001C] hover:text-white transition-colors mondrian-button"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlockchainDigitalAssets; 