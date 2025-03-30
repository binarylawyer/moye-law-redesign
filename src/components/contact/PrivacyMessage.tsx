
import React from 'react';
import { Link } from "react-router-dom";

interface PrivacyMessageProps {
  className?: string;
}

const PrivacyMessage: React.FC<PrivacyMessageProps> = ({ className }) => {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="font-serif text-2xl text-navy mb-4">Our Commitment to Privacy</h2>
      <p className="text-charcoal/80 mb-6">
        At Moye Law, we understand the sensitive nature of legal matters. All consultations and communications are protected by attorney-client privilege and held in the strictest confidence.
      </p>
      <Link 
        to="/practice"
        className="text-navy hover:text-gold transition-colors font-medium"
      >
        Learn more about our practice areas
      </Link>
    </div>
  );
};

export default PrivacyMessage;
