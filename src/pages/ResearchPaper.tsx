import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import ConsultationCTA from "../components/ConsultationCTA";
import { Toaster } from "@/components/ui/toaster";
import { researchPapers, ResearchPaper as ResearchPaperType } from '../data/researchData';

// --- Icon Mapping Helper ---
// Type guard to check if a key is a valid Lucide icon name
function isValidIconName(name: string): name is keyof typeof LucideIcons {
  return name in LucideIcons;
}

const IconComponent = ({ name, className }: { name: string, className?: string }) => {
  if (isValidIconName(name)) {
    const Icon = LucideIcons[name];
    return <Icon className={className} />;
  } 
  // Return a default icon or null if name is invalid
  return <LucideIcons.FileText className={className} />; // Default icon
};
// --- End Icon Mapping Helper ---

// Sample research paper data structure with extended fields for the detail view
interface ResearchPaperDetailed {
  id: string;
  title: string;
  authors: { name: string; credentials: string; bio: string }[];
  abstract: string;
  publicationDate: string;
  category: string;
  topics: string[];
  clientOnly: boolean;
  downloadUrl: string;
  pdfSize: string;
  citation: string;
  slug: string;
  icon: React.ReactNode;
  sections: {
    title: string;
    content: string;
  }[];
  references: string[];
  acknowledgements?: string;
}

