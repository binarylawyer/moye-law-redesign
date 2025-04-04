import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Handle scroll effect for the hero section
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current && videoRef.current) {
        // Calculate parallax effect for horizontal movement
        const scrollY = window.scrollY;
        const offset = scrollY * 0.15; // Adjust the multiplier to control movement speed
        videoRef.current.style.transform = `translateX(${offset}px)`;
        
        // Adjust opacity based on scroll position to create "spaces within"
        const opacity = Math.max(0.6, 1 - (scrollY * 0.002));
        videoRef.current.style.opacity = opacity.toString();
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Initialize reveal animations
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
    <section className="hero-section pt-32 pb-16 md:pb-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 -translate-x-1/2 -translate-y-1/2 bg-gold opacity-5 rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 translate-x-1/3 translate-y-1/3 bg-navy opacity-5 rounded-full"></div>
      
      {/* Mondrian-inspired horizontal lines */}
      <div className="absolute top-1/4 left-0 w-full h-2 bg-gold opacity-10"></div>
      <div className="absolute bottom-1/4 left-0 w-full h-2 bg-navy opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-navy mb-6 leading-tight">
              Family Values,<br />
              <span className="text-gold">Future-Forward</span> Legal Solutions
            </h1>
            <p className="text-xl md:text-2xl text-navy/70 max-w-3xl mx-auto mb-8">
              Sophisticated legal strategies with personal attention, powered by innovative technology.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-3 font-sans text-lg text-white bg-gold hover:bg-gold/90 rounded-md transition-colors"
              >
                Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/experience-the-difference" 
                className="inline-flex items-center justify-center px-8 py-3 font-sans text-lg text-navy border-2 border-navy hover:bg-navy/5 rounded-md transition-colors"
              >
                Our Approach
              </Link>
            </div>
          </div>
          
          {/* Key Benefits Section - Addresses all three personas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-light-gray p-8 rounded-lg border border-navy/10 hover:border-navy/20 transition-all">
              <h3 className="font-display text-xl text-navy mb-3">For Innovators</h3>
              <p className="text-navy/70">Tech-forward legal strategies for protecting digital assets, IP, and startup equity.</p>
            </div>
            
            <div className="bg-light-gray p-8 rounded-lg border border-navy/10 hover:border-navy/20 transition-all">
              <h3 className="font-display text-xl text-navy mb-3">For Caregivers</h3>
              <p className="text-navy/70">Compassionate counsel for estate planning and elder care challenges for your family.</p>
            </div>
            
            <div className="bg-light-gray p-8 rounded-lg border border-navy/10 hover:border-navy/20 transition-all">
              <h3 className="font-display text-xl text-navy mb-3">For Legacy Builders</h3>
              <p className="text-navy/70">Sophisticated strategies for multigenerational wealth preservation and family governance.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

