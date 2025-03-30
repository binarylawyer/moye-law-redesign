import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Code, Database, Network, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EmergingTech: React.FC = () => {
  const techAreas = [
    {
      icon: <Code className="h-10 w-10 text-gold" />,
      title: "AI & Machine Learning",
      description: "Legal frameworks for artificial intelligence development, data usage, and ethical compliance."
    },
    {
      icon: <Database className="h-10 w-10 text-gold" />,
      title: "Blockchain & Digital Assets",
      description: "Comprehensive legal guidance for blockchain platforms, smart contracts, and tokenization."
    },
    {
      icon: <Network className="h-10 w-10 text-gold" />,
      title: "Internet of Things",
      description: "Strategic legal solutions for connected devices, data collection, and cross-border compliance."
    },
    {
      icon: <Zap className="h-10 w-10 text-gold" />,
      title: "Quantum Computing",
      description: "Forward-looking legal strategies for quantum technologies and associated intellectual property."
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
              <h1 className="font-serif text-navy text-5xl md:text-6xl lg:text-7xl mb-16">Emerging Technology Law</h1>
              <p className="text-xl md:text-2xl text-charcoal/80 mx-auto">
                Forward-looking legal solutions for pioneers at the frontier of technological innovation.
              </p>
            </div>
          </div>
        </section>
        
        {/* Overview Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <div>
                <h2 className="font-serif text-3xl text-navy mb-6">Navigating the Future of Technology</h2>
                <p className="text-lg mb-6">
                  Emerging technologies are rapidly transforming industries and creating new legal challenges. Businesses need forward-thinking legal guidance to navigate this complex landscape.
                </p>
                <p className="text-lg mb-6">
                  Our Emerging Technology Law practice provides comprehensive legal support for companies developing and deploying cutting-edge technologies.
                </p>
                <p className="text-lg">
                  We work with startups, established companies, and investors to address the unique legal issues presented by artificial intelligence, blockchain, the Internet of Things, and other emerging technologies.
                </p>
              </div>
              <div className="bg-gray-50 p-8">
                <h3 className="font-serif text-xl text-navy mb-4">We Advise On:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
                      <span className="text-gold font-medium">✓</span>
                    </div>
                    <span>AI and machine learning ethics and compliance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
                      <span className="text-gold font-medium">✓</span>
                    </div>
                    <span>Blockchain and digital asset regulation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
                      <span className="text-gold font-medium">✓</span>
                    </div>
                    <span>Data privacy and security for IoT devices</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
                      <span className="text-gold font-medium">✓</span>
                    </div>
                    <span>Quantum computing intellectual property strategies</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
                      <span className="text-gold font-medium">✓</span>
                    </div>
                    <span>Cross-border data transfer compliance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
                      <span className="text-gold font-medium">✓</span>
                    </div>
                    <span>Liability and risk management for autonomous systems</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Tech Areas */}
        <section className="bg-gray-50 py-24">
          <div className="container mx-auto px-8">
            <h2 className="font-serif text-3xl text-navy mb-12 text-center">Our Areas of Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {techAreas.map((area, idx) => (
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
            <h2 className="font-serif text-3xl text-navy mb-12 text-center">Our Approach</h2>
            
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-0.5 bg-gray-200"></div>
              
              {/* Process steps */}
              <div className="space-y-24">
                {/* Step 1 */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-16">
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center">1</div>
                    <h3 className="font-serif text-xl text-navy mb-4">Technology Assessment</h3>
                    <p className="text-charcoal">We analyze the technology and its potential legal implications, identifying key areas of risk and opportunity.</p>
                  </div>
                  <div className="md:pl-16"></div>
                </div>
                
                {/* Step 2 */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-16 md:order-1 md:-order-none"></div>
                  <div className="md:pl-16">
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center">2</div>
                    <h3 className="font-serif text-xl text-navy mb-4">Strategy Development</h3>
                    <p className="text-charcoal">We develop a customized legal strategy aligned with your business objectives, addressing regulatory compliance, intellectual property protection, and risk management.</p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-16">
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center">3</div>
                    <h3 className="font-serif text-xl text-navy mb-4">Implementation</h3>
                    <p className="text-charcoal">We assist with implementing the legal strategy, including drafting contracts, developing policies, and providing training to your team.</p>
                  </div>
                  <div className="md:pl-16"></div>
                </div>
                
                {/* Step 4 */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-16 md:order-1 md:-order-none"></div>
                  <div className="md:pl-16">
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center">4</div>
                    <h3 className="font-serif text-xl text-navy mb-4">Ongoing Support</h3>
                    <p className="text-charcoal">We provide ongoing legal support to help you navigate the evolving legal landscape and address new challenges as they arise.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-navy py-24 text-white">
          <div className="container mx-auto px-8 text-center">
            <h2 className="font-serif text-3xl mb-6">Innovate with Confidence</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Navigate the legal complexities of emerging technologies with our expert guidance. Contact us to discuss your legal needs.
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
              <Link to="/practice/crypto-assets" className="border border-gray-200 p-8 hover:border-gold transition-colors">
                <h3 className="font-serif text-xl text-navy mb-4">Crypto & Digital Assets</h3>
                <p className="text-charcoal mb-4">Legal solutions for blockchain technologies and digital asset management.</p>
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
              <Link to="/practice/data-privacy" className="border border-gray-200 p-8 hover:border-gold transition-colors">
                <h3 className="font-serif text-xl text-navy mb-4">Data Privacy & Security</h3>
                <p className="text-charcoal mb-4">Comprehensive legal guidance for data protection and cybersecurity compliance.</p>
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

export default EmergingTech;
