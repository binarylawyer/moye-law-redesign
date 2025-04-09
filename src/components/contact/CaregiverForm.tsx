import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { caregiverSchema } from '@/utils/validationSchemas';
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";

// Extract the inferred type from the schema
type CaregiverFormValues = z.infer<typeof caregiverSchema>;

interface CaregiverFormProps {
  onSubmit: (data: CaregiverFormValues) => void;
  onBack: () => void;
}

const CaregiverForm: React.FC<CaregiverFormProps> = ({
  onSubmit,
  onBack
}) => {
  // Elder law needs options
  const elderLawNeedsOptions = [
    { id: "medicaid-planning", label: "Medicaid Planning" },
    { id: "long-term-care", label: "Long-Term Care Planning" },
    { id: "guardianship", label: "Guardianship/Conservatorship" },
    { id: "healthcare-decisions", label: "Healthcare Decision Documents" },
    { id: "nursing-home", label: "Nursing Home Issues" },
    { id: "financial-support", label: "Financial Support & Benefits" }
  ];
  
  // Parent location options
  const parentLocationOptions = [
    { value: "own-home", label: "Lives in Own Home" },
    { value: "my-home", label: "Lives in My Home" },
    { value: "assisted-living", label: "Assisted Living Facility" },
    { value: "nursing-home", label: "Nursing Home" },
    { value: "memory-care", label: "Memory Care Unit" },
    { value: "out-of-state", label: "Out of State" }
  ];
  
  // Initialize form with validation
  const form = useForm<CaregiverFormValues>({
    resolver: zodResolver(caregiverSchema),
    defaultValues: {
      needs: [],
      parent_location: "",
      urgency_level: "medium"
    }
  });
  
  // Handle form submission
  const handleSubmit = (values: CaregiverFormValues) => {
    onSubmit(values);
  };
  
  return (
    <div className="step-container">
      <h2 className="text-2xl md:text-3xl font-display font-bold text-navy mb-2">
        Tell Us About Your Caregiving Needs
      </h2>
      <p className="text-gray-600 mb-6">
        Your responses help us understand how we can best support your family.
      </p>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          {/* Elder Law Needs Checkboxes */}
          <FormField
            control={form.control}
            name="needs"
            render={() => (
              <FormItem>
                <FormLabel className="text-navy font-medium">Which elder care needs do you have?</FormLabel>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                  {elderLawNeedsOptions.map((option) => (
                    <FormField
                      key={option.id}
                      control={form.control}
                      name="needs"
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
          
          {/* Parent Location Selection */}
          <FormField
            control={form.control}
            name="parent_location"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-navy font-medium">Where does your parent currently live?</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your parent's living situation" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {parentLocationOptions.map(option => (
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
          
          {/* Urgency Level Radio Group */}
          <FormField
            control={form.control}
            name="urgency_level"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-navy font-medium">How urgent is your situation?</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-2 mt-2"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="low" />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">
                        Planning Ahead (No Immediate Concerns)
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="medium" />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">
                        Near-Term Planning (Within 6-12 Months)
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="high" />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">
                        Urgent Situation (Immediate Assistance Needed)
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
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

export default CaregiverForm; 