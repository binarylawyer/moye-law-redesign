import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MarkdownIt from 'markdown-it';

interface ResourceContentProps {
  content?: string;
}

const ResourceContent = ({ content }: ResourceContentProps) => {
  const [htmlContent, setHtmlContent] = useState<string>('');
  
  // Initialize markdown-it with all options enabled
  const md = new MarkdownIt({
    html: true,        // Enable HTML tags in source
    xhtmlOut: true,    // Use '/' to close single tags (<br />)
    breaks: true,      // Convert '\n' in paragraphs into <br>
    linkify: true,     // Autoconvert URL-like text to links
    typographer: true, // Enable smartquotes and other replacements
  });
  
  useEffect(() => {
    if (content) {
      // Extract the first heading and remove it from content
      const contentLines = content.trim().split('\n');
      let contentWithoutFirstHeading = content;
      
      // Check if the first non-empty line is a heading and remove it
      for (let i = 0; i < contentLines.length; i++) {
        const line = contentLines[i].trim();
        if (line.startsWith('# ')) {
          contentWithoutFirstHeading = contentLines.slice(i + 1).join('\n').trim();
          break;
        }
      }
      
      // Convert markdown to HTML
      const renderedHtml = md.render(contentWithoutFirstHeading);
      setHtmlContent(renderedHtml);
    }
  }, [content]);
  
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

  return (
    <section className="py-6 md:py-10 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <article className="prose prose-base max-w-none bg-white prose-headings:font-serif prose-headings:text-navy prose-p:text-charcoal/80 prose-a:text-gold prose-a:no-underline hover:prose-a:underline">
            <div 
              className="markdown-content"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          </article>
        </div>
      </div>
    </section>
  );
};

export default ResourceContent;
