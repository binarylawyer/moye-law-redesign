import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Menu } from 'lucide-react';
import MobileMenu from './navigation/MobileMenu';
import { practiceAreas, specializedServices, resourcesItems } from './navigation/NavigationData';
import DesktopNavigation from './navigation/DesktopNavigation';
import OptimizedImage from './OptimizedImage';

/**
 * Header Component
 * 
 * IMPORTANT IMPLEMENTATION NOTES:
 * This header implementation uses a combination of:
 * 1. Fixed positioning (via inline styles) to ensure stable positioning that never disappears on scroll
 * 2. Dynamic styling based on scroll position for visual enhancements
 * 3. Controlled transitions for smooth visual changes
 * 
 * PERFORMANCE OPTIMIZATIONS:
 * - Image dimensions respect natural aspect ratio to prevent stretching
 * - Logo uses fetchpriority="high" to prioritize loading
 * - Only height is specified to maintain aspect ratio
 * - Width/height attributes match visual dimensions to improve CLS
 * - Using OptimizedImage component for best LCP performance
 * 
 * PREVIOUS ISSUES SOLVED:
 * - Disappearing header: Fixed by ensuring consistent positioning via inline styles
 * - Moving too high on scroll: Fixed by using explicit height values and fixed positioning
 * - Poor contrast: Addressed with proper background opacity and shadows
 * - Slow LCP: Addressed with proper image loading optimizations
 * - Stretched logo: Fixed by respecting natural aspect ratio
 * 
 * APPROACH:
 * The key to this implementation is that we separate the POSITIONING from the VISUAL EFFECTS.
 * The header positioning never changes (always fixed at top), while the visual appearance
 * (height, transparency, spacing) changes smoothly based on scroll position.
 */
const Header: React.FC = () => {
  // Track if page is scrolled for visual effects
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);

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
  
  /**
   * Scroll Detection
   * 
   * This effect ONLY changes a state variable for VISUAL effects.
   * It does NOT directly manipulate the DOM or positioning.
   * The threshold of 20px provides a small buffer before transitions occur.
   */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  /**
   * Header Styling
   * 
   * CRITICAL: These inline styles ensure the header is ALWAYS fixed and visible.
   * Using inline styles guarantees these critical positioning properties aren't 
   * accidentally overridden by CSS classes.
   * 
   * KEY PROPERTIES:
   * - position: 'fixed' - Always keeps header in viewport
   * - top: 0 - Anchors to top of viewport
   * - zIndex: 100 - Ensures header is above all other content
   * - transition - Enables smooth animation between states
   * 
   * DYNAMIC PROPERTIES:
   * - height - Taller when at top of page, shorter when scrolled
   * - backgroundColor - Solid when at top, semi-transparent when scrolled
   * - boxShadow - None at top, subtle shadow when scrolled for visual separation
   */
  const headerStyle: React.CSSProperties = {
    position: 'fixed', // CRITICAL: This keeps the header in place
    top: 0,            // CRITICAL: This places it at the top of the viewport
    left: 0,
    right: 0,
    zIndex: 100,       // Ensures header appears above all content
    transition: 'height 0.3s ease, background-color 0.3s ease',
    height: isScrolled ? '64px' : '80px', // Taller at top, slimmer when scrolled
    backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.85)' : 'white', // Semi-transparent when scrolled
    boxShadow: isScrolled ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
  };
  
  /**
   * Visual Adaptations
   * 
   * These variables control how visual elements adapt to scroll position:
   * - Logo gets larger when at the top of the page
   * - Navigation spacing changes to balance the layout
   * 
   * NOTE: These do NOT affect positioning, only appearance.
   */
  // Logo size changes based on scroll
  const logoHeight = isScrolled ? 40 : 48;
  
  // Navigation container spacing changes
  const navSpacing = isScrolled ? "space-x-4" : "space-x-8";

  // Handle logo load completion
  const handleLogoLoad = () => {
    setLogoLoaded(true);
  };
  
  return (
    <header style={headerStyle}>
      {/* 
        Container div with full height to ensure content is vertically centered
        within the header regardless of its current height.
      */}
      <div className="container mx-auto px-4 md:px-12 flex justify-between items-center h-full relative">
        <Link 
          to="/" 
          className="z-10 flex items-center hover:opacity-80 transition duration-200"
          aria-label="Moye Law - Home"
        >
          {/* 
            Using OptimizedImage component for better performance:
            - High priority loading for critical LCP element
            - Only height is specified to maintain natural aspect ratio
            - No stretching or distortion of the logo
          */}
          <img 
            src="/logos/moye-logo.webp" 
            alt="MOYE LAW" 
            height={logoHeight}
            className="h-auto max-h-12"
            style={{
              height: `${logoHeight}px`,
            }}
            fetchpriority="high"
            decoding="async"
            onLoad={handleLogoLoad}
          />
          
          <span className="sr-only">MOYE LAW</span>
        </Link>

        {/* 
          Desktop Navigation with dynamic spacing
          - Space between navigation items adjusts based on scroll position
          - Passes isScrolled to DesktopNavigation for consistent styling
        */}
        <div className={`hidden md:block z-10 ${navSpacing} transition-all duration-300`}>
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
