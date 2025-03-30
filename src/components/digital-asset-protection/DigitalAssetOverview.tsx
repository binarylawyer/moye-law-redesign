
import React from 'react';

const DigitalAssetOverview: React.FC = () => {
  return (
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
  );
};

export default DigitalAssetOverview;
