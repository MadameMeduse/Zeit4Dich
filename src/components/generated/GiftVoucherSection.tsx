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
      className="grid min-h-[100dvh] items-center py-20 px-4 sm:px-6 lg:px-8 bg-[#C9C4BA] "
    >
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Centered Header */}
        <motion.header 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={FADE_UP_VARIANTS}
          className="text-center mb-12 lg:mb-20"
        >
          <h2 className="font-['Playfair_Display'] text-white font-bold text-5xl sm:text-6xl lg:text-7xl tracking-tight">
            GUTSCHEIN
          </h2>
        </motion.header>

        {/* Split-screen layout: Image and Content match height via Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
          
          {/* Left: Hero Image with Hover State */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={FADE_UP_VARIANTS}
            className="group relative w-full h-full order-2 lg:order-1"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 sm:border-[6px] border-white w-full h-full aspect-[16/9] lg:aspect-auto min-h-[300px] lg:min-h-[400px] bg-gradient-to-b from-white to-[#2882c3]">
              <img 
                src="https://storage.googleapis.com/storage.magicpath.ai/user/351284685155995648/assets/95d8a25b-1554-4672-9852-52979200aff6.png" 
                alt="Geschenkgutschein" 
                className="absolute inset-0 w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                loading="lazy" 
              />
              
              {/* Desktop Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden lg:flex items-center justify-center">
                <Gift className="text-white scale-75 group-hover:scale-100 transition-transform duration-500" size={80} strokeWidth={1.5} />
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={FADE_UP_VARIANTS}
            className="flex flex-col justify-center space-y-6 sm:space-y-8 text-white h-full order-1 lg:order-2"
          >
            <header className="space-y-4">
              <h3 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-4xl leading-tight">
                Auf der Suche nach dem perfekten Geschenk?
              </h3>
            </header>

            <div className="font-['Montserrat'] text-base sm:text-lg leading-relaxed space-y-4 font-normal">
              <p>
                Verschenke Wohlbefinden für jeden Anlass. Ob zum Geburtstag, zum Jahrestag oder einfach so – 
                ich schreibe einen wunderschönen Gutschein für deine Liebsten von Hand.
              </p>
              <p className="opacity-90">
                Sag mir einfach, was du brauchst und wohin ich ihn schicken darf.
              </p>
            </div>

            {/* CTA Button - Standardized with other sections */}
            {onNavigate && (
              <div className="pt-4">
                <button 
                  onClick={() => onNavigate('contact')} 
                  className="w-full sm:w-auto px-12 py-4 bg-[#4d83a4] text-white rounded-full hover:bg-[#3d6a85] transition-all duration-300 tracking-wide font-['Montserrat'] font-semibold text-base lg:text-lg shadow-lg hover:shadow-xl active:scale-95"
                >
                  Jetzt anfragen
                </button>
              </div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}