"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
interface HeroSectionProps {
  onNavigate: (page: 'home' | 'about' | 'events' | 'contact' | 'atem' | 'massage' | 'inspiration', anchor?: string) => void;
}

/**
 * HeroSection Component
 * 
 * Full-bleed hero section with bridge background image and glassmorphism text overlay.
 * Features responsive height (100vh desktop, min-80vh mobile) and WCAG-compliant text contrast.
 * Optimized for mobile with reduced animation durations.
 */
export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate
}) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mobile: instant/snappy, Desktop: smooth
  const animationDuration = isMobile ? 0.2 : 0.8;
  return <section className="relative h-screen min-h-[80vh] lg:h-screen flex items-center justify-center overflow-hidden">
      {/* Full-bleed Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="https://storage.googleapis.com/storage.magicpath.ai/user/351284685155995648/assets/7d4cb8b1-3efd-48fe-8888-e97734983126.jpg" alt="Friedliche Brücke über Wasser mit Kirschblüten" className="w-full h-full object-cover" loading="eager" style={{
        background: "#ffffff",
        objectFit: "cover",
        objectPosition: "50% 0%",
        opacity: "0.75"
      }} />
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 w-full flex items-center justify-center" style={{
      justifyContent: "flex-start",
      alignItems: "center"
    }}>
        <motion.div initial={{
        opacity: 0,
        y: isMobile ? 10 : 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: animationDuration,
        ease: isMobile ? "easeOut" : [0.22, 1, 0.36, 1]
      }} className="max-w-2xl w-full">
          {/* Glassmorphism Container */}
          <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl border border-white/20">
            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white leading-tight font-light font-['Playfair_Display'] mb-6 sm:mb-8" style={{
            fontSize: 'clamp(28px, 4vw, 60px)',
            lineHeight: '1.3',
            overflowWrap: 'break-word',
            hyphens: 'auto',
            padding: '0 15px'
          }}>
              Kennst du deine Innere Brücke?
            </h1>

            {/* Body Text */}
            <div className="space-y-4 sm:space-y-6 text-white text-base sm:text-lg leading-relaxed font-['Montserrat',_sans-serif] mb-8 sm:mb-10">
              <p className="font-normal">
                Atmen ist das Natürlichste der Welt – und doch steckt darin eine Kraft, die dein Leben verändern kann. Es ist mehr als nur Luft – er ist der Schlüssel zu dir selbst...
              </p>
              <p className="font-normal">
                Deine Reise zu mehr Wohlbefinden beginnt hier. Professionelle Atemsessions und Massagen für Körper und Geist.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex">
              <button onClick={() => onNavigate('atem')} className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-[#4d83a4] text-white rounded-full hover:bg-[#3d6a85] transition-all duration-300 tracking-wide font-['Montserrat',_sans-serif] font-semibold text-base lg:text-lg shadow-md hover:shadow-lg">
                Termin buchen
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};