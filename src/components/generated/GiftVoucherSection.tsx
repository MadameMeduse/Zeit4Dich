"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Gift } from 'lucide-react';

type PageType = 'home' | 'about' | 'events' | 'contact' | 'atem' | 'massage' | 'inspiration';

interface GiftVoucherSectionProps {
  onNavigate?: (page: PageType) => void;
}

const FADE_UP_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function GiftVoucherSection({ onNavigate }: GiftVoucherSectionProps) {
  return (
    <section 
      id="gift-voucher" 
      /* min-h-[100dvh]: Framing the section as a standalone experience */
      className="relative flex flex-col justify-center min-h-[100dvh] py-24 px-4 sm:px-6 lg:px-8 bg-[#C9C4BA] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={FADE_UP_VARIANTS}
        >
          {/* SECTION HEADING: 
              - text-right: Consistency with Atem/Massage sections.
              - mb-20 md:mb-32: High-end editorial spacing.
          */}
          <header className="w-full mb-20 md:mb-32 lg:pr-[10%]">
            <h2 className="text-right font-['Playfair_Display'] text-white font-bold text-6xl sm:text-7xl lg:text-9xl tracking-tighter opacity-90">
              GUTSCHEIN
            </h2>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-12 xl:gap-20">
            
            {/* Image Column - Swapped to Left to continue the Z-pattern flow from Massage */}
            <div className="order-2 lg:order-1 relative group">
              {/* Decorative Glow */}
              <div className="absolute -inset-4 bg-white/5 rounded-[2rem] blur-2xl lg:block hidden" />
              
              <div className="relative rounded-2xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white/20 bg-gradient-to-b from-white/10 to-white/5">
                <img 
                  src="images/envelope.webp" 
                  alt="Geschenkgutschein Handgeschrieben" 
                  className="w-full h-auto aspect-[4/5] object-cover  transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy" 
                />
                
                {/* Subtle Icon Overlay */}
                <div className="absolute top-6 right-6 text-white/20">
                  <Gift size={40} strokeWidth={1} />
                </div>
              </div>
            </div>

            {/* Text Content Column */}
            <div className="order-1 lg:order-2 flex flex-col justify-center space-y-8 text-white">
              <div className="space-y-4">
                <span className="text-[10px] tracking-[0.3em] font-bold uppercase opacity-70">
                  Wertvolle Zeit verschenken
                </span>
                <h3 className="font-['Playfair_Display'] text-4xl sm:text-5xl leading-[1.15]">
                  Das perfekte Geschenk <br className="hidden sm:block" /> für deine Liebsten
                </h3>
              </div>

              <div className="font-['Montserrat'] text-lg space-y-6 font-light leading-relaxed opacity-95">
                <p>
                  Ob zum Geburtstag, zum Jahrestag oder einfach als Zeichen der Wertschätzung – Wohlbefinden ist das wertvollste Gut, das man teilen kann.
                </p>
                
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 italic">
                  <p className="text-base sm:text-lg">
                    "Jeder Gutschein wird von mir mit viel Liebe von Hand geschrieben und individuell für dich gestaltet."
                  </p>
                </div>

                <p className="text-base opacity-80 font-normal">
                  Teile mir einfach deine Wünsche und die Versandadresse mit, und ich kümmere mich um den Rest.
                </p>
              </div>

              {/* Action Button */}
              {onNavigate && (
                <div className="pt-6">
                  <button 
                    onClick={() => onNavigate('contact')} 
                    className="w-full sm:w-auto px-12 py-5 bg-[#4d83a4] text-white rounded-full hover:bg-[#3d6a85] transition-all duration-300 font-semibold shadow-xl hover:shadow-[#4d83a4]/40 active:scale-95 flex items-center justify-center gap-3"
                  >
                    Jetzt anfragen <Gift size={20} />
                  </button>
                </div>
              )}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}