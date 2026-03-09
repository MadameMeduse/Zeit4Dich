"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Calendar, MapPin, ChevronRight } from "lucide-react";

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
    date: 'Mo, 26. Jan 2026, 19:00–21:00',
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
    date: 'So, 03. Mai 2026, 09:30–17:00',
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
    className="group relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer shadow-xl border-4 border-white"
  >
    {/* Background Image - Scale restricted to desktop hover */}
    <img 
      src={event.imageSrc} 
      alt={event.imageAlt} 
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 lg:group-hover:scale-110" 
    />
    
    {/* Dark Gradient Overlay - Deeper on mobile for text visibility */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 lg:via-black/20 to-transparent pt-32" />

    {/* Info Overlay */}
    <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 text-white">
      <h3 className="text-2xl lg:text-3xl font-light font-['Playfair_Display'] mb-4 leading-tight">
        {event.title}
      </h3>

      <div className="space-y-2 text-sm sm:text-base font-['Montserrat'] opacity-90">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-[#4d83a4]" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-[#4d83a4]" />
          <span>{event.shortLocation}</span>
        </div>
      </div>

      {/* CTA Button Fix: 
          Always visible on mobile/tablet, hidden-until-hover on desktop 
      */}
      <div className="mt-6 flex items-center gap-2 text-sm font-semibold font-['Montserrat'] border-t border-white/20 pt-4 
                      opacity-100 translate-y-0 
                      lg:opacity-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-300
                      text-[#4d83a4] lg:text-white">
        Details ansehen <ChevronRight size={16} />
      </div>
    </div>
  </motion.article>
);

export const EventsPreviewSection: React.FC<{ onNavigate: (page: PageType, id?: string) => void }> = ({ onNavigate }) => {
  return (
    <section className="py-20 sm:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 bg-[#c9c4ba] border-y-4 border-[#faf8f6]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        <motion.header 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={FADE_UP}
          className="text-center space-y-6 max-w-3xl mx-auto"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-['Playfair_Display'] text-white tracking-tight">
            EVENTS
          </h2>
          <p className="text-white text-lg sm:text-xl font-['Montserrat'] leading-relaxed font-normal">
            Kommende Retreats, Atemabende in der Gruppe und Tagesseminare.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
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
          className="flex flex-col items-center space-y-10"
        >
          <p className="text-white text-base sm:text-lg italic font-['Montserrat'] text-center max-w-2xl opacity-90">
            "Atem-Events können auf Wunsch auch an anderen Orten stattfinden. Kontaktiere mich gerne für private Gruppenanfragen."
          </p>

          <button 
            onClick={() => onNavigate('events')} 
            className="group flex items-center gap-3 px-10 py-4 bg-[#4d83a4] text-white rounded-full hover:bg-[#3d6a85] transition-all duration-300 shadow-lg font-['Montserrat'] font-semibold text-lg active:scale-95"
          >
            Alle Events anzeigen
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};