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
        <Link 
          to="/contact" 
          className="flex items-center justify-center w-full h-full text-black font-medium text-sm md:text-base hover:underline"
        >
          <Phone className="h-4 w-4 mr-2 text-[#D6001C]" />
          <span>{text}</span>
          <span className="font-bold ml-1">{phoneNumber}</span>
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