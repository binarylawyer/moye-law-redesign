import React from 'react';
import { Link } from 'react-router-dom';
import { RelatedService } from '@/types/services';
// Using span for placeholder icon
// import { Icon } from '@/components/ui/Icon';
const Icon = ({ name, className }: { name: string, className?: string }) => <span className={`inline-block ${className}`}>({name})</span>;


interface ServiceRelatedProps {
  title?: string;
  relatedServices?: RelatedService[];
}

const ServiceRelated: React.FC<ServiceRelatedProps> = ({
  title = 'Related Services',
  relatedServices = []
}) => {
  // If no related services, don't render the component
  if (!relatedServices || relatedServices.length === 0) {
    return null;
  }

  return (
    // Remove outer section padding and bg-gray-50
    <div className="related-services-section">
      {/* Title Area */}
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-display mb-4 text-primary">{title}</h2>
        {/* Removed subtitle */}
      </div>

      {/* Grid for Related Services */}
      {/* Using Mondrian grid with gap-0 and borders on items */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mondrian-border">
        {relatedServices.map((service, idx) => {
           // Define border classes dynamically for a 3-column grid
          const isLastInRow = (idx + 1) % 3 === 0;
          const isLastRow = idx >= relatedServices.length - (relatedServices.length % 3 === 0 ? 3 : relatedServices.length % 3);
          const borderClasses = `mondrian-border-t ${idx % 3 !== 0 ? 'md:border-l-4' : 'md:border-l-0'} ${isLastInRow ? 'md:border-r-0' : 'md:border-r-4'} ${isLastRow ? 'border-b-0' : 'md:border-b-4'} border-black`;

          // Assign Mondrian colors cyclically
          const colors = ['mondrian-blue', 'mondrian-yellow', 'mondrian-red'];
          const colorClass = colors[idx % colors.length];

          return (
            <Link 
              to={service.path} 
              key={idx}
              // Apply dynamic borders and padding, make background white
              className={`group block p-6 md:p-8 bg-white mondrian-interactive ${borderClasses}`}
              data-animation="fade-in"
              data-animation-delay={`${idx * 100}`}
            >
              {/* Add a colored top border accent */}
              <div className={`h-2 mb-4 ${colorClass}`}></div> 
              
              <h3 className="font-display text-xl text-black mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <div className="flex items-center text-primary font-semibold group-hover:translate-x-1 transition-transform duration-300">
                Learn more
                <span className="ml-1">→</span> {/* Simple arrow */}
                {/* <Icon name="ChevronRight" className="ml-1 w-5 h-5" /> */}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceRelated; 