import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { practiceAreasData } from '@/data/practiceAreasData';
import '../styles/mondrian.css';
import MondrianDecoration from '@/components/MondrianDecoration';

const PracticeAreas: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  // Intersection Observer for reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));
    
    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Get unique categories
  const categories = ['all', ...new Set(practiceAreasData.map(area => area.category))];

  // Filter practice areas based on selected filter
  const filteredAreas = filter === 'all' 
    ? practiceAreasData 
    : practiceAreasData.filter(area => area.category === filter);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32 md:pt-40">
        {/* Hero Section - Mondrian Style */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-8">
            <div className="mondrian-grid mb-16">
              <div className="col-span-3 mondrian-blue"></div>
              <div className="col-span-6 mondrian-grid-item bg-white p-8 text-center">
                <h1 className="reveal font-serif text-black text-4xl md:text-5xl lg:text-6xl mb-8">Practice Areas</h1>
                
                <div className="relative">
                  {/* Add subtle Mondrian decoration to the left of the hero description */}
                  <div className="hidden md:block absolute -left-32 top-0">
                    <MondrianDecoration position="left" variant={5} />
                  </div>
                  
                  <p className="reveal text-xl text-black/80 max-w-3xl mx-auto">
                    For over 30 years, Moye Law has delivered exceptional legal services across diverse practice areas. Our team brings decades of experience to every case.
                  </p>
                  
                  {/* Add subtle Mondrian decoration to the right of the hero description */}
                  <div className="hidden md:block absolute -right-32 top-10">
                    <MondrianDecoration position="right" variant={2} />
                  </div>
                </div>
              </div>
              <div className="col-span-3 mondrian-red"></div>
            </div>
          </div>
        </section>
        
        {/* Filters - Mondrian Style */}
        <section className="py-8">
          <div className="container mx-auto px-8">
            <div className="mondrian-grid">
              <div className="col-span-12 mondrian-grid-item bg-white p-4 border-t-4 border-black border-b-4">
                <div className="flex flex-wrap justify-center gap-4">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      onClick={() => setFilter(category)}
                      className={`px-4 py-2 rounded transition duration-300 ${
                        filter === category 
                          ? 'bg-black text-white' 
                          : 'bg-white text-black border border-black hover:bg-black/10'
                      }`}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Practice Areas Grid - Mondrian Style */}
        <section className="py-16">
          <div className="container mx-auto px-8">
            <div className="relative">
              {/* Additional decoration on the side of the grid */}
              <div className="hidden lg:block absolute -left-16 top-1/3">
                <MondrianDecoration position="left" variant={3} />
              </div>
              
              <div className="mondrian-grid">
                {filteredAreas.map((area, index) => {
                  // Determine which color block to use based on category
                  let colorClass = 'mondrian-white border-4 border-black';
                  if (area.category === 'business') colorClass = 'mondrian-red';
                  else if (area.category === 'personal') colorClass = 'mondrian-blue';
                  else if (area.category === 'litigation') colorClass = 'mondrian-yellow';
                  
                  // Determine grid span based on importance
                  const colSpan = area.featured ? 'col-span-12 md:col-span-6' : 'col-span-12 md:col-span-4';
                  
                  return (
                    <div 
                      key={area.id} 
                      className={`${colSpan} reveal mondrian-grid-item`}
                      style={{ transitionDelay: `${0.05 * index}s` }}
                    >
                      <Link 
                        to={`/practice/${area.id}`}
                        className="group block h-full"
                      >
                        <div className="bg-white h-full border-4 border-black hover:border-black/70 transition-all duration-300">
                          <div className={`h-32 ${colorClass}`}></div>
                          <div className="p-8">
                            <h2 className="font-serif text-black text-2xl mb-4 group-hover:text-black/80 transition-colors">{area.title}</h2>
                            <p className="text-black/70 mb-4">{area.shortDescription}</p>
                            <div className="text-sm font-medium uppercase tracking-wider mt-auto opacity-70 group-hover:opacity-100 transition-opacity">
                              Learn more →
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
              
              {/* Additional decoration on the right side of the grid */}
              <div className="hidden lg:block absolute -right-16 bottom-1/4">
                <MondrianDecoration position="right" variant={4} />
              </div>
            </div>
          </div>
        </section>
        
        {/* Mondrian-style divider */}
        <div className="mondrian-divider max-w-7xl mx-auto mb-16">
          <div className="mondrian-divider-blue"></div>
          <div className="mondrian-divider-white"></div>
          <div className="mondrian-divider-red"></div>
          <div className="mondrian-divider-yellow"></div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PracticeAreas; 