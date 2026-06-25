import React from 'react';
import { Star, Check } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const FeaturedBookSection: React.FC = () => {
  const { featuredBook } = siteContent;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'fill-accent text-accent' : 'text-border'
        }`}
      />
    ));
  };

  return (
    <section id="featured" className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/8 via-transparent to-transparent pointer-events-none" 
           style={{ backgroundPosition: 'top right' }} />
      
      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Left Column - Book Cover */}
          <div className="md:col-span-5 flex justify-center md:justify-start" data-reveal>
            <div className="relative max-w-xs w-full">
              {/* Badge */}
              <div className="absolute -top-4 left-4 z-10">
                <span className="px-4 py-2 bg-accent text-white text-sm font-medium rounded-full shadow-lg">
                  {featuredBook.badge}
                </span>
              </div>
              
              {/* Book Cover */}
              <div className="relative">
                <div className="aspect-[2/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 transition-transform duration-300 hover:rotate-0">
                  <img
                    src={featuredBook.coverUrl}
                    alt={`${featuredBook.title}の表紙`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="md:col-span-7 space-y-6" data-reveal>
            {/* Overline */}
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs uppercase font-medium rounded-full">
                {featuredBook.genre}
              </span>
              <div className="flex items-center gap-1">
                {renderStars(featuredBook.rating)}
              </div>
            </div>

            {/* Title */}
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary">
              {featuredBook.title}
            </h2>

            {/* Author */}
            <p className="text-xl text-text-muted">著者: {featuredBook.author}</p>

            {/* Description */}
            <p className="text-lg text-text-muted leading-relaxed">
              {featuredBook.description}
            </p>

            {/* Key Points */}
            <div className="space-y-3 pt-2">
              <p className="text-sm uppercase tracking-wide text-text-muted font-medium">
                この本のポイント
              </p>
              <ul className="space-y-2">
                {featuredBook.keyPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-secondary" />
                    </div>
                    <span className="text-base text-primary">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button className="px-8 py-4 bg-secondary text-white rounded-full text-lg font-medium hover:bg-secondary/90 transition-all duration-200 hover:shadow-lg">
                {featuredBook.ctaText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBookSection;
