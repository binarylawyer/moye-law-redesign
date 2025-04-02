import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <div className="w-full border-t-4 border-black mb-16 mt-24">
      <div className="container mx-auto relative">
        <div className="flex flex-col md:flex-row border-4 border-black bg-white">
          {/* Left Mondrian Grid */}
          <div className="hidden md:block w-1/4 relative">
            <div className="absolute top-0 left-0 w-full h-full grid grid-cols-2 grid-rows-4">
              <div className="bg-[#D6001C] border-b-4 border-r-4 border-black col-span-2 row-span-1"></div>
              <div className="bg-white border-b-4 border-r-4 border-black row-span-1"></div>
              <div className="bg-[#4D80D4] border-b-4 border-black row-span-1"></div>
              <div className="bg-[#FFEB80] border-r-4 border-b-4 border-black row-span-1"></div>
              <div className="bg-white border-b-4 border-black row-span-1"></div>
              <div className="bg-[#00A650] border-r-4 border-black col-span-1 row-span-1"></div>
              <div className="bg-white border-black col-span-1 row-span-1"></div>
            </div>
            {/* Mondrian-inspired small squares */}
            <div className="absolute top-8 left-8 w-6 h-6 bg-[#FFEB80] border-2 border-black z-10"></div>
            <div className="absolute bottom-12 right-12 w-8 h-8 bg-[#D6001C] border-2 border-black z-10"></div>
          </div>

          {/* Center Content */}
          <div className="w-full md:w-1/2 py-16 px-8 md:px-12 bg-white flex flex-col items-center justify-center text-center relative">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-black"></div>
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-black"></div>
            
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Protect Your Future –<br />Contact Us Today
            </h2>
            <div className="w-12 h-1 bg-black mb-6"></div>
            <p className="text-base md:text-lg mb-10 max-w-xl">
              Schedule a consultation to discuss your legal needs
              and discover how our family values and forward-
              thinking approach can benefit you.
            </p>
            
            <div className="flex items-center justify-center mb-8 border-2 border-black px-6 py-3 relative">
              {/* Red accent on year badge */}
              <div className="absolute top-0 left-0 w-1/4 h-1 bg-[#D6001C]"></div>
              <span className="text-xl md:text-2xl font-bold">30 YEARS</span>
              <span className="mx-3 text-xl">OF TRUSTED COUNSEL</span>
              {/* Blue accent on year badge */}
              <div className="absolute bottom-0 right-0 w-1/4 h-1 bg-[#4D80D4]"></div>
            </div>
            
            <Link 
              to="/contact" 
              className="bg-[#FFEB80] hover:bg-[#D6001C] hover:text-white text-black px-8 py-4 border-4 border-black inline-flex items-center transition-colors group relative"
            >
              <span className="font-serif text-lg mr-2">Request Your Free Consultation</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              
              {/* Accent corners on button */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-black"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-black"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-black"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-black"></div>
            </Link>
          </div>

          {/* Right Mondrian Grid */}
          <div className="hidden md:block w-1/4 relative">
            <div className="absolute top-0 left-0 w-full h-full grid grid-cols-2 grid-rows-4">
              <div className="bg-white border-b-4 border-l-4 border-black row-span-1"></div>
              <div className="bg-[#4D80D4] border-b-4 border-black row-span-1"></div>
              <div className="bg-[#00A650] border-b-4 border-l-4 border-black row-span-1"></div>
              <div className="bg-white border-b-4 border-black row-span-1"></div>
              <div className="bg-white border-b-4 border-l-4 border-black row-span-1"></div>
              <div className="bg-[#D6001C] border-b-4 border-black row-span-1"></div>
              <div className="bg-[#FFEB80] border-l-4 border-black col-span-2 row-span-1"></div>
            </div>
            {/* Mondrian-inspired small squares */}
            <div className="absolute top-1/4 right-8 w-6 h-6 bg-[#D6001C] border-2 border-black z-10"></div>
            <div className="absolute bottom-24 left-12 w-8 h-8 bg-[#4D80D4] border-2 border-black z-10"></div>
          </div>
        </div>
        
        {/* Free Consultation Badge */}
        <div className="absolute -bottom-8 right-8 md:right-16 bg-[#E6F4F1] text-black px-5 py-6 border-4 border-black shadow-lg transform translate-y-1/2 flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <div className="text-sm font-medium">Free</div>
          <div className="text-sm font-medium">Consultation</div>
          
          {/* Mondrian-inspired accents */}
          <div className="absolute top-0 left-0 w-2 h-1/3 bg-[#D6001C]"></div>
          <div className="absolute bottom-0 right-0 w-2 h-1/3 bg-[#4D80D4]"></div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction; 