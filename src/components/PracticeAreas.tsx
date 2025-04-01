import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const PracticeAreas = () => {
  // Updated practice areas with concise descriptions
  const practiceAreas = [
    {
      id: "estate-planning",
      title: "Estate Planning",
      description: "Wills, trusts & legacy planning for your family's future in NYC and Westchester.",
      path: "/practice/estate-planning",
      color: "bg-white",
      textSize: "text-3xl",
      width: "w-full lg:w-3/5",
      borderColor: "border-l-2 border-b-2 border-[#D6001C]",
      marginLeft: "ml-0",
      marginTop: "mt-0"
    },
    {
      id: "elder-law",
      title: "Elder Law",
      description: "Compassionate legal guidance for aging loved ones, including Medicaid planning and caregiving arrangements.",
      path: "/practice/elder-law",
      color: "bg-white",
      textSize: "text-2xl",
      width: "w-full lg:w-2/5",
      borderColor: "border-l-0 border-b-2 border-[#003B98]",
      marginLeft: "lg:-ml-2",
      marginTop: "mt-0"
    },
    {
      id: "probate",
      title: "Probate & Administration",
      description: "Guiding families through estate settlement with efficiency and care.",
      path: "/practice/probate",
      color: "bg-white",
      textSize: "text-xl",
      width: "w-full lg:w-2/5",
      borderColor: "border-r-2 border-[#FFD500]",
      marginLeft: "lg:ml-8",
      marginTop: "lg:-mt-4"
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      description: "Protecting innovations, creative works, and digital assets with forward-looking strategies.",
      path: "/practice/intellectual-property",
      color: "bg-white",
      textSize: "text-3xl",
      width: "w-full lg:w-1/2",
      borderColor: "border-t-2 border-[#D6001C]",
      marginLeft: "lg:ml-16",
      marginTop: "lg:mt-8"
    },
    {
      id: "art-law",
      title: "Art Law",
      description: "Specialized counsel for artists, collectors, and galleries in New York's vibrant art community.",
      path: "/practice/art-law",
      color: "bg-white",
      textSize: "text-2xl",
      width: "w-full lg:w-2/3",
      borderColor: "border-b-2 border-[#003B98]",
      marginLeft: "lg:ml-4",
      marginTop: "lg:-mt-6"
    },
    {
      id: "emergent-tech",
      title: "Emergent Tech Law",
      description: "Helping innovators navigate the legal landscape of AI, blockchain, and more.",
      path: "/practice/emergent-tech",
      color: "bg-white",
      textSize: "text-xl",
      width: "w-full lg:w-1/3",
      borderColor: "border-t-2 border-l-2 border-[#FFD500]",
      marginLeft: "lg:ml-24",
      marginTop: "lg:mt-4"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 relative">
      {/* Mondrian-inspired horizontal line at top */}
      <div className="absolute top-0 left-0 right-0 h-1 flex">
        <div className="w-2/12 bg-[#D6001C]/70"></div>
        <div className="w-5/12 bg-white"></div>
        <div className="w-3/12 bg-[#003B98]/70"></div>
        <div className="w-2/12 bg-[#FFD500]/70"></div>
      </div>
      
      {/* Subtle vertical line elements */}
      <div className="absolute top-0 left-1/5 h-full w-px bg-black/5"></div>
      <div className="absolute top-0 right-2/5 h-3/4 w-px bg-black/5"></div>
      <div className="absolute top-1/4 right-1/4 h-3/4 w-px bg-black/5"></div>
      
      <div className="container mx-auto px-8 max-w-7xl relative">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <h2 className="reveal font-serif text-4xl md:text-5xl text-navy mb-6 tracking-tight relative inline-block">
            Our Practice Areas
            <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#D6001C]/70"></span>
          </h2>
          <p className="reveal text-lg text-navy/70 mt-6" style={{ transitionDelay: '0.1s' }}>
            Specialized legal expertise serving high-net-worth individuals and their families with solutions as individual as you are.
          </p>
          
          {/* 30 Years of Experience highlight */}
          <div className="mt-8 inline-flex items-center justify-center reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="h-px w-8 bg-[#003B98]/50"></div>
            <span className="mx-3 text-sm font-medium text-navy/80 px-4 py-1 bg-white">
              <span className="text-[#003B98]/80">30 YEARS</span> OF EXPERIENCE
            </span>
            <div className="h-px w-8 bg-[#003B98]/50"></div>
          </div>
        </div>
        
        {/* Mondrian-inspired uneven layout */}
        <div className="relative">
          {/* Background grid for artistic reference */}
          <div className="absolute inset-0 hidden lg:block">
            <div className="h-px w-full bg-black/5 absolute top-1/3"></div>
            <div className="h-px w-full bg-black/5 absolute top-2/3"></div>
            <div className="h-full w-px bg-black/5 absolute left-1/4"></div>
            <div className="h-full w-px bg-black/5 absolute left-1/2"></div>
            <div className="h-full w-px bg-black/5 absolute left-3/4"></div>
          </div>
          
          <div className="relative lg:flex lg:flex-wrap">
            {practiceAreas.map((practice, index) => (
              <div 
                key={practice.id}
                className={`reveal ${practice.width} ${practice.marginLeft} ${practice.marginTop} mb-12 lg:mb-0`}
                style={{ 
                  transitionDelay: `${0.05 * (index + 1)}s`,
                  zIndex: 10 - index
                }}
              >
                <div className={`bg-white p-6 h-full flex flex-col relative group shadow-sm ${practice.borderColor}`}>
                  <h3 className={`font-serif ${practice.textSize} text-navy mb-3 group-hover:text-[#D6001C] transition-colors`}>
                    {practice.title}
                  </h3>
                  <p className="text-navy/70 mb-5 flex-grow">
                    {practice.description}
                  </p>
                  
                  <Link 
                    to={practice.path} 
                    className="inline-flex items-center text-navy hover:text-[#D6001C] transition-colors text-sm font-medium mt-auto group border-b border-navy/20 pb-1 w-fit hover:border-[#D6001C]"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* Color block accents - very subtle */}
          <div className="absolute top-1/4 right-1/5 w-16 h-16 bg-[#FFD500]/10 -z-10 hidden lg:block"></div>
          <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-[#D6001C]/10 -z-10 hidden lg:block"></div>
          <div className="absolute top-2/3 left-2/3 w-20 h-20 bg-[#003B98]/10 -z-10 hidden lg:block"></div>
        </div>

        {/* Simple Mondrian-inspired line divider */}
        <div className="relative w-full flex justify-center items-center mt-20 mb-8">
          <div className="h-px w-full bg-black/10 flex">
            <div className="h-full w-1/5 bg-[#D6001C]/50"></div>
            <div className="h-full w-1/3 bg-black/5"></div>
            <div className="h-full w-1/12 bg-[#FFD500]/50"></div>
            <div className="h-full w-1/4 bg-black/5"></div>
            <div className="h-full w-1/6 bg-[#003B98]/50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
