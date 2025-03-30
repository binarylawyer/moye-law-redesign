
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-light-gray text-charcoal py-64 px-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-32">
          {/* Logo and Tagline */}
          <div className="lg:col-span-1">
            <Link to="/" className="text-navy font-serif text-xl font-bold hover:text-navy/90 transition duration-200">
              Moye Law
            </Link>
            <p className="mt-16 text-sm">
              Family Values, Future-Forward Legal Solutions
            </p>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="font-serif font-bold text-navy mb-16 text-lg">Practice Areas</h3>
            <ul className="space-y-8">
              <li><Link to="/practice/estate-planning" className="hover:text-navy transition-colors">Estate Planning & Trusts</Link></li>
              <li><Link to="/practice/elder-law" className="hover:text-navy transition-colors">Elder Law</Link></li>
              <li><Link to="/practice/ip-digital-assets" className="hover:text-navy transition-colors">IP & Digital Assets</Link></li>
              <li><Link to="/practice/art-law" className="hover:text-navy transition-colors">Art Law</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-serif font-bold text-navy mb-16 text-lg">Resources</h3>
            <ul className="space-y-8">
              <li><Link to="/resources/guides" className="hover:text-navy transition-colors">Client Guides</Link></li>
              <li><Link to="/resources/faqs" className="hover:text-navy transition-colors">FAQs</Link></li>
              <li><Link to="/resources/blog" className="hover:text-navy transition-colors">Legal Insights</Link></li>
              <li><Link to="/client-portal" className="hover:text-navy transition-colors">Client Portal</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-bold text-navy mb-16 text-lg">Contact</h3>
            <ul className="space-y-8">
              <li><Link to="/contact" className="hover:text-navy transition-colors">Contact Us</Link></li>
              <li><a href="mailto:info@moye.law" className="hover:text-navy transition-colors">info@moye.law</a></li>
              <li><a href="tel:+12125551234" className="hover:text-navy transition-colors">(212) 555-1234</a></li>
              <li className="text-sm">123 Legal Avenue<br/>New York, NY 10001</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-64 pt-24 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-charcoal/80">
            © {new Date().getFullYear()} Moye Law. All rights reserved.
          </p>
          <div className="mt-16 md:mt-0 flex space-x-16">
            <Link to="/privacy" className="text-sm text-charcoal/80 hover:text-navy transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-charcoal/80 hover:text-navy transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
