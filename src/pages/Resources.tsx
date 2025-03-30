import React, { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ConsultationCTA from "../components/ConsultationCTA";
import { resources, ResourceCategory } from "../data/resourcesData";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Resources: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ResourceCategory | 'all'>('all');
  const elementsRef = useRef<Array<HTMLElement | null>>([]);
  
  // Animation for elements when they come into view
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    const elements = elementsRef.current.filter(Boolean) as HTMLElement[];
    elements.forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      elements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  // Filter resources based on selected category
  const filteredResources = selectedCategory === 'all' 
    ? resources 
    : resources.filter(resource => resource.category === selectedCategory);

  // Group resources by category for featured sections
  const articles = resources.filter(resource => resource.category === 'article').slice(0, 3);
  const guides = resources.filter(resource => resource.category === 'guide').slice(0, 2);
  const caseStudies = resources.filter(resource => resource.category === 'case-study').slice(0, 1);

  return (
    <>
      <Header />
      <main className="pt-48 bg-white">
        {/* Hero Section */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-8">
            <div className="max-w-3xl mx-auto">
              <h1 
                ref={el => elementsRef.current[0] = el}
                className="reveal font-serif text-4xl md:text-5xl text-navy mb-8"
              >
                Resources
              </h1>
              <p 
                ref={el => elementsRef.current[1] = el}
                className="reveal text-lg text-charcoal/80 mb-12"
                style={{ transitionDelay: '0.1s' }}
              >
                Browse our collection of articles, guides, and resources designed to help you understand complex legal topics and make informed decisions about your estate planning, intellectual property, and other legal needs.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Resources */}
        <section className="py-24 bg-light-gray">
          <div className="container mx-auto px-8">
            <div className="max-w-6xl mx-auto">
              <h2 
                ref={el => elementsRef.current[2] = el}
                className="reveal font-serif text-3xl text-navy mb-12"
                style={{ transitionDelay: '0.2s' }}
              >
                Featured Resources
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
                {articles.map((resource, index) => (
                  <div 
                    key={resource.id}
                    ref={el => elementsRef.current[3 + index] = el}
                    className="reveal bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
                    style={{ transitionDelay: `${0.3 + (index * 0.1)}s` }}
                  >
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <span className="text-xs font-medium bg-navy/10 text-navy px-2 py-1 rounded">
                          {resource.category.charAt(0).toUpperCase() + resource.category.slice(1)}
                        </span>
                        <span className="text-xs text-charcoal/60 ml-3">{resource.date}</span>
                      </div>
                      <h3 className="font-serif text-xl text-navy mb-2">{resource.title}</h3>
                      <p className="text-charcoal/80 text-sm mb-4 line-clamp-2">{resource.description}</p>
                      <Link 
                        to={`/resources/${resource.slug}`}
                        className="text-navy hover:text-gold transition-colors text-sm font-medium"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* All Resources */}
        <section className="py-32">
          <div className="container mx-auto px-8">
            <div className="max-w-6xl mx-auto">
              <h2 
                ref={el => elementsRef.current[6] = el}
                className="reveal font-serif text-3xl text-navy mb-12"
                style={{ transitionDelay: '0.4s' }}
              >
                Browse All Resources
              </h2>
              
              <Tabs 
                defaultValue="all" 
                className="w-full"
                onValueChange={(value) => setSelectedCategory(value as ResourceCategory | 'all')}
              >
                <div 
                  ref={el => elementsRef.current[7] = el}
                  className="reveal mb-16"
                  style={{ transitionDelay: '0.5s' }}
                >
                  <TabsList className="bg-light-gray">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="article">Articles</TabsTrigger>
                    <TabsTrigger value="guide">Guides</TabsTrigger>
                    <TabsTrigger value="whitepaper">Whitepapers</TabsTrigger>
                    <TabsTrigger value="case-study">Case Studies</TabsTrigger>
                    <TabsTrigger value="faq">FAQs</TabsTrigger>
                  </TabsList>
                </div>
                
                <TabsContent value="all" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {filteredResources.map((resource, index) => (
                      <div 
                        key={resource.id}
                        ref={el => elementsRef.current[8 + index] = el}
                        className="reveal bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
                        style={{ transitionDelay: `${0.6 + (index * 0.05)}s` }}
                      >
                        <div className="p-6">
                          <div className="flex items-center mb-3">
                            <span className="text-xs font-medium bg-navy/10 text-navy px-2 py-1 rounded">
                              {resource.category.charAt(0).toUpperCase() + resource.category.slice(1)}
                            </span>
                            <span className="text-xs text-charcoal/60 ml-3">{resource.date}</span>
                          </div>
                          <h3 className="font-serif text-xl text-navy mb-2">{resource.title}</h3>
                          <p className="text-charcoal/80 text-sm mb-4 line-clamp-2">{resource.description}</p>
                          <Link 
                            to={`/resources/${resource.slug}`}
                            className="text-navy hover:text-gold transition-colors text-sm font-medium"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="article" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {filteredResources.map((resource, index) => (
                      <div 
                        key={resource.id}
                        className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
                      >
                        <div className="p-6">
                          <div className="flex items-center mb-3">
                            <span className="text-xs font-medium bg-navy/10 text-navy px-2 py-1 rounded">
                              Article
                            </span>
                            <span className="text-xs text-charcoal/60 ml-3">{resource.date}</span>
                          </div>
                          <h3 className="font-serif text-xl text-navy mb-2">{resource.title}</h3>
                          <p className="text-charcoal/80 text-sm mb-4 line-clamp-2">{resource.description}</p>
                          <Link 
                            to={`/resources/${resource.slug}`}
                            className="text-navy hover:text-gold transition-colors text-sm font-medium"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="guide" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {filteredResources.map((resource, index) => (
                      <div 
                        key={resource.id}
                        className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
                      >
                        <div className="p-6">
                          <div className="flex items-center mb-3">
                            <span className="text-xs font-medium bg-navy/10 text-navy px-2 py-1 rounded">
                              Guide
                            </span>
                            <span className="text-xs text-charcoal/60 ml-3">{resource.date}</span>
                          </div>
                          <h3 className="font-serif text-xl text-navy mb-2">{resource.title}</h3>
                          <p className="text-charcoal/80 text-sm mb-4 line-clamp-2">{resource.description}</p>
                          <Link 
                            to={`/resources/${resource.slug}`}
                            className="text-navy hover:text-gold transition-colors text-sm font-medium"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="whitepaper" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {filteredResources.map((resource, index) => (
                      <div 
                        key={resource.id}
                        className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
                      >
                        <div className="p-6">
                          <div className="flex items-center mb-3">
                            <span className="text-xs font-medium bg-navy/10 text-navy px-2 py-1 rounded">
                              Whitepaper
                            </span>
                            <span className="text-xs text-charcoal/60 ml-3">{resource.date}</span>
                          </div>
                          <h3 className="font-serif text-xl text-navy mb-2">{resource.title}</h3>
                          <p className="text-charcoal/80 text-sm mb-4 line-clamp-2">{resource.description}</p>
                          <Link 
                            to={`/resources/${resource.slug}`}
                            className="text-navy hover:text-gold transition-colors text-sm font-medium"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="case-study" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {filteredResources.map((resource, index) => (
                      <div 
                        key={resource.id}
                        className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
                      >
                        <div className="p-6">
                          <div className="flex items-center mb-3">
                            <span className="text-xs font-medium bg-navy/10 text-navy px-2 py-1 rounded">
                              Case Study
                            </span>
                            <span className="text-xs text-charcoal/60 ml-3">{resource.date}</span>
                          </div>
                          <h3 className="font-serif text-xl text-navy mb-2">{resource.title}</h3>
                          <p className="text-charcoal/80 text-sm mb-4 line-clamp-2">{resource.description}</p>
                          <Link 
                            to={`/resources/${resource.slug}`}
                            className="text-navy hover:text-gold transition-colors text-sm font-medium"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="faq" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {filteredResources.map((resource, index) => (
                      <div 
                        key={resource.id}
                        className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
                      >
                        <div className="p-6">
                          <div className="flex items-center mb-3">
                            <span className="text-xs font-medium bg-navy/10 text-navy px-2 py-1 rounded">
                              FAQ
                            </span>
                            <span className="text-xs text-charcoal/60 ml-3">{resource.date}</span>
                          </div>
                          <h3 className="font-serif text-xl text-navy mb-2">{resource.title}</h3>
                          <p className="text-charcoal/80 text-sm mb-4 line-clamp-2">{resource.description}</p>
                          <Link 
                            to={`/resources/${resource.slug}`}
                            className="text-navy hover:text-gold transition-colors text-sm font-medium"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <ConsultationCTA />
      </main>
      <Footer />
    </>
  );
};

export default Resources;
