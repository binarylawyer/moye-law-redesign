import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Lightbulb, FileText, Search, Archive, Award, Shield, Globe, Check, Briefcase, Code, Book } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MondrianClassicComposition from '@/components/MondrianClassicComposition';
import { logger } from '@/utils/logger';

const InnovationPatentLaw: React.FC = () => {
  // Refs for scroll animations
  const technologiesRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const personaPathwaysRef = useRef<HTMLDivElement>(null);
  const caseStudiesRef = useRef<HTMLDivElement>(null);
  const strategyRef = useRef<HTMLDivElement>(null);
  const approachRef = useRef<HTMLDivElement>(null);

  // Log page visit
  useEffect(() => {
    logger.info('Innovation Patent Law practice area visited');
  }, []);

  // Intersection Observer for reveal animations
  useEffect(() => {
    // Make all sections visible initially, then apply animations
    const sections = [
      technologiesRef.current,
      servicesRef.current,
      personaPathwaysRef.current,
      caseStudiesRef.current,
      strategyRef.current,
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

  // Innovation Areas we cover
  const innovationAreas = [
    {
      icon: <Lightbulb className="h-8 w-8 text-[#003B98]" />,
      title: "Emerging Technologies",
      description: "Strategic patent protection for cutting-edge innovations in AI, blockchain, quantum computing, and other emerging fields.",
      color: "border-[#003B98]",
      bgColor: "bg-[#003B98]/5"
    },
    {
      icon: <FileText className="h-8 w-8 text-[#D6001C]" />,
      title: "Software & Digital Innovations",
      description: "Sophisticated approaches to securing protection for software-based innovations and digital technologies.",
      color: "border-[#D6001C]",
      bgColor: "bg-[#D6001C]/5"
    },
    {
      icon: <Search className="h-8 w-8 text-[#FFEB80]" />,
      title: "Industrial & Physical Innovations",
      description: "Comprehensive patent strategies for mechanical, electrical, chemical, and materials-based innovations.",
      color: "border-[#FFEB80]",
      bgColor: "bg-[#FFEB80]/5"
    },
    {
      icon: <Archive className="h-8 w-8 text-[#4D80D4]" />,
      title: "Processes & Methods",
      description: "Targeted protection for business methods, manufacturing processes, and operational innovations with commercial significance.",
      color: "border-[#4D80D4]",
      bgColor: "bg-[#4D80D4]/5"
    }
  ];

  // Specialized Services
  const services = [
    {
      icon: <Award className="h-8 w-8 text-[#D6001C]" />,
      title: "Strategic Patent Portfolio Development",
      description: "Comprehensive strategy for building patent portfolios that align with business objectives and create long-term competitive advantages.",
      color: "border-[#D6001C]"
    },
    {
      icon: <Search className="h-8 w-8 text-[#003B98]" />,
      title: "Patentability Analysis",
      description: "In-depth assessment of innovations for patent eligibility, novelty, non-obviousness, and strategic commercial value.",
      color: "border-[#003B98]"
    },
    {
      icon: <Shield className="h-8 w-8 text-[#FFEB80]" />,
      title: "Patent Enforcement",
      description: "Strategic approaches to patent monitoring, enforcement, and defense across relevant markets and jurisdictions.",
      color: "border-[#FFEB80]"
    },
    {
      icon: <Globe className="h-8 w-8 text-[#4D80D4]" />,
      title: "International Patent Strategy",
      description: "Coordinated multinational patent protection approaches that maximize geographic coverage while optimizing costs.",
      color: "border-[#4D80D4]"
    }
  ];

  // Persona-specific pathways
  const personaPathways = [
    {
      persona: "For Tech Innovators",
      icon: <Code className="h-8 w-8 text-[#4D80D4]" />,
      heading: "Innovation Protection",
      description: "We craft patent strategies that secure foundational innovations while preserving development flexibility and supporting your commercialization timeline.",
      color: "border-[#4D80D4]",
      textColor: "text-[#4D80D4]",
      checks: [
        "Iterative protection strategies",
        "Development-friendly timelines",
        "Future tech roadmap alignment",
        "Strategic competitive assessment"
      ]
    },
    {
      persona: "For Business Executives",
      icon: <Briefcase className="h-8 w-8 text-[#D6001C]" />,
      heading: "Strategic IP Assets",
      description: "We develop patent portfolios that create meaningful business assets, enhance company valuation, and enable strategic market positioning.",
      color: "border-[#D6001C]",
      textColor: "text-[#D6001C]",
      checks: [
        "Value-focused protection",
        "Competitor landscape analysis",
        "Risk-calibrated investment",
        "Market-entry protection"
      ]
    },
    {
      persona: "For Legacy Planners",
      icon: <Book className="h-8 w-8 text-[#FFEB80]" />,
      heading: "Long-term Innovation Strategy",
      description: "We establish sophisticated approaches to securing multi-generational value from your innovations through strategic patent protection and management.",
      color: "border-[#FFEB80]",
      textColor: "text-black",
      checks: [
        "Future-focused protection",
        "Technology transfer planning",
        "Licensing revenue structures",
        "Long-term portfolio management"
      ]
    }
  ];

  // Case Studies
  const caseStudies = [
    {
      title: "Strategic Patent Portfolio for AI Platform",
      sector: "Technology",
      description: "Developed a layered patent portfolio for an emerging AI platform company, protecting core innovations, technical implementations, and business applications.",
      outcome: "The strategic multi-layer approach secured comprehensive protection that supported a successful funding round and deterred competitive entry.",
      color: "border-t-[#D6001C]"
    },
    {
      title: "International Patent Strategy for Medical Device",
      sector: "Healthcare Innovation",
      description: "Created a coordinated international patent filing strategy for a breakthrough medical device that balanced geographic coverage with strategic budget allocation.",
      outcome: "The approach secured protection in key markets while maintaining cost control, with strategic use of PCT filings and national phase entries.",
      color: "border-t-[#4D80D4]"
    }
  ];

  // Strategic Areas
  const strategicAreas = [
    {
      title: "Competitive Landscape Analysis",
      description: "Methodical evaluation of competitor patent positions to identify strategic opportunities and potential threats to your innovation agenda.",
      icon: <Search className="h-8 w-8 text-[#D6001C]" />,
      color: "text-[#D6001C]"
    },
    {
      title: "Defensive Patent Positioning",
      description: "Strategic development of defensive patent portfolios that mitigate litigation risk and create freedom to operate in key technology areas.",
      icon: <Shield className="h-8 w-8 text-[#003B98]" />,
      color: "text-[#003B98]"
    },
    {
      title: "Innovation Monetization",
      description: "Structured approaches to licensing, technology transfer, and commercialization of patent-protected innovations.",
      icon: <Award className="h-8 w-8 text-[#FFEB80]" />,
      color: "text-black"
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
                Innovation & Patent Law
              </h1>
              <p className="text-xl text-black/80">
                Strategic approaches to securing patent protection for novel technologies—where creativity meets precision.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Innovation Areas Section */}
      <section 
        ref={technologiesRef}
        className="py-24 bg-gray-50 opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Innovation Areas We Protect</h2>
            <p className="text-gray-700">Our patent expertise spans diverse technological domains, with specialized approaches for each innovation category.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {innovationAreas.map((area, index) => (
              <div 
                key={index}
                className={`border-2 ${area.color} p-8 rounded-md transition-all duration-300 hover:shadow-lg ${area.bgColor} h-full`}
              >
                <div className="mb-6">
                  {area.icon}
                </div>
                <h3 className="font-display text-xl text-black mb-4">{area.title}</h3>
                <p className="text-gray-700">{area.description}</p>
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
            <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Specialized Patent Services</h2>
            <p className="text-gray-700">Our practice offers tailored legal services designed specifically for securing, managing, and leveraging patent-protected innovations.</p>
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
            <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Your Innovation Journey</h2>
            <p className="text-gray-700">Our approach adapts to your specific innovation objectives, providing tailored patent guidance that aligns with your business goals.</p>
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
            <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Featured Patent Work</h2>
            <p className="text-gray-700">Examples of our strategic approach to patent protection across diverse innovation contexts.</p>
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
      
      {/* Strategic Areas */}
      <section 
        ref={strategyRef}
        className="py-24 bg-gray-50 opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Strategic Patent Focus</h2>
            <p className="text-gray-700">We provide sophisticated guidance for developing patent strategies that create meaningful business advantages.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {strategicAreas.map((area, index) => (
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
            <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Our Patent Law Approach</h2>
            <p className="text-gray-700">We blend technical understanding with strategic thinking to address the unique challenges of innovation protection.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white border-2 border-black p-8">
              <h3 className="font-display text-2xl text-black mb-6">Strategic Focus</h3>
              <p className="text-gray-700 mb-4">
                Our patent practice prioritizes business-aligned protection strategies that focus investment on innovations with meaningful market impact and competitive advantage.
              </p>
              <p className="text-gray-700">
                This strategic approach ensures your patent resources create maximum commercial value rather than just technical documentation.
              </p>
            </div>
            
            <div className="bg-white border-2 border-black p-8">
              <h3 className="font-display text-2xl text-black mb-6">Technical Precision</h3>
              <p className="text-gray-700 mb-4">
                We maintain deep technical understanding across diverse technology domains, enabling us to craft patent applications with appropriate scope and technically sound claims.
              </p>
              <p className="text-gray-700">
                This precision improves examination outcomes while creating patents that withstand validity challenges and effectively protect your innovations.
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
          <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Begin Your Patent Strategy</h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            Schedule a consultation to discuss how we can address your specific innovation protection needs with sophisticated, tailored patent guidance.
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

export default InnovationPatentLaw; 