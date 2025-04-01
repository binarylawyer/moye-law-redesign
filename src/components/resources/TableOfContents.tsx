import React, { useState } from 'react';
import { List, ChevronDown, ChevronUp } from 'lucide-react';

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
    if (!markdownContent) return [];
    
    try {
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
    } catch (error) {
      console.error("Error extracting headings:", error);
      return [];
    }
  };

  // Safety check for content
  if (!content || typeof content !== 'string') {
    return null;
  }

  const headings = extractHeadings(content);

  // Don't render if no headings found
  if (headings.length === 0) {
    return null;
  }

  // Get the proper padding for each heading level
  const getPaddingClass = (level: number) => {
    switch (level) {
      case 1: return "pl-0";
      case 2: return "pl-4";
      case 3: return "pl-8";
      case 4: return "pl-12";
      case 5: return "pl-16";
      case 6: return "pl-20";
      default: return "pl-0";
    }
  };

  // Get the proper font size and color for each heading level
  const getStyleClass = (level: number) => {
    switch (level) {
      case 1: return "font-medium text-navy";
      case 2: return "text-navy/90";
      case 3: return "text-navy/80 text-sm";
      case 4: return "text-navy/70 text-sm";
      case 5: return "text-navy/60 text-xs";
      case 6: return "text-navy/50 text-xs";
      default: return "";
    }
  };

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
        <nav className="p-4 max-h-[300px] overflow-y-auto bg-white">
          <ul className="space-y-1">
            {headings.map((heading, index) => (
              <li 
                key={index} 
                className={`${getPaddingClass(heading.level)} ${getStyleClass(heading.level)}`}
              >
                <a 
                  href={`#${heading.id}`}
                  className="block py-1 hover:text-gold transition-colors"
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
