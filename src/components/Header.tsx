
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
  ];
  
  const resourcesItems = [
    { title: "Articles & Guides", path: "/resources" },
    { title: "FAQ", path: "/faq" },
    { title: "How We Work", path: "/how-we-work" },
    { title: "Technology Approach", path: "/technology-approach" },
  ];

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

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-24">
          <nav className="flex items-center space-x-24">
            <Link to="/practice" className="text-navy hover:text-gold transition-colors font-sans text-base">Practice</Link>
            <Link to="/about" className="text-navy hover:text-gold transition-colors font-sans text-base">About</Link>
            <Link to="/resources" className="text-navy hover:text-gold transition-colors font-sans text-base">Resources</Link>
            <Link to="/contact" className="text-navy hover:text-gold transition-colors font-sans text-base">Contact</Link>
          </nav>
          
          <Link to="/contact">
            <Button variant="ghost" className="text-gold hover:text-gold/90 hover:bg-transparent font-sans text-base px-0 font-normal">
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
            
            <Link 
              to="/about" 
              className="font-serif text-2xl text-navy hover:text-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
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
