import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
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
    <div className="relative border-b-4 border-black" ref={heroRef}>
      {/* Video container - full height */}
      <div className="h-screen overflow-hidden relative">
        {/* Video with horizontal movement effect */}
        <div className="absolute inset-0 w-[120%] h-full overflow-hidden">
          <video 
            ref={videoRef}
            autoPlay 
            muted 
            loop 
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover transition-transform"
          >
            <source src="/videos/legal-craftsmanship.mp4" type="video/mp4" />
          </video>
          
          {/* Pure Mondrian style overlay with strong black lines */}
          <div className="absolute inset-0">
            {/* Vertical lines */}
            <div className="absolute top-0 left-1/4 h-full w-1 bg-black/70"></div>
            <div className="absolute top-0 right-1/3 h-full w-1 bg-black/70"></div>
            
            {/* Horizontal lines */}
            <div className="absolute top-1/3 left-0 right-0 h-1 bg-black/70"></div>
            <div className="absolute bottom-1/4 left-0 right-0 h-1 bg-black/70"></div>
            
            {/* Color blocks - more prominent Mondrian style */}
            <div className="absolute top-0 left-0 w-1/5 h-1/3 bg-[#D6001C]/30"></div>
            <div className="absolute bottom-0 right-0 w-1/4 h-1/2 bg-[#003B98]/30"></div>
            <div className="absolute top-1/3 right-1/4 w-1/6 h-1/4 bg-[#FFD500]/30"></div>
          </div>
          
          {/* Black overlay for readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      </div>
      
      {/* Bold Mondrian-inspired horizontal line directly under hero */}
      <div className="h-4 w-full flex border-t-4 border-black">
        <div className="w-1/5 bg-[#D6001C] border-r-4 border-black"></div>
        <div className="w-2/5 bg-white border-r-4 border-black"></div>
        <div className="w-1/5 bg-[#003B98] border-r-4 border-black"></div>
        <div className="w-1/5 bg-[#FFD500]"></div>
      </div>
      
      {/* Content positioned over the video */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-8">
          <div className="max-w-lg">
            <h1 className="font-serif text-4xl md:text-5xl text-white font-light mb-4 reveal">
              Mondrian-Inspired <span className="text-[#FFD500]">Legal Excellence</span>
            </h1>
            
            {/* 30 year anniversary highlight - bolder Mondrian style */}
            <div className="relative mt-8 ml-2 reveal border-l-4 border-[#D6001C]" style={{ transitionDelay: '0.2s' }}>
              <p className="text-white text-lg pl-3 py-1">
                <span className="font-medium">Established 1994</span> — <span className="text-[#FFD500]">30 years</span> of legal excellence
              </p>
            </div>
            
            {/* Add a subtle pointer to scroll */}
            <div className="mt-12 reveal flex items-center" style={{ transitionDelay: '0.3s' }}>
              <div className="h-1 w-8 bg-white/50"></div>
              <span className="text-white/70 text-sm pl-2">Scroll to explore</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

