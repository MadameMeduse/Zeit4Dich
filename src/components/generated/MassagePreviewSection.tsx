"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
interface MassagePreviewSectionProps {
  onNavigate: (page: 'home' | 'about' | 'events' | 'contact' | 'atem' | 'massage' | 'inspiration', anchor?: string) => void;
}

/**
 * MassagePreviewSection Component
 * 
 * A preview/intro section for the Massage service on the Home page.
 * Provides a brief overview with a "Learn More" CTA that links to the full Massage page.
 */
export const MassagePreviewSection: React.FC<MassagePreviewSectionProps> = ({
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
  return <section id="massage-preview" className="py-20 sm:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 sm:gap-16 lg:gap-20 items-center">
          {/* Text Content */}
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
        }} className="w-full lg:w-1/2 space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-light italic leading-tight font-['Playfair_Display']" style={{
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: 'clamp(32px, 4.5vw, 50px)',
            lineHeight: '1.3',
            overflowWrap: 'break-word',
            paddingLeft: "15px",
            paddingRight: "15px"
          }}>
                MASSAGE
              </h2>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl text-white font-light leading-tight font-['Playfair_Display']">
                Gönn dir eine Auszeit
              </h3>

              <p className="text-white text-base sm:text-lg leading-relaxed font-['Montserrat',_sans-serif] font-semibold" style={{
            fontWeight: "400"
          }}>
                Massagen zum Entspannen, Lösen und Auftanken.
                <br />
                Von sanften Ganzkörper- und Rückenmassagen über Kopf- und Fußbehandlungen bis hin zu Aroma-, Atem-, Lava-Stein- und Schwangerschaftsmassagen. Auch individuelle Kombinationen sind möglich.
              </p>

              <div className="text-white text-base sm:text-lg leading-relaxed font-['Montserrat',_sans-serif] font-semibold space-y-2">
                <p>Dauer: ca. 30–120 Minuten</p>
                <p>Ausgleich: ca. 45–225 CHF</p>
              </div>

              <div className="flex gap-4 flex-wrap" style={{
            paddingTop: "20px",
            paddingBottom: "20px"
          }}>
                <button onClick={() => onNavigate('massage', 'massage-services')} className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-[#4d83a4] text-white rounded-full hover:bg-[#3d6a85] transition-all duration-300 tracking-wide font-['Montserrat',_sans-serif] font-semibold text-base lg:text-lg shadow-md hover:shadow-lg">
                  Mehr erfahren
                </button>
                <button onClick={() => onNavigate('contact')} className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-white text-[#4d83a4] border-2 border-[#4d83a4] rounded-full hover:bg-[#4d83a4] hover:text-white transition-all duration-300 tracking-wide font-['Montserrat',_sans-serif] font-semibold text-base lg:text-lg shadow-md hover:shadow-lg">
                  Termin buchen
                </button>
              </div>
            </motion.div>

            {/* Image */}
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
        }} className="w-full lg:w-1/2">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 sm:border-[6px] border-white aspect-[4/3]">
                <img src="https://storage.googleapis.com/storage.magicpath.ai/user/351284685155995648/assets/763eae0e-7846-4a3b-8aa9-a8813fd01a26.png" alt="Entspannende Massagetherapie – Körper und Geist im Einklang" className="w-full h-full object-cover" loading="lazy" style={{
              objectFit: "cover",
              objectPosition: "50% 50%",
              opacity: "1"
            }} />
              </div>
            </motion.div>
          </div>
        </div>
    </section>;
};