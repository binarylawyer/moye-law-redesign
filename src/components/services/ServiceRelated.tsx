import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RelatedService } from '@/types/services';
// Using span for placeholder icon
// import { Icon } from '@/components/ui/Icon';
const Icon = ({ name, className }: { name: string, className?: string }) => <span className={`inline-block ${className}`}>({name})</span>;


interface ServiceRelatedProps {
  title?: string;
  relatedServices?: RelatedService[];
}

const ServiceRelated: React.FC<ServiceRelatedProps> = ({
  title = 'Explore Related Services',
  relatedServices = []
}) => {
  // If no related services, don't render the component
  if (!relatedServices || relatedServices.length === 0) {
    return null;
  }

  return (
    <div className="related-services-section py-16 md:py-28">
      {/* Gallery-style title */}
      <motion.h2 
        className="text-3xl md:text-5xl font-display font-normal tracking-tight mb-16 md:mb-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h2>

      {/* Gallery Grid - MoMA inspired with generous spacing */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
        {relatedServices.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <Link 
              to={service.path} 
              className="group block h-full"
            >
              {/* Minimal separator line in Mondrian color */}
              <div className={`w-12 h-px mb-6 ${
                idx % 3 === 0 ? 'bg-mondrian-blue' : 
                idx % 3 === 1 ? 'bg-mondrian-red' : 
                'bg-mondrian-yellow'
              }`}></div>
              
              {/* Clean typography */}
              <h3 className="font-display text-xl md:text-2xl text-black mb-4 group-hover:text-gray-700 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-700 font-sans leading-relaxed mb-6">
                {service.description}
              </p>
              
              {/* Subtle "view" link */}
              <span className="inline-block text-black text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                View <span className="ml-1 font-normal">→</span>
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServiceRelated; 