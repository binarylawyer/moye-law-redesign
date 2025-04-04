import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Shield, Code, Lightbulb, Globe } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const IntellectualProperty: React.FC = () => {
  // Refs for scroll animations
  const galleryRef = useRef<HTMLDivElement>(null);
  const personaRef = useRef<HTMLDivElement>(null);
  const caseStudiesRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-reveal');
        }
      });
    }, { threshold: 0.15 });
    
    const sections = [galleryRef.current, personaRef.current, caseStudiesRef.current, servicesRef.current];
    sections.filter(Boolean).forEach((section) => section && observer.observe(section));
    
    return () => {
      sections.filter(Boolean).forEach((section) => section && observer.unobserve(section));
    };
  }, []);

  // IP Practice Areas
  const practiceAreas = [
    {
      id: "ip-licensing",
      title: "IP Licensing",
      description: "Strategic frameworks for monetizing intellectual assets through licensing agreements that balance revenue generation with appropriate control.",
      icon: <FileText className="h-10 w-10 text-[#D6001C]" />,
      path: "/practice/ip-licensing",
      color: "border-[#D6001C]",
      bgcolor: "bg-[#D6001C]/5"
    },
    {
      id: "ip-asset-protection",
      title: "IP Asset Protection",
      description: "Comprehensive strategies to safeguard intellectual property assets against infringement, dilution, and unauthorized exploitation.",
      icon: <Shield className="h-10 w-10 text-[#4D80D4]" />,
      path: "/practice/ip-asset-protection",
      color: "border-[#4D80D4]",
      bgcolor: "bg-[#4D80D4]/5"
    },
    {
      id: "software-licensing",
      title: "Software Licensing",
      description: "Specialized licensing frameworks for software products that address unique considerations of distribution, modification, and integration.",
      icon: <Code className="h-10 w-10 text-[#00A650]" />,
      path: "/practice/software-licensing",
      color: "border-[#00A650]",
      bgcolor: "bg-[#00A650]/5"
    },
    {
      id: "digital-asset-protection",
      title: "Digital Asset Protection",
      description: "Advanced protection mechanisms for digital properties, addressing unique vulnerabilities of technological assets.",
      icon: <Shield className="h-10 w-10 text-[#FFEB80]" />,
      path: "/practice/digital-asset-protection",
      color: "border-[#FFEB80]",
      bgcolor: "bg-[#FFEB80]/5",
      textColor: "text-black"
    },
    {
      id: "ip-consulting",
      title: "IP Consulting",
      description: "Strategic advisory services on portfolio development, valuation, and integration of intellectual property with broader business objectives.",
      icon: <Lightbulb className="h-10 w-10 text-[#D6001C]" />,
      path: "/practice/ip-consulting",
      color: "border-[#D6001C]",
      bgcolor: "bg-[#D6001C]/5"
    }
  ];

  // Related Services
  const relatedServices = [
    {
      id: "ip-consulting-strategy",
      title: "IP Consulting & Strategy",
      description: "Strategic planning and guidance for intellectual property assets with a focus on long-term value creation.",
      path: "/services/ip-consulting-strategy",
      color: "border-[#4D80D4]",
      bgcolor: "bg-[#4D80D4]/5"
    },
    {
      id: "licensing-transactions",
      title: "Licensing & Transactions",
      description: "Structured approaches to intellectual property transactions, focusing on appropriate terms and protections.",
      path: "/services/licensing-transactions",
      color: "border-[#D6001C]",
      bgcolor: "bg-[#D6001C]/5"
    },
    {
      id: "digital-asset-tech-protection",
      title: "Digital Asset & Tech Protection",
      description: "Specific protection strategies for digital assets and technologies with unique security considerations.",
      path: "/services/digital-asset-tech-protection",
      color: "border-[#00A650]",
      bgcolor: "bg-[#00A650]/5"
    }
  ];

  // Persona pathways
  const personaPathways = [
    {
      persona: "For Technology Innovators",
      heading: "Protection for Innovation",
      description: "Strategic safeguards for emerging technologies and digital assets that balance protection with market growth.",
      color: "border-[#D6001C]",
      textColor: "text-[#D6001C]"
    },
    {
      persona: "For Family Businesses",
      heading: "Legacy & Transition",
      description: "Intellectual property strategies that preserve innovation value across generations and ownership transitions.",
      color: "border-[#4D80D4]",
      textColor: "text-[#4D80D4]"
    },
    {
      persona: "For Wealth Preservation",
      heading: "Value Maximization",
      description: "Sophisticated approaches to intellectual property that emphasize long-term value creation and portfolio appreciation.",
      color: "border-[#00A650]",
      textColor: "text-[#00A650]"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with Mondrian-inspired design */}
      <section className="pt-40 pb-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/4 h-4 bg-[#D6001C] z-10"></div>
        <div className="absolute top-0 right-0 w-16 h-16 border-r-4 border-t-4 border-black z-10"></div>
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-6 text-black">
              Intellectual Property
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto">
              Where innovation meets protection—strategic approaches to intellectual property that balance creative freedom with robust legal safeguards.
            </p>
          </div>
          
          {/* Geometric accent */}
          <div className="absolute bottom-0 right-1/4 w-24 h-24 border-l-4 border-b-4 border-black opacity-30"></div>
        </div>
      </section>
      
      {/* Practice Areas Gallery */}
      <section 
        ref={galleryRef} 
        className="py-24 bg-gray-50 opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Practice Specializations</h2>
            <p className="text-gray-700">Explore our specialized intellectual property practice areas, each addressing distinct aspects of innovation protection and asset management.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area) => (
              <div 
                key={area.id} 
                className={`border-2 ${area.color} p-8 rounded-md transition-all duration-300 hover:shadow-lg ${area.bgcolor} flex flex-col h-full`}
              >
                <div className="mb-6">
                  {area.icon}
                </div>
                <h3 className="font-display text-2xl text-black mb-4">{area.title}</h3>
                <p className="text-gray-700 mb-6 flex-grow">{area.description}</p>
                <Link 
                  to={area.path} 
                  className={`mt-auto inline-flex items-center text-black hover:${area.textColor || 'text-[#D6001C]'} transition-colors font-medium`}
                >
                  Explore practice <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Client Journey Pathways */}
      <section 
        ref={personaRef}
        className="py-24 opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Client Pathways</h2>
            <p className="text-gray-700">Our intellectual property expertise adapts to your specific circumstances and objectives.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {personaPathways.map((pathway, index) => (
              <div 
                key={index} 
                className={`border-l-4 ${pathway.color} p-8 bg-white shadow-sm hover:shadow-md transition-all duration-300`}
              >
                <p className={`${pathway.textColor} font-medium mb-4`}>{pathway.persona}</p>
                <h3 className="font-display text-2xl text-black mb-4">{pathway.heading}</h3>
                <p className="text-gray-700">{pathway.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Case Studies - MOMA-style exhibition */}
      <section 
        ref={caseStudiesRef}
        className="py-24 bg-gray-50 opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Featured Work</h2>
            <p className="text-gray-700">Explore how our intellectual property expertise translates into tangible business outcomes.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Case Study 1 */}
            <div className="bg-white border-t-4 border-[#D6001C] p-8 shadow-sm">
              <h3 className="font-display text-2xl text-black mb-4">Software Licensing Framework</h3>
              <p className="text-sm text-gray-500 mb-6">Technology Sector</p>
              <p className="text-gray-700 mb-6">
                Developed a comprehensive licensing strategy for a software platform that balanced open-source integration with proprietary protection, resulting in a 40% increase in licensing revenue.
              </p>
              <div className="border-l-4 border-gray-200 pl-4">
                <p className="italic text-gray-600">
                  "The framework provided both protection for our core IP and flexibility for our integration partners—exactly what we needed."
                </p>
              </div>
            </div>
            
            {/* Case Study 2 */}
            <div className="bg-white border-t-4 border-[#4D80D4] p-8 shadow-sm">
              <h3 className="font-display text-2xl text-black mb-4">Digital Asset Portfolio Protection</h3>
              <p className="text-sm text-gray-500 mb-6">Media & Entertainment</p>
              <p className="text-gray-700 mb-6">
                Created a comprehensive protection strategy for a media company's digital content library, addressing distribution, licensing, and emerging platform considerations.
              </p>
              <div className="border-l-4 border-gray-200 pl-4">
                <p className="italic text-gray-600">
                  "Our digital assets were properly protected across all platforms while maintaining accessibility for our global audience."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Services Section */}
      <section 
        ref={servicesRef}
        className="py-24 opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Related Services</h2>
            <p className="text-gray-700">Explore our specialized service offerings that complement our intellectual property practice areas.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedServices.map((service) => (
              <div 
                key={service.id} 
                className={`border-2 ${service.color} p-8 rounded-md transition-all duration-300 hover:shadow-md ${service.bgcolor}`}
              >
                <h3 className="font-display text-2xl text-black mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <Link 
                  to={service.path} 
                  className="inline-flex items-center text-black hover:text-[#D6001C] transition-colors font-medium"
                >
                  View service <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section with Mondrian-inspired design */}
      <section className="py-24 bg-gray-50 relative">
        <div className="absolute bottom-0 right-0 w-1/3 h-4 bg-[#00A650] z-10"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 border-l-4 border-b-4 border-black z-10"></div>
        
        <div className="container mx-auto px-6 max-w-4xl text-center relative">
          <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Protect Your Innovation</h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            Begin a conversation about securing your intellectual property assets with an approach tailored to your specific needs.
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

export default IntellectualProperty; 