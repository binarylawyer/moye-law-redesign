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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// Form schema definition
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Please provide more details about your inquiry"),
  serviceInterest: z.string({
    required_error: "Please select an area of interest",
  }),
  communicationPreference: z.string({
    required_error: "Please select your preferred communication method",
  }),
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
      serviceInterest: "",
      communicationPreference: "email",
      confidentiality: false
    }
  });
  
  // Service interest options grouped by persona focus
  const serviceOptions = [
    { value: "estate-planning", label: "Estate Planning", group: "All Clients" },
    { value: "elder-law", label: "Elder Law & Medicaid Planning", group: "Caregiver Focus" },
    { value: "probate", label: "Probate & Estate Administration", group: "All Clients" },
    { value: "trust-formation", label: "Trust Formation & Administration", group: "Legacy Builders" },
    { value: "digital-assets", label: "Digital Asset Protection", group: "Tech Innovators" },
    { value: "intellectual-property", label: "Intellectual Property", group: "Tech Innovators" },
    { value: "family-governance", label: "Family Governance & Wealth Preservation", group: "Legacy Builders" },
    { value: "art-law", label: "Art & Cultural Property Law", group: "Legacy Builders" },
    { value: "business-succession", label: "Business Succession Planning", group: "Tech Innovators/Legacy Builders" },
    { value: "other", label: "Other Legal Matter", group: "All Clients" },
  ];
  
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
            Your consultation request has been received. A member of our team will contact you within 1 business day using your preferred communication method.
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
            
            {/* Service Interest Selection */}
            <FormField
              control={form.control}
              name="serviceInterest"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-navy">Primary Area of Interest</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select the service you're interested in" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {/* Group options by persona focus */}
                      {["All Clients", "Tech Innovators", "Caregiver Focus", "Legacy Builders", "Tech Innovators/Legacy Builders"].map(group => (
                        <React.Fragment key={group}>
                          <div className="px-2 py-1.5 text-sm font-medium text-muted-foreground">{group}</div>
                          {serviceOptions
                            .filter(option => option.group === group)
                            .map(option => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))
                          }
                        </React.Fragment>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
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
            
            {/* Communication Preference */}
            <FormField
              control={form.control}
              name="communicationPreference"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="text-navy">Preferred Communication Method</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="email" id="email" />
                        <FormLabel htmlFor="email" className="font-normal cursor-pointer">Email</FormLabel>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="phone" id="phone" />
                        <FormLabel htmlFor="phone" className="font-normal cursor-pointer">Phone</FormLabel>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="video" id="video" />
                        <FormLabel htmlFor="video" className="font-normal cursor-pointer">Video Conference</FormLabel>
                      </div>
                    </RadioGroup>
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
              You'll receive a response within 1 business day via your preferred communication method
            </p>
          </form>
        </Form>
      )}
    </div>
  );
};

export default ContactForm;
