import React from 'react';
import { Link } from 'react-router-dom';
import { Resource } from '../../data/resourcesData';
import { ArrowLeft, Calendar } from 'lucide-react';

interface ResourceHeaderProps {
  resource: Resource;
}

const ResourceHeader: React.FC<ResourceHeaderProps> = ({ resource }) => {
  return (
    <section className="py-10 md:py-16 border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/resources" 
          className="inline-flex items-center text-navy hover:text-gold transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          <span>Back to Resources</span>
        </Link>
        
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center mb-6">
            <span className="text-sm font-medium bg-navy/10 text-navy px-3 py-1 rounded-full">
              {resource.category.charAt(0).toUpperCase() + resource.category.slice(1)}
            </span>
            <div className="flex items-center text-charcoal/60 ml-4">
              <Calendar className="h-4 w-4 mr-1" />
              <span className="text-sm">{resource.date}</span>
            </div>
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-navy">
            {resource.title}
          </h1>
          
          <p className="text-xl text-charcoal/80 mb-4 max-w-4xl">
            {resource.description}
          </p>
          
          {resource.author && (
            <p className="text-sm text-charcoal/60 mb-4">
              By {resource.author}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ResourceHeader;
