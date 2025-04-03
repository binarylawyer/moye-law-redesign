import React from 'react';
import { Link } from 'react-router-dom';
import { RelatedService } from '@/types/services';
import { Icon } from '@/components/ui/Icon';

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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center" data-animation="fade-in">
          <h2 className="text-3xl md:text-4xl font-display mb-4">{title}</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Additional legal services that complement your current needs
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedServices.map((service, idx) => (
            <Link 
              to={service.path} 
              key={idx}
              className="bg-white mondrian-border hover:shadow-lg transition-all duration-300 group"
              data-animation="fade-in"
              data-animation-delay={`${idx * 100}`}
            >
              <div className="p-6">
                <h3 className="font-display text-xl mb-3">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <div className="flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform duration-300">
                  Learn more
                  <Icon name="ChevronRight" className="ml-1 w-5 h-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceRelated; 