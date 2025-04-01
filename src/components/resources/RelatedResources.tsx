import React from 'react';
import { Link } from 'react-router-dom';
import { Resource } from '../../data/resourcesData';
import { Calendar } from 'lucide-react';

interface RelatedResourcesProps {
  resources: Resource[];
}

const RelatedResources: React.FC<RelatedResourcesProps> = ({ resources }) => {
  // If no resources provided, don't render the component
  if (!resources || resources.length === 0) {
    return null;
  }
  
  return (
    <div className="related-resources">
      {resources.map((resource) => (
        <Link 
          to={`/resources/${resource.slug}`} 
          key={resource.id}
          className="block border-4 border-black transition-transform hover:-translate-y-1 mondrian-shadow bg-white"
        >
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium bg-white border-2 border-black px-2 py-1 inline-block">
                {resource.category.charAt(0).toUpperCase() + resource.category.slice(1)}
              </span>
              <div className="flex items-center text-black/70">
                <Calendar className="h-3 w-3 mr-1" />
                <span className="text-xs">{resource.date}</span>
              </div>
            </div>
            
            <h3 className="font-serif text-lg mb-2 text-black">
              {resource.title}
            </h3>
            
            <p className="text-sm text-black/80 mb-3 line-clamp-2">
              {resource.description}
            </p>
            
            <div className="flex justify-end">
              <span className="text-xs font-medium border-b-2 border-black">Read More</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RelatedResources;
