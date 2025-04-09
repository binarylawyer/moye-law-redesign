import React, { useState, useEffect } from "react";
import { collection, addDoc, serverTimestamp, getDocs } from "firebase/firestore";
import { db, trackFormStep, trackFormSubmission } from "@/lib/firebase";
import { captureMetadata } from "@/utils/metadata";
import { useToast } from "@/components/ui/use-toast";
import ErrorBoundary from "@/components/ErrorBoundary";
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
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [firebaseStatus, setFirebaseStatus] = useState<'checking' | 'ok' | 'error'>('checking');
  
  // Check Firebase connectivity when component mounts
  useEffect(() => {
    const checkFirebaseConnection = async () => {
      try {
        console.log("Checking Firebase connection...");
        // Try to fetch a single document to test the connection
        const querySnapshot = await getDocs(collection(db, "contactFormSubmissions"));
        console.log("Firebase connection successful!");
        setFirebaseStatus('ok');
      } catch (error) {
        console.error("Firebase connection error:", error);
        setFirebaseStatus('error');
      }
    };
    
    checkFirebaseConnection();
  }, []);
  
  // Handle persona selection from Step 1
  const handlePersonaSelect = (persona: string) => {
    console.log("Selected persona:", persona);
    // Track step completion in analytics
    try {
      trackFormStep(1, persona);
    } catch (error) {
      console.error("Error tracking form step:", error);
    }
    
    setFormData({ ...formData, persona });
    setCurrentStep(2);
  };
  
  // Handle conditional form data from Step 2
  const handleStep2Submit = (data: any) => {
    console.log("Step 2 data:", data);
    // Track step completion in analytics
    try {
      trackFormStep(2, formData.persona);
    } catch (error) {
      console.error("Error tracking step 2:", error);
    }
    
    // Prepare data for storage based on persona
    setFormData({
      ...formData,
      step2_data: data
    });
    
    setCurrentStep(3);
  };
  
  // Handle contact info submission from Step 3
  const handleStep3Submit = async (contactData: any) => {
    setIsSubmitting(true);
    setSubmissionError(null);
    
    try {
      console.log("Submitting contact info:", contactData);
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
      
      console.log("Submitting form data to Firestore:", finalData);
      
      // Save to Firestore
      const docRef = await addDoc(collection(db, "contactFormSubmissions"), finalData);
      console.log("Document written with ID: ", docRef.id);
      
      // Track form submission in analytics
      trackFormSubmission(formData.persona, contactData.incentive_requested);
      
      // Show success message
      toast({
        title: "Form Submitted Successfully",
        description: "We've received your information and will be in touch soon."
      });
      
      setIsComplete(true);
      setCurrentStep(4);
      
    } catch (error) {
      console.error("Error submitting form:", error);
      
      let errorMessage = "There was a problem submitting your request. Please try again.";
      if (error instanceof Error) {
        errorMessage = `Error: ${error.message}`;
        setSubmissionError(error.message);
      }
      
      toast({
        title: "Submission Error",
        description: errorMessage,
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
        {firebaseStatus === 'error' && (
          <div className="mb-4 p-3 bg-amber-50 border border-amber-200 text-amber-700 rounded">
            <p className="font-medium">Firebase connection issue detected</p>
            <p className="text-sm">There may be connectivity issues with our form service. If you have problems submitting the form, please contact us directly.</p>
          </div>
        )}
        
        {!isComplete && <FormProgress currentStep={currentStep} totalSteps={3} />}
        {submissionError && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded">
            <p className="font-medium">There was a problem with your submission:</p>
            <p>{submissionError}</p>
            <p className="mt-2 text-sm">Please try again or contact us directly.</p>
          </div>
        )}
        {renderCurrentStep()}
      </div>
    </ErrorBoundary>
  );
};

export default MultiStepForm;
