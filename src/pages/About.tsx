
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ChevronRight, Shield, Briefcase, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24">
        {/* Hero Section with more subdued coloring */}
        <section className="py-20 md:py-32 px-4 md:px-6 bg-light-gray">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl mb-8 text-navy mt-36">About Moye Law</h1>
              <p className="text-navy/70 text-xl mb-4">
                A family-run firm at the intersection of traditional legal expertise and innovative technology.
              </p>
            </div>
          </div>
        </section>
        
        {/* Mission Section with muted colors */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-white">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl mb-10 text-navy text-center">Our Mission</h2>
              <p className="text-navy/70 text-xl mb-12 text-center">
                To provide sophisticated legal services with the personal touch of a family firm, 
                enhanced by innovative technology that improves efficiency without sacrificing quality.
              </p>
              
              {/* Enhanced card design with more subtle styling */}
              <div className="mt-16 grid md:grid-cols-2 gap-10">
                <div className="bg-white p-10 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group">
                  <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-full bg-light-gray group-hover:bg-navy/5 transition-colors">
                    <span className="text-navy font-serif text-2xl">01</span>
                  </div>
                  <h3 className="font-serif text-2xl mb-6 text-navy group-hover:text-gold transition-colors">Family Values</h3>
                  <p className="text-navy/70 text-lg">
                    As a family-run firm, we understand the importance of trust, personal attention, 
                    and values that guide decision-making across generations.
                  </p>
                </div>
                
                <div className="bg-white p-10 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group">
                  <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-full bg-light-gray group-hover:bg-navy/5 transition-colors">
                    <span className="text-navy font-serif text-2xl">02</span>
                  </div>
                  <h3 className="font-serif text-2xl mb-6 text-navy group-hover:text-gold transition-colors">Future-Forward</h3>
                  <p className="text-navy/70 text-lg">
                    We leverage technology to enhance our services, providing efficiency and accuracy 
                    while maintaining the personal relationships our clients value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* History Section with more subdued styling */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-light-gray">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl mb-10 text-navy text-center">Our Story</h2>
              <p className="text-navy/70 text-lg mb-8">
                Moye Law was founded with a vision to bridge the gap between traditional legal services and 
                the evolving needs of clients in a digital world. Christopher Moye established the firm after 
                recognizing that high-net-worth clients needed both sophisticated legal strategies and a more 
                personal approach than larger firms could provide.
              </p>
              <p className="text-navy/70 text-lg mb-8">
                What began as a boutique practice has grown into a respected firm serving clients throughout 
                New York City and Westchester/Rockland Counties, while maintaining the core values that set us apart. 
                Throughout our growth, we've remained committed to the perfect balance of personalized service and 
                innovative solutions.
              </p>
              <p className="text-navy/70 text-lg">
                Today, our team combines extensive legal expertise with technological savvy to address complex matters 
                in Estate Planning, Elder Law, Intellectual Property, and specialized practice areas that serve our clients' 
                unique needs.
              </p>
            </div>
          </div>
        </section>
        
        {/* Team Section Preview with muted styling */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-white">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl mb-8 text-navy">Our Team</h2>
              <p className="text-navy/70 text-lg mb-10">
                Meet the professionals who make Moye Law's unique approach possible.
              </p>
              <Link 
                to="/team" 
                className="inline-flex items-center font-sans text-lg text-navy hover:text-gold transition-colors"
              >
                Meet our team <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
        
        {/* New Section for Targeted Personas */}
        <section className="py-16 md:py-28 px-4 md:px-6 bg-light-gray">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl mb-12 text-navy text-center">Who We Serve</h2>
              <p className="text-navy/70 text-xl mb-16 text-center">
                Our practice is tailored to the unique needs of clients who value both personal attention and sophisticated legal strategies.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 text-center">
                  <div className="mx-auto mb-6 w-16 h-16 flex items-center justify-center rounded-full bg-pastel-blue/30">
                    <Lightbulb className="h-8 w-8 text-navy" />
                  </div>
                  <h3 className="font-serif text-2xl mb-4 text-navy">Innovators</h3>
                  <p className="text-navy/70 text-lg">
                    Tech founders and digital pioneers who need sophisticated IP protection and forward-thinking estate planning for digital assets.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 text-center">
                  <div className="mx-auto mb-6 w-16 h-16 flex items-center justify-center rounded-full bg-pastel-blue/30">
                    <Briefcase className="h-8 w-8 text-navy" />
                  </div>
                  <h3 className="font-serif text-2xl mb-4 text-navy">Executives</h3>
                  <p className="text-navy/70 text-lg">
                    Senior executives balancing career demands with family responsibilities, including care for aging parents and estate planning.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 text-center">
                  <div className="mx-auto mb-6 w-16 h-16 flex items-center justify-center rounded-full bg-pastel-blue/30">
                    <Shield className="h-8 w-8 text-navy" />
                  </div>
                  <h3 className="font-serif text-2xl mb-4 text-navy">Legacy Builders</h3>
                  <p className="text-navy/70 text-lg">
                    High-net-worth individuals focused on preserving family wealth and establishing governance structures for multi-generational assets.
                  </p>
                </div>
              </div>
              
              <div className="text-center mt-12">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-8 py-3 font-sans text-lg text-white bg-gold hover:bg-gold/90 rounded transition-colors"
                >
                  Schedule a Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Extra whitespace section */}
        <div className="h-24 md:h-40"></div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
