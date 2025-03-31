
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

  // Create custom components for ReactMarkdown with proper typing
  const components = {
    h1: ({node, ...props}: any) => {
      const id = props.children?.[0]?.toString()?.toLowerCase()?.replace(/[^\w\s-]/g, '')?.replace(/\s+/g, '-') || '';
      return <h1 {...props} id={id} />;
    },
    h2: ({node, ...props}: any) => {
      const id = props.children?.[0]?.toString()?.toLowerCase()?.replace(/[^\w\s-]/g, '')?.replace(/\s+/g, '-') || '';
      return <h2 {...props} id={id} />;
    },
    h3: ({node, ...props}: any) => {
      const id = props.children?.[0]?.toString()?.toLowerCase()?.replace(/[^\w\s-]/g, '')?.replace(/\s+/g, '-') || '';
      return <h3 {...props} id={id} />;
    },
    h4: ({node, ...props}: any) => {
      const id = props.children?.[0]?.toString()?.toLowerCase()?.replace(/[^\w\s-]/g, '')?.replace(/\s+/g, '-') || '';
      return <h4 {...props} id={id} />;
    },
    h5: ({node, ...props}: any) => {
      const id = props.children?.[0]?.toString()?.toLowerCase()?.replace(/[^\w\s-]/g, '')?.replace(/\s+/g, '-') || '';
      return <h5 {...props} id={id} />;
    },
    h6: ({node, ...props}: any) => {
      const id = props.children?.[0]?.toString()?.toLowerCase()?.replace(/[^\w\s-]/g, '')?.replace(/\s+/g, '-') || '';
      return <h6 {...props} id={id} />;
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
