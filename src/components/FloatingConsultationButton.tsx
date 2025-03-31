
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const FloatingConsultationButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && isVisible && currentScrollY > 300) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY && !isVisible) {
        setIsVisible(true);
      }

      if (currentScrollY < 100) {
        setIsVisible(true);
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
      className={`fixed bottom-8 right-8 z-50 transition-transform duration-300 ${!isVisible ? 'translate-y-20' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to="/contact">
        <Button 
          className={`
            ${isHovered 
              ? 'bg-primary text-white border-white/80' 
              : 'bg-ocean-blue/5 border-white/30 text-navy'}
            font-sans font-bold
            rounded-lg w-[150px] h-[150px] 
            shadow-2xl flex flex-col items-center justify-center 
            hover:scale-105 transition-all duration-300 
            border-2
          `} 
          aria-label="Schedule a consultation"
        >
          {isHovered ? (
            <Calendar size={80} className="text-white" />
          ) : (
            <div className="mt-2 flex flex-col items-center">
              <span className="font-bold text-center text-xs">Free</span>
              <span className="font-bold text-center text-xs">Consultation</span>
            </div>
          )}
        </Button>
      </Link>
    </div>
  );
};

export default FloatingConsultationButton;
