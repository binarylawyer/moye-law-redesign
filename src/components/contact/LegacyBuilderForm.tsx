import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { legacyBuilderSchema } from '@/utils/validationSchemas';
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
import { Button } from "@/components/ui/button";

// Extract the inferred type from the schema
type LegacyBuilderFormValues = z.infer<typeof legacyBuilderSchema>;

interface LegacyBuilderFormProps {
  onSubmit: (data: LegacyBuilderFormValues) => void;
  onBack: () => void;
}

const LegacyBuilderForm: React.FC<LegacyBuilderFormProps> = ({
  onSubmit,
  onBack
}) => {
  // Asset type options
  const assetTypeOptions = [
    { id: "real-estate", label: "Real Estate Holdings" },
    { id: "business", label: "Business Interests" },
    { id: "financial", label: "Financial Investments" },
    { id: "art-collectibles", label: "Art & Collectibles" },
    { id: "digital-assets", label: "Digital Assets" },
    { id: "international", label: "International Assets" }
  ];
  
  // Estate complexity options
  const estateComplexityOptions = [
    { value: "simple", label: "Simple (Single State, Few Assets)" },
    { value: "moderate", label: "Moderate (Multiple Asset Types)" },
    { value: "complex", label: "Complex (Business Interests, Multiple Entities)" },
    { value: "very-complex", label: "Very Complex (International, Multiple Jurisdictions)" }
  ];
  
  // Tax concerns options
  const taxConcernsOptions = [
    { id: "estate-tax", label: "Estate Tax Minimization" },
    { id: "gift-tax", label: "Gift Tax Planning" },
    { id: "generation-skipping", label: "Generation-Skipping Transfer Tax" },
    { id: "income-tax", label: "Income Tax Planning" },
    { id: "business-tax", label: "Business Succession Tax Issues" },
    { id: "international-tax", label: "International Tax Considerations" }
  ];
  
  // Initialize form with validation
  const form = useForm<LegacyBuilderFormValues>({
    resolver: zodResolver(legacyBuilderSchema),
    defaultValues: {
      assets: [],
      estate_complexity: "",
      tax_concerns: []
    }
  });
  
  // Handle form submission
  const handleSubmit = (values: LegacyBuilderFormValues) => {
    onSubmit(values);
  };
  
  return (
    <div className="step-container">
      <h2 className="text-2xl md:text-3xl font-display font-bold text-navy mb-2">
        Tell Us About Your Legacy Planning Needs
      </h2>
      <p className="text-gray-600 mb-6">
        Your responses help us develop sophisticated strategies to preserve your legacy.
      </p>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          {/* Asset Types Checkboxes */}
          <FormField
            control={form.control}
            name="assets"
            render={() => (
              <FormItem>
                <FormLabel className="text-navy font-medium">Which types of assets are you looking to protect?</FormLabel>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                  {assetTypeOptions.map((option) => (
                    <FormField
                      key={option.id}
                      control={form.control}
                      name="assets"
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
          
          {/* Estate Complexity Selection */}
          <FormField
            control={form.control}
            name="estate_complexity"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-navy font-medium">How would you characterize your estate complexity?</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select the complexity of your estate" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {estateComplexityOptions.map(option => (
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
          
          {/* Tax Concerns Checkboxes */}
          <FormField
            control={form.control}
            name="tax_concerns"
            render={() => (
              <FormItem>
                <FormLabel className="text-navy font-medium">Which tax concerns are priorities for you? (Optional)</FormLabel>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                  {taxConcernsOptions.map((option) => (
                    <FormField
                      key={option.id}
                      control={form.control}
                      name="tax_concerns"
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

export default LegacyBuilderForm; 