"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Sprout } from "lucide-react";

type PageType = 'home' | 'about' | 'events' | 'contact' | 'atem' | 'massage' | 'inspiration';

interface ClosingCTAProps {
  onNavigate?: (page: PageType, anchor?: string) => void;
}

const FADE_UP_VARIANTS = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

export const ClosingCTA: React.FC<ClosingCTAProps> = ({ onNavigate }) => {
  const handleBookNow = () => onNavigate?.('contact');

  return (
    <section 
      id="closing-cta" 
      className="relative flex flex-col justify-center min-h-[90dvh] py-24 px-6 sm:px-8 lg:px-12 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={FADE_UP_VARIANTS}
        >


          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20 lg:items-center">            
            {/* Image Section - Left Side */}
            <div className="order-2 lg:order-1 lg:col-span-4 w-full">
    <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-white">
                <img 
                  src="https://storage.googleapis.com/storage.magicpath.ai/user/351284685155995648/assets/4a9ab98c-f621-4e47-9c15-0f7d650ca5a1.jpeg" 
                  alt="Tina Christina - Atemcoach und Masseurin" 
                  className="w-full h-auto aspect-[3/4] object-cover opacity-90 transition-opacity duration-700 group-hover:opacity-100" 
                  loading="lazy" 
                />
              </div>
            </div>

            {/* Text Content Section */}
            <div className="order-1 lg:order-2 lg:col-span-8 flex flex-col space-y-8 lg:pl-6">
    <h3 className="text-3xl sm:text-4xl lg:text-6xl text-[#7A7568] font-['Playfair_Display']">
                Wenn du bereit bist...
              </h3>

              <div className="flex flex-col space-y-6 sm:space-y-8">
                <blockquote className="text-[#7A7568] text-base sm:text-lg lg:text-xl leading-relaxed font-['Montserrat'] text-center lg:text-left border-l-4 border-[#B5B0A6] pl-6">
                  <p className="font-light">
                    ...lade ich dich ein, dir selbst zu begegnen. In Ruhe. In Achtsamkeit. Im Atem. <br />
                    Und in einem Raum, der dich hält. Ich freue mich auf dich.
                  </p>
                </blockquote>

                <p className="text-[#7A7568] text-lg sm:text-xl font-['Playfair_Display'] font-light italic text-center lg:text-left pt-2">
                  – Tina Christina
                </p>
              </div>

              {/* Call to Action */}
              <div className="flex justify-center lg:justify-start pt-4">
                <button 
                  onClick={handleBookNow} 
                  className="group inline-flex items-center gap-3 px-8 sm:px-10 py-3 sm:py-4 bg-[#4d83a4] text-white rounded-full hover:bg-[#3d6a85] transition-all duration-300 shadow-md hover:shadow-lg font-['Montserrat'] font-semibold text-base lg:text-lg tracking-wide"
                  aria-label="Jetzt buchen"
                >
                  <Sprout className="w-5 h-5 transition-transform group-hover:rotate-12" aria-hidden="true" />
                  Jetzt Buchen
                </button>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClosingCTA;