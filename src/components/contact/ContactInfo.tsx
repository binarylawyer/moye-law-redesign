import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactInfoSchema } from '@/utils/validationSchemas';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

// Extract the inferred type from the schema
type ContactInfoValues = z.infer<typeof contactInfoSchema>;

interface ContactInfoProps {
  onSubmit: (data: ContactInfoValues) => void;
  onBack: () => void;
  isSubmitting: boolean;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  onSubmit,
  onBack,
  isSubmitting
}) => {
  // Referral source options
  const referralOptions = [
    { value: "Google", label: "Google Search" },
    { value: "Referral", label: "Referral from a Friend/Colleague" },
    { value: "Social Media", label: "Social Media" },
    { value: "Event", label: "Event or Seminar" },
    { value: "Other", label: "Other" }
  ];
  
  // Initialize form with validation
  const form = useForm<ContactInfoValues>({
    resolver: zodResolver(contactInfoSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      incentive_requested: true,
      referral_source: 'Google'
    }
  });
  
  // Handle form submission
  const handleSubmit = (values: ContactInfoValues) => {
    onSubmit(values);
  };
  
  return (
    <div className="step-container">
      <h2 className="text-2xl md:text-3xl font-display font-bold text-navy mb-2">
        Your Contact Information
      </h2>
      <p className="text-gray-600 mb-6">
        Please provide your details so we can send you the free book and follow up with personalized guidance.
      </p>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          {/* Full Name Field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-navy font-medium">Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {/* Contact Fields in 2-column grid on larger screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-navy font-medium">Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="your@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {/* Phone Field */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-navy font-medium">Phone Number</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="(555) 123-4567" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          {/* Free Book Checkbox */}
          <FormField
            control={form.control}
            name="incentive_requested"
            render={({ field }) => (
              <FormItem className="flex items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-gray-700 font-normal cursor-pointer">
                    Send me the free book on estate planning
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />
          
          {/* Referral Source */}
          <FormField
            control={form.control}
            name="referral_source"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-navy font-medium">How did you hear about us? (Optional)</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {referralOptions.map(option => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          
          {/* Privacy Note */}
          <div className="privacy-note mt-4 p-3 bg-gray-50 border border-gray-200 rounded text-sm text-gray-600">
            <p>
              By submitting this form, you acknowledge our privacy policy and consent to being contacted regarding your estate planning needs.
            </p>
          </div>
          
          {/* Form Actions */}
          <div className="flex justify-between pt-4">
            <Button
              type="button"
              onClick={onBack}
              variant="outline"
              className="border-gray-300 text-gray-700"
              disabled={isSubmitting}
            >
              Back
            </Button>
            <Button 
              type="submit"
              className="bg-gold hover:bg-gold/90 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
              ) : "Submit and Get Your Book"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactInfo; 