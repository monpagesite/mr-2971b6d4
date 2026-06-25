import React from 'react';
import { BookOpen, ArrowUp } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const Footer: React.FC = () => {
  const { footer } = siteContent;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-background py-12 relative">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo & Tagline */}
          <div className="text-center space-y-3">
            <div className="flex items-center justify-center gap-2">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="font-serif text-2xl font-semibold">
                Mr.エージェント
              </span>
            </div>
            <p className="text-background/70 text-sm max-w-md">
              {footer.tagline}
            </p>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-background/20" />

          {/* Bottom Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4">
            <p className="text-background/70 text-sm">{footer.copyright}</p>
            
            {/* Quick Links */}
            <div className="flex gap-6 text-sm">
              <button
                onClick={() => {
                  const element = document.getElementById('archive');
                  if (element) {
                    const offset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
                className="text-background/70 hover:text-background transition-colors duration-200"
              >
                書評アーカイブ
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('about');
                  if (element) {
                    const offset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
                className="text-background/70 hover:text-background transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    const offset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
                className="text-background/70 hover:text-background transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-12 right-6 md:right-12 w-12 h-12 bg-background text-primary rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-200 shadow-lg hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
