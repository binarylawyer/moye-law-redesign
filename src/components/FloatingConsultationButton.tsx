
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const FloatingConsultationButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  // Handle scroll behavior to hide/show button
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide button when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && isVisible && currentScrollY > 300) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY && !isVisible) {
        setIsVisible(true);
      }
      
      // Always show on top of page
      if (currentScrollY < 100) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isVisible]);

  return (
    <div className={`fixed bottom-8 right-8 z-50 transition-transform duration-300 ${!isVisible ? 'translate-y-20' : ''}`}>
      <Link to="/contact">
        <Button 
          className="bg-bright-blue hover:bg-bright-blue/90 text-white font-sans rounded-full w-24 h-24 shadow-xl flex items-center justify-center hover:scale-105 transition-all duration-300 animate-pulse"
          aria-label="Schedule a consultation"
        >
          <div className="flex flex-col items-center">
            <Calendar size={32} />
            <span className="text-xs mt-1 font-medium">Consult</span>
          </div>
        </Button>
      </Link>
    </div>
  );
};

export default FloatingConsultationButton;
