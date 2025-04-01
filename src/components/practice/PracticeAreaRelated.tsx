import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { specializedServicePathMap } from '@/data/practiceAreasData';

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
  // Helper function to ensure path has the proper format
  const getPath = (path: string) => {
    // If it's already a full path with /, return it
    if (path.startsWith('/')) {
      return path;
    }
    
    // Otherwise, check if it's a known service ID and map it
    if (specializedServicePathMap && path in specializedServicePathMap) {
      return specializedServicePathMap[path];
    }
    
    // Default to practice prefix if not found
    return `/practice/${path}`;
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-8">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-16">{title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="mondrian-border bg-white p-8 flex flex-col h-full">
              <h3 className="font-serif text-xl text-black mb-4">{item.title}</h3>
              <p className="text-black/80 mb-6 flex-grow">{item.description}</p>
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