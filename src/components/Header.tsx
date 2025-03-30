
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const practiceAreas = [
    { title: "Estate Planning", path: "/practice/estate-planning" },
    { title: "Elder Law", path: "/practice/elder-law" },
    { title: "Intellectual Property", path: "/practice/intellectual-property" },
    { title: "Art Law", path: "/practice/art-law" },
    { title: "Software Licensing", path: "/practice/software-licensing" },
    { title: "IP Licensing", path: "/practice/ip-licensing" },
    { title: "Entertainment Law", path: "/entertainment-law" },
    { title: "Emerging Tech", path: "/emerging-tech" },
    { title: "Real Estate", path: "/practice/real-estate" },
    { title: "Crypto & Digital Assets", path: "/practice/crypto-assets" },
  ];
  
  const specializedServices = [
    { title: "IP Consulting", path: "/ip-consulting" },
    { title: "Licensing Solutions", path: "/ip-licensing" },
    { title: "Digital Asset Protection", path: "/digital-asset-protection" },
    { title: "Entertainment Law", path: "/entertainment-law" },
    { title: "Emerging Tech", path: "/emerging-tech" },
  ];
  
  const resourcesItems = [
    { title: "Articles & Guides", path: "/resources" },
    { title: "Case Studies", path: "/case-studies" },
    { title: "FAQ", path: "/faq" },
    { title: "How We Work", path: "/how-we-work" },
    { title: "Technology Approach", path: "/technology-approach" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navMenuItemClasses = "text-navy hover:text-gold transition-colors font-sans text-lg relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gold after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left";
  const activeNavClass = "after:scale-x-100 font-medium";

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 h-[80px] flex items-center transition-all duration-300 ${
        isScrolled ? 'bg-white border-b border-gray-200' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-8 flex justify-between items-center">
        <Link to="/" className="text-navy font-serif text-xl hover:opacity-80 transition duration-200">
          MOYE LAW
        </Link>

        {/* Desktop Navigation with enhanced hover effects */}
        <div className="hidden md:flex items-center space-x-24">
          <NavigationMenu>
            <NavigationMenuList className="space-x-24">
              <NavigationMenuItem>
                <NavigationMenuTrigger className={`${navMenuItemClasses} ${isActive('/practice') ? activeNavClass : ''} bg-transparent hover:bg-transparent focus:bg-transparent`}>Practice</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white shadow-lg rounded-sm p-4 w-[400px]">
                  <div className="grid grid-cols-2 gap-4">
                    {practiceAreas.map((area) => (
                      <Link
                        key={area.path}
                        to={area.path}
                        className="text-navy hover:text-gold p-2 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {area.title}
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <Link to="/practice" className="text-gold hover:text-navy flex items-center transition-colors">
                      View All Practice Areas
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className={`${navMenuItemClasses} ${isActive('/ip-consulting') || isActive('/ip-licensing') || isActive('/digital-asset-protection') || isActive('/entertainment-law') || isActive('/emerging-tech') ? activeNavClass : ''} bg-transparent hover:bg-transparent focus:bg-transparent`}>Services</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white shadow-lg rounded-sm p-4 w-[300px]">
                  <div className="flex flex-col space-y-2">
                    {specializedServices.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="text-navy hover:text-gold p-2 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link 
                  to="/about" 
                  className={`${navMenuItemClasses} ${isActive('/about') ? activeNavClass : ''} flex items-center`}
                >
                  Our Firm
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className={`${navMenuItemClasses} ${isActive('/resources') || isActive('/case-studies') || isActive('/faq') || isActive('/how-we-work') || isActive('/technology-approach') ? activeNavClass : ''} bg-transparent hover:bg-transparent focus:bg-transparent`}>Resources</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white shadow-lg rounded-sm p-4 w-[300px]">
                  <div className="flex flex-col space-y-2">
                    {resourcesItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="text-navy hover:text-gold p-2 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link 
                  to="/contact" 
                  className={`${navMenuItemClasses} ${isActive('/contact') ? activeNavClass : ''} flex items-center`}
                >
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <Link to="/contact">
            <Button 
              variant="ghost" 
              className="text-gold hover:text-white hover:bg-gold transition-all font-sans text-lg px-6 py-2 font-normal border border-transparent hover:border-gold"
            >
              Schedule Consultation
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-navy hover:text-gold transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-[80px] left-0 right-0 bottom-0 bg-white z-40 p-8 overflow-y-auto">
          <nav className="flex flex-col space-y-6">
            <Link 
              to="/practice" 
              className="font-serif text-2xl text-navy hover:text-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Practice
            </Link>
            
            {practiceAreas.map((area) => (
              <Link
                key={area.path}
                to={area.path}
                className="text-base font-sans text-navy/70 hover:text-navy/90 transition-colors pl-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                {area.title}
              </Link>
            ))}
            
            <div className="font-serif text-2xl text-navy hover:text-gold transition-colors">
              Services
            </div>
            
            {specializedServices.map((service) => (
              <Link
                key={service.path}
                to={service.path}
                className="text-base font-sans text-navy/70 hover:text-navy/90 transition-colors pl-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                {service.title}
              </Link>
            ))}
            
            <Link 
              to="/about" 
              className="font-serif text-2xl text-navy hover:text-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Firm
            </Link>
            
            <Link 
              to="/resources" 
              className="font-serif text-2xl text-navy hover:text-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resources
            </Link>
            
            {resourcesItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-base font-sans text-navy/70 hover:text-navy/90 transition-colors pl-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            
            <Link 
              to="/contact" 
              className="font-serif text-2xl text-navy hover:text-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            
            <Link to="/contact" className="mt-8">
              <Button 
                className="bg-gold hover:bg-gold/90 text-white font-sans font-normal w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Schedule a Consultation
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
