import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle, Mail, Phone, MapPin, Code, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const ExperienceTheDifference = () => {
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
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section with Mondrian-inspired geometric design */}
        <section className="relative pt-48 pb-32 overflow-hidden bg-white">
          {/* Geometric design elements */}
          <div className="absolute top-0 left-0 w-32 h-full bg-[#D6001C]/80 -z-0"></div>
          <div className="absolute bottom-0 right-0 w-64 h-48 bg-[#FFD500]/80 -z-0"></div>
          <div className="absolute top-64 right-0 w-24 h-64 bg-[#003B98]/80 -z-0"></div>
          
          <div className="container mx-auto px-8 max-w-7xl relative z-10">
            <div className="max-w-4xl ml-40">
              <h1 className="reveal font-serif text-5xl md:text-7xl text-navy mb-10 leading-tight">
                Experience the <span className="text-gold">Difference</span>
              </h1>
              <p className="reveal text-xl md:text-2xl text-navy/70 mb-16 max-w-xl" style={{ transitionDelay: '0.1s' }}>
                Where legal innovation meets family values, creating a unique approach to law.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="py-24 bg-white border-t-4 border-navy">
          <div className="container mx-auto px-8 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              {/* Left: Image with Mondrian-inspired framing */}
              <div className="reveal relative" style={{ transitionDelay: '0.1s' }}>
                <div className="relative border-8 border-black p-4 bg-white">
                  <img 
                    src="/images/family.jpg" 
                    alt="Family values at Moye Law" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute top-0 left-0 w-24 h-8 bg-[#FFD500] -translate-x-4 -translate-y-4 -z-10"></div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-[#003B98] translate-x-4 translate-y-4 -z-10"></div>
                </div>
              </div>
              
              {/* Right: Text content */}
              <div className="reveal" style={{ transitionDelay: '0.2s' }}>
                <h2 className="font-serif text-4xl text-navy mb-6">Our Story</h2>
                <p className="text-xl text-navy/70 mb-8 leading-relaxed">
                  Moye Law began as a tech-focused IP firm founded by Christopher Moye, who recognized that his clients—innovators and creators—needed more than just tech protection. They needed comprehensive legal care for their families and legacies.
                </p>
                <p className="text-xl text-navy/70 mb-8 leading-relaxed">
                  When his daughter joined the firm, she brought a fresh perspective, designing a suite of legal services for the modern family—combining technical precision with genuine care.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Innovation & Tradition Section */}
        <section className="py-24 bg-light-gray border-t-4 border-[#D6001C]">
          <div className="container mx-auto px-8 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
              {/* Left: Text content */}
              <div className="reveal md:col-span-7" style={{ transitionDelay: '0.1s' }}>
                <h2 className="font-serif text-4xl text-navy mb-6">Technical Innovation, Family Values</h2>
                <p className="text-xl text-navy/70 mb-10 leading-relaxed">
                  Our approach blends technical expertise with family-centered care. This unique combination delivers legal solutions that protect what matters most, while leveraging cutting-edge tools and methods.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="border-l-4 border-[#003B98] pl-6">
                    <h3 className="font-serif text-2xl text-navy mb-3">Tech-Forward</h3>
                    <p className="text-navy/70">
                      AI-enhanced document analysis and secure digital systems that streamline complex processes without sacrificing quality.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-[#D6001C] pl-6">
                    <h3 className="font-serif text-2xl text-navy mb-3">Family-Centered</h3>
                    <p className="text-navy/70">
                      Personal attention, deep listening, and care that spans generations, ensuring your legal legacy endures.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Right: Geometric design with icons */}
              <div className="reveal md:col-span-5 relative" style={{ transitionDelay: '0.2s' }}>
                <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
                  <div className="bg-white p-8 border-4 border-black flex flex-col items-center justify-center text-center">
                    <Code size={48} className="text-[#003B98] mb-4" />
                    <p className="font-serif text-navy">IP Protection</p>
                  </div>
                  <div className="bg-[#FFD500] p-8 border-4 border-black flex flex-col items-center justify-center text-center">
                    <Shield size={48} className="text-navy mb-4" />
                    <p className="font-serif text-navy">Estate Planning</p>
                  </div>
                  <div className="bg-[#D6001C] p-8 border-4 border-black flex flex-col items-center justify-center text-center">
                    <Users size={48} className="text-white mb-4" />
                    <p className="font-serif text-white">Family Law</p>
                  </div>
                  <div className="bg-white p-8 border-4 border-black flex flex-col items-center justify-center text-center">
                    <div className="text-3xl mb-2 font-serif text-navy">+</div>
                    <p className="font-serif text-navy">Integrated Approach</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* How We're Different Section */}
        <section className="py-24 bg-white border-t-4 border-[#FFD500]">
          <div className="container mx-auto px-8 max-w-7xl">
            <h2 className="font-serif text-4xl text-navy mb-16 text-center">How We're Different</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Difference 1 */}
              <div className="reveal border-t-8 border-[#D6001C] pt-6" style={{ transitionDelay: '0.1s' }}>
                <h3 className="font-serif text-2xl text-navy mb-4">Traditional Firms</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-gray-400 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-lg text-navy/70">Separate specialists for different legal needs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-gray-400 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-lg text-navy/70">Paper-heavy processes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-gray-400 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-lg text-navy/70">One-size-fits-all templates</span>
                  </li>
                </ul>
              </div>
              
              {/* Difference 2 */}
              <div className="reveal border-t-8 border-[#003B98] pt-6" style={{ transitionDelay: '0.2s' }}>
                <h3 className="font-serif text-2xl text-navy mb-4">Tech-Only Solutions</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-gray-400 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-lg text-navy/70">Efficiency without personal connection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-gray-400 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-lg text-navy/70">Missing nuance and complex needs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-gray-400 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-lg text-navy/70">Limited human oversight</span>
                  </li>
                </ul>
              </div>
              
              {/* Difference 3 */}
              <div className="reveal border-t-8 border-[#FFD500] pt-6" style={{ transitionDelay: '0.3s' }}>
                <h3 className="font-serif text-2xl text-navy mb-4">The Moye Difference</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-1" />
                    <span className="text-lg text-navy/70">Integrated approach across all legal needs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-1" />
                    <span className="text-lg text-navy/70">Tech-enhanced + human-centered</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-1" />
                    <span className="text-lg text-navy/70">Family values with professional precision</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonial Section */}
        <section className="py-24 bg-light-gray border-t-4 border-black">
          <div className="container mx-auto px-8 max-w-7xl">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-4xl text-navy mb-12 text-center">Client Stories</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="reveal bg-white p-8 border-4 border-black" style={{ transitionDelay: '0.1s' }}>
                  <div className="border-l-4 border-[#D6001C] pl-6 mb-8">
                    <p className="text-navy/80 text-xl italic">
                      "They handled both our IP protection and family estate planning seamlessly. No other firm could integrate both with such care."
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-navy">Michael R.</p>
                    <p className="text-navy/50">Tech Founder</p>
                  </div>
                </div>
                
                <div className="reveal bg-white p-8 border-4 border-black" style={{ transitionDelay: '0.2s' }}>
                  <div className="border-l-4 border-[#003B98] pl-6 mb-8">
                    <p className="text-navy/80 text-xl italic">
                      "Their technology streamlined everything, but we never lost the personal touch that made us feel like family."
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-navy">Sarah J.</p>
                    <p className="text-navy/50">Family Business Owner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <section className="py-24 bg-white border-t-4 border-navy relative overflow-hidden">
          {/* Geometric design elements */}
          <div className="absolute top-0 right-0 w-32 h-full bg-[#003B98]/80 -z-0"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#FFD500]/80 -z-0"></div>
          
          <div className="container mx-auto px-8 max-w-7xl relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="reveal font-serif text-4xl text-navy mb-6">Experience It For Yourself</h2>
                <p className="reveal text-xl text-navy/70 max-w-xl mx-auto" style={{ transitionDelay: '0.1s' }}>
                  Begin your journey with Moye Law by scheduling a consultation.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                {/* Contact info */}
                <div className="md:col-span-5 reveal" style={{ transitionDelay: '0.1s' }}>
                  <div className="bg-white p-8 border-4 border-black">
                    <h3 className="font-serif text-2xl text-navy mb-6">Get in Touch</h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="h-10 w-10 bg-[#D6001C] flex items-center justify-center mr-4 flex-shrink-0">
                          <Phone className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-navy/50 mb-1">Call us</p>
                          <p className="text-navy font-medium">(212) 555-8000</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="h-10 w-10 bg-[#003B98] flex items-center justify-center mr-4 flex-shrink-0">
                          <Mail className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-navy/50 mb-1">Email us</p>
                          <p className="text-navy font-medium">contact@moyelaw.com</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="h-10 w-10 bg-[#FFD500] flex items-center justify-center mr-4 flex-shrink-0">
                          <MapPin className="h-5 w-5 text-navy" />
                        </div>
                        <div>
                          <p className="text-sm text-navy/50 mb-1">Visit us</p>
                          <p className="text-navy">100 Park Avenue, Suite 1500</p>
                          <p className="text-navy">New York, NY 10017</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Contact form */}
                <div className="md:col-span-7 reveal" style={{ transitionDelay: '0.2s' }}>
                  <form className="bg-white p-8 border-4 border-black">
                    <h3 className="font-serif text-2xl text-navy mb-6">Request a Consultation</h3>
                    
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="firstName" className="block text-navy/70 text-sm mb-2">First Name</label>
                          <input 
                            type="text" 
                            id="firstName" 
                            className="w-full px-4 py-3 border-2 border-navy focus:outline-none focus:border-[#D6001C]"
                            placeholder="Your first name"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-navy/70 text-sm mb-2">Last Name</label>
                          <input 
                            type="text" 
                            id="lastName" 
                            className="w-full px-4 py-3 border-2 border-navy focus:outline-none focus:border-[#D6001C]"
                            placeholder="Your last name"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-navy/70 text-sm mb-2">Email Address</label>
                        <input 
                          type="email" 
                          id="email" 
                          className="w-full px-4 py-3 border-2 border-navy focus:outline-none focus:border-[#D6001C]"
                          placeholder="your.email@example.com"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-navy/70 text-sm mb-2">Phone Number</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          className="w-full px-4 py-3 border-2 border-navy focus:outline-none focus:border-[#D6001C]"
                          placeholder="(123) 456-7890"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="service" className="block text-navy/70 text-sm mb-2">Service Interest</label>
                        <select 
                          id="service" 
                          className="w-full px-4 py-3 border-2 border-navy focus:outline-none focus:border-[#D6001C] bg-white"
                        >
                          <option value="">Select a service</option>
                          <option value="trusts-estates">Trusts & Estates</option>
                          <option value="elder-law">Elder Law</option>
                          <option value="intellectual-property">Intellectual Property</option>
                          <option value="art-law">Art Law</option>
                          <option value="emerging-tech">Emerging Tech</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-navy/70 text-sm mb-2">Your Message</label>
                        <textarea 
                          id="message" 
                          rows={4} 
                          className="w-full px-4 py-3 border-2 border-navy focus:outline-none focus:border-[#D6001C]"
                          placeholder="Tell us about your needs"
                        ></textarea>
                      </div>
                      
                      <div>
                        <button 
                          type="submit" 
                          className="w-full bg-[#003B98] hover:bg-navy text-white font-medium py-3 px-6 transition-colors border-4 border-black"
                        >
                          Request Consultation
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ExperienceTheDifference; 