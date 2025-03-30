
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl mb-6 text-navy">About Moye Law</h1>
              <p className="text-charcoal/80 text-lg">
                A family-run firm at the intersection of traditional legal expertise and innovative technology.
              </p>
            </div>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="py-12 md:py-16 px-4 md:px-6 bg-light-gray">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl mb-8 text-navy text-center">Our Mission</h2>
              <p className="text-charcoal/80 text-lg mb-6 text-center">
                To provide sophisticated legal services with the personal touch of a family firm, 
                enhanced by innovative technology that improves efficiency without sacrificing quality.
              </p>
              <div className="mt-12 grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 md:p-8 rounded-lg border border-navy/10 shadow-sm">
                  <h3 className="font-serif text-xl mb-4 text-navy">Family Values</h3>
                  <p className="text-charcoal/80">
                    As a family-run firm, we understand the importance of trust, personal attention, 
                    and values that guide decision-making across generations.
                  </p>
                </div>
                <div className="bg-white p-6 md:p-8 rounded-lg border border-navy/10 shadow-sm">
                  <h3 className="font-serif text-xl mb-4 text-navy">Future-Forward</h3>
                  <p className="text-charcoal/80">
                    We leverage technology to enhance our services, providing efficiency and accuracy 
                    while maintaining the personal relationships our clients value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* History Section */}
        <section className="py-12 md:py-16 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl mb-8 text-navy text-center">Our Story</h2>
              <p className="text-charcoal/80 mb-6">
                Moye Law was founded with a vision to bridge the gap between traditional legal services and 
                the evolving needs of clients in a digital world. Christopher Moye established the firm after 
                recognizing that high-net-worth clients needed both sophisticated legal strategies and a more 
                personal approach than larger firms could provide.
              </p>
              <p className="text-charcoal/80 mb-6">
                What began as a boutique practice has grown into a respected firm serving clients throughout 
                New York City and Westchester/Rockland Counties, while maintaining the core values that set us apart. 
                Throughout our growth, we've remained committed to the perfect balance of personalized service and 
                innovative solutions.
              </p>
              <p className="text-charcoal/80">
                Today, our team combines extensive legal expertise with technological savvy to address complex matters 
                in Estate Planning, Elder Law, Intellectual Property, and specialized practice areas that serve our clients' 
                unique needs.
              </p>
            </div>
          </div>
        </section>
        
        {/* Team Section Preview */}
        <section className="py-12 md:py-16 px-4 md:px-6 bg-light-gray">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl mb-8 text-navy">Our Team</h2>
              <p className="text-charcoal/80 mb-8">
                Meet the professionals who make Moye Law's unique approach possible.
              </p>
              <Link 
                to="/team" 
                className="inline-flex items-center font-sans text-cerulean hover:text-navy transition-colors"
              >
                Meet our team <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
