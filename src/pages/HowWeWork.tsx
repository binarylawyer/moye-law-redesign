import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ConsultationCTA from '@/components/ConsultationCTA';
import { ArrowRight, Clock, Target, Zap, Shield, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowWeWork = () => {
  // Intersection Observer for reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));
    
    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="overflow-hidden pt-48">
        {/* Mondrian-style hero section with pure grid layout */}
        <section className="py-24 bg-white relative">
          {/* Pure Mondrian-style grid layout for the hero */}
          <div className="container mx-auto px-8 max-w-7xl">
            <div className="mondrian-grid mb-16">
              {/* Left red block */}
              <div className="col-span-3 mondrian-red h-64 md:h-96"></div>
              
              {/* Title in center white block */}
              <div className="col-span-6 bg-white p-6 flex flex-col justify-center items-center min-h-[16rem] md:min-h-[24rem]">
                <h1 className="reveal font-display text-3xl sm:text-4xl md:text-6xl text-black mb-4 md:mb-8 tracking-tight text-center">
                  How We Work
                </h1>
                <p className="reveal text-center text-base sm:text-lg text-black/80 max-w-md" style={{ transitionDelay: '0.1s' }}>
                  The intersection of traditional legal expertise and forward-thinking innovation.
                </p>
              </div>
              
              {/* Right yellow block */}
              <div className="col-span-3 mondrian-yellow h-64 md:h-96"></div>
            </div>
          </div>
          
          {/* Mondrian-style horizontal color bar */}
          <div className="h-8 w-full flex border-t-4 border-b-4 border-black">
            <div className="w-1/5 mondrian-red border-r-4 border-black"></div>
            <div className="w-2/5 bg-white border-r-4 border-black"></div>
            <div className="w-1/5 mondrian-blue border-r-4 border-black"></div>
            <div className="w-1/5 mondrian-light-yellow"></div>
          </div>
        </section>
        
        {/* Philosophy Section - Mondrian grid */}
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-8 max-w-7xl">
            <div className="mondrian-grid">
              {/* Blue title block */}
              <div className="col-span-4 mondrian-blue p-8 flex items-center">
                <h2 className="reveal font-display text-3xl md:text-4xl text-white">
                  Our Philosophy
                </h2>
              </div>
              
              {/* White content block */}
              <div className="col-span-8 bg-white p-8">
                <p className="reveal text-lg text-black/80 mb-6 leading-relaxed">
                  At Moye Law, we approach each client relationship with meticulous care. Your legal needs are unique and deserve solutions crafted with exceptional precision.
                </p>
                <p className="reveal text-lg text-black/80 leading-relaxed" style={{ transitionDelay: '0.1s' }}>
                  We thoroughly examine every aspect of your situation to create legal strategies of uncompromising quality. This is not merely law practice—it is legal artisanship.
                </p>
              </div>
              
              {/* Quote block with yellow background */}
              <div className="col-span-12 mondrian-light-yellow p-8 border-t-4 border-black flex justify-center items-center">
                <blockquote className="reveal text-2xl font-display italic text-black text-center max-w-3xl" style={{ transitionDelay: '0.2s' }}>
                  "We blend personalized attention with technological innovation to deliver legal solutions that are both traditional in values and forward-thinking in execution."
                </blockquote>
              </div>
            </div>
          </div>
        </section>
        
        {/* Process Section - Animated Mondrian-style blocks */}
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="reveal font-display text-4xl text-black mb-6">
                The Moye Experience
              </h2>
              <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
              <p className="reveal text-lg text-black/80 max-w-2xl mx-auto">
                Our distinctive process ensures results as remarkable as they are refined.
              </p>
            </div>
            
            {/* Process steps in Mondrian grid */}
            <div className="mondrian-grid mb-16">
              {/* Process Step 1 */}
              <div className="col-span-4 bg-white p-8 reveal" style={{ transitionDelay: '0.1s' }}>
                <div className="w-20 h-20 mondrian-red border-4 border-black flex items-center justify-center mb-8">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-2xl text-black mb-4">The Private Consultation</h3>
                <p className="text-black/80">
                  Your journey begins with an exclusive consultation where we explore your vision and objectives. We measure your precise needs and aspirations.
                </p>
              </div>
              
              {/* Yellow decorative block */}
              <div className="col-span-2 mondrian-yellow"></div>
              
              {/* Process Step 2 */}
              <div className="col-span-4 bg-white p-8 reveal" style={{ transitionDelay: '0.2s' }}>
                <div className="w-20 h-20 mondrian-blue border-4 border-black flex items-center justify-center mb-8">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-2xl text-black mb-4">Artisanal Strategy</h3>
                <p className="text-black/80">
                  We craft a bespoke legal strategy with meticulous care. Every detail is thoughtfully considered, every contingency elegantly addressed.
                </p>
              </div>
              
              {/* Light blue decorative block */}
              <div className="col-span-2 mondrian-light-blue"></div>
              
              {/* Red decorative block */}
              <div className="col-span-2 mondrian-red"></div>
              
              {/* Process Step 3 */}
              <div className="col-span-4 bg-white p-8 reveal" style={{ transitionDelay: '0.3s' }}>
                <div className="w-20 h-20 mondrian-light-yellow border-4 border-black flex items-center justify-center mb-8">
                  <Zap className="w-8 h-8 text-black" />
                </div>
                <h3 className="font-display text-2xl text-black mb-4">Flawless Execution</h3>
                <p className="text-black/80">
                  We execute with precision and confidence, drawing on decades of expertise and our innovative approach to deliver exceptional results.
                </p>
              </div>
              
              {/* Blue decorative block */}
              <div className="col-span-6 mondrian-blue"></div>
            </div>
          </div>
        </section>
        
        {/* Signature Approach Section in pure Mondrian style */}
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="reveal font-display text-4xl text-black mb-6">
                The Moye Law Signature
              </h2>
              <div className="w-24 h-1 bg-black mx-auto"></div>
            </div>
            
            {/* 2x2 Mondrian grid for approach features */}
            <div className="mondrian-grid mb-16">
              {/* Feature 1: Personalized Attention */}
              <div className="col-span-6 bg-white p-8 reveal flex flex-col" style={{ transitionDelay: '0.1s' }}>
                <div className="flex items-start mb-4">
                  <div className="w-16 h-16 mondrian-red border-4 border-black flex items-center justify-center flex-shrink-0 mr-6">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-black mb-2">Personalized Attention</h3>
                    <p className="text-black/80">
                      Your relationship with us is intimate and exclusive. We limit our client roster to ensure each receives our undivided attention.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Feature 2: Technological Innovation */}
              <div className="col-span-6 bg-white p-8 reveal flex flex-col" style={{ transitionDelay: '0.2s' }}>
                <div className="flex items-start mb-4">
                  <div className="w-16 h-16 mondrian-blue border-4 border-black flex items-center justify-center flex-shrink-0 mr-6">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-black mb-2">Technological Innovation</h3>
                    <p className="text-black/80">
                      We seamlessly blend tradition with innovation. Our AI-enhanced workflows deliver efficiency without sacrificing quality.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Feature 3: Discreet Handling - with yellow block */}
              <div className="col-span-3 mondrian-yellow h-64"></div>
              <div className="col-span-6 bg-white p-8 reveal flex flex-col" style={{ transitionDelay: '0.3s' }}>
                <div className="flex items-start mb-4">
                  <div className="w-16 h-16 mondrian-light-blue border-4 border-black flex items-center justify-center flex-shrink-0 mr-6">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-black mb-2">Discreet Handling</h3>
                    <p className="text-black/80">
                      Your affairs are managed with the utmost discretion and confidentiality—the same level of privacy you would expect from the finest institutions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-3 mondrian-red h-64"></div>
              
              {/* Feature 4: Legacy Preservation */}
              <div className="col-span-6 bg-white p-8 reveal flex flex-col" style={{ transitionDelay: '0.4s' }}>
                <div className="flex items-start mb-4">
                  <div className="w-16 h-16 mondrian-light-yellow border-4 border-black flex items-center justify-center flex-shrink-0 mr-6">
                    <CheckCircle className="w-8 h-8 text-black" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-black mb-2">Legacy Preservation</h3>
                    <p className="text-black/80">
                      We craft legal solutions that stand the test of time, protecting your legacy with reverence—built to endure for generations.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-6 mondrian-blue h-64"></div>
            </div>
            
            {/* CTA button in Mondrian style */}
            <div className="flex justify-center mb-16 reveal" style={{ transitionDelay: '0.5s' }}>
              <Link to="/contact" className="mondrian-button yellow text-xl">
                Schedule Your Private Consultation <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
        
        {/* Client Testimonial in Mondrian style */}
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-8 max-w-7xl">
            <div className="mondrian-grid">
              {/* Red left block */}
              <div className="col-span-2 mondrian-red"></div>
              
              {/* Testimonial in center */}
              <div className="col-span-8 bg-white p-12 reveal" style={{ transitionDelay: '0.1s' }}>
                <h2 className="font-display text-4xl text-black mb-12 text-center">Client Experiences</h2>
                
                <blockquote className="mondrian-highlight yellow-accent text-xl italic font-display mb-8 text-center">
                  "Working with Moye Law is like commissioning a masterpiece. Their attention to detail, personalized approach, and innovative solutions made complex estate planning feel effortless and elegant."
                </blockquote>
                
                <div className="flex flex-col items-center text-center">
                  <p className="text-black font-medium text-lg">Elizabeth R.</p>
                  <p className="text-black/60 text-sm">CEO & Philanthropist</p>
                </div>
              </div>
              
              {/* Blue right block */}
              <div className="col-span-2 mondrian-blue"></div>
            </div>
          </div>
        </section>
        
        {/* Authentic Mondrian-style grid composition for visual interest */}
        <section className="py-16 relative">
          <div className="container mx-auto px-8 max-w-7xl">
            <div className="mondrian-grid h-64">
              <div className="col-span-2 mondrian-red"></div>
              <div className="col-span-1 bg-white"></div>
              <div className="col-span-2 mondrian-light-blue"></div>
              <div className="col-span-1 mondrian-blue"></div>
              <div className="col-span-2 mondrian-light-yellow"></div>
              <div className="col-span-1 bg-white"></div>
              <div className="col-span-2 mondrian-yellow"></div>
              <div className="col-span-1 bg-white"></div>
            </div>
          </div>
        </section>
        
        <ConsultationCTA />
      </main>
      <Footer />
    </div>
  );
};

export default HowWeWork;
