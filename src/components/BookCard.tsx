import React from 'react';
import { Star, Clock, Calendar } from 'lucide-react';
import { Book } from '../lib/siteContent';

interface BookCardProps {
  book: Book;
  index: number;
}

const BookCard: React.FC<BookCardProps> = ({ book, index }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'fill-accent text-accent' : 'text-border'
        }`}
      />
    ));
  };

  return (
    <div
      className="bg-surface border border-border rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-secondary group"
      data-reveal
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
    >
      {/* Cover Image */}
      <div className="aspect-[2/3] overflow-hidden bg-border">
        <img
          src={book.coverUrl}
          alt={`${book.title}の表紙`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Genre Tag */}
        <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs uppercase font-medium rounded-full mb-3">
          {book.genre}
        </span>

        {/* Title */}
        <h3 className="font-serif text-xl font-semibold text-primary line-clamp-2 mb-1">
          {book.title}
        </h3>

        {/* Author */}
        <p className="text-sm text-text-muted mb-3">{book.author}</p>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {renderStars(book.rating)}
        </div>

        {/* Excerpt */}
        <p className="text-sm text-text-muted leading-relaxed line-clamp-3 mb-4">
          {book.excerpt}
        </p>

        {/* Meta Row */}
        <div className="flex items-center gap-4 text-xs text-text-muted">
          <div className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            <span>{book.readDate}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>{book.readTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
