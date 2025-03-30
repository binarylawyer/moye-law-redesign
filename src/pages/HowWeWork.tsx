
import React, { useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ConsultationCTA from "../components/ConsultationCTA";
import { resources } from "../data/resourcesData";

const HowWeWork: React.FC = () => {
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

  // Process steps data
  const processSteps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "We begin with a comprehensive consultation to understand your unique situation, goals, and concerns. This confidential meeting helps us identify the key legal issues that need to be addressed."
    },
    {
      number: "02",
      title: "Assessment & Strategy",
      description: "Our team conducts a thorough assessment of your legal needs and develops a tailored strategy. We evaluate existing documents, identify potential risks, and create a roadmap for achieving your objectives."
    },
    {
      number: "03",
      title: "Custom Solution Design",
      description: "Based on our assessment, we design custom legal solutions specifically for your situation. This may include drafting new documents, revising existing ones, or creating complex structures to address your needs."
    },
    {
      number: "04",
      title: "Implementation",
      description: "We guide you through the implementation process, ensuring all documents are properly executed and all necessary steps are taken. This includes coordinating with financial advisors, accountants, and other professionals as needed."
    },
    {
      number: "05",
      title: "Ongoing Support & Review",
      description: "Legal needs evolve over time. We provide ongoing support and periodic reviews to ensure your legal strategies remain aligned with your changing circumstances and adapt to new laws and regulations."
    },
  ];

  return (
    <>
      <Header />
      <main className="pt-20"> {/* Added top padding to move content down */}
        {/* Hero Section with updated spacing to match other pages */}
        <section className="bg-light-gray py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 
                ref={el => elementsRef.current[0] = el}
                className="reveal font-serif text-4xl md:text-5xl lg:text-6xl text-navy mb-6"
              >
                How We Work
              </h1>
              <p 
                ref={el => elementsRef.current[1] = el}
                className="reveal text-lg md:text-xl text-charcoal/80 mb-8 max-w-2xl mx-auto"
                style={{ transitionDelay: '0.1s' }}
              >
                Our process is designed to provide clarity, confidence, and customized solutions for your unique legal needs. We combine personal attention with innovative approaches to deliver exceptional results.
              </p>
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 
                ref={el => elementsRef.current[2] = el}
                className="reveal font-serif text-3xl text-navy mb-12 text-center"
                style={{ transitionDelay: '0.2s' }}
              >
                Our Client Process
              </h2>
              
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-px h-full w-px bg-navy/20"></div>
                
                {/* Timeline items - updated circle colors to ocean-blue (cerulean) */}
                {processSteps.map((step, index) => (
                  <div 
                    key={index}
                    ref={el => elementsRef.current[3 + index] = el}
                    className={`reveal mb-16 last:mb-0 relative flex items-start ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                    style={{ transitionDelay: `${0.3 + (index * 0.1)}s` }}
                  >
                    {/* Circle marker - changed to ocean-blue (cerulean) from navy */}
                    <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 -mt-1 w-12 h-12 rounded-full bg-ocean-blue z-10 flex items-center justify-center">
                      <span className="text-white font-serif">{step.number}</span>
                    </div>
                    
                    {/* Content */}
                    <div className={`ml-20 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                    }`}>
                      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <h3 className="font-serif text-xl text-navy mb-3">{step.title}</h3>
                        <p className="text-charcoal/80">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Philosophy */}
        <section className="py-16 md:py-24 bg-light-gray">
          <div className="container mx-auto px-4">
            <div 
              ref={el => elementsRef.current[processSteps.length + 3] = el}
              className="reveal max-w-3xl mx-auto"
              style={{ transitionDelay: `${0.4 + (processSteps.length * 0.1)}s` }}
            >
              <h2 className="font-serif text-3xl text-navy mb-8 text-center">Our Philosophy</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                  <h3 className="font-serif text-xl text-navy mb-3">Personal Attention</h3>
                  <p className="text-charcoal/80">We take the time to understand your unique needs and provide personalized solutions.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                  <h3 className="font-serif text-xl text-navy mb-3">Innovative Approach</h3>
                  <p className="text-charcoal/80">We leverage technology and creative strategies to address complex legal challenges.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                  <h3 className="font-serif text-xl text-navy mb-3">Long-term Relationship</h3>
                  <p className="text-charcoal/80">We build lasting relationships to support your evolving legal needs over time.</p>
                </div>
              </div>
              
              <p className="text-center text-charcoal/80">
                At Moye Law, we believe that effective legal counsel combines deep expertise with clear communication. 
                We're committed to making complex legal concepts accessible and ensuring you have complete confidence 
                in the strategies we develop together.
              </p>
            </div>
          </div>
        </section>

        <ConsultationCTA />
      </main>
      <Footer />
    </>
  );
};

export default HowWeWork;
