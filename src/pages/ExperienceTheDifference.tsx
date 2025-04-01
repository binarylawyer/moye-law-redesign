import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';
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
        {/* Hero Section with large circular elements */}
        <section className="relative pt-48 pb-32 overflow-hidden bg-gold/10">
          {/* Circular design elements */}
          <div className="absolute top-40 left-0 w-[500px] h-[500px] rounded-full bg-white/30 -translate-x-1/2 -z-0"></div>
          <div className="absolute top-20 right-0 w-[300px] h-[300px] rounded-full bg-navy/5 translate-x-1/3 -z-0"></div>
          <div className="absolute bottom-0 left-1/4 w-[200px] h-[200px] rounded-full bg-gold/20 -z-0"></div>
          
          <div className="container mx-auto px-8 max-w-7xl relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="reveal font-serif text-5xl md:text-7xl text-navy mb-10 leading-tight">
                Experience the <span className="text-gold">Difference</span>
              </h1>
              <p className="reveal text-xl md:text-2xl text-navy/70 mb-16" style={{ transitionDelay: '0.1s' }}>
                Where traditional values meet innovation, creating a legal experience unlike any other.
              </p>
            </div>
          </div>
        </section>
        
        {/* First Feature Section */}
        <section className="py-28 bg-white">
          <div className="container mx-auto px-8 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
              {/* Left: Large circle with image */}
              <div className="reveal relative" style={{ transitionDelay: '0.1s' }}>
                <div className="relative z-10">
                  <div className="aspect-square rounded-full overflow-hidden border-[16px] border-gold/10 shadow-2xl">
                    <img 
                      src="/images/family.jpg" 
                      alt="Family values at Moye Law" 
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-navy/30 to-transparent mix-blend-multiply"></div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-28 h-28 rounded-full bg-gold/20 -z-0 translate-x-1/4 -translate-y-1/4"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 rounded-full border-4 border-navy/10 -z-0 -translate-x-1/4 translate-y-1/4"></div>
              </div>
              
              {/* Right: Text content */}
              <div className="reveal" style={{ transitionDelay: '0.2s' }}>
                <h2 className="font-serif text-4xl text-navy mb-6">Family Values</h2>
                <p className="text-xl text-navy/70 mb-10 leading-relaxed">
                  At Moye Law, we treat every client like family. This isn't just a tagline—it's ingrained in our very approach. We limit our client roster deliberately to ensure each relationship receives the focused attention it deserves.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-1" />
                    <span className="text-lg text-navy/70">Personal attention from senior attorneys</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-1" />
                    <span className="text-lg text-navy/70">Responsiveness within hours, not days</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-1" />
                    <span className="text-lg text-navy/70">Multi-generational commitment to your legacy</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Second Feature Section */}
        <section className="py-28 bg-navy/[0.02]">
          <div className="container mx-auto px-8 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
              {/* Left: Text content (order swapped on mobile) */}
              <div className="reveal md:order-1 order-2" style={{ transitionDelay: '0.1s' }}>
                <h2 className="font-serif text-4xl text-navy mb-6">Forward-Thinking Innovation</h2>
                <p className="text-xl text-navy/70 mb-10 leading-relaxed">
                  Like an artisan who evolves with the times while honoring tradition, we leverage technology to enhance—not replace—the human touch that makes our practice exceptional.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-1" />
                    <span className="text-lg text-navy/70">AI-enhanced document review for unmatched accuracy</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-1" />
                    <span className="text-lg text-navy/70">Digital security protocols that exceed industry standards</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-1" />
                    <span className="text-lg text-navy/70">Streamlined processes that save time without sacrificing quality</span>
                  </li>
                </ul>
              </div>
              
              {/* Right: Large circle with image */}
              <div className="reveal relative md:order-2 order-1" style={{ transitionDelay: '0.2s' }}>
                <div className="relative z-10">
                  <div className="aspect-square rounded-full overflow-hidden border-[16px] border-navy/5 shadow-2xl">
                    <img 
                      src="https://source.unsplash.com/random/800x800/?technology,luxury" 
                      alt="Innovative legal technology" 
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tl from-navy/30 to-transparent mix-blend-multiply"></div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-28 h-28 rounded-full bg-gold/20 -z-0 -translate-x-1/4 -translate-y-1/4"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 rounded-full border-4 border-navy/10 -z-0 translate-x-1/4 translate-y-1/4"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Third Feature Section */}
        <section className="py-28 bg-white">
          <div className="container mx-auto px-8 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
              {/* Left: Large circle with image */}
              <div className="reveal relative" style={{ transitionDelay: '0.1s' }}>
                <div className="relative z-10">
                  <div className="aspect-square rounded-full overflow-hidden border-[16px] border-gold/10 shadow-2xl">
                    <img 
                      src="https://source.unsplash.com/random/800x800/?luxury,service" 
                      alt="Premium client experience" 
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-navy/30 to-transparent mix-blend-multiply"></div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-28 h-28 rounded-full bg-navy/5 -z-0 translate-x-1/4 -translate-y-1/4"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 rounded-full border-4 border-gold/20 -z-0 -translate-x-1/4 translate-y-1/4"></div>
              </div>
              
              {/* Right: Text content */}
              <div className="reveal" style={{ transitionDelay: '0.2s' }}>
                <h2 className="font-serif text-4xl text-navy mb-6">Bespoke Legal Strategies</h2>
                <p className="text-xl text-navy/70 mb-10 leading-relaxed">
                  We don't believe in off-the-shelf solutions. Like a master tailor, we craft legal strategies meticulously calibrated to your unique situation, goals, and vision for the future.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-1" />
                    <span className="text-lg text-navy/70">Custom-crafted legal solutions for your specific needs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-1" />
                    <span className="text-lg text-navy/70">Comprehensive approach spanning multiple practice areas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-1" />
                    <span className="text-lg text-navy/70">Future-proofed strategies that evolve with you</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonial Section */}
        <section className="py-28 bg-navy/[0.02]">
          <div className="container mx-auto px-8 max-w-7xl">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="reveal font-serif text-4xl text-navy mb-6">What Our Clients Say</h2>
              <div className="w-16 h-1 bg-gold/40 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="reveal p-10 bg-white rounded-3xl shadow-sm border border-navy/5 relative" style={{ transitionDelay: '0.1s' }}>
                <div className="absolute -top-5 -left-5 text-gold/20 text-7xl font-serif">"</div>
                <p className="text-navy/70 text-lg mb-8 relative z-10">
                  Moye Law transformed our estate planning from a stressful process into a reassuring experience. Their innovative approach and genuine care made all the difference.
                </p>
                <div className="flex items-center">
                  <div className="mr-4 h-12 w-12 rounded-full bg-navy/10 flex items-center justify-center">
                    <span className="text-navy font-serif">MR</span>
                  </div>
                  <div>
                    <p className="font-medium text-navy">Michael R.</p>
                    <p className="text-navy/50 text-sm">Tech Executive</p>
                  </div>
                </div>
              </div>
              
              {/* Testimonial 2 */}
              <div className="reveal p-10 bg-white rounded-3xl shadow-sm border border-navy/5 relative" style={{ transitionDelay: '0.2s' }}>
                <div className="absolute -top-5 -left-5 text-gold/20 text-7xl font-serif">"</div>
                <p className="text-navy/70 text-lg mb-8 relative z-10">
                  The level of personal attention we received was exceptional. They took time to understand our family dynamics and crafted solutions perfectly aligned with our values.
                </p>
                <div className="flex items-center">
                  <div className="mr-4 h-12 w-12 rounded-full bg-navy/10 flex items-center justify-center">
                    <span className="text-navy font-serif">SJ</span>
                  </div>
                  <div>
                    <p className="font-medium text-navy">Sarah J.</p>
                    <p className="text-navy/50 text-sm">Family Business Owner</p>
                  </div>
                </div>
              </div>
              
              {/* Testimonial 3 */}
              <div className="reveal p-10 bg-white rounded-3xl shadow-sm border border-navy/5 relative" style={{ transitionDelay: '0.3s' }}>
                <div className="absolute -top-5 -left-5 text-gold/20 text-7xl font-serif">"</div>
                <p className="text-navy/70 text-lg mb-8 relative z-10">
                  Their blend of traditional values and forward-thinking technology provided unmatched efficiency. The peace of mind they delivered was invaluable.
                </p>
                <div className="flex items-center">
                  <div className="mr-4 h-12 w-12 rounded-full bg-navy/10 flex items-center justify-center">
                    <span className="text-navy font-serif">DK</span>
                  </div>
                  <div>
                    <p className="font-medium text-navy">David K.</p>
                    <p className="text-navy/50 text-sm">Investor & Philanthropist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <section className="py-28 bg-gold/10 relative overflow-hidden">
          {/* Circular design elements */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-white/40 translate-x-1/2 -translate-y-1/2 -z-0"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-navy/5 -translate-x-1/3 translate-y-1/3 -z-0"></div>
          
          <div className="container mx-auto px-8 max-w-7xl relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="reveal font-serif text-4xl text-navy mb-6">Experience It For Yourself</h2>
                <p className="reveal text-xl text-navy/70" style={{ transitionDelay: '0.1s' }}>
                  Begin your journey with Moye Law by scheduling a private consultation.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                {/* Contact info */}
                <div className="md:col-span-5 reveal" style={{ transitionDelay: '0.1s' }}>
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-navy/5 h-full">
                    <h3 className="font-serif text-2xl text-navy mb-6">Get in Touch</h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center mr-4 flex-shrink-0">
                          <Phone className="h-5 w-5 text-gold" />
                        </div>
                        <div>
                          <p className="text-sm text-navy/50 mb-1">Call us</p>
                          <p className="text-navy font-medium">(212) 555-8000</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center mr-4 flex-shrink-0">
                          <Mail className="h-5 w-5 text-gold" />
                        </div>
                        <div>
                          <p className="text-sm text-navy/50 mb-1">Email us</p>
                          <p className="text-navy font-medium">contact@moyelaw.com</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center mr-4 flex-shrink-0">
                          <MapPin className="h-5 w-5 text-gold" />
                        </div>
                        <div>
                          <p className="text-sm text-navy/50 mb-1">Visit us</p>
                          <p className="text-navy">100 Park Avenue, Suite1500</p>
                          <p className="text-navy">New York, NY 10017</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 pt-8 border-t border-navy/10">
                      <p className="text-navy/70 text-sm">
                        All consultations are confidential and protected by attorney-client privilege.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Contact form */}
                <div className="md:col-span-7 reveal" style={{ transitionDelay: '0.2s' }}>
                  <form className="bg-white p-8 rounded-3xl shadow-sm border border-navy/5">
                    <h3 className="font-serif text-2xl text-navy mb-6">Request a Consultation</h3>
                    
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="firstName" className="block text-navy/70 text-sm mb-2">First Name</label>
                          <input 
                            type="text" 
                            id="firstName" 
                            className="w-full px-4 py-3 rounded-lg border border-navy/10 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/50"
                            placeholder="Your first name"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-navy/70 text-sm mb-2">Last Name</label>
                          <input 
                            type="text" 
                            id="lastName" 
                            className="w-full px-4 py-3 rounded-lg border border-navy/10 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/50"
                            placeholder="Your last name"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-navy/70 text-sm mb-2">Email Address</label>
                        <input 
                          type="email" 
                          id="email" 
                          className="w-full px-4 py-3 rounded-lg border border-navy/10 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/50"
                          placeholder="your.email@example.com"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-navy/70 text-sm mb-2">Phone Number</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          className="w-full px-4 py-3 rounded-lg border border-navy/10 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/50"
                          placeholder="(123) 456-7890"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="service" className="block text-navy/70 text-sm mb-2">Service Interest</label>
                        <select 
                          id="service" 
                          className="w-full px-4 py-3 rounded-lg border border-navy/10 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/50 bg-white"
                        >
                          <option value="">Select a service</option>
                          <option value="estate-planning">Estate Planning</option>
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
                          className="w-full px-4 py-3 rounded-lg border border-navy/10 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/50"
                          placeholder="Tell us about your needs"
                        ></textarea>
                      </div>
                      
                      <div>
                        <button 
                          type="submit" 
                          className="w-full bg-gold hover:bg-gold/90 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-sm"
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