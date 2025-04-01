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

  // Helper function to process inline formatting like bold and italic
  const processInlineFormatting = (text: string): string => {
    // Bold text (surrounded by ** or __)
    let processed = text.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-semibold text-charcoal">$1</strong>');
    processed = processed.replace(/__([^_]+)__/g, '<strong class="font-semibold text-charcoal">$1</strong>');
    
    // Italic text (surrounded by * or _)
    processed = processed.replace(/\*([^*]+)\*/g, '<em class="text-charcoal/80 italic">$1</em>');
    processed = processed.replace(/_([^_]+)_/g, '<em class="text-charcoal/80 italic">$1</em>');
    
    return processed;
  };

  // Process blockquotes
  const processBlockquote = (text: string): string => {
    if (!text.startsWith('> ')) return text;
    
    const content = text.substring(2);
    const formattedContent = processInlineFormatting(content);
    return `<blockquote class="pl-4 border-l-4 border-gold/50 italic text-charcoal/70 my-4">${formattedContent}</blockquote>`;
  };

  // Process a Markdown table
  const processTable = (lines: string[], startIndex: number): { tableHtml: string, endIndex: number } => {
    let currentIndex = startIndex;
    const tableLines = [];
    
    // Collect all table lines
    while (
      currentIndex < lines.length && 
      (lines[currentIndex].trim().startsWith('|') || lines[currentIndex].trim().startsWith('|-'))
    ) {
      const line = lines[currentIndex].trim();
      if (line && line !== '') {
        tableLines.push(line);
      }
      currentIndex++;
    }
    
    if (tableLines.length < 3) {
      // Not a valid table, return original content
      return { 
        tableHtml: lines[startIndex], 
        endIndex: startIndex 
      };
    }
    
    // Process the table
    let tableHtml = '<div class="overflow-x-auto my-6"><table class="min-w-full border-collapse border border-slate-300">';
    
    // Process each row
    tableLines.forEach((row, index) => {
      if (index === 1) return; // Skip the separator row
      
      const isHeader = index === 0;
      const cellTag = isHeader ? 'th' : 'td';
      
      // Split the row into cells and remove empty first/last cells if they exist
      let cells = row.split('|').map(cell => cell.trim());
      if (cells[0] === '') cells.shift();
      if (cells[cells.length - 1] === '') cells.pop();
      
      // Add the row
      tableHtml += '<tr>';
      cells.forEach(cell => {
        const formattedContent = processInlineFormatting(cell);
        const cellClasses = isHeader 
          ? 'px-4 py-2 bg-navy/10 text-navy font-semibold border border-slate-300'
          : 'px-4 py-2 border border-slate-300 text-charcoal/80';
        
        tableHtml += `<${cellTag} class="${cellClasses}">${formattedContent}</${cellTag}>`;
      });
      tableHtml += '</tr>';
    });
    
    tableHtml += '</table></div>';
    
    return {
      tableHtml,
      endIndex: currentIndex - 1
    };
  };

  // Convert markdown to HTML manually
  const convertMarkdownToHtml = (markdown: string): string => {
    // First, normalize line endings
    let html = markdown.replace(/\r\n/g, '\n');
    
    // Process the content line by line for better control
    const lines = html.split('\n');
    const processedLines = [];
    
    let inList = false;
    
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i].trim();
      
      // Skip empty lines
      if (!line) {
        if (!inList) { // Don't add empty lines inside lists
          processedLines.push('');
        }
        continue;
      }
      
      // Process headings
      if (line.startsWith('# ')) {
        const heading = line.substring(2);
        const id = heading.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
        const formattedHeading = processInlineFormatting(heading);
        processedLines.push(`<h1 id="${id}" class="text-4xl font-serif text-navy mt-8 mb-6 font-bold">${formattedHeading}</h1>`);
      }
      else if (line.startsWith('## ')) {
        const heading = line.substring(3);
        const id = heading.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
        const formattedHeading = processInlineFormatting(heading);
        processedLines.push(`<h2 id="${id}" class="text-3xl font-serif text-navy mt-8 mb-4 font-bold">${formattedHeading}</h2>`);
      }
      else if (line.startsWith('### ')) {
        const heading = line.substring(4);
        const id = heading.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
        const formattedHeading = processInlineFormatting(heading);
        processedLines.push(`<h3 id="${id}" class="text-2xl font-serif text-navy mt-6 mb-3 font-bold">${formattedHeading}</h3>`);
      }
      else if (line.startsWith('#### ')) {
        const heading = line.substring(5);
        const id = heading.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
        const formattedHeading = processInlineFormatting(heading);
        processedLines.push(`<h4 id="${id}" class="text-xl font-serif text-navy mt-5 mb-2 font-semibold">${formattedHeading}</h4>`);
      }
      // Process tables
      else if (line.startsWith('|') && i < lines.length - 2 && lines[i+1].includes('|-')) {
        const { tableHtml, endIndex } = processTable(lines, i);
        processedLines.push(tableHtml);
        i = endIndex; // Skip processed table rows
      }
      // Process blockquotes
      else if (line.startsWith('> ')) {
        processedLines.push(processBlockquote(line));
      }
      // Process lists
      else if (line.startsWith('- ')) {
        const content = line.substring(2);
        const formattedContent = processInlineFormatting(content);
        
        if (!inList) {
          processedLines.push('<ul class="list-disc pl-6 mb-4 text-charcoal/80">');
          inList = true;
        }
        
        processedLines.push(`<li class="mb-2 text-charcoal/80">${formattedContent}</li>`);
      }
      // Process ordered lists
      else if (/^\d+\.\s/.test(line)) {
        const content = line.replace(/^\d+\.\s/, '');
        const formattedContent = processInlineFormatting(content);
        
        if (!inList) {
          processedLines.push('<ol class="list-decimal pl-6 mb-4 text-charcoal/80">');
          inList = true;
        }
        
        processedLines.push(`<li class="mb-2 text-charcoal/80">${formattedContent}</li>`);
      }
      // Process horizontal rule
      else if (line === '---') {
        processedLines.push('<hr class="my-6 border-t border-slate-200" />');
      }
      // Process paragraphs (anything else)
      else {
        if (inList) {
          processedLines.push('</ul>');
          inList = false;
        }
        
        const formattedParagraph = processInlineFormatting(line);
        processedLines.push(`<p class="text-charcoal/80 mb-4 leading-relaxed">${formattedParagraph}</p>`);
      }
    }
    
    // Close any open list
    if (inList) {
      processedLines.push('</ul>');
    }
    
    return processedLines.join('\n');
  };
  
  const htmlContent = convertMarkdownToHtml(content);
  
  return (
    <section className="py-6 md:py-10 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white p-0">
            <div 
              className="prose prose-base max-w-none prose-headings:font-serif prose-headings:text-navy prose-p:text-charcoal/80 prose-a:text-gold prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceContent;
