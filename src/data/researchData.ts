import React from 'react';
import { Database } from 'lucide-react'; // Make sure lucide-react is installed

// Copied from ResearchPaper.tsx
export interface ResearchPaper {
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
  icon: string;
  sections: {
    title: string;
    content: string;
  }[];
  references: string[];
  acknowledgements?: string;
}

// Sample data (you can add more papers here)
export const researchPapers: ResearchPaper[] = [
  {
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
    icon: "Database",
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
  // Add more research paper objects here following the same structure
  {
    id: "paper-2",
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
    icon: "Network", // Use Network icon from Lucide
    sections: [{ title: "Introduction", content: "..." }, { title: "Legal Hurdles", content: "..." }],
    references: ["Vitalik Buterin, Ethereum Whitepaper (2014)."],
  },
  {
    id: "paper-3",
    title: "Intellectual Property Protection for Generative AI Models",
    authors: [
      { name: "Prof. David Lee", credentials: "J.D., Professor of IP Law", bio: "Professor Lee focuses on copyright and patent law in the context of emerging technologies." }
    ],
    abstract: "Analysis of current IP frameworks and their applicability to protecting the outputs and underlying models of generative artificial intelligence.",
    publicationDate: "2023-12-01",
    category: "Intellectual Property",
    topics: ["AI/ML", "Copyright", "Patent Law", "Generative AI"],
    clientOnly: true, // Example of client-only paper
    downloadUrl: "/papers/ip-protection-generative-ai.pdf",
    pdfSize: "1.5 MB",
    citation: "Lee, D. (2023). Intellectual Property Protection for Generative AI Models. Stanford Technology Law Review, 27(1), 1-25.",
    slug: "ip-protection-generative-ai",
    icon: "BrainCircuit", // Use BrainCircuit icon from Lucide
    sections: [{ title: "Introduction", content: "..." }, { title: "Copyright Challenges", content: "..." }, { title: "Patent Landscape", content: "..." }],
    references: ["Feist Publ'ns, Inc. v. Rural Tel. Serv. Co., 499 U.S. 340 (1991)."],
  },
];