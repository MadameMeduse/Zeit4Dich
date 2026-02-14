"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
interface AboutPreviewSectionProps {
  onNavigate: (page: 'home' | 'about' | 'events' | 'contact' | 'atem' | 'massage' | 'inspiration', anchor?: string) => void;
}

/**
 * AboutPreviewSection Component
 * 
 * Preview section for the About page on the homepage with custom navigation integration.
 */
export const AboutPreviewSection: React.FC<AboutPreviewSectionProps> = ({
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
  return <section id="uber-mich" className="py-20 sm:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 bg-[#B5B0A6] border-y-4 border-[#faf5f5]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 sm:gap-16 lg:gap-20 items-center">
          {/* Image */}
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
        }} className="flex-1 order-2 lg:order-1">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 sm:border-[6px] border-white w-full max-w-md mx-auto aspect-[3/4]">
              <img src="https://storage.googleapis.com/storage.magicpath.ai/user/351284685155995648/assets/33af5bb1-fb5d-4fbf-8c49-f8688aaf0558.jpg" alt="Tina Christina" className="w-full h-full object-cover opacity-80" loading="lazy" style={{
              objectFit: "cover",
              objectPosition: "center",
              opacity: "1"
            }} />
            </div>
          </motion.div>

          {/* Text Content */}
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
        }} className="flex-1 flex flex-col space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div className="text-center lg:text-left mb-8 sm:mb-12" style={{
            height: 'auto'
          }}>
              <h2 className="text-2xl sm:text-3xl md:max-w-none lg:text-4xl xl:text-5xl text-white font-light font-['Playfair_Display']" style={{
              fontSize: 'clamp(28px, 4.5vw, 50px)',
              lineHeight: '1.3',
              overflowWrap: 'break-word',
              hyphens: 'auto',
              padding: '0 15px',
              maxWidth: '100%'
            }}>
                Willkommen, liebe Seele!
                <br />
                Du bist hier genau richtig.
              </h2>
            </div>

            <div className="flex flex-col space-y-4 sm:space-y-6 text-white text-base sm:text-lg leading-relaxed font-['Montserrat',_sans-serif] font-semibold">
              <p style={{
              fontWeight: "400"
            }}>
                Schön, dass Du hier bist. Es gibt keine «Zu-fälle» - etwas in Dir möchte mehr
                Klarheit, mehr Herz, mehr Freude und Ruhe erleben.
              </p>
              <p style={{
              fontWeight: "400"
            }}>
                Ich begleite dich auf deinem Weg zu mehr innerer Balance und Selbstbestimmung.
                Als Atemcoach und Masseurin unterstütze ich dich dabei, den Alltag loszulassen,
                in dein Körperbewusstsein einzutauchen und neue Energie zu schöpfen.
              </p>
              <p style={{
              fontWeight: "400"
            }}>
                Ich freue mich auf Dich.
                <br />
                Tina Christina
              </p>
            </div>

            <div className="flex" style={{
            paddingTop: "20px",
            paddingBottom: "20px"
          }}>
              <button onClick={() => onNavigate('about')} className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-[#4d83a4] text-white rounded-full hover:bg-[#3d6a85] transition-all duration-300 tracking-wide font-['Montserrat',_sans-serif] font-semibold text-base lg:text-lg shadow-md hover:shadow-lg">
                Über Mich
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};