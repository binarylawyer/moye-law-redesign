import React from 'react';
import { Link } from 'react-router-dom';
import { practiceAreas, specializedServices } from './navigation/NavigationData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-200 py-12 border-t border-gray-700">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and copyright */}
          <div className="md:col-span-3">
            <Link to="/" className="text-white font-display text-xl hover:opacity-80 transition duration-200">
              MOYE LAW
            </Link>
            <p className="mt-3 text-sm text-gray-300">
              Family Values, Future-Forward Solutions
            </p>
            <p className="mt-6 text-xs text-gray-400">
              © {currentYear} Moye Law Firm.
            </p>
            <p className="text-xs text-gray-400 mb-4">
              All rights reserved.
            </p>
            <Link 
              to="/contact" 
              className="text-sm text-gold hover:text-white transition-colors font-semibold mt-2 inline-block"
            >
               Request Consultation →
            </Link>
          </div>
          
          {/* Navigation */}
          <nav className="md:col-span-2">
            <p className="font-semibold text-white mb-3 font-display text-base">Navigate</p>
            <ul className="space-y-2">
              <li><Link to="/practice" className="text-sm text-gray-300 hover:text-white transition-colors">Practice</Link></li>
              <li><Link to="/about" className="text-sm text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/resources" className="text-sm text-gray-300 hover:text-white transition-colors">Resources</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </nav>
          
          {/* Practice Areas */}
          <nav className="md:col-span-3">
            <p className="font-semibold text-white mb-3 font-display text-base">Practice Areas</p>
            <ul className="space-y-2">
              {practiceAreas.slice(0, 6).map((area) => (
                <li key={area.path}><Link to={area.path} className="text-sm text-gray-300 hover:text-white transition-colors">{area.title}</Link></li>
              ))}
            </ul>
          </nav>
          
          {/* Services */}
          <nav className="md:col-span-4">
            <p className="font-semibold text-white mb-3 font-display text-base">Services</p>
            <ul className="space-y-1">
              {specializedServices.slice(0, 7).map((service) => (
                <li key={service.path}>
                  <Link 
                    to={service.path} 
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
