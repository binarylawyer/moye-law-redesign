import React from 'react';
import { Link } from 'react-router-dom';
import { Resource } from '../../data/resourcesData';
import { Calendar } from 'lucide-react';
import MondrianDecoration from '@/components/MondrianDecoration';

interface RelatedResourcesProps {
  resources: Resource[];
}

const RelatedResources: React.FC<RelatedResourcesProps> = ({ resources }) => {
  // If no resources provided, don't render the component
  if (!resources || resources.length === 0) {
    return null;
  }
  
  return (
    <div className="related-resources relative">
      {/* Subtle Mondrian decoration on the left with vertical offset */}
      <div className="hidden md:block absolute -left-24 top-10" style={{ transform: 'scale(0.85)' }}>
        <MondrianDecoration position="left" variant={2} />
      </div>
      
      {/* Mondrian decoration on the right, offset 30px lower than the left one */}
      <div className="hidden md:block absolute -right-24 top-40" style={{ transform: 'scale(0.85)' }}>
        <MondrianDecoration position="right" variant={5} />
      </div>
      
      {resources.map((resource, index) => (
        <Link 
          to={`/resources/${resource.slug}`} 
          key={resource.id}
          className="block border-4 border-black transition-transform hover:-translate-y-1 mondrian-shadow bg-white mb-6"
        >
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <span className={`text-xs font-medium px-2 py-1 inline-block ${
                index % 3 === 0 ? 'bg-white border-2 border-black' :
                index % 3 === 1 ? 'mondrian-light-yellow text-black' : 'mondrian-light-blue text-black'
              }`}>
                {resource.category.charAt(0).toUpperCase() + resource.category.slice(1)}
              </span>
              <div className="flex items-center text-black/70">
                <Calendar className="h-3 w-3 mr-1" />
                <span className="text-xs">{resource.date}</span>
              </div>
            </div>
            
            <h3 className="font-display text-lg mb-2 text-black">
              {resource.title}
            </h3>
            
            <p className="text-sm text-black/80 mb-3 line-clamp-2">
              {resource.description}
            </p>
            
            <div className="flex justify-end">
              <span className="text-xs font-medium border-b-2 border-black">Read More</span>
            </div>
          </div>
          
          {/* Add a subtle Mondrian-style decoration to the third resource */}
          {index === 2 && (
            <div className="w-full h-3 flex border-t-4 border-black">
              <div className="w-1/4 mondrian-red"></div>
              <div className="w-2/4 bg-white"></div>
              <div className="w-1/4 mondrian-light-blue"></div>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default RelatedResources;
