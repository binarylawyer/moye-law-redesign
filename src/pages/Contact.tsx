
import React, { useRef, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Check } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";

// Form schema definition
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Please provide more details about your inquiry"),
  confidentiality: z.boolean().refine(val => val === true, {
    message: "You must agree to our confidentiality terms"
  })
});

type FormValues = z.infer<typeof formSchema>;

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const elementsRef = useRef<Array<HTMLElement | null>>([]);
  
  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      confidentiality: false
    }
  });
  
  // Handle form submission
  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      toast({
        title: "Request Received",
        description: "We'll contact you within 1 business day.",
      });
    }, 1000);
  };

  // Animation for elements when they come into view
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    const elements = elementsRef.current.filter(Boolean) as HTMLElement[];
    elements.forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      elements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <>
      <Header />
      <main className="pt-32 bg-white">
        {/* Hero Section */}
        <section className="pt-16 pb-16 md:pt-24 md:pb-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 
                ref={el => elementsRef.current[0] = el} 
                className="reveal font-serif text-4xl md:text-5xl text-navy mb-6"
              >
                Contact & Consultation
              </h1>
              <p 
                ref={el => elementsRef.current[1] = el} 
                className="reveal text-lg text-charcoal/80 mb-8"
                style={{ transitionDelay: '0.1s' }}
              >
                Take the first step toward securing your legacy with a confidential consultation. All inquiries are protected by attorney-client privilege.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form and Information */}
        <section className="py-8 md:py-16 bg-light-gray">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 max-w-6xl mx-auto">
              
              {/* Contact Form */}
              <div 
                ref={el => elementsRef.current[2] = el}
                className="reveal lg:col-span-7 bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100"
                style={{ transitionDelay: '0.2s' }}
              >
                <h2 className="font-serif text-2xl text-navy mb-6">Request a Consultation</h2>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                      <Check className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-serif text-navy mb-4">Request Received</h3>
                    <p className="text-charcoal/80 mb-6">
                      Thank you for reaching out. We'll contact you within 1 business day to schedule your consultation.
                    </p>
                    <Button 
                      onClick={() => setIsSubmitted(false)}
                      variant="outline" 
                      className="mt-4"
                    >
                      Submit another request
                    </Button>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-navy">Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your full name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-navy">Email</FormLabel>
                              <FormControl>
                                <Input placeholder="your@email.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-navy">Phone (optional)</FormLabel>
                              <FormControl>
                                <Input placeholder="Your phone number" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-navy">How can we assist you?</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Please briefly describe your legal needs" 
                                className="min-h-[120px]" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="confidentiality"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox 
                                checked={field.value} 
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel className="text-sm text-charcoal/80">
                                I understand that my information will be kept confidential and is protected by attorney-client privilege
                              </FormLabel>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        className="w-full md:w-auto bg-gold hover:bg-gold/90 text-white font-medium"
                      >
                        Request Consultation
                      </Button>
                      
                      <p className="text-xs text-charcoal/60">
                        You'll receive a response within 1 business day
                      </p>
                    </form>
                  </Form>
                )}
              </div>
              
              {/* Contact Information */}
              <div 
                ref={el => elementsRef.current[3] = el}
                className="reveal lg:col-span-5"
                style={{ transitionDelay: '0.3s' }}
              >
                <h2 className="font-serif text-2xl text-navy mb-6">Our Offices</h2>
                
                <div className="space-y-6 mb-8">
                  {/* New York Office */}
                  <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                    <h3 className="font-serif text-lg text-navy mb-3">New York</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <MapPin className="w-5 h-5 text-gold mr-3 mt-1" />
                        <p className="text-charcoal/80">
                          123 Park Avenue<br />
                          New York, NY 10001
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Virginia Office */}
                  <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                    <h3 className="font-serif text-lg text-navy mb-3">Virginia</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <MapPin className="w-5 h-5 text-gold mr-3 mt-1" />
                        <p className="text-charcoal/80">
                          456 Main Street<br />
                          Alexandria, VA 22314
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Direct Contact */}
                <h3 className="font-serif text-lg text-navy mb-4">Direct Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-gold mr-3" />
                    <a href="tel:+12125551234" className="text-charcoal/80 hover:text-navy transition-colors">
                      (212) 555-1234
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-gold mr-3" />
                    <a href="mailto:contact@moye.law" className="text-charcoal/80 hover:text-navy transition-colors">
                      contact@moye.law
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Confidentiality Statement */}
        <section className="py-8 md:py-16">
          <div className="container mx-auto px-4">
            <div 
              ref={el => elementsRef.current[4] = el}
              className="reveal max-w-3xl mx-auto text-center"
              style={{ transitionDelay: '0.4s' }}
            >
              <h2 className="font-serif text-2xl text-navy mb-4">Our Commitment to Privacy</h2>
              <p className="text-charcoal/80 mb-6">
                At Moye Law, we understand the sensitive nature of legal matters. All consultations and communications are protected by attorney-client privilege and held in the strictest confidence.
              </p>
              <Link 
                to="/practice"
                className="text-navy hover:text-gold transition-colors font-medium"
              >
                Learn more about our practice areas
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
