import React from 'react';
import { siteContent } from '../lib/siteContent';

interface GenreFilterSectionProps {
  activeGenre: string;
  onGenreChange: (genre: string) => void;
}

const GenreFilterSection: React.FC<GenreFilterSectionProps> = ({
  activeGenre,
  onGenreChange,
}) => {
  const { genreFilter } = siteContent;

  return (
    <section className="bg-surface py-8">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Label */}
        <p className="text-sm uppercase tracking-wide text-text-muted text-center mb-6">
          {genreFilter.label}
        </p>

        {/* Genre Chips */}
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide justify-center flex-wrap">
          {genreFilter.genres.map((genre) => (
            <button
              key={genre}
              onClick={() => onGenreChange(genre)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                activeGenre === genre
                  ? 'bg-secondary text-white border-secondary'
                  : 'bg-white border border-border text-primary hover:border-secondary hover:bg-background'
              }`}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GenreFilterSection;
