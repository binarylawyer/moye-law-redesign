import React from 'react';
import { Link } from 'react-router-dom';
import { Resource } from '../../data/resourcesData';

interface RelatedResourcesProps {
  resources: Resource[];
}

const RelatedResources = ({ resources }: RelatedResourcesProps) => {
  // If no resources provided, don't render the component
  if (!resources || resources.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="font-serif text-2xl text-navy mb-8">Related Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <div 
                key={resource.id} 
                className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow aspect-square flex flex-col"
              >
                <div className="flex items-center mb-2">
                  <span className="text-xs font-medium bg-navy/10 text-navy px-2 py-1 rounded">
                    {resource.category.charAt(0).toUpperCase() + resource.category.slice(1)}
                  </span>
                  <span className="text-xs text-charcoal/60 ml-3">{resource.date}</span>
                </div>
                <h4 className="font-serif text-lg text-navy mb-2 line-clamp-2">{resource.title}</h4>
                <p className="text-charcoal/80 mb-4 line-clamp-3 text-sm flex-grow">{resource.description}</p>
                <Link 
                  to={`/resources/${resource.slug}`}
                  className="text-navy hover:text-gold transition-colors text-sm font-medium inline-flex items-center mt-auto"
                >
                  Read More
                  <svg 
                    className="w-4 h-4 ml-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedResources;
