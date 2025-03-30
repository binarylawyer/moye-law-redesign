
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FileText, BarChart3, Shield, ShieldCheck, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Licensing: React.FC = () => {
  const licensingAreas = [
    {
      icon: <FileText className="h-10 w-10 text-gold" />,
      title: "Software & Technology Licensing",
      description: "Comprehensive licensing agreements for software products, platforms, and technology solutions."
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-gold" />,
      title: "Content & Media Licensing",
      description: "Strategic agreements for content distribution, publishing rights, and media usage."
    },
    {
      icon: <Shield className="h-10 w-10 text-gold" />,
      title: "Patent & Technology Transfer",
      description: "Structured licensing frameworks for patented technologies and technical know-how."
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-gold" />,
      title: "Trademark & Brand Licensing",
      description: "Comprehensive agreements for brand usage, merchandising, and franchise relationships."
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
              <h1 className="font-serif text-navy text-5xl md:text-6xl lg:text-7xl mb-16">IP & Software Licensing</h1>
              <p className="text-xl md:text-2xl text-charcoal/80 mx-auto">
                Strategic licensing solutions that protect your intellectual assets while generating revenue and expanding market reach.
              </p>
            </div>
          </div>
        </section>
        
        {/* Overview Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <div>
                <h2 className="font-serif text-3xl text-navy mb-6">Strategic Licensing Solutions</h2>
                <p className="text-lg mb-6">
                  Effective licensing strategies allow businesses to monetize intellectual property, expand into new markets, and establish strategic partnerships while maintaining appropriate control over valuable assets.
                </p>
                <p className="text-lg mb-6">
                  Our licensing practice provides comprehensive legal support for all aspects of intellectual property and technology licensing, from strategy development through negotiation and ongoing management.
                </p>
                <p className="text-lg">
                  We work with technology companies, content creators, brand owners, and other IP-rich businesses to develop licensing approaches that maximize value while mitigating risks.
                </p>
              </div>
              <div className="bg-gray-50 p-8">
                <h3 className="font-serif text-xl text-navy mb-4">Key Benefits:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
                      <span className="text-gold font-medium">✓</span>
                    </div>
                    <span>Generate revenue from intellectual assets</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
                      <span className="text-gold font-medium">✓</span>
                    </div>
                    <span>Expand market reach without significant investment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
                      <span className="text-gold font-medium">✓</span>
                    </div>
                    <span>Access complementary technologies or capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
                      <span className="text-gold font-medium">✓</span>
                    </div>
                    <span>Establish strategic industry partnerships</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
                      <span className="text-gold font-medium">✓</span>
                    </div>
                    <span>Maintain appropriate control over your assets</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
                      <span className="text-gold font-medium">✓</span>
                    </div>
                    <span>Create clear frameworks for usage and compliance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Licensing Areas */}
        <section className="bg-gray-50 py-24">
          <div className="container mx-auto px-8">
            <h2 className="font-serif text-3xl text-navy mb-12 text-center">Our Licensing Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {licensingAreas.map((area, idx) => (
                <div key={idx} className="bg-white p-8 border border-gray-200">
                  <div className="mb-6">
                    {area.icon}
                  </div>
                  <h3 className="font-serif text-xl text-navy mb-4">{area.title}</h3>
                  <p className="text-charcoal">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="bg-white py-24">
          <div className="container mx-auto px-8">
            <h2 className="font-serif text-3xl text-navy mb-12 text-center">Our Licensing Process</h2>
            
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-0.5 bg-gray-200"></div>
              
              {/* Process steps */}
              <div className="space-y-24">
                {/* Step 1 */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-16">
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center">1</div>
                    <h3 className="font-serif text-xl text-navy mb-4">Strategy Development</h3>
                    <p className="text-charcoal">We work with you to develop a licensing strategy aligned with your business objectives, identifying appropriate licensing models and target markets.</p>
                  </div>
                  <div className="md:pl-16"></div>
                </div>
                
                {/* Step 2 */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-16 md:order-1 md:-order-none"></div>
                  <div className="md:pl-16">
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center">2</div>
                    <h3 className="font-serif text-xl text-navy mb-4">Term Sheet Creation</h3>
                    <p className="text-charcoal">We prepare clear term sheets that outline key business and legal parameters for licensing relationships, providing a foundation for negotiations.</p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-16">
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center">3</div>
                    <h3 className="font-serif text-xl text-navy mb-4">Agreement Development</h3>
                    <p className="text-charcoal">We create comprehensive licensing agreements tailored to your specific needs, including usage rights, payment structures, quality control, and term conditions.</p>
                  </div>
                  <div className="md:pl-16"></div>
                </div>
                
                {/* Step 4 */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-16 md:order-1 md:-order-none"></div>
                  <div className="md:pl-16">
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center">4</div>
                    <h3 className="font-serif text-xl text-navy mb-4">Negotiation Support</h3>
                    <p className="text-charcoal">We provide strategic negotiation support to achieve favorable terms while maintaining positive business relationships with potential licensees.</p>
                  </div>
                </div>
                
                {/* Step 5 */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-16">
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center">5</div>
                    <h3 className="font-serif text-xl text-navy mb-4">Compliance Management</h3>
                    <p className="text-charcoal">We help establish systems to monitor licensee compliance, track royalties, and maintain effective ongoing relationships with your licensing partners.</p>
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
            <h2 className="font-serif text-3xl mb-6">Monetize Your Intellectual Assets</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Ready to explore licensing opportunities for your intellectual property? Contact us to discuss how we can help develop and implement effective licensing strategies.
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
              <Link to="/ip-consulting" className="border border-gray-200 p-8 hover:border-gold transition-colors">
                <h3 className="font-serif text-xl text-navy mb-4">IP Consulting</h3>
                <p className="text-charcoal mb-4">Strategic consulting to help businesses maximize the value of their intellectual property assets.</p>
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
              <Link to="/practice/software-licensing" className="border border-gray-200 p-8 hover:border-gold transition-colors">
                <h3 className="font-serif text-xl text-navy mb-4">Software Licensing</h3>
                <p className="text-charcoal mb-4">Strategic protection and monetization of software assets and intellectual property.</p>
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

export default Licensing;
