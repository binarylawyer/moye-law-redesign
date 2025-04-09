import { z } from "zod";

// Step 2: Tech Innovator Form Validation Schema
export const techInnovatorSchema = z.object({
  concerns: z.array(z.string())
    .min(1, "Please select at least one concern")
    .describe("Your primary legal concerns"),
  
  business_stage: z.string()
    .min(1, "Please select your business stage")
    .describe("Current stage of your business"),
  
  specific_legal_needs: z.string()
    .optional()
    .describe("Any specific legal needs (optional)")
});

// Step 2: Caregiver Form Validation Schema
export const caregiverSchema = z.object({
  needs: z.array(z.string())
    .min(1, "Please select at least one need")
    .describe("Your primary elder law needs"),
  
  parent_location: z.string()
    .min(1, "Please indicate your parent's location")
    .describe("Where your parent currently lives"),
  
  urgency_level: z.string()
    .min(1, "Please select an urgency level")
    .describe("How urgently you need assistance")
});

// Step 2: Legacy Builder Form Validation Schema
export const legacyBuilderSchema = z.object({
  assets: z.array(z.string())
    .min(1, "Please select at least one asset type")
    .describe("Types of assets you want to protect"),
  
  estate_complexity: z.string()
    .min(1, "Please indicate your estate complexity")
    .describe("Complexity level of your estate"),
  
  tax_concerns: z.array(z.string())
    .optional()
    .describe("Your tax planning concerns (optional)")
});

// Step 3: Contact Information Validation Schema
export const contactInfoSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name cannot exceed 100 characters")
    .describe("Your full name"),
  
  email: z.string()
    .email("Invalid email address")
    .describe("Your email address"),
  
  phone: z.string()
    .regex(
      /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, 
      "Invalid phone number format"
    )
    .describe("Your phone number"),
  
  incentive_requested: z.boolean()
    .default(true)
    .describe("Send me the free book"),
  
  referral_source: z.string()
    .optional()
    .describe("How you heard about us")
});

// Main form schema combining all steps
export const formSchema = z.object({
  persona: z.string(),
  step2_data: z.record(z.any()),
  contact_info: z.any(),
  incentive_requested: z.boolean().default(true),
  metadata: z.record(z.any()).optional()
}); 