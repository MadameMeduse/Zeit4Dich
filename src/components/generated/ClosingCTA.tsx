"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sprout } from "lucide-react";
interface ClosingCTAProps {
  onNavigate?: (page: 'home' | 'about' | 'events' | 'contact' | 'atem' | 'massage' | 'inspiration', anchor?: string) => void;
}

/**
 * ClosingCTA Component
 * 
 * Personal closing section with portrait and call-to-action.
 * Features a two-column split layout on desktop and stacks on mobile.
 */
export const ClosingCTA: React.FC<ClosingCTAProps> = ({
  onNavigate
}) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const animDuration = isMobile ? 0.2 : 0.8;
  const handleBookNow = () => {
    if (onNavigate) {
      onNavigate('contact');
    }
  };
  return <section className="py-20 sm:py-28 lg:py-36 px-6 sm:px-8 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 sm:gap-16 lg:gap-20 items-center">
          
          {/* Image Section */}
          <motion.div initial={{
          opacity: 0,
          x: isMobile ? 0 : -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: animDuration
        }} viewport={{
          once: true
        }} className="flex-1 order-2 lg:order-1 w-full max-w-[400px] mx-auto">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 sm:border-[6px] border-white w-full aspect-[3/4]">
              <img id="img-tina-portrait" src="https://storage.googleapis.com/storage.magicpath.ai/user/351284685155995648/assets/4a9ab98c-f621-4e47-9c15-0f7d650ca5a1.jpeg" alt="Tina Christina - Atemcoach und Masseurin" className="w-full h-full object-cover opacity-80" loading="lazy" />
            </div>
          </motion.div>

          {/* Text Content Section */}
          <motion.div initial={{
          opacity: 0,
          x: isMobile ? 0 : 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: animDuration,
          delay: isMobile ? 0 : 0.2
        }} viewport={{
          once: true
        }} className="flex-1 flex flex-col space-y-8 sm:space-y-10 order-1 lg:order-2">
            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#7A7568] leading-tight font-light font-['Playfair_Display'] text-center lg:text-left">
              Wenn du bereit bist...
            </h2>

            {/* Body Text */}
            <div className="flex flex-col space-y-6 sm:space-y-8">
              <blockquote className="text-[#7A7568] text-base sm:text-lg lg:text-xl leading-relaxed font-['Montserrat',_sans-serif] text-center lg:text-left border-l-4 border-[#B5B0A6] pl-6">
                <p className="font-light" style={{
                width: "fit-content",
                maxWidth: "fit-content"
              }}>...lade ich dich ein, dir selbst zu begegnen. In Ruhe. In Achtsamkeit. Im Atem. <br />Und in einem Raum, der dich hält. Ich freue mich auf dich.</p>
              </blockquote>

              <p className="text-[#7A7568] text-base sm:text-lg leading-relaxed font-['Montserrat',_sans-serif] font-light italic text-center lg:text-left" style={{
              display: "none"
            }}>
                In Ruhe. In Achtsamkeit. Im Atem. Und in einem Raum, der dich hält.
              </p>

              <p className="text-[#7A7568] text-base sm:text-lg leading-relaxed font-['Montserrat',_sans-serif] font-normal text-center lg:text-left" style={{
              display: "none"
            }}>
                Ich freue mich auf dich.
              </p>

              {/* Signature */}
              <p className="text-[#7A7568] text-lg sm:text-xl font-['Playfair_Display'] font-light italic text-center lg:text-left pt-2">
                – Tina Christina
              </p>
            </div>

            {/* Call to Action Button */}
            <div className="flex justify-center lg:justify-start pt-4">
              <button onClick={handleBookNow} className="group inline-flex items-center gap-3 px-8 sm:px-10 py-3 sm:py-4 bg-[#4d83a4] text-white rounded-full hover:bg-[#3d6a85] transition-all duration-300 shadow-md hover:shadow-lg font-['Montserrat',_sans-serif] font-semibold text-base lg:text-lg tracking-wide" aria-label="Jetzt buchen">
                <Sprout className="w-5 h-5 transition-transform group-hover:rotate-12" aria-hidden="true" />
                Jetzt Buchen
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default ClosingCTA;