import React, { useRef, useEffect } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
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
      <main className="flex-grow bg-white">
        {/* Contact Form Section (NOW FIRST & More Compact) */}
        <section
          ref={el => elementsRef.current[0] = el}
          className="py-6 bg-light-gray reveal"
          style={{ transitionDelay: '0.1s' }}
        >
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
               <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                 <h2 className="font-display text-2xl text-navy mb-2">Get Personalized Legal Support</h2>
                 <p className="text-gray-600 mb-4">
                   Use our guided form to tell us about your specific needs and receive a free estate planning book.
                 </p>
                 <MultiStepForm />
               </div>
            </div>
          </div>
        </section>

        {/* Hero Section (NOW SECOND & Made MORE Compact) */}
        <section
          ref={el => elementsRef.current[1] = el}
          className="py-6 reveal"
          style={{ transitionDelay: '0.2s' }}
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

        {/* Office Locations and Trust Section (Remains Third) */}
        <section
          ref={el => elementsRef.current[2] = el}
          className="py-16 bg-white reveal"
          style={{ transitionDelay: '0.3s' }}
        >
           <div className="container mx-auto px-6">
             <div className="max-w-4xl mx-auto">
                <div className="mb-12">
                  <OfficeLocations />
                </div>

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
        
        {/* Confidentiality Statement (Remains Fourth) */}
        <section
          ref={el => elementsRef.current[3] = el}
          className="py-12 md:py-16 reveal"
          style={{ transitionDelay: '0.4s' }}
        >
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <PrivacyMessage />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
