
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Key, FileText, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DigitalAssetProtection: React.FC = () => {
  const protectionStrategies = [
    {
      icon: <Shield className="h-10 w-10 text-gold" />,
      title: "Comprehensive Legal Protection",
      description: "We develop legal structures that protect digital assets from creditors, disputes, and unauthorized access while enabling authorized use and succession."
    },
    {
      icon: <Key className="h-10 w-10 text-gold" />,
      title: "Access & Recovery Protocols",
      description: "We establish secure but accessible protocols that ensure digital assets remain available to authorized parties regardless of circumstance."
    },
    {
      icon: <FileText className="h-10 w-10 text-gold" />,
      title: "Documentation & Inventory",
      description: "We create thorough documentation systems that catalog and track digital assets while maintaining appropriate confidentiality."
    },
    {
      icon: <Users className="h-10 w-10 text-gold" />,
      title: "Succession Planning",
      description: "We integrate digital assets into comprehensive estate plans to ensure seamless transfer according to your wishes."
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
              <h1 className="font-serif text-navy text-5xl md:text-6xl lg:text-7xl mb-16">Digital Asset Protection</h1>
              <p className="text-xl md:text-2xl text-charcoal/80 mx-auto">
                Comprehensive legal protection for your valuable digital assets, from cryptocurrencies and NFTs to domain names and digital intellectual property.
              </p>
            </div>
          </div>
        </section>
        
        {/* Overview Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <div>
                <h2 className="font-serif text-3xl text-navy mb-6">Protecting Your Digital Wealth</h2>
                <p className="text-lg mb-6">
                  Digital assets represent an increasingly significant portion of personal and business wealth. Without proper protection, these assets face unique vulnerabilities including loss of access, regulatory uncertainty, and succession challenges.
                </p>
                <p className="text-lg mb-6">
                  Our Digital Asset Protection practice combines traditional legal protections with innovative technical approaches to ensure your digital assets remain secure and transferable according to your wishes.
                </p>
                <p className="text-lg">
                  We work with high-net-worth individuals, family offices, and businesses to establish comprehensive protection for all forms of digital assets.
                </p>
              </div>
              <div className="bg-gray-50 p-8">
                <h3 className="font-serif text-xl text-navy mb-4">We Protect:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
                      <span className="text-gold font-medium">✓</span>
                    </div>
                    <span>Cryptocurrencies (Bitcoin, Ethereum, etc.)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
                      <span className="text-gold font-medium">✓</span>
                    </div>
                    <span>Non-Fungible Tokens (NFTs)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
                      <span className="text-gold font-medium">✓</span>
                    </div>
                    <span>Digital securities and tokens</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
                      <span className="text-gold font-medium">✓</span>
                    </div>
                    <span>Domain names and web properties</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
                      <span className="text-gold font-medium">✓</span>
                    </div>
                    <span>Digital intellectual property</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
                      <span className="text-gold font-medium">✓</span>
                    </div>
                    <span>Online accounts with monetary or sentimental value</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Protection Strategies */}
        <section className="bg-gray-50 py-24">
          <div className="container mx-auto px-8">
            <h2 className="font-serif text-3xl text-navy mb-12 text-center">Our Protection Strategies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {protectionStrategies.map((strategy, idx) => (
                <div key={idx} className="bg-white p-8 border border-gray-200">
                  <div className="mb-6">
                    {strategy.icon}
                  </div>
                  <h3 className="font-serif text-xl text-navy mb-4">{strategy.title}</h3>
                  <p className="text-charcoal">{strategy.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Process Section - Fixed to alternate text on both sides */}
        <section className="bg-white py-24">
          <div className="container mx-auto px-8">
            <h2 className="font-serif text-3xl text-navy mb-12 text-center">Our Digital Asset Protection Process</h2>
            
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-0.5 bg-gray-200"></div>
              
              {/* Process steps */}
              <div className="space-y-24">
                {/* Step 1 */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-16">
                    <h3 className="font-serif text-xl text-navy mb-4">Digital Asset Inventory</h3>
                    <p className="text-charcoal">We conduct a comprehensive inventory of all digital assets, their locations, access methods, and associated values.</p>
                  </div>
                  <div className="md:pl-16"></div>
                  {/* Circle marker */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-ocean-blue text-white flex items-center justify-center">1</div>
                </div>
                
                {/* Step 2 */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:order-2 md:text-left">
                    <h3 className="font-serif text-xl text-navy mb-4 md:pl-16">Risk Assessment</h3>
                    <p className="text-charcoal md:pl-16">We evaluate potential vulnerabilities and risks specific to each digital asset type and your personal situation.</p>
                  </div>
                  <div></div>
                  {/* Circle marker */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-ocean-blue text-white flex items-center justify-center">2</div>
                </div>
                
                {/* Step 3 */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-16">
                    <h3 className="font-serif text-xl text-navy mb-4">Protection Strategy Development</h3>
                    <p className="text-charcoal">We create a customized protection strategy combining legal structures, technical protocols, and documentation systems.</p>
                  </div>
                  <div></div>
                  {/* Circle marker */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-ocean-blue text-white flex items-center justify-center">3</div>
                </div>
                
                {/* Step 4 */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:order-2 md:text-left">
                    <h3 className="font-serif text-xl text-navy mb-4 md:pl-16">Implementation</h3>
                    <p className="text-charcoal md:pl-16">We assist with implementing all protection measures, including establishing legal entities, drafting documents, and coordinating with technical advisors.</p>
                  </div>
                  <div></div>
                  {/* Circle marker */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-ocean-blue text-white flex items-center justify-center">4</div>
                </div>
                
                {/* Step 5 */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-16">
                    <h3 className="font-serif text-xl text-navy mb-4">Ongoing Monitoring & Updates</h3>
                    <p className="text-charcoal">We provide regular reviews to ensure your protection strategy remains effective as regulations, technologies, and your holdings evolve.</p>
                  </div>
                  <div></div>
                  {/* Circle marker */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-ocean-blue text-white flex items-center justify-center">5</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-navy py-24 text-white">
          <div className="container mx-auto px-8 text-center">
            <h2 className="font-serif text-3xl mb-6">Protect Your Digital Legacy</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Digital assets require specialized protection strategies. Contact us to discuss how we can help secure your digital wealth.
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
              <Link to="/practice/estate-planning" className="border border-gray-200 p-8 hover:border-gold transition-colors">
                <h3 className="font-serif text-xl text-navy mb-4">Estate Planning & Trusts</h3>
                <p className="text-charcoal mb-4">Strategic wealth preservation and legacy planning for high-net-worth individuals.</p>
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

export default DigitalAssetProtection;
