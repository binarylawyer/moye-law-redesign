import React from 'react';
import { Link } from 'react-router-dom';

interface RelatedItem {
  title: string;
  path: string;
  description: string;
}

interface PracticeAreaRelatedProps {
  title?: string;
  items: RelatedItem[];
}

const PracticeAreaRelated: React.FC<PracticeAreaRelatedProps> = ({ 
  title = "Related Services", 
  items 
}) => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-8">
        <div className="mondrian-grid mb-16">
          <div className="col-span-3 mondrian-yellow"></div>
          <div className="col-span-6 mondrian-grid-item bg-white p-8 text-center">
            <h2 className="reveal font-serif text-black text-3xl mb-4">{title}</h2>
          </div>
          <div className="col-span-3 mondrian-white border-r-4 border-b-4 border-black"></div>
        </div>
        
        <div className="mondrian-grid">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="col-span-12 md:col-span-4 mondrian-grid-item bg-white"
            >
              <Link 
                to={item.path}
                className="block p-8 h-full border-4 border-black hover:border-black/70 transition-all duration-300"
              >
                <h3 className="font-serif text-black text-2xl mb-4">{item.title}</h3>
                <p className="text-black/70 mb-4">{item.description}</p>
                <div className="text-sm font-medium uppercase tracking-wider mt-auto opacity-70 hover:opacity-100 transition-opacity">
                  Learn more →
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreaRelated; 