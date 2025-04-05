import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Lightbulb, BarChart, FileText, Search, TrendingUp, Target, Shield, Check, Briefcase, DollarSign, Award } from 'lucide-react';
import MondrianClassicComposition from '@/components/MondrianClassicComposition';
import { logger } from '@/utils/logger';

const IPConsulting: React.FC = () => {
  // Refs for scroll animations
  const serviceTypesRef = useRef<HTMLDivElement>(null);
  const strategicAreasRef = useRef<HTMLDivElement>(null);
  const personaPathwaysRef = useRef<HTMLDivElement>(null);
  const caseStudiesRef = useRef<HTMLDivElement>(null);
  const methodologyRef = useRef<HTMLDivElement>(null);
  const approachRef = useRef<HTMLDivElement>(null);

  // Log page visit
  useEffect(() => {
    logger.info('IP Consulting practice area visited');
  }, []);

  // Intersection Observer for reveal animations
  useEffect(() => {
    // Make all sections visible initially, then apply animations
    const sections = [
      serviceTypesRef.current,
      strategicAreasRef.current,
      personaPathwaysRef.current,
      caseStudiesRef.current,
      methodologyRef.current,
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

  // Service Types
  const serviceTypes = [
    {
      icon: <BarChart className="h-8 w-8 text-[#003B98]" />,
      title: "IP Portfolio Analysis",
      description: "Comprehensive assessment of intellectual property assets, determining strengths, gaps, and strategic opportunities for enhancement.",
      color: "border-[#003B98]",
      bgColor: "bg-[#003B98]/5"
    },
    {
      icon: <Target className="h-8 w-8 text-[#D6001C]" />,
      title: "IP Strategy Development",
      description: "Creation of tailored intellectual property strategies aligned with business objectives, market positioning, and competitive dynamics.",
      color: "border-[#D6001C]",
      bgColor: "bg-[#D6001C]/5"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-[#FFEB80]" />,
      title: "IP Valuation",
      description: "Sophisticated approaches to determining intellectual property value for transactions, financial reporting, or strategic decision-making.",
      color: "border-[#FFEB80]",
      bgColor: "bg-[#FFEB80]/5"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-[#4D80D4]" />,
      title: "Innovation Management",
      description: "Strategic frameworks for capturing, evaluating, and protecting intellectual property throughout the innovation development cycle.",
      color: "border-[#4D80D4]",
      bgColor: "bg-[#4D80D4]/5"
    }
  ];

  // Strategic Areas
  const strategicAreas = [
    {
      icon: <TrendingUp className="h-8 w-8 text-[#D6001C]" />,
      title: "Commercial Optimization",
      description: "Strategic approaches to maximizing commercial value from intellectual property through licensing, partnerships, and business model development.",
      color: "border-[#D6001C]"
    },
    {
      icon: <Shield className="h-8 w-8 text-[#003B98]" />,
      title: "Competitive Positioning",
      description: "Analysis of competitive intellectual property landscapes to identify strategic opportunities, potential threats, and differentiation pathways.",
      color: "border-[#003B98]"
    },
    {
      icon: <Award className="h-8 w-8 text-[#FFEB80]" />,
      title: "IP-Based Funding",
      description: "Guidance for leveraging intellectual property assets to support funding initiatives, investor presentations, and financial transactions.",
      color: "border-[#FFEB80]"
    },
    {
      icon: <Search className="h-8 w-8 text-[#4D80D4]" />,
      title: "Due Diligence",
      description: "Thorough intellectual property assessment for transactions, including mergers, acquisitions, investments, and significant partnerships.",
      color: "border-[#4D80D4]"
    }
  ];

  // Methodology Elements
  const methodologyElements = [
    {
      title: "Portfolio Assessment",
      description: "Systematic evaluation of existing intellectual property assets, including patents, trademarks, copyrights, and trade secrets.",
      icon: <BarChart className="h-8 w-8 text-[#D6001C]" />,
      color: "text-[#D6001C]"
    },
    {
      title: "Strategic Alignment",
      description: "Integration of intellectual property strategy with business objectives, market strategy, and competitive positioning.",
      icon: <Target className="h-8 w-8 text-[#003B98]" />,
      color: "text-[#003B98]"
    },
    {
      title: "Action Planning",
      description: "Development of actionable implementation roadmaps with clear metrics, milestones, and resource allocation guidance.",
      icon: <FileText className="h-8 w-8 text-[#FFEB80]" />,
      color: "text-black"
    }
  ];

  // Persona-specific pathways
  const personaPathways = [
    {
      persona: "For Innovators",
      icon: <Lightbulb className="h-8 w-8 text-[#4D80D4]" />,
      heading: "Innovation Protection",
      description: "We guide innovative companies through the development of intellectual property strategies that maximize protection while supporting continued innovation and growth.",
      color: "border-[#4D80D4]",
      textColor: "text-[#4D80D4]",
      checks: [
        "Innovation capture systems",
        "Strategic patent mapping",
        "Competitive white space analysis",
        "Portfolio optimization guidance"
      ]
    },
    {
      persona: "For Executives",
      icon: <Briefcase className="h-8 w-8 text-[#D6001C]" />,
      heading: "Business-Aligned IP",
      description: "We develop intellectual property approaches that create tangible business value, support strategic objectives, and provide meaningful competitive advantages.",
      color: "border-[#D6001C]",
      textColor: "text-[#D6001C]",
      checks: [
        "Business model integration",
        "Portfolio ROI assessment",
        "Competitive positioning",
        "Strategic resource allocation"
      ]
    },
    {
      persona: "For Investors",
      icon: <DollarSign className="h-8 w-8 text-[#FFEB80]" />,
      heading: "Value Validation",
      description: "We provide sophisticated intellectual property assessment for investors, identifying value drivers, potential risks, and strategic opportunities in target companies.",
      color: "border-[#FFEB80]",
      textColor: "text-black",
      checks: [
        "Due diligence frameworks",
        "Valuation methodologies",
        "Exclusivity assessment",
        "Risk profile development"
      ]
    }
  ];

  // Case Studies
  const caseStudies = [
    {
      title: "Strategic IP Portfolio Realignment",
      sector: "Technology",
      description: "Conducted comprehensive assessment and strategic realignment of a technology company's intellectual property portfolio to support a shift toward subscription-based offerings.",
      outcome: "The streamlined portfolio provided stronger protection for core technologies, reduced maintenance costs by 35%, and supported successful transition to the new business model.",
      color: "border-t-[#D6001C]"
    },
    {
      title: "IP Due Diligence for Acquisition",
      sector: "Healthcare Technology",
      description: "Performed detailed intellectual property due diligence for a healthcare technology acquisition, assessing patent quality, freedom to operate, and competitive positioning.",
      outcome: "The analysis identified critical strength areas and several unrecognized risks, enabling negotiation of more favorable terms and targeted post-acquisition integration strategy.",
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
                IP Consulting
              </h1>
              <p className="text-xl text-black/80">
                Strategic advisory services on portfolio development, valuation, and integration of intellectual property with broader business objectives.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Service Types Section */}
      <section 
        ref={serviceTypesRef}
        className="py-24 bg-gray-50 opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Strategic Services</h2>
            <p className="text-gray-700">Our intellectual property consulting services span the spectrum from analysis to implementation, providing comprehensive guidance for maximizing IP value.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceTypes.map((type, index) => (
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
      
      {/* Strategic Areas Section */}
      <section 
        ref={strategicAreasRef}
        className="py-24 opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Focus Areas</h2>
            <p className="text-gray-700">Our practice concentrates on these strategic areas where intellectual property directly impacts business performance and market position.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {strategicAreas.map((area, index) => (
              <div 
                key={index}
                className="flex gap-6 p-6 rounded-md hover:bg-gray-50 transition-colors duration-300"
              >
                <div className={`flex-shrink-0 p-3 rounded-md ${area.color} bg-white`}>
                  {area.icon}
                </div>
                <div>
                  <h3 className="font-display text-xl text-black mb-2">{area.title}</h3>
                  <p className="text-gray-700">{area.description}</p>
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
            <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Your IP Journey</h2>
            <p className="text-gray-700">Our approach adapts to your specific intellectual property objectives, providing tailored guidance that aligns with your strategic goals.</p>
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
                  <h4 className="font-medium text-black mb-4">Key Deliverables:</h4>
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
            <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Featured Consulting Work</h2>
            <p className="text-gray-700">Examples of our strategic approach to intellectual property consulting across diverse business contexts.</p>
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
      
      {/* Methodology Focus */}
      <section 
        ref={methodologyRef}
        className="py-24 bg-gray-50 opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Our Methodology</h2>
            <p className="text-gray-700">We employ a structured, evidence-based approach to intellectual property consulting that delivers actionable insights and implementable strategies.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {methodologyElements.map((element, index) => (
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
            <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Our Consulting Approach</h2>
            <p className="text-gray-700">We blend legal expertise with business strategy to deliver intellectual property guidance that creates meaningful organizational value.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white border-2 border-black p-8">
              <h3 className="font-display text-2xl text-black mb-6">Business Integration</h3>
              <p className="text-gray-700 mb-4">
                Our intellectual property consulting practice integrates IP strategy with business objectives, ensuring alignment with market strategy, product roadmaps, and financial goals.
              </p>
              <p className="text-gray-700">
                This integration ensures that intellectual property investments create tangible business value rather than existing as isolated legal assets.
              </p>
            </div>
            
            <div className="bg-white border-2 border-black p-8">
              <h3 className="font-display text-2xl text-black mb-6">Actionable Guidance</h3>
              <p className="text-gray-700 mb-4">
                We focus on delivering practical, implementable recommendations with clear action plans, resource requirements, and success metrics.
              </p>
              <p className="text-gray-700">
                This pragmatic approach translates strategic thinking into concrete steps that can be executed effectively within your organization.
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
          <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Begin Your IP Strategy</h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            Schedule a consultation to discuss how we can help you develop an intellectual property strategy that creates meaningful business advantages.
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

export default IPConsulting; 