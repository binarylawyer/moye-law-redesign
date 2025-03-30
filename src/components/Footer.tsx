
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white py-24 border-t border-gray-200">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          {/* Logo and copyright */}
          <div className="md:col-span-4">
            <Link to="/" className="text-navy font-serif text-xl hover:opacity-80 transition duration-200">
              MOYE LAW
            </Link>
            <p className="mt-4 text-sm text-charcoal/60">
              Family Values, Future-Forward Solutions
            </p>
            <p className="mt-8 text-sm text-charcoal/60">
              © {currentYear} Moye Law Firm. All rights reserved.
            </p>
          </div>
          
          {/* Navigation */}
          <nav className="md:col-span-2">
            <p className="font-medium text-navy mb-4 font-serif text-sm">Navigate</p>
            <ul className="space-y-3">
              <li><Link to="/practice" className="text-sm text-charcoal/70 hover:text-navy transition-colors">Practice</Link></li>
              <li><Link to="/about" className="text-sm text-charcoal/70 hover:text-navy transition-colors">About</Link></li>
              <li><Link to="/resources" className="text-sm text-charcoal/70 hover:text-navy transition-colors">Resources</Link></li>
              <li><Link to="/contact" className="text-sm text-charcoal/70 hover:text-navy transition-colors">Contact</Link></li>
            </ul>
          </nav>
          
          {/* Practice Areas */}
          <nav className="md:col-span-3">
            <p className="font-medium text-navy mb-4 font-serif text-sm">Practice Areas</p>
            <ul className="space-y-3">
              <li><Link to="/practice/estate-planning" className="text-sm text-charcoal/70 hover:text-navy transition-colors">Estate Planning & Trusts</Link></li>
              <li><Link to="/practice/elder-law" className="text-sm text-charcoal/70 hover:text-navy transition-colors">Elder Law</Link></li>
              <li><Link to="/practice/intellectual-property" className="text-sm text-charcoal/70 hover:text-navy transition-colors">Intellectual Property</Link></li>
              <li><Link to="/practice/art-law" className="text-sm text-charcoal/70 hover:text-navy transition-colors">Art Law</Link></li>
            </ul>
          </nav>
          
          {/* Contact */}
          <div className="md:col-span-3">
            <p className="font-medium text-navy mb-4 font-serif text-sm">Contact</p>
            <p className="text-sm text-charcoal/70 mb-2">New York</p>
            <p className="text-sm text-charcoal/70 mb-4">Virginia</p>
            <p className="text-sm text-charcoal/70">
              <a href="mailto:contact@moye.law" className="hover:text-navy transition-colors">contact@moye.law</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
