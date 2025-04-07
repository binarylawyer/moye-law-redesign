import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { resources as articles, Resource } from '../data/articlesData';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ConsultationCTA from "../components/ConsultationCTA";
import ResourceHeader from "../components/resources/ResourceHeader";
import ResourceContent from "../components/resources/ResourceContent";
import RelatedResources from "../components/resources/RelatedResources";
import ResourceNotFound from "../components/resources/ResourceNotFound";
import useAnimatedElements from "../hooks/useAnimatedElements";
import '../styles/mondrian.css';

const ResourceDetail = () => {
  const params = useParams();
  const slug = params.slug;
  
  const [resource, setResource] = useState<Resource | null>(null);
  const [relatedResources, setRelatedResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const elementsRef = useAnimatedElements();

  useEffect(() => {
    setLoading(true);
    
    console.log('Current slug:', slug);
    console.log('All available slugs:', articles.map(r => r.slug));
    
    const foundResource = articles.find(r => r.slug === slug) || null;
    
    console.log('Found resource:', foundResource);
    
    if (foundResource && foundResource.content) {
      foundResource.content = foundResource.content.trim();
      
      console.log('Content length:', foundResource.content.length);
      console.log('Content preview:', foundResource.content.substring(0, 100));
    } else {
      console.log('No content found in resource or resource is null');
    }
    
    setResource(foundResource);
    
    if (foundResource && foundResource.tags && foundResource.tags.length > 0) {
      const related = articles
        .filter(r => 
          r.id !== foundResource.id && 
          r.tags && 
          r.tags.some(tag => foundResource.tags?.includes(tag))
        )
        .slice(0, 3);
      setRelatedResources(related);
    } else {
      setRelatedResources([]);
    }
    
    window.scrollTo(0, 0);
    
    setTimeout(() => setLoading(false), 100);
  }, [slug]);

  if (loading) {
    return (
      <>
        <Header />
        <main className="pt-24 pb-0 bg-white min-h-screen">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="animate-pulse mondrian-border p-8">
                <div className="h-8 bg-gray-200 rounded w-1/2 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/3 mb-8"></div>
                <div className="h-64 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (!resource) {
    return <ResourceNotFound />;
  }

  console.log('Current resource state:', `Resource ${resource.title} ready to render`);
  console.log('Resource content exists:', Boolean(resource.content));
  console.log('Content length:', resource.content ? resource.content.length : 0);

  return (
    <>
      <Header />
      <main className="pt-24 pb-0 bg-white">
        {/* Decorative Mondrian-style bar */}
        <div className="h-8 w-full flex border-t-4 border-b-4 border-black mb-8">
          <div className="w-1/5 mondrian-red border-r-4 border-black"></div>
          <div className="w-1/5 bg-white border-r-4 border-black"></div>
          <div className="w-2/5 mondrian-blue border-r-4 border-black"></div>
          <div className="w-1/5 mondrian-yellow"></div>
        </div>
        
        <div ref={el => elementsRef.current[0] = el} className="reveal visible">
          <ResourceHeader resource={resource} />
        </div>
        
        <div ref={el => elementsRef.current[1] = el} className="reveal visible">
          <ResourceContent content={resource?.content} />
        </div>
        
        {/* Related Resources with Mondrian styling */}
        {relatedResources.length > 0 && (
          <div ref={el => elementsRef.current[2] = el} className="reveal visible">
            <div className="py-8">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                  <h2 className="font-display text-3xl mb-6 text-black">Related Resources</h2>
                  <div className="mondrian-grid">
                    {relatedResources.map((relatedResource, i) => (
                      <div key={relatedResource.id} className={`col-span-12 md:col-span-4 p-4 ${i === 0 ? 'mondrian-light-blue' : i === 1 ? 'mondrian-light-yellow' : 'mondrian-white'}`}>
                        <RelatedResources resources={[relatedResource]} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Decorative Mondrian-style composition before CTA */}
        <div className="py-8 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="mondrian-grid h-32">
                <div className="col-span-2 mondrian-red"></div>
                <div className="col-span-4 bg-white"></div>
                <div className="col-span-3 mondrian-blue"></div>
                <div className="col-span-1 mondrian-light-yellow"></div>
                <div className="col-span-2 bg-white"></div>
              </div>
            </div>
          </div>
        </div>
        
        <ConsultationCTA />
      </main>
      <Footer />
    </>
  );
};

export default ResourceDetail;
