import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import PageErrorBoundary from "./components/PageErrorBoundary";
import Layout from "./components/Layout";
import { logger } from "./utils/logger";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Practice from "./pages/Practice";
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
import Podcasts from "./pages/Podcasts";
import ExperienceTheDifference from "./pages/ExperienceTheDifference";
import FloatingConsultationButton from "./components/FloatingConsultationButton";
import ErrorTestPage from "./pages/ErrorTest";

// Services imports
import DigitalAssetProtectionService from "./pages/services/DigitalAssetProtection";
import IPConsultingService from "./pages/services/IPConsulting";
import LicensingService from "./pages/services/Licensing";
import EntertainmentLawService from "./pages/services/EntertainmentLaw";
import EmergingTechService from "./pages/services/EmergingTech";

// Import the active practice area components
import IPLicensing from "./pages/practice/active/IPLicensing";
import TrustsEstates from "./pages/practice/active/TrustsEstates";
import ElderLaw from "./pages/practice/active/ElderLaw";
import IPAssetProtection from "./pages/practice/active/IPAssetProtection";
import RealEstate from "./pages/practice/active/RealEstate";
import EmergingTech from "./pages/practice/active/EmergingTech";
import EntertainmentLaw from "./pages/practice/active/EntertainmentLaw";

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
      <Layout>
        <Routes>
          <Route path="/" element={
            <PageErrorBoundary pageName="Home Page">
              <Index />
            </PageErrorBoundary>
          } />
          
          {/* Practice Routes */}
          <Route path="/practice" element={
            <PageErrorBoundary pageName="Practice Areas">
              <Practice />
            </PageErrorBoundary>
          } />
          
          {/* Explicit routes for practice areas */}
          <Route path="/practice/ip-licensing" element={
            <PageErrorBoundary pageName="IP Licensing">
              <IPLicensing />
            </PageErrorBoundary>
          } />
          
          <Route path="/practice/elder-law" element={
            <PageErrorBoundary pageName="Elder Law">
              <ElderLaw />
            </PageErrorBoundary>
          } />
          
          <Route path="/practice/entertainment-law" element={
            <PageErrorBoundary pageName="Entertainment Law">
              <EntertainmentLaw />
            </PageErrorBoundary>
          } />
          
          <Route path="/practice/emerging-tech" element={
            <PageErrorBoundary pageName="Emerging Technology Law">
              <EmergingTech />
            </PageErrorBoundary>
          } />
          
          <Route path="/practice/ip-asset-protection" element={
            <PageErrorBoundary pageName="IP Asset Protection">
              <IPAssetProtection />
            </PageErrorBoundary>
          } />
          
          <Route path="/practice/real-estate" element={
            <PageErrorBoundary pageName="Real Estate">
              <RealEstate />
            </PageErrorBoundary>
          } />
          
          <Route path="/practice/trusts-estates" element={
            <PageErrorBoundary pageName="Trusts & Estates">
              <TrustsEstates />
            </PageErrorBoundary>
          } />
          
          {/* Other Main Routes */}
          <Route path="/about" element={
            <PageErrorBoundary pageName="About Us">
              <About />
            </PageErrorBoundary>
          } />
          <Route path="/team" element={
            <PageErrorBoundary pageName="Our Team">
              <Team />
            </PageErrorBoundary>
          } />
          <Route path="/team/:memberId" element={
            <PageErrorBoundary pageName="Team Member Profile">
              <TeamMemberProfile />
            </PageErrorBoundary>
          } />
          <Route path="/contact" element={
            <PageErrorBoundary pageName="Contact Us">
              <Contact />
            </PageErrorBoundary>
          } />
          
          {/* Resources Routes */}
          <Route path="/resources" element={
            <PageErrorBoundary pageName="Resources">
              <Resources />
            </PageErrorBoundary>
          } />
          
          {/* Other routes can be similarly wrapped with PageErrorBoundary */}
          <Route path="/resources/articles" element={<Articles />} />
          <Route path="/resources/podcasts" element={<Podcasts />} />
          <Route path="/resources/faq" element={<FAQ />} />
          <Route path="/resources/how-we-work" element={<HowWeWork />} />
          <Route path="/resources/technology-approach" element={<TechnologyPlatform />} />
          <Route path="/resources/case-studies" element={<CaseStudies />} />
          <Route path="/resources/:slug" element={<ResourceDetail />} />
          
          {/* Services Routes */}
          <Route path="/services/digital-asset-protection" element={<DigitalAssetProtectionService />} />
          <Route path="/services/ip-consulting" element={<IPConsultingService />} />
          <Route path="/services/ip-licensing" element={<LicensingService />} />
          <Route path="/services/entertainment-law" element={<EntertainmentLawService />} />
          <Route path="/services/emerging-tech" element={<EmergingTechService />} />
          
          {/* Direct access route for How We Work */}
          <Route path="/how-we-work" element={<HowWeWork />} />
          
          {/* Experience the Difference page */}
          <Route path="/experience-the-difference" element={<ExperienceTheDifference />} />
          
          {/* Error Testing Page */}
          <Route path="/error-test" element={<ErrorTestPage />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
};

const handleGlobalError = (error: Error, errorInfo: React.ErrorInfo) => {
  logger.error("Global error caught by ErrorBoundary", error, {
    context: { componentStack: errorInfo.componentStack }
  });
  
  // Here you could also send to an error monitoring service
};

const App = () => (
  <ErrorBoundary onError={handleGlobalError}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Router>
          <AppRoutes />
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
