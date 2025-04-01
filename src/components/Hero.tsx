import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Placeholder div - replace with video when available */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/30 to-navy/10 mix-blend-multiply z-10"></div>
        
        {/* Video element */}
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/legal-craftsmanship.mp4" type="video/mp4" />
        </video>
        
        {/* Frosted Glass Overlay */}
        <div 
          className="absolute inset-0 backdrop-blur-[8px] bg-white/20 z-20"
          style={{
            backdropFilter: 'blur(8px)',
          }}
        ></div>
      </div>
      
      {/* Content */}
      <div className="relative z-30 container mx-auto px-8 pt-48 pb-24 md:pt-56 md:pb-32 max-w-7xl">
        <div className="max-w-3xl">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-8 reveal leading-tight drop-shadow-sm">
            Legal Artistry for the Discerning
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 reveal max-w-2xl leading-relaxed drop-shadow-sm" style={{ transitionDelay: '0.1s' }}>
            Where timeless precision meets bold innovation. Experience legal craftsmanship redefined.
          </p>
          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <Link 
              to="/experience-the-difference" 
              className="inline-flex items-center bg-gold hover:bg-gold/90 text-white px-8 py-4 rounded-md text-lg font-medium transition-all shadow-lg hover:shadow-xl"
            >
              Experience the Difference
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

