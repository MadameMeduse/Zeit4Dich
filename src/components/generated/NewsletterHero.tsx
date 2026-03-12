"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Loader2 } from 'lucide-react';

type PageType = 'home' | 'about' | 'events' | 'contact' | 'atem' | 'massage' | 'inspiration';

interface NewsletterHeroProps {
  onNavigate?: (page: PageType, eventIdOrAnchor?: string) => void;
}

type SubscriptionState = 'idle' | 'loading' | 'success' | 'error';

export default function NewsletterHero({ onNavigate }: NewsletterHeroProps) {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<SubscriptionState>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      
      if (response.ok) {
        setState('success');
        setEmail('');
      } else {
        const data = await response.json();
        setState('error');
        setErrorMessage(data.message || 'Ein Fehler ist aufgetreten. Bitte versuche es später erneut.');
      }
    } catch (error) {
      setState('error');
      setErrorMessage('Verbindungsfehler. Bitte überprüfe deine Internetverbindung.');
    }
  };

  return (
    <section className="py-24 px-6 bg-white flex items-center justify-center min-h-[60dvh]">
      <div className="max-w-3xl w-full mx-auto">
        <AnimatePresence mode="wait">
          {state === 'success' ? (
            <motion.div 
              key="success" 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0 }}
              className="text-center space-y-8"
            >
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-[#4d83a4] fill-[#4d83a4]" />
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl text-[#7A7568] font-['Playfair_Display']">Vielen Dank!</h2>
                <p className="text-lg text-[#7A7568]/80 font-['Montserrat'] leading-relaxed max-w-md mx-auto">
                  Deine Anmeldung war erfolgreich. Wir freuen uns, dich auf deiner Reise zu mehr Wohlbefinden zu begleiten.
                </p>
              </div>
              <button 
                onClick={() => setState('idle')} 
                className="text-stone-400 text-sm font-['Montserrat'] hover:text-stone-600 transition-colors underline underline-offset-4"
              >
                Weitere Anmeldung
              </button>
            </motion.div>
          ) : (
            <motion.div 
              key="form" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              className="space-y-12"
            >
              <div className="text-center space-y-4">
                <h2 className="text-4xl md:text-5xl text-[#7A7568] font-['Playfair_Display'] font-light">Newsletter</h2>
                <p className="text-base md:text-lg text-[#7A7568]/70 font-['Montserrat'] leading-relaxed max-w-xl mx-auto">
                  Erhalte inspirierende Inhalte, exklusive Wellness-Tipps und Informationen über kommende Events direkt in dein Postfach.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col md:flex-row gap-3">
                  <input 
                    type="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    placeholder="Deine E-Mail-Adresse" 
                    disabled={state === 'loading'}
                    required 
                    aria-label="E-Mail-Adresse"
                    className="flex-1 px-6 py-4 bg-transparent border border-stone-200 rounded-full text-[#7A7568] placeholder-stone-300 font-['Montserrat'] focus:outline-none focus:border-[#4d83a4] transition-colors disabled:opacity-50"
                  />
                  <button 
                    type="submit" 
                    disabled={state === 'loading'}
                    className="px-10 py-4 bg-[#4d83a4] text-white rounded-full hover:bg-stone-800 transition-all duration-500 font-['Montserrat'] font-semibold shadow-sm disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {state === 'loading' ? <Loader2 className="w-5 h-5 animate-spin" /> : "Abonnieren"}
                  </button>
                </div>

                <AnimatePresence>
                  {state === 'error' && (
                    <motion.p 
                      initial={{ opacity: 0, height: 0 }} 
                      animate={{ opacity: 1, height: 'auto' }} 
                      className="text-red-400 text-center text-sm font-['Montserrat']"
                    >
                      {errorMessage}
                    </motion.p>
                  )}
                </AnimatePresence>

                <p className="text-center text-[11px] text-stone-400 font-['Montserrat'] max-w-md mx-auto leading-relaxed">
                  Du kannst dich jederzeit wieder abmelden, aber ich verspreche: kein Spam, nur nährende Erkenntnisse. Mit der Anmeldung stimmst du unseren Datenschutzbestimmungen zu.
                </p>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}