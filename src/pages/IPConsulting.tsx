
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Lightbulb, Search, BarChart, Globe, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const IPConsulting: React.FC = () => {
  const services = [
    {
      icon: <Search className="h-10 w-10 text-gold" />,
      title: "IP Audits & Due Diligence",
      description: "Comprehensive evaluation of intellectual property assets to identify strengths, weaknesses, and opportunities in your IP portfolio."
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-gold" />,
      title: "IP Strategy Development",
      description: "Creation of tailored intellectual property strategies aligned with your business goals and competitive landscape."
    },
    {
      icon: <BarChart className="h-10 w-10 text-gold" />,
      title: "IP Valuation",
      description: "Expert assessment of intellectual property value for transactions, investment, and strategic decision-making."
    },
    {
      icon: <Globe className="h-10 w-10 text-gold" />,
      title: "International IP Strategy",
      description: "Development of global intellectual property protection strategies across key markets and jurisdictions."
    },
    {
      icon: <Users className="h-10 w-10 text-gold" />,
      title: "IP Team Training",
      description: "Customized training programs to enhance your team's understanding of intellectual property management."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-white pt-32 pb-16">
          <div className="container mx-auto px-8">
            <h1 className="font-serif text-5xl text-navy mb-6">IP Consulting</h1>
            <p className="text-lg max-w-3xl">
              Strategic consulting to help businesses and innovators maximize the value of their intellectual property assets.
            </p>
          </div>
        </section>
        
        {/* Overview Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <div>
                <h2 className="font-serif text-3xl text-navy mb-6">Unlocking IP Value</h2>
                <p className="text-lg mb-6">
                  Intellectual property represents one of the most valuable assets for modern businesses, yet it often remains underdeveloped and underutilized.
                </p>
                <p className="text-lg mb-6">
                  Our IP Consulting practice helps clients identify, protect, and leverage intellectual property to create competitive advantages and generate revenue.
                </p>
                <p className="text-lg">
                  We work with businesses of all sizes, from startups to established enterprises, to develop and implement intellectual property strategies that support broader business objectives.
                </p>
              </div>
              <div className="bg-gray-50 p-8">
                <h3 className="font-serif text-xl text-navy mb-4">Our Expertise Covers:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
                      <span className="text-gold font-medium">✓</span>
                    </div>
                    <span>Patents and technical innovations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
                      <span className="text-gold font-medium">✓</span>
                    </div>
                    <span>Trademarks and branding assets</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
                      <span className="text-gold font-medium">✓</span>
                    </div>
                    <span>Copyright and creative works</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
                      <span className="text-gold font-medium">✓</span>
                    </div>
                    <span>Trade secrets and confidential information</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
                      <span className="text-gold font-medium">✓</span>
                    </div>
                    <span>Data and database rights</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
                      <span className="text-gold font-medium">✓</span>
                    </div>
                    <span>IP portfolio management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="bg-gray-50 py-24">
          <div className="container mx-auto px-8">
            <h2 className="font-serif text-3xl text-navy mb-12 text-center">Our Consulting Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => (
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
        
        {/* Process Section */}
        <section className="bg-white py-24">
          <div className="container mx-auto px-8">
            <h2 className="font-serif text-3xl text-navy mb-12 text-center">Our Consulting Process</h2>
            
            <div className="max-w-4xl mx-auto space-y-20">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center text-lg font-medium">1</div>
                  <div className="h-full w-0.5 bg-gray-200 my-4 md:h-0.5 md:w-full md:my-0 md:mx-4"></div>
                </div>
                <div className="md:w-3/4 md:pl-8">
                  <h3 className="font-serif text-xl text-navy mb-4">Discovery & Assessment</h3>
                  <p className="text-charcoal">
                    We begin with a thorough evaluation of your existing intellectual property assets, business objectives, and competitive landscape. This phase includes identifying registered and unregistered IP, assessing protection status, and uncovering untapped opportunities.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center text-lg font-medium">2</div>
                  <div className="h-full w-0.5 bg-gray-200 my-4 md:h-0.5 md:w-full md:my-0 md:mx-4"></div>
                </div>
                <div className="md:w-3/4 md:pl-8">
                  <h3 className="font-serif text-xl text-navy mb-4">Strategy Development</h3>
                  <p className="text-charcoal">
                    Based on our assessment, we develop a comprehensive IP strategy tailored to your specific needs and goals. This includes recommendations for protection measures, monetization opportunities, and competitive positioning.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center text-lg font-medium">3</div>
                  <div className="h-full w-0.5 bg-gray-200 my-4 md:h-0.5 md:w-full md:my-0 md:mx-4"></div>
                </div>
                <div className="md:w-3/4 md:pl-8">
                  <h3 className="font-serif text-xl text-navy mb-4">Implementation Planning</h3>
                  <p className="text-charcoal">
                    We create a detailed implementation plan with clear timelines, responsibilities, and resource requirements. This includes prioritization of actions based on business impact and resource constraints.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center text-lg font-medium">4</div>
                  <div className="h-full w-0.5 bg-gray-200 my-4 md:h-0.5 md:w-full md:my-0 md:mx-4"></div>
                </div>
                <div className="md:w-3/4 md:pl-8">
                  <h3 className="font-serif text-xl text-navy mb-4">Execution Support</h3>
                  <p className="text-charcoal">
                    We provide ongoing support during the implementation of your IP strategy, including coordination with specialized counsel for registrations, documentation development, and team training.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center text-lg font-medium">5</div>
                </div>
                <div className="md:w-3/4 md:pl-8">
                  <h3 className="font-serif text-xl text-navy mb-4">Review & Optimization</h3>
                  <p className="text-charcoal">
                    We conduct regular reviews of your IP strategy implementation, measuring results against objectives and recommending adjustments as business needs and market conditions evolve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-navy py-24 text-white">
          <div className="container mx-auto px-8 text-center">
            <h2 className="font-serif text-3xl mb-6">Transform Your Intellectual Assets</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Ready to unlock the full potential of your intellectual property? Contact us to discuss how our consulting services can help you create value and competitive advantage.
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
              <Link to="/ip-licensing" className="border border-gray-200 p-8 hover:border-gold transition-colors">
                <h3 className="font-serif text-xl text-navy mb-4">IP Licensing</h3>
                <p className="text-charcoal mb-4">Maximize the value of intellectual assets through strategic licensing agreements.</p>
                <div className="text-gold flex items-center">
                  Learn more <ArrowRight className="ml-2" size={16} />
                </div>
              </Link>
              <Link to="/practice/intellectual-property" className="border border-gray-200 p-8 hover:border-gold transition-colors">
                <h3 className="font-serif text-xl text-navy mb-4">Intellectual Property</h3>
                <p className="text-charcoal mb-4">Strategic protection for entrepreneurs and innovators in the digital economy.</p>
                <div className="text-gold flex items-center">
                  Learn more <ArrowRight className="ml-2" size={16} />
                </div>
              </Link>
              <Link to="/emerging-tech" className="border border-gray-200 p-8 hover:border-gold transition-colors">
                <h3 className="font-serif text-xl text-navy mb-4">Emerging Tech</h3>
                <p className="text-charcoal mb-4">Legal guidance for businesses leveraging AI, ML, blockchain and other emerging technologies.</p>
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

export default IPConsulting;
