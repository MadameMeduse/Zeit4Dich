"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Loader2 } from 'lucide-react';
type PageType = 'home' | 'about' | 'events' | 'contact' | 'atem' | 'massage' | 'inspiration';
interface NewsletterHeroProps {
  onNavigate?: (page: PageType, eventIdOrAnchor?: string) => void;
}
type SubscriptionState = 'idle' | 'loading' | 'success' | 'error';

/**
 * NewsletterHero Component
 * 
 * A modern, accessible newsletter subscription component that matches
 * the Zeit Für Dich wellness brand aesthetic.
 * 
 * Features:
 * - Responsive layout: vertical on mobile, horizontal on tablet/desktop
 * - Playfair Display for headings, Montserrat for inputs/buttons
 * - Loading, success, and error states
 * - Accessible form with proper ARIA labels
 * - Smooth animations and transitions
 */
export default function NewsletterHero({
  onNavigate
}: NewsletterHeroProps) {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<SubscriptionState>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const animDuration = isMobile ? 0.15 : 0.5;
  const formAnimDuration = isMobile ? 0.2 : 0.6;
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Bitte gib eine gültige E-Mail-Adresse ein.');
      setState('error');
      return;
    }
    setState('loading');
    setErrorMessage('');
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email
        })
      });
      const data = await response.json();
      if (response.ok) {
        setState('success');
        setEmail('');
      } else {
        setState('error');
        setErrorMessage(data.message || 'Ein Fehler ist aufgetreten. Bitte versuche es später erneut.');
      }
    } catch (error) {
      setState('error');
      setErrorMessage('Verbindungsfehler. Bitte überprüfe deine Internetverbindung.');
      console.error('Newsletter subscription error:', error);
    }
  };
  const resetForm = () => {
    setState('idle');
    setErrorMessage('');
  };
  return <section className="py-20 sm:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 bg-white" style={{
    paddingTop: "90px",
    paddingBottom: "90px"
  }}>
      <div className="max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          {state === 'success' ?
        // Success State
        <motion.div key="success" initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} exit={{
          opacity: 0,
          scale: 0.9
        }} transition={{
          duration: animDuration
        }} className="text-center space-y-6">
              <motion.div initial={{
            scale: 0
          }} animate={{
            scale: 1
          }} transition={{
            delay: isMobile ? 0.05 : 0.2,
            type: "spring",
            stiffness: 200
          }} className="flex justify-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#7A7568] rounded-full flex items-center justify-center">
                  <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-white fill-white" />
                </div>
              </motion.div>

              <motion.div initial={{
            opacity: 0,
            y: isMobile ? 10 : 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: isMobile ? 0.1 : 0.4
          }} className="space-y-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#7A7568] font-light font-['Playfair_Display']">
                  Vielen Dank!
                </h2>
                <p className="text-lg sm:text-xl text-[#7A7568]/80 font-['Montserrat'] leading-relaxed max-w-xl mx-auto">
                  Deine Anmeldung war erfolgreich. Wir freuen uns, dich auf deiner Reise zu mehr Wohlbefinden zu begleiten.
                </p>
              </motion.div>

              <motion.button initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: isMobile ? 0.15 : 0.6
          }} onClick={resetForm} className="px-8 py-3 text-[#7A7568] font-['Montserrat'] font-semibold hover:text-[#5a5548] transition-colors duration-300 underline">
                Weitere Anmeldung
              </motion.button>
            </motion.div> :
        // Form State (Idle, Loading, Error)
        <motion.div key="form" initial={{
          opacity: 0,
          y: isMobile ? 10 : 20
        }} animate={{
          opacity: 1,
          y: 0
        }} exit={{
          opacity: 0,
          y: isMobile ? -10 : -20
        }} transition={{
          duration: animDuration
        }} className="space-y-8">
              {/* Header */}
              <div className="text-center space-y-4">
                <motion.h2 initial={{
              opacity: 0,
              y: isMobile ? -10 : -20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: formAnimDuration
            }} className="text-3xl sm:text-4xl lg:text-5xl text-[#7A7568] font-light font-['Playfair_Display'] leading-tight">Newsletter</motion.h2>
                
                <motion.p initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              duration: formAnimDuration,
              delay: isMobile ? 0.05 : 0.2
            }} className="text-base sm:text-lg lg:text-xl text-[#7A7568]/80 font-['Montserrat'] leading-relaxed max-w-2xl mx-auto">
                  Erhalte inspirierende Inhalte, exklusive Wellness-Tipps und Informationen über kommende Events direkt in dein Postfach.
                </motion.p>
              </div>

              {/* Newsletter Form */}
              <motion.form initial={{
            opacity: 0,
            y: isMobile ? 10 : 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: formAnimDuration,
            delay: isMobile ? 0.1 : 0.4
          }} onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
                {/* Responsive Input + Button Container */}
                <div className="flex flex-col md:flex-row gap-4">
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Deine E-Mail-Adresse" disabled={state === 'loading'} required aria-label="E-Mail-Adresse" className="flex-1 px-6 py-4 bg-[#F5F3EF] border-2 border-[#7A7568]/20 rounded-full text-[#7A7568] placeholder-[#7A7568]/50 font-['Montserrat'] text-base sm:text-lg focus:outline-none focus:border-[#7A7568] focus:ring-2 focus:ring-[#7A7568]/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed" style={{
                borderTopWidth: "2px",
                borderTopColor: "#4d83a4",
                borderRightWidth: "2px",
                borderRightColor: "#4d83a4",
                borderBottomWidth: "2px",
                borderBottomColor: "#4d83a4",
                borderLeftWidth: "2px",
                borderLeftColor: "#4d83a4",
                borderStyle: "solid",
                borderRadius: "9999px"
              }} />
                  
                  <button type="submit" disabled={state === 'loading'} className="w-full md:w-auto px-8 py-4 bg-[#4d83a4] text-white rounded-full hover:bg-[#3d6a85] transition-all duration-300 tracking-wide font-['Montserrat'] font-semibold text-base sm:text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-w-[180px] shadow-md hover:shadow-lg">
                    {state === 'loading' ? <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Wird gesendet...</span>
                      </> : <span>Abonnieren</span>}
                  </button>
                </div>

                {/* Error Message */}
                <AnimatePresence>
                  {state === 'error' && errorMessage && <motion.div initial={{
                opacity: 0,
                height: 0
              }} animate={{
                opacity: 1,
                height: 'auto'
              }} exit={{
                opacity: 0,
                height: 0
              }} className="text-center">
                      <p className="text-red-600 font-['Montserrat'] text-sm sm:text-base">
                        {errorMessage}
                      </p>
                    </motion.div>}
                </AnimatePresence>

                {/* Privacy Notice */}
                <motion.p initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              delay: isMobile ? 0.15 : 0.6
            }} className="text-center text-sm text-[#7A7568]/60 font-['Montserrat'] max-w-2xl mx-auto">
                  Du kannst dich jederzeit wieder abmelden, aber ich verspreche: kein Spam, nur nährende Erkenntnisse. Mit der Anmeldung stimmst du unseren Datenschutzbestimmungen zu.
                </motion.p>
              </motion.form>
            </motion.div>}
        </AnimatePresence>
      </div>
    </section>;
}