import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { getServicePath } from '@/utils/practiceHelpers';

interface RelatedItem {
  title: string;
  path: string;
  description: string;
}

interface PracticeAreaRelatedProps {
  title: string;
  items: RelatedItem[];
}

const PracticeAreaRelated: React.FC<PracticeAreaRelatedProps> = ({ title, items }) => {
  // Helper function to ensure path has the proper format using our utility
  const getPath = (path: string) => {
    // If it's already a full path with /, use it directly
    if (path.startsWith('/')) {
      return path;
    }
    
    // Otherwise use our helper to get the standardized path
    return getServicePath(path);
  };

  return (
    <section className="bg-gray-50 py-8">
      <div className="container mx-auto px-8">
        <h2 className="font-display text-3xl text-center mb-6">{title || "Related Services"}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="mondrian-border bg-white p-5 flex flex-col h-full">
              <h3 className="font-display text-xl text-black mb-2">{item.title}</h3>
              <p className="text-black/80 mb-3 flex-grow">{item.description}</p>
              <Link 
                to={getPath(item.path)} 
                className="inline-flex items-center mt-auto text-primary font-medium hover:text-primary/80 transition-colors"
              >
                Learn more <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreaRelated; 