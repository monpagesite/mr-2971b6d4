import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import GenreFilterSection from './components/GenreFilterSection';
import BookArchiveSection from './components/BookArchiveSection';
import FeaturedBookSection from './components/FeaturedBookSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [activeGenre, setActiveGenre] = useState('すべて');

  useEffect(() => {
    // Scroll reveal animation
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('[data-reveal]');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [activeGenre]); // Re-run when genre changes to observe new elements

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <GenreFilterSection
          activeGenre={activeGenre}
          onGenreChange={setActiveGenre}
        />
        <BookArchiveSection activeGenre={activeGenre} />
        <FeaturedBookSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
