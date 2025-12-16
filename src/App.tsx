import React, { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import PageErrorBoundary from "./components/PageErrorBoundary";
import Layout from "./components/Layout";
import { logger } from "./utils/logger";
import FloatingConsultationButton from "./components/FloatingConsultationButton";

// --- Static Imports Restored ---
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Practice from "./pages/Practice";
import Services from "./pages/Services";
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
import Books from "./pages/Books";
import BookDetail from "./pages/BookDetail";
import Research from "./pages/Research";
import ResearchPaperPage from "./pages/ResearchPaper";
import EstatePlanningPodcasts from "./pages/podcasts/EstatePlanningPodcasts";
import TechIPPodcasts from "./pages/podcasts/TechIPPodcasts";
import ExperienceTheDifference from "./pages/ExperienceTheDifference";
import ErrorTestPage from "./pages/ErrorTest";
import ClientChat from "./pages/ClientChat";

// v-2 Hybrid-Mondrian Component Preview
import V2PreviewPage from "../v-2/pages/V2PreviewPage";
import LandingPage from "../v-2/pages/LandingPage";
import SystemShowcase from "../v-2/sushi-ui/SystemShowcase";
import ServiceShowcasePage from "../v-2/sushi-ui/ServiceShowcasePage";
import MondrianKit from "../v-2/sushi-ui/MondrianKit";
import HomePage from "../v-2/pages/HomePage";
import IndexPage from "../v-2/pages/IndexPage";
import StrategyPage from "../v-2/pages/StrategyPage";
import DesignProductPage from "../v-2/pages/design/DesignProductPage";
import DesignServicePage from "../v-2/pages/design/DesignServicePage";
import DesignMotionPage from "../v-2/pages/design/DesignMotionPage";
import DesignComponentsPage from "../v-2/pages/design/DesignComponentsPage";
import PracticeIndex from "../v-2/pages/PracticeIndex";
import FirmProfile from "../v-2/pages/FirmProfile";
import ContactTerminal from "../v-2/pages/ContactTerminal";
import ArchivedComponentsPage from "../v-2/pages/ArchivedComponentsPage";
import ArchivedResourcesPage from "../v-2/pages/ArchivedResourcesPage";

// Service Pages
import EstatePlanningService from "./pages/services/EstatePlanning";
import ElderLawService from "./pages/services/ElderLaw";
import ProbateService from "./pages/services/ProbateAdministration";
import IPConsultingStrategyService from "./pages/services/IPConsultingStrategy";
import DigitalAssetTechProtectionService from "./pages/services/DigitalAssetTechProtection";
import LicensingTransactionsService from "./pages/services/LicensingTransactions";
import ArtEntertainmentLawService from "./pages/services/ArtEntertainmentLaw";

// Active Practice Area Pages
import IPLicensing from "./pages/practice/active/IPLicensing";
import TrustsEstates from "./pages/practice/active/TrustsEstates";
import ElderLaw from "./pages/practice/active/ElderLaw";
import IPAssetProtection from "./pages/practice/active/IPAssetProtection";
import RealEstate from "./pages/practice/active/RealEstate";
import EmergingTech from "./pages/practice/active/EmergingTech";
import EntertainmentLaw from "./pages/practice/active/EntertainmentLaw";
import SoftwareLicensing from "./pages/practice/active/SoftwareLicensing";
import IPConsulting from "./pages/practice/active/IPConsulting";
import DigitalAssetProtection from "./pages/practice/active/DigitalAssetProtection";
import ProbateAdministration from "./pages/practice/active/ProbateAdministration";
import ArtLaw from "./pages/practice/active/ArtLaw";
import RealEstateConsulting from "./pages/practice/active/RealEstateConsulting";
import InnovationPatentLaw from "./pages/practice/active/InnovationPatentLaw";
import AIMachineLearning from "./pages/practice/active/AIMachineLearning";
import BlockchainDigitalAssets from "./pages/practice/active/BlockchainDigitalAssets";
import RealEstateTransactions from "./pages/practice/active/RealEstateTransactions";
import DigitalMediaLaw from "./pages/practice/active/DigitalMediaLaw";

// Hub Pages
import IntellectualProperty from "./pages/practice/IntellectualProperty";
import EstateLegacy from "./pages/practice/EstateLegacy";
import ArtsMediaLaw from "./pages/practice/ArtsMediaLaw";
import RealEstateHub from "./pages/practice/RealEstateHub";
import EmergingTechnologyHub from "./pages/practice/EmergingTechnologyHub";
// --- End Static Imports ---

// Declare gtag function for TypeScript
declare global {
  interface Window {
    // More specific types for gtag arguments
    gtag: (
      command: 'config' | 'js' | 'event',
      targetIdOrEventName: string,
      params?: Record<string, string | number | boolean | undefined>
    ) => void;
    dataLayer: unknown[]; // Use unknown[] instead of any[]
  }
}

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
  const location = useLocation();

  useEffect(() => {
    // Check if gtag function exists on the window object
    if (typeof window.gtag === 'function') {
      // Send page view event to Google Analytics
      window.gtag('config', 'G-LCB4ZJ4848', {
        page_path: location.pathname + location.search, // Use current path
      });
      logger.info(`GA Pageview tracked: ${location.pathname + location.search}`);
    } else {
      logger.warn('window.gtag function not found. GA script might be blocked or not loaded.');
    }
  }, [location]); // Dependency array ensures this runs on location change

  const isStandalone = ['/v2-home', '/v2-index', '/v2-strategy', '/v2/design/product', '/v2/design/service', '/v2/design/motion', '/v2/design/components'].includes(location.pathname);

  const routes = (
    <Routes>
      {/* Routes use static imports */}
      <Route path="/" element={<PageErrorBoundary pageName="Home Page"><Index /></PageErrorBoundary>} />
      <Route path="/practice" element={<PageErrorBoundary pageName="Practice Areas"><Practice /></PageErrorBoundary>} />
      <Route path="/services" element={<PageErrorBoundary pageName="Services"><Services /></PageErrorBoundary>} />
      <Route path="/practice/intellectual-property" element={<PageErrorBoundary pageName="Intellectual Property"><IntellectualProperty /></PageErrorBoundary>} />
      <Route path="/practice/estate-legacy" element={<PageErrorBoundary pageName="Estate & Legacy"><EstateLegacy /></PageErrorBoundary>} />
      <Route path="/practice/arts-media-law" element={<PageErrorBoundary pageName="Arts & Media Law"><ArtsMediaLaw /></PageErrorBoundary>} />
      <Route path="/practice/real-estate-hub" element={<PageErrorBoundary pageName="Real Estate"><RealEstateHub /></PageErrorBoundary>} />
      <Route path="/practice/emerging-technology-hub" element={<PageErrorBoundary pageName="Emerging Technology"><EmergingTechnologyHub /></PageErrorBoundary>} />
      <Route path="/practice/ip-licensing" element={<PageErrorBoundary pageName="IP Licensing"><IPLicensing /></PageErrorBoundary>} />
      <Route path="/practice/elder-law" element={<PageErrorBoundary pageName="Elder Law"><ElderLaw /></PageErrorBoundary>} />
      <Route path="/practice/entertainment-law" element={<PageErrorBoundary pageName="Entertainment Law"><EntertainmentLaw /></PageErrorBoundary>} />
      <Route path="/practice/emerging-tech" element={<PageErrorBoundary pageName="Emerging Technology Law"><EmergingTech /></PageErrorBoundary>} />
      <Route path="/practice/ip-asset-protection" element={<PageErrorBoundary pageName="IP Asset Protection"><IPAssetProtection /></PageErrorBoundary>} />
      <Route path="/practice/real-estate" element={<PageErrorBoundary pageName="Real Estate"><RealEstate /></PageErrorBoundary>} />
      <Route path="/practice/trusts-estates" element={<PageErrorBoundary pageName="Trusts & Estates"><TrustsEstates /></PageErrorBoundary>} />
      <Route path="/practice/software-licensing" element={<PageErrorBoundary pageName="Software Licensing"><SoftwareLicensing /></PageErrorBoundary>} />
      <Route path="/practice/ip-consulting" element={<PageErrorBoundary pageName="IP Consulting"><IPConsulting /></PageErrorBoundary>} />
      <Route path="/practice/digital-asset-protection" element={<PageErrorBoundary pageName="Digital Asset Protection"><DigitalAssetProtection /></PageErrorBoundary>} />
      <Route path="/practice/probate-administration" element={<PageErrorBoundary pageName="Probate Administration"><ProbateAdministration /></PageErrorBoundary>} />
      <Route path="/practice/art-law" element={<PageErrorBoundary pageName="Art Law"><ArtLaw /></PageErrorBoundary>} />
      <Route path="/practice/real-estate-consulting" element={<PageErrorBoundary pageName="Real Estate Consulting"><RealEstateConsulting /></PageErrorBoundary>} />
      <Route path="/practice/innovation-patent-law" element={<PageErrorBoundary pageName="Innovation Patent Law"><InnovationPatentLaw /></PageErrorBoundary>} />
      <Route path="/practice/ai-machine-learning" element={<PageErrorBoundary pageName="AI & Machine Learning"><AIMachineLearning /></PageErrorBoundary>} />
      <Route path="/practice/blockchain-digital-assets" element={<PageErrorBoundary pageName="Blockchain Digital Assets"><BlockchainDigitalAssets /></PageErrorBoundary>} />
      <Route path="/practice/real-estate-transactions" element={<PageErrorBoundary pageName="Real Estate Transactions"><RealEstateTransactions /></PageErrorBoundary>} />
      <Route path="/practice/digital-media-law" element={<PageErrorBoundary pageName="Digital Media Law"><DigitalMediaLaw /></PageErrorBoundary>} />
      <Route path="/about" element={<PageErrorBoundary pageName="About Us"><About /></PageErrorBoundary>} />
      <Route path="/team" element={<PageErrorBoundary pageName="Our Team"><Team /></PageErrorBoundary>} />
      <Route path="/team/:memberId" element={<PageErrorBoundary pageName="Team Member Profile"><TeamMemberProfile /></PageErrorBoundary>} />
      <Route path="/contact" element={<PageErrorBoundary pageName="Contact Us"><Contact /></PageErrorBoundary>} />
      <Route path="/resources" element={<PageErrorBoundary pageName="Resources"><Resources /></PageErrorBoundary>} />
      <Route path="/resources/articles" element={<Articles />} />
      <Route path="/resources/podcasts" element={<Podcasts />} />
      <Route path="/resources/podcasts/estate-planning" element={<EstatePlanningPodcasts />} />
      <Route path="/resources/podcasts/tech-ip" element={<TechIPPodcasts />} />
      <Route path="/books" element={<Books />} />
      <Route path="/books/:slug" element={<BookDetail />} />
      <Route path="/research" element={<Research />} />
      <Route path="/research/:slug" element={<ResearchPaperPage />} />
      <Route path="/resources/faq" element={<FAQ />} />
      <Route path="/resources/how-we-work" element={<HowWeWork />} />
      <Route path="/resources/technology-approach" element={<TechnologyPlatform />} />
      <Route path="/resources/case-studies" element={<CaseStudies />} />
      <Route path="/resources/:slug" element={<ResourceDetail />} />
      <Route path="/client-chat" element={<ClientChat />} />
      <Route path="/services/estate-planning" element={<EstatePlanningService />} />
      <Route path="/services/elder-law" element={<ElderLawService />} />
      <Route path="/services/probate-administration" element={<ProbateService />} />
      <Route path="/services/ip-consulting-strategy" element={<IPConsultingStrategyService />} />
      <Route path="/services/digital-asset-tech-protection" element={<DigitalAssetTechProtectionService />} />
      <Route path="/services/licensing-transactions" element={<LicensingTransactionsService />} />
      <Route path="/services/art-entertainment-law" element={<ArtEntertainmentLawService />} />
      <Route path="/how-we-work" element={<HowWeWork />} />
      <Route path="/experience-the-difference" element={<ExperienceTheDifference />} />
      <Route path="/error-test" element={<ErrorTestPage />} />

      {/* v-2 Component Preview */}
      <Route path="/v2-preview" element={<V2PreviewPage />} />
      <Route path="/v2-landing" element={<LandingPage />} />
      <Route path="/v2-design-system" element={<SystemShowcase />} />
      <Route path="/v2-service-template" element={<ServiceShowcasePage />} />
      <Route path="/v2-ui-kit" element={<MondrianKit />} />
      <Route path="/v2-home" element={<HomePage />} />
      <Route path="/v2-index" element={<IndexPage />} />
      <Route path="/v2-strategy" element={<StrategyPage />} />
      <Route path="/v2/design/foundations" element={<DesignFoundationsPage />} />
      <Route path="/v2/design/product" element={<DesignProductPage />} />
      <Route path="/v2/design/service" element={<DesignServicePage />} />
      <Route path="/v2/design/motion" element={<DesignMotionPage />} />
      <Route path="/v2/design/components" element={<DesignComponentsPage />} />
      <Route path="/v2/practice" element={<PracticeIndex />} />
      <Route path="/v2/firm" element={<FirmProfile />} />
      <Route path="/v2/contact" element={<ContactTerminal />} />
      <Route path="/v2/archive" element={<ArchivedComponentsPage />} />
      <Route path="/v2/resources-archive" element={<ArchivedResourcesPage />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );

  return (
    <>
      <ScrollToTop />
      <FloatingConsultationButton />
      {isStandalone ? routes : <Layout>{routes}</Layout>}
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
