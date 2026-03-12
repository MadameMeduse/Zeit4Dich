"use client";

import React from 'react';
import { motion } from 'framer-motion';

type PageType = 'home' | 'about' | 'events' | 'contact' | 'atem' | 'massage' | 'inspiration';

interface AtemPreviewSectionProps {
  onNavigate: (page: PageType, anchor?: string) => void;
}

const FADE_UP_VARIANTS = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

export const AtemPreviewSection: React.FC<AtemPreviewSectionProps> = ({ onNavigate }) => {
  return (
    <section 
      id="atem-preview" 
      /* min-h-[100dvh]: Ensures it takes up the full viewport.
         flex justify-center: Centers the entire block vertically between sections.
      */
      className="relative flex flex-col justify-center min-h-[100dvh] py-24 px-4 sm:px-6 lg:px-8 bg-[#c9c4ba] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={FADE_UP_VARIANTS}
        >
          {/* SECTION HEADING: 
              - text-right: Moves it to the right.
              - lg:pr-[15%]: Fine-tunes the "not exactly in the middle" look for desktop.
              - mb-24: Massive space beneath the title.
          */}
          <header className="w-full mb-20 md:mb-32 lg:pr-[10%]">
            <h2 className="text-right font-['Playfair_Display'] text-white font-bold text-6xl sm:text-7xl lg:text-9xl tracking-tighter opacity-90">
              ATEM
            </h2>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-12 xl:gap-20">
            
            {/* Image Column */}
            <div className="order-2 lg:order-1 relative">
              {/* Subtle background element for depth */}
              <div className="absolute -inset-4 bg-white/5 rounded-[2rem] blur-2xl lg:block hidden" />
              
              <div className="relative rounded-2xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white/20">
                <img 
                  src="https://storage.googleapis.com/storage.magicpath.ai/user/351284685155995648/assets/73c9c580-ce64-4c73-9990-1ba4a99bb963.png" 
                  alt="Atemsession – Bewusst atmen" 
                  className="w-full h-auto aspect-[4/5] object-cover" 
                  loading="lazy" 
                />
              </div>
            </div>

            {/* Text Content Column */}
            <div className="order-1 lg:order-2 flex flex-col justify-center space-y-8 text-white">
              <div className="space-y-4">
                <span className="text-[10px] tracking-[0.3em] font-bold uppercase opacity-70">
                  Einzelsitzungen
                </span>
                <h3 className="font-['Playfair_Display'] text-4xl sm:text-5xl leading-[1.1]">
                  Bewusst Atmen – <br className="hidden sm:block" /> bewusst Sein
                </h3>
              </div>

              <div className="font-['Montserrat'] text-lg space-y-6 font-light leading-relaxed opacity-95">
                <p>
                  Entdecke, wie der Atem Stress reduzieren und dich zentrieren kann. Unter meiner Führung lernst du, wieder frei zu atmen. Das löst unterdrückte Blockaden auf und bringt Entspannung.
                </p>
                
                <p className="text-xs opacity-60 italic">
                  UR-ATEM© ist eine registrierte Marke von Tina Christina Tomson.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={() => onNavigate('atem')} 
                  className="flex-1 px-8 py-4 bg-[#4d83a4] text-white rounded-full hover:bg-[#3d6a85] transition-all duration-300 font-semibold shadow-lg active:scale-95"
                >
                  Mehr erfahren
                </button>
                <button 
                  onClick={() => onNavigate('contact')} 
                  className="flex-1 px-8 py-4 bg-white text-[#4d83a4] rounded-full hover:bg-stone-100 transition-all duration-300 font-semibold shadow-lg active:scale-95"
                >
                  Termin buchen
                </button>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};