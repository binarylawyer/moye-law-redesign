import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MarkdownIt from 'markdown-it';
// @ts-ignore - No type definitions available
import mdTable from 'markdown-it-table';
// @ts-ignore - No type definitions available
import mdContainer from 'markdown-it-container';

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
  })
  .use(mdTable)        // Add table support
  .use(mdContainer);   // Add container support
  
  // Add custom rendering for tables to add styling
  md.renderer.rules.table_open = () => {
    return '<div class="overflow-x-auto my-6"><table class="min-w-full border-collapse border border-slate-300">';
  };
  
  md.renderer.rules.table_close = () => {
    return '</table></div>';
  };
  
  md.renderer.rules.thead_open = () => {
    return '<thead class="bg-navy/10">';
  };
  
  md.renderer.rules.tr_open = () => {
    return '<tr class="border-b border-slate-300">';
  };
  
  md.renderer.rules.th_open = () => {
    return '<th class="px-4 py-2 text-navy font-semibold border border-slate-300">';
  };
  
  md.renderer.rules.td_open = () => {
    return '<td class="px-4 py-2 border border-slate-300 text-charcoal/80">';
  };
  
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
  }, [content, md]);
  
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
        <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-sm">
          <article className="prose prose-base max-w-none">
            <style jsx>{`
              .markdown-content h2 {
                font-family: serif;
                font-size: 1.875rem;
                color: #284b63;
                margin-top: 2rem;
                margin-bottom: 1rem;
                font-weight: bold;
              }
              .markdown-content h3 {
                font-family: serif;
                font-size: 1.5rem;
                color: #284b63;
                margin-top: 1.5rem;
                margin-bottom: 0.75rem;
                font-weight: bold;
              }
              .markdown-content h4 {
                font-family: serif;
                font-size: 1.25rem;
                color: #284b63;
                margin-top: 1.25rem;
                margin-bottom: 0.5rem;
                font-weight: 600;
              }
              .markdown-content p {
                color: rgba(51, 51, 51, 0.8);
                margin-bottom: 1rem;
                line-height: 1.7;
              }
              .markdown-content ul, .markdown-content ol {
                padding-left: 1.5rem;
                margin-bottom: 1rem;
                color: rgba(51, 51, 51, 0.8);
              }
              .markdown-content ul {
                list-style-type: disc;
              }
              .markdown-content ol {
                list-style-type: decimal;
              }
              .markdown-content li {
                margin-bottom: 0.5rem;
              }
              .markdown-content a {
                color: #d4a373;
                text-decoration: none;
              }
              .markdown-content a:hover {
                text-decoration: underline;
              }
              .markdown-content strong {
                font-weight: 600;
                color: #333;
              }
              .markdown-content em {
                font-style: italic;
                color: rgba(51, 51, 51, 0.8);
              }
              .markdown-content blockquote {
                border-left: 4px solid rgba(212, 163, 115, 0.5);
                padding-left: 1rem;
                font-style: italic;
                color: rgba(51, 51, 51, 0.7);
                margin: 1rem 0;
              }
              .markdown-content code {
                background-color: #f1f5f9;
                padding: 0.125rem 0.25rem;
                border-radius: 0.25rem;
                color: rgba(40, 75, 99, 0.9);
                font-size: 0.875rem;
              }
              .markdown-content pre {
                background-color: #f1f5f9;
                padding: 1rem;
                border-radius: 0.25rem;
                overflow-x: auto;
                margin: 1rem 0;
              }
              .markdown-content pre code {
                background-color: transparent;
                padding: 0;
                font-size: 0.875rem;
              }
              .markdown-content hr {
                margin: 1.5rem 0;
                border-top: 1px solid #e2e8f0;
              }
            `}</style>
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
