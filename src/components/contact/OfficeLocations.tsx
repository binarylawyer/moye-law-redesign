
import React from 'react';
import { MapPin, Phone, Mail } from "lucide-react";

interface OfficeLocationsProps {
  className?: string;
}

const OfficeLocations: React.FC<OfficeLocationsProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="font-display text-2xl text-navy mb-6">Our Offices</h2>
      
      <div className="space-y-6 mb-8">
        {/* New York Office */}
        <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
          <h3 className="font-display text-lg text-navy mb-3">New York</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <MapPin className="w-5 h-5 text-gold mr-3 mt-1" />
              <p className="text-charcoal/80">
                123 Park Avenue<br />
                New York, NY 10001
              </p>
            </div>
          </div>
        </div>
        
        {/* Virginia Office */}
        <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
          <h3 className="font-display text-lg text-navy mb-3">Virginia</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <MapPin className="w-5 h-5 text-gold mr-3 mt-1" />
              <p className="text-charcoal/80">
                456 Main Street<br />
                Alexandria, VA 22314
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Direct Contact */}
      <h3 className="font-display text-lg text-navy mb-4">Direct Contact</h3>
      <div className="space-y-4">
        <div className="flex items-center">
          <Phone className="w-5 h-5 text-gold mr-3" />
          <a href="tel:+12125551234" className="text-charcoal/80 hover:text-navy transition-colors">
            (212) 555-1234
          </a>
        </div>
        <div className="flex items-center">
          <Mail className="w-5 h-5 text-gold mr-3" />
          <a href="mailto:contact@moye.law" className="text-charcoal/80 hover:text-navy transition-colors">
            contact@moye.law
          </a>
        </div>
      </div>
    </div>
  );
};

export default OfficeLocations;
