import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { techInnovatorSchema } from '@/utils/validationSchemas';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// Extract the inferred type from the schema
type TechInnovatorFormValues = z.infer<typeof techInnovatorSchema>;

interface TechInnovatorFormProps {
  onSubmit: (data: TechInnovatorFormValues) => void;
  onBack: () => void;
}

const TechInnovatorForm: React.FC<TechInnovatorFormProps> = ({
  onSubmit,
  onBack
}) => {
  // Available concerns for tech innovators
  const legalConcernOptions = [
    { id: "intellectual-property", label: "Intellectual Property Protection" },
    { id: "crypto", label: "Cryptocurrency & Digital Assets" },
    { id: "data-privacy", label: "Data Privacy Compliance" },
    { id: "business-formation", label: "Business Formation & Structure" },
    { id: "funding", label: "Funding & Investment Agreements" },
    { id: "succession", label: "Succession Planning" }
  ];
  
  // Business stage options
  const businessStageOptions = [
    { value: "idea", label: "Idea Stage" },
    { value: "pre-seed", label: "Pre-Seed" },
    { value: "seed", label: "Seed" },
    { value: "series-a", label: "Series A or Later" },
    { value: "profitable", label: "Profitable/Bootstrapped" },
    { value: "established", label: "Established Business" }
  ];
  
  // Initialize form with validation
  const form = useForm<TechInnovatorFormValues>({
    resolver: zodResolver(techInnovatorSchema),
    defaultValues: {
      concerns: [],
      business_stage: "",
      specific_legal_needs: ""
    }
  });
  
  // Handle form submission
  const handleSubmit = (values: TechInnovatorFormValues) => {
    onSubmit(values);
  };
  
  return (
    <div className="step-container">
      <h2 className="text-2xl md:text-3xl font-display font-bold text-navy mb-2">
        Tell Us About Your Tech Venture
      </h2>
      <p className="text-gray-600 mb-6">
        Your responses help us prepare a personalized consultation focused on your needs.
      </p>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          {/* Legal Concerns Checkboxes */}
          <FormField
            control={form.control}
            name="concerns"
            render={() => (
              <FormItem>
                <FormLabel className="text-navy font-medium">Which legal areas concern you most?</FormLabel>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                  {legalConcernOptions.map((option) => (
                    <FormField
                      key={option.id}
                      control={form.control}
                      name="concerns"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={option.id}
                            className="flex items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(option.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, option.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== option.id
                                        )
                                      )
                                }}
                              />
                            </FormControl>
                            <FormLabel className="text-gray-700 font-normal cursor-pointer">
                              {option.label}
                            </FormLabel>
                          </FormItem>
                        )
                      }}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {/* Business Stage Selection */}
          <FormField
            control={form.control}
            name="business_stage"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-navy font-medium">What stage is your business in?</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your business stage" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {businessStageOptions.map(option => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {/* Specific Legal Needs */}
          <FormField
            control={form.control}
            name="specific_legal_needs"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-navy font-medium">Any specific legal questions or concerns? (Optional)</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Tell us more about your specific legal needs..." 
                    className="min-h-[100px]" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {/* Form Actions */}
          <div className="flex justify-between pt-4">
            <Button
              type="button"
              onClick={onBack}
              variant="outline"
              className="border-gray-300 text-gray-700"
            >
              Back
            </Button>
            <Button 
              type="submit"
              className="bg-gold hover:bg-gold/90 text-white"
            >
              Continue
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default TechInnovatorForm; 