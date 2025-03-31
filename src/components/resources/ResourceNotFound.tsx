
import React from 'react';
import { Link } from 'react-router-dom';
import Header from "../Header";
import Footer from "../Footer";

const ResourceNotFound: React.FC = () => {
  return (
    <>
      <Header />
      <main className="pt-32 bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-3xl text-navy mb-4">Resource Not Found</h1>
            <p className="text-charcoal/80 mb-6">The resource you're looking for doesn't exist or has been moved.</p>
            <Link 
              to="/resources"
              className="text-navy hover:text-gold transition-colors font-medium"
            >
              Back to Resources
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ResourceNotFound;
