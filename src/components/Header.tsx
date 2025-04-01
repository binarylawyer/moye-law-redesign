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
    // Check initial scroll position on mount
    const initialScroll = window.scrollY;
    setIsScrolled(initialScroll > 20);
    
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-4 border-black ${
        isScrolled ? 'h-[80px]' : 'h-[100px]'
      }`}
    >
      {/* Enhanced Mondrian-style background with more translucent frosted glass effect */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{
          backgroundColor: isScrolled 
            ? 'rgba(255, 255, 255, 0.7)' 
            : 'rgba(255, 255, 255, 0.5)',
          backdropFilter: 'blur(15px)'
        }}
      >
        {/* Mondrian-inspired animated vertical lines */}
        <div 
          className="absolute top-0 h-full w-1 bg-black/20 transition-all duration-1000 ease-in-out" 
          style={{ left: `${line1Position}%` }}
        ></div>
        <div 
          className="absolute top-0 h-full w-1 bg-black/20 transition-all duration-1000 ease-in-out" 
          style={{ left: `${line2Position}%` }}
        ></div>

        {/* Mondrian-inspired color blocks */}
        <div 
          className="absolute top-0 left-0 w-12 h-full mondrian-red opacity-10"
        ></div>
        <div 
          className="absolute top-0 right-0 w-12 h-full mondrian-blue opacity-10"
        ></div>
        
        {/* Mondrian-inspired horizontal lines */}
        <div className="absolute top-0 left-0 w-full h-1 flex border-b-2 border-black/20">
          <div className="w-1/5 h-full bg-[#D6001C]/30"></div>
          <div className="w-3/5 h-full bg-transparent"></div>
          <div className="w-1/5 h-full bg-[#003B98]/30"></div>
        </div>
        
        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 w-full h-1 flex">
          <div className="w-2/3 h-full bg-transparent"></div>
          <div className="w-1/3 h-full bg-[#FFD500]/30"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-12 flex justify-between items-center h-full relative">
        <Link 
          to="/" 
          className="font-serif text-xl hover:opacity-80 transition duration-200 z-10 text-black"
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
            className="hover:text-[#D6001C] transition-colors p-2 border border-black/20 text-black"
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
