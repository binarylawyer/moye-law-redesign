import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Menu } from 'lucide-react';
import MobileMenu from './navigation/MobileMenu';
import { practiceAreas, specializedServices, resourcesItems } from './navigation/NavigationData';
import DesktopNavigation from './navigation/DesktopNavigation';

const Header: React.FC = () => {
  // Keep isScrolled state ONLY for passing to DesktopNavigation if needed, but remove its effect on Header styles for now
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navigation data
  const navigationData = {
    practiceAreas,
    specializedServices,
    resourcesItems
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  // Update isScrolled state, but don't use it for header classes yet
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsScrolled(currentScrollPos > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 
  
  // --- TEMPORARY SIMPLIFICATION --- 
  // Hardcode styles to test if dynamic changes are the issue
  const headerBackgroundClass = "bg-white text-primary shadow-md"; // Always use the scrolled background
  const headerHeightClass = "h-16"; // Always use the scrolled height
  const backdropClass = "backdrop-blur-sm"; // Always apply backdrop blur
  // --------------------------------
  
  // Transition for smooth appearance changes (keep for potential future use)
  const transitionClass = "transition-all duration-300 ease-in-out";
  
  // Style for header positioning (remains fixed)
  const headerStyle: React.CSSProperties = {
    position: 'fixed', 
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
  };
  
  // Final class uses the temporarily hardcoded values
  const finalHeaderClass = `${headerBackgroundClass} ${headerHeightClass} ${backdropClass} ${transitionClass} ${mobileMenuOpen ? 'bg-white text-primary' : ''}`;
  
  return (
    <header 
      className={finalHeaderClass}
      style={headerStyle}
    >
      <div className="container mx-auto px-4 md:px-12 flex justify-between items-center h-full relative">
        <Link 
          to="/" 
          className="z-10 flex items-center hover:opacity-80 transition duration-200"
          aria-label="Moye Law - Home"
        >
          {/* Revert to original logo size */}
          <img 
            src="/logos/moye-logo.webp" 
            alt="MOYE LAW" 
            width="180" 
            height="40"
            className="h-10 w-auto" 
            loading="eager"
            fetchPriority="high"
          />
          
          {/* Accessibility hidden text for screen readers */}
          <span className="sr-only">MOYE LAW</span>
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

export default Header;
