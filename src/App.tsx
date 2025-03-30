
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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
import ResourceDetail from "./pages/ResourceDetail";
import FAQ from "./pages/FAQ";
import HowWeWork from "./pages/HowWeWork";
import TechnologyApproach from "./pages/TechnologyApproach";
import CaseStudies from "./pages/CaseStudies";
import DigitalAssetProtection from "./pages/DigitalAssetProtection";
import IPConsulting from "./pages/IPConsulting";
import Licensing from "./pages/Licensing";
import EntertainmentLaw from "./pages/EntertainmentLaw";
import EmergingTech from "./pages/EmergingTech";

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
        <Route path="/resources/:slug" element={<ResourceDetail />} />
        <Route path="/faq" element={<FAQ />} />
        
        {/* Process & Client Experience Routes */}
        <Route path="/how-we-work" element={<HowWeWork />} />
        <Route path="/technology-approach" element={<TechnologyApproach />} />
        
        {/* New Specialized Pages */}
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/digital-asset-protection" element={<DigitalAssetProtection />} />
        <Route path="/ip-consulting" element={<IPConsulting />} />
        <Route path="/ip-licensing" element={<Licensing />} />
        <Route path="/entertainment-law" element={<EntertainmentLaw />} />
        <Route path="/emerging-tech" element={<EmergingTech />} />
        
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
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
