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
      // Changed to grid and dynamic dynamic viewport height (dvh) for stability
      className="grid min-h-[100dvh] items-center py-20 px-4 sm:px-6 lg:px-8 bg-[#c9c4ba] border-y-4 border-[#faf8f6]"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={FADE_UP_VARIANTS}
          className="flex flex-col space-y-12 lg:space-y-16"
        >
          {/* Main Title - Centered */}
          <h2 className="text-center font-['Playfair_Display'] text-white font-bold text-5xl sm:text-6xl lg:text-7xl tracking-tight">
            ATEM
          </h2>

          {/* FIX: CSS Grid ensures image col matches text col height perfectly */}
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 xl:gap-16">
            
            {/* Image Column - Now dynamic height based on text */}
            <div className="order-2 lg:order-1 flex w-full h-full">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 sm:border-[6px] border-white w-full h-full aspect-[4/3] lg:aspect-auto min-h-[300px] lg:min-h-[400px]">
                <img 
                  src="https://storage.googleapis.com/storage.magicpath.ai/user/351284685155995648/assets/73c9c580-ce64-4c73-9990-1ba4a99bb963.png" 
                  alt="Atemsession – Bewusst atmen" 
                  // Senior fix: Absolute inset ensures image fits the grid cell precisely
                  className="absolute inset-0 w-full h-full object-cover opacity-95 sepia-[0.08] saturate-[0.9]" 
                  loading="lazy" 
                />
              </div>
            </div>

            {/* Text Content Column - order-1 (Top on Mobile) */}
            <div className="order-1 lg:order-2 flex flex-col justify-center space-y-6 text-white h-full pb-8 lg:pb-0">
              <header className="space-y-2">
                <h3 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-4xl leading-tight">
                  Bewusst Atmen – bewusst Sein
                </h3>
              </header>

              <div className="font-['Montserrat'] text-base sm:text-lg space-y-4 font-normal leading-relaxed">
                <p>
                  Entdecke, wie der Atem Stress reduzieren und dich zentrieren kann. Unter meiner Führung lernst du, wieder frei zu atmen. Das löst unterdrückte Blockaden auf und bringt Entspannung.
                </p>
                <p className="text-sm opacity-90 italic pt-2">
                  UR-ATEM© ist eine registrierte Marke von Tina Christina Tomson.
                </p>
                
                <div className="pt-6 border-t border-white/20 space-y-1">
                  <p className="font-medium">Dauer: ca. 2 Stunden</p>
                  <p className="font-medium">Ausgleich: ca. 180 CHF</p>
                </div>
              </div>

              {/* Action Buttons - Single row and equal width logic kept */}
              <div className="flex flex-row gap-3 sm:gap-4 pt-6">
                <button 
                  onClick={() => onNavigate('atem', 'ur-atem-detail')} 
                  className="flex-1 px-4 sm:px-8 py-3.5 bg-[#4d83a4] text-white rounded-full hover:bg-[#3d6a85] transition-all duration-300 font-['Montserrat'] font-semibold text-sm sm:text-base lg:text-lg shadow-md whitespace-nowrap active:scale-95"
                >
                  Mehr erfahren
                </button>
                <button 
                  onClick={() => onNavigate('contact')} 
                  className="flex-1 px-4 sm:px-8 py-3.5 bg-white text-[#4d83a4] border-2 border-white rounded-full hover:bg-transparent hover:text-white transition-all duration-300 font-['Montserrat'] font-semibold text-sm sm:text-base lg:text-lg shadow-md whitespace-nowrap active:scale-95"
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