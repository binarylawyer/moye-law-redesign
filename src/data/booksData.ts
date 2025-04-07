import React from 'react';
import { BookOpenCheck } from 'lucide-react'; // Example icon

// Define the structure for a Book
export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  publicationDate: string;
  category: string; // e.g., 'Estate Planning', 'IP Law'
  slug: string;
  coverImageUrl?: string; // Optional cover image URL
  downloadUrl: string; // Path to the downloadable file (e.g., PDF)
  pageCount?: number;
  isbn?: string;
  iconName: string; // Store icon name as string
}

export const books: Book[] = [
  {
    id: "book-1",
    title: "The Digital Estate: Planning for Your Online Legacy",
    author: "Moye Law Digital Asset Team",
    description: "A comprehensive guide to protecting and transferring digital assets as part of your estate plan. Includes practical worksheets and checklists for inventorying online accounts, cryptocurrency holdings, and NFT collections.",
    publicationDate: "2023-10-14",
    category: "Estate Planning",
    slug: "digital-estate-planning-online-legacy",
    coverImageUrl: "/images/books/digital-estate-cover.png", // Example path
    downloadUrl: "/books/downloads/digital-estate-guide.pdf",
    pageCount: 76,
    iconName: "BookOpenCheck"
  },
  {
    id: "book-2",
    title: "Safeguarding AI Innovation: Legal Frameworks for Tech Founders",
    author: "Moye Law IP Team",
    description: "Learn how to protect AI innovations through patents, trade secrets, and strategic contracts. Includes case studies on navigating IP challenges in the rapidly evolving AI landscape.",
    publicationDate: "2023-09-01",
    category: "Intellectual Property",
    slug: "safeguarding-ai-innovation-legal-frameworks",
    coverImageUrl: "/images/books/ai-innovation-cover.png", // Example path
    downloadUrl: "/books/downloads/ai-innovation-frameworks.pdf",
    pageCount: 92,
    iconName: "BookOpenCheck"
  },
  // Add more book objects here...
]; 