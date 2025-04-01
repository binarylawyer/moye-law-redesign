import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PracticeAreas from '@/components/PracticeAreas';
import Approach from '@/components/Approach';
import Testimonial from '@/components/Testimonial';
import ConsultationCTA from '@/components/ConsultationCTA';
import Footer from '@/components/Footer';

const Index = () => {
  // Intersection Observer for reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));
    
    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <PracticeAreas />
        <Testimonial />
        <Approach />
        <ConsultationCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index; 