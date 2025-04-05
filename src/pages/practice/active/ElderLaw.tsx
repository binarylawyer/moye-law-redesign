import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, HeartHandshake, Clock, BookOpen, Shield, Columns, CalendarCheck, Award, Users, FileText, MessageSquareShare } from 'lucide-react';
import MondrianClassicComposition from '@/components/MondrianClassicComposition';
import { elderLawData } from '@/data/practiceAreas/elderLaw';
import { logger } from '@/utils/logger';
import CallToAction from '@/components/shared/CallToAction';

const ElderLaw: React.FC = () => {
  logger.debug('ElderLaw component rendered');
  
  // Refs for scroll animations
  const servicesRef = useRef<HTMLDivElement>(null);
  const caregiverRef = useRef<HTMLDivElement>(null);
  const medicaidRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const stressRef = useRef<HTMLDivElement>(null);
  const downloadRef = useRef<HTMLDivElement>(null);
  
  // Intersection Observer for reveal animations
  useEffect(() => {
    // Make all sections visible initially, then apply animations
    const sections = [
      servicesRef.current,
      caregiverRef.current,
      medicaidRef.current,
      testimonialsRef.current,
      stressRef.current,
      downloadRef.current
    ];
    
    sections.filter(Boolean).forEach((section) => {
      if (section) {
        // First make sure it's visible
        section.classList.remove('opacity-0');
        section.classList.add('opacity-100');
        
        // Then add animation class
        setTimeout(() => {
          section.classList.add('animate-fade-in-slow');
        }, 100);
      }
    });
    
    // Original animation logic with IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-slow');
        }
      });
    }, { threshold: 0.15 });
    
    sections.filter(Boolean).forEach((section) => section && observer.observe(section));
    
    return () => {
      sections.filter(Boolean).forEach((section) => section && observer.unobserve(section));
    };
  }, []);
  
  // Caregiver challenges
  const caregiverChallenges = [
    {
      icon: <Clock className="h-8 w-8 text-[#D6001C]" />,
      title: "Balancing Work & Care",
      description: "Strategies for executives managing high-demand careers while overseeing parent care, including legal frameworks that provide flexibility and protection.",
      color: "border-[#D6001C]",
      bgColor: "bg-[#D6001C]/5"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-[#4D80D4]" />,
      title: "Healthcare Decisions",
      description: "Guidance for navigating complex healthcare systems, establishing clear decision-making authority, and ensuring your parents' wishes are honored.",
      color: "border-[#4D80D4]",
      bgColor: "bg-[#4D80D4]/5"
    },
    {
      icon: <Shield className="h-8 w-8 text-[#FFEB80]" />,
      title: "Asset Protection",
      description: "Protecting family assets from healthcare costs while maintaining dignity and quality of care, with specialized planning for executives with complex finances.",
      color: "border-[#FFEB80]",
      bgColor: "bg-[#FFEB80]/5"
    }
  ];
  
  // Medicaid planning steps
  const medicaidPlanning = [
    {
      title: "Asset Assessment",
      description: "Comprehensive review of current assets, income sources, and how they may impact Medicaid eligibility.",
      icon: <Columns className="h-8 w-8 text-[#D6001C]" />
    },
    {
      title: "Look-Back Analysis",
      description: "Expert evaluation of the 5-year look-back period, identifying potential issues and developing mitigation strategies.",
      icon: <CalendarCheck className="h-8 w-8 text-[#4D80D4]" />
    },
    {
      title: "Strategic Restructuring",
      description: "Implementation of legal asset protection strategies that preserve resources while enhancing eligibility.",
      icon: <Award className="h-8 w-8 text-[#00A650]" />
    },
    {
      title: "Family Protection",
      description: "Specialized planning to protect the interests of spouses and family members while qualifying for benefits.",
      icon: <Users className="h-8 w-8 text-[#FFEB80]" />
    }
  ];
  
  // Advance directives elements
  const advanceDirectives = [
    {
      title: "Healthcare Proxy",
      description: "Designate a trusted individual to make healthcare decisions if you become unable to do so, with clear guidance on your preferences.",
      icon: <HeartHandshake className="h-8 w-8 text-[#D6001C]" />
    },
    {
      title: "Living Will",
      description: "Document specifying your wishes regarding medical treatments and end-of-life care, providing clarity during difficult situations.",
      icon: <FileText className="h-8 w-8 text-[#4D80D4]" />
    },
    {
      title: "HIPAA Authorization",
      description: "Allow designated individuals to access your medical information, facilitating informed decision-making by your caregivers.",
      icon: <MessageSquareShare className="h-8 w-8 text-[#00A650]" />
    }
  ];
  
  // Caregiver testimonials
  const testimonials = [
    {
      quote: "As a senior executive juggling global responsibilities with caring for my mother, I needed clear legal guidance without unnecessary complexity. Moye Law provided exactly that—practical solutions that respected both my time constraints and my mother's dignity.",
      name: "Jennifer M.",
      role: "CFO & Daughter",
      location: "Westchester County"
    },
    {
      quote: "When my father's dementia advanced while I was in the middle of a crucial business expansion, Moye Law helped me establish a framework that protected him while allowing me to fulfill my responsibilities. Their understanding of both worlds was invaluable.",
      name: "Robert K.",
      role: "Business Owner & Son",
      location: "Manhattan"
    }
  ];
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Mondrian-inspired design */}
      <section className="pt-32 md:pt-40 pb-16">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row">
            {/* Mondrian composition on left */}
            <div className="w-full md:w-1/4 flex-shrink-0 h-64 md:h-auto">
              <MondrianClassicComposition />
            </div>
            
            {/* Added spacing between Mondrian and content */}
            <div className="bg-white w-full md:w-16 p-8 hidden md:block"></div>
            
            {/* White content block */}
            <div className="bg-white border-4 border-black p-8 md:p-12 w-full md:flex-1 text-center">
              <h1 className="font-display text-black text-4xl md:text-5xl lg:text-6xl mb-8">
                Elder Law
              </h1>
              <p className="text-xl text-black/80">
                Expert legal guidance for executives balancing career demands with aging parent care, delivered with empathy and efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Executive Caregiver Challenges Section */}
      <section 
        ref={caregiverRef}
        className="py-24 bg-gray-50 opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto mb-16">
            <div className="border-l-4 border-[#D6001C] pl-6 mb-8">
              <h2 className="font-display text-3xl md:text-4xl text-black mb-4">For Busy Executive Caregivers</h2>
              <p className="text-lg text-gray-700">We understand the unique challenges faced by professionals balancing demanding careers with elder care responsibilities.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caregiverChallenges.map((challenge, index) => (
              <div 
                key={index}
                className={`border-2 ${challenge.color} p-8 rounded-md transition-all duration-300 hover:shadow-lg ${challenge.bgColor} h-full`}
              >
                <div className="mb-6">
                  {challenge.icon}
                </div>
                <h3 className="font-display text-2xl text-black mb-4">{challenge.title}</h3>
                <p className="text-gray-700">{challenge.description}</p>
              </div>
            ))}
          </div>
          
          <div className="max-w-2xl mx-auto mt-16 p-8 bg-white border border-gray-200 rounded-lg shadow-sm">
            <h3 className="font-display text-2xl text-center text-black mb-6">The Executive Caregiver's Dilemma</h3>
            <p className="text-gray-700 mb-4">
              When you're managing high-level career responsibilities while caring for aging parents, every minute counts. Our approach focuses on providing clear, actionable legal solutions that respect your time constraints while ensuring your parents receive the protection they deserve.
            </p>
            <p className="text-gray-700">
              As executives ourselves, we understand the importance of efficiency, discretion, and strategic planning in both your professional and personal life.
            </p>
          </div>
        </div>
      </section>
      
      {/* Elder Law Services Section */}
      <section 
        ref={servicesRef}
        className="py-24 opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-black mb-6 text-center">Elder Law Services</h2>
            <p className="text-gray-700 text-center">Comprehensive legal solutions tailored to the needs of aging parents and their executive caregivers.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {elderLawData.elderLawAreas.map((area, index) => (
              <div key={index} className="flex gap-6">
                <div className={`flex-shrink-0 h-14 w-14 rounded-full bg-${['red', 'blue', 'yellow', 'green'][index % 4]}-100 flex items-center justify-center`}>
                  <span className="text-lg font-display text-black">{index + 1}</span>
                </div>
                <div>
                  <h3 className="font-display text-2xl text-black mb-3">{area.title}</h3>
                  <p className="text-gray-700">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link 
              to="/contact"
              className="inline-flex items-center font-medium text-[#D6001C] hover:text-[#D6001C]/80"
            >
              Schedule a consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Medicaid Planning Section */}
      <section 
        ref={medicaidRef}
        className="py-24 bg-gray-50 opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-black mb-6 text-center">Medicaid Planning Strategy</h2>
            <p className="text-gray-700 text-center max-w-3xl mx-auto">
              Our proactive approach to Medicaid planning helps protect family assets while ensuring your parents receive the care they need.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {medicaidPlanning.map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm flex items-start gap-4">
                <div className="flex-shrink-0">
                  {step.icon}
                </div>
                <div>
                  <h3 className="font-display text-xl text-black mb-2">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="max-w-3xl mx-auto mt-16 bg-white p-8 border-l-4 border-[#4D80D4] rounded-r-lg shadow-sm">
            <h3 className="font-display text-2xl text-black mb-4">Why Executives Need Medicaid Planning</h3>
            <p className="text-gray-700 mb-4">
              Even with substantial income and assets, the cost of long-term care can quickly deplete family resources. Our specialized Medicaid planning for high-income families helps protect your parents' assets and your inheritance while navigating complex eligibility requirements.
            </p>
            <p className="text-gray-700">
              We develop strategies that work seamlessly with your busy schedule, providing protection without adding administrative burden to your already full plate.
            </p>
          </div>
        </div>
      </section>
      
      {/* Advance Directives Section */}
      <section className="py-24 opacity-0 transition-opacity duration-1000 ease-in-out">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-black mb-6 text-center">Essential Advance Directives</h2>
            <p className="text-gray-700 text-center max-w-3xl mx-auto">
              Clear, legally sound documentation ensures healthcare wishes are respected and decisions can be made efficiently during critical moments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {advanceDirectives.map((directive, index) => (
              <div key={index} className="bg-white p-8 border border-gray-200 rounded-lg shadow-sm text-center">
                <div className="flex justify-center mb-6">
                  {directive.icon}
                </div>
                <h3 className="font-display text-xl text-black mb-4">{directive.title}</h3>
                <p className="text-gray-700">{directive.description}</p>
              </div>
            ))}
          </div>
          
          <div className="max-w-3xl mx-auto mt-16 p-6 bg-[#4D80D4]/5 rounded-lg border border-[#4D80D4]/20">
            <h4 className="font-display text-xl text-black mb-3 text-center">Executive Insight</h4>
            <p className="text-gray-700 italic text-center">
              "For busy professionals, having clear advance directives in place isn't just about medical care—it's about preventing crisis management that disrupts both your career and your ability to provide meaningful support when it matters most."
            </p>
          </div>
        </div>
      </section>
      
      {/* Caregiver Testimonials */}
      <section 
        ref={testimonialsRef} 
        className="py-24 bg-gray-50 opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-black mb-6 text-center">From Fellow Executives</h2>
            <p className="text-gray-700 text-center">
              Hear from other high-level professionals who successfully navigate elder care responsibilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-[#D6001C]"
              >
                <p className="text-gray-700 italic mb-8">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-gray-600 font-medium">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-medium text-black">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.role}, {testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Caregiver Stress Relief Guide */}
      <section 
        ref={stressRef}
        className="py-24 opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-10 border border-gray-200 rounded-lg shadow-sm">
              <h2 className="font-display text-3xl text-black mb-6 text-center">Executive Caregiver Stress Relief Guide</h2>
              <p className="text-gray-700 mb-8 text-center">
                Practical strategies for managing the emotional and logistical challenges of elder care while maintaining your professional performance.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-[#D6001C] pl-4">
                  <h3 className="font-display text-xl text-black mb-2">Delegate Strategically</h3>
                  <p className="text-gray-700">
                    Just as you delegate at work, identify aspects of caregiving that can be handled by others. Our legal framework helps clarify roles and responsibilities.
                  </p>
                </div>
                
                <div className="border-l-4 border-[#4D80D4] pl-4">
                  <h3 className="font-display text-xl text-black mb-2">Establish Clear Documentation</h3>
                  <p className="text-gray-700">
                    Comprehensive legal documents eliminate ambiguity in emergencies, allowing you to make decisions quickly and confidently despite work demands.
                  </p>
                </div>
                
                <div className="border-l-4 border-[#FFEB80] pl-4">
                  <h3 className="font-display text-xl text-black mb-2">Create Communication Protocols</h3>
                  <p className="text-gray-700">
                    Develop systems for managing healthcare updates that respect your work schedule while ensuring you stay informed about important developments.
                  </p>
                </div>
              </div>
              
              <div 
                ref={downloadRef}
                className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-center opacity-0 transition-opacity duration-1000 ease-in-out"
              >
                <h3 className="font-display text-xl text-black mb-4">Download Our Free Guide</h3>
                <p className="text-gray-700 mb-6">
                  Our comprehensive "Executive's Guide to Elder Care" provides detailed strategies specifically designed for busy professionals.
                </p>
                <Link 
                  to="/resources/executive-elder-care-guide"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#D6001C] text-white rounded-md hover:bg-[#D6001C]/90 transition-colors"
                >
                  Download Free Guide
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <CallToAction
        title="Schedule a Consultation That Respects Your Time"
        description="Our specialized consultations for executives include options for early morning, evening, and video meetings to accommodate your demanding schedule."
        buttonText="Request Executive Consultation"
        buttonLink="/contact"
      />
    </div>
  );
};

export default ElderLaw; 