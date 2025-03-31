
import React from 'react';
import ReactMarkdown from 'react-markdown';

interface ResourceContentProps {
  content?: string;
}

const ResourceContent: React.FC<ResourceContentProps> = ({ content }) => {
  return (
    <section className="pb-16">
      <div className="container mx-auto px-4">
        <div className="reveal max-w-3xl mx-auto">
          {content ? (
            <article className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-navy prose-p:text-charcoal/80 prose-strong:text-charcoal prose-a:text-gold prose-a:no-underline hover:prose-a:underline prose-ul:text-charcoal/80 prose-ol:text-charcoal/80">
              <ReactMarkdown>
                {content}
              </ReactMarkdown>
            </article>
          ) : (
            <p className="text-center text-charcoal/60 py-8">Full content for this resource is not available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ResourceContent;
