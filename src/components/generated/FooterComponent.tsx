import React from 'react';

type PageType = 'home' | 'about' | 'events' | 'contact' | 'atem' | 'massage' | 'inspiration';

interface FooterComponentProps {
  onNavigate?: (page: PageType) => void;
}

const Logo = () => (
  <div className="mb-4 transition-transform duration-300 hover:scale-105">
    <img 
      src="images/logo.png" 
      alt="Zeit Für Dich Logo" 
      className="w-32 h-32 sm:w-40 sm:h-40 object-contain" 
      loading="lazy"
    />
  </div>
);

const NAV_LINKS: { label: string; value: PageType }[] = [
  { label: 'Über Mich', value: 'about' },
  { label: 'Atem', value: 'atem' },
  { label: 'Massage', value: 'massage' },
  { label: 'Events', value: 'events' },
  { label: 'Inspiration', value: 'inspiration' },
  { label: 'Kontakt', value: 'contact' },
];

const SERVICES = [
  'Atemarbeit',
  'Massage Therapie',
  'Atem-Massage',
  'Online Coaching',
  'Workshops',
  'Geschenk-Gutscheine',
];

export default function FooterComponent({ onNavigate }: FooterComponentProps) {
  const currentYear = new Date().getFullYear();

  const handleNavigate = (page: PageType) => {
    onNavigate?.(page);
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#B5B0A6] via-[#A8A399] to-[#9B9488] text-white">
      {/* Decorative Wave */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0 0L60 10C120 20 240 40 360 45C480 50 600 40 720 35C840 30 960 30 1080 35C1200 40 1320 50 1380 55L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" 
            fill="rgba(255, 255, 255, 0.05)" 
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="flex flex-col space-y-4">
            <Logo />
            <p className="text-white/80 text-sm leading-relaxed font-semibold font-sans">
              Die UR-ATEM© Methode<br />
              Massage- & Atempraxis<br />
              Atmen, Berührung und Präsenz – für deine innere Rückkehr nach Hause.
            </p>
          </div>

          {/* Navigation Section */}
          <div className="flex flex-col">
            <h3 className="text-xl font-light mb-6 border-b border-white/20 pb-3 font-serif">
              Navigation
            </h3>
            <nav className="flex flex-col space-y-3">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.value}
                  onClick={() => handleNavigate(link.value)}
                  className="text-left text-white/90 hover:text-white hover:translate-x-2 transition-all duration-300 text-base font-semibold font-sans"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Services Section */}
          <div className="flex flex-col">
            <h3 className="text-xl font-light mb-6 border-b border-white/20 pb-3 font-serif">
              Angebot
            </h3>
            <ul className="flex flex-col space-y-3">
              {SERVICES.map((service) => (
                <li key={service} className="text-white/90 hover:text-white transition-colors duration-300 text-base font-semibold font-sans">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col">
            <h3 className="text-xl font-light mb-6 border-b border-white/20 pb-3 font-serif">
              Kontakt
            </h3>
            <address className="flex flex-col space-y-4 text-white/90 text-base font-sans font-semibold not-italic">
              <div>
                <p className="text-white text-lg">Tina Christina Tomson</p>
              </div>
              <div className="flex flex-col space-y-2">
                <a href="tel:+41764082442" className="hover:text-white transition-colors duration-300 focus:outline-dotted focus:outline-2">
                  Mobil: +41 76 408 24 42
                </a>
                <a href="mailto:info@zeit4dich.ch" className="hover:text-white transition-colors duration-300 focus:outline-dotted focus:outline-2">
                  E-Mail: info@zeit4dich.ch
                </a>
              </div>
              <div className="flex flex-col opacity-80">
                <p>Balgacherstrasse 202</p>
                <p>9435 Heerbrugg SG</p>
                <p>Schweiz</p>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/60 text-xs sm:text-sm font-semibold font-sans text-center md:text-left">
            © {currentYear} Zeit Für Dich. Alle Rechte vorbehalten.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
             <a href="https://www.linkedin.com/in/monika-walig%C3%B3ra/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/60 text-sm font-bold hover:text-white transition-colors duration-300">
                Design & Developed by Zoi Mindful Works
              </a>
          </div>
        </div>
      </div>
    </footer>
  );
}