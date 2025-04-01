import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Practice from "./pages/Practice";
import PracticeArea from "./pages/PracticeArea";
import Team from "./pages/Team";
import TeamMemberProfile from "./pages/TeamMemberProfile";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";
import Articles from "./pages/Articles";
import ResourceDetail from "./pages/ResourceDetail";
import FAQ from "./pages/FAQ";
import HowWeWork from "./pages/HowWeWork";
import TechnologyPlatform from "./pages/TechnologyApproach";
import CaseStudies from "./pages/CaseStudies";
import DigitalAssetProtection from "./pages/practice/DigitalAssetProtection";
import IPConsulting from "./pages/practice/IPConsulting";
import Licensing from "./pages/practice/Licensing";
import EntertainmentLaw from "./pages/practice/EntertainmentLaw";
import EmergingTech from "./pages/practice/EmergingTech";
import Podcasts from "./pages/Podcasts";
import ExperienceTheDifference from "./pages/ExperienceTheDifference";
import FloatingConsultationButton from "./components/FloatingConsultationButton";

// Services imports
import DigitalAssetProtectionService from "./pages/services/DigitalAssetProtection";
import IPConsultingService from "./pages/services/IPConsulting";
import LicensingService from "./pages/services/Licensing";
import EntertainmentLawService from "./pages/services/EntertainmentLaw";
import EmergingTechService from "./pages/services/EmergingTech";

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const queryClient = new QueryClient();

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <FloatingConsultationButton />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/practice/:area" element={<PracticeArea />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team/:memberId" element={<TeamMemberProfile />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Resources Routes */}
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/articles" element={<Articles />} />
        <Route path="/resources/podcasts" element={<Podcasts />} />
        <Route path="/resources/faq" element={<FAQ />} />
        <Route path="/resources/how-we-work" element={<HowWeWork />} />
        <Route path="/resources/technology-approach" element={<TechnologyPlatform />} />
        <Route path="/resources/case-studies" element={<CaseStudies />} />
        
        {/* This specific route needs to be AFTER all other /resources/[specific-page] routes */}
        <Route path="/resources/:slug" element={<ResourceDetail />} />
        
        {/* Practice Area Routes */}
        <Route path="/practice/digital-asset-protection" element={<DigitalAssetProtection />} />
        <Route path="/practice/ip-consulting" element={<IPConsulting />} />
        <Route path="/practice/ip-licensing" element={<Licensing />} />
        <Route path="/practice/entertainment-law" element={<EntertainmentLaw />} />
        <Route path="/practice/emerging-tech" element={<EmergingTech />} />
        
        {/* Services Routes */}
        <Route path="/services/digital-asset-protection" element={<DigitalAssetProtectionService />} />
        <Route path="/services/ip-consulting" element={<IPConsultingService />} />
        <Route path="/services/ip-licensing" element={<LicensingService />} />
        <Route path="/services/entertainment-law" element={<EntertainmentLawService />} />
        <Route path="/services/emerging-tech" element={<EmergingTechService />} />
        
        {/* Legacy URLs - redirect to new paths */}
        <Route path="/digital-asset-protection" element={<DigitalAssetProtectionService />} />
        <Route path="/ip-consulting" element={<IPConsultingService />} />
        <Route path="/ip-licensing" element={<LicensingService />} />
        <Route path="/entertainment-law" element={<EntertainmentLawService />} />
        <Route path="/emerging-tech" element={<EmergingTechService />} />
        
        {/* Direct access route for How We Work */}
        <Route path="/how-we-work" element={<HowWeWork />} />
        
        {/* Experience the Difference page */}
        <Route path="/experience-the-difference" element={<ExperienceTheDifference />} />
        
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <AppRoutes />
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
