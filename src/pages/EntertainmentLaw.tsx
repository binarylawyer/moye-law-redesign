import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Film, Music, Newspaper, Radio, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EntertainmentLaw: React.FC = () => {
  const entertainmentAreas = [
    {
      icon: <Film className="h-10 w-10 text-gold" />,
      title: "Film & Television",
      description: "Comprehensive legal services for production, distribution, and talent agreements in visual media."
    },
    {
      icon: <Music className="h-10 w-10 text-gold" />,
      title: "Music & Audio",
      description: "Rights management, licensing, and contract negotiation for composers, performers, and labels."
    },
    {
      icon: <Newspaper className="h-10 w-10 text-gold" />,
      title: "Publishing & Literary Works",
      description: "Strategic legal guidance for authors, publishers, and digital content distribution."
    },
    {
      icon: <Radio className="h-10 w-10 text-gold" />,
      title: "Digital Media & Gaming",
      description: "Forward-looking legal solutions for interactive entertainment, streaming, and emerging platforms."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section with standardized spacing */}
        <section className="py-72 md:py-96 bg-pastel-blue/20">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-navy text-5xl md:text-6xl lg:text-7xl mb-16">Entertainment Law</h1>
              <p className="text-xl md:text-2xl text-charcoal/80 mx-auto">
                Strategic legal guidance for creators, producers, and distributors across all entertainment mediums.
              </p>
            </div>
          </div>
        </section>
        
        {/* Overview Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <div>
                <h2 className="font-serif text-3xl text-navy mb-6">Protecting Creative Visions</h2>
                <p className="text-lg mb-6">
                  The entertainment industry continues to undergo rapid transformation as new technologies reshape how content is created, distributed, and monetized. This evolution creates both opportunities and challenges for creators and businesses.
                </p>
                <p className="text-lg mb-6">
                  Our Entertainment Law practice provides strategic guidance on navigating the complex legal landscape of entertainment, helping clients protect their creative works while maximizing their commercial potential.
                </p>
                <p className="text-lg">
                  We work with individual creators, production companies, publishers, distributors, and platforms across traditional and digital media to develop legal frameworks that support creative and business success.
                </p>
              </div>
              <div className="bg-gray-50 p-8">
                <h3 className="font-serif text-xl text-navy mb-4">Our Entertainment Expertise:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
                      <span className="text-gold font-medium">✓</span>
                    </div>
                    <span>Rights acquisition and management</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
                      <span className="text-gold font-medium">✓</span>
                    </div>
                    <span>Production and financing agreements</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
                      <span className="text-gold font-medium">✓</span>
                    </div>
                    <span>Talent contracts and negotiations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
                      <span className="text-gold font-medium">✓</span>
                    </div>
                    <span>Distribution and licensing agreements</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
                      <span className="text-gold font-medium">✓</span>
                    </div>
                    <span>Copyright registration and enforcement</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
                      <span className="text-gold font-medium">✓</span>
                    </div>
                    <span>Royalty and profit participation structures</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="bg-gray-50 py-24">
          <div className="container mx-auto px-8">
            <h2 className="font-serif text-3xl text-navy mb-12 text-center">Entertainment Industry Focus</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {entertainmentAreas.map((service, idx) => (
                <div key={idx} className="bg-white p-8 border border-gray-200">
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  <h3 className="font-serif text-xl text-navy mb-4">{service.title}</h3>
                  <p className="text-charcoal">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Principles Section */}
        <section className="bg-white py-24">
          <div className="container mx-auto px-8">
            <h2 className="font-serif text-3xl text-navy mb-12 text-center">Our Entertainment Law Principles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {principles.map((principle, idx) => (
                <div key={idx} className="relative border border-gold p-8">
                  <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full border-2 border-gold bg-white flex items-center justify-center text-navy font-medium">
                    {idx + 1}
                  </div>
                  <h3 className="font-serif text-xl text-navy mb-4 pt-2">{principle.title}</h3>
                  <p className="text-charcoal">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="bg-gray-50 py-24">
          <div className="container mx-auto px-8">
            <h2 className="font-serif text-3xl text-navy mb-12 text-center">Our Entertainment Law Process</h2>
            
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-0.5 bg-gray-200"></div>
              
              {/* Process steps */}
              <div className="space-y-24">
                {/* Step 1 */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-16">
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center">1</div>
                    <h3 className="font-serif text-xl text-navy mb-4">Rights Assessment</h3>
                    <p className="text-charcoal">We analyze existing rights, contracts, and restrictions to understand your current position and opportunities within the entertainment landscape.</p>
                  </div>
                  <div className="md:pl-16"></div>
                </div>
                
                {/* Step 2 */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-16 md:order-1 md:-order-none"></div>
                  <div className="md:pl-16">
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center">2</div>
                    <h3 className="font-serif text-xl text-navy mb-4">Deal Structuring</h3>
                    <p className="text-charcoal">Our team develops appropriate deal structures that align with industry standards while protecting your specific interests and creative vision.</p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-16">
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center">3</div>
                    <h3 className="font-serif text-xl text-navy mb-4">Contract Development</h3>
                    <p className="text-charcoal">We create comprehensive agreements covering production, distribution, licensing, and talent relationships with clear terms and appropriate protections.</p>
                  </div>
                  <div className="md:pl-16"></div>
                </div>
                
                {/* Step 4 */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-16 md:order-1 md:-order-none"></div>
                  <div className="md:pl-16">
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center">4</div>
                    <h3 className="font-serif text-xl text-navy mb-4">Rights Management</h3>
                    <p className="text-charcoal">We establish systems to track and enforce your rights across territories and distribution channels to ensure proper recognition and compensation.</p>
                  </div>
                </div>
                
                {/* Step 5 */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-16">
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center">5</div>
                    <h3 className="font-serif text-xl text-navy mb-4">Dispute Resolution</h3>
                    <p className="text-charcoal">We provide representation in negotiations and disputes that arise throughout the content lifecycle, protecting your interests while seeking business-focused resolutions.</p>
                  </div>
                  <div className="md:pl-16"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-navy py-24 text-white">
          <div className="container mx-auto px-8 text-center">
            <h2 className="font-serif text-3xl mb-6">Protect Your Creative Vision</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Ready to navigate the complex legal landscape of entertainment with confidence? Contact us to discuss how our entertainment law expertise can help protect and amplify your creative work.
            </p>
            <Link to="/contact">
              <Button className="bg-gold hover:bg-gold/90 text-white px-8 py-6">
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </section>
        
        {/* Related Services */}
        <section className="bg-white py-24">
          <div className="container mx-auto px-8">
            <h2 className="font-serif text-3xl text-navy mb-12 text-center">Related Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link to="/practice/intellectual-property" className="border border-gray-200 p-8 hover:border-gold transition-colors">
                <h3 className="font-serif text-xl text-navy mb-4">Intellectual Property</h3>
                <p className="text-charcoal mb-4">Strategic protection for entrepreneurs and innovators in the digital economy.</p>
                <div className="text-gold flex items-center">
                  Learn more <ArrowRight className="ml-2" size={16} />
                </div>
              </Link>
              <Link to="/practice/ip-licensing" className="border border-gray-200 p-8 hover:border-gold transition-colors">
                <h3 className="font-serif text-xl text-navy mb-4">IP Licensing</h3>
                <p className="text-charcoal mb-4">Strategic licensing solutions that protect intellectual assets while generating revenue.</p>
                <div className="text-gold flex items-center">
                  Learn more <ArrowRight className="ml-2" size={16} />
                </div>
              </Link>
              <Link to="/case-studies" className="border border-gray-200 p-8 hover:border-gold transition-colors">
                <h3 className="font-serif text-xl text-navy mb-4">Client Success Stories</h3>
                <p className="text-charcoal mb-4">See how we've helped creators and entertainment businesses achieve their goals.</p>
                <div className="text-gold flex items-center">
                  Learn more <ArrowRight className="ml-2" size={16} />
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default EntertainmentLaw;
