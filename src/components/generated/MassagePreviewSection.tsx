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
      /* min-h-[100dvh]: Centers the content vertically in the viewport */
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
              - text-right: Aligns with the previous Atem section for visual continuity.
              - lg:pr-[10%]: Off-center positioning.
              - mb-20/mb-32: Creates intentional breathing room.
          */}
          <header className="w-full mb-20 md:mb-32 lg:pr-[10%]">
            <h2 className="text-right font-['Playfair_Display'] text-white font-bold text-6xl sm:text-7xl lg:text-9xl tracking-tighter opacity-90">
              MASSAGE
            </h2>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-12 xl:gap-20">
            
            {/* Text Content Column */}
            <div className="order-1 flex flex-col justify-center space-y-8 text-white">
              <div className="space-y-4">
                <span className="text-[10px] tracking-[0.3em] font-bold uppercase opacity-70">
                  Entspannung & Therapie
                </span>
                <h3 className="font-['Playfair_Display'] text-4xl sm:text-5xl leading-[1.15]">
                  Gönn dir eine <br className="hidden sm:block" /> wohltuende Auszeit
                </h3>
              </div>

              <div className="font-['Montserrat'] text-lg space-y-6 font-light leading-relaxed opacity-95">
                <p>
                  Massagen zum Entspannen, Lösen und Auftanken. Entdecke eine Vielzahl an Behandlungen, die individuell auf deine Bedürfnisse abgestimmt werden können.
                </p>
                
                <p className="text-sm opacity-80">
                  Von sanften Ganzkörper- und Rückenmassagen über Kopf- und Fußbehandlungen bis hin zu Aroma-, Atem-, Lava-Stein- und Schwangerschaftsmassagen.
                </p>
                
                {/* Metadata Grid */}
                <div className="pt-8 border-t border-white/20 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider opacity-60 mb-1">Dauer</p>
                    <p className="font-medium text-lg">30–120 Min.</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider opacity-60 mb-1">Ausgleich</p>
                    <p className="font-medium text-lg">45–225 CHF</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={() => onNavigate('massage', 'massage-services')} 
                  className="flex-1 px-8 py-4 bg-[#4d83a4] text-white rounded-full hover:bg-[#3d6a85] transition-all duration-300 font-semibold shadow-lg active:scale-95 whitespace-nowrap"
                >
                  Mehr erfahren
                </button>
                <button 
                  onClick={() => onNavigate('contact')} 
                  className="flex-1 px-8 py-4 bg-white text-[#4d83a4] rounded-full hover:bg-stone-100 transition-all duration-300 font-semibold shadow-lg active:scale-95 whitespace-nowrap"
                >
                  Termin buchen
                </button>
              </div>
            </div>

            {/* Image Column */}
            <div className="order-2 relative">
              {/* Decorative Glow */}
              <div className="absolute -inset-4 bg-white/5 rounded-[2rem] blur-2xl lg:block hidden" />
              
              <div className="relative rounded-2xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white/20">
                <img 
                  src="https://storage.googleapis.com/storage.magicpath.ai/user/351284685155995648/assets/763eae0e-7846-4a3b-8aa9-a8813fd01a26.png" 
                  alt="Entspannende Massagetherapie" 
                  className="w-full h-auto aspect-[4/5] object-cover" 
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