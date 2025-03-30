
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Cpu, Database, Bitcoin, Code, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EmergingTech: React.FC = () => {
  const technologies = [
    {
      icon: <Cpu className="h-10 w-10 text-gold" />,
      title: "Artificial Intelligence & Machine Learning",
      description: "Legal frameworks for AI system development, deployment, ownership, liability, and regulatory compliance."
    },
    {
      icon: <Bitcoin className="h-10 w-10 text-gold" />,
      title: "Blockchain & Cryptocurrencies",
      description: "Comprehensive guidance on blockchain implementations, crypto assets, token economics, and regulatory navigation."
    },
    {
      icon: <Database className="h-10 w-10 text-gold" />,
      title: "Data Protection & Privacy",
      description: "Strategic compliance approaches for data-intensive technologies across jurisdictions and regulatory frameworks."
    },
    {
      icon: <Code className="h-10 w-10 text-gold" />,
      title: "Smart Contracts & Automated Systems",
      description: "Legal structures for implementing automated transactions, digital agreements, and algorithmic governance."
    }
  ];

  const services = [
    {
      title: "Regulatory Navigation",
      description: "We help clients operate confidently amid evolving regulations across jurisdictions through compliant structures and practices."
    },
    {
      title: "IP Protection Strategies",
      description: "We develop tailored approaches to protect intellectual property in emerging technology fields where traditional frameworks may be insufficient."
    },
    {
      title: "Investment & Financing Structures",
      description: "We create appropriate legal frameworks for investments in emerging technology companies and projects."
    },
    {
      title: "Risk Mitigation",
      description: "We identify and address potential liability concerns associated with deploying cutting-edge technologies."
    },
    {
      title: "Governance Frameworks",
      description: "We establish clear governance structures for decentralized projects and AI systems with appropriate controls and oversight."
    },
    {
      title: "Commercial Agreements",
      description: "We draft and negotiate specialized agreements for development, deployment, and commercialization of emerging technologies."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-white pt-32 pb-16">
          <div className="container mx-auto px-8">
            <h1 className="font-serif text-5xl text-navy mb-6">Emerging Technology Law</h1>
            <p className="text-lg max-w-3xl">
              Legal guidance for businesses leveraging artificial intelligence, blockchain, and other emerging technologies in a rapidly evolving regulatory landscape.
            </p>
          </div>
        </section>
        
        {/* Overview Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <div>
                <h2 className="font-serif text-3xl text-navy mb-6">Navigating the Future of Technology</h2>
                <p className="text-lg mb-6">
                  Emerging technologies are reshaping industries and creating new legal challenges that traditional frameworks struggle to address. Companies innovating in these spaces need specialized legal guidance to navigate uncertain regulatory environments.
                </p>
                <p className="text-lg mb-6">
                  Our Emerging Technology practice combines deep technical understanding with legal expertise to help clients implement cutting-edge solutions while managing regulatory risks and protecting valuable innovations.
                </p>
                <p className="text-lg">
                  We work with technology companies, startups, investors, and traditional businesses adopting emerging technologies to develop legal approaches that enable innovation while ensuring compliance and risk management.
                </p>
              </div>
              <div className="bg-gray-50 p-8">
                <h3 className="font-serif text-xl text-navy mb-4">The Moye Approach:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
                      <span className="text-gold font-medium">✓</span>
                    </div>
                    <span>Technical fluency combined with legal expertise</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
                      <span className="text-gold font-medium">✓</span>
                    </div>
                    <span>Proactive monitoring of regulatory developments</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
                      <span className="text-gold font-medium">✓</span>
                    </div>
                    <span>Focus on practical solutions that enable innovation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
                      <span className="text-gold font-medium">✓</span>
                    </div>
                    <span>Recognition of both technical and business context</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
                      <span className="text-gold font-medium">✓</span>
                    </div>
                    <span>Collaborative approach with technical and business teams</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Technologies Section */}
        <section className="bg-gray-50 py-24">
          <div className="container mx-auto px-8">
            <h2 className="font-serif text-3xl text-navy mb-12 text-center">Technologies We Cover</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {technologies.map((tech, idx) => (
                <div key={idx} className="bg-white p-8 border border-gray-200">
                  <div className="mb-6">
                    {tech.icon}
                  </div>
                  <h3 className="font-serif text-xl text-navy mb-4">{tech.title}</h3>
                  <p className="text-charcoal">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="bg-white py-24">
          <div className="container mx-auto px-8">
            <h2 className="font-serif text-3xl text-navy mb-12 text-center">Our Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <div key={idx} className="border border-gray-200 p-8">
                  <h3 className="font-serif text-xl text-navy mb-4">{service.title}</h3>
                  <p className="text-charcoal">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* AI & ML Section */}
        <section className="bg-gray-50 py-24">
          <div className="container mx-auto px-8">
            <h2 className="font-serif text-3xl text-navy mb-12 text-center">AI & ML Legal Frameworks</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h3 className="font-serif text-xl text-navy mb-6">Addressing AI's Unique Challenges</h3>
                <p className="mb-6">
                  Artificial intelligence and machine learning systems present novel legal challenges around ownership, liability, transparency, and ethics. Our approach addresses these complexities with practical frameworks that protect innovation while managing risk.
                </p>
                <p>
                  We help clients navigate evolving regulations like the EU AI Act, address data governance concerns, establish appropriate contractual protections, and develop ethical guidelines for AI deployment.
                </p>
              </div>
              <div className="space-y-6">
                <div className="bg-white p-6 border-l-4 border-gold">
                  <h4 className="font-medium mb-2">IP Ownership & Data Rights</h4>
                  <p className="text-sm">Clear frameworks for ownership of AI systems, training data, and AI-generated outputs</p>
                </div>
                <div className="bg-white p-6 border-l-4 border-gold">
                  <h4 className="font-medium mb-2">Liability & Risk Management</h4>
                  <p className="text-sm">Structures to address potential harms and allocate responsibility in automated systems</p>
                </div>
                <div className="bg-white p-6 border-l-4 border-gold">
                  <h4 className="font-medium mb-2">Regulatory Compliance</h4>
                  <p className="text-sm">Strategies to navigate evolving AI regulations across different jurisdictions</p>
                </div>
                <div className="bg-white p-6 border-l-4 border-gold">
                  <h4 className="font-medium mb-2">Ethical Frameworks</h4>
                  <p className="text-sm">Development of governance principles and ethical guidelines for AI development and deployment</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Crypto Section */}
        <section className="bg-white py-24">
          <div className="container mx-auto px-8">
            <h2 className="font-serif text-3xl text-navy mb-12 text-center">Crypto & Blockchain Guidance</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-6 order-2 md:order-1">
                <div className="bg-gray-50 p-6 border-l-4 border-gold">
                  <h4 className="font-medium mb-2">Token Structures & Offerings</h4>
                  <p className="text-sm">Compliant frameworks for token design, issuance, and distribution</p>
                </div>
                <div className="bg-gray-50 p-6 border-l-4 border-gold">
                  <h4 className="font-medium mb-2">Regulatory Navigation</h4>
                  <p className="text-sm">Strategic approaches to securities, commodities, money transmission, and financial regulations</p>
                </div>
                <div className="bg-gray-50 p-6 border-l-4 border-gold">
                  <h4 className="font-medium mb-2">DAO & Governance Structures</h4>
                  <p className="text-sm">Legal frameworks for decentralized autonomous organizations and governance systems</p>
                </div>
                <div className="bg-gray-50 p-6 border-l-4 border-gold">
                  <h4 className="font-medium mb-2">Smart Contract Implementation</h4>
                  <p className="text-sm">Legal guidance for automated transactions and digital agreement structures</p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="font-serif text-xl text-navy mb-6">Navigating Crypto Regulation</h3>
                <p className="mb-6">
                  Blockchain technologies and cryptocurrencies operate in a complex regulatory environment that varies significantly across jurisdictions and continues to evolve rapidly. Our expertise helps clients build compliant structures while pursuing innovation.
                </p>
                <p>
                  We assist with token structuring, regulatory strategy, governance design, and smart contract implementation to create legally sound blockchain-based projects that can withstand regulatory scrutiny.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-navy py-24 text-white">
          <div className="container mx-auto px-8 text-center">
            <h2 className="font-serif text-3xl mb-6">Navigate the Future with Confidence</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Ready to build your emerging technology venture with robust legal frameworks? Contact us to discuss how our specialized expertise can support your innovation journey.
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
              <Link to="/digital-asset-protection" className="border border-gray-200 p-8 hover:border-gold transition-colors">
                <h3 className="font-serif text-xl text-navy mb-4">Digital Asset Protection</h3>
                <p className="text-charcoal mb-4">Comprehensive legal protection for your valuable digital assets.</p>
                <div className="text-gold flex items-center">
                  Learn more <ArrowRight className="ml-2" size={16} />
                </div>
              </Link>
              <Link to="/ip-consulting" className="border border-gray-200 p-8 hover:border-gold transition-colors">
                <h3 className="font-serif text-xl text-navy mb-4">IP Consulting</h3>
                <p className="text-charcoal mb-4">Strategic consulting to help businesses maximize the value of their intellectual property assets.</p>
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
