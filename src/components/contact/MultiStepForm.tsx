import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db, trackFormStep, trackFormSubmission } from "@/lib/firebase";
import { captureMetadata } from "@/utils/metadata";
import { useToast } from "@/components/ui/use-toast";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import FormProgress from "./FormProgress";
import PersonaSelection from "./PersonaSelection";
import TechInnovatorForm from "./TechInnovatorForm";
import CaregiverForm from "./CaregiverForm";
import LegacyBuilderForm from "./LegacyBuilderForm";
import ContactInfo from "./ContactInfo";
import ThankYou from "./ThankYou";

interface MultiStepFormProps {
  className?: string;
}

const MultiStepForm: React.FC<MultiStepFormProps> = ({ className }) => {
  const { toast } = useToast();
  // Form state management
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    persona: "",
    step2_data: {},
    contact_info: {},
    incentive_requested: true,
    // Will be populated with metadata before submission
    metadata: {}
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  
  // Handle persona selection from Step 1
  const handlePersonaSelect = (persona: string) => {
    // Track step completion in analytics
    trackFormStep(1, persona);
    
    setFormData({ ...formData, persona });
    setCurrentStep(2);
  };
  
  // Handle conditional form data from Step 2
  const handleStep2Submit = (data: any) => {
    // Track step completion in analytics
    trackFormStep(2, formData.persona);
    
    // Map the persona to the correct database field
    let step2Key = "";
    switch(formData.persona) {
      case "Protect My Startup's Future":
        step2Key = "tech_innovator";
        break;
      case "Plan Care for My Aging Parent":
        step2Key = "caregiver";
        break;
      case "Manage Multi-Generational Wealth":
        step2Key = "legacy_builder";
        break;
      default:
        step2Key = "other";
    }
    
    setFormData({
      ...formData,
      step2_data: {
        [step2Key]: data
      }
    });
    
    setCurrentStep(3);
  };
  
  // Handle contact info submission from Step 3
  const handleStep3Submit = async (contactData: any) => {
    setIsSubmitting(true);
    
    try {
      // Track step completion in analytics
      trackFormStep(3, formData.persona);
      
      // Capture metadata right before submission
      const metadata = captureMetadata();
      
      // Prepare final data object with contact info and metadata
      const finalData = {
        ...formData,
        contact_info: contactData,
        incentive_requested: contactData.incentive_requested,
        timestamp: serverTimestamp(),
        reward_delivery_status: "Pending",
        metadata
      };
      
      // Save to Firestore
      const docRef = await addDoc(collection(db, "contactFormSubmissions"), finalData);
      console.log("Document written with ID: ", docRef.id);
      
      // Track form submission in analytics
      trackFormSubmission(formData.persona, contactData.incentive_requested);
      
      // Show success message
      setIsComplete(true);
      setCurrentStep(4);
      
      // Future integration point: Update client portal if applicable
      /* 
      TODO: In the future, this would be a good place to:
      1. Check if the email exists in the client portal
      2. Link this submission to the client's document library
      3. Create a client record if they don't exist yet
      Example code:
      const clientPortalService = new ClientPortalService();
      await clientPortalService.linkSubmissionToClient(docRef.id, contactData.email);
      */
      
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Error",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Render the appropriate step based on current state
  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonaSelection onSelect={handlePersonaSelect} />;
      case 2:
        if (formData.persona === "Protect My Startup's Future") {
          return <TechInnovatorForm 
                   onSubmit={handleStep2Submit} 
                   onBack={() => setCurrentStep(1)} 
                 />;
        } else if (formData.persona === "Plan Care for My Aging Parent") {
          return <CaregiverForm 
                   onSubmit={handleStep2Submit} 
                   onBack={() => setCurrentStep(1)} 
                 />;
        } else {
          return <LegacyBuilderForm 
                   onSubmit={handleStep2Submit} 
                   onBack={() => setCurrentStep(1)} 
                 />;
        }
      case 3:
        return <ContactInfo 
                 onSubmit={handleStep3Submit} 
                 onBack={() => setCurrentStep(2)}
                 isSubmitting={isSubmitting}
               />;
      case 4:
        return <ThankYou persona={formData.persona} />;
      default:
        return null;
    }
  };
  
  return (
    <ErrorBoundary>
      <div className={`form-container max-w-2xl mx-auto p-4 md:p-6 bg-white rounded-lg shadow-md ${className}`}>
        {!isComplete && <FormProgress currentStep={currentStep} totalSteps={3} />}
        {renderCurrentStep()}
      </div>
    </ErrorBoundary>
  );
};

export default MultiStepForm; 