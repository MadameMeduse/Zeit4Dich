"use client";

import React from 'react';
import { motion } from 'framer-motion';

type PageType = 'home' | 'about' | 'events' | 'contact' | 'atem' | 'massage' | 'inspiration';

interface MassagePreviewSectionProps {
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

export const MassagePreviewSection: React.FC<MassagePreviewSectionProps> = ({ onNavigate }) => {
  return (
    <section 
      id="massage-preview" 
      className="grid min-h-[100dvh] items-center py-20 px-4 sm:px-6 lg:px-8 bg-[#C9C4BA] border-y-4 border-[#faf8f6]"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={FADE_UP_VARIANTS}
          className="flex flex-col space-y-10 lg:space-y-16"
        >
          {/* Main Title - Centered */}
          <h2 className="text-center font-['Playfair_Display'] text-white font-bold text-5xl sm:text-6xl lg:text-7xl tracking-tight">
            MASSAGE
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 xl:gap-16">
            
            {/* Text Content Column - order-1 (Top on Mobile) */}
            <div className="order-1 flex flex-col justify-center space-y-6 text-white h-full">
              <header className="space-y-2">
                <h3 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-4xl leading-tight">
                  Gönn dir eine Auszeit
                </h3>
              </header>

              <div className="font-['Montserrat'] text-base sm:text-lg space-y-6 font-normal leading-relaxed">
                <p>
                  Massagen zum Entspannen, Lösen und Auftanken.
                  <br /><br />
                  Von sanften Ganzkörper- und Rückenmassagen über Kopf- und Fußbehandlungen bis hin zu Aroma-, Atem-, Lava-Stein- und Schwangerschaftsmassagen. Auch individuelle Kombinationen sind möglich.
                </p>
                
                <div className="pt-6 border-t border-white/20 space-y-1">
                  <p className="font-medium text-lg">Dauer: ca. 30–120 Minuten</p>
                  <p className="font-medium text-lg">Ausgleich: ca. 45–225 CHF</p>
                </div>
              </div>

              {/* Action Buttons - Equal width and single row on mobile */}
              <div className="flex flex-row gap-3 sm:gap-4 pt-4">
                <button 
                  onClick={() => onNavigate('massage', 'massage-services')} 
                  className="flex-1 px-4 py-3.5 bg-[#4d83a4] text-white rounded-full hover:bg-[#3d6a85] transition-all duration-300 font-['Montserrat'] font-semibold text-sm sm:text-base lg:text-lg shadow-md whitespace-nowrap active:scale-95"
                >
                  Mehr erfahren
                </button>
                <button 
                  onClick={() => onNavigate('contact')} 
                  className="flex-1 px-4 py-3.5 bg-white text-[#4d83a4] border-2 border-white rounded-full hover:bg-transparent hover:text-white transition-all duration-300 font-['Montserrat'] font-semibold text-sm sm:text-base lg:text-lg shadow-md whitespace-nowrap active:scale-95"
                >
                  Termin buchen
                </button>
              </div>
            </div>

            {/* Image Column - Matches Text Height on Desktop */}
            <div className="order-2 flex w-full h-full">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 sm:border-[6px] border-white w-full h-full aspect-[4/3] lg:aspect-auto min-h-[300px] lg:min-h-[450px]">
                <img 
                  src="https://storage.googleapis.com/storage.magicpath.ai/user/351284685155995648/assets/763eae0e-7846-4a3b-8aa9-a8813fd01a26.png" 
                  alt="Entspannende Massagetherapie" 
                  className="absolute inset-0 w-full h-full object-cover" 
                  loading="lazy" 
                />
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};