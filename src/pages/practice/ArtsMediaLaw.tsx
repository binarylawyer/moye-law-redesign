import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Image, Film, Music, PenTool, Award, Monitor, Radio, Copyright, Globe, Check, ExternalLink } from 'lucide-react';
import Header from '@/components/Header';
import MondrianClassicComposition from '@/components/MondrianClassicComposition';

const ArtsMediaLaw: React.FC = () => {
  // Refs for scroll animations
  const galleryRef = useRef<HTMLDivElement>(null);
  const personaRef = useRef<HTMLDivElement>(null);
  const caseStudiesRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const rightsRef = useRef<HTMLDivElement>(null);
  const internationalRef = useRef<HTMLDivElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for reveal animations
  useEffect(() => {
    // Make all sections visible initially, then apply animations
    const sections = [
      galleryRef.current, 
      personaRef.current, 
      caseStudiesRef.current, 
      servicesRef.current,
      rightsRef.current,
      internationalRef.current,
      industriesRef.current
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

  // Updated practice areas with digital media
  const practiceAreas = [
    {
      id: "art-law",
      title: "Art Law",
      description: "Specialized legal guidance for artists, collectors, galleries, and institutions, addressing acquisition, authentication, exhibition, and intellectual property concerns.",
      icon: <Image className="h-10 w-10 text-[#D6001C]" />,
      path: "/practice/art-law",
      color: "border-[#D6001C]",
      bgcolor: "bg-[#D6001C]/5",
      textColor: "text-[#D6001C]"
    },
    {
      id: "entertainment-law",
      title: "Entertainment Law",
      description: "Comprehensive legal services for film, television, music, and performance industries, including rights acquisition, talent agreements, and distribution frameworks.",
      icon: <Film className="h-10 w-10 text-[#4D80D4]" />,
      path: "/practice/entertainment-law",
      color: "border-[#4D80D4]",
      bgcolor: "bg-[#4D80D4]/5",
      textColor: "text-[#4D80D4]"
    },
    {
      id: "digital-media-law",
      title: "Digital Media Law",
      description: "Innovative legal frameworks for online content creators, digital platforms, and interactive media, addressing emerging issues in distribution, monetization, and regulation.",
      icon: <Monitor className="h-10 w-10 text-[#00A650]" />,
      path: "/practice/digital-media-law",
      color: "border-[#00A650]",
      bgcolor: "bg-[#00A650]/5",
      textColor: "text-[#00A650]"
    }
  ];

  // Industry-specific case studies
  const industryStudies = [
    {
      industry: "Visual Arts",
      title: "Authentication Framework Development",
      description: "Created a comprehensive framework for art authentication and provenance verification that balances traditional methods with emerging technologies.",
      icon: <Image className="h-8 w-8 text-[#D6001C]" />,
      color: "border-[#D6001C]",
      bgcolor: "bg-[#D6001C]/5"
    },
    {
      industry: "Film & Television",
      title: "Multi-Platform Distribution Strategy",
      description: "Developed a strategic approach to global content distribution across traditional and emerging platforms, addressing rights clearance, territorial restrictions, and revenue models.",
      icon: <Film className="h-8 w-8 text-[#4D80D4]" />,
      color: "border-[#4D80D4]",
      bgcolor: "bg-[#4D80D4]/5"
    },
    {
      industry: "Music",
      title: "Rights Management Restructuring",
      description: "Implemented a comprehensive restructuring of music rights management systems to address digital distribution, streaming, and emerging monetization models.",
      icon: <Music className="h-8 w-8 text-[#FFEB80]" />,
      color: "border-[#FFEB80]",
      bgcolor: "bg-[#FFEB80]/5",
      textColor: "text-black"
    },
    {
      industry: "Publishing",
      title: "Digital Rights Expansion",
      description: "Created frameworks for expanding traditional publishing rights into digital formats, audio adaptations, and international markets.",
      icon: <PenTool className="h-8 w-8 text-[#00A650]" />,
      color: "border-[#00A650]",
      bgcolor: "bg-[#00A650]/5"
    }
  ];

  // International protection regions
  const internationalRegions = [
    {
      region: "European Union",
      key_protections: [
        "Harmonized copyright duration",
        "Moral rights protections",
        "Stronger artist resale rights",
        "GDPR implications for creative content"
      ],
      color: "border-[#4D80D4]",
      bgcolor: "bg-[#4D80D4]/5"
    },
    {
      region: "North America",
      key_protections: [
        "Work-for-hire doctrine nuances",
        "Fair use/fair dealing distinctions",
        "DMCA takedown mechanisms",
        "First sale doctrine application"
      ],
      color: "border-[#D6001C]",
      bgcolor: "bg-[#D6001C]/5"
    },
    {
      region: "Asia Pacific",
      key_protections: [
        "Varying copyright enforcement levels",
        "Traditional cultural expression protections",
        "Digital marketplace regulations",
        "Country-specific registration requirements"
      ],
      color: "border-[#FFEB80]",
      bgcolor: "bg-[#FFEB80]/5"
    },
    {
      region: "International Treaties",
      key_protections: [
        "Berne Convention protections",
        "WIPO Copyright Treaty",
        "Rome Convention (performers' rights)",
        "Universal Copyright Convention"
      ],
      color: "border-[#00A650]",
      bgcolor: "bg-[#00A650]/5"
    }
  ];

  // Rights visualization data
  const rightsCategories = [
    {
      category: "Primary Rights",
      description: "Core rights inherent in creative works that form the foundation of control and monetization.",
      rights: [
        {
          name: "Reproduction",
          description: "Right to make copies of the work"
        },
        {
          name: "Distribution",
          description: "Right to distribute copies to the public"
        },
        {
          name: "Public Performance",
          description: "Right to perform the work publicly"
        },
        {
          name: "Public Display",
          description: "Right to display the work publicly"
        },
        {
          name: "Derivative Works",
          description: "Right to create adaptations or transformations"
        }
      ]
    },
    {
      category: "Secondary Rights",
      description: "Rights that build upon primary rights, often involving specific uses or contexts.",
      rights: [
        {
          name: "Synchronization",
          description: "Use of music in timed relation with visual media"
        },
        {
          name: "Mechanical",
          description: "Reproduction of music in recorded form"
        },
        {
          name: "Merchandising",
          description: "Use of creative elements on physical products"
        },
        {
          name: "Theatrical",
          description: "Exhibition in theaters or public venues"
        },
        {
          name: "Print",
          description: "Reproduction in printed publications"
        }
      ]
    },
    {
      category: "Digital Rights",
      description: "Rights specifically related to digital exploitation and online distribution.",
      rights: [
        {
          name: "Streaming",
          description: "On-demand access without permanent download"
        },
        {
          name: "Digital Download",
          description: "Permanent digital copying by end users"
        },
        {
          name: "Interactive Media",
          description: "Use in interactive applications or games"
        },
        {
          name: "Social Media",
          description: "Distribution via social platforms"
        },
        {
          name: "NFT Creation",
          description: "Creation of blockchain-based tokens"
        }
      ]
    }
  ];

  // Related Services
  const relatedServices = [
    {
      id: "art-entertainment-law",
      title: "Art & Entertainment Law",
      description: "Structured services for creative professionals and organizations at predictable rates, including contract review and rights management.",
      path: "/services/art-entertainment-law",
      color: "border-[#FFEB80]",
      bgcolor: "bg-[#FFEB80]/5"
    },
    {
      id: "licensing-transactions",
      title: "Licensing & Transactions",
      description: "Specialized services for negotiating and structuring agreements that monetize creative assets through licensing, exhibition, and distribution.",
      path: "/services/licensing-transactions",
      color: "border-[#D6001C]",
      bgcolor: "bg-[#D6001C]/5"
    },
    {
      id: "ip-consulting-strategy",
      title: "IP Consulting & Strategy",
      description: "Strategic planning for maximizing the value and protection of intellectual property in creative industries.",
      path: "/services/ip-consulting-strategy",
      color: "border-[#4D80D4]",
      bgcolor: "bg-[#4D80D4]/5"
    }
  ];

  // Persona pathways
  const personaPathways = [
    {
      persona: "For Artists & Creators",
      heading: "Creative Protection",
      description: "Legal frameworks that protect your creative expression while enabling appropriate monetization and distribution of your work.",
      color: "border-[#D6001C]",
      textColor: "text-[#D6001C]"
    },
    {
      persona: "For Galleries & Institutions",
      heading: "Collection Management",
      description: "Comprehensive approaches to acquisition, exhibition, lending, and digital representation of artistic works.",
      color: "border-[#4D80D4]",
      textColor: "text-[#4D80D4]"
    },
    {
      persona: "For Production Companies",
      heading: "Project Structuring",
      description: "Legal infrastructure for creative projects that addresses financing, talent engagement, rights clearance, and distribution.",
      color: "border-[#FFEB80]",
      textColor: "text-black"
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
                Arts & Media Law
              </h1>
              <p className="text-xl text-black/80">
                Sophisticated legal counsel for the creative sectors—where artistic vision meets strategic protection.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Practice Areas Gallery - updated with Digital Media */}
      <section 
        ref={galleryRef} 
        className="py-24 bg-gray-50 opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Practice Specializations</h2>
            <p className="text-gray-700">Explore our specialized arts and media practice areas, each addressing the distinct legal needs of creative professionals and organizations.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
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
      
      {/* Industry-Specific Case Studies - New Section */}
      <section 
        ref={industriesRef} 
        className="py-24 opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Industry-Specific Expertise</h2>
            <p className="text-gray-700">Our arts and media counsel is tailored to the unique challenges and opportunities in each creative sector.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {industryStudies.map((study, index) => (
              <div 
                key={index} 
                className={`border-2 ${study.color} rounded-md overflow-hidden`}
              >
                <div className={`p-4 flex items-center ${study.bgcolor}`}>
                  {study.icon}
                  <span className="ml-2 font-medium">{study.industry}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-black mb-3">{study.title}</h3>
                  <p className="text-gray-700">{study.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Rights Management Visualization - New Section */}
      <section 
        ref={rightsRef}
        className="py-24 bg-gray-50 opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Rights Management Framework</h2>
            <p className="text-gray-700">Understanding the complex ecosystem of creative rights is essential for effective protection and monetization of artistic works.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {rightsCategories.map((category, index) => (
              <div 
                key={index}
                className="border-2 border-black rounded-md overflow-hidden"
              >
                <div className={`p-5 text-center bg-[${index === 0 ? '#D6001C' : index === 1 ? '#4D80D4' : '#00A650'}]/10`}>
                  <h3 className="font-display text-2xl text-black">{category.category}</h3>
                  <p className="text-sm text-gray-600 mt-2">{category.description}</p>
                </div>
                
                <ul className="divide-y divide-gray-200">
                  {category.rights.map((right, idx) => (
                    <li key={idx} className="p-4">
                      <div className="flex items-center">
                        <Copyright className={`h-5 w-5 mr-3 text-[${index === 0 ? '#D6001C' : index === 1 ? '#4D80D4' : '#00A650'}]`} />
                        <span className="font-medium">{right.name}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1 ml-8">{right.description}</p>
                    </li>
                  ))}
                </ul>
                
                {/* Connection arrows for desktop - visual cue that rights flow between categories */}
                {index < 2 && (
                  <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 z-10">
                    <ArrowRight className="h-8 w-8 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-16 max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-8">
              Effective rights management requires understanding how these rights interact across distribution channels, territories, and formats.
            </p>
            <div className="inline-flex items-center justify-center px-6 py-3 border-2 border-black bg-white text-black font-medium hover:bg-[#FFEB80] transition-colors">
              <Link to="/contact" className="inline-flex items-center">
                Discuss Your Rights Strategy <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* International Protection Considerations - New Section */}
      <section 
        ref={internationalRef}
        className="py-24 opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Global Protection Strategies</h2>
            <p className="text-gray-700">Creative works require thoughtful protection strategies across international borders, navigating complex and varying legal frameworks.</p>
          </div>
          
          <div className="max-w-5xl mx-auto mb-12 p-6 bg-white border-2 border-black rounded-md">
            <div className="flex items-center mb-8">
              <Globe className="h-8 w-8 text-[#4D80D4] mr-3" />
              <h3 className="font-display text-2xl text-black">International Protection Considerations</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {internationalRegions.map((region, index) => (
                <div 
                  key={index} 
                  className={`p-5 ${region.bgcolor} ${region.color} rounded-md`}
                >
                  <h4 className="font-display text-xl text-black mb-4">{region.region}</h4>
                  <ul className="space-y-2">
                    {region.key_protections.map((protection, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-black mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{protection}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-l-4 border-[#D6001C] p-5 bg-white">
              <h4 className="font-display text-lg text-black mb-2">Registration Strategies</h4>
              <p className="text-gray-700 text-sm">Strategic approaches to copyright and trademark registration across multiple jurisdictions for optimal protection.</p>
            </div>
            <div className="border-l-4 border-[#4D80D4] p-5 bg-white">
              <h4 className="font-display text-lg text-black mb-2">Enforcement Networks</h4>
              <p className="text-gray-700 text-sm">Development of global enforcement networks to protect creative works from infringement across international markets.</p>
            </div>
            <div className="border-l-4 border-[#00A650] p-5 bg-white">
              <h4 className="font-display text-lg text-black mb-2">Licensing Frameworks</h4>
              <p className="text-gray-700 text-sm">Sophisticated licensing structures that account for territorial differences in rights, royalties, and dispute resolution.</p>
            </div>
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
            <p className="text-gray-700">Our arts and media expertise adapts to your specific creative context and objectives.</p>
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
      
      {/* Enhanced Case Studies - MOMA-style exhibition */}
      <section 
        ref={caseStudiesRef}
        className="py-24 bg-gray-50 opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Featured Work</h2>
            <p className="text-gray-700">Explore how our arts and media expertise translates into tangible outcomes for creative clients.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Case Study 1 */}
            <div className="bg-white border-t-4 border-[#D6001C] p-8 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-display text-2xl text-black">Museum Exhibition Rights</h3>
                <span className="px-3 py-1 bg-[#D6001C]/10 text-[#D6001C] text-xs font-medium rounded">Visual Arts</span>
              </div>
              <p className="text-sm text-gray-500 mb-6">Cultural Institution</p>
              <p className="text-gray-700 mb-6">
                Structured a complex rights framework for a major retrospective exhibition featuring works from multiple artists, estates, and collections, addressing both physical and digital presentation rights.
              </p>
              <div className="border-l-4 border-gray-200 pl-4">
                <p className="italic text-gray-600">
                  "The exhibition's success hinged on properly securing rights across diverse works—the framework allowed for both scholarly access and appropriate protection."
                </p>
              </div>
            </div>
            
            {/* Case Study 2 */}
            <div className="bg-white border-t-4 border-[#4D80D4] p-8 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-display text-2xl text-black">Multi-Platform Distribution</h3>
                <span className="px-3 py-1 bg-[#4D80D4]/10 text-[#4D80D4] text-xs font-medium rounded">Film</span>
              </div>
              <p className="text-sm text-gray-500 mb-6">Independent Film</p>
              <p className="text-gray-700 mb-6">
                Developed a comprehensive distribution strategy for an independent film, including festival rights, theatrical release, streaming platforms, and international territory considerations.
              </p>
              <div className="border-l-4 border-gray-200 pl-4">
                <p className="italic text-gray-600">
                  "Our film found its audience across multiple platforms while ensuring we maintained appropriate rights and maximized revenue potential."
                </p>
              </div>
            </div>
            
            {/* New Case Study 3 */}
            <div className="bg-white border-t-4 border-[#FFEB80] p-8 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-display text-2xl text-black">Music Licensing Revolution</h3>
                <span className="px-3 py-1 bg-[#FFEB80] text-black text-xs font-medium rounded">Music</span>
              </div>
              <p className="text-sm text-gray-500 mb-6">Independent Label</p>
              <p className="text-gray-700 mb-6">
                Created an innovative music licensing framework for an independent label, enabling efficient deployment across streaming, sync, sampling, and emerging platforms while ensuring proper artist compensation.
              </p>
              <div className="border-l-4 border-gray-200 pl-4">
                <p className="italic text-gray-600">
                  "This framework transformed our ability to quickly close deals while ensuring our artists receive fair compensation across all uses of their work."
                </p>
              </div>
            </div>
            
            {/* New Case Study 4 */}
            <div className="bg-white border-t-4 border-[#00A650] p-8 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-display text-2xl text-black">Digital Content Monetization</h3>
                <span className="px-3 py-1 bg-[#00A650]/10 text-[#00A650] text-xs font-medium rounded">Digital Media</span>
              </div>
              <p className="text-sm text-gray-500 mb-6">Content Creator Collective</p>
              <p className="text-gray-700 mb-6">
                Developed comprehensive strategies for digital content creators to diversify revenue streams while maintaining content ownership and control across multiple platforms and formats.
              </p>
              <div className="border-l-4 border-gray-200 pl-4">
                <p className="italic text-gray-600">
                  "The strategy allowed us to expand beyond ad-based revenue while maintaining ownership of our intellectual property across all channels."
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
            <p className="text-gray-700">Explore our specialized service offerings that complement our arts and media practice areas.</p>
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
        <div className="absolute bottom-0 right-0 w-1/3 h-4 bg-[#FFEB80] z-10"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 border-l-4 border-b-4 border-black z-10"></div>
        
        <div className="container mx-auto px-6 max-w-4xl text-center relative">
          <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Protect Your Creative Vision</h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            Begin a conversation about securing your creative assets with legal strategies that honor artistic integrity while ensuring appropriate protection.
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

export default ArtsMediaLaw; 