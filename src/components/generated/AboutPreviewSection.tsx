"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

type PageType = 'home' | 'about' | 'events' | 'contact' | 'atem' | 'massage' | 'inspiration';

interface AboutPreviewSectionProps {
  onNavigate: (page: PageType, anchor?: string) => void;
}

const FADE_UP_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

export const AboutPreviewSection: React.FC<AboutPreviewSectionProps> = ({ onNavigate }) => {
  return (
    <section 
      id="uber-mich" 
      // Using min-h-[100dvh] to aim for full screen while remaining flexible for long content
      className="grid min-h-[100dvh] items-center py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#c9c4ba]"
    >
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Centered Top Header - Remains external to the grid for clear hierarchy */}
        <motion.header 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={FADE_UP_VARIANTS}
          className="text-center mb-12 sm:mb-16 lg:mb-20 space-y-4"
        >
          <h2 className="font-['Playfair_Display'] text-white font-light leading-tight text-[clamp(32px,5vw,56px)] break-words">
            Willkommen, liebe Seele!
          </h2>
          <h3 className="text-white text-xl sm:text-2xl font-['Montserrat'] font-medium opacity-90 tracking-wide">
            Du bist hier genau richtig.
          </h3>
          <div className="w-24 h-1 bg-white/30 mx-auto mt-6 rounded-full" />
        </motion.header>

        {/* Grid Layout: Image and Text columns stretch to match each other's height */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 lg:items-center">
          
          {/* Image Container - Using absolute inset for grid-height matching */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={FADE_UP_VARIANTS}
            className="order-2 lg:order-1 flex w-full h-full"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 sm:border-[6px] border-white w-full h-full aspect-[3/4] lg:aspect-auto min-h-[350px] lg:min-h-[450px] max-w-md mx-auto lg:max-w-none">
              <img 
                src="https://storage.googleapis.com/storage.magicpath.ai/user/351284685155995648/assets/33af5bb1-fb5d-4fbf-8c49-f8688aaf0558.jpg" 
                alt="Tina Christina" 
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Text Content - order-1 on mobile for natural reading flow */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={FADE_UP_VARIANTS}
            className="order-1 lg:order-2 flex flex-col justify-center space-y-6 sm:space-y-8 text-white h-full"
          >
            <div className="space-y-6 text-base sm:text-lg leading-relaxed font-['Montserrat'] font-normal">
              <p>
                Schön, dass Du hier bist. Es gibt keine «Zu-fälle» - etwas in Dir möchte mehr
                Klarheit, mehr Herz, mehr Freude und Ruhe erleben.
              </p>
              <p>
                Ich begleite dich auf deinem Weg zu mehr innerer Balance und Selbstbestimmung.
                Als Atemcoach und Masseurin unterstütze ich dich dabei, den Alltag loszulassen,
                in dein Körperbewusstsein einzutauchen und neue Energie zu schöpfen.
              </p>
              <div className="pt-2">
                <p className="opacity-90">Ich freue mich auf Dich.</p>
                <p className="font-semibold text-2xl font-['Playfair_Display'] mt-1 italic">
                  Tina Christina
                </p>
              </div>
            </div>

            <div className="pt-6 flex justify-center lg:justify-start">
              <button 
                onClick={() => onNavigate('about')} 
                className="w-full sm:w-auto px-12 py-4 bg-[#4d83a4] text-white rounded-full hover:bg-[#3d6a85] transition-all duration-300 tracking-wide font-['Montserrat'] font-semibold text-base lg:text-lg shadow-lg hover:shadow-xl active:scale-95"
              >
                Mehr über mich erfahren
              </button>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};