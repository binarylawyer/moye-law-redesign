import React, { useRef, useEffect } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactHero from "../components/contact/ContactHero";
import ContactForm from "../components/contact/ContactForm";
import OfficeLocations from "../components/contact/OfficeLocations";
import PrivacyMessage from "../components/contact/PrivacyMessage";

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

  return (
    <>
      <Header />
      <main className="pt-48 bg-white">
        {/* Hero Section */}
        <section className="pb-16 md:pb-24">
          <div className="container mx-auto px-4">
            <div 
              ref={el => elementsRef.current[0] = el}
            >
              <ContactHero />
            </div>
          </div>
        </section>

        {/* Contact Form and Information */}
        <section className="py-8 md:py-16 bg-light-gray">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 max-w-6xl mx-auto">
              
              {/* Contact Form */}
              <div 
                ref={el => elementsRef.current[1] = el}
                className="reveal lg:col-span-7"
                style={{ transitionDelay: '0.2s' }}
              >
                <ContactForm />
              </div>
              
              {/* Contact Information */}
              <div 
                ref={el => elementsRef.current[2] = el}
                className="reveal lg:col-span-5"
                style={{ transitionDelay: '0.3s' }}
              >
                <OfficeLocations />
              </div>
            </div>
          </div>
        </section>
        
        {/* Confidentiality Statement */}
        <section className="py-8 md:py-16">
          <div className="container mx-auto px-4">
            <div 
              ref={el => elementsRef.current[3] = el}
              className="reveal max-w-3xl mx-auto"
              style={{ transitionDelay: '0.4s' }}
            >
              <PrivacyMessage />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