// Sample detailed paper data
const researchPaperData: ResearchPaperDetailed = {
  id: "paper-1",
  title: "Algorithmic Estate Planning: Automated Decision Systems in Wealth Distribution",
  authors: [
    {
      name: "Dr. Emily Chen",
      credentials: "J.D., Ph.D. in Computer Science",
      bio: "Dr. Chen specializes in the intersection of artificial intelligence and estate law, with a focus on automated fiduciary systems."
    },
    {
      name: "Prof. Michael Rodriguez",
      credentials: "J.D., LL.M in Tax Law",
      bio: "Professor Rodriguez teaches estate planning at Harvard Law School and researches computational approaches to trust administration."
    }
  ],
  abstract: "This paper examines the legal implications of using artificial intelligence and algorithmic systems to automate estate planning decisions. We analyze recent case law regarding algorithmic decision-making and propose a framework for compliance with fiduciary responsibilities that balances technological efficiency with legal obligations.",
  publicationDate: "2023-11-15",
  category: "Estate Planning",
  topics: ["AI/ML", "Automation", "Fiduciary Law", "Wealth Management"],
  clientOnly: false,
  downloadUrl: "/papers/algorithmic-estate-planning.pdf",
  pdfSize: "1.2 MB",
  citation: "Chen, E. & Rodriguez, M. (2023). Algorithmic Estate Planning: Automated Decision Systems in Wealth Distribution. Journal of Digital Law, 12(4), 78-92.",
  slug: "algorithmic-estate-planning",
  icon: <LucideIcons.Database className="h-8 w-8" />,
  sections: [
    {
      title: "Introduction",
      content: "The integration of artificial intelligence into legal practice has accelerated dramatically in recent years, with particular impact on document-intensive areas such as estate planning. While automation promises efficiency gains and potentially reduced costs for clients, it also raises significant legal questions about delegation of fiduciary duties, algorithmic bias, and the standard of care. This paper explores the emerging legal frameworks governing the use of AI in estate planning and wealth distribution, with particular focus on recent litigation and regulatory responses.\n\nAs AI systems become increasingly sophisticated, they have moved beyond simple document assembly to making substantive recommendations about asset allocation, beneficiary designments, and trust structures. However, these developments have occurred in a relative legal vacuum, with courts only beginning to address questions of liability, transparency requirements, and appropriate oversight mechanisms."
    },
    {
      title: "Current Legal Landscape",
      content: "Recent case law has begun to address the use of algorithmic systems in fiduciary contexts, though with inconsistent results across jurisdictions. In Johnson v. TrustTech Solutions (2022), the California Court of Appeals held that the use of an algorithmic system to determine trust distributions did not per se violate the trustee's fiduciary duty, provided that the trustee maintained meaningful oversight and could explain the system's recommendations. By contrast, in Estate of Williams (2021), a New York Surrogate's Court found that a trustee's reliance on an automated system for investment decisions constituted an impermissible delegation of fiduciary authority.\n\nOn the regulatory front, the Securities and Exchange Commission has issued guidance suggesting that the use of algorithmic systems in wealth management does not relieve fiduciaries of their underlying duties of care and loyalty. Similarly, the American Bar Association's Ethics Opinion 2023-01 cautions attorneys that the use of AI tools in estate planning does not reduce their professional responsibility to provide competent representation."
    },
    {
      title: "Proposed Framework",
      content: "Based on our analysis of emerging case law and regulatory guidance, we propose a four-part framework for the compliant use of algorithmic systems in estate planning:\n\n1. Transparency: All algorithmic systems must be capable of providing explanations for their recommendations that are understandable to both the fiduciary and, if necessary, the beneficiaries.\n\n2. Human Oversight: Meaningful human review must be maintained at critical decision points, particularly those involving discretionary distributions or significant asset allocations.\n\n3. Documentation: The basis for algorithmic recommendations should be contemporaneously documented, including input parameters, confidence levels, and alternative options considered.\n\n4. Testing & Validation: Systems should undergo regular testing for accuracy, bias, and compliance with legal requirements, with validation results preserved as part of the fiduciary record.\n\nThis framework acknowledges the efficiency benefits of automation while preserving the core legal principles of fiduciary duty."
    },
    {
      title: "Case Studies",
      content: "To illustrate the application of our proposed framework, we present three case studies of algorithmic estate planning systems currently in use, examining their compliance with fiduciary standards and identifying areas for improvement. These case studies represent a range of approaches, from simple document automation to complex predictive systems that recommend specific estate planning structures based on client data."
    },
    {
      title: "Conclusion",
      content: "The integration of algorithmic systems into estate planning represents a significant evolution in legal practice, with potential benefits for both practitioners and clients. However, this evolution must occur within a framework that preserves the fundamental fiduciary principles that have long governed this area of law. Through appropriate transparency, oversight, documentation, and validation, algorithmic estate planning can enhance rather than undermine these principles.\n\nAs courts continue to develop jurisprudence in this area, practitioners should adopt proactive approaches to compliance rather than waiting for definitive legal rules. The framework proposed in this paper offers a starting point for such approaches, adaptable to the specific features of different algorithmic systems and practice contexts."
    }
  ],
  references: [
    "Johnson v. TrustTech Solutions, 287 Cal.App.4th 783 (2022).",
    "Estate of Williams, 73 Misc.3d, 1214(A) (N.Y. Sur. Ct. 2021).",
    "Securities and Exchange Commission, \"Use of Artificial Intelligence in Investment Management,\" Guidance Release No. IM-3478 (June 2023).",
    "American Bar Association, Ethics Opinion 2023-01, \"Ethical Obligations When Using Artificial Intelligence in Legal Practice\" (March 2023).",
    "Caplan, A. & Purser, K. (2022). \"Algorithmic Fiduciaries: Rethinking Legal Personhood for the AI Era.\" Yale Journal of Law & Technology, 24(1), 45-87.",
    "Lee, J. & Martinez, C. (2023). \"Trust Automation: Technical and Legal Perspectives.\" Stanford Technology Law Review, 26(2), 211-240.",
    "Morgan, D. (2022). \"Bias in Automated Inheritance Systems: Implications for Wealth Inequality.\" Journal of Estate Planning, 35(4), 112-131."
  ],
  acknowledgements: "The authors gratefully acknowledge the support of the Digital Law Research Initiative at Stanford University. We also thank our colleagues at the AI & Legal Ethics Working Group for their valuable feedback on earlier drafts."
};

const ResearchPaperPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState(0);
  
  // Find the paper data based on the slug using useMemo
  const paper = useMemo(() => { 
    return researchPapers.find(p => p.slug === slug);
  }, [slug]);
  
  useEffect(() => {
    if (paper) {
      setIsLoading(false);
    } else {
      // Handle paper not found - maybe set loading to false and show error later
      // Or redirect? For now, just stop loading.
      setIsLoading(false); 
    }
    window.scrollTo(0, 0); // Scroll to top when slug changes or paper loads
  }, [paper]); // Depend on the memoized paper object
  
  if (isLoading) {
    return (
      <main className="pt-32 bg-white min-h-screen">
        <div className="container mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-12"></div>
            <div className="space-y-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="space-y-3">
                  <div className="h-6 bg-gray-200 rounded w-1/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  }
  
  if (!paper) {
    // Render a not found message or component if paper is null after loading
    return (
      <main className="pt-32 bg-white min-h-screen">
        <div className="container mx-auto px-4 text-center py-16">
          <h1 className="text-2xl font-bold mb-4">Research Paper Not Found</h1>
          <p className="mb-8">Sorry, we couldn't find the research paper you were looking for.</p>
          <Link to="/research" className="text-blue-600 hover:underline">
            Back to Research List
          </Link>
        </div>
      </main>
    );
  }
  
  return (
    <main className="pt-32 bg-white">
      {/* Back to research button */}
      <div className="container mx-auto px-4 mb-8">
        <Link
          to="/research"
          className="inline-flex items-center text-blue-600 hover:text-blue-800"
        >
          <LucideIcons.ChevronLeft className="w-4 h-4 mr-1" />
          Back to Research
        </Link>
      </div>
      
      {/* Paper Header */}
      <header className="border-t-4 border-blue-600 bg-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                {/* Render Icon using helper */} 
                <IconComponent name={paper.icon} className="h-8 w-8" /> 
              </div>
              <div>
                <span className="text-sm font-medium bg-gray-100 text-gray-800 px-3 py-1 rounded">
                  {paper.category}
                </span>
                <span className="text-sm text-gray-500 ml-3">
                  Published: {paper.publicationDate}
                </span>
              </div>
            </div>
            
            <h1 className="font-display text-3xl md:text-4xl text-black mb-6">
              {paper.title}
            </h1>
            
            <div className="flex flex-wrap gap-3 mb-6">
              {paper.topics.map(topic => (
                <span
                  key={topic}
                  className="text-sm bg-blue-50 text-blue-800 px-3 py-1 rounded-full"
                >
                  {topic}
                </span>
              ))}
            </div>
            
            <div className="border-l-4 border-blue-600 pl-4 py-2 bg-gray-50 mb-8">
              <p className="text-gray-700 italic">
                {paper.abstract}
              </p>
            </div>
            
            {/* Authors */}
            <div className="mb-8">
              <h2 className="text-xl font-medium mb-4">Authors</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {paper.authors.map((author, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-gray-200 rounded-full p-3 mr-3">
                      <LucideIcons.Users className="h-6 w-6 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="font-medium">{author.name}</h3>
                      <p className="text-sm text-gray-600 mb-1">{author.credentials}</p>
                      <p className="text-sm text-gray-700">{author.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Actions */}
            <div className="flex flex-wrap gap-4 mb-8 pt-4 border-t border-gray-200">
              <a
                href={paper.downloadUrl}
                download
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                <LucideIcons.Download className="w-4 h-4 mr-2" />
                Download PDF ({paper.pdfSize})
              </a>
              <button className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-800 rounded hover:bg-gray-200 transition-colors">
                <LucideIcons.Share2 className="w-4 h-4 mr-2" />
                Share
              </button>
              <button className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-800 rounded hover:bg-gray-200 transition-colors">
                <LucideIcons.BookmarkPlus className="w-4 h-4 mr-2" />
                Save
              </button>
            </div>
            
            {/* Citation */}
            <div className="bg-gray-50 p-4 mb-8 rounded border border-gray-200">
              <h3 className="font-medium mb-2">Cite This Paper</h3>
              <p className="text-sm text-gray-700">{paper.citation}</p>
            </div>
          </div>
        </div>
      </header>
      
      {/* Paper Content */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Table of Contents */}
            <div className="mb-8 lg:flex lg:gap-8">
              <div className="lg:w-1/4 mb-6 lg:mb-0">
                <div className="sticky top-32">
                  <h2 className="text-lg font-medium mb-4">Contents</h2>
                  <nav className="flex flex-col space-y-2">
                    {paper.sections.map((section, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveSection(index)}
                        className={`text-left px-3 py-2 text-sm border-l-2 hover:bg-gray-50 transition-colors ${
                          activeSection === index 
                            ? 'border-blue-600 bg-blue-50 text-blue-800 font-medium' 
                            : 'border-gray-200 text-gray-700'
                        }`}
                      >
                        {section.title}
                      </button>
                    ))}
                    <button
                      onClick={() => setActiveSection(paper.sections.length)}
                      className={`text-left px-3 py-2 text-sm border-l-2 hover:bg-gray-50 transition-colors ${
                        activeSection === paper.sections.length 
                          ? 'border-blue-600 bg-blue-50 text-blue-800 font-medium' 
                          : 'border-gray-200 text-gray-700'
                      }`}
                    >
                      References
                    </button>
                  </nav>
                </div>
              </div>
              
              {/* Content */}
              <div className="lg:w-3/4">
                {paper.sections.map((section, index) => (
                  <div
                    key={index}
                    id={`section-${index}`}
                    className="mb-8 scroll-mt-32"
                  >
                    <h2 className="text-2xl font-display mb-4">{section.title}</h2>
                    <div className="prose prose-blue max-w-none">
                      {section.content.split('\n\n').map((paragraph, pIndex) => (
                        <p key={pIndex} className="mb-4 leading-relaxed text-gray-800">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
                
                {/* References */}
                <div id="references" className="mb-8 scroll-mt-32">
                  <h2 className="text-2xl font-display mb-4">References</h2>
                  <ul className="list-decimal pl-6 space-y-2">
                    {paper.references.map((reference, index) => (
                      <li key={index} className="text-gray-800">
                        {reference}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Acknowledgements */}
                {paper.acknowledgements && (
                  <div id="acknowledgements" className="mb-8">
                    <h2 className="text-2xl font-display mb-4">Acknowledgements</h2>
                    <p className="text-gray-800">{paper.acknowledgements}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Research Section */}
      <section className="bg-gray-50 py-12 border-t-4 border-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-display mb-6">Related Research</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border-l-4 border-blue-600 border-t border-r border-b p-4 hover:shadow-md transition-shadow">
                <span className="text-xs font-medium bg-gray-100 text-gray-800 px-2 py-1 rounded">
                  Estate Planning
                </span>
                <h3 className="font-medium text-lg mt-2 mb-1">
                  Digital Asset Security in Estate Administration
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  A technical analysis of security protocols for digital asset transfer in estate contexts.
                </p>
                <Link
                  to="/research/digital-asset-security"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center"
                >
                  View Paper
                  <LucideIcons.ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
              
              <div className="bg-white border-l-4 border-red-600 border-t border-r border-b p-4 hover:shadow-md transition-shadow">
                <span className="text-xs font-medium bg-gray-100 text-gray-800 px-2 py-1 rounded">
                  Legal Technology
                </span>
                <h3 className="font-medium text-lg mt-2 mb-1">
                  Regulatory Approaches to Legal Automation
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  Comparative analysis of how different jurisdictions regulate automated legal services.
                </p>
                <Link
                  to="/research/regulatory-approaches-legal-automation"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center"
                >
                  View Paper
                  <LucideIcons.ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <ConsultationCTA />
      <Toaster />
    </main>
  );
};

export default ResearchPaperPage; 