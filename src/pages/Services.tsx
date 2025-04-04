import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Briefcase, Shield, CheckCircle, Clock, Lock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { specializedServices } from '@/components/navigation/NavigationData';

const Services = () => {
  // Expanded services data with descriptions
  const servicesData = [
    {
      id: "estate-planning",
      title: "Estate Planning",
      description: "Tailored estate plans that preserve wealth and legacy for future generations.",
      path: "/services/estate-planning",
      color: "bg-white",
      accent: "mondrian-blue"
    },
    {
      id: "probate-administration",
      title: "Probate & Estate Administration",
      description: "Compassionate guidance through the estate settlement process with efficiency and attention to detail.",
      path: "/services/probate-administration",
      color: "bg-white",
      accent: "mondrian-yellow"
    },
    {
      id: "ip-consulting-strategy",
      title: "IP Consulting & Strategy",
      description: "Strategic intellectual property guidance to maximize the value and protection of your creative assets.",
      path: "/services/ip-consulting-strategy",
      color: "bg-white",
      accent: "mondrian-white"
    },
    {
      id: "digital-asset-tech-protection",
      title: "Digital Asset & Tech Protection",
      description: "Forward-looking legal frameworks that safeguard digital assets, cryptocurrencies, and technology innovations.",
      path: "/services/digital-asset-tech-protection",
      color: "bg-white",
      accent: "mondrian-red"
    },
    {
      id: "licensing-transactions",
      title: "Licensing & Transactions",
      description: "Structured agreements that monetize intellectual property while protecting creator rights.",
      path: "/services/licensing-transactions",
      color: "bg-white",
      accent: "mondrian-white"
    },
    {
      id: "art-entertainment-law",
      title: "Art & Entertainment Law",
      description: "Specialized legal counsel for artists, collectors, producers, and entertainment industry professionals.",
      path: "/services/art-entertainment-law",
      color: "bg-white",
      accent: "mondrian-yellow"
    }
  ];

  // Personas-focused content
  const personaServices = [
    {
      title: "For Tech Innovators",
      description: "Legal solutions designed for founders, CTOs, and tech professionals navigating digital innovation.",
      services: [
        "Digital asset protection strategies",
        "IP valuation and monetization planning",
        "Software and technology licensing",
        "Technology transfer agreements",
        "NFT and blockchain legal frameworks"
      ],
      cta: {
        text: "Protect Your Digital Innovation",
        path: "/services/digital-asset-tech-protection"
      },
      color: "bg-[#003B98]",
      textColor: "text-white",
      iconColor: "text-white"
    },
    {
      title: "For Executive Caregivers",
      description: "Balanced solutions for professionals managing careers while caring for aging parents or family members.",
      services: [
        "Elder care legal frameworks",
        "Power of attorney arrangements",
        "Medicaid planning strategies",
        "Caregiver agreements",
        "Remote legal services for busy schedules"
      ],
      cta: {
        text: "Balance Care and Career",
        path: "/services/elder-law"
      },
      color: "bg-[#FFD500]",
      textColor: "text-black",
      iconColor: "text-black"
    },
    {
      title: "For Legacy Builders",
      description: "Sophisticated wealth transfer and legacy planning solutions for high-net-worth individuals and families.",
      services: [
        "Multi-generational wealth transfer",
        "Asset protection strategies",
        "Family governance frameworks",
        "Charitable planning solutions",
        "International estate planning"
      ],
      cta: {
        text: "Secure Your Legacy",
        path: "/services/estate-planning"
      },
      color: "bg-[#D6001C]",
      textColor: "text-white",
      iconColor: "text-white"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32 md:pt-40">
        {/* Hero Section with Title - Mondrian Style */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-12 gap-0 border-4 border-black">
              <div className="col-span-3 bg-[#D6001C]"></div>
              <div className="col-span-6 bg-white p-8 text-center">
                <h1 className="font-display text-4xl md:text-5xl text-black mb-6">
                  Our Services
                </h1>
                <p className="text-black/80 text-lg md:text-xl">
                  Specialized legal solutions tailored to your unique needs.
                </p>
              </div>
              <div className="col-span-3 bg-[#FFD500]"></div>
            </div>
          </div>
        </section>

        {/* Services Grid - Simplified Layout to match screenshot */}
        <section className="py-8 md:py-16">
          <div className="container mx-auto px-8">
            {/* Service Grid - 2 columns (simpler layout) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {/* Estate Planning */}
              <div className="border-4 border-black bg-white">
                <div className="bg-[#003B98] h-32"></div>
                <div className="p-6">
                  <h2 className="font-display text-2xl mb-3">Estate Planning</h2>
                  <p className="text-black/80 mb-5">
                    Tailored estate plans that preserve wealth and legacy for future generations.
                  </p>
                  <Link 
                    to="/services/estate-planning" 
                    className="inline-flex items-center text-black hover:text-[#003B98] transition-colors"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Probate & Estate Administration */}
              <div className="border-4 border-black bg-white">
                <div className="grid grid-cols-2">
                  <div className="bg-[#D6001C] h-32"></div>
                  <div className="bg-[#FFD500] h-32"></div>
                </div>
                <div className="p-6">
                  <h2 className="font-display text-2xl mb-3">Probate & Estate Administration</h2>
                  <p className="text-black/80 mb-5">
                    Compassionate guidance through the estate settlement process with efficiency and attention to detail.
                  </p>
                  <Link 
                    to="/services/probate-administration" 
                    className="inline-flex items-center text-black hover:text-[#003B98] transition-colors"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* IP Consulting & Strategy */}
              <div className="border-4 border-black bg-white">
                <div className="bg-white h-32 border-b-4 border-black"></div>
                <div className="p-6">
                  <h2 className="font-display text-2xl mb-3">IP Consulting & Strategy</h2>
                  <p className="text-black/80 mb-5">
                    Strategic intellectual property guidance to maximize the value and protection of your creative assets.
                  </p>
                  <Link 
                    to="/services/ip-consulting-strategy" 
                    className="inline-flex items-center text-black hover:text-[#003B98] transition-colors"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Digital Asset & Tech Protection */}
              <div className="border-4 border-black bg-white">
                <div className="grid grid-cols-1">
                  <div className="bg-[#D6001C] h-32"></div>
                </div>
                <div className="p-6">
                  <h2 className="font-display text-2xl mb-3">Digital Asset & Tech Protection</h2>
                  <p className="text-black/80 mb-5">
                    Forward-looking legal frameworks that safeguard digital assets, cryptocurrencies, and technology innovations.
                  </p>
                  <Link 
                    to="/services/digital-asset-tech-protection" 
                    className="inline-flex items-center text-black hover:text-[#D6001C] transition-colors"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Licensing & Transactions */}
              <div className="border-4 border-black bg-white">
                <div className="bg-white h-32 border-b-4 border-black"></div>
                <div className="p-6">
                  <h2 className="font-display text-2xl mb-3">Licensing & Transactions</h2>
                  <p className="text-black/80 mb-5">
                    Structured agreements that monetize intellectual property while protecting creator rights.
                  </p>
                  <Link 
                    to="/services/licensing-transactions" 
                    className="inline-flex items-center text-black hover:text-[#003B98] transition-colors"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Art & Entertainment Law */}
              <div className="border-4 border-black bg-white">
                <div className="grid grid-cols-1">
                  <div className="bg-[#FFD500] h-32"></div>
                </div>
                <div className="p-6">
                  <h2 className="font-display text-2xl mb-3">Art & Entertainment Law</h2>
                  <p className="text-black/80 mb-5">
                    Specialized legal counsel for artists, collectors, producers, and entertainment industry professionals.
                  </p>
                  <Link 
                    to="/services/art-entertainment-law" 
                    className="inline-flex items-center text-black hover:text-[#FFD500] transition-colors"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Mondrian-style divider */}
            <div className="h-4 w-full flex border-t-4 border-b-4 border-black mb-16">
              <div className="w-1/4 bg-[#D6001C] border-r-4 border-black"></div>
              <div className="w-2/4 bg-white border-r-4 border-black"></div>
              <div className="w-1/4 bg-[#003B98]"></div>
            </div>
          </div>
        </section>
        
        {/* Client-Focused Approach Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-6 bg-white p-8 border-4 border-black">
                <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Our Client-Focused Approach</h2>
                <p className="text-black/80 mb-6">
                  At Moye Law, we combine traditional legal expertise with innovative technology to deliver exceptional service that meets your unique needs.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#003B98] flex items-center justify-center mt-1">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="ml-3 text-black/80">Personalized consultations tailored to your specific situation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#003B98] flex items-center justify-center mt-1">
                      <Lock className="h-4 w-4 text-white" />
                    </div>
                    <span className="ml-3 text-black/80">Secure technology platforms that protect your sensitive information</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#003B98] flex items-center justify-center mt-1">
                      <Shield className="h-4 w-4 text-white" />
                    </div>
                    <span className="ml-3 text-black/80">Transparent communication throughout the entire legal process</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#003B98] flex items-center justify-center mt-1">
                      <Clock className="h-4 w-4 text-white" />
                    </div>
                    <span className="ml-3 text-black/80">Proactive, solution-oriented legal strategies</span>
                  </li>
                </ul>
              </div>
              <div className="hidden md:block md:col-span-6">
                <div className="h-full w-full flex flex-col border-4 border-black">
                  <div className="flex-1 flex">
                    <div className="w-2/3 border-r-4 border-black bg-[#D6001C]"></div>
                    <div className="w-1/3 bg-white"></div>
                  </div>
                  <div className="flex-1 flex">
                    <div className="w-1/3 border-t-4 border-r-4 border-black bg-white"></div>
                    <div className="w-2/3 border-t-4 border-black bg-[#FFD500]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Persona-Specific Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl text-black mb-4">Services For Your Specific Needs</h2>
              <p className="text-lg text-black/80">
                We understand that different clients have different priorities. Our specialized services are designed to address the unique challenges faced by each type of client.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {personaServices.map((persona, index) => (
                <div key={index} className="border-4 border-black overflow-hidden">
                  <div className={`${persona.color} p-8 border-b-4 border-black`}>
                    <h3 className={`font-display text-2xl mb-3 ${persona.textColor}`}>{persona.title}</h3>
                    <p className={`${persona.textColor} opacity-90 mb-6`}>{persona.description}</p>
                  </div>
                  <div className="bg-white p-8">
                    <ul className="space-y-3 mb-8">
                      {persona.services.map((service, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-black" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                    <Link 
                      to={persona.cta.path} 
                      className="inline-block px-6 py-3 bg-black text-white font-medium hover:bg-gray-800 transition-colors"
                    >
                      {persona.cta.text}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gray-100 border-t-4 border-black">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl text-black mb-6">Ready to Get Started?</h2>
              <p className="text-black/80 mb-8 max-w-2xl mx-auto">
                Schedule a consultation with one of our experienced attorneys to discuss your specific legal needs and how we can help.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-4">
                <Link to="/contact" className="inline-block bg-[#003B98] hover:bg-[#002a6f] text-white font-medium py-3 px-8 border-4 border-black transition duration-300">
                  Schedule a Consultation
                </Link>
                <Link to="/how-we-work" className="inline-block bg-white hover:bg-gray-100 text-black font-medium py-3 px-8 border-4 border-black transition duration-300">
                  Learn About Our Process
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services; 