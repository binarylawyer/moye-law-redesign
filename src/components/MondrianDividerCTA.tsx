import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

interface MondrianDividerCTAProps {
  text?: string;
  phoneNumber?: string;
}

const MondrianDividerCTA: React.FC<MondrianDividerCTAProps> = ({ 
  text = "Contact us for a private consultation", 
  phoneNumber = "(212) 555-0123"
}) => {
  return (
    <div className="mondrian-divider-cta">
      {/* Left side asymmetrical blocks */}
      <div className="mondrian-divider-cta-left">
        <div className="mondrian-divider-cta-left-1"></div>
        <div className="mondrian-divider-cta-left-2"></div>
      </div>
      
      {/* Center with contact CTA */}
      <div className="mondrian-divider-cta-center">
        <Link to="/contact" className="flex items-center font-medium text-sm hover:underline">
          <Phone className="h-3 w-3 mr-2" />
          {text} {phoneNumber}
        </Link>
      </div>
      
      {/* Right side asymmetrical blocks */}
      <div className="mondrian-divider-cta-right">
        <div className="mondrian-divider-cta-right-1"></div>
        <div className="mondrian-divider-cta-right-2"></div>
      </div>
    </div>
  );
};

export default MondrianDividerCTA; 