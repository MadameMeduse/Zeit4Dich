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
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Main Container - Grid layout for Left-Column Alignment */}
      <div className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-2 items-center px-4 sm:px-6 lg:px-12 pt-[128px]">
        
        {/* Left Column Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl w-full mx-auto lg:mx-0"
        >
          {/* Glassmorphism Card */}
          <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl border border-white/20 text-white">
            
            <h1 className="font-['Playfair_Display'] font-light leading-tight mb-6 text-[clamp(32px,5vw,56px)] break-words">
              Dein Atem. Deine Energie. Dein Leben.
            </h1>

            <div className="space-y-6 font-['Montserrat'] text-base sm:text-lg leading-relaxed mb-8 opacity-95">
              <p>
                Atmen ist das Natürlichste der Welt – und doch liegt darin eine Kraft, die Dein Leben verändern kann. Es ist eine Brücke, die direkt zu Dir selbst führt.
              </p>
              <p className="hidden sm:block">
                Deine Reise zu mehr Wohlbefinden beginnt hier. Professionelle Atemsessions und Massagen für Körper und Geist.
              </p>
            </div>

            <div className="flex flex-row gap-4">
              <button 
                onClick={() => onNavigate('contact')} 
                className="flex-1 sm:flex-none px-10 py-4 bg-[#4d83a4] text-white rounded-full hover:bg-[#3d6a85] transition-all duration-300 font-['Montserrat'] font-semibold text-base lg:text-lg shadow-lg active:scale-95 whitespace-nowrap"
              >
                Termin buchen
              </button>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Kept empty for visual balance on desktop */}
        <div className="hidden lg:block" />
      </div>
    </section>
  );
};