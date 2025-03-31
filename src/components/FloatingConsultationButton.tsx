
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const FloatingConsultationButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  return <div className={`fixed bottom-8 right-8 z-50 transition-transform duration-300 ${!isVisible ? 'translate-y-20' : ''}`}>
      <Link to="/contact">
        <Button className="bg-gradient-to-br from-sky-blue to-ocean-blue text-white font-sans rounded-md w-[150px] h-[150px] shadow-2xl flex flex-col items-center justify-center hover:scale-105 transition-all duration-300 border-2 border-white" aria-label="Schedule a consultation">
          <Calendar size={180} className="animate-bounce" />
          <span className="mt-2 font-bold text-center text-lg max-w-full overflow-hidden break-words px-3 whitespace-normal">
            Schedule a consultation
          </span>
        </Button>
      </Link>
    </div>;
};

export default FloatingConsultationButton;
