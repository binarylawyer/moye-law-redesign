import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ChevronRight, Shield, Briefcase, Lightbulb, Scale, FileCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const About: React.FC = () => {
  const testimonials = [
    {
      quote: "Moye Law provides unmatched expertise with a refreshing personal touch — they understand our unique needs.",
      name: "Sarah L.",
      role: "Tech Executive",
      initial: "S"
    },
    {
      quote: "Their innovative approach to estate planning gave us peace of mind while respecting our family values.",
      name: "David R.",
      role: "Family Office Director",
      initial: "D"
    },
    {
      quote: "The perfect balance of traditional legal wisdom and forward-thinking solutions.",
      name: "Michael T.",
      role: "Artist & Entrepreneur",
      initial: "M"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-48">
        {/* Hero Section with Mondrian styling */}
        <section className="py-20 md:py-24 bg-white relative">
          {/* Horizontal Mondrian lines that extend beyond screen width */}
          <div className="absolute top-16 left-0 w-full h-4 mondrian-blue -z-10"></div>
          <div className="absolute bottom-16 left-0 w-full h-4 mondrian-red -z-10"></div>
          
          <div className="container mx-auto px-8">
            {/* Mondrian-style title container */}
            <div className="mondrian-grid mb-12">
              <div className="col-span-3 mondrian-light-blue"></div>
              <div className="col-span-6 mondrian-grid-item bg-white p-8 text-center">
                <h1 className="font-display text-4xl md:text-5xl text-black mb-6">
                  Our Firm
                </h1>
                <p className="text-black/80 text-lg md:text-xl">
                  A family-run firm at the intersection of traditional legal expertise and innovative technology.
                </p>
              </div>
              <div className="col-span-3 mondrian-light-yellow"></div>
            </div>
          </div>
        </section>
        
        {/* Mission Section with muted colors */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-white">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl mb-10 text-navy text-center">Our Mission</h2>
              <p className="text-navy/70 text-xl mb-12 text-center">
                To provide sophisticated legal services with the personal touch of a family firm, 
                enhanced by innovative technology that improves efficiency without sacrificing quality.
              </p>
              
              {/* Enhanced card design with more subtle styling */}
              <div className="mt-16 grid md:grid-cols-2 gap-10">
                <div className="bg-white p-10 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group">
                  <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-full bg-light-gray group-hover:bg-navy/5 transition-colors">
                    <span className="text-navy font-display text-2xl">01</span>
                  </div>
                  <h3 className="font-display text-2xl mb-6 text-navy group-hover:text-gold transition-colors">Family Values</h3>
                  <p className="text-navy/70 text-lg">
                    As a family-run firm, we understand the importance of trust, personal attention, 
                    and values that guide decision-making across generations.
                  </p>
                </div>
                
                <div className="bg-white p-10 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group">
                  <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-full bg-light-gray group-hover:bg-navy/5 transition-colors">
                    <span className="text-navy font-display text-2xl">02</span>
                  </div>
                  <h3 className="font-display text-2xl mb-6 text-navy group-hover:text-gold transition-colors">Future-Forward</h3>
                  <p className="text-navy/70 text-lg">
                    We leverage technology to enhance our services, providing efficiency and accuracy 
                    while maintaining the personal relationships our clients value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Enhanced History Section with visual elements */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-light-gray relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-gold/5 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-navy/5 translate-x-1/3 translate-y-1/3"></div>
          
          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="md:w-1/3">
                  <div className="p-1 border-2 border-gold/30 rounded-lg rotate-3 shadow-lg">
                    <AspectRatio ratio={3/4} className="bg-gradient-to-br from-navy/10 to-gold/10 rounded overflow-hidden">
                      <div className="h-full w-full flex flex-col items-center justify-center p-8 text-center">
                        <Scale className="h-12 w-12 text-navy mb-6" />
                        <h4 className="font-display text-2xl text-navy mb-3">Est. 2015</h4>
                        <p className="text-navy/70">Founded on the principles of trust, innovation, and excellence</p>
                      </div>
                    </AspectRatio>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <h2 className="font-display text-3xl md:text-4xl mb-8 text-navy">Our Story</h2>
                  <div className="space-y-6">
                    <p className="text-navy/70 text-lg">
                      Moye Law was founded with a vision to bridge the gap between traditional legal services and 
                      the evolving needs of clients in a digital world. Christopher Moye established the firm after 
                      recognizing that high-net-worth clients needed both sophisticated legal strategies and a more 
                      personal approach than larger firms could provide.
                    </p>
                    <p className="text-navy/70 text-lg">
                      What began as a boutique practice has grown into a respected firm serving clients throughout 
                      New York City and Westchester/Rockland Counties, while maintaining the core values that set us apart. 
                      Throughout our growth, we've remained committed to the perfect balance of personalized service and 
                      innovative solutions.
                    </p>
                    <div className="flex items-center gap-4 pl-6 border-l-2 border-gold">
                      <FileCheck className="text-gold h-8 w-8 flex-shrink-0" />
                      <p className="text-navy/80 italic font-medium">
                        Today, our team combines extensive legal expertise with technological savvy to address complex matters 
                        in specialized practice areas that serve our clients' unique needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* New Client Testimonials Section */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-white">
          <div className="container mx-auto">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl mb-8 text-navy text-center">Client Perspectives</h2>
              <p className="text-navy/70 text-lg mb-12 text-center max-w-3xl mx-auto">
                The trust our clients place in us is our greatest measure of success.
              </p>
              
              <div className="px-8 md:px-16">
                <Carousel opts={{ loop: true }}>
                  <CarouselContent>
                    {testimonials.map((testimonial, index) => (
                      <CarouselItem key={index} className="md:basis-1/1">
                        <Card className="border-0 shadow-none">
                          <CardContent className="p-6">
                            <div className="flex flex-col items-center text-center">
                              <div className="mb-6 text-gold">
                                <svg width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8">
                                  <path d="M13.5 36L0 18V0H18V18H9L13.5 36ZM40.5 36L27 18V0H45V18H36L40.5 36Z" fill="currentColor" fillOpacity="0.2"/>
                                </svg>
                              </div>
                              <blockquote className="text-xl md:text-2xl font-display text-navy mb-8">
                                "{testimonial.quote}"
                              </blockquote>
                              <footer className="flex items-center justify-center">
                                <Avatar className="h-12 w-12 border-2 border-gold/20">
                                  <AvatarFallback className="bg-navy/5 text-navy font-medium">
                                    {testimonial.initial}
                                  </AvatarFallback>
                                </Avatar>
                                <div className="ml-4 text-left">
                                  <p className="font-medium text-navy">{testimonial.name}</p>
                                  <p className="text-navy/70 text-sm">{testimonial.role}</p>
                                </div>
                              </footer>
                            </div>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="flex items-center justify-center mt-8">
                    <CarouselPrevious className="relative static translate-y-0 mr-4 bg-white border-gray-200 hover:bg-light-gray" />
                    <CarouselNext className="relative static translate-y-0 bg-white border-gray-200 hover:bg-light-gray" />
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </section>
        
        {/* Enhanced Team Section Preview */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-light-gray">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl mb-8 text-navy">Our Team</h2>
              <p className="text-navy/70 text-lg mb-10">
                Meet the professionals who make Moye Law's unique approach possible.
              </p>
              <Link 
                to="/team" 
                className="inline-flex items-center font-sans text-lg text-white bg-gold hover:bg-gold/90 px-8 py-3 rounded transition-colors"
              >
                Meet our team <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
        
        {/* New Section for Targeted Personas */}
        <section className="py-16 md:py-28 px-4 md:px-6 bg-white">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl mb-12 text-navy text-center">Who We Serve</h2>
              <p className="text-navy/70 text-xl mb-16 text-center">
                Our practice is tailored to the unique needs of clients who value both personal attention and sophisticated legal strategies.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 text-center">
                  <div className="mx-auto mb-6 w-16 h-16 flex items-center justify-center rounded-full bg-pastel-blue/30">
                    <Lightbulb className="h-8 w-8 text-navy" />
                  </div>
                  <h3 className="font-display text-2xl mb-4 text-navy">Innovators</h3>
                  <p className="text-navy/70 text-lg">
                    Tech founders and digital pioneers who need sophisticated IP protection and forward-thinking estate planning for digital assets.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 text-center">
                  <div className="mx-auto mb-6 w-16 h-16 flex items-center justify-center rounded-full bg-pastel-blue/30">
                    <Briefcase className="h-8 w-8 text-navy" />
                  </div>
                  <h3 className="font-display text-2xl mb-4 text-navy">Executives</h3>
                  <p className="text-navy/70 text-lg">
                    Senior executives balancing career demands with family responsibilities, including care for aging parents and estate planning.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 text-center">
                  <div className="mx-auto mb-6 w-16 h-16 flex items-center justify-center rounded-full bg-pastel-blue/30">
                    <Shield className="h-8 w-8 text-navy" />
                  </div>
                  <h3 className="font-display text-2xl mb-4 text-navy">Legacy Builders</h3>
                  <p className="text-navy/70 text-lg">
                    High-net-worth individuals focused on preserving family wealth and establishing governance structures for multi-generational assets.
                  </p>
                </div>
              </div>
              
              <div className="text-center mt-12">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-8 py-3 font-sans text-lg text-white bg-gold hover:bg-gold/90 rounded transition-colors"
                >
                  Schedule a Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Extra whitespace section */}
        <div className="h-24 md:h-40"></div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
