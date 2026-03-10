"use client";

import React from 'react';
import { motion } from 'framer-motion';

type PageType = 'home' | 'about' | 'events' | 'contact' | 'atem' | 'massage' | 'inspiration';

interface HeroSectionProps {
  onNavigate: (page: PageType, anchor?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-[100dvh] flex flex-col overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://storage.googleapis.com/storage.magicpath.ai/user/351284685155995648/assets/7d4cb8b1-3efd-48fe-8888-e97734983126.jpg" 
          alt="Friedliche Brücke über Wasser" 
          className="w-full h-full object-cover object-[50%_0%] opacity-75"
          loading="eager" 
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Main Container - Grid layout */}
      <div className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-16 pt-[128px] pb-12">
        
        {/* LEFT COLUMN: H1 and Button */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center	lg:items-start"
        >
          <h1 className="font-['Playfair_Display'] text-white text-center	lg:text-left font-light leading-tight mb-8 text-[clamp(38px,6vw,72px)] drop-shadow-lg">
            Dein Atem.<br />
            Deine Energie.<br />
            Dein Leben.
          </h1>

          <button 
            onClick={() => onNavigate('contact')} 
            className="px-10 py-4 bg-[#4d83a4] text-white rounded-full hover:bg-[#3d6a85] hover:shadow-xl transition-all duration-300 font-['Montserrat'] font-semibold text-lg active:scale-95 whitespace-nowrap"
          >
            Termin buchen
          </button>
        </motion.div>

        {/* RIGHT COLUMN: Glassmorphism Card with Text */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center"
        >
          <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 lg:p-12 border border-white/20 text-white max-w-lg shadow-2xl">
            <div className="space-y-6 font-['Montserrat'] text-base sm:text-lg leading-relaxed opacity-95">
              <p>
                Atmen ist das Natürlichste der Welt – und doch liegt darin eine Kraft, die Dein Leben verändern kann. Es ist eine Brücke, die direkt zu Dir selbst führt.
              </p>
              <p className="hidden sm:block text-white/80">
                Deine Reise zu mehr Wohlbefinden beginnt hier. Professionelle Atemsessions und Massagen für Körper und Geist.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};