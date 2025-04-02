import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check } from "lucide-react";
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
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { sanitizeFormData } from '@/utils/formSanitization';
import { logger } from '@/utils/logger';

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

interface ContactFormProps {
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
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
  const onSubmit = async (data: FormValues) => {
    try {
      setIsSubmitting(true);
      
      // Sanitize form data before sending
      const sanitizedData = sanitizeFormData(data);
      
      // Log sanitized data (without sensitive info in production)
      if (import.meta.env.MODE !== 'production') {
        logger.debug("Form data after sanitization:", sanitizedData);
      }
      
      // Simulate form submission with a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, this would be an API call
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(sanitizedData)
      // });
      
      setIsSubmitted(true);
      toast({
        title: "Request Received",
        description: "We'll contact you within 1 business day.",
      });
    } catch (error) {
      logger.error("Error submitting contact form:", error);
      toast({
        title: "Submission Error",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100 ${className}`}>
      <h2 className="font-display text-2xl text-navy mb-6">Request a Consultation</h2>
      
      {isSubmitted ? (
        <div className="text-center py-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-medium text-gray-900 mb-2">Thank You</h3>
          <p className="text-gray-600 mb-6">
            Your consultation request has been received. A member of our team will contact you within 1 business day.
          </p>
          <Button 
            onClick={() => setIsSubmitted(false)} 
            variant="outline"
            className="border-gold text-gold hover:bg-gold hover:text-white"
          >
            Submit Another Request
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
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Request Consultation"}
            </Button>
            
            <p className="text-xs text-charcoal/60">
              You'll receive a response within 1 business day
            </p>
          </form>
        </Form>
      )}
    </div>
  );
};

export default ContactForm;
