import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import PracticeAreaOverview from '@/components/PracticeAreaOverview';
import RecentArticles from '@/components/blog/RecentArticles';
import CallToAction from '@/components/shared/CallToAction';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Practice Area Overview */}
        <PracticeAreaOverview />
        
        {/* Recent Articles or Blog Posts */}
        <RecentArticles />
        
        {/* Call To Action - Mondrian style */}
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home; 