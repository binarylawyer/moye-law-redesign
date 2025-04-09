import React, { useRef, useEffect } from 'react';
import Header from "../components/Header";
import ContactHero from "../components/contact/ContactHero";
import MultiStepForm from "../components/contact/MultiStepForm";
import OfficeLocations from "../components/contact/OfficeLocations";
import PrivacyMessage from "../components/contact/PrivacyMessage";
import { Clock, MessageSquare, ShieldCheck, User } from 'lucide-react';

const Contact: React.FC = () => {
  const elementsRef = useRef<Array<HTMLElement | null>>([]);
  
  // Animation for elements when they come into view
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    const elements = elementsRef.current.filter(Boolean) as HTMLElement[];
    elements.forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      elements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  // Trust indicators
  const trustIndicators = [
    {
      icon: <Clock className="h-6 w-6 text-gold" />,
      title: "24-Hour Response",
      description: "We respond to all inquiries within one business day"
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-gold" />,
      title: "Complete Confidentiality",
      description: "All communications protected by attorney-client privilege"
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-gold" />,
      title: "Personalized Approach",
      description: "Tailored legal solutions for your specific situation"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16 bg-white">
        {/* Hero Section (Now MORE Compact) - BACK AS FIRST SECTION */}
        <section
          ref={el => elementsRef.current[0] = el}
          className="py-6 reveal"
          style={{ transitionDelay: '0.1s' }}
        >
          <div className="container mx-auto px-6">
            {/* Centered & Shrunken Header Block */}
            <div className="max-w-3xl mx-auto mb-4">
              <div className="bg-white border-2 border-black p-6 md:p-8 flex items-center">
                <div>
                  <h1 className="font-display text-2xl md:text-3xl text-black mb-4">
                    Partner with Forward-Thinking Legal Counsel
                  </h1>
                  <p className="text-base text-black/80">
                    Schedule a confidential consultation to discuss how our tech-forward approach can protect your legal interests.
                  </p>
                </div>
              </div>
            </div>

            {/* Shrunken Persona Cards Below Header Block */}
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Tech Innovator (Shrunken) */}
                <div className="border-l-2 border-[#4D80D4] p-4 bg-[#4D80D4]/5 rounded-r-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-6 h-6 rounded-full bg-[#4D80D4]/20 flex items-center justify-center mr-2">
                      <User className="h-4 w-4 text-[#4D80D4]" />
                    </div>
                    <h3 className="font-display text-base font-medium">For Tech Innovators</h3>
                  </div>
                  <p className="text-sm text-charcoal/80">
                    Digital asset protection and IP strategies designed for founders and digital-first businesses.
                  </p>
                </div>

                {/* Executive Caregiver (Shrunken) */}
                <div className="border-l-2 border-[#D6001C] p-4 bg-[#D6001C]/5 rounded-r-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-6 h-6 rounded-full bg-[#D6001C]/20 flex items-center justify-center mr-2">
                      <User className="h-4 w-4 text-[#D6001C]" />
                    </div>
                    <h3 className="font-display text-base font-medium">For Caregivers</h3>
                  </div>
                  <p className="text-sm text-charcoal/80">
                    Comprehensive elder law and estate planning for those balancing career and family care responsibilities.
                  </p>
                </div>

                {/* Wealth Patriarch (Shrunken) */}
                <div className="border-l-2 border-[#FFEB80] p-4 bg-[#FFEB80]/5 rounded-r-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-6 h-6 rounded-full bg-[#FFEB80]/20 flex items-center justify-center mr-2">
                      <User className="h-4 w-4 text-black" />
                    </div>
                    <h3 className="font-display text-base font-medium">For Wealth Stewards</h3>
                  </div>
                  <p className="text-sm text-charcoal/80">
                    Sophisticated multi-generational planning and asset protection strategies for significant wealth preservation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section (Compact) - NOW SECOND SECTION AGAIN */}
        <section
          ref={el => elementsRef.current[1] = el}
          className="py-6 bg-light-gray reveal"
          style={{ transitionDelay: '0.2s' }}
        >
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
               <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                 <h2 className="font-display text-2xl text-navy mb-2">Quick 3-Step Form for Tailored Legal Guidance</h2>
                 <p className="text-gray-600 mb-4">
                   Our simple guided questionnaire takes just minutes to complete. You'll receive a personalized strategy and free estate planning book.
                 </p>
                 <MultiStepForm />
               </div>
            </div>
          </div>
        </section>

        {/* Office Locations and Trust Section (Remains Third) */}
        <section
          ref={el => elementsRef.current[2] = el}
          className="py-16 bg-white reveal"
          style={{ transitionDelay: '0.3s' }}
        >
           <div className="container mx-auto px-6">
             <div className="max-w-4xl mx-auto">
                {/* New York address only with phone number */}
                <div className="mb-12">
                  <h2 className="font-display text-2xl text-navy mb-4">Our Office</h2>
                  <div className="flex flex-wrap items-center gap-6">
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div className="text-gray-800">
                        <div>600 Mamaroneck Avenue</div>
                        <div>Suite 400</div>
                        <div>Harrison, NY 10528</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-gray-800">(800) 579-MOYE (6693)</span>
                    </div>
                  </div>
                </div>

                {/* Trust Indicators (unchanged) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {trustIndicators.map((indicator, index) => (
                    <div key={index} className="bg-white p-4 rounded-md border border-gray-100 flex items-start">
                      <div className="mr-3 mt-1">
                        {indicator.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-navy text-sm mb-1">{indicator.title}</h4>
                        <p className="text-xs text-charcoal/70">{indicator.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
             </div>
           </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
