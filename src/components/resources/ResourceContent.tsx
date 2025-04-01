import React from 'react';
import { Link } from 'react-router-dom';
import './resourceContent.css';

interface ResourceContentProps {
  content?: string;
}

const ResourceContent: React.FC<ResourceContentProps> = ({ content }) => {
  // If content is undefined or empty, show a message with a return link
  if (!content) {
    return (
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-navy/5 rounded-lg p-8 text-center">
              <p className="text-charcoal/80 mb-4">The full content for this resource is currently being prepared.</p>
              <p className="text-charcoal/60 mb-6">Please check back soon or explore our other available resources.</p>
              <Link 
                to="/resources" 
                className="inline-flex items-center justify-center text-sm font-medium bg-navy hover:bg-navy/90 text-white py-2 px-4 rounded-md transition-colors"
              >
                Return to Resources
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Function to convert markdown to HTML
  const markdownToHtml = (markdown: string): string => {
    // Remove the first heading (H1) from the content since it's already shown in ResourceHeader
    const contentWithoutFirstHeading = markdown.replace(/^#\s.*$/m, '').trim();
    
    // Process the content line by line for better control
    let html = contentWithoutFirstHeading
      // Bold text (surrounded by ** or __)
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/__([^_]+)__/g, '<strong>$1</strong>')
      
      // Italic text (surrounded by * or _)
      .replace(/(?<!\*)\*(?!\*)([^*]+)(?<!\*)\*(?!\*)/g, '<em>$1</em>')
      .replace(/(?<!_)_(?!_)([^_]+)(?<!_)_(?!_)/g, '<em>$1</em>')
      
      // Headings
      .replace(/## ([^\n]+)/g, '<h2>$1</h2>')
      .replace(/### ([^\n]+)/g, '<h3>$1</h3>')
      .replace(/#### ([^\n]+)/g, '<h4>$1</h4>')
      
      // Lists
      .replace(/^\s*-\s+([^\n]+)/gm, '<li>$1</li>')
      .replace(/^\s*\*\s+([^\n]+)/gm, '<li>$1</li>')
      .replace(/^\s*\d+\.\s+([^\n]+)/gm, '<li>$1</li>')
      
      // Blockquotes
      .replace(/^\s*>\s+([^\n]+)/gm, '<blockquote>$1</blockquote>')
      
      // Horizontal Rules
      .replace(/^\s*---\s*$/gm, '<hr>')
      
      // Tables (simple implementation)
      .replace(/^\|(.+)\|$/gm, '<tr>$1</tr>')
      .replace(/\|([^|]+)\|/g, '<td>$1</td>')
      
      // Links
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
      
      // Paragraphs (any line that doesn't start with a special character)
      .replace(/^([^<#>|\-*\d].+)$/gm, '<p>$1</p>');
    
    // Process lists
    html = html.replace(/<li>.*?<\/li>(\s*<li>.*?<\/li>)+/gs, (match) => {
      return '<ul>' + match + '</ul>';
    });
    
    // Wrap tables
    html = html.replace(/<tr>.*?<\/tr>(\s*<tr>.*?<\/tr>)+/gs, (match) => {
      return '<table>' + match + '</table>';
    });
    
    return html;
  };

  // Convert markdown to HTML
  const htmlContent = markdownToHtml(content);

  return (
    <section className="py-6 md:py-10 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <article 
            className="resource-content prose prose-base max-w-none prose-headings:font-serif prose-headings:text-navy prose-p:text-charcoal/80 prose-a:text-gold prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </div>
    </section>
  );
};

export default ResourceContent;
