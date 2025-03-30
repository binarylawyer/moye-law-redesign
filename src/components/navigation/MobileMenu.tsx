
import React from 'react';
import { Link } from "react-router-dom";

interface MobileMenuProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  practiceAreas: { title: string; path: string }[];
  specializedServices: { title: string; path: string }[];
  resourcesItems: { title: string; path: string }[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ 
  mobileMenuOpen, 
  setMobileMenuOpen,
  practiceAreas,
  specializedServices,
  resourcesItems
}) => {
  if (!mobileMenuOpen) return null;
  
  return (
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
      </nav>
    </div>
  );
};

export default MobileMenu;
