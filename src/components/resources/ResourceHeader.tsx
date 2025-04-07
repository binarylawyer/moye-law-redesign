import React from 'react';
import { Resource } from '../../data/articlesData';
import { Calendar } from 'lucide-react';

interface ResourceHeaderProps {
  resource: Resource;
}

const ResourceHeader: React.FC<ResourceHeaderProps> = ({ resource }) => {
  // Determine color block based on first letter of title (for visual variety)
  const getColorClass = () => {
    const firstLetter = resource.title.charAt(0).toLowerCase();
    if (['a', 'b', 'c', 'd', 'e'].includes(firstLetter)) return 'mondrian-red';
    if (['f', 'g', 'h', 'i', 'j'].includes(firstLetter)) return 'mondrian-blue';
    if (['k', 'l', 'm', 'n', 'o'].includes(firstLetter)) return 'mondrian-yellow';
    if (['p', 'q', 'r', 's', 't'].includes(firstLetter)) return 'mondrian-light-blue';
    return 'mondrian-light-yellow';
  };

  const colorClass = getColorClass();

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Mondrian-style grid layout for header */}
          <div className="mondrian-grid relative">
            {/* Category + date block */}
            <div className={`col-span-3 ${colorClass} p-4 md:p-6 flex flex-col justify-center`}>
              <div className="flex flex-col md:flex-row md:items-center mb-2 md:mb-0">
                <span className="text-sm font-medium bg-white border-2 border-black px-3 py-1 inline-block mb-2 md:mb-0 md:mr-3">
                  {resource.category.charAt(0).toUpperCase() + resource.category.slice(1)}
                </span>
                <div className="flex items-center text-black">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="text-sm">{resource.date}</span>
                </div>
              </div>
            </div>

            {/* Title block */}
            <div className="col-span-9 bg-white border-l-4 border-black p-4 md:p-6">
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-black">
                {resource.title}
              </h1>
            </div>

            {/* Description block */}
            <div className="col-span-12 bg-white border-t-4 border-black p-4 md:p-6">
              <p className="text-xl text-black/80 max-w-4xl">
                {resource.description}
              </p>
              
              {/* Author - small block inside description */}
              {resource.author && (
                <div className="mt-4 inline-block border-2 border-black px-3 py-1 bg-white">
                  <p className="text-sm font-medium text-black">
                    By {resource.author}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceHeader;
