import React from 'react';
import ServiceTemplate from '@/components/services/ServiceTemplate';
import { ServiceData, ServiceFeature, Process, RelatedService, FeaturedContent, ServiceConsideration } from '@/types/services'; // Import necessary types
import { Clock, FileText, Shield, Users, AlertTriangle, UserPlus, Link, Calendar, Clipboard } from 'lucide-react';

// Define the data structure matching ServiceData using content from the planning document
const elderLawData: Partial<ServiceData> = {
  title: "Elder Law", 
  description: "Guiding your family through healthcare planning, asset protection, and caregiving decisions with empathy and expertise.", // Subheader from doc
  
  featuredContent: { 
      title: "Caring for Seniors in New York and Westchester", // Adapted from doc headline
      content: [
          "Making decisions for an aging parent or loved one is never easy. You're balancing their healthcare, finances, and well-being all at once.",
          "At Moye Law, we stand by your family through this journey. As a family-run firm, we treat your family as our own – providing clear, patient legal guidance on elder law matters so you never feel alone.",
          "Our innovative approach means we stay on top of changing elder care laws and use modern tools to keep documents organized and accessible, ensuring you're always one step ahead."
      ],
      callToAction: "Find compassionate guidance",
      imageSrc: "/images/services/elder-law-consultation.jpg",
      imageAlt: "Professional senior care consultation with multigenerational family"
  },

  // Define features based on scope of services from doc
  features: [
    {
      title: "Medicaid & Long-Term Care Planning",
      description: "Strategies to qualify for Medicaid, protect assets from nursing home costs, and ensure quality care.",
      icon: "Shield" // Example icon
    },
    {
      title: "Estate Planning for Seniors",
      description: "Wills, powers of attorney, and health care directives to make sure your loved one's wishes are honored.",
      icon: "FileText" 
    },
    {
      title: "Guardianship & Capacity Planning",
      description: "Assistance with guardianship proceedings or proactive planning (like trusts) to manage affairs if incapacity strikes.",
      icon: "Users"
    },
    {
      title: "Elder Abuse Protection",
      description: "Legal remedies and counsel if you suspect financial exploitation or elder abuse.",
       icon: "AlertTriangle"
    },
     {
      title: "Coordinating Care Teams",
      description: "We work closely with your financial advisors, care managers, and family members to create a united plan.",
       icon: "UserPlus"
    }
  ],
  
  // Updated considerations with proper property names and persona-focused content
  considerations: [
    {
      title: "Medicare vs. Medicaid Planning",
      description: "While Medicare provides health insurance for those 65+, Medicaid covers long-term care costs for those who qualify financially. Our flat-fee Medicaid planning service helps families navigate qualification requirements without depleting assets. For tech professionals with aging parents, we offer digital document management systems. For family stewards, we provide clear qualification timelines. For wealth preservationists, we structure assets to maintain family legacy while qualifying for benefits."
    },
    {
      title: "Asset Protection Strategies",
      description: "Protecting assets from long-term care costs requires advance planning. Our subscription service includes annual reviews of protection strategies, including irrevocable trusts, strategic gifting, and conversion of countable assets to exempt assets. We emphasize different approaches based on your priorities: business continuation for entrepreneurs, family home preservation for traditionalists, and investment portfolio protection for wealth-focused clients."
    },
    {
      title: "Health Care Directives & Proxies",
      description: "Advanced healthcare directives and proxies ensure medical decisions align with your loved one's wishes when they cannot communicate. Our flat-fee elder planning package includes comprehensive healthcare documentation with digital accessibility features for families. Documents are crafted with your specific values in mind, whether prioritizing cutting-edge treatments, family-centered care approaches, or legacy-minded end-of-life considerations."
    },
    {
      title: "Technology Solutions for Caregivers",
      description: "Our elder law services incorporate technology solutions to ease caregiver burden. The subscription model includes access to our digital portal for document sharing, care team coordination, and medication management tools. For tech-savvy clients, we integrate smart home monitoring solutions. For family-focused clients, we emphasize communication tools. For legacy-minded clients, we incorporate digital archive capabilities."
    },
    {
      title: "Guardianship Alternatives",
      description: "Before pursuing guardianship, we explore less restrictive alternatives that preserve autonomy. Our flat-fee consultation explores supported decision-making agreements, advance directives, and limited financial management tools. This person-centered approach respects individual dignity while ensuring necessary protection, aligning with values across our client personas."
    },
    {
      title: "Assisted Living & Nursing Home Contracts",
      description: "Our elder law services include review and negotiation of facility contracts at a transparent flat rate. We identify problematic clauses, negotiate better terms, and ensure financial arrangements align with Medicaid planning. For tech entrepreneurs, we analyze digital care monitoring provisions. For family stewards, we emphasize visitation rights. For wealth-focused clients, we scrutinize fee structures."
    },
    {
      title: "Veterans Benefits Coordination",
      description: "Our elder law subscription includes coordination of veterans benefits with other planning strategies. For eligible veterans and surviving spouses, Aid & Attendance benefits can provide additional monthly income for care costs without the strict look-back periods of Medicaid. Our service includes complete application preparation and coordination with existing benefit programs."
    },
    {
      title: "Family Caregiver Agreements",
      description: "Formal caregiver agreements allow family members to be compensated for care while potentially reducing Medicaid countable assets. Our flat-fee service includes properly structured agreements that withstand program scrutiny. These documents protect both the elder and the caregiver, providing clarity about care expectations, compensation, and responsibilities."
    }
  ],

  // Define process steps
  process: {
    title: "Our Elder Law Approach",
    steps: [
      { title: "Family Consultation", description: "We listen compassionately to understand your family's unique situation, concerns, and goals for your loved one." },
      { title: "Needs Assessment", description: "We evaluate healthcare needs, financial resources, and existing legal documents to identify planning priorities." },
      { title: "Solution Strategy", description: "We develop a tailored strategy addressing Medicaid eligibility, asset protection, and care coordination." },
      { title: "Document Preparation", description: "We draft necessary legal documents like trusts, powers of attorney, and healthcare directives with precision." },
      { title: "Application & Support", description: "We guide you through Medicaid applications or other processes, coordinating with involved parties." }
    ]
  },

  // Define relatedServices
  relatedServices: [
    {
      title: "Estate Planning",
      path: "/services/estate-planning",
      description: "Comprehensive estate planning services that integrate senior care considerations and wealth preservation."
    },
    {
      title: "Probate & Estate Administration",
      path: "/services/probate-administration",
      description: "Assistance with navigating probate processes and estate administration for aging clients."
    },
    {
      title: "Digital Asset & Emerging Technology",
      path: "/services/digital-asset-tech-protection",
      description: "Digital legacy planning and protection of online accounts, passwords, and digital assets for seniors."
    }
  ],
  
  // Define CTA content
  ctaTitle: "Navigate Elder Care with Confidence",
  ctaDescription: "Making decisions for an aging loved one is challenging. Let our family help yours. Contact us for compassionate guidance and expert legal solutions.",
  ctaButtonText: "Request an Elder Law Consultation", 
  phoneNumber: "(555) 555-ELDR", // Placeholder
  
  technicalInnovation: {
    title: "Technical Innovation with a Human Touch",
    description: "Our approach to elder law combines empathetic care with innovative technology solutions, making the process more manageable for busy professionals caring for aging parents.",
    leftContent: [
      {
        title: "Caregiver Coordination Platform",
        description: "We provide access to our secure digital platform that helps busy family members coordinate care schedules, share medical updates, and store important documents in one accessible location."
      },
      {
        title: "Remote Consultation Framework",
        description: "Our virtual meeting system allows family members across different locations to participate in important care discussions with legal counsel, ensuring everyone stays informed and involved."
      },
      {
        title: "Document Monitoring System",
        description: "We implement automated tracking of important deadlines, renewal dates, and changing regulations that might affect your loved one's care plan, providing peace of mind through proactive alerts."
      }
    ],
    rightContent: [
      {
        icon: <Clock className="h-8 w-8" />,
        label: "Time-Saving Solutions",
        color: "bg-teal-600"
      },
      {
        icon: <Link className="h-8 w-8" />,
        label: "Family Connection Tools",
        color: "bg-blue-500"
      },
      {
        icon: <Calendar className="h-8 w-8" />,
        label: "Care Scheduling",
        color: "bg-purple-600"
      },
      {
        icon: <Clipboard className="h-8 w-8" />,
        label: "Document Management",
        color: "bg-amber-500"
      }
    ]
  }
};


const ElderLaw: React.FC = () => {
  return (
    <ServiceTemplate 
      serviceName={elderLawData.title!}
      serviceId="elder-law" 
      description={elderLawData.description!}
      featuredContent={elderLawData.featuredContent!}
      features={elderLawData.features as ServiceFeature[]}
      considerations={elderLawData.considerations!}
      process={elderLawData.process as Process}
      relatedServices={elderLawData.relatedServices as RelatedService[]}
      ctaTitle={elderLawData.ctaTitle!}
      ctaDescription={elderLawData.ctaDescription!}
      ctaButtonText={elderLawData.ctaButtonText!}
      phoneNumber={elderLawData.phoneNumber}
      technicalInnovation={elderLawData.technicalInnovation}
    />
  );
};

export default ElderLaw; 