import React from 'react';
const Logo = () => <img width="80" height="80" src="https://storage.googleapis.com/storage.magicpath.ai/user/351284685155995648/assets/3d1b8e0c-5ac6-45de-808f-dc695dbdfb35.png" alt="Zeit Für Dich Logo" className="w-16 h-16 sm:w-20 sm:h-20" style={{
  objectFit: "contain",
  objectPosition: "50% 50%",
  opacity: "1"
}} />;
type PageType = 'home' | 'about' | 'events' | 'contact' | 'atem' | 'massage' | 'inspiration';
interface FooterComponentProps {
  onNavigate?: (page: PageType) => void;
}

/**
 * FooterComponent - Standalone Footer
 * 
 * Independent, editable footer with navigation and contact info.
 */
export default function FooterComponent({
  onNavigate
}: FooterComponentProps) {
  const currentYear = new Date().getFullYear();
  const handleNavigate = (page: PageType) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };
  return <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#B5B0A6] via-[#A8A399] to-[#9B9488]">
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M0 0L60 10C120 20 240 40 360 45C480 50 600 40 720 35C840 30 960 30 1080 35C1200 40 1320 50 1380 55L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="rgba(255, 255, 255, 0.05)" />
        </svg>
      </div>

      <div className="relative z-10 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" style={{
      paddingBottom: "20px",
      paddingRight: "0px",
      paddingTop: "",
      paddingLeft: "32px"
    }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
            {/* Brand */}
            <div className="flex flex-col space-y-2 sm:space-y-3">
              <Logo />
              <img src="https://storage.googleapis.com/storage.magicpath.ai/user/351284685155995648/assets/4d76db76-4ca9-49d9-b249-ff1741a236dc.png" alt="Zeit Für Dich" className="w-auto h-8 sm:h-10" style={{
              objectFit: "contain",
              objectPosition: "left",
              opacity: "1"
            }} />
              <p className="text-white/80 text-sm leading-relaxed font-['Montserrat',_sans-serif] font-semibold">UR-ATEM© Methode<br />Atemsessions & Massagen<br />Atmen, Berührung und Präsenz – für deine innere Rückkehr nach Hause.<br /></p>
            </div>

            {/* Navigation */}
            <div className="flex flex-col space-y-4 sm:space-y-6">
              <h3 className="text-lg sm:text-xl text-white font-light mb-2 border-b border-white/20 pb-3 font-['Playfair_Display']">
                Navigation
              </h3>
              <nav className="flex flex-col space-y-2 sm:space-y-3 text-white/90 text-sm sm:text-base font-['Montserrat',_sans-serif] font-semibold">
                <button onClick={() => handleNavigate('about')} className="text-left hover:text-white hover:translate-x-1 transition-all duration-300">
                  Über Mich
                </button>
                <button onClick={() => handleNavigate('atem')} className="text-left hover:text-white hover:translate-x-1 transition-all duration-300">
                  Atem
                </button>
                <button onClick={() => handleNavigate('massage')} className="text-left hover:text-white hover:translate-x-1 transition-all duration-300">
                  Massage
                </button>
                <button onClick={() => handleNavigate('events')} className="text-left hover:text-white hover:translate-x-1 transition-all duration-300">
                  Events
                </button>
                <button onClick={() => handleNavigate('inspiration')} className="text-left hover:text-white hover:translate-x-1 transition-all duration-300">
                  Inspiration
                </button>
                <button onClick={() => handleNavigate('contact')} className="text-left hover:text-white hover:translate-x-1 transition-all duration-300">
                  Kontakt
                </button>
              </nav>
            </div>

            {/* Services */}
            <div className="flex flex-col space-y-4 sm:space-y-6">
              <h3 className="text-lg sm:text-xl text-white font-light mb-2 border-b border-white/20 pb-3 font-['Playfair_Display']">
                Angebot
              </h3>
              <ul className="flex flex-col space-y-2 sm:space-y-3 text-white/90 text-sm sm:text-base font-['Montserrat',_sans-serif] font-semibold">
                <li className="hover:text-white transition-colors duration-300">Atemarbeit</li>
                <li className="hover:text-white transition-colors duration-300">Massage Therapie</li>
                <li className="hover:text-white transition-colors duration-300">Atem-Massage</li>
                <li className="hover:text-white transition-colors duration-300">Online Coaching</li>
                <li className="hover:text-white transition-colors duration-300">Workshops</li>
                <li className="hover:text-white transition-colors duration-300">Geschenk-Gutscheine</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="flex flex-col space-y-4 sm:space-y-6">
              <h3 className="text-lg sm:text-xl text-white font-light mb-2 border-b border-white/20 pb-3 font-['Playfair_Display']">
                Kontakt
              </h3>
              <address className="flex flex-col space-y-3 sm:space-y-4 text-white/90 text-sm sm:text-base font-['Montserrat',_sans-serif] font-semibold not-italic">
                <div className="space-y-1">
                  <p className="text-white font-medium">Tina Christina Tomson</p>
                  <p className="text-white/80 text-sm" style={{
                  display: "none"
                }}>Atemsessions & Massagen</p>
                  <p className="text-white/80 text-sm" style={{
                  display: "none"
                }}>UR-ATEM© Methode</p>
                </div>
                <div className="space-y-1 pt-2" style={{
                paddingTop: "0px",
                paddingLeft: "0px"
              }}>
                  <p>Staatsstrasse 24a,</p>
                  <p>9437 Marbach,</p>
                  <p>St.Gallen, Schweiz</p>
                </div>
                <div className="space-y-2 pt-2">
                  <a href="tel:+41764082442" className="hover:text-white transition-colors duration-300 block">
                    Mobil: +41 76 408 2442
                  </a>
                  <a href="mailto:info@zeit4dich.ch" className="hover:text-white transition-colors duration-300 block">
                    E-Mail: info@zeit4dich.ch
                  </a>
                </div>
              </address>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 sm:pt-8 border-t border-white/20" style={{
          borderTopWidth: "0px",
          borderRightWidth: "0px",
          borderBottomWidth: "0px",
          borderLeftWidth: "0px",
          borderStyle: "none",
          borderRadius: "0px"
        }}>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4" style={{
            justifyContent: "space-between",
            alignItems: "flex-start"
          }}>
              <p className="text-white/70 text-center sm:text-left font-['Montserrat',_sans-serif] font-semibold text-xs sm:text-sm">
                © {currentYear} Zeit Für Dich. Alle Rechte vorbehalten.
              </p>
              <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 text-white/70 text-xs sm:text-sm font-['Montserrat',_sans-serif] font-semibold" style={{
              display: "none"
            }}>
                <a href="#datenschutz" className="hover:text-white transition-colors duration-300">
                  Datenschutz
                </a>
                <a href="#impressum" className="hover:text-white transition-colors duration-300">
                  Impressum
                </a>
                <a href="#agb" className="hover:text-white transition-colors duration-300">
                  AGB
                </a>
              </nav>
              <a href="https://www.linkedin.com/in/monika-walig%C3%B3ra/" target="_blank" rel="noopener noreferrer" className="text-white/60 text-xs font-['Montserrat',_sans-serif] font-semibold hover:text-white transition-colors duration-300" style={{
              fontSize: "14px",
              fontWeight: "700"
            }}>
                Design & Developed by Zoi Mindful Works
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
}