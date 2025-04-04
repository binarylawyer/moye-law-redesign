import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Monitor, Globe, Play, Video, Radio, Smartphone, Laptop, Cloud, Share2, Check, Briefcase, DollarSign } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MondrianClassicComposition from '@/components/MondrianClassicComposition';
import { logger } from '@/utils/logger';

const DigitalMediaLaw: React.FC = () => {
  // Refs for scroll animations
  const mediaTypesRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const personaPathwaysRef = useRef<HTMLDivElement>(null);
  const caseStudiesRef = useRef<HTMLDivElement>(null);
  const trendsRef = useRef<HTMLDivElement>(null);
  const approachRef = useRef<HTMLDivElement>(null);

  // Log page visit
  useEffect(() => {
    logger.info('Digital Media Law practice area visited');
  }, []);

  // Intersection Observer for reveal animations
  useEffect(() => {
    // Make all sections visible initially, then apply animations
    const sections = [
      mediaTypesRef.current,
      servicesRef.current,
      personaPathwaysRef.current,
      caseStudiesRef.current,
      trendsRef.current,
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

  // Digital Media Types
  const mediaTypes = [
    {
      icon: <Video className="h-8 w-8 text-[#003B98]" />,
      title: "Streaming Media",
      description: "Comprehensive legal strategies for streaming platforms, addressing content licensing, distribution rights, and viewer engagement frameworks.",
      color: "border-[#003B98]",
      bgColor: "bg-[#003B98]/5"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-[#D6001C]" />,
      title: "Mobile Content",
      description: "Specialized legal frameworks for mobile applications, content providers, and distribution platforms in the evolving mobile ecosystem.",
      color: "border-[#D6001C]",
      bgColor: "bg-[#D6001C]/5"
    },
    {
      icon: <Globe className="h-8 w-8 text-[#00A650]" />,
      title: "Digital Publishing",
      description: "Strategic legal solutions for online content creators, digital publishers, and content platforms navigating rights and monetization challenges.",
      color: "border-[#00A650]",
      bgColor: "bg-[#00A650]/5"
    },
    {
      icon: <Radio className="h-8 w-8 text-[#4D80D4]" />,
      title: "Interactive Media",
      description: "Advanced legal guidance for interactive media providers, addressing user-generated content, community management, and engagement frameworks.",
      color: "border-[#4D80D4]",
      bgColor: "bg-[#4D80D4]/5"
    }
  ];

  // Key Services
  const services = [
    {
      icon: <Cloud className="h-8 w-8 text-[#D6001C]" />,
      title: "Content Licensing & Distribution",
      description: "Comprehensive strategies for content rights management across digital platforms, ensuring proper licensing and distribution frameworks.",
      color: "border-[#D6001C]"
    },
    {
      icon: <Laptop className="h-8 w-8 text-[#003B98]" />,
      title: "Platform Terms & Agreements",
      description: "Development of robust terms of service, user agreements, and platform policies that protect digital media interests.",
      color: "border-[#003B98]"
    },
    {
      icon: <Share2 className="h-8 w-8 text-[#00A650]" />,
      title: "Digital Rights Management",
      description: "Advanced legal frameworks for protecting and monetizing digital content across platforms and territories.",
      color: "border-[#00A650]"
    },
    {
      icon: <Play className="h-8 w-8 text-[#4D80D4]" />,
      title: "Regulatory Compliance",
      description: "Strategic navigation of evolving regulatory landscapes for digital media, ensuring operational compliance while maximizing innovation.",
      color: "border-[#4D80D4]"
    }
  ];

  // Digital Media Trends
  const trends = [
    {
      title: "Creator Economy",
      description: "The rise of individual content creators requiring specialized legal frameworks for monetization, IP protection, and platform relationships.",
      color: "text-[#D6001C]"
    },
    {
      title: "Cross-Platform Distribution",
      description: "Evolution of content distribution strategies across multiple platforms, requiring harmonized rights management and licensing approaches.",
      color: "text-[#003B98]"
    },
    {
      title: "AI-Generated Content",
      description: "Emerging challenges in rights definition, ownership structures, and attribution for algorithmically generated creative content.",
      color: "text-[#00A650]"
    }
  ];

  // Persona-specific pathways
  const personaPathways = [
    {
      persona: "For Content Creators",
      icon: <Video className="h-8 w-8 text-[#4D80D4]" />,
      heading: "Creator Rights Protection",
      description: "We develop comprehensive rights frameworks for digital content creators, ensuring control over intellectual property while enabling distribution and monetization.",
      color: "border-[#4D80D4]",
      textColor: "text-[#4D80D4]",
      checks: [
        "Content ownership structures",
        "Multi-platform distribution rights",
        "Monetization framework design",
        "Creator-platform agreements"
      ]
    },
    {
      persona: "For Platform Operators",
      icon: <Briefcase className="h-8 w-8 text-[#D6001C]" />,
      heading: "Platform Legal Architecture",
      description: "We structure legal frameworks for digital media platforms that balance rights management, user engagement, and regulatory compliance.",
      color: "border-[#D6001C]",
      textColor: "text-[#D6001C]",
      checks: [
        "User agreements & terms of service",
        "Content moderation frameworks",
        "Rights clearance mechanisms",
        "Regulatory compliance systems"
      ]
    },
    {
      persona: "For Media Companies",
      icon: <DollarSign className="h-8 w-8 text-[#00A650]" />,
      heading: "Strategic Rights Management",
      description: "We develop sophisticated approaches to digital rights management for established media companies transitioning to digital distribution models.",
      color: "border-[#00A650]",
      textColor: "text-[#00A650]",
      checks: [
        "Digital catalog management",
        "Legacy rights adaptation",
        "Cross-platform distribution strategy",
        "Digital monetization frameworks"
      ]
    }
  ];

  // Case Studies
  const caseStudies = [
    {
      title: "Global Streaming Rights Framework",
      sector: "Entertainment Media Platform",
      description: "Developed a comprehensive rights management system for a streaming platform expanding into international markets with varied regulatory environments.",
      outcome: "The multi-layered framework enabled content distribution across 28 countries while navigating complex territorial rights restrictions and local regulations.",
      color: "border-t-[#D6001C]"
    },
    {
      title: "Creator Economy Legal Structure",
      sector: "Content Creator Collective",
      description: "Created a specialized legal structure for a collective of digital content creators, addressing IP rights, revenue sharing, and platform relationships.",
      outcome: "The framework successfully protected creator interests while enabling collaborative content development, increasing monetization opportunities by 75%.",
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
              <MondrianClassicComposition primaryColor="#00A650" />
            </div>
            
            {/* Added spacing between Mondrian and content */}
            <div className="bg-white w-full md:w-16 p-8 hidden md:block"></div>
            
            {/* White content block */}
            <div className="bg-white border-4 border-black p-8 md:p-12 w-full md:flex-1 text-center">
              <h1 className="font-display text-black text-4xl md:text-5xl lg:text-6xl mb-8">
                Digital Media Law
              </h1>
              <p className="text-xl text-black/80">
                Innovative legal frameworks for online content creators, digital platforms, and interactive media, addressing emerging issues in distribution, monetization, and regulation.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Media Types Section */}
      <section 
        ref={mediaTypesRef}
        className="py-24 bg-gray-50 opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Digital Media Categories</h2>
            <p className="text-gray-700">Our legal frameworks address the unique challenges of diverse digital media formats, from streaming platforms to interactive content.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mediaTypes.map((type, index) => (
              <div 
                key={index}
                className={`p-8 rounded-lg border ${type.color} ${type.bgColor} transition-all duration-300 hover:shadow-lg`}
              >
                <div className="mb-4">
                  {type.icon}
                </div>
                <h3 className="font-display text-xl text-black mb-2">{type.title}</h3>
                <p className="text-gray-700">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section 
        ref={servicesRef}
        className="py-24 bg-white opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Our Digital Media Law Services</h2>
            <p className="text-gray-700">Comprehensive legal services addressing the complexities of digital media rights, distribution, and monetization in a rapidly evolving landscape.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className={`p-8 border-l-4 ${service.color} bg-white shadow-sm hover:shadow-md transition-shadow duration-300`}>
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="font-display text-xl text-black mb-3">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Persona Pathways */}
      <section 
        ref={personaPathwaysRef}
        className="py-24 bg-gradient-to-b from-white to-gray-50 opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Tailored For Your Needs</h2>
            <p className="text-gray-700">Our digital media legal strategies are tailored to the specific needs of different participants in the digital content ecosystem.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {personaPathways.map((path, index) => (
              <div key={index} className={`bg-white p-8 border-t-4 ${path.color} shadow-sm rounded-sm hover:shadow-md transition-shadow duration-300`}>
                <div className="text-sm font-medium text-gray-500 mb-2">{path.persona}</div>
                <div className="mb-4">
                  {path.icon}
                </div>
                <h3 className={`font-display text-xl ${path.textColor} mb-3`}>{path.heading}</h3>
                <p className="text-gray-700 mb-6">{path.description}</p>
                <ul className="space-y-2">
                  {path.checks.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Case Studies */}
      <section 
        ref={caseStudiesRef}
        className="py-24 bg-white opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Case Studies</h2>
            <p className="text-gray-700">Examples of our strategic approach to digital media legal challenges across different sectors and contexts.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {caseStudies.map((study, index) => (
              <div key={index} className={`${study.color} pt-8 pb-6 px-6`}>
                <div className="text-sm font-medium text-gray-500 mb-2">{study.sector}</div>
                <h3 className="font-display text-2xl text-black mb-4">{study.title}</h3>
                <p className="text-gray-700 mb-6">{study.description}</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-gray-700 italic">{study.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Digital Media Trends */}
      <section 
        ref={trendsRef}
        className="py-24 bg-gray-50 opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Evolving Digital Media Trends</h2>
            <p className="text-gray-700">Our practice stays at the forefront of emerging developments in digital media law to provide forward-looking counsel.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {trends.map((trend, index) => (
              <div key={index} className="bg-white p-8 shadow-sm rounded-sm hover:shadow-md transition-shadow duration-300">
                <h3 className={`font-display text-xl ${trend.color} mb-3`}>{trend.title}</h3>
                <p className="text-gray-700">{trend.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Approach Section */}
      <section 
        ref={approachRef}
        className="py-24 bg-white opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Our Approach</h2>
                <p className="text-gray-700 mb-6">
                  We approach digital media law challenges with a deep understanding of both traditional media principles and emerging technologies.
                </p>
                <p className="text-gray-700 mb-6">
                  Our frameworks balance creative expression with commercial realities, ensuring that legal structures enable rather than inhibit digital innovation and audience engagement.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center px-6 py-3 bg-[#00A650] text-white hover:bg-[#00A650]/90 transition-colors duration-300"
                >
                  Discuss Your Digital Media Needs <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-[#00A650]/10 p-6 rounded">
                    <h3 className="font-display text-lg text-black mb-2">Rights-Focused</h3>
                    <p className="text-gray-700">Clear definition and protection of digital content rights across platforms and territories.</p>
                  </div>
                  <div className="bg-[#003B98]/10 p-6 rounded">
                    <h3 className="font-display text-lg text-black mb-2">Platform-Savvy</h3>
                    <p className="text-gray-700">Deep understanding of digital platform operations, policies, and business models.</p>
                  </div>
                  <div className="bg-[#D6001C]/10 p-6 rounded">
                    <h3 className="font-display text-lg text-black mb-2">Forward-Looking</h3>
                    <p className="text-gray-700">Anticipation of emerging legal challenges in rapidly evolving digital environments.</p>
                  </div>
                  <div className="bg-[#4D80D4]/10 p-6 rounded">
                    <h3 className="font-display text-lg text-black mb-2">Business-Aligned</h3>
                    <p className="text-gray-700">Legal strategies that support digital monetization models and audience development.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl text-white mb-6">Ready to Protect Your Digital Media Rights?</h2>
            <p className="text-white/80 mb-8 text-lg">
              Our specialized team can help you navigate the complex intersection of digital content, technology, and law.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-[#00A650] text-white hover:bg-[#00A650]/90 transition-colors duration-300"
              >
                Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/services/art-entertainment-law" 
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-white hover:bg-white/10 transition-colors duration-300"
              >
                Explore Related Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default DigitalMediaLaw; 