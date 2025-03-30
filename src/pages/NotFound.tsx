
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-light-gray">
        <div className="text-center px-24 py-64">
          <h1 className="font-serif text-navy text-5xl mb-16">404</h1>
          <p className="text-xl mb-32">The page you're looking for cannot be found.</p>
          <Button asChild className="bg-gold hover:bg-gold/90 text-white">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
