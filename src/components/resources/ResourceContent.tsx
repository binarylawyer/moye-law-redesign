
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

  // Create components for ReactMarkdown with proper heading IDs
  const components = {
    h1: ({ children }: React.PropsWithChildren<{}>) => {
      const text = children?.toString() || '';
      const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
      return <h1 id={id}>{children}</h1>;
    },
    h2: ({ children }: React.PropsWithChildren<{}>) => {
      const text = children?.toString() || '';
      const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
      return <h2 id={id}>{children}</h2>;
    },
    h3: ({ children }: React.PropsWithChildren<{}>) => {
      const text = children?.toString() || '';
      const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
      return <h3 id={id}>{children}</h3>;
    },
    h4: ({ children }: React.PropsWithChildren<{}>) => {
      const text = children?.toString() || '';
      const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
      return <h4 id={id}>{children}</h4>;
    },
    h5: ({ children }: React.PropsWithChildren<{}>) => {
      const text = children?.toString() || '';
      const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
      return <h5 id={id}>{children}</h5>;
    },
    h6: ({ children }: React.PropsWithChildren<{}>) => {
      const text = children?.toString() || '';
      const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
      return <h6 id={id}>{children}</h6>;
    }
  };

  return (
    <section className="pb-16">
      <div className="container mx-auto px-4">
        <div className="reveal max-w-3xl mx-auto">
          <TableOfContents content={content} />
          <article className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-navy prose-p:text-charcoal/80 prose-strong:text-charcoal prose-a:text-gold prose-a:no-underline hover:prose-a:underline prose-ul:text-charcoal/80 prose-ol:text-charcoal/80">
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
