import React from 'react';
import ReactMarkdown from 'react-markdown';
import TableOfContents from './TableOfContents';
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
          <div className="max-w-3xl mx-auto">
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

  // Create components for ReactMarkdown with proper heading IDs and styling
  const components = {
    h1: ({ children }: React.PropsWithChildren<{}>) => {
      const text = children?.toString() || '';
      const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
      return <h1 id={id} className="text-4xl font-serif text-navy mt-8 mb-6">{children}</h1>;
    },
    h2: ({ children }: React.PropsWithChildren<{}>) => {
      const text = children?.toString() || '';
      const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
      return <h2 id={id} className="text-3xl font-serif text-navy mt-8 mb-4">{children}</h2>;
    },
    h3: ({ children }: React.PropsWithChildren<{}>) => {
      const text = children?.toString() || '';
      const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
      return <h3 id={id} className="text-2xl font-serif text-navy mt-6 mb-3">{children}</h3>;
    },
    h4: ({ children }: React.PropsWithChildren<{}>) => {
      const text = children?.toString() || '';
      const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
      return <h4 id={id} className="text-xl font-serif text-navy mt-5 mb-2">{children}</h4>;
    },
    h5: ({ children }: React.PropsWithChildren<{}>) => {
      const text = children?.toString() || '';
      const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
      return <h5 id={id} className="text-lg font-serif text-navy mt-4 mb-2">{children}</h5>;
    },
    h6: ({ children }: React.PropsWithChildren<{}>) => {
      const text = children?.toString() || '';
      const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
      return <h6 id={id} className="text-base font-serif font-medium text-navy mt-4 mb-2">{children}</h6>;
    },
    p: ({ children }: React.PropsWithChildren<{}>) => {
      return <p className="text-charcoal/80 mb-4 leading-relaxed">{children}</p>;
    },
    ul: ({ children }: React.PropsWithChildren<{}>) => {
      return <ul className="list-disc pl-6 mb-4 text-charcoal/80">{children}</ul>;
    },
    ol: ({ children }: React.PropsWithChildren<{}>) => {
      return <ol className="list-decimal pl-6 mb-4 text-charcoal/80">{children}</ol>;
    },
    li: ({ children }: React.PropsWithChildren<{}>) => {
      return <li className="mb-2">{children}</li>;
    },
    a: ({ href, children }: React.PropsWithChildren<{ href?: string }>) => {
      // For internal links
      if (href && href.startsWith('/')) {
        return <Link to={href} className="text-gold hover:underline">{children}</Link>;
      }
      // For external links
      return <a href={href} className="text-gold hover:underline" target="_blank" rel="noopener noreferrer">{children}</a>;
    },
    blockquote: ({ children }: React.PropsWithChildren<{}>) => {
      return <blockquote className="border-l-4 border-gold pl-4 italic my-4 text-charcoal/70">{children}</blockquote>;
    },
    code: ({ children, className }: React.PropsWithChildren<{ className?: string }>) => {
      // For inline code
      if (!className) {
        return <code className="bg-gray-100 text-navy px-1 py-0.5 rounded font-mono text-sm">{children}</code>;
      }
      // For code blocks
      return (
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto my-4">
          <code className={`${className} text-sm font-mono`}>{children}</code>
        </pre>
      );
    },
    strong: ({ children }: React.PropsWithChildren<{}>) => {
      return <strong className="font-semibold text-charcoal">{children}</strong>;
    },
    em: ({ children }: React.PropsWithChildren<{}>) => {
      return <em className="text-charcoal/80 italic">{children}</em>;
    },
    hr: () => {
      return <hr className="my-8 border-t border-gray-200" />;
    },
  };

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="reveal visible max-w-3xl mx-auto">
          <TableOfContents content={content} />
          <article className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-navy prose-p:text-charcoal/80 prose-strong:text-charcoal prose-a:text-gold prose-a:no-underline hover:prose-a:underline prose-ul:text-charcoal/80 prose-ol:text-charcoal/80 prose-code:bg-gray-100 prose-code:text-navy prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-pre:bg-gray-100 prose-pre:p-4 prose-pre:rounded-md prose-pre:overflow-x-auto">
            <ReactMarkdown components={components}>
              {content}
            </ReactMarkdown>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ResourceContent;
