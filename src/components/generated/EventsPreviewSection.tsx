"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Calendar, MapPin, ChevronRight, ArrowRight } from "lucide-react";

type PageType = 'home' | 'about' | 'events' | 'contact' | 'atem' | 'massage' | 'inspiration';

interface Event {
  id: string;
  title: string;
  date: string;
  shortLocation: string;
  imageSrc: string;
  imageAlt: string;
}

const events: Event[] = [
  {
    id: 'group-sessions',
    title: 'Atem-Abende in der Gruppe',
    date: '26. Jan 2026',
    shortLocation: 'Heerbrugg',
    imageSrc: 'images/Gruppe_Abende.jpg',
    imageAlt: 'Atem-Abende in der Gruppe'
  },
  {
    id: 'retreat-2026',
    title: 'Retreat: Finde Dein Glück',
    date: 'Feb & April 2026',
    shortLocation: 'Frankreich',
    imageSrc: 'images/france.webp',
    imageAlt: 'Retreat Frankreich'
  },
  {
    id: 'seminar-2026',
    title: 'Tagesseminar „Innere Kraft"',
    date: '03. Mai 2026',
    shortLocation: 'Heerbrugg',
    imageSrc: 'images/group_breathwork.webp',
    imageAlt: 'Tagesseminar Innere Kraft'
  }
];

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const VisualEventCard: React.FC<{ event: Event; onClick: () => void; index: number }> = ({ event, onClick, index }) => (
  <motion.article
    variants={FADE_UP}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    onClick={onClick}
    className="group cursor-pointer flex flex-col"
  >
    {/* Image Container with Floating Location */}
    <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-stone-100 mb-8 shadow-sm transition-all duration-500 group-hover:shadow-xl">
      <img 
        src={event.imageSrc} 
        alt={event.imageAlt} 
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
      />
      
      {/* Light Overlay Tag for Location */}
      <div className="absolute top-6 left-6">
        <span className="flex items-center gap-1.5 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] uppercase tracking-[0.15em] font-bold text-[#4d83a4] shadow-sm">
          <MapPin size={12} />
          {event.shortLocation}
        </span>
      </div>
    </div>

    {/* Info Area (Below Image for better readability) */}
    <div className="px-2">
      <div className="flex items-center gap-2 mb-3">
        <Calendar size={14} className="text-[#4d83a4]" />
        <span className="text-[11px] uppercase tracking-widest text-stone-400 font-medium">
          {event.date}
        </span>
      </div>

      <h3 className="text-2xl lg:text-3xl font-['Playfair_Display'] text-[#2c4b5e] mb-4 group-hover:text-[#4d83a4] transition-colors leading-tight font-medium">
        {event.title}
      </h3>

      <div className="flex items-center gap-3 text-[#4d83a4] text-sm font-semibold uppercase tracking-widest pt-2">
        <span className="border-b border-[#4d83a4]/30 pb-1">Anmelden</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
      </div>
    </div>
  </motion.article>
);

export const EventsPreviewSection: React.FC<{ onNavigate: (page: PageType, id?: string) => void }> = ({ onNavigate }) => {
  return (
    <section className="py-24 sm:py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        
        <motion.header 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={FADE_UP}
          className="text-center mb-20 space-y-6"
        >
          <h2 className="text-[#4d83a4] font-['Playfair_Display'] font-bold tracking-tight"
              style={{ fontSize: 'clamp(32px, 5vw, 48px)' }}>
            EVENTS
          </h2>
          <p className="text-[#7A7568] text-lg sm:text-xl font-['Montserrat'] leading-relaxed font-light max-w-2xl mx-auto">
            Kommende Retreats, Atemabende in der Gruppe und Tagesseminare.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
          {events.map((event, index) => (
            <VisualEventCard 
              key={event.id} 
              event={event} 
              index={index} 
              onClick={() => onNavigate('events', event.id)} 
            />
          ))}
        </div>

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={FADE_UP}
          className="mt-24 flex flex-col items-center space-y-12"
        >
          <div className="h-px w-24 bg-stone-200" />
          
          <p className="text-stone-500 text-sm sm:text-base italic font-['Montserrat'] text-center max-w-xl font-light leading-loose">
            "Atem-Events können auf Wunsch auch an anderen Orten stattfinden. 
            Kontaktiere mich gerne für private Gruppenanfragen."
          </p>

          <button 
            onClick={() => onNavigate('events')} 
            className="px-12 py-5 bg-[#4d83a4] text-white rounded-full font-['Montserrat'] font-medium tracking-widest text-sm uppercase shadow-xl shadow-blue-900/10 hover:bg-[#3d6a85] transition-all active:scale-95"
          >
            Alle Events anzeigen
          </button>
        </motion.div>
      </div>
    </section>
  );
};