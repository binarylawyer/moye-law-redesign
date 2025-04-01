import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ConsultationCTA from '@/components/ConsultationCTA';
import { ArrowRight, Sparkles, Clock, Gem, Target, Check } from 'lucide-react';
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
      <main className="overflow-hidden">
        {/* Hero Section - Dramatic and elegant */}
        <section className="relative pt-48 pb-40 bg-white overflow-hidden">
          {/* Abstract background elements */}
          <div className="absolute right-0 top-0 w-1/2 h-full bg-navy/3 rounded-l-[300px] -z-10 opacity-50 transform rotate-3"></div>
          <div className="absolute left-0 top-1/3 w-1/3 h-2/3 bg-gold/3 rounded-r-[400px] -z-10 opacity-40 transform -rotate-6"></div>
          <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-navy/5 -z-10 blur-2xl"></div>
          
          <div className="container mx-auto px-8 max-w-6xl">
            <div className="max-w-3xl mx-auto">
              <h1 className="reveal font-serif text-5xl md:text-6xl lg:text-7xl text-navy mb-10 text-center leading-tight">
                The Art of Legal Distinction
              </h1>
              <div className="w-24 h-1 bg-gold/40 mx-auto mb-12"></div>
              <p className="reveal text-center text-xl md:text-2xl text-charcoal/80 leading-relaxed mb-12 mx-auto max-w-2xl" style={{ transitionDelay: '0.1s' }}>
                Where timeless precision meets bold innovation. Experience legal craftsmanship redefined for the discerning client.
              </p>
            </div>
          </div>
        </section>
        
        {/* Philosophy Section - Luxury-inspired */}
        <section className="py-32 relative overflow-hidden">
          {/* Organic background elements */}
          <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-white via-navy/[0.01] to-white -z-10"></div>
          <div className="absolute -left-20 top-40 w-80 h-80 rounded-full bg-gold/[0.02] -z-10 blur-md"></div>
          
          <div className="container mx-auto px-8 max-w-7xl relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl relative z-10">
                  <img 
                    src="/images/family.jpg" 
                    alt="Sophisticated legal consultation" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent mix-blend-multiply"></div>
                </div>
                {/* Decorative frame element */}
                <div className="absolute top-6 left-6 right-6 bottom-6 border-2 border-gold/20 rounded-2xl -z-0"></div>
              </div>
              
              <div className="reveal" style={{ transitionDelay: '0.2s' }}>
                <h2 className="font-serif text-3xl md:text-4xl text-navy mb-8 leading-tight">Our Philosophy: <span className="text-gold">Curated Legal Excellence</span></h2>
                <div className="w-16 h-1 bg-gold/40 mb-8"></div>
                <p className="text-lg text-charcoal/80 mb-6 leading-relaxed">
                  At Moye Law, we approach each client relationship as an atelier approaches a bespoke creation. Your legal needs are unique—deserving of solutions crafted with exceptional care and precision.
                </p>
                <p className="text-lg text-charcoal/80 mb-10 leading-relaxed">
                  Like a couturier evaluating the finest fabrics, we meticulously examine every aspect of your situation to create legal strategies of uncompromising quality. This is not merely law practice—it is legal artisanship.
                </p>
                
                <div className="flex items-center space-x-4 text-lg text-navy/70 italic">
                  <Sparkles className="h-5 w-5 text-gold" />
                  <span>"Excellence is not an act, but our constant habit."</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Process Section - Luxury & Fashion inspired */}
        <section className="py-32 bg-white relative overflow-hidden">
          <div className="absolute top-1/4 right-0 w-1/3 h-2/3 bg-gray-50 rounded-l-[300px] -z-10"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-navy/[0.01] to-transparent -z-10"></div>
          
          <div className="container mx-auto px-8 max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="reveal font-serif text-3xl md:text-4xl text-navy mb-6">The Moye Experience</h2>
              <div className="w-16 h-1 bg-gold/40 mx-auto mb-8"></div>
              <p className="reveal text-lg text-charcoal/70" style={{ transitionDelay: '0.1s' }}>
                Our distinctive process is crafted with the same attention to detail as a limited-edition collection.
                Each phase is designed to ensure results as remarkable as they are refined.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-16">
              {/* Process Step 1 */}
              <div className="reveal" style={{ transitionDelay: '0.1s' }}>
                <div className="relative mb-8">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-navy/10 text-navy">
                    <Clock className="w-7 h-7" />
                  </div>
                  <div className="absolute top-8 left-8 h-[1px] w-32 bg-gold/30 hidden md:block"></div>
                </div>
                <h3 className="font-serif text-2xl text-navy mb-4">The Private Consultation</h3>
                <p className="text-charcoal/70 leading-relaxed">
                  Your journey begins with an exclusive consultation where we explore your vision and objectives. Like the first fitting for a bespoke garment, we measure your precise needs and aspirations.
                </p>
              </div>
              
              {/* Process Step 2 */}
              <div className="reveal" style={{ transitionDelay: '0.2s' }}>
                <div className="relative mb-8">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-navy/10 text-navy">
                    <Gem className="w-7 h-7" />
                  </div>
                  <div className="absolute top-8 left-8 h-[1px] w-32 bg-gold/30 hidden md:block"></div>
                </div>
                <h3 className="font-serif text-2xl text-navy mb-4">Artisanal Strategy</h3>
                <p className="text-charcoal/70 leading-relaxed">
                  We craft a bespoke legal strategy with the same meticulous care Prada applies to their signature pieces. Every detail is thoughtfully considered, every contingency elegantly addressed.
                </p>
              </div>
              
              {/* Process Step 3 */}
              <div className="reveal" style={{ transitionDelay: '0.3s' }}>
                <div className="relative mb-8">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-navy/10 text-navy">
                    <Target className="w-7 h-7" />
                  </div>
                </div>
                <h3 className="font-serif text-2xl text-navy mb-4">Flawless Execution</h3>
                <p className="text-charcoal/70 leading-relaxed">
                  We execute with precision and confidence, drawing on decades of expertise and our innovative approach to deliver results with the timeless excellence of a heritage luxury brand.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Signature Approach Section */}
        <section className="py-36 bg-navy/[0.03] relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-navy/[0.02] rounded-tl-[200px] -z-10"></div>
          <div className="absolute top-1/3 left-0 w-64 h-64 rounded-full bg-gold/[0.03] -z-10"></div>
          
          <div className="container mx-auto px-8 max-w-6xl">
            <div className="max-w-4xl mx-auto">
              <h2 className="reveal font-serif text-3xl md:text-4xl text-navy mb-8 text-center">The Moye Law Signature</h2>
              <div className="w-16 h-1 bg-gold/40 mx-auto mb-12"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
                {/* Left Column */}
                <div className="reveal space-y-8" style={{ transitionDelay: '0.1s' }}>
                  <div className="p-8 bg-white rounded-2xl shadow-sm border border-navy/5 hover:shadow-md transition-all">
                    <div className="flex items-start mb-4">
                      <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <Check className="w-4 h-4 text-gold" />
                      </div>
                      <h3 className="font-serif text-xl text-navy">Personalized Attention</h3>
                    </div>
                    <p className="text-charcoal/70 pl-12">
                      Like a private shopping experience at Gucci, your relationship with us is intimate and exclusive. We limit our client roster to ensure each receives our undivided attention.
                    </p>
                  </div>
                  
                  <div className="p-8 bg-white rounded-2xl shadow-sm border border-navy/5 hover:shadow-md transition-all">
                    <div className="flex items-start mb-4">
                      <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <Check className="w-4 h-4 text-gold" />
                      </div>
                      <h3 className="font-serif text-xl text-navy">Technological Innovation</h3>
                    </div>
                    <p className="text-charcoal/70 pl-12">
                      We seamlessly blend tradition with innovation, much like how Louis Vuitton honors its heritage while embracing contemporary design. Our AI-enhanced workflows deliver efficiency without sacrificing quality.
                    </p>
                  </div>
                </div>
                
                {/* Right Column */}
                <div className="reveal space-y-8" style={{ transitionDelay: '0.2s' }}>
                  <div className="p-8 bg-white rounded-2xl shadow-sm border border-navy/5 hover:shadow-md transition-all">
                    <div className="flex items-start mb-4">
                      <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <Check className="w-4 h-4 text-gold" />
                      </div>
                      <h3 className="font-serif text-xl text-navy">Discreet Handling</h3>
                    </div>
                    <p className="text-charcoal/70 pl-12">
                      Your affairs are managed with the utmost discretion and confidentiality—the same level of privacy you would expect from the ateliers of haute couture.
                    </p>
                  </div>
                  
                  <div className="p-8 bg-white rounded-2xl shadow-sm border border-navy/5 hover:shadow-md transition-all">
                    <div className="flex items-start mb-4">
                      <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <Check className="w-4 h-4 text-gold" />
                      </div>
                      <h3 className="font-serif text-xl text-navy">Legacy Preservation</h3>
                    </div>
                    <p className="text-charcoal/70 pl-12">
                      We craft legal solutions that stand the test of time, protecting your legacy with the same reverence Rolex applies to its timeless timepieces—built to endure for generations.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="reveal text-center" style={{ transitionDelay: '0.3s' }}>
                <Link to="/contact" className="inline-flex items-center bg-gold hover:bg-gold/90 text-white font-medium py-4 px-8 rounded-lg shadow-sm transition-all">
                  Schedule Your Private Consultation <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Client Testimonial - Elegant showcase */}
        <section className="py-36 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-navy/[0.01] to-transparent -z-10"></div>
          
          <div className="container mx-auto px-8 max-w-6xl">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="reveal font-serif text-3xl md:text-4xl text-navy mb-16">Client Experiences</h2>
              
              <div className="reveal py-12 px-8 md:px-16 bg-navy/[0.02] rounded-2xl border border-navy/5 shadow-sm relative" style={{ transitionDelay: '0.1s' }}>
                {/* Decorative quote mark */}
                <div className="absolute top-6 left-6 text-gold/20 text-8xl font-serif">"</div>
                <div className="absolute bottom-6 right-6 text-gold/20 text-8xl font-serif">"</div>
                
                <p className="text-navy/80 text-xl md:text-2xl italic font-serif mb-12 relative z-10">
                  Working with Moye Law is like commissioning a masterpiece. Their attention to detail, personalized approach, and innovative solutions made complex estate planning feel effortless and elegant.
                </p>
                
                <div className="flex flex-col items-center">
                  <p className="text-navy font-medium text-lg">Elizabeth R.</p>
                  <p className="text-charcoal/60 text-sm">CEO & Philanthrophist</p>
                </div>
              </div>
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
