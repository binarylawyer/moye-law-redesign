
import React from 'react';
import ReactMarkdown from 'react-markdown';
import TableOfContents from './TableOfContents';

interface ResourceContentProps {
  content?: string;
}

const ResourceContent: React.FC<ResourceContentProps> = ({ content }) => {
  // If content is undefined or empty, show a message
  if (!content) {
    return (
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-center text-charcoal/60 py-8">Full content for this resource is not available.</p>
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
