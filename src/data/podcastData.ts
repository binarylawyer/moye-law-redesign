
export interface Podcast {
  id: string;
  title: string;
  description: string;
  audioUrl: string;
  date: string;
  duration: string;
  listens: number;
  topics: string[];
}

export const podcastData: Podcast[] = [
  {
    id: "1",
    title: "What to Do When Your Parents Die: A Complete Guide",
    description: "This episode walks you through the immediate steps to take following the death of a parent, including handling legal affairs, managing assets, and navigating the probate process with minimal stress.",
    audioUrl: "#", // This would be replaced with actual audio file URL
    date: "July 15, 2024",
    duration: "28:45",
    listens: 432,
    topics: ["Estate Planning", "Probate", "Inheritance"]
  },
  {
    id: "2",
    title: "Trust Design for Founder Parents: Protecting Your Tech Legacy",
    description: "Learn how founders of software companies should structure their trusts to protect intellectual property, manage company shares, and ensure their children's futures while preserving their business legacy.",
    audioUrl: "#", // This would be replaced with actual audio file URL
    date: "August 3, 2024",
    duration: "32:17",
    listens: 287,
    topics: ["Tech Founders", "Trusts", "IP Protection", "Business Succession"]
  },
  {
    id: "3",
    title: "Digital Asset Estate Planning in the Age of Cryptocurrency",
    description: "Discover essential strategies for incorporating digital assets into your estate plan, with special focus on cryptocurrency holdings, NFTs, and other blockchain-based assets.",
    audioUrl: "#", // This would be replaced with actual audio file URL
    date: "Coming Soon",
    duration: "Approx. 30 min",
    listens: 0,
    topics: ["Digital Assets", "Cryptocurrency", "Estate Planning"]
  }
];
