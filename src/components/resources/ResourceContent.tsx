import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

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

  // Remove the first heading (H1) from the content since it's already shown in ResourceHeader
  const contentWithoutFirstHeading = content.replace(/^#\s.*$/m, '').trim();

  return (
    <section className="py-6 md:py-10 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <article className="prose prose-base max-w-none prose-headings:font-serif prose-headings:text-navy prose-p:text-charcoal/80 prose-a:text-gold prose-a:no-underline hover:prose-a:underline">
            <div className="markdown-content">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                  // Style headings with your existing classes
                  h1: ({node, ...props}) => <h1 className="text-4xl font-serif text-navy mt-8 mb-6 font-bold" {...props} />,
                  h2: ({node, ...props}) => <h2 className="text-3xl font-serif text-navy mt-8 mb-4 font-bold" {...props} />,
                  h3: ({node, ...props}) => <h3 className="text-2xl font-serif text-navy mt-6 mb-3 font-bold" {...props} />,
                  h4: ({node, ...props}) => <h4 className="text-xl font-serif text-navy mt-5 mb-2 font-semibold" {...props} />,
                  
                  // Style paragraphs
                  p: ({node, ...props}) => <p className="text-charcoal/80 mb-4 leading-relaxed" {...props} />,
                  
                  // Style lists
                  ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-4 text-charcoal/80" {...props} />,
                  ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-4 text-charcoal/80" {...props} />,
                  li: ({node, ...props}) => <li className="mb-2 text-charcoal/80" {...props} />,
                  
                  // Style blockquotes
                  blockquote: ({node, ...props}) => (
                    <blockquote className="pl-4 border-l-4 border-gold/50 italic text-charcoal/70 my-4" {...props} />
                  ),
                  
                  // Style tables
                  table: ({node, ...props}) => (
                    <div className="overflow-x-auto my-6">
                      <table className="min-w-full border-collapse border border-slate-300" {...props} />
                    </div>
                  ),
                  thead: ({node, ...props}) => <thead {...props} />,
                  tbody: ({node, ...props}) => <tbody {...props} />,
                  tr: ({node, ...props}) => <tr className="border-b border-slate-300" {...props} />,
                  th: ({node, ...props}) => <th className="px-4 py-2 bg-navy/10 text-navy font-semibold border border-slate-300" {...props} />,
                  td: ({node, ...props}) => <td className="px-4 py-2 border border-slate-300 text-charcoal/80" {...props} />,
                  
                  // Style horizontal rules
                  hr: ({node, ...props}) => <hr className="my-6 border-t border-slate-200" {...props} />,
                  
                  // Style links
                  a: ({node, ...props}) => <a className="text-gold hover:underline" {...props} />,
                  
                  // Style strong text (bold)
                  strong: ({node, ...props}) => <strong className="font-semibold text-charcoal" {...props} />,
                  
                  // Style emphasized text (italic)
                  em: ({node, ...props}) => <em className="italic text-charcoal/80" {...props} />,
                  
                  // Fix code blocks and inline code handling
                  code: ({node, inline, className, children, ...props}) => {
                    // Only style real code blocks, not the entire content
                    const match = /language-(\w+)/.exec(className || '');
                    
                    return !inline && match ? (
                      <div className="my-4">
                        <code
                          className={`block bg-slate-100 p-4 rounded text-navy/90 text-sm overflow-x-auto ${className}`}
                          {...props}
                        >
                          {children}
                        </code>
                      </div>
                    ) : (
                      <code className="bg-slate-100 px-1 py-0.5 rounded text-navy/90 text-sm" {...props}>
                        {children}
                      </code>
                    );
                  },
                  
                  pre: ({node, children, ...props}) => (
                    <pre className="bg-transparent p-0 overflow-visible my-4" {...props}>
                      {children}
                    </pre>
                  )
                }}
              >
                {contentWithoutFirstHeading}
              </ReactMarkdown>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ResourceContent;
