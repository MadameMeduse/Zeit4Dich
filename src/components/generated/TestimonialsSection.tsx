"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location?: string;
  sessionType?: string;
}

const testimonials: Testimonial[] = [
  { id: '1', quote: 'Liebe Tina, die Massage heute war hervorragend! Das war mit Abstand die beste Massage die ich bisher hatte... Besonders wie Du den Druck unterschiedlich dem Muskel anpasst... ist einzigartig.', author: 'Christina', location: '19. Mai 2013' },
  { id: '2', quote: 'Liebe Tina Christina, noch einmal Danke für die intensive Massage inkl. Dehnungsübungen, \'Schulter-Check\', Atmung... es wird wieder mit dem Schulter :)', author: 'Andrea', location: 'Dez 2023' },
  { id: '3', quote: 'Die Atemsessions waren unglaublich entspannend und haben mir sehr geholfen, mehr Ruhe und Gelassenheit in meinen Alltag zu bringen. Durch die liebevolle und klare Anleitung fiel es mir leicht, loszulassen...', author: 'Aida', location: 'Zahnärztin', sessionType: 'Sept 2025' },
  { id: '4', quote: 'Die Massage war einfach unglaublich. Dieses tiefe Gefühl von Entspannung und Wohltat habe ich so bisher bei keinem anderen Masseur erlebt... Tina weiss genau, was sie tut.', author: 'Benjamin', location: 'Bauleiter', sessionType: 'Nov 2025' },
  { id: '5', quote: 'Seit einigen Jahren bin ich regelmässig bei Tina zur Massage... Sie massiert nicht einfach, sondern sie ist in Resonanz mit dem Körper und macht genau das, was dem Körper gerade gut tut.', author: 'Karl', location: 'Unternehmer', sessionType: 'Dez 2025' },
  { id: '6', quote: '30 Min gezieltes Kneten verspannter Muskelpartien um mein Schultergelenk erlöste mich von nächtlichen Beschwerden. Sie kennt sich auch mit Dehnübungen aus.', author: 'Johann', location: 'Jan 2026' }
];

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1 === testimonials.length ? 0 : prev + 1));
  }, []);

  const goToPrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  }, []);

  // Auto-slide logic (6 seconds per slide)
  useEffect(() => {
    autoPlayRef.current = setInterval(goToNext, 6000);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [goToNext]);

  // Reset timer on manual interaction
  const manualNavigate = (action: () => void) => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    action();
    autoPlayRef.current = setInterval(goToNext, 6000);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    })
  };

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-24"
        >
          <h2 className="text-[#4d83a4] font-['Playfair_Display'] font-bold tracking-tight mb-4"
              style={{ fontSize: 'clamp(30px, 4vw, 45px)' }}>
            STIMMEN & ERFAHRUNGEN
          </h2>
          <div className="h-1 w-20 bg-[#4d83a4]/20 mx-auto rounded-full" />
        </motion.header>

        {/* Slider Area */}
        <div className="relative min-h-[400px] sm:min-h-[350px] flex items-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 }
              }}
              className="w-full"
            >
              <div className="bg-[#4d83a4]/5 rounded-[3rem] p-10 sm:p-16 relative">
                <Quote className="absolute top-10 left-10 text-[#4d83a4]/10 w-16 h-16 -z-0" />
                
                <blockquote className="relative z-10">
                  <p className="text-xl sm:text-2xl text-stone-600 font-['Montserrat'] font-light leading-relaxed italic mb-10">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  
                  <footer className="flex flex-col gap-1">
                    <span className="text-[#2c4b5e] font-semibold tracking-wide uppercase text-sm font-['Montserrat']">
                      {testimonials[currentIndex].author}
                    </span>
                    <span className="text-[#4d83a4]/60 text-xs font-['Montserrat'] uppercase tracking-[0.2em]">
                      {[testimonials[currentIndex].location, testimonials[currentIndex].sessionType].filter(Boolean).join(' • ')}
                    </span>
                  </footer>
                </blockquote>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows (Desktop Overlays) */}
          <div className="hidden lg:block">
            <button 
              onClick={() => manualNavigate(goToPrev)}
              className="absolute -left-20 top-1/2 -translate-y-1/2 p-4 text-[#4d83a4] hover:bg-[#4d83a4]/5 rounded-full transition-colors"
            >
              <ChevronLeft size={32} strokeWidth={1} />
            </button>
            <button 
              onClick={() => manualNavigate(goToNext)}
              className="absolute -right-20 top-1/2 -translate-y-1/2 p-4 text-[#4d83a4] hover:bg-[#4d83a4]/5 rounded-full transition-colors"
            >
              <ChevronRight size={32} strokeWidth={1} />
            </button>
          </div>
        </div>

        {/* Progress Dots & Mobile Nav */}
        <div className="mt-12 flex flex-col items-center gap-8">
          <div className="flex gap-3">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => manualNavigate(() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                })}
                className={`h-1.5 transition-all duration-500 rounded-full ${
                  idx === currentIndex ? 'w-8 bg-[#4d83a4]' : 'w-2 bg-[#4d83a4]/20'
                }`}
              />
            ))}
          </div>

          {/* Mobile Arrows */}
          <div className="flex lg:hidden gap-10">
            <button onClick={() => manualNavigate(goToPrev)} className="text-[#4d83a4]">
              <ChevronLeft size={28} />
            </button>
            <button onClick={() => manualNavigate(goToNext)} className="text-[#4d83a4]">
              <ChevronRight size={28} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};