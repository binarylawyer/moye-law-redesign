
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from "lucide-react";

const FloatingConsultationButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show button when scrolling down (reverse of previous behavior)
      if (currentScrollY > 100 && !isVisible) {
        setIsVisible(true);
      } 
      // Hide button when back at top
      else if (currentScrollY < 100 && isVisible) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isVisible]);

  return (
    <div 
      className={`fixed bottom-8 right-8 z-50 transition-all duration-300 ${!isVisible ? 'translate-y-20' : ''}`}
    >
      <Link to="/contact">
        <div 
          className={`transition-all duration-300 ${isHovered ? 'transform -translate-y-4' : ''}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered ? (
            <div className="bg-ocean-blue text-white rounded-lg w-[150px] h-[150px] shadow-2xl flex flex-col items-center justify-center hover:scale-105 transition-all duration-300 border-2 border-white/80">
              <Calendar size={60} className="text-white mb-2" strokeWidth={2} />
              <span className="font-bold text-center text-white text-lg">Free</span>
              <span className="font-bold text-center text-white text-lg">Consultation</span>
            </div>
          ) : (
            <div className="bg-ocean-blue/10 text-navy rounded-lg w-[150px] h-[150px] shadow-2xl flex flex-col items-center justify-center hover:scale-105 transition-all duration-300 border-2 border-navy/30">
              <Calendar size={32} className="text-navy mb-2" strokeWidth={2} />
              <span className="font-bold text-center text-navy text-xs">Free</span>
              <span className="font-bold text-center text-navy text-xs">Consultation</span>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default FloatingConsultationButton;
