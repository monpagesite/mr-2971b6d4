import React from 'react';
import { Twitter, Instagram, BookOpen, Mail } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const ContactSection: React.FC = () => {
  const { contact } = siteContent;

  const iconMap: { [key: string]: React.ReactNode } = {
    twitter: <Twitter className="w-5 h-5" />,
    instagram: <Instagram className="w-5 h-5" />,
    'book-open': <BookOpen className="w-5 h-5" />,
    mail: <Mail className="w-5 h-5" />,
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center space-y-8" data-reveal>
          {/* Badge */}
          <div className="inline-block">
            <span className="px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full uppercase tracking-wide">
              {contact.badge}
            </span>
          </div>

          {/* Title */}
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary mb-4">
              {contact.title}
            </h2>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">
              {contact.subtitle}
            </p>
          </div>

          {/* Social Links */}
          <div className="pt-4">
            <p className="text-sm uppercase tracking-wide text-text-muted font-medium mb-6">
              {contact.followLabel}
            </p>
            <div className="flex justify-center gap-4">
              {contact.social.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  className="w-14 h-14 bg-surface border border-border rounded-full flex items-center justify-center text-text-muted hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-200 hover:scale-110"
                  aria-label={platform.name}
                >
                  {iconMap[platform.icon]}
                </a>
              ))}
            </div>
          </div>

          {/* Optional Email Contact */}
          <div className="pt-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-surface border border-border rounded-full">
              <Mail className="w-5 h-5 text-accent" />
              <span className="text-base text-primary font-medium">
                contact@mragent.example.com
              </span>
            </div>
          </div>

          {/* Decorative Quote */}
          <div className="pt-12 max-w-2xl mx-auto">
            <blockquote className="text-lg font-serif text-primary italic leading-relaxed border-l-4 border-accent pl-6">
              「本を読むことは、著者との対話です。その対話を通じて得た気づきを、誠実にお届けします。」
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
