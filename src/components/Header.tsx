import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import DesktopNavigation from './navigation/DesktopNavigation';
import MobileMenu from './navigation/MobileMenu';
import { practiceAreas, specializedServices, resourcesItems } from './navigation/NavigationData';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [line1Position, setLine1Position] = useState(42);
  const [line2Position, setLine2Position] = useState(58);
  const [line1Direction, setLine1Direction] = useState(1);
  const [line2Direction, setLine2Direction] = useState(-1);
  const [box1Scale, setBox1Scale] = useState(1);
  const [box2Scale, setBox2Scale] = useState(1);
  const [box3Scale, setBox3Scale] = useState(1);
  const [box1Offset, setBox1Offset] = useState(0);
  const [box2Offset, setBox2Offset] = useState(0);
  const [box3Offset, setBox3Offset] = useState(0);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
      
      // Subtle box transformations based on scroll
      setBox1Scale(1 + (scrollY * 0.0003));
      setBox2Scale(1 - (scrollY * 0.0002));
      setBox3Scale(1 + (scrollY * 0.0001));
      
      setBox1Offset(scrollY * 0.05);
      setBox2Offset(scrollY * -0.03);
      setBox3Offset(scrollY * 0.02);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animate the vertical lines
  useEffect(() => {
    const moveLines = () => {
      setLine1Position(prev => {
        const newPos = prev + (0.1 * line1Direction);
        if (newPos >= 46 || newPos <= 38) {
          setLine1Direction(prev => -prev);
        }
        return newPos < 38 ? 38 : newPos > 46 ? 46 : newPos;
      });

      setLine2Position(prev => {
        const newPos = prev + (0.08 * line2Direction);
        if (newPos >= 62 || newPos <= 54) {
          setLine2Direction(prev => -prev);
        }
        return newPos < 54 ? 54 : newPos > 62 ? 62 : newPos;
      });
    };

    const interval = setInterval(moveLines, 50);
    return () => clearInterval(interval);
  }, [line1Direction, line2Direction]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'h-[80px]' : 'h-[100px]'
      }`}
    >
      {/* Enhanced frosted glass background */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{
          backgroundColor: isScrolled 
            ? 'rgba(255, 255, 255, 0.85)' 
            : 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(12px)',
          borderBottom: isScrolled ? '1px solid rgba(0, 0, 0, 0.1)' : 'none'
        }}
      >
        {/* Animated thicker vertical lines in middle section */}
        <div 
          className="absolute top-0 h-full w-1 bg-black/8 transition-all duration-1000 ease-in-out" 
          style={{ left: `${line1Position}%` }}
        ></div>
        <div 
          className="absolute top-0 h-full w-1 bg-black/8 transition-all duration-1000 ease-in-out" 
          style={{ left: `${line2Position}%` }}
        ></div>

        {/* Subtle irregular moving boxes */}
        <div 
          className="absolute top-0 left-1/4 w-12 h-12 bg-[#D6001C]/5 transition-all duration-300"
          style={{ 
            transform: `translate(${-box1Offset}px, ${box1Offset/2}px) scale(${box1Scale})`,
            opacity: isScrolled ? 0.5 : 0.2
          }}
        ></div>
        <div 
          className="absolute top-1/2 right-1/3 w-16 h-10 bg-[#003B98]/5 transition-all duration-300"
          style={{ 
            transform: `translate(${box2Offset}px, ${-box2Offset/3}px) scale(${box2Scale})`,
            opacity: isScrolled ? 0.5 : 0.2
          }}
        ></div>
        <div 
          className="absolute bottom-0 left-2/3 w-10 h-10 bg-[#FFD500]/5 transition-all duration-300"
          style={{ 
            transform: `translate(${box3Offset}px, ${-box3Offset/2}px) scale(${box3Scale})`,
            opacity: isScrolled ? 0.5 : 0.2
          }}
        ></div>
        
        {/* Mondrian-inspired subtle color accents */}
        <div className={`absolute top-0 left-0 w-full h-0.5 transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}>
          <div className="h-full flex">
            <div className="w-1/5 h-full bg-[#D6001C]/40"></div>
            <div className="w-3/5 h-full bg-transparent"></div>
            <div className="w-1/5 h-full bg-[#003B98]/40"></div>
          </div>
        </div>
        
        {/* Bottom accent */}
        <div className={`absolute bottom-0 left-0 w-full h-0.5 transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}>
          <div className="h-full flex">
            <div className="w-2/3 h-full bg-transparent"></div>
            <div className="w-1/3 h-full bg-[#FFD500]/40"></div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-12 flex justify-between items-center h-full relative">
        <Link 
          to="/" 
          className={`font-serif text-xl hover:opacity-80 transition duration-200 z-10 ${
            isScrolled ? 'text-navy' : 'text-white'
          }`}
        >
          <span className="font-bold text-2xl">MOYE</span> <span className="text-lg">LAW</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:block z-10">
          <DesktopNavigation 
            practiceAreas={practiceAreas}
            specializedServices={specializedServices}
            resourcesItems={resourcesItems}
            isScrolled={isScrolled}
          />
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden z-10">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`hover:text-[#D6001C] transition-colors p-2 border ${
              isScrolled ? 'text-navy border-navy/20' : 'text-white border-white/20'
            }`}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileMenu 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        practiceAreas={practiceAreas}
        specializedServices={specializedServices}
        resourcesItems={resourcesItems}
      />
    </header>
  );
};

export default Header;
