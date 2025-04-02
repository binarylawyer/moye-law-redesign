import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import DesktopNavigation from './navigation/DesktopNavigation';
import MobileMenu from './navigation/MobileMenu';
import { practiceAreas, specializedServices, resourcesItems } from './navigation/NavigationData';
import { COMPONENT_COLORS } from '@/utils/colors';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Memoize toggle function to prevent recreation on each render
  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  // Use a single effect for scroll handling
  useEffect(() => {
    // Check initial scroll position on mount
    const initialScroll = window.scrollY;
    setIsScrolled(initialScroll > 20);
    
    // Use throttled event handler for better performance
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Memoize the header background style
  const headerBackground = useMemo(() => ({
    backgroundColor: isScrolled 
      ? COMPONENT_COLORS.header.background 
      : 'rgba(255, 255, 255, 0.5)',
    backdropFilter: 'blur(15px)'
  }), [isScrolled]);

  // Memoize navigation data to prevent unnecessary re-renders
  const navigationData = useMemo(() => ({
    practiceAreas,
    specializedServices,
    resourcesItems
  }), []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-4 border-black ${
        isScrolled ? 'h-[80px]' : 'h-[100px]'
      }`}
    >
      {/* Enhanced Mondrian-style background with more translucent frosted glass effect */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={headerBackground}
      >
        {/* Replace JS-controlled animations with CSS animations for better performance */}
        <div className="absolute top-0 h-full w-1 bg-black/20 line-animation-1"></div>
        <div className="absolute top-0 h-full w-1 bg-black/20 line-animation-2"></div>

        {/* Mondrian-inspired color blocks */}
        <div className="absolute top-0 left-0 w-12 h-full mondrian-red opacity-10"></div>
        <div className="absolute top-0 right-0 w-12 h-full mondrian-blue opacity-10"></div>
        
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
          className="z-10 flex items-center hover:opacity-80 transition duration-200"
        >
          <img 
            src="/logos/Untitled-3-Moye_AB2.jpeg"
            alt="Moye Law Logo"
            className="h-12 md:h-14 w-auto transition-all duration-300"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:block z-10">
          <DesktopNavigation 
            practiceAreas={navigationData.practiceAreas}
            specializedServices={navigationData.specializedServices}
            resourcesItems={navigationData.resourcesItems}
            isScrolled={isScrolled}
          />
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden z-10">
          <button
            onClick={toggleMobileMenu}
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
        practiceAreas={navigationData.practiceAreas}
        specializedServices={navigationData.specializedServices}
        resourcesItems={navigationData.resourcesItems}
      />
    </header>
  );
};

// Export as memoized component to prevent unnecessary re-renders
export default React.memo(Header);
