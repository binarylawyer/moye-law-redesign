import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import MondrianIntro from '@/components/MondrianIntro';
import PracticeAreas from '@/components/PracticeAreas';
import Approach from '@/components/Approach';
import CallToAction from '@/components/shared/CallToAction';
import PersonaPathways from '@/components/PersonaPathways';
import TrustIndicators from '@/components/TrustIndicators';
import '../styles/mondrian.css';
import { useLocation } from 'react-router-dom';

const Index = () => {
  const location = useLocation();
  
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
    
    // Log the current components to help with debugging
    console.log("Index page components loaded");
    
    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Add debugging information
  useEffect(() => {
    console.log("===== COMPONENT DEBUGGING =====");
    console.log("Hero is defined:", !!Hero);
    console.log("MondrianIntro is defined:", !!MondrianIntro);
    console.log("PracticeAreas is defined:", !!PracticeAreas);
    console.log("Approach is defined:", !!Approach);
    console.log("CallToAction is defined:", !!CallToAction);
    console.log("PersonaPathways is defined:", !!PersonaPathways);
    console.log("TrustIndicators is defined:", !!TrustIndicators);
    
    // Add DOM check after render
    setTimeout(() => {
      console.log("===== DOM ELEMENT CHECK =====");
      console.log("Hero element:", document.querySelector('section.hero-section'));
      console.log("Approach element:", document.querySelector('section.moye-approach-section'));
      console.log("Approach element display:", document.querySelector('section.moye-approach-section')?.style.display);
      
      // Force the Approach section to be visible if found
      const approachSection = document.querySelector('section.moye-approach-section');
      if (approachSection) {
        approachSection.setAttribute('style', 'display: block !important; visibility: visible !important; opacity: 1 !important;');
        console.log("Applied forced visibility to Approach section");
      }
    }, 1000);
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <main className="overflow-hidden">
        <Hero />
        <TrustIndicators />
        <PersonaPathways />
        <MondrianIntro />
        <PracticeAreas />
        <Approach />
        <CallToAction />
      </main>
    </div>
  );
};

export default Index;
