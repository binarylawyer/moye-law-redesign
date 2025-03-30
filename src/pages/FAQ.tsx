
import React, { useRef, useEffect, useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ConsultationCTA from "../components/ConsultationCTA";
import { resources, Resource } from "../data/resourcesData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [faqResource, setFaqResource] = useState<Resource | null>(null);
  const [faqContent, setFaqContent] = useState<{ question: string; answer: string }[]>([]);
  const elementsRef = useRef<Array<HTMLElement | null>>([]);
  
  useEffect(() => {
    // Find FAQ resource
    const faq = resources.find(r => r.category === 'faq');
    setFaqResource(faq || null);
    
    // Extract FAQ content - parse the markdown content into Q&A format
    if (faq && faq.content) {
      const content = faq.content;
      const sections = content.split('###').filter(Boolean);
      
      const qaItems = sections.map(section => {
        const lines = section.trim().split('\n');
        const question = lines[0].trim();
        const answer = lines.slice(1).join('\n').trim();
        return { question, answer };
      });
      
      setFaqContent(qaItems);
    }
  }, []);
  
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
      <main className="pt-32 bg-white">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 
                ref={el => elementsRef.current[0] = el}
                className="reveal font-serif text-4xl md:text-5xl text-navy mb-6"
              >
                Frequently Asked Questions
              </h1>
              <p 
                ref={el => elementsRef.current[1] = el}
                className="reveal text-lg text-charcoal/80 mb-8"
                style={{ transitionDelay: '0.1s' }}
              >
                Find answers to common questions about estate planning, intellectual property protection, and our legal services.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-12 bg-light-gray">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm border border-gray-100 p-6 md:p-8">
              <h2 
                ref={el => elementsRef.current[2] = el}
                className="reveal font-serif text-2xl text-navy mb-6"
                style={{ transitionDelay: '0.2s' }}
              >
                {faqResource?.title || "Common Questions"}
              </h2>
              
              <Accordion type="single" collapsible className="w-full">
                {faqContent.map((item, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    ref={el => elementsRef.current[3 + index] = el}
                    className="reveal border-b border-gray-200"
                    style={{ transitionDelay: `${0.3 + (index * 0.05)}s` }}
                  >
                    <AccordionTrigger className="text-left font-medium text-navy py-4">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-charcoal/80 py-4">
                      <div className="prose prose-sm max-w-none">
                        {item.answer.split('\n').map((paragraph, i) => (
                          <p key={i} className="mb-4">{paragraph}</p>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              
              {faqContent.length === 0 && (
                <p className="text-center text-charcoal/60 py-8">FAQs are currently being updated.</p>
              )}
            </div>
          </div>
        </section>
        
        {/* Additional Help */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div 
              ref={el => elementsRef.current[faqContent.length + 3] = el}
              className="reveal max-w-3xl mx-auto text-center"
              style={{ transitionDelay: `${0.4 + (faqContent.length * 0.05)}s` }}
            >
              <h2 className="font-serif text-2xl text-navy mb-4">
                Didn't Find Your Answer?
              </h2>
              <p className="text-charcoal/80 mb-8">
                Our team is ready to address your specific questions and concerns. 
                Contact us for personalized assistance.
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

export default FAQ;
