import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building, Home, FileText, PenTool, BarChart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MondrianClassicComposition from '@/components/MondrianClassicComposition';

const RealEstateHub: React.FC = () => {
  // Refs for scroll animations
  const galleryRef = useRef<HTMLDivElement>(null);
  const personaRef = useRef<HTMLDivElement>(null);
  const caseStudiesRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for reveal animations
  useEffect(() => {
    // Make all sections visible initially, then apply animations
    const sections = [galleryRef.current, personaRef.current, caseStudiesRef.current, servicesRef.current];
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

  // Real Estate Practice Areas
  const practiceAreas = [
    {
      id: "real-estate-transactions",
      title: "Real Estate Transactions",
      description: "Comprehensive legal guidance for closings, acquisitions, dispositions, and financing of residential and commercial properties.",
      icon: <Building className="h-10 w-10 text-[#D6001C]" />,
      path: "/practice/real-estate-transactions",
      color: "border-[#D6001C]",
      bgcolor: "bg-[#D6001C]/5"
    },
    {
      id: "real-estate-consulting",
      title: "Real Estate Consulting",
      description: "Strategic advisory services for complex real estate investments, development projects, and portfolio optimization.",
      icon: <BarChart className="h-10 w-10 text-[#4D80D4]" />,
      path: "/practice/real-estate-consulting",
      color: "border-[#4D80D4]",
      bgcolor: "bg-[#4D80D4]/5"
    }
  ];

  // Related Services
  const relatedServices = [
    {
      id: "estate-planning",
      title: "Estate Planning",
      description: "Strategic integration of real property assets within comprehensive estate plans for optimal wealth preservation.",
      path: "/services/estate-planning",
      color: "border-[#FFEB80]",
      bgcolor: "bg-[#FFEB80]/5"
    },
    {
      id: "ip-consulting-strategy",
      title: "IP Consulting & Strategy",
      description: "Guidance on intellectual property considerations in real estate development, particularly for innovative or technology-integrated properties.",
      path: "/services/ip-consulting-strategy",
      color: "border-[#00A650]",
      bgcolor: "bg-[#00A650]/5"
    }
  ];

  // Persona pathways
  const personaPathways = [
    {
      persona: "For Investors",
      heading: "Strategic Acquisition",
      description: "Comprehensive legal frameworks for real estate transactions that address risk mitigation, financing structures, and long-term investment objectives.",
      color: "border-[#D6001C]",
      textColor: "text-[#D6001C]"
    },
    {
      persona: "For Developers",
      heading: "Project Structuring",
      description: "Legal infrastructure for development projects that addresses permitting, financing, contractor relationships, and eventual disposition or operation.",
      color: "border-[#4D80D4]",
      textColor: "text-[#4D80D4]"
    },
    {
      persona: "For Family Offices",
      heading: "Legacy Property Management",
      description: "Sophisticated approaches to multi-generational real estate portfolios, addressing governance, operational considerations, and succession planning.",
      color: "border-[#00A650]",
      textColor: "text-[#00A650]"
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
                Real Estate
              </h1>
              <p className="text-xl text-black/80">
                Sophisticated legal guidance for property transactions, development, and investment—where strategic vision meets precise execution.
              </p>
            </div>
          </div>
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
            <p className="text-gray-700">Explore our specialized real estate practice areas, each addressing distinct aspects of property acquisition, development, and management.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
            <p className="text-gray-700">Our real estate expertise adapts to your specific circumstances and objectives.</p>
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
            <p className="text-gray-700">Explore how our real estate expertise translates into tangible outcomes for clients.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Case Study 1 */}
            <div className="bg-white border-t-4 border-[#D6001C] p-8 shadow-sm">
              <h3 className="font-display text-2xl text-black mb-4">Mixed-Use Development Structuring</h3>
              <p className="text-sm text-gray-500 mb-6">Urban Development</p>
              <p className="text-gray-700 mb-6">
                Structured the legal framework for a complex mixed-use development, addressing zoning considerations, financing arrangements, commercial tenant relationships, and residential components.
              </p>
              <div className="border-l-4 border-gray-200 pl-4">
                <p className="italic text-gray-600">
                  "The project's complexity required sophisticated legal structuring—the framework allowed all components to operate together while maintaining appropriate boundaries."
                </p>
              </div>
            </div>
            
            {/* Case Study 2 */}
            <div className="bg-white border-t-4 border-[#4D80D4] p-8 shadow-sm">
              <h3 className="font-display text-2xl text-black mb-4">Family Estate Property Transition</h3>
              <p className="text-sm text-gray-500 mb-6">Legacy Property</p>
              <p className="text-gray-700 mb-6">
                Guided a multi-generational family through the transition of significant legacy properties, balancing optimal tax treatment with operational continuity and family dynamics.
              </p>
              <div className="border-l-4 border-gray-200 pl-4">
                <p className="italic text-gray-600">
                  "The properties represented both financial assets and family heritage—the solution honored both dimensions while providing clear governance for the future."
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
            <p className="text-gray-700">Explore our specialized service offerings that complement our real estate practice areas.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
        <div className="absolute bottom-0 right-0 w-1/3 h-4 bg-[#4D80D4] z-10"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 border-l-4 border-b-4 border-black z-10"></div>
        
        <div className="container mx-auto px-6 max-w-4xl text-center relative">
          <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Elevate Your Real Estate Strategy</h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            Begin a conversation about optimizing your real estate transactions, investments, and development projects with sophisticated legal guidance.
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

export default RealEstateHub; 