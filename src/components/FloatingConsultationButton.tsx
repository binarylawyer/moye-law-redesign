
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
          className="bg-gradient-to-br from-gold to-bright-blue text-white font-sans rounded-md w-[192px] h-[192px] shadow-2xl flex flex-col items-center justify-center hover:scale-105 transition-all duration-300 border-2 border-white animate-pulse"
          aria-label="Schedule a consultation"
        >
          <Calendar size={96} className="animate-bounce" />
          <span className="text-3xl mt-4 font-bold">Consult</span>
        </Button>
      </Link>
    </div>
  );
};

export default FloatingConsultationButton;
