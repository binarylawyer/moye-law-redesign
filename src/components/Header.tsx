
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

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 py-6 px-4 md:px-8 transition-all duration-200 ${
        isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-navy font-serif text-xl font-medium hover:opacity-80 transition duration-200">
          Moye Law
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/practice" className="text-navy hover:text-gold transition-colors">Practice</Link>
          <Link to="/about" className="text-navy hover:text-gold transition-colors">About</Link>
          <Link to="/resources" className="text-navy hover:text-gold transition-colors">Resources</Link>
          <Link to="/contact" className="text-navy hover:text-gold transition-colors">Contact</Link>
        </nav>

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
        <div className="md:hidden fixed top-[72px] left-0 right-0 bottom-0 bg-white z-40 p-6 pt-8">
          <nav className="flex flex-col space-y-6">
            <Link 
              to="/practice" 
              className="text-3xl font-serif text-navy hover:text-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Practice
            </Link>
            
            {practiceAreas.map((area) => (
              <Link
                key={area.path}
                to={area.path}
                className="text-lg font-sans text-navy/70 hover:text-navy/90 transition-colors pl-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                {area.title}
              </Link>
            ))}
            
            <Link 
              to="/about" 
              className="text-3xl font-serif text-navy hover:text-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            
            <Link 
              to="/resources" 
              className="text-3xl font-serif text-navy hover:text-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resources
            </Link>
            
            <Link 
              to="/contact" 
              className="text-3xl font-serif text-navy hover:text-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            
            <Button className="mt-8 bg-gold hover:bg-gold/90 text-white font-sans font-medium w-full">
              Schedule a Consultation
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
