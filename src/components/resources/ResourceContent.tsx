
import React from 'react';
import { Link } from 'react-router-dom';

interface ResourceContentProps {
  content?: string;
}

const ResourceContent = ({ content }: ResourceContentProps) => {
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

  // Helper function to process inline formatting in text
  const processInlineFormatting = (text: string): string => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')  // Bold
      .replace(/__(.*?)__/g, '<strong>$1</strong>')      // Bold alternative
      .replace(/\*(.*?)\*/g, '<em>$1</em>')              // Italic
      .replace(/_(.*?)_/g, '<em>$1</em>');               // Italic alternative
  };

  // Extract the first heading and remove it from content since it's already in ResourceHeader
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

  // Process markdown tables
  const parseTable = (tableLines: string[]): JSX.Element => {
    const tableData: string[][] = [];
    let isHeader = true;
    
    // Process each line and build table data
    tableLines.forEach((line, index) => {
      if (line.trim() === '') return;
      if (line.includes('|---') || line.includes('|-:') || line.includes('|:-')) {
        // This is a separator line, just mark that we're past the header
        isHeader = false;
        return;
      }
      
      // Split the line by | and remove empty cells from start/end
      const rowContent = line.trim();
      const cellsRaw = rowContent.split('|');
      // If the first/last characters are |, remove the resulting empty strings
      const cells = cellsRaw.slice(
        rowContent.startsWith('|') ? 1 : 0, 
        rowContent.endsWith('|') ? cellsRaw.length - 1 : cellsRaw.length
      );
      
      // Trim cells and add to table data
      tableData.push(cells.map(cell => cell.trim()));
    });
    
    if (tableData.length === 0) return <></>;
    
    const headers = tableData[0];
    const rows = tableData.slice(1);
    
    return (
      <div className="overflow-x-auto my-6">
        <table className="min-w-full border-collapse border border-slate-300">
          <thead className="bg-navy/10">
            <tr className="border-b border-slate-300">
              {headers.map((header, i) => (
                <th 
                  key={i} 
                  className="px-4 py-2 text-navy font-semibold border border-slate-300"
                  dangerouslySetInnerHTML={{ __html: processInlineFormatting(header) }}
                />
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-b border-slate-300">
                {row.map((cell, j) => (
                  <td 
                    key={j} 
                    className="px-4 py-2 border border-slate-300 text-charcoal/80"
                    dangerouslySetInnerHTML={{ __html: processInlineFormatting(cell) }}
                  />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  // Group the content into blocks for rendering
  const renderContent = () => {
    const lines = contentWithoutFirstHeading.split('\n');
    const elements: JSX.Element[] = [];
    let currentList: string[] = [];
    let isUnorderedList = false;
    let isOrderedList = false;
    let listKey = 0;
    
    // For table parsing
    let tableLines: string[] = [];
    let inTable = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      // Check if this is a table row
      if (line.startsWith('|') && line.endsWith('|')) {
        if (!inTable) {
          inTable = true;
        }
        tableLines.push(line);
        
        // If this is the last line or the next line is not part of the table
        if (i === lines.length - 1 || 
            !lines[i+1].trim().startsWith('|')) {
          elements.push(parseTable(tableLines));
          tableLines = [];
          inTable = false;
        }
        continue;
      }
      
      // Process list items - check for various list markers
      if (line.match(/^[-*+]\s+/)) {
        // If this is the first list item, start a new unordered list
        if (currentList.length === 0) {
          isUnorderedList = true;
          isOrderedList = false;
        }
        
        // Add the list item content (without the marker)
        // This will remove -, *, or + at the beginning
        const content = line.replace(/^[-*+]\s+/, '');
        currentList.push(content);
      } else if (line.match(/^\d+\.?\s+/)) {
        // If this is the first list item, start a new ordered list
        if (currentList.length === 0) {
          isOrderedList = true;
          isUnorderedList = false;
        }
        
        // Add the list item content (without the number and period)
        const content = line.replace(/^\d+\.?\s+/, '');
        currentList.push(content);
      } else {
        // If we were building a list and now we're not, render the list and reset
        if (currentList.length > 0) {
          const listItems = currentList.map((item, idx) => (
            <li 
              key={idx} 
              className="mb-2 text-charcoal/80"
              dangerouslySetInnerHTML={{ __html: processInlineFormatting(item) }}
            />
          ));
          
          if (isUnorderedList) {
            elements.push(
              <ul key={`ul-${listKey++}`} className="list-disc pl-6 mb-4 text-charcoal/80">
                {listItems}
              </ul>
            );
          } else if (isOrderedList) {
            elements.push(
              <ol key={`ol-${listKey++}`} className="list-decimal pl-6 mb-4 text-charcoal/80">
                {listItems}
              </ol>
            );
          }
          
          // Reset the list
          currentList = [];
          isUnorderedList = false;
          isOrderedList = false;
        }
        
        // Process headings
        if (line.startsWith('## ')) {
          const heading = line.substring(3);
          elements.push(
            <h2 
              key={`h2-${i}`} 
              className="text-3xl font-serif text-navy mt-8 mb-4 font-bold"
              dangerouslySetInnerHTML={{ __html: processInlineFormatting(heading) }}
            />
          );
        } else if (line.startsWith('### ')) {
          const heading = line.substring(4);
          elements.push(
            <h3 
              key={`h3-${i}`} 
              className="text-2xl font-serif text-navy mt-6 mb-3 font-bold"
              dangerouslySetInnerHTML={{ __html: processInlineFormatting(heading) }}
            />
          );
        } else if (line.startsWith('#### ')) {
          const heading = line.substring(5);
          elements.push(
            <h4 
              key={`h4-${i}`} 
              className="text-xl font-serif text-navy mt-5 mb-2 font-semibold"
              dangerouslySetInnerHTML={{ __html: processInlineFormatting(heading) }}
            />
          );
        
        // Process blockquotes  
        } else if (line.startsWith('> ')) {
          const quote = line.substring(2);
          elements.push(
            <blockquote 
              key={`bq-${i}`} 
              className="pl-4 border-l-4 border-gold/50 italic text-charcoal/70 my-4"
              dangerouslySetInnerHTML={{ __html: processInlineFormatting(quote) }}
            />
          );
        
        // Process empty lines
        } else if (line === '') {
          // Don't add a break for empty lines, as they're already handled by paragraph margins
        
        // Process paragraphs
        } else if (line !== '') {
          elements.push(
            <p 
              key={`p-${i}`} 
              className="text-charcoal/80 mb-4 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: processInlineFormatting(line) }}
            />
          );
        }
      }
    }
    
    // If we ended with a list, make sure to render it
    if (currentList.length > 0) {
      const listItems = currentList.map((item, idx) => (
        <li 
          key={idx} 
          className="mb-2 text-charcoal/80"
          dangerouslySetInnerHTML={{ __html: processInlineFormatting(item) }}
        />
      ));
      
      if (isUnorderedList) {
        elements.push(
          <ul key={`ul-${listKey}`} className="list-disc pl-6 mb-4 text-charcoal/80">
            {listItems}
          </ul>
        );
      } else if (isOrderedList) {
        elements.push(
          <ol key={`ol-${listKey}`} className="list-decimal pl-6 mb-4 text-charcoal/80">
            {listItems}
          </ol>
        );
      }
    }
    
    return elements;
  };

  return (
    <section className="py-6 md:py-10 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-sm">
          <div className="prose prose-base max-w-none prose-headings:font-serif prose-headings:text-navy prose-p:text-charcoal/80 prose-a:text-gold prose-a:no-underline hover:prose-a:underline prose-ul:list-disc prose-ol:list-decimal">
            <div className="markdown-content">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceContent;
