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
import DigitalAssetProtection from "./pages/DigitalAssetProtection";
import IPConsulting from "./pages/IPConsulting";
import Licensing from "./pages/Licensing";
import EntertainmentLaw from "./pages/EntertainmentLaw";
import EmergingTech from "./pages/EmergingTech";
import Podcasts from "./pages/Podcasts";
import ExperienceTheDifference from "./pages/ExperienceTheDifference";
import FloatingConsultationButton from "./components/FloatingConsultationButton";

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
        
        {/* Specialized Pages */}
        <Route path="/digital-asset-protection" element={<DigitalAssetProtection />} />
        <Route path="/ip-consulting" element={<IPConsulting />} />
        <Route path="/ip-licensing" element={<Licensing />} />
        <Route path="/entertainment-law" element={<EntertainmentLaw />} />
        <Route path="/emerging-tech" element={<EmergingTech />} />
        
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
