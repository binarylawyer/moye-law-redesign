
import React, { useState } from 'react';
import { List, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from "@/lib/utils";

interface TableOfContentsProps {
  content: string;
}

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ content }) => {
  const [isOpen, setIsOpen] = useState(true);

  // Parse headings from markdown content
  const extractHeadings = (markdownContent: string): TOCItem[] => {
    // Match all headings (# Heading, ## Heading, etc.)
    const headingRegex = /^(#{1,6})\s+(.+?)$/gm;
    const headings: TOCItem[] = [];
    let match;

    while ((match = headingRegex.exec(markdownContent)) !== null) {
      const level = match[1].length;
      const text = match[2].trim();
      
      // Create an ID from the heading text (for anchor links)
      const id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');
      
      headings.push({ id, text, level });
    }

    return headings;
  };

  const headings = extractHeadings(content || '');

  // Don't render if no headings found
  if (headings.length === 0) {
    return null;
  }

  return (
    <div className="mb-8 border rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between bg-light-gray p-4 text-navy font-medium"
      >
        <div className="flex items-center">
          <List className="w-4 h-4 mr-2" />
          <span>Table of Contents</span>
        </div>
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      
      {isOpen && (
        <nav className="p-4 max-h-[300px] overflow-y-auto">
          <ul className="space-y-2">
            {headings.map((heading, index) => (
              <li 
                key={index} 
                className={cn(
                  "text-charcoal/80 hover:text-navy transition-colors",
                  heading.level === 1 ? "font-medium" : "",
                  heading.level > 1 ? `ml-${(heading.level - 1) * 4}` : ""
                )}
              >
                <a 
                  href={`#${heading.id}`}
                  className="block py-1"
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default TableOfContents;
