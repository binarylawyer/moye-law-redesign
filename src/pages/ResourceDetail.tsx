import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { resources, Resource } from '../data/resourcesData';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ConsultationCTA from "../components/ConsultationCTA";
import ResourceHeader from "../components/resources/ResourceHeader";
import ResourceContent from "../components/resources/ResourceContent";
import RelatedResources from "../components/resources/RelatedResources";
import ResourceNotFound from "../components/resources/ResourceNotFound";
import useAnimatedElements from "../hooks/useAnimatedElements";

const ResourceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [resource, setResource] = useState<Resource | null>(null);
  const [relatedResources, setRelatedResources] = useState<Resource[]>([]);
  const elementsRef = useAnimatedElements();

  useEffect(() => {
    // DEBUG: Log important information
    console.log('Current slug:', slug);
    console.log('All available slugs:', resources.map(r => r.slug));
    
    // Find the resource that matches the slug
    const foundResource = resources.find(r => r.slug === slug) || null;
    
    // DEBUG: Log found resource
    console.log('Found resource:', foundResource);
    
    // Ensure resource content is properly set - trim whitespace if needed
    if (foundResource && foundResource.content) {
      foundResource.content = foundResource.content.trim();
      // DEBUG: Log content length
      console.log('Content length:', foundResource.content.length);
      console.log('Content preview:', foundResource.content.substring(0, 100));
    } else {
      console.log('No content found in resource');
    }
    
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
    } else {
      setRelatedResources([]);
    }
    
    // Scroll to top when resource changes
    window.scrollTo(0, 0);
  }, [slug]);

  // DEBUG: Log rendering state
  console.log('Current resource state:', resource ? `Resource ${resource.title} ready to render` : 'No resource');

  // Show not found if no resource
  if (!resource) {
    return <ResourceNotFound />;
  }

  return (
    <>
      <Header />
      <main className="pt-24 pb-0 bg-white">
        {/* Article Header */}
        <div ref={el => elementsRef.current[0] = el} className="reveal visible">
          <ResourceHeader resource={resource} />
        </div>
        
        {/* Article Content */}
        <div ref={el => elementsRef.current[1] = el} className="reveal visible">
          <ResourceContent content={resource.content} />
        </div>
        
        {/* Related Resources */}
        {relatedResources.length > 0 && (
          <div ref={el => elementsRef.current[2] = el} className="reveal visible">
            <RelatedResources resources={relatedResources} />
          </div>
        )}
        
        <ConsultationCTA />
      </main>
      <Footer />
    </>
  );
};

export default ResourceDetail;
