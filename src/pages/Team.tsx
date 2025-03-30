
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TeamMembers from '@/components/TeamMembers';
import { ChevronDown } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-96 px-24">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-sans text-4xl md:text-5xl mb-24 text-primary">Our Team</h1>
              <p className="text-charcoal/80 text-lg mb-32">
                Moye Law is a family-run firm that combines the values of personal service with innovative legal solutions. 
                Our team serves clients in New York City and Westchester/Rockland Counties with dedication and expertise.
              </p>
              <a 
                href="#team-members" 
                className="inline-flex items-center text-primary hover:text-cerulean transition-colors"
              >
                Meet our team <ChevronDown className="ml-8 h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Team Members Section */}
        <section id="team-members" className="py-64 px-24 bg-light-gray">
          <div className="container mx-auto">
            <TeamMembers />
          </div>
        </section>

        {/* Location Section */}
        <section className="py-64 px-24">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-sans text-3xl md:text-4xl mb-24 text-primary">Our Locations</h2>
              <p className="text-charcoal/80 text-lg mb-32">
                We proudly serve clients throughout New York City and Westchester/Rockland Counties.
              </p>
              <div className="grid md:grid-cols-2 gap-32 mt-48 text-left">
                <div className="bg-white p-32 rounded-lg border border-primary-light/20">
                  <h3 className="font-sans text-xl mb-16 text-primary">New York City</h3>
                  <p className="text-charcoal/80">
                    123 Madison Avenue<br />
                    New York, NY 10017
                  </p>
                </div>
                <div className="bg-white p-32 rounded-lg border border-primary-light/20">
                  <h3 className="font-sans text-xl mb-16 text-primary">Westchester</h3>
                  <p className="text-charcoal/80">
                    45 Main Street<br />
                    White Plains, NY 10601
                  </p>
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

export default Team;
