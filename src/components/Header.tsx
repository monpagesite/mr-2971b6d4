import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-sm shadow-sm border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
              <BookOpen className="w-5 h-5 text-background" />
            </div>
            <span className="font-serif text-xl font-semibold text-primary">
              Mr.エージェント
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('archive')}
              className="text-sm font-medium text-text-muted hover:text-primary transition-colors duration-200"
            >
              書評アーカイブ
            </button>
            <button
              onClick={() => scrollToSection('featured')}
              className="text-sm font-medium text-text-muted hover:text-primary transition-colors duration-200"
            >
              おすすめ
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium text-text-muted hover:text-primary transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2.5 bg-accent text-white rounded-full text-sm font-medium hover:bg-accent/90 transition-colors duration-200"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-primary"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="flex flex-col py-4 px-6">
            <button
              onClick={() => scrollToSection('archive')}
              className="py-3 text-left text-base font-medium text-text-muted hover:text-primary transition-colors duration-200"
            >
              書評アーカイブ
            </button>
            <button
              onClick={() => scrollToSection('featured')}
              className="py-3 text-left text-base font-medium text-text-muted hover:text-primary transition-colors duration-200"
            >
              おすすめ
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="py-3 text-left text-base font-medium text-text-muted hover:text-primary transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="mt-2 py-3 bg-accent text-white rounded-full text-base font-medium hover:bg-accent/90 transition-colors duration-200"
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
