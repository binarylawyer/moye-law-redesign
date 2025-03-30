
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [practiceAreasOpen, setPracticeAreasOpen] = useState(false);

  // Practice areas dropdown items
  const practiceAreas = [
    { title: "Estate Planning & Trusts", path: "/practice/estate-planning" },
    { title: "Elder Law", path: "/practice/elder-law" },
    { title: "Intellectual Property & Digital Assets", path: "/practice/ip-digital-assets" },
    { title: "Art Law", path: "/practice/art-law" },
  ];

  return (
    <header className="bg-white py-16 md:py-24 px-24 md:px-32 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-navy font-serif text-2xl font-bold hover:text-navy/90 transition duration-200">
            Moye Law
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-32">
          <nav className="hidden md:flex items-center space-x-32">
            <div className="relative group">
              <button 
                className="flex items-center font-sans font-medium text-navy hover:text-navy/80 transition-colors"
                onClick={() => setPracticeAreasOpen(!practiceAreasOpen)}
              >
                Practice Areas <ChevronDown className="ml-8 h-4 w-4" />
              </button>
              <div className={`absolute left-0 mt-8 w-64 bg-white shadow-lg rounded-sm py-16 z-10 transition-all transform origin-top ${practiceAreasOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                {practiceAreas.map((area) => (
                  <Link
                    key={area.path}
                    to={area.path}
                    className="block px-16 py-8 text-navy hover:bg-light-gray hover:text-navy/80 transition-colors"
                    onClick={() => setPracticeAreasOpen(false)}
                  >
                    {area.title}
                  </Link>
                ))}
              </div>
            </div>
            <Link to="/about" className="font-sans font-medium text-navy hover:text-navy/80 transition-colors">About</Link>
            <Link to="/resources" className="font-sans font-medium text-navy hover:text-navy/80 transition-colors">Resources</Link>
            <Link to="/contact" className="font-sans font-medium text-navy hover:text-navy/80 transition-colors">Contact</Link>
          </nav>
          <Button variant="default" className="bg-gold hover:bg-gold/90 text-white font-sans font-medium">
            Schedule a Consultation
          </Button>
        </div>

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
        <div className="md:hidden absolute top-[80px] left-0 right-0 bg-white shadow-lg z-10">
          <div className="container mx-auto py-16 px-24">
            <nav className="flex flex-col space-y-16">
              <button 
                className="flex items-center justify-between font-sans font-medium text-navy hover:text-navy/80 transition-colors"
                onClick={() => setPracticeAreasOpen(!practiceAreasOpen)}
              >
                <span>Practice Areas</span>
                <ChevronDown className={`h-4 w-4 transform transition-transform ${practiceAreasOpen ? "rotate-180" : "rotate-0"}`} />
              </button>
              
              {practiceAreasOpen && (
                <div className="pl-16 flex flex-col space-y-8">
                  {practiceAreas.map((area) => (
                    <Link
                      key={area.path}
                      to={area.path}
                      className="text-navy hover:text-navy/80 transition-colors py-8"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {area.title}
                    </Link>
                  ))}
                </div>
              )}
              
              <Link to="/about" className="font-sans font-medium text-navy hover:text-navy/80 transition-colors">About</Link>
              <Link to="/resources" className="font-sans font-medium text-navy hover:text-navy/80 transition-colors">Resources</Link>
              <Link to="/contact" className="font-sans font-medium text-navy hover:text-navy/80 transition-colors">Contact</Link>
              <Button variant="default" className="bg-gold hover:bg-gold/90 text-white font-sans font-medium w-full">
                Schedule a Consultation
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
