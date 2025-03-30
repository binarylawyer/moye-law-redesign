
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const PracticeAreas: React.FC = () => {
  const elementsRef = useRef<Array<HTMLElement | null>>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    const elements = elementsRef.current.filter(Boolean) as HTMLElement[];
    elements.forEach((el, index) => {
      observer.observe(el);
    });
    
    return () => {
      elements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  // Practice areas tailored to each persona
  const practiceAreas = [
    {
      id: "estate-planning",
      title: "Estate Planning & Trusts",
      description: "Strategic wealth preservation and legacy planning for high-net-worth individuals.",
      persona: "David (Prudent Investor)",
      path: "/practice/estate-planning"
    },
    {
      id: "elder-law",
      title: "Elder Law",
      description: "Comprehensive planning for aging family members with compassion and foresight.",
      persona: "Barbara (Executive & Caregiver)",
      path: "/practice/elder-law"
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property & Digital Assets",
      description: "Protection for entrepreneurs and innovators in the digital economy.",
      persona: "Alex (Tech Innovator)",
      path: "/practice/intellectual-property"
    },
    {
      id: "art-law",
      title: "Art Law",
      description: "Specialized legal services for collectors, artists, and cultural institutions.",
      persona: "Premium Differentiator",
      path: "/practice/art-law"
    }
  ];

  return (
    <section className="py-96 bg-light-gray">
      <div className="container mx-auto px-24">
        <h2 
          ref={el => elementsRef.current[0] = el} 
          className="reveal font-serif text-center mb-96"
        >
          Areas of Practice
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32 md:gap-64">
          {practiceAreas.map((practice, index) => (
            <div 
              key={practice.id}
              ref={el => elementsRef.current[index + 1] = el}
              className="reveal bg-white p-32 md:p-48 rounded-lg hover:shadow-md transition-all duration-300"
              style={{ transitionDelay: `${0.1 * (index + 1)}s` }}
            >
              {/* Comment indicating persona target */}
              {/* For: {practice.persona} */}
              
              <h3 className="font-serif mb-16 text-2xl">{practice.title}</h3>
              <p className="text-charcoal/80 mb-24">{practice.description}</p>
              
              <Link 
                to={practice.path} 
                className="inline-flex items-center font-sans text-navy hover:text-gold transition-colors"
              >
                Learn more <ChevronRight className="ml-8 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
