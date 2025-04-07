import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsultationCTA from "@/components/ConsultationCTA";
import { books, Book as BookType } from '../data/booksData';
import { Button } from "@/components/ui/button";
import { Download, ChevronLeft } from 'lucide-react';

// Icon Mapping Helper (Consider moving to a shared utils file if used elsewhere)
function isValidIconName(name: string): name is keyof typeof LucideIcons {
  return name in LucideIcons;
}
const IconComponent = ({ name, className }: { name: string, className?: string }) => {
  if (isValidIconName(name)) {
    const Icon = LucideIcons[name];
    return <Icon className={className} />;
  }
  return <LucideIcons.BookOpenCheck className={className} />; // Default book icon
};

const BookDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isLoading, setIsLoading] = useState(true);

  // Find the book data based on the slug
  const book = useMemo(() => { 
    return books.find(b => b.slug === slug);
  }, [slug]);

  useEffect(() => {
    setIsLoading(!book); // Set loading based on whether book was found
    window.scrollTo(0, 0);
  }, [book]);

  if (isLoading) {
    return (
      // Simple loading indicator
      <main className="pt-32 bg-white min-h-screen flex items-center justify-center">
        Loading book details...
      </main>
    );
  }

  if (!book) {
    return (
      <main className="pt-32 bg-white min-h-screen">
        <div className="container mx-auto px-4 text-center py-16">
          <h1 className="text-2xl font-bold mb-4">Book Not Found</h1>
          <p className="mb-8">Sorry, we couldn't find the book you were looking for.</p>
          <Link to="/books" className="text-blue-600 hover:underline">
            Back to Books List
          </Link>
        </div>
      </main>
    );
  }

  return (
    <>
      <Header />
      <main className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Back to books button */}
          <div className="mb-8">
            <Link
              to="/books"
              className="inline-flex items-center text-navy hover:text-gold transition-colors"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back to All Books
            </Link>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="md:flex md:gap-12 items-start">
              {/* Book Cover (Optional) */}
              {book.coverImageUrl && (
                <div className="md:w-1/3 mb-6 md:mb-0 flex-shrink-0">
                  <img 
                    src={book.coverImageUrl}
                    alt={`${book.title} cover`}
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
              )}

              {/* Book Details */}
              <div className="flex-grow">
                <div className="flex items-center mb-4">
                  <div className="bg-gray-100 p-2 rounded-full mr-3">
                    <IconComponent name={book.iconName} className="h-6 w-6 text-navy" />
                  </div>
                  <span className="text-sm font-medium bg-gray-100 text-gray-800 px-3 py-1 rounded">
                    {book.category}
                  </span>
                </div>
                
                <h1 className="font-display text-3xl md:text-4xl text-navy mb-3">
                  {book.title}
                </h1>
                <p className="text-lg text-charcoal mb-4">By {book.author}</p>
                <p className="text-sm text-gray-500 mb-6">
                  Published: {book.publicationDate}
                  {book.pageCount && ` | ${book.pageCount} pages`}
                  {book.isbn && ` | ISBN: ${book.isbn}`}
                </p>

                <p className="text-charcoal/90 leading-relaxed mb-8">
                  {book.description}
                </p>

                {/* Download Button */}
                <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-white">
                  <a href={book.downloadUrl} download>
                    <Download className="w-5 h-5 mr-2" />
                    Download Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ConsultationCTA />
    </>
  );
};

export default BookDetailPage; 