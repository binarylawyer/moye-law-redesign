import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Shield, Code, Lightbulb, Globe, Cpu, Activity, Film, TrendingUp, DollarSign, Check, ChevronRight, BarChart, Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MondrianClassicComposition from '@/components/MondrianClassicComposition';

const IntellectualProperty: React.FC = () => {
  // Refs for scroll animations
  const galleryRef = useRef<HTMLDivElement>(null);
  const personaRef = useRef<HTMLDivElement>(null);
  const caseStudiesRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const whyIpRef = useRef<HTMLDivElement>(null);
  const iprRef = useRef<HTMLDivElement>(null);
  const expertiseRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const digitalRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for reveal animations
  useEffect(() => {
    // Make all sections visible initially, then apply animations
    const sections = [
      galleryRef.current, 
      personaRef.current, 
      caseStudiesRef.current, 
      servicesRef.current,
      industriesRef.current,
      pricingRef.current,
      whyIpRef.current
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

  // Add new industry-specific IP strategies
  const industryStrategies = [
    {
      industry: "Technology",
      title: "Software & Digital Innovation",
      description: "Strategic protection for algorithms, user interfaces, software architecture, and digital systems that balances patent, copyright, and trade secret approaches.",
      icon: <Cpu className="h-10 w-10 text-[#4D80D4]" />,
      color: "border-[#4D80D4]",
      bgcolor: "bg-[#4D80D4]/5"
    },
    {
      industry: "Healthcare",
      title: "Life Sciences & Medical Technology",
      description: "Comprehensive protection strategies for pharmaceutical innovations, medical devices, diagnostic methods, and health technology, addressing regulatory complexities.",
      icon: <Activity className="h-10 w-10 text-[#D6001C]" />,
      color: "border-[#D6001C]",
      bgcolor: "bg-[#D6001C]/5"
    },
    {
      industry: "Creative Industries",
      title: "Media & Content Protection",
      description: "Sophisticated frameworks for protecting creative content, addressing digital distribution challenges, and creating strategic licensing programs for content monetization.",
      icon: <Film className="h-10 w-10 text-[#FFEB80]" />,
      color: "border-[#FFEB80]",
      bgcolor: "bg-[#FFEB80]/5",
      textColor: "text-black"
    }
  ];

  // Add IP value preservation points
  const ipValuePoints = [
    {
      title: "Competitive Advantage",
      description: "Strategic intellectual property protection creates market exclusivity, establishing barriers to entry and maintaining premium pricing power.",
      icon: <TrendingUp className="h-8 w-8 text-[#D6001C]" />,
      color: "border-[#D6001C]"
    },
    {
      title: "Asset Valuation",
      description: "Well-managed intellectual property portfolios contribute substantially to enterprise valuation, particularly for acquisition or investment purposes.",
      icon: <DollarSign className="h-8 w-8 text-[#4D80D4]" />,
      color: "border-[#4D80D4]"
    },
    {
      title: "Revenue Generation",
      description: "Structured intellectual property assets can generate revenue through licensing, strategic partnerships, and technology transfer arrangements.",
      icon: <BarChart className="h-8 w-8 text-[#00A650]" />,
      color: "border-[#00A650]"
    },
    {
      title: "Legacy Preservation",
      description: "Proper intellectual property protection ensures that innovations retain their value and attribution across generational transitions.",
      icon: <Award className="h-8 w-8 text-[#FFEB80]" />,
      color: "border-[#FFEB80]",
      textColor: "text-black"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with Mondrian-inspired design - updated to match other practice pages */}
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
                Intellectual Property
              </h1>
              <p className="text-xl text-black/80">
                Where innovation meets protection—strategic approaches to intellectual property that balance creative freedom with robust legal safeguards.
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
      
      {/* Industry-Specific IP Strategies - New Section */}
      <section 
        ref={industriesRef} 
        className="py-24 opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Industry-Specific IP Strategies</h2>
            <p className="text-gray-700">Our intellectual property approaches are tailored to address the unique challenges and opportunities in your specific industry.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industryStrategies.map((strategy, index) => (
              <div 
                key={index} 
                className={`border-2 ${strategy.color} p-8 rounded-md transition-all duration-300 hover:shadow-lg ${strategy.bgcolor} flex flex-col h-full`}
              >
                <div className="flex items-center mb-6">
                  {strategy.icon}
                  <span className="ml-3 text-sm font-medium uppercase tracking-wide text-gray-500">{strategy.industry}</span>
                </div>
                <h3 className="font-display text-2xl text-black mb-4">{strategy.title}</h3>
                <p className="text-gray-700">{strategy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why IP Matters - New Section */}
      <section 
        ref={whyIpRef}
        className="py-24 bg-gray-50 opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Why Intellectual Property Matters</h2>
            <p className="text-gray-700">Beyond basic protection, strategic intellectual property management creates substantial value across multiple dimensions.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 max-w-6xl mx-auto">
            {ipValuePoints.map((point, index) => (
              <div 
                key={index} 
                className="flex"
              >
                <div className={`${point.color} border-2 p-3 rounded-md flex items-center justify-center h-16 w-16 flex-shrink-0`}>
                  {point.icon}
                </div>
                <div className="ml-6">
                  <h3 className="font-display text-xl text-black mb-2">{point.title}</h3>
                  <p className="text-gray-700">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Persona pathways - existing section with enhanced content */}
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
            <div className="border-l-4 border-[#D6001C] p-8 bg-white shadow-sm hover:shadow-md transition-all duration-300">
              <p className="text-[#D6001C] font-medium mb-4">For Technology Innovators</p>
              <h3 className="font-display text-2xl text-black mb-4">Protection for Innovation</h3>
              <p className="text-gray-700 mb-4">Strategic safeguards for emerging technologies and digital assets that balance protection with market growth.</p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-[#D6001C] flex-shrink-0 mt-0.5" />
                  <span>Patent strategies for core algorithms and methods</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-[#D6001C] flex-shrink-0 mt-0.5" />
                  <span>Trade secret protocols for non-patentable innovations</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-[#D6001C] flex-shrink-0 mt-0.5" />
                  <span>Open source compliance frameworks</span>
                </li>
              </ul>
            </div>
            
            <div className="border-l-4 border-[#4D80D4] p-8 bg-white shadow-sm hover:shadow-md transition-all duration-300">
              <p className="text-[#4D80D4] font-medium mb-4">For Family Businesses</p>
              <h3 className="font-display text-2xl text-black mb-4">Legacy & Transition</h3>
              <p className="text-gray-700 mb-4">Intellectual property strategies that preserve innovation value across generations and ownership transitions.</p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-[#4D80D4] flex-shrink-0 mt-0.5" />
                  <span>IP ownership structures for family businesses</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-[#4D80D4] flex-shrink-0 mt-0.5" />
                  <span>Succession planning for IP-intensive enterprises</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-[#4D80D4] flex-shrink-0 mt-0.5" />
                  <span>Knowledge transfer frameworks across generations</span>
                </li>
              </ul>
            </div>
            
            <div className="border-l-4 border-[#00A650] p-8 bg-white shadow-sm hover:shadow-md transition-all duration-300">
              <p className="text-[#00A650] font-medium mb-4">For Wealth Preservation</p>
              <h3 className="font-display text-2xl text-black mb-4">Value Maximization</h3>
              <p className="text-gray-700 mb-4">Sophisticated approaches to intellectual property that emphasize long-term value creation and portfolio appreciation.</p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-[#00A650] flex-shrink-0 mt-0.5" />
                  <span>IP portfolio valuation and enhancement</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-[#00A650] flex-shrink-0 mt-0.5" />
                  <span>Strategic licensing programs for revenue generation</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-[#00A650] flex-shrink-0 mt-0.5" />
                  <span>Tax-efficient intellectual property structures</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Models Comparison - New Section */}
      <section 
        ref={pricingRef}
        className="py-24 bg-gray-50 opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Flexible Engagement Models</h2>
            <p className="text-gray-700">We offer multiple approaches to intellectual property services, allowing you to select the structure that best fits your needs.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="border-2 border-[#D6001C] rounded-md overflow-hidden">
              <div className="bg-[#D6001C]/10 p-6 border-b border-[#D6001C]">
                <h3 className="font-display text-2xl text-black mb-2">Strategic Counsel</h3>
                <p className="text-gray-700">Customized hourly services for complex intellectual property matters requiring sophisticated analysis and strategic guidance.</p>
              </div>
              <div className="p-6">
                <h4 className="font-medium text-lg mb-4">Ideal For:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#D6001C] mr-2 flex-shrink-0" />
                    <span>Complex IP portfolio development</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#D6001C] mr-2 flex-shrink-0" />
                    <span>High-stakes IP litigation strategy</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#D6001C] mr-2 flex-shrink-0" />
                    <span>Multi-jurisdictional protection planning</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#D6001C] mr-2 flex-shrink-0" />
                    <span>Sophisticated licensing architecture</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="border-2 border-[#4D80D4] rounded-md overflow-hidden">
              <div className="bg-[#4D80D4]/10 p-6 border-b border-[#4D80D4]">
                <h3 className="font-display text-2xl text-black mb-2">Structured Services</h3>
                <p className="text-gray-700">Transparent fixed-fee and subscription options for predictable intellectual property management and protection.</p>
              </div>
              <div className="p-6">
                <h4 className="font-medium text-lg mb-4">Ideal For:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#4D80D4] mr-2 flex-shrink-0" />
                    <span>Regular IP portfolio reviews</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#4D80D4] mr-2 flex-shrink-0" />
                    <span>Standardized registration services</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#4D80D4] mr-2 flex-shrink-0" />
                    <span>Predictable budgeting for IP management</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#4D80D4] mr-2 flex-shrink-0" />
                    <span>Ongoing monitoring and maintenance</span>
                  </li>
                </ul>
              </div>
            </div>
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