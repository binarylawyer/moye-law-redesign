export type ResourceCategory = 'article' | 'guide' | 'faq' | 'case-study' | 'whitepaper';

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: ResourceCategory;
  slug: string;
  date: string;
  author: string;
  featuredImage?: string;
  content?: string;
  tags?: string[];
}

export const resources: Resource[] = [
  {
    id: '1',
    title: 'Understanding Estate Planning',
    description: 'A comprehensive overview of estate planning strategies for high-net-worth individuals.',
    category: 'article',
    slug: 'understanding-estate-planning',
    date: '2023-09-15',
    author: 'Christopher Moye',
    tags: ['Estate Planning', 'Trusts', 'Wealth Management'],
    content: `
      # Understanding Estate Planning

      Estate planning is a crucial process for preserving wealth and ensuring your legacy is distributed according to your wishes. For high-net-worth individuals, effective estate planning involves sophisticated strategies that go beyond basic wills and trusts.

      ## Key Considerations for Estate Planning

      ### 1. Asset Protection

      Protecting your assets from creditors, lawsuits, and other risks is a fundamental aspect of estate planning. Strategies may include:

      - Domestic and offshore trusts
      - Family limited partnerships
      - Strategic use of insurance products
      - Specialized investment structures

      ### 2. Tax Optimization

      Minimizing tax burdens is essential for preserving wealth across generations:

      - Federal estate tax planning
      - Gift tax strategies
      - Generation-skipping transfer tax considerations
      - State-specific tax planning

      ### 3. Legacy Planning

      Beyond financial considerations, legacy planning focuses on:

      - Family governance structures
      - Philanthropic goals
      - Business succession planning
      - Values transmission to future generations

      ## The Importance of Regular Review

      Estate plans should be reviewed regularly, especially after:

      - Significant changes in tax laws
      - Major life events (marriages, divorces, births)
      - Substantial changes in asset values
      - Relocations to different states or countries

      Working with a team of specialized advisors ensures your estate plan remains aligned with your goals and adapted to changing circumstances.
    `
  },
  {
    id: '2',
    title: 'Protecting Digital Assets in Estate Planning',
    description: 'Essential strategies for incorporating digital assets into your estate plan.',
    category: 'guide',
    slug: 'protecting-digital-assets',
    date: '2023-10-22',
    author: 'Christopher Moye',
    tags: ['Digital Assets', 'Cryptocurrency', 'Estate Planning'],
    content: `
      # Protecting Digital Assets in Estate Planning

      Digital assets represent an increasingly significant portion of many estates. From cryptocurrency holdings to digital art and intellectual property, these assets require specialized planning approaches.

      ## Types of Digital Assets to Consider

      ### Financial Digital Assets
      - Cryptocurrency holdings
      - Digital investment accounts
      - Online payment service accounts

      ### Personal Digital Assets
      - Digital photos and videos
      - Email accounts
      - Social media accounts
      - Digital documents

      ### Digital Business Assets
      - Domain names
      - Online businesses
      - Digital intellectual property
      - Customer databases

      ## Key Challenges in Digital Asset Planning

      ### Access Issues
      Many digital assets are protected by passwords, encryption, or other security measures that can make them inaccessible to executors without proper planning.

      ### Legal Uncertainties
      The law regarding digital assets in estate planning continues to evolve, with inconsistent regulations across jurisdictions.

      ### Valuation Complexities
      Digital assets, particularly cryptocurrencies and NFTs, can be difficult to value accurately due to market volatility.

      ## Essential Planning Strategies

      ### 1. Comprehensive Inventory
      Maintain a secure, updated inventory of all digital assets, including:
      - Asset descriptions
      - Location information
      - Access instructions

      ### 2. Legal Documentation
      Include specific provisions in your estate planning documents that:
      - Grant executors authority to access digital assets
      - Provide clear instructions for management and distribution
      - Address platform-specific requirements

      ### 3. Technical Planning
      Implement technical solutions such as:
      - Password managers with emergency access features
      - Multi-signature cryptocurrency wallets
      - Dead man's switch mechanisms

      ### 4. Regular Updates
      Review and update your digital asset plan regularly to account for:
      - New assets acquired
      - Changes in technology
      - Updates to relevant laws and regulations

      Working with advisors who understand both the technical and legal aspects of digital assets is essential for effective planning in this rapidly evolving area.
    `
  },
  {
    id: '3',
    title: 'Art Law: Protecting Your Collection',
    description: 'Legal considerations for art collectors and strategies to protect valuable collections.',
    category: 'article',
    slug: 'art-law-protecting-collection',
    date: '2023-11-10',
    author: 'Jane Smith',
    tags: ['Art Law', 'Collections', 'Asset Protection'],
    content: `
      # Art Law: Protecting Your Collection

      For serious collectors, art represents not only a passion but also a significant investment. Protecting these valuable assets requires specialized legal knowledge and planning.

      ## Legal Foundations for Collectors

      ### Acquisition Documentation
      - Provenance verification
      - Bills of sale and authenticity certificates
      - Import/export documentation
      - Artist agreements

      ### Ownership Structures
      - Direct personal ownership
      - Trust ownership
      - LLC or corporate ownership
      - Foundation models

      ## Risk Management Strategies

      ### Insurance Considerations
      - Specialized fine art insurance
      - Coverage types and limitations
      - Appraisal requirements
      - Policy exclusions to avoid

      ### Physical Security
      - Environmental controls
      - Security systems
      - Transportation protocols
      - Display considerations

      ## Estate Planning for Art Collections

      ### Valuation Challenges
      Art can be particularly challenging to value for estate purposes, requiring:
      - Qualified appraisers
      - Regular reappraisals
      - Documentation of value fluctuations

      ### Disposition Planning
      Options for art disposition include:
      - Family distribution with equalization strategies
      - Museum donations with tax benefits
      - Private sales with tax planning
      - Art-specific foundations

      ### Tax Considerations
      Art collections face unique tax challenges:
      - Capital gains treatment
      - Estate tax inclusion
      - Charitable contribution deductions
      - State-specific considerations

      ## Ongoing Collection Management

      ### Documentation System
      Maintain comprehensive records including:
      - Acquisition information
      - Conservation history
      - Exhibition loans
      - Insurance documentation

      ### Loan Agreements
      When sharing art with institutions:
      - Clear loan terms
      - Insurance requirements
      - Transportation responsibilities
      - Credit and attribution provisions

      Working with legal advisors who specialize in art law ensures your collection receives the protection it deserves while maximizing its value as part of your overall estate plan.
    `
  },
  {
    id: '4',
    title: 'Cross-Border Estate Planning Guide',
    description: 'Essential strategies for individuals with assets in multiple countries.',
    category: 'guide',
    slug: 'cross-border-estate-planning',
    date: '2023-12-05',
    author: 'Maria Lopez',
    tags: ['International', 'Tax Planning', 'Estate Planning'],
    content: `
      # Cross-Border Estate Planning Guide

      Managing assets across multiple jurisdictions presents unique challenges and opportunities. This guide addresses key considerations for effective cross-border estate planning.

      ## Jurisdictional Complexities

      ### Multiple Legal Systems
      - Common law vs. civil law approaches
      - Forced heirship regimes
      - Recognition of trusts and other structures
      - Conflicting succession laws

      ### Tax Treaty Considerations
      - Estate and gift tax treaties
      - Income tax treaties
      - Information sharing agreements
      - Foreign tax credits

      ## Key Planning Challenges

      ### Multiple Tax Exposures
      Cross-border estates may face:
      - Duplicative taxation
      - Conflicting tax rules
      - Foreign reporting requirements
      - Exit taxes

      ### Asset Access Issues
      - Foreign probate requirements
      - Asset freezes upon death
      - Currency conversion restrictions
      - Executor authority limitations

      ## Essential Planning Strategies

      ### 1. Comprehensive Inventory by Jurisdiction
      Maintain a clear record of:
      - Asset locations and types
      - Ownership structures
      - Governing legal systems
      - Tax implications

      ### 2. Jurisdiction-Specific Documentation
      Consider implementing:
      - Multiple wills for different jurisdictions
      - Country-specific powers of attorney
      - Location-appropriate trusts
      - Local entity structures

      ### 3. Coordinated Professional Team
      Work with:
      - Advisors in each relevant jurisdiction
      - Cross-border tax specialists
      - International estate planning attorneys
      - Global financial managers

      ### 4. Succession Planning Techniques
      - Strategic use of lifetime gifts
      - International holding structures
      - Pre-immigration planning
      - Expatriation considerations

      ## Special Situations

      ### U.S. Citizens Abroad
      Special considerations include:
      - FBAR and FATCA reporting
      - Potential for dual taxation
      - Foreign trust complications
      - Citizenship renunciation planning

      ### Non-U.S. Persons with U.S. Assets
      Key issues include:
      - U.S. estate tax exposure
      - Qualified Domestic Trusts (QDOTs)
      - Foreign Investment in Real Property Tax Act (FIRPTA)
      - State-specific inheritance taxes

      Effective cross-border planning requires ongoing attention to changing laws and circumstances across all relevant jurisdictions.
    `
  },
  {
    id: '5',
    title: 'FAQ: Common Legal Questions',
    description: 'Answers to frequently asked questions about our legal services and practice areas.',
    category: 'faq',
    slug: 'legal-faq',
    date: '2024-01-20',
    author: 'Legal Team',
    tags: ['Estate Planning', 'FAQ', 'Intellectual Property', 'Art Law', 'Crypto'],
    content: `
      # Frequently Asked Questions

      ## Client Services

      ### How do we retain your law firm?
      We have a client onboarding process where we make sure that we don't have conflicts of interest that would prevent us from representing you. Once that's completed, we will onboard you and set up your private client locker so that you can begin accessing our services.

      ### What is your fee structure?
      Our fee structure varies depending on the complexity of your legal needs and the specific practice area. We offer both flat fee arrangements for certain services and hourly billing for more complex matters. We believe in transparent pricing and will discuss all fee arrangements upfront during our initial consultation.

      ## Estate Planning

      ### How long does it take to plan an estate?
      We can usually complete everything in less than a week. It just takes time for you to gather all of your documents and take care of things that are required to set up your session. Once all necessary documentation is provided, we can draft the required legal instruments promptly.

      ### Do I need to update my estate plan if I move to another state?
      Yes, it's highly recommended to review and potentially update your estate plan when you move to a new state. Estate laws vary significantly between states, and documents that were valid in your previous state of residence may not function as intended under your new state's laws.

      ## Intellectual Property

      ### How do I know if my creative work qualifies for copyright protection?
      Copyright protection automatically applies to original works of authorship fixed in a tangible medium of expression. This includes literary works, musical compositions, dramatic works, choreographic works, pictorial/graphic/sculptural works, motion pictures, sound recordings, and architectural works. The work must demonstrate some minimal degree of creativity, but the threshold is quite low. We can help assess your specific work and determine the best protection strategy.

      ### What's the difference between a trademark and a service mark?
      Trademarks and service marks both function as source identifiers, but they apply to different offerings. A trademark identifies the source of goods (physical products), while a service mark identifies the source of services. Both are protected under the same legal framework and can be registered with the USPTO. The term "trademark" is often used broadly to refer to both types of marks.

      ## Art Law

      ### What should artists know about contracts with galleries?
      Artists should carefully review gallery contracts for terms regarding commission percentages, exclusivity arrangements, territory limitations, contract duration, payment schedules, responsibility for expenses, insurance coverage, copyright permissions, and termination conditions. We recommend having these contracts reviewed by an attorney who specializes in art law to ensure your interests are properly protected.

      ### How can I protect my artwork from unauthorized reproduction?
      You can protect your artwork through copyright registration, which provides significant legal advantages if infringement occurs. Additionally, consider using watermarks on digital images, limited licensing agreements, certificates of authenticity, and clear copyright notices. For physical works, documentation of your creative process and maintaining provenance records is valuable. Our firm can help establish a comprehensive protection strategy tailored to your specific artistic medium and goals.

      ## Cryptocurrency & Digital Assets

      ### What are the current tax implications of cryptocurrency transactions?
      Cryptocurrency transactions are subject to capital gains tax treatment in most cases. The IRS treats cryptocurrency as property, not currency. This means you must track the cost basis of each acquisition and calculate gains or losses upon sale or exchange. Mining, staking, and receiving airdrops may also create taxable events. The regulatory landscape is rapidly evolving, and we recommend consulting with our team to develop a tax-compliant strategy for your digital asset activities.

      ### How can I include digital assets in my estate plan?
      Including digital assets in your estate plan requires specialized documentation that grants your fiduciaries legal authority to access and manage these assets. This includes creating a comprehensive digital asset inventory, secure methods for passing access credentials, explicit authorization language in your estate planning documents, and potentially establishing digital asset trusts. Given the technical and legal complexity of digital assets, we recommend working with our team to create a customized digital asset succession plan.
    `
  },
  {
    id: '6',
    title: 'Family Office Coordination',
    description: 'How our firm works with family offices to provide comprehensive legal support.',
    category: 'case-study',
    slug: 'family-office-coordination',
    date: '2024-02-03',
    author: 'Christopher Moye',
    tags: ['Family Office', 'Wealth Management', 'Coordination'],
    content: `
      # Family Office Coordination: A Case Study

      ## Client Situation

      Our client, a multi-generational family with substantial wealth across various asset classes, had established a family office to manage their financial affairs. However, they faced challenges coordinating legal services with their overall wealth management strategy.

      ### Key Challenges

      - Fragmented legal services across multiple firms
      - Inconsistent estate planning strategies across family members
      - Lack of integration between tax planning and legal documentation
      - Inefficient communication between legal advisors and family office staff
      - Difficulty tracking complex legal matters across multiple jurisdictions

      ## Our Approach

      ### 1. Comprehensive Legal Audit

      We began with a thorough review of all existing legal structures and documents, including:
      - Estate planning documents for all family members
      - Entity structures (trusts, LLCs, corporations)
      - Real estate holdings and documentation
      - Intellectual property protections
      - Existing contracts and agreements

      ### 2. Integrated Planning Framework

      We developed a coordinated legal strategy that:
      - Aligned with the family's overall wealth management philosophy
      - Incorporated their philanthropic mission
      - Supported business succession goals
      - Addressed cross-border considerations
      - Provided consistent approaches across generations

      ### 3. Custom Technology Solution

      We implemented a secure, centralized document management system that:
      - Provided appropriate access to family office staff
      - Tracked document versions and updates
      - Generated automated reminders for required actions
      - Facilitated secure communication between all advisors

      ### 4. Regular Coordination Protocols

      We established structured processes for:
      - Quarterly legal strategy meetings with family office executives
      - Annual comprehensive legal reviews
      - Coordinated preparation for tax filings
      - Emergency response protocols for urgent legal matters

      ## Results

      ### Enhanced Efficiency

      - 40% reduction in time spent managing legal affairs
      - Elimination of duplicative legal work
      - Streamlined decision-making process
      - Faster response to emerging legal issues

      ### Improved Risk Management

      - Identification and resolution of previously unknown legal vulnerabilities
      - Consistent implementation of best practices across all entities
      - Reduced compliance risks through systematic monitoring
      - Better preparation for potential litigation or regulatory challenges

      ### Cost Optimization

      - 25% reduction in overall legal expenses
      - Better negotiating position with external service providers
      - Elimination of redundant legal structures
      - More effective use of specialized legal expertise

      ### Strategic Alignment

      - Legal strategies now fully support long-term family goals
      - Consistent governance principles across all entities
      - Improved integration with investment and tax planning
      - Better support for family education and governance initiatives

      This case illustrates how our integrated approach to family office legal coordination creates value beyond traditional legal services, supporting the family's broader wealth management objectives while improving efficiency and reducing costs.
    `
  },
  {
    id: '7',
    title: 'Business Succession Planning',
    description: 'Strategies for transitioning family businesses to the next generation.',
    category: 'whitepaper',
    slug: 'business-succession-planning',
    date: '2024-01-15',
    author: 'Robert Williams',
    tags: ['Business Planning', 'Succession', 'Family Business']
  },
  {
    id: '8',
    title: 'Technology in Estate Administration',
    description: 'How technology is transforming the estate administration process.',
    category: 'article',
    slug: 'technology-estate-administration',
    date: '2024-02-20',
    author: 'Jane Smith',
    tags: ['Technology', 'Estate Administration', 'Innovation']
  },
  {
    id: '9',
    title: 'Charitable Giving Strategies',
    description: 'Advanced techniques for philanthropy as part of your estate plan.',
    category: 'guide',
    slug: 'charitable-giving-strategies',
    date: '2023-12-12',
    author: 'Christopher Moye',
    tags: ['Philanthropy', 'Tax Planning', 'Charitable Trusts']
  },
  {
    id: '10',
    title: 'How We Work: Our Client Process',
    description: 'An overview of our client engagement process from initial consultation to ongoing support.',
    category: 'article',
    slug: 'how-we-work-client-process',
    date: '2024-03-01',
    author: 'Legal Team',
    tags: ['Client Services', 'Process', 'Approach']
  }
];
