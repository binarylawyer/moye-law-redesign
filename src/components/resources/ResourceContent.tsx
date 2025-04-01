import React from 'react';
import { Link } from 'react-router-dom';

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

  // Convert markdown to HTML manually
  const convertMarkdownToHtml = (markdown: string): string => {
    let html = markdown;
    
    // Replace headings
    html = html.replace(/^# (.+)$/gm, '<h1 id="$1" class="text-4xl font-serif text-navy mt-8 mb-6 font-bold">$1</h1>');
    html = html.replace(/^## (.+)$/gm, '<h2 id="$1" class="text-3xl font-serif text-navy mt-8 mb-4 font-bold">$1</h2>');
    html = html.replace(/^### (.+)$/gm, '<h3 id="$1" class="text-2xl font-serif text-navy mt-6 mb-3 font-bold">$1</h3>');
    html = html.replace(/^#### (.+)$/gm, '<h4 id="$1" class="text-xl font-serif text-navy mt-5 mb-2 font-semibold">$1</h4>');
    
    // Replace lists
    html = html.replace(/^- (.+)$/gm, '<li class="mb-2 text-charcoal/80">$1</li>');
    
    // Wrap lists
    let inList = false;
    const lines = html.split('\n');
    const processedLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<li')) {
        if (!inList) {
          processedLines.push('<ul class="list-disc pl-6 mb-4 text-charcoal/80">');
          inList = true;
        }
        processedLines.push(line);
      } else {
        if (inList) {
          processedLines.push('</ul>');
          inList = false;
        }
        processedLines.push(line);
      }
    }
    
    if (inList) {
      processedLines.push('</ul>');
    }
    
    html = processedLines.join('\n');
    
    // Replace paragraphs (anything that's not a heading or list)
    html = html.replace(/^([^<\n].+)$/gm, '<p class="text-charcoal/80 mb-4 leading-relaxed">$1</p>');
    
    // Remove empty paragraphs
    html = html.replace(/<p class="[^"]+"><\/p>/g, '');
    
    return html;
  };
  
  const htmlContent = convertMarkdownToHtml(content);
  
  return (
    <section className="py-6 md:py-10 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white p-0">
            <div 
              className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-navy prose-p:text-charcoal/80 prose-a:text-gold prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceContent;
