import React from 'react';
import ServiceTemplate from '@/components/services/ServiceTemplate';
import { ServiceData, ServiceFeature, Process, RelatedService, FeaturedContent, ServiceConsideration } from '@/types/services';
import { Palette, Music, Film, BookOpen, Sparkles, UserGroup, ColorSwatch } from 'lucide-react';

// Enhanced data structure with persona-focused content
const artEntertainmentLawData: Partial<ServiceData> = {
  title: "Art & Entertainment Law",
  description: "Specialized legal counsel for artists, creators, collectors, and businesses in the creative industries — where tradition meets innovation.",

  featuredContent: { 
      title: "Navigating the Creative Industries",
      content: [
        "The intersection of art, entertainment, and technology demands a nuanced legal approach that respects creative vision while protecting long-term interests. We provide counsel that evolves with the industry, combining established principles with forward-thinking strategies.",
        "Our practice serves visionaries across the spectrum—from traditional fine artists and galleries to AI-assisted creators and digital platforms. We recognize that behind every creative work lies both personal expression and potential legacy value worthy of protection.",
        "Through decades of experience, we've cultivated relationships with key industry players while maintaining the discretion our clients expect. This network allows us to anticipate shifts in the creative landscape before they impact your interests.",
        "Whether you're preserving a multi-generational collection, negotiating a distribution agreement with emerging AI implications, or establishing your creative vision in the marketplace, we offer sophisticated counsel that balances innovation with tradition."
      ],
      callToAction: "Protect your creative vision", 
      imageSrc: "/videos/art-entertainment.mp4",
      imageAlt: "Video showcasing art and entertainment legal services"
  },

  // Updated features with persona-targeted language
  features: [
    {
      title: "Fine Art Transactions & Advisory",
      description: "Discreet counsel for significant acquisitions, commissions, authentication, provenance verification, and heritage collection management.",
      icon: "ColorSwatch"
    },
    {
      title: "Film, Television & Digital Media",
      description: "Strategic guidance navigating complex production, financing, and distribution agreements across traditional and emerging platforms.",
      icon: "Film" 
    },
    {
      title: "Intellectual Property for the Creative Vanguard",
      description: "Forward-looking protection strategies for traditional and AI-influenced creative works that secure both current value and future applications.",
      icon: "Sparkles"
    },
    {
      title: "Talent & Representation",
      description: "Cultivating enduring relationships through meticulous negotiation of representation agreements that honor creative integrity while maximizing opportunity.",
      icon: "UserGroup"
    }
  ],

  considerations: [
    {
      title: "AI & Creative Authorship",
      description: "Navigating the evolving intersection of human creativity and artificial intelligence. We help establish clear ownership and attribution for AI-assisted works while developing frameworks that respect both technological innovation and artistic contribution. Our approach balances protection with the flexibility needed in this rapidly evolving space."
    },
    {
      title: "Contract Negotiation with Intent",
      description: "Securing agreements that reflect both your immediate needs and long-term vision. Our deliberate negotiation process ensures representation, licensing, and distribution agreements preserve your creative control while establishing clear parameters for how your work enters the marketplace. We emphasize transparency and precision in every clause."
    },
    {
      title: "Legacy Planning for Creative Estates",
      description: "Crafting succession strategies that honor your artistic vision beyond your lifetime. We develop custom frameworks for managing intellectual property rights, physical works, and ongoing royalty streams, ensuring your creative legacy maintains its integrity and continues to benefit those you designate as stewards of your work."
    },
    {
      title: "Digital Rights Architecture",
      description: "Designing comprehensive frameworks for the digital expression of creative works. We construct rights management systems that maintain control across evolving platforms while enabling strategic accessibility. Our solutions address current technologies while remaining adaptable to emerging developments in distribution and audience engagement."
    },
    {
      title: "Authentication & Provenance Verification",
      description: "Establishing irrefutable documentation of creative origin and ownership history. Working with trusted specialists, we implement authentication protocols that meet the highest standards of scrutiny. For significant collections, we develop systems that preserve provenance documentation across generations of stewardship."
    },
    {
      title: "Cross-Border Rights Protection",
      description: "Securing your creative works within a global framework that acknowledges jurisdictional nuance. We coordinate with a curated network of international partners to ensure consistent protection across territories, recognizing the unique cultural and legal contexts that influence how creative works are protected worldwide."
    },
    {
      title: "Investment Structures for Creative Capital",
      description: "Developing refined frameworks for the financing of significant creative ventures. Whether structuring private investment in film production, establishing art funds, or creating innovative models for creative project funding, we design structures that align incentives while preserving artistic integrity and control."
    },
    {
      title: "Fair Use & Creative Dialogue",
      description: "Facilitating the delicate balance between creative expression and intellectual property boundaries. We provide clarity on appropriation, sampling, and referential work, helping you engage with existing creative contexts while maintaining respect for established rights and minimizing potential conflicts."
    },
    {
      title: "Discreet Dispute Resolution",
      description: "Representing creative interests with sophistication and minimal public exposure. Our approach emphasizes efficient resolution pathways that protect both your reputation and creative assets. When needed, we engage in strategic advocacy that maintains the dignity expected in industries where relationships and discretion are paramount."
    }
  ],

  process: {
    title: "Our Art & Entertainment Law Process",
    steps: [
      {
        title: "Project & Portfolio Review",
        description: "Conducting a comprehensive assessment of your creative works, collections, or ventures to identify specific legal considerations and protection opportunities."
      },
      {
        title: "Rights Analysis & Strategic Framework",
        description: "Developing a tailored protection strategy that addresses intellectual property, moral rights, and publicity considerations while anticipating future applications and market evolution."
      },
      {
        title: "Deal Structuring & Precise Negotiation",
        description: "Crafting and negotiating agreements with meticulous attention to both explicit terms and implicit implications, ensuring they reflect your specific creative and business objectives."
      },
      {
        title: "Production & Transaction Guidance",
        description: "Providing ongoing counsel during creative development, production phases, and significant transactions to address legal considerations as they emerge in real-time."
      },
      {
        title: "Relationship-Centered Resolution",
        description: "Addressing disputes through strategic negotiation or, when necessary, litigation that prioritizes relationship preservation while vigorously defending your creative interests."
      }
    ]
  },

  relatedServices: [
    {
      title: "Licensing & Transactions",
      path: "/services/licensing-transactions",
      description: "Expertise in structuring, negotiating, and documenting complex licensing arrangements for creative and artistic works."
    },
    {
      title: "IP Consulting & Strategy",
      path: "/services/ip-consulting-strategy",
      description: "Strategic guidance on protecting and monetizing intellectual property in the arts, media, and entertainment sectors."
    },
    {
      title: "Digital Asset & Emerging Technology",
      path: "/services/digital-asset-tech-protection",
      description: "Specialized protection for digital creative works, NFTs, and art technology innovations."
    }
  ],
  
  ctaTitle: "Secure Your Creative Legacy",
  ctaDescription: "Engage with legal counsel that understands the profound value of creative expression. Our approach balances traditional protection with innovative strategies for a rapidly evolving creative landscape.",
  ctaButtonText: "Arrange a Confidential Consultation",
  phoneNumber: "(555) 555-ARTS",
  
  technicalInnovation: {
    title: "Technical Innovation in Creative Industries",
    description: "Our approach to art and entertainment law incorporates cutting-edge technologies and innovative frameworks to protect creative works in an evolving digital landscape.",
    leftContent: [
      {
        title: "Digital Authentication Systems",
        description: "We implement blockchain-based provenance and authentication solutions that create immutable records for creative works, ensuring verifiable ownership across physical and digital realms."
      },
      {
        title: "AI-Assisted Creative Rights Management",
        description: "Our innovative frameworks address the complex copyright considerations of AI-assisted creation, establishing clear ownership and royalty structures for collaborative human-AI works."
      },
      {
        title: "Metaverse Rights Architecture",
        description: "We design comprehensive legal frameworks for creative expression in virtual worlds, addressing the unique challenges of digital property, performance rights, and avatar licensing."
      }
    ],
    rightContent: [
      {
        icon: <Palette className="h-8 w-8" />,
        label: "Digital Art Protection",
        color: "bg-pink-600"
      },
      {
        icon: <Music className="h-8 w-8" />,
        label: "Smart Royalty Systems",
        color: "bg-blue-500"
      },
      {
        icon: <Film className="h-8 w-8" />,
        label: "Content Distribution",
        color: "bg-amber-600"
      },
      {
        icon: <BookOpen className="h-8 w-8" />,
        label: "IP Registration Tools",
        color: "bg-emerald-600"
      }
    ]
  }
};

// Rename component
const ArtEntertainmentLaw: React.FC = () => {
  return (
    <ServiceTemplate 
      serviceName={artEntertainmentLawData.title!}
      serviceId="art-entertainment-law"
      description={artEntertainmentLawData.description!}
      featuredContent={artEntertainmentLawData.featuredContent!}
      features={artEntertainmentLawData.features as ServiceFeature[]}
      considerations={artEntertainmentLawData.considerations as ServiceConsideration[]}
      process={artEntertainmentLawData.process as Process}
      relatedServices={artEntertainmentLawData.relatedServices as RelatedService[]}
      ctaTitle={artEntertainmentLawData.ctaTitle!}
      ctaDescription={artEntertainmentLawData.ctaDescription!}
      ctaButtonText={artEntertainmentLawData.ctaButtonText!}
      phoneNumber={artEntertainmentLawData.phoneNumber}
      technicalInnovation={artEntertainmentLawData.technicalInnovation}
    />
  );
};

export default ArtEntertainmentLaw; 