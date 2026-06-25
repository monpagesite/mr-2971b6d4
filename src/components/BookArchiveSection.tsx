import React, { useState } from 'react';
import { siteContent } from '../lib/siteContent';
import BookCard from './BookCard';

interface BookArchiveSectionProps {
  activeGenre: string;
}

const BookArchiveSection: React.FC<BookArchiveSectionProps> = ({ activeGenre }) => {
  const { bookArchive, books } = siteContent;
  const [showCount, setShowCount] = useState(12);

  // Filter books by genre
  const filteredBooks =
    activeGenre === 'すべて'
      ? books
      : books.filter((book) => book.genre === activeGenre);

  const displayedBooks = filteredBooks.slice(0, showCount);
  const hasMore = showCount < filteredBooks.length;

  const loadMore = () => {
    setShowCount((prev) => prev + 12);
  };

  return (
    <section id="archive" className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-12" data-reveal>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary mb-4">
            {bookArchive.title}
          </h2>
          <p className="text-lg text-text-muted">{bookArchive.subtitle}</p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedBooks.map((book, index) => (
            <BookCard key={book.id} book={book} index={index} />
          ))}
        </div>

        {/* No Results */}
        {filteredBooks.length === 0 && (
          <div className="text-center py-12" data-reveal>
            <p className="text-lg text-text-muted">
              このジャンルの書評はまだありません
            </p>
          </div>
        )}

        {/* Load More Button */}
        {hasMore && (
          <div className="flex justify-center mt-12" data-reveal>
            <button
              onClick={loadMore}
              className="px-6 py-3 border-2 border-secondary text-secondary rounded-full text-base font-medium hover:bg-secondary hover:text-white transition-all duration-200"
            >
              {bookArchive.loadMoreText}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BookArchiveSection;
