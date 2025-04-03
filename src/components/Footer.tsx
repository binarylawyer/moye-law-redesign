import React from 'react';
import { Link } from 'react-router-dom';
import { specializedServices } from './navigation/NavigationData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 py-24 border-t border-gray-700">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          {/* Logo and copyright */}
          <div className="md:col-span-4">
            <Link to="/" className="text-[#f5f2e8] font-display text-2xl hover:opacity-80 transition duration-200">
              MOYE LAW
            </Link>
            <p className="mt-4 text-base text-[#f5f2e8]/80">
              Family Values, Future-Forward Solutions
            </p>
            <p className="mt-8 text-base text-[#f5f2e8]/80">
              © {currentYear} Moye Law Firm.
            </p>
            <p className="text-base text-[#f5f2e8]/80">
              All rights reserved.
            </p>
          </div>
          
          {/* Navigation */}
          <nav className="md:col-span-2">
            <p className="font-medium text-[#f5f2e8] mb-4 font-display text-lg">Navigate</p>
            <ul className="space-y-3">
              <li><Link to="/practice" className="text-base text-[#f5f2e8]/80 hover:text-[#f5f2e8] transition-colors">Practice</Link></li>
              <li><Link to="/about" className="text-base text-[#f5f2e8]/80 hover:text-[#f5f2e8] transition-colors">About</Link></li>
              <li><Link to="/resources" className="text-base text-[#f5f2e8]/80 hover:text-[#f5f2e8] transition-colors">Resources</Link></li>
              <li><Link to="/contact" className="text-base text-[#f5f2e8]/80 hover:text-[#f5f2e8] transition-colors">Contact</Link></li>
            </ul>
          </nav>
          
          {/* Practice Areas */}
          <nav className="md:col-span-3">
            <p className="font-medium text-[#f5f2e8] mb-4 font-display text-lg">Practice Areas</p>
            <ul className="space-y-3">
              <li><Link to="/practice/trusts-estates" className="text-base text-[#f5f2e8]/80 hover:text-[#f5f2e8] transition-colors">Trusts & Estates</Link></li>
              <li><Link to="/practice/elder-law" className="text-base text-[#f5f2e8]/80 hover:text-[#f5f2e8] transition-colors">Elder Law</Link></li>
              <li><Link to="/practice/ip-licensing" className="text-base text-[#f5f2e8]/80 hover:text-[#f5f2e8] transition-colors">IP Licensing</Link></li>
              <li><Link to="/practice/ip-asset-protection" className="text-base text-[#f5f2e8]/80 hover:text-[#f5f2e8] transition-colors">IP Asset Protection</Link></li>
              <li><Link to="/practice/real-estate" className="text-base text-[#f5f2e8]/80 hover:text-[#f5f2e8] transition-colors">Real Estate</Link></li>
              <li><Link to="/practice/emerging-tech" className="text-base text-[#f5f2e8]/80 hover:text-[#f5f2e8] transition-colors">Emerging Tech</Link></li>
            </ul>
          </nav>
          
          {/* Services */}
          <nav className="md:col-span-3">
            <p className="font-medium text-[#f5f2e8] mb-4 font-display text-lg">Services</p>
            <ul className="space-y-3">
              {specializedServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.path} 
                    className="text-base text-[#f5f2e8]/80 hover:text-[#f5f2e8] transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/contact" className="text-base text-[#f5f2e8]/80 hover:text-[#f5f2e8] transition-colors">
                  Request a Consultation
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
