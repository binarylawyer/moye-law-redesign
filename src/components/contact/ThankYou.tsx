import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

interface ThankYouProps {
  persona: string;
}

const ThankYou: React.FC<ThankYouProps> = ({ persona }) => {
  // Customize message based on persona
  let personaSpecificMessage = "";
  let nextStepsMessage = "";

  switch(persona) {
    case "Protect My Startup's Future":
      personaSpecificMessage = "We've sent your free book on tech startup estate planning to your email. Our technology-focused attorneys will review your information and contact you within 1 business day.";
      nextStepsMessage = "In the meantime, you might want to gather any documents related to your intellectual property and business structure for our discussion.";
      break;
    case "Plan Care for My Aging Parent":
      personaSpecificMessage = "We've sent your free book on elder care planning to your email. Our elder care specialists will contact you within 1 business day to discuss the best options for your family.";
      nextStepsMessage = "Before our call, consider making a list of your most pressing concerns about your parent's care and current living situation.";
      break;
    case "Manage Multi-Generational Wealth":
      personaSpecificMessage = "We've sent your free book on wealth preservation strategies to your email. Our wealth preservation experts will analyze your situation and contact you within 1 business day.";
      nextStepsMessage = "To make our discussion more productive, you might want to gather information about your current estate plan and key assets.";
      break;
    default:
      personaSpecificMessage = "We've sent your free book to your email. Our team will contact you within 1 business day to discuss your needs.";
      nextStepsMessage = "We look forward to speaking with you soon.";
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="thank-you-container text-center py-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} className="mb-6">
        <div className="success-icon mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600">
          <Check className="h-8 w-8" />
        </div>
      </motion.div>
      
      <motion.h2 variants={itemVariants} className="text-3xl font-display font-bold text-navy mb-4">
        Thank You!
      </motion.h2>
      
      <motion.p variants={itemVariants} className="text-gray-600 mb-4">
        Your information has been successfully submitted.
      </motion.p>
      
      <motion.p variants={itemVariants} className="text-gray-700 mb-6">
        {personaSpecificMessage}
      </motion.p>
      
      <motion.div variants={itemVariants} className="what-happens-next bg-gray-50 border border-gray-200 rounded-lg p-6 max-w-md mx-auto text-left">
        <h3 className="text-xl font-display font-bold text-navy mb-4">What Happens Next</h3>
        <ol className="space-y-3 text-gray-700">
          <li className="flex">
            <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 bg-gold rounded-full text-white text-sm font-bold mr-3">1</span>
            <span>Check your email for your free book</span>
          </li>
          <li className="flex">
            <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 bg-gold rounded-full text-white text-sm font-bold mr-3">2</span>
            <span>A specialist attorney will contact you within 1 business day</span>
          </li>
          <li className="flex">
            <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 bg-gold rounded-full text-white text-sm font-bold mr-3">3</span>
            <span>We'll schedule a consultation focused on your specific needs</span>
          </li>
        </ol>
        
        <p className="mt-4 text-gray-700">
          {nextStepsMessage}
        </p>
      </motion.div>
      
      <motion.div variants={itemVariants} className="mt-8">
        <Link 
          to="/"
          className="inline-flex items-center text-gold hover:text-gold/80"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Return to Homepage
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default ThankYou; 