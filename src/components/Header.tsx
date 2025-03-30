
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
      className={`fixed top-0 left-0 right-0 z-50 py-24 px-24 md:px-32 transition-all duration-200 ${
        isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-navy font-serif text-xl font-medium hover:opacity-80 transition duration-200">
          Moye Law
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-64">
          <Link to="/practice" className="nav-link">Practice</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/resources" className="nav-link">Resources</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-navy hover:text-navy/80 transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-[72px] left-0 right-0 bottom-0 bg-white z-40 p-24 pt-32">
          <nav className="flex flex-col space-y-24">
            <Link 
              to="/practice" 
              className="text-3xl font-serif text-navy hover:text-navy/80 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Practice
            </Link>
            
            {practiceAreas.map((area) => (
              <Link
                key={area.path}
                to={area.path}
                className="text-lg font-sans text-navy/70 hover:text-navy/90 transition-colors pl-16"
                onClick={() => setMobileMenuOpen(false)}
              >
                {area.title}
              </Link>
            ))}
            
            <Link 
              to="/about" 
              className="text-3xl font-serif text-navy hover:text-navy/80 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            
            <Link 
              to="/resources" 
              className="text-3xl font-serif text-navy hover:text-navy/80 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resources
            </Link>
            
            <Link 
              to="/contact" 
              className="text-3xl font-serif text-navy hover:text-navy/80 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            
            <Button className="mt-32 bg-gold hover:bg-gold/90 text-white font-sans font-medium w-full">
              Schedule a Consultation
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
