import React from 'react';
import { motion } from 'framer-motion';
interface AtemPreviewSectionProps {
  onNavigate: (page: 'home' | 'about' | 'events' | 'contact' | 'atem' | 'massage' | 'inspiration', anchor?: string) => void;
}

/**
 * AtemPreviewSection Component
 * 
 * A preview/intro section for the Atem (breathwork) service on the Home page.
 * Refined with neutral palette (#c9c4ba base) and muted pink accents.
 * Desktop: Image height matches text block height perfectly using flexbox stretch.
 */
export const AtemPreviewSection: React.FC<AtemPreviewSectionProps> = ({
  onNavigate
}) => {
  return <section id="atem-preview" className="py-20 sm:py-28 lg:py-26 px-4 sm:px-6 lg:px-8 bg-[#c9c4ba] border-y-4 border-[#faf8f6]">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        x: -30
      }} whileInView={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="flex flex-col space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-light leading-tight font-['Playfair_Display']" style={{
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: 'clamp(32px, 5.5vw, 70px)',
          lineHeight: '1.3',
          overflowWrap: 'break-word',
          paddingLeft: "15px",
          paddingRight: "15px",
          alignSelf: "center",
          paddingBottom: "4vw",
        }}>
            ATEM
          </h2>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl text-white font-light leading-tight font-['Playfair_Display']" style={{
          display: "none"
        }}>
            Bewusst Atmen – bewusst Sein
          </h3>

          {/* Desktop: Image on left with text on right - both stretch to equal height */}
          <div className="flex flex-col lg:flex-row lg:items-stretch lg:gap-12 xl:gap-16 space-y-6 lg:space-y-0">
            {/* Image */}
            <figure className="lg:flex-shrink-0 lg:w-1/2 xl:w-5/12 flex">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 sm:border-[6px] border-white w-full aspect-[4/3]">
                <img src="https://storage.googleapis.com/storage.magicpath.ai/user/351284685155995648/assets/73c9c580-ce64-4c73-9990-1ba4a99bb963.png" alt="Atemsession – Bewusst atmen und neue Energie schöpfen" className="w-full h-full object-cover" loading="lazy" style={{
                objectFit: "cover",
                objectPosition: "50% 50%",
                opacity: "0.95",
                filter: "sepia(0.08) saturate(0.9)"
              }} />
              </div>
            </figure>

            {/* Text Content - Single Column Layout */}
            <div className="flex flex-col space-y-6 lg:flex-1 justify-center items-center md:items-start">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white font-light leading-tight font-['Playfair_Display']" style={{
              fontSize: 'clamp(26px, 3.5vw, 40px)',
              lineHeight: '1.35',
              overflowWrap: 'break-word',
              hyphens: 'auto',
              paddingBottom: "20px",
              paddingTop: "0px",
              paddingLeft: "15px",
              paddingRight: "15px"
            }}>
                Bewusst Atmen – bewusst Sein
              </h2>
              <p className="text-white text-base sm:text-lg leading-relaxed font-['Montserrat',_sans-serif] font-semibold" style={{
              fontWeight: "400"
            }}>
                Entdecke, wie der Atem Stress reduzieren und dich zentrieren kann. Unter meiner Führung lernst du, wieder frei zu atmen. Das löst unterdrückte Blockaden auf und bringt Entspannung.
                <br />
                <br />
                UR-ATEM© ist eine registrierte Marke von Tina Christina Tomson.
              </p>

              <div className="text-white text-base sm:text-lg leading-relaxed font-['Montserrat',_sans-serif] font-semibold space-y-2">
                <p>Dauer: ca. 2 Stunden</p>
                <p>Ausgleich: ca. 180 CHF</p>
              </div>

              <div className="flex gap-4 flex-wrap" style={{
              paddingTop: "20px",
              paddingBottom: "20px"
            }}>
                <button onClick={() => onNavigate('atem', 'ur-atem-detail')} className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-[#4d83a4] text-white rounded-full hover:bg-[#3d6a85] transition-all duration-300 tracking-wide font-['Montserrat',_sans-serif] font-semibold text-base lg:text-lg shadow-md hover:shadow-lg">
                  Mehr erfahren
                </button>
                <button onClick={() => onNavigate('contact')} className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-white text-[#4d83a4] border-2 border-[#4d83a4] rounded-full hover:bg-[#4d83a4] hover:text-white transition-all duration-300 tracking-wide font-['Montserrat',_sans-serif] font-semibold text-base lg:text-lg shadow-md hover:shadow-lg">
                  Termin buchen
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};