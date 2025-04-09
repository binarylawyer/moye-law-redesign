import React from 'react';
import Layout from '@/components/Layout';
import ContactHero from '@/components/contact/ContactHero';
import MultiStepForm from '@/components/contact/MultiStepForm';
import PrivacyMessage from '@/components/contact/PrivacyMessage';

const ContactPage: React.FC = () => {
  return (
    <Layout>
      <div className="contact-page">
        <ContactHero />
        
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-navy text-center mb-2">
                Get Personalized Legal Support
              </h2>
              <p className="text-gray-600 text-center mb-10">
                Use our guided form to tell us about your specific needs and receive a free estate planning book.
              </p>
              
              <MultiStepForm className="mb-10" />
              
              <PrivacyMessage />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ContactPage; 