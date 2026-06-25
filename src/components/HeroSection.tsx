import React from 'react';
import { ChevronDown } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const HeroSection: React.FC = () => {
  const { hero } = siteContent;

  const scrollToArchive = () => {
    const element = document.getElementById('archive');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToFeatured = () => {
    const element = document.getElementById('featured');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="relative max-w-6xl mx-auto px-6 md:px-12 py-32 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="md:col-span-7 space-y-8" data-reveal>
            {/* Badge */}
            <div className="inline-block">
              <span className="px-4 py-1.5 bg-surface text-secondary text-sm font-medium rounded-full">
                {hero.badge}
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-6xl md:text-8xl font-semibold text-primary leading-[1.1] tracking-tight whitespace-pre-line">
              {hero.headline}
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-xl whitespace-pre-line">
              {hero.subtext}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={scrollToArchive}
                className="px-8 py-4 bg-accent text-white rounded-full text-lg font-medium hover:bg-accent/90 transition-all duration-200 hover:shadow-lg"
              >
                {hero.primaryCTA}
              </button>
              <button
                onClick={scrollToFeatured}
                className="px-8 py-4 text-secondary text-lg font-medium hover:underline transition-all duration-200"
              >
                {hero.secondaryCTA}
              </button>
            </div>
          </div>

          {/* Right Column - Mini Book Cards */}
          <div className="hidden md:flex md:col-span-5 relative h-[500px] items-center justify-center" data-reveal>
            <div className="relative w-full max-w-xs">
              {hero.featuredBooks.map((book, index) => (
                <div
                  key={book.id}
                  className="absolute w-40 bg-surface border border-border rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                  style={{
                    transform: `rotate(${index === 0 ? -2 : index === 1 ? 1 : -1}deg) translateY(${index * 60}px) translateX(${index * 30}px)`,
                    zIndex: 3 - index,
                  }}
                >
                  <div className="aspect-[2/3] overflow-hidden bg-border">
                    <img
                      src={book.coverUrl}
                      alt={book.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-xs font-semibold text-primary line-clamp-2 font-serif">
                      {book.title}
                    </p>
                    <p className="text-xs text-text-muted mt-1">
                      {book.author}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToArchive}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-muted animate-bounce hover:text-primary transition-colors duration-200"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default HeroSection;
