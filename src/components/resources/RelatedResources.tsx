
import React from 'react';
import { Link } from 'react-router-dom';
import { Resource } from '../../data/resourcesData';

interface RelatedResourcesProps {
  resources: Resource[];
}

const RelatedResources: React.FC<RelatedResourcesProps> = ({ resources }) => {
  if (resources.length === 0) return null;
  
  return (
    <section className="py-16 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="reveal font-serif text-2xl text-navy mb-8">
            Related Resources
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((related, index) => (
              <div 
                key={related.id}
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
  );
};

export default RelatedResources;
