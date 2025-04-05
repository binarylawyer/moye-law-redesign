import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, FileText, Server, Database, Globe, Users, Shield, Check, Briefcase, DollarSign, Book } from 'lucide-react';
import MondrianClassicComposition from '@/components/MondrianClassicComposition';
import { logger } from '@/utils/logger';

const SoftwareLicensing: React.FC = () => {
  // Refs for scroll animations
  const licenseTypesRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const personaPathwaysRef = useRef<HTMLDivElement>(null);
  const caseStudiesRef = useRef<HTMLDivElement>(null);
  const complianceRef = useRef<HTMLDivElement>(null);
  const approachRef = useRef<HTMLDivElement>(null);

  // Log page visit
  useEffect(() => {
    logger.info('Software Licensing practice area visited');
  }, []);

  // Intersection Observer for reveal animations
  useEffect(() => {
    // Make all sections visible initially, then apply animations
    const sections = [
      licenseTypesRef.current,
      servicesRef.current,
      personaPathwaysRef.current,
      caseStudiesRef.current,
      complianceRef.current,
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

  // License Types
  const licenseTypes = [
    {
      icon: <Code className="h-8 w-8 text-[#003B98]" />,
      title: "Proprietary Licensing",
      description: "Custom licensing frameworks for commercial software products that maximize revenue while protecting intellectual property.",
      color: "border-[#003B98]",
      bgColor: "bg-[#003B98]/5"
    },
    {
      icon: <Globe className="h-8 w-8 text-[#D6001C]" />,
      title: "Open Source Compliance",
      description: "Strategic approaches to open source integration, compliance verification, and risk management for modern software development.",
      color: "border-[#D6001C]",
      bgColor: "bg-[#D6001C]/5"
    },
    {
      icon: <Server className="h-8 w-8 text-[#FFEB80]" />,
      title: "SaaS & Cloud Services",
      description: "Specialized licensing solutions for Software-as-a-Service and cloud-based offerings, addressing unique service-based requirements.",
      color: "border-[#FFEB80]",
      bgColor: "bg-[#FFEB80]/5"
    },
    {
      icon: <Database className="h-8 w-8 text-[#4D80D4]" />,
      title: "Data & API Licensing",
      description: "Targeted licensing frameworks for data products, APIs, and integrations that balance access with appropriate use limitations.",
      color: "border-[#4D80D4]",
      bgColor: "bg-[#4D80D4]/5"
    }
  ];

  // Specialized Services
  const services = [
    {
      icon: <FileText className="h-8 w-8 text-[#D6001C]" />,
      title: "License Agreement Development",
      description: "Comprehensive development of custom software license agreements aligned with business models, market positioning, and protection objectives.",
      color: "border-[#D6001C]"
    },
    {
      icon: <Users className="h-8 w-8 text-[#003B98]" />,
      title: "Multi-Party Licensing",
      description: "Strategic structuring of complex licensing arrangements involving multiple parties, channel distribution, and integration partnerships.",
      color: "border-[#003B98]"
    },
    {
      icon: <Shield className="h-8 w-8 text-[#FFEB80]" />,
      title: "License Compliance",
      description: "Implementation of license monitoring, enforcement tools, and audit processes to protect licensing revenue and intellectual property.",
      color: "border-[#FFEB80]"
    },
    {
      icon: <Globe className="h-8 w-8 text-[#4D80D4]" />,
      title: "Global Licensing Strategy",
      description: "Cross-jurisdictional licensing frameworks that address international regulatory considerations and regional market requirements.",
      color: "border-[#4D80D4]"
    }
  ];

  // Compliance Focus Areas
  const complianceAreas = [
    {
      title: "Open Source Compliance",
      description: "Comprehensive auditing and management of open source components to ensure license compliance, compatibility, and risk mitigation.",
      icon: <Code className="h-8 w-8 text-[#D6001C]" />,
      color: "text-[#D6001C]"
    },
    {
      title: "Export Controls",
      description: "Strategic navigation of export control regulations affecting software distribution, cloud services, and encryption technologies.",
      icon: <Globe className="h-8 w-8 text-[#003B98]" />,
      color: "text-[#003B98]"
    },
    {
      title: "Data Governance",
      description: "Integration of data protection requirements into software licensing frameworks to address privacy regulations and contractual obligations.",
      icon: <Database className="h-8 w-8 text-[#FFEB80]" />,
      color: "text-black"
    }
  ];

  // Persona-specific pathways
  const personaPathways = [
    {
      persona: "For Software Developers",
      icon: <Code className="h-8 w-8 text-[#4D80D4]" />,
      heading: "Development-Friendly Licensing",
      description: "We develop licensing frameworks that protect your code while preserving development agility, integration capabilities, and collaboration opportunities.",
      color: "border-[#4D80D4]",
      textColor: "text-[#4D80D4]",
      checks: [
        "Dependency management",
        "Open source compatibility",
        "Development environment provisions",
        "Technical implementation guidance"
      ]
    },
    {
      persona: "For Business Executives",
      icon: <Briefcase className="h-8 w-8 text-[#D6001C]" />,
      heading: "Revenue-Optimized Licensing",
      description: "We structure licensing approaches that support your business model, enable flexible commercial terms, and maximize revenue opportunities.",
      color: "border-[#D6001C]",
      textColor: "text-[#D6001C]",
      checks: [
        "Business model alignment",
        "Pricing structure support",
        "Channel distribution enablement",
        "Revenue protection mechanisms"
      ]
    },
    {
      persona: "For Enterprise Customers",
      icon: <DollarSign className="h-8 w-8 text-[#FFEB80]" />,
      heading: "Enterprise Integration Planning",
      description: "We guide enterprise software customers through licensing decisions, negotiations, and compliance programs that reduce risk and optimize value.",
      color: "border-[#FFEB80]",
      textColor: "text-black",
      checks: [
        "License portfolio management",
        "Compliance program development",
        "Cost optimization strategies",
        "Integration risk assessment"
      ]
    }
  ];

  // Case Studies
  const caseStudies = [
    {
      title: "Enterprise SaaS Licensing Framework",
      sector: "Enterprise Software",
      description: "Developed a comprehensive licensing and subscription framework for a complex enterprise SaaS platform with multiple modules, user types, and integration options.",
      outcome: "The flexible yet robust structure supported a 40% increase in average contract value while reducing legal review cycles and customer negotiation friction.",
      color: "border-t-[#D6001C]"
    },
    {
      title: "Open Source Strategy for Commercial Product",
      sector: "Development Tools",
      description: "Created a strategic approach to open source integration for a commercial development tool, balancing community engagement with intellectual property protection.",
      outcome: "The dual-licensing approach successfully engaged the developer community while preserving commercial opportunities, resulting in both increased adoption and revenue.",
      color: "border-t-[#4D80D4]"
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
                Software Licensing
              </h1>
              <p className="text-xl text-black/80">
                Specialized licensing frameworks for software products that address unique considerations of distribution, modification, and integration.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* License Types Section */}
      <section 
        ref={licenseTypesRef}
        className="py-24 bg-gray-50 opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-black mb-6">License Types</h2>
            <p className="text-gray-700">Our expertise spans diverse software licensing models, with tailored approaches for each distribution method and business model.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {licenseTypes.map((type, index) => (
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
      
      {/* Specialized Services Section */}
      <section 
        ref={servicesRef}
        className="py-24 opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Licensing Services</h2>
            <p className="text-gray-700">Our practice offers comprehensive legal services designed specifically for software licensing challenges and opportunities.</p>
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
            <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Your Licensing Journey</h2>
            <p className="text-gray-700">Our approach adapts to your specific software objectives, providing tailored licensing guidance that aligns with your business goals.</p>
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
                  <h4 className="font-medium text-black mb-4">Focus Areas:</h4>
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
            <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Featured Licensing Work</h2>
            <p className="text-gray-700">Examples of our strategic approach to software licensing across diverse business contexts.</p>
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
      
      {/* Compliance Focus */}
      <section 
        ref={complianceRef}
        className="py-24 bg-gray-50 opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Compliance Focus</h2>
            <p className="text-gray-700">We provide sophisticated guidance for navigating regulatory and compliance considerations in software licensing.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {complianceAreas.map((area, index) => (
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
            <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Our Licensing Approach</h2>
            <p className="text-gray-700">We blend technical understanding with business strategy to address the unique challenges of software licensing.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white border-2 border-black p-8">
              <h3 className="font-display text-2xl text-black mb-6">Technical Depth</h3>
              <p className="text-gray-700 mb-4">
                Our software licensing practice maintains technical understanding of software architecture, development methodologies, and deployment models.
              </p>
              <p className="text-gray-700">
                This technical foundation enables us to craft licensing frameworks that address actual implementation considerations rather than abstract legal theories.
              </p>
            </div>
            
            <div className="bg-white border-2 border-black p-8">
              <h3 className="font-display text-2xl text-black mb-6">Business Alignment</h3>
              <p className="text-gray-700 mb-4">
                We approach licensing as a business enablement tool that should support go-to-market strategies, pricing models, and customer relationships.
              </p>
              <p className="text-gray-700">
                This commercial focus results in licensing frameworks that facilitate business growth while providing appropriate legal protections.
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
          <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Begin Your Licensing Strategy</h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            Schedule a consultation to discuss how we can address your specific software licensing needs with sophisticated, tailored guidance.
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

export default SoftwareLicensing; 