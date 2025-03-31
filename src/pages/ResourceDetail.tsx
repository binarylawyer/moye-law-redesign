
import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { resources, Resource } from '../data/resourcesData';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ConsultationCTA from "../components/ConsultationCTA";
import { ArrowLeft, Calendar } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const ResourceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [resource, setResource] = useState<Resource | null>(null);
  const [relatedResources, setRelatedResources] = useState<Resource[]>([]);
  const elementsRef = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    // Find the resource that matches the slug
    const foundResource = resources.find(r => r.slug === slug) || null;
    setResource(foundResource);
    
    // Find related resources based on tags
    if (foundResource && foundResource.tags) {
      const related = resources
        .filter(r => 
          r.id !== foundResource.id && 
          r.tags && 
          r.tags.some(tag => foundResource.tags?.includes(tag))
        )
        .slice(0, 3);
      setRelatedResources(related);
    }
    
    // Scroll to top when resource changes
    window.scrollTo(0, 0);
  }, [slug]);

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
  }, [resource]);

  if (!resource) {
    return (
      <>
        <Header />
        <main className="pt-32 bg-white">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-3xl text-navy mb-4">Resource Not Found</h1>
              <p className="text-charcoal/80 mb-6">The resource you're looking for doesn't exist or has been moved.</p>
              <Link 
                to="/resources"
                className="text-navy hover:text-gold transition-colors font-medium"
              >
                Back to Resources
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // Function to sanitize markdown content if needed
  const renderContent = () => {
    if (!resource.content) return null;
    
    // Return the ReactMarkdown component with properly configured options
    return (
      <ReactMarkdown>{resource.content}</ReactMarkdown>
    );
  };

  return (
    <>
      <Header />
      <main className="pt-32 bg-white">
        {/* Article Header */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8 lg:px-12">
            <Link 
              to="/resources" 
              className="inline-flex items-center text-navy hover:text-gold transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              <span>Back to Resources</span>
            </Link>
            
            <div 
              ref={el => elementsRef.current[0] = el}
              className="reveal max-w-3xl mx-auto"
            >
              <div className="flex items-center mb-6">
                <span className="text-sm font-medium bg-navy/10 text-navy px-3 py-1 rounded-full">
                  {resource.category.charAt(0).toUpperCase() + resource.category.slice(1)}
                </span>
                <div className="flex items-center text-charcoal/60 ml-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="text-sm">{resource.date}</span>
                </div>
              </div>
              
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 text-navy">
                {resource.title}
              </h1>
              
              <p className="text-lg text-charcoal/80 mb-4">
                {resource.description}
              </p>
              
              {resource.author && (
                <p className="text-sm text-charcoal/60 mb-8">
                  By {resource.author}
                </p>
              )}
            </div>
          </div>
        </section>
        
        {/* Article Content with improved markdown styling */}
        <section className="pb-16">
          <div className="container mx-auto px-4">
            <div 
              ref={el => elementsRef.current[1] = el}
              className="reveal max-w-3xl mx-auto"
              style={{ transitionDelay: '0.1s' }}
            >
              {resource.content ? (
                <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-navy prose-p:text-charcoal/80 prose-strong:text-charcoal prose-a:text-gold prose-a:no-underline hover:prose-a:underline prose-ul:text-charcoal/80 prose-ol:text-charcoal/80">
                  {renderContent()}
                </div>
              ) : (
                <p className="text-center text-charcoal/60 py-8">Full content for this resource is not available.</p>
              )}
            </div>
          </div>
        </section>
        
        {/* Related Resources */}
        {relatedResources.length > 0 && (
          <section className="py-16 bg-light-gray">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 
                  ref={el => elementsRef.current[2] = el}
                  className="reveal font-serif text-2xl text-navy mb-8"
                  style={{ transitionDelay: '0.2s' }}
                >
                  Related Resources
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedResources.map((related, index) => (
                    <div 
                      key={related.id}
                      ref={el => elementsRef.current[3 + index] = el}
                      className="reveal bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
                      style={{ transitionDelay: `${0.3 + (index * 0.1)}s` }}
                    >
                      <div className="p-6">
                        <div className="flex items-center mb-3">
                          <span className="text-xs font-medium bg-navy/10 text-navy px-2 py-1 rounded">
                            {related.category.charAt(0).toUpperCase() + related.category.slice(1)}
                          </span>
                          <span className="text-xs text-charcoal/60 ml-3">{related.date}</span>
                        </div>
                        <h3 className="font-serif text-xl text-navy mb-2">{related.title}</h3>
                        <p className="text-charcoal/80 text-sm mb-4 line-clamp-2">{related.description}</p>
                        <Link 
                          to={`/resources/${related.slug}`}
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
        )}
        
        <ConsultationCTA />
      </main>
      <Footer />
    </>
  );
};

export default ResourceDetail;
