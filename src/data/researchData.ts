import React from 'react';

// Consolidated interface
export interface ResearchPaper {
  id: string;
  title: string;
  authors: { name: string; credentials?: string; bio?: string }[];
  abstract: string;
  publicationDate: string;
  category: string;
  topics: string[];
  clientOnly: boolean;
  downloadUrl: string;
  pdfSize: string;
  citation: string;
  slug: string;
  iconName: string; // Just the name
  sections?: {
    title: string;
    content: string;
  }[];
  references?: string[];
  acknowledgements?: string;
}

// Merged and deduplicated data
export const researchPapers: ResearchPaper[] = [
  {
    id: "paper-1",
    title: "Algorithmic Estate Planning: Automated Decision Systems in Wealth Distribution",
    authors: [
      { name: "Dr. Emily Chen", credentials: "J.D., Ph.D. in Computer Science", bio: "Dr. Chen specializes in the intersection of artificial intelligence and estate law, with a focus on automated fiduciary systems." },
      { name: "Prof. Michael Rodriguez", credentials: "J.D., LL.M in Tax Law", bio: "Professor Rodriguez teaches estate planning at Harvard Law School and researches computational approaches to trust administration." }
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
    iconName: "Database",
    sections: [
      {
        title: "Introduction",
        content: "The integration of artificial intelligence into legal practice has accelerated dramatically in recent years..."
      },
      {
        title: "Current Legal Landscape",
        content: "Recent case law has begun to address the use of algorithmic systems..."
      },
      {
        title: "Proposed Framework",
        content: "Based on our analysis of emerging case law and regulatory guidance..."
      },
      {
        title: "Case Studies",
        content: "To illustrate the application of our proposed framework..."
      },
      {
        title: "Conclusion",
        content: "The integration of algorithmic systems into estate planning represents..."
      }
    ],
    references: [
      "Johnson v. TrustTech Solutions, 287 Cal.App.4th 783 (2022).",
      // ... other references
    ],
    acknowledgements: "The authors gratefully acknowledge the support..."
  },
  {
    id: "paper-2-hub",
    title: "Cross-Jurisdictional NFT Protection: A Comparative Analysis",
    authors: [{ name: "Dr. James Wilson" }, { name: "Sarah Matthews, Esq." }],
    abstract: "This research evaluates how different legal jurisdictions approach...",
    publicationDate: "2023-09-22",
    category: "Digital Assets",
    topics: ["NFTs", "Intellectual Property", "International Law"],
    clientOnly: true,
    downloadUrl: "/papers/cross-jurisdictional-nft-protection.pdf",
    pdfSize: "2.4 MB",
    citation: "Wilson, J. & Matthews, S. (2023)...",
    slug: "cross-jurisdictional-nft-protection",
    iconName: "Globe"
  },
  {
    id: "paper-3-hub",
    title: "Emerging Contract Protocols: Smart Contract Enforceability in Elder Care Arrangements",
    authors: [{ name: "Prof. David Thompson, J.D."}, { name: "Dr. Lisa Nguyen" }],
    abstract: "This paper investigates the legal enforceability...",
    publicationDate: "2023-10-05",
    category: "Elder Law",
    topics: ["Smart Contracts", "Elder Care", "Legislative Frameworks"],
    clientOnly: false,
    downloadUrl: "/papers/smart-contracts-elder-care.pdf",
    pdfSize: "1.8 MB",
    citation: "Thompson, D. & Nguyen, L. (2023)...",
    slug: "smart-contracts-elder-care",
    iconName: "Users"
  },
  {
    id: "paper-4-hub",
    title: "Licensing Limitations in Generative AI: Implications for Creative Industries",
    authors: [{ name: "Dr. Alexandra Park" }, { name: "Jonathan Lee, Esq." }],
    abstract: "This paper examines the emerging licensing challenges...",
    publicationDate: "2023-12-10",
    category: "Intellectual Property",
    topics: ["Generative AI", "Copyright", "Creative Industries"],
    clientOnly: true,
    downloadUrl: "/papers/generative-ai-licensing.pdf",
    pdfSize: "2.1 MB",
    citation: "Park, A. & Lee, J. (2023)...",
    slug: "generative-ai-licensing",
    iconName: "Shield"
  },
  {
    id: "paper-5-hub",
    title: "Multi-Generational Business Structures: Tax Optimization Strategies for Family-Owned Tech Companies",
    authors: [{ name: "Prof. Richard Davis, J.D." }, { name: "Dr. Maria Gonzalez" }],
    abstract: "This research analyzes optimal business structures...",
    publicationDate: "2023-08-18",
    category: "Business Law",
    topics: ["Family Business", "Tax Planning", "Succession Planning"],
    clientOnly: false,
    downloadUrl: "/papers/multi-generational-tech-business.pdf",
    pdfSize: "1.9 MB",
    citation: "Davis, R. & Gonzalez, M. (2023)...",
    slug: "multi-generational-tech-business",
    iconName: "Briefcase"
  },
  {
    id: "paper-6-hub",
    title: "Algorithmic Bias in Legal Technology: Impacts on Access to Justice",
    authors: [{ name: "Dr. Samantha Wong" }, { name: "Thomas Rivera, J.D." }],
    abstract: "This paper investigates how algorithmic bias...",
    publicationDate: "2024-01-15",
    category: "Legal Technology",
    topics: ["Algorithm Bias", "Access to Justice", "Legal Ethics"],
    clientOnly: false,
    downloadUrl: "/papers/algorithmic-bias-legal-tech.pdf",
    pdfSize: "1.7 MB",
    citation: "Wong, S. & Rivera, T. (2024)...",
    slug: "algorithmic-bias-legal-tech",
    iconName: "Scale"
  },
   {
    id: "paper-2-detail",
    title: "Blockchain Applications in Real Estate Transactions",
    authors: [
      { name: "Dr. Anya Sharma", credentials: "LL.M, Blockchain Law Specialist", bio: "Dr. Sharma researches distributed ledger technology and its impact on property law." },
      { name: "Kenji Tanaka", credentials: "Lead Software Engineer", bio: "Kenji leads development on secure transaction platforms." }
    ],
    abstract: "Exploring the use cases and legal challenges of implementing blockchain technology for recording and transferring real estate titles.",
    publicationDate: "2024-01-20",
    category: "Real Estate Law",
    topics: ["Blockchain", "Real Estate", "Smart Contracts", "Property Law"],
    clientOnly: false,
    downloadUrl: "/papers/blockchain-real-estate.pdf",
    pdfSize: "0.9 MB",
    citation: "Sharma, A. & Tanaka, K. (2024). Blockchain Applications in Real Estate Transactions. Journal of Property Technology, 5(1), 33-48.",
    slug: "blockchain-real-estate-transactions",
    iconName: "Network",
    sections: [{ title: "Introduction", content: "..." }, { title: "Legal Hurdles", content: "..." }],
    references: ["Vitalik Buterin, Ethereum Whitepaper (2014)."],
  },
  {
    id: "paper-3-detail",
    title: "Intellectual Property Protection for Generative AI Models",
    authors: [
      { name: "Prof. David Lee", credentials: "J.D., Professor of IP Law", bio: "Professor Lee focuses on copyright and patent law in the context of emerging technologies." }
    ],
    abstract: "Analysis of current IP frameworks and their applicability to protecting the outputs and underlying models of generative artificial intelligence.",
    publicationDate: "2023-12-01",
    category: "Intellectual Property",
    topics: ["AI/ML", "Copyright", "Patent Law", "Generative AI"],
    clientOnly: true,
    downloadUrl: "/papers/ip-protection-generative-ai.pdf",
    pdfSize: "1.5 MB",
    citation: "Lee, D. (2023). Intellectual Property Protection for Generative AI Models. Stanford Technology Law Review, 27(1), 1-25.",
    slug: "ip-protection-generative-ai",
    iconName: "BrainCircuit",
    sections: [{ title: "Introduction", content: "..." }, { title: "Copyright Challenges", content: "..." }, { title: "Patent Landscape", content: "..." }],
    references: ["Feist Publ'ns, Inc. v. Rural Tel. Serv. Co., 499 U.S. 340 (1991)."],
  },
];