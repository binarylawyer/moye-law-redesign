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
      accent: "mondrian-red"
    },
    {
      id: "elder-law",
      title: "Elder Law",
      description: "Compassionate legal guidance for aging loved ones, including Medicaid planning and caregiving arrangements.",
      path: "/practice/elder-law",
      color: "bg-white",
      accent: "mondrian-blue"
    },
    {
      id: "probate",
      title: "Probate & Administration",
      description: "Guiding families through estate settlement with efficiency and care.",
      path: "/practice/probate",
      color: "bg-white",
      accent: "mondrian-yellow"
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      description: "Protecting innovations, creative works, and digital assets with forward-looking strategies.",
      path: "/practice/intellectual-property",
      color: "bg-white",
      accent: "mondrian-red"
    },
    {
      id: "art-law",
      title: "Art Law",
      description: "Specialized counsel for artists, collectors, and galleries in New York's vibrant art community.",
      path: "/practice/art-law",
      color: "bg-white",
      accent: "mondrian-blue"
    },
    {
      id: "emergent-tech",
      title: "Emergent Tech Law",
      description: "Helping innovators navigate the legal landscape of AI, blockchain, and more.",
      path: "/practice/emergent-tech",
      color: "bg-white",
      accent: "mondrian-yellow"
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      {/* Authentic Mondrian-style horizontal line at top */}
      <div className="h-4 w-full flex border-t-4 border-b-4 border-black">
        <div className="w-2/12 bg-[#D6001C] border-r-4 border-black"></div>
        <div className="w-5/12 bg-white border-r-4 border-black"></div>
        <div className="w-3/12 bg-[#003B98] border-r-4 border-black"></div>
        <div className="w-2/12 bg-[#FFD500]"></div>
      </div>
      
      <div className="container mx-auto px-8 max-w-7xl relative py-16">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="reveal font-serif text-4xl md:text-5xl text-black mb-6 tracking-tight relative inline-block">
            Our Practice Areas
            <div className="absolute -bottom-3 left-0 right-0 h-1 bg-[#D6001C]"></div>
          </h2>
          <p className="reveal text-lg text-black/80 mt-6" style={{ transitionDelay: '0.1s' }}>
            Specialized legal expertise serving high-net-worth individuals and their families with solutions as individual as you are.
          </p>
          
          {/* 30 Years of Experience highlight - Mondrian style */}
          <div className="mt-8 inline-block reveal border-4 border-black px-6 py-3 bg-[#FFD500]" style={{ transitionDelay: '0.2s' }}>
            <span className="font-medium text-black">
              30 YEARS OF EXPERIENCE
            </span>
          </div>
        </div>
        
        {/* Pure Mondrian composition grid */}
        <div className="mondrian-grid">
          {/* Red block - top left */}
          <div className="col-span-3 row-span-2 mondrian-red"></div>
          
          {/* Estate Planning - large white block */}
          <div className="col-span-5 mondrian-grid-item bg-white p-6">
            <h3 className="font-serif text-3xl text-black mb-3">
              {practiceAreas[0].title}
            </h3>
            <p className="text-black/80 mb-5">
              {practiceAreas[0].description}
            </p>
            <Link 
              to={practiceAreas[0].path} 
              className="mondrian-button inline-flex items-center"
            >
              Learn more <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          {/* Yellow block - top right */}
          <div className="col-span-4 mondrian-yellow mondrian-grid-item"></div>
          
          {/* Elder Law */}
          <div className="col-span-5 mondrian-grid-item bg-white p-6">
            <h3 className="font-serif text-2xl text-black mb-3">
              {practiceAreas[1].title}
            </h3>
            <p className="text-black/80 mb-5">
              {practiceAreas[1].description}
            </p>
            <Link 
              to={practiceAreas[1].path} 
              className="inline-flex items-center group text-black hover:text-[#003B98]"
            >
              Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          {/* Blue block */}
          <div className="col-span-4 mondrian-blue mondrian-grid-item"></div>
          
          {/* Probate */}
          <div className="col-span-4 mondrian-grid-item bg-white p-6">
            <h3 className="font-serif text-2xl text-black mb-3">
              {practiceAreas[2].title}
            </h3>
            <p className="text-black/80 mb-5">
              {practiceAreas[2].description}
            </p>
            <Link 
              to={practiceAreas[2].path} 
              className="inline-flex items-center group text-black hover:text-[#FFD500]"
            >
              Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          {/* Art Law - large unit */}
          <div className="col-span-8 mondrian-grid-item bg-white p-6">
            <h3 className="font-serif text-3xl text-black mb-3">
              {practiceAreas[4].title}
            </h3>
            <p className="text-black/80 mb-5">
              {practiceAreas[4].description}
            </p>
            <Link 
              to={practiceAreas[4].path} 
              className="inline-flex items-center group text-black hover:text-[#003B98]"
            >
              Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          {/* IP and Tech Law - bottom row */}
          <div className="col-span-6 mondrian-grid-item bg-white p-6">
            <h3 className="font-serif text-2xl text-black mb-3">
              {practiceAreas[3].title}
            </h3>
            <p className="text-black/80 mb-5">
              {practiceAreas[3].description}
            </p>
            <Link 
              to={practiceAreas[3].path} 
              className="inline-flex items-center group text-black hover:text-[#D6001C]"
            >
              Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="col-span-2 mondrian-red mondrian-grid-item"></div>
          
          <div className="col-span-4 mondrian-grid-item bg-white p-6">
            <h3 className="font-serif text-2xl text-black mb-3">
              {practiceAreas[5].title}
            </h3>
            <p className="text-black/80 mb-5">
              {practiceAreas[5].description}
            </p>
            <Link 
              to={practiceAreas[5].path} 
              className="inline-flex items-center group text-black hover:text-[#FFD500]"
            >
              Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Authentic Mondrian-style divider */}
        <div className="mondrian-divider mt-16">
          <div className="mondrian-divider-red"></div>
          <div className="mondrian-divider-white"></div>
          <div className="mondrian-divider-blue"></div>
          <div className="mondrian-divider-yellow"></div>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
