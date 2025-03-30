
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-light-gray pt-24">
        <div className="text-center px-24 py-96">
          <h1 className="font-serif text-navy text-5xl md:text-7xl mb-24 animate-fade-in">404</h1>
          <p className="text-xl mb-48 animate-fade-in-slow">The page you're looking for cannot be found.</p>
          <Button asChild className="bg-gold hover:bg-gold/90 text-white animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
