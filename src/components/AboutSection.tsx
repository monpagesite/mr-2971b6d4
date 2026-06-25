import React from 'react';
import { BookOpen, TrendingUp, Clock } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const AboutSection: React.FC = () => {
  const { about } = siteContent;

  const iconMap: { [key: string]: React.ReactNode } = {
    '読了冊数': <BookOpen className="w-6 h-6" />,
    '書評記事': <TrendingUp className="w-6 h-6" />,
    '読書年数': <Clock className="w-6 h-6" />,
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-7 space-y-8" data-reveal>
            {/* Badge */}
            <div className="inline-block">
              <span className="px-4 py-1.5 bg-secondary/10 text-secondary text-sm font-medium rounded-full uppercase tracking-wide">
                {about.badge}
              </span>
            </div>

            {/* Title */}
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary mb-4">
                {about.title}
              </h2>
              <p className="text-xl text-text-muted">{about.subtitle}</p>
            </div>

            {/* Content Paragraphs */}
            <div className="space-y-6">
              {about.content.map((paragraph, index) => (
                <p key={index} className="text-lg text-text-muted leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Philosophy */}
            <div className="pt-4 space-y-4">
              <h3 className="font-serif text-2xl font-semibold text-primary">
                {about.philosophy.title}
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {about.philosophy.points.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-base text-primary"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="lg:col-span-5 space-y-6" data-reveal>
            {about.stats.map((stat, index) => (
              <div
                key={index}
                className="bg-background border border-border rounded-2xl p-6 hover:border-secondary transition-colors duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary flex-shrink-0">
                    {iconMap[stat.label]}
                  </div>
                  <div>
                    <p className="text-sm text-text-muted mb-1">{stat.label}</p>
                    <p className="font-serif text-4xl font-semibold text-primary">
                      {stat.value}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Additional Visual Element */}
            <div className="bg-background border border-border rounded-2xl p-6">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-wide text-text-muted font-medium">
                  主な読書ジャンル
                </p>
                <div className="flex flex-wrap gap-2">
                  {['ビジネス', '小説', '自己啓発', '歴史', '科学'].map((genre) => (
                    <span
                      key={genre}
                      className="px-3 py-1.5 bg-surface border border-border text-primary text-sm rounded-full"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
