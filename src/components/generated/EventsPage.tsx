"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Mail, ArrowRight } from 'lucide-react';
import { EVENT_DATA } from '@/lib/eventdata';

export default function EventsPage({ onNavigate, selectedEventId }) {
  const [activeEventId, setActiveEventId] = useState(selectedEventId || EVENT_DATA[0].id);

  useEffect(() => {
    if (selectedEventId) {
      setActiveEventId(selectedEventId);
    }
  }, [selectedEventId]);

  const activeEvent = EVENT_DATA.find(e => e.id === activeEventId) || EVENT_DATA[0];

  return (
    <section className="min-h-screen bg-[#FCFAF8]">
      
      {/* --- HERO HEADER --- */}
      <div className="relative min-h-[550px] lg:h-[70vh] w-full flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="images/group_breathwork.webp" 
            alt="Events Header" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/65 backdrop-blur-[1px]" />
        </div>

        <motion.header 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-center px-6 max-w-4xl"
          style={{ paddingTop: '128px' }} 
        >
          <div className="space-y-4">
            <span className="text-[#4d83a4] font-bold tracking-[0.45em] text-[10px] sm:text-xs uppercase block">
              Gemeinsam Wachsen
            </span>
            <h1 className="text-[#2c4b5e] font-['Playfair_Display'] font-bold tracking-tight"
                style={{ fontSize: 'clamp(48px, 8vw, 84px)', lineHeight: '1' }}>
              EVENTS
            </h1>
            <div className="h-px w-12 bg-[#4d83a4]/30 mx-auto my-8" />
            <p className="text-[#7A7568] text-lg lg:text-xl font-['Montserrat'] font-light leading-relaxed max-w-2xl mx-auto">
              Ein Raum für Austausch, Ruhe und innere Stabilität. 
              Entdecken Sie unsere Treffen und finden Sie Ihren Platz.
            </p>
          </div>
        </motion.header>
      </div>

      {/* --- MAIN CONTENT AREA --- */}
      <div className="max-w-7xl py-24 mx-auto px-6 lg:px-12">
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-24">
          {EVENT_DATA.map((event) => (
            <button
              key={event.id}
              onClick={() => setActiveEventId(event.id)}
              className={`px-8 py-3 rounded-full font-['Montserrat'] text-[10px] tracking-[0.25em] uppercase transition-all duration-500 border ${
                activeEventId === event.id 
                ? 'bg-[#4d83a4] text-white border-[#4d83a4] shadow-md' 
                : 'bg-white/40 text-[#7A7568] hover:bg-white border-stone-200'
              }`}
            >
              {event.shortLocation}: {event.title.split(':')[0]}
            </button>
          ))}
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeEventId}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start"
            >
              {/* Left Column: Fixed (Non-Sticky) Card */}
              <div className="lg:col-span-5">
                <div className="aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl border-[10px] border-white ring-1 ring-black/5">
                  <img 
                    src={activeEvent.imageSrc} 
                    alt={activeEvent.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="mt-8 p-10 bg-white rounded-[2.5rem] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] space-y-5 border border-stone-100">
                  <div className="flex items-start gap-4 text-[#4d83a4]">
                    <Calendar className="w-5 h-5 shrink-0" />
                    <span className="font-['Montserrat'] text-[13px] font-medium leading-relaxed text-stone-600">
                      {activeEvent.date}
                    </span>
                  </div>
                  <div className="flex items-start gap-4 text-[#4d83a4]">
                    <MapPin className="w-5 h-5 shrink-0" />
                    <span className="font-['Montserrat'] text-[13px] font-medium leading-relaxed text-stone-600">
                      {activeEvent.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Details */}
              <div className="lg:col-span-7 py-2">
                <span className="text-[#4d83a4] font-bold tracking-[0.3em] text-[10px] uppercase mb-6 block opacity-70">
                  Programm-Details
                </span>
                <h2 className="text-4xl lg:text-5xl font-['Playfair_Display'] text-[#2c4b5e] mb-10 leading-[1.1] font-semibold">
                  {activeEvent.title}
                </h2>
                
                <div className="prose prose-stone max-w-none">
                  <p className="text-xl text-stone-500 font-['Montserrat'] font-light leading-relaxed mb-12 italic"
                     dangerouslySetInnerHTML={{ __html: activeEvent.fullDescription }} />
                  
                  <div className="space-y-8">
                    {activeEvent.details.map((detail, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * idx }}
                        className="flex gap-6 items-start"
                      >
                        <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#4d83a4]/50 shrink-0" />
                        <p className="text-stone-600 font-['Montserrat'] text-[15px] leading-relaxed font-light" 
                           dangerouslySetInnerHTML={{ __html: detail }} />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Specific CTA */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-16 p-10 bg-[#4d83a4] rounded-[3rem] text-white flex flex-col md:flex-row justify-between items-center gap-8 shadow-2xl shadow-blue-900/15"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-white" />
                    </div>
                    <p className="font-['Montserrat'] text-sm tracking-wide">
                      {activeEvent.contactInfo || "Schreiben Sie mir für Details."}
                    </p>
                  </div>
                  <button 
                    onClick={() => onNavigate?.('contact')}
                    className="px-10 py-4 bg-white text-[#4d83a4] rounded-full font-bold text-[10px] uppercase tracking-widest hover:shadow-lg transition-all active:scale-95 shrink-0"
                  >
                    Jetzt Anfragen
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Global Footer CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-40 pt-24 border-t border-stone-200/50 text-center"
        >
          <div className="max-w-xl mx-auto space-y-8">
            <h3 className="text-3xl font-['Playfair_Display'] text-[#2c4b5e] font-semibold">Fragen zu den Events?</h3>
            <p className="text-stone-500 font-['Montserrat'] font-light leading-loose">
              Gerne stehe ich für individuelle Anfragen oder private Gruppen-Events an anderen Standorten zur Verfügung.
            </p>
            <button 
              onClick={() => onNavigate?.('contact')}
              className="group flex items-center gap-4 mx-auto text-[#4d83a4] font-bold uppercase tracking-[0.25em] text-[10px] border-b border-[#4d83a4]/30 pb-2 hover:border-[#4d83a4] transition-all"
            >
              Kontakt aufnehmen
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}