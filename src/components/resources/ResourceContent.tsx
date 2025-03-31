
import React from 'react';
import ReactMarkdown from 'react-markdown';
import TableOfContents from './TableOfContents';

interface ResourceContentProps {
  content?: string;
}

const ResourceContent: React.FC<ResourceContentProps> = ({ content }) => {
  // Add IDs to headings for anchor links
  const addIdsToHeadings = (children: React.ReactNode): React.ReactNode => {
    if (React.isValidElement(children) && /^h[1-6]$/.test(children.props.node.tagName)) {
      const text = children.props.children[0];
      const id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');

      return React.cloneElement(children, { id });
    }
    return children;
  };

  return (
    <section className="pb-16">
      <div className="container mx-auto px-4">
        <div className="reveal max-w-3xl mx-auto">
          {content ? (
            <>
              <TableOfContents content={content} />
              <article className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-navy prose-p:text-charcoal/80 prose-strong:text-charcoal prose-a:text-gold prose-a:no-underline hover:prose-a:underline prose-ul:text-charcoal/80 prose-ol:text-charcoal/80">
                <ReactMarkdown components={{
                  h1: ({ node, ...props }) => <h1 id={props.children?.[0]?.toString().toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')} {...props} />,
                  h2: ({ node, ...props }) => <h2 id={props.children?.[0]?.toString().toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')} {...props} />,
                  h3: ({ node, ...props }) => <h3 id={props.children?.[0]?.toString().toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')} {...props} />,
                  h4: ({ node, ...props }) => <h4 id={props.children?.[0]?.toString().toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')} {...props} />,
                  h5: ({ node, ...props }) => <h5 id={props.children?.[0]?.toString().toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')} {...props} />,
                  h6: ({ node, ...props }) => <h6 id={props.children?.[0]?.toString().toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')} {...props} />,
                }}>
                  {content}
                </ReactMarkdown>
              </article>
            </>
          ) : (
            <p className="text-center text-charcoal/60 py-8">Full content for this resource is not available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ResourceContent;
