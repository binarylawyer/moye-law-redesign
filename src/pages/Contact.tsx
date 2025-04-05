import React, { useRef, useEffect } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/contact/ContactForm";
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

  // Client testimonials for trust building
  const testimonials = [
    {
      quote: "Our entire estate plan was handled with efficiency and true digital-first approach. Highly recommended for tech entrepreneurs.",
      author: "Alex C., Founder & CEO",
      persona: "Tech Innovator"
    },
    {
      quote: "They made complex legal issues around my parents' care approachable and gave me peace of mind during a difficult time.",
      author: "Barbara M., Financial Executive",
      persona: "Executive Caregiver"
    },
    {
      quote: "Their sophisticated approach to wealth preservation across generations aligned perfectly with my family's needs.",
      author: "David R., Family Office Director",
      persona: "Wealth Patriarch"
    }
  ];

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
      <main className="flex-grow pt-32 bg-white">
        {/* Hero Section with Mondrian-inspired design */}
        <section 
          ref={el => elementsRef.current[0] = el}
          className="py-16 md:py-24 reveal"
        >
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Left side with Mondrian-style blocks */}
              <div className="md:col-span-5 relative">
                <div className="absolute top-0 left-0 w-full h-4 bg-[#D6001C]"></div>
                <div className="absolute bottom-0 left-0 w-4 h-full bg-[#4D80D4]"></div>
                <div className="absolute bottom-0 right-0 w-full h-4 bg-[#FFEB80]"></div>
                <div className="bg-white border-4 border-black p-8 md:p-12 min-h-[300px] flex items-center">
                  <div>
                    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-black mb-6">
                      Partner with Forward-Thinking Legal Counsel
                    </h1>
                    <p className="text-xl text-black/80">
                      Schedule a confidential consultation to discuss how our tech-forward approach can protect your legal interests.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Right side with value proposition */}
              <div className="md:col-span-7 flex flex-col justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Tech Innovator */}
                  <div className="border-l-4 border-[#4D80D4] p-6 bg-[#4D80D4]/5 rounded-r-md">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-[#4D80D4]/20 flex items-center justify-center mr-3">
                        <User className="h-5 w-5 text-[#4D80D4]" />
                      </div>
                      <h3 className="font-display text-lg">For Tech Innovators</h3>
                    </div>
                    <p className="text-charcoal/80">
                      Digital asset protection and IP strategies designed for founders and digital-first businesses.
                    </p>
                  </div>
                  
                  {/* Executive Caregiver */}
                  <div className="border-l-4 border-[#D6001C] p-6 bg-[#D6001C]/5 rounded-r-md">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-[#D6001C]/20 flex items-center justify-center mr-3">
                        <User className="h-5 w-5 text-[#D6001C]" />
                      </div>
                      <h3 className="font-display text-lg">For Caregivers</h3>
                    </div>
                    <p className="text-charcoal/80">
                      Comprehensive elder law and estate planning for those balancing career and family care responsibilities.
                    </p>
                  </div>
                  
                  {/* Wealth Patriarch */}
                  <div className="border-l-4 border-[#FFEB80] p-6 bg-[#FFEB80]/5 rounded-r-md sm:col-span-2">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-[#FFEB80]/20 flex items-center justify-center mr-3">
                        <User className="h-5 w-5 text-black" />
                      </div>
                      <h3 className="font-display text-lg">For Wealth Stewards</h3>
                    </div>
                    <p className="text-charcoal/80">
                      Sophisticated multi-generational planning and asset protection strategies for significant wealth preservation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form and Trust Building Section */}
        <section className="py-16 bg-light-gray">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
              
              {/* Contact Form */}
              <div 
                ref={el => elementsRef.current[1] = el}
                className="reveal lg:col-span-7"
                style={{ transitionDelay: '0.2s' }}
              >
                <ContactForm />
                
                {/* Trust Indicators */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
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
              
              {/* Right Side: Office Locations and Testimonials */}
              <div 
                ref={el => elementsRef.current[2] = el}
                className="reveal lg:col-span-5"
                style={{ transitionDelay: '0.3s' }}
              >
                {/* Office Locations */}
                <OfficeLocations className="mb-8" />
                
                {/* Testimonials */}
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                  <h3 className="font-display text-xl text-navy mb-4">Client Experiences</h3>
                  <div className="space-y-6">
                    {testimonials.map((testimonial, index) => (
                      <div key={index} className="relative">
                        <blockquote className="italic text-charcoal/80 text-sm mb-2 pl-4 border-l-2 border-gold">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="flex justify-between items-center">
                          <p className="text-sm font-medium text-navy">{testimonial.author}</p>
                          <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                            {testimonial.persona}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Confidentiality Statement */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-6">
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
    </div>
  );
};

export default Contact;
