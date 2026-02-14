"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';
type PageType = 'home' | 'about' | 'events' | 'contact' | 'atem' | 'massage' | 'inspiration';
interface GiftVoucherSectionProps {
  onNavigate?: (page: PageType) => void;
}

/**
 * GiftVoucherSection Component
 * 
 * Modern split-screen gift voucher section with premium aesthetics.
 * Features a bird's eye view hero image on the left with hover state and elegant typography on the right.
 */
export default function GiftVoucherSection({
  onNavigate
}: GiftVoucherSectionProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const animDuration = isMobile ? 0.2 : 0.8;
  const handleContactClick = () => {
    if (onNavigate) {
      onNavigate('contact');
    }
  };
  return <section id="gift-voucher" className="py-20 sm:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 bg-[#C9C4BA]">
      <div className="max-w-7xl mx-auto">
        {/* Split-screen layout: Image left, Content right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left: Hero Image with Hover State */}
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
        }} className="relative w-full block" style={{
          background: "linear-gradient(180deg, #ffffff 0%, #2882c3 100%)",
          borderTopWidth: "0px",
          borderTopColor: "rgb(229, 231, 235)",
          borderRightWidth: "0px",
          borderRightColor: "rgb(229, 231, 235)",
          borderBottomWidth: "0px",
          borderBottomColor: "rgb(229, 231, 235)",
          borderLeftWidth: "0px",
          borderLeftColor: "rgb(229, 231, 235)",
          borderStyle: "solid",
          borderRadius: "20px"
        }}>
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-2xl cursor-pointer" onMouseEnter={() => !isMobile && setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
              <img src="https://storage.googleapis.com/storage.magicpath.ai/user/351284685155995648/assets/95d8a25b-1554-4672-9852-52979200aff6.png" alt="Geschenkgutschein elegant präsentiert auf einem minimalistischen Schreibtisch" className="w-full h-full object-cover transition-transform duration-500" style={{
              transform: isHovered && !isMobile ? 'scale(1.05)' : 'scale(1)',
              objectFit: "contain",
              objectPosition: "50% 50%",
              opacity: "1"
            }} loading="lazy" />
              
              {/* Dark overlay on hover - Desktop only */}
              {!isMobile && <div className="absolute inset-0 bg-black transition-opacity duration-500 ease-in-out pointer-events-none" style={{
              opacity: isHovered ? 0.4 : 0
            }} />}

              {/* Gift Icon - appears on hover - Desktop only */}
              {!isMobile && <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{
              opacity: isHovered ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out'
            }}>
                <motion.div initial={{
                scale: 0.8,
                opacity: 0
              }} animate={{
                scale: isHovered ? 1 : 0.8,
                opacity: isHovered ? 1 : 0
              }} transition={{
                duration: 0.4,
                ease: "easeOut"
              }}>
                  <Gift className="text-white" size={80} strokeWidth={1.5} />
                </motion.div>
              </div>}
            </div>
          </motion.div>

          {/* Right: Content */}
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
        }} className="flex flex-col justify-center space-y-6 sm:space-y-8 lg:pl-8">
            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-light leading-tight font-['Playfair_Display']">
              Auf der Suche nach dem perfekten Geschenk?
            </h2>

            {/* Body Text */}
            <div className="space-y-4">
              <p className="text-white text-base sm:text-lg leading-relaxed font-['Montserrat',_sans-serif]">
                Verschenke Wohlbefinden für jeden Anlass. Ob zum Geburtstag, zum Jahrestag oder einfach so – 
                ich schreibe einen wunderschönen Gutschein für deine Liebsten von Hand. Sag mir einfach, 
                was du brauchst und wohin ich ihn schicken darf.
              </p>
            </div>

            {/* CTA Button */}
            {onNavigate && <div className="pt-4">
                <button onClick={handleContactClick} className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-[#4d83a4] text-white rounded-full hover:bg-[#3d6a85] transition-all duration-300 tracking-wide font-['Montserrat',_sans-serif] font-semibold text-base lg:text-lg shadow-md hover:shadow-lg">
                  Jetzt anfragen
                </button>
              </div>}
          </motion.div>

        </div>
      </div>
    </section>;
}