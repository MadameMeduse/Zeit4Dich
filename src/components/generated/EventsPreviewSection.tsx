"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ChevronRight, ChevronLeft } from "lucide-react";

// Event data structure with unique image properties
interface Event {
  id: string;
  title: string;
  date: string;
  shortLocation: string;
  imageSrc: string; // Unique image source
  imageAlt: string; // Unique alt text for accessibility
}

// Event data matching EventsPageStandalone with unique image assets
const events: Event[] = [{
  id: 'group-sessions',
  title: 'Atem-Abende in der Gruppe',
  date: 'Montag, 26. Januar 2026, 19:00–21:00 Uhr',
  shortLocation: 'Heerbrugg',
  imageSrc: 'images/Gruppe_Abende.jpg',
  imageAlt: 'Atem-Abende in der Gruppe - Gruppentreffen für bewusstes Atmen'
}, {
  id: 'retreat-2026',
  title: 'Retreat: Finde Dein Glück',
  date: 'Level 1: 14.–17. Feb 2026 | Level 2: 09.–12. April 2026',
  shortLocation: 'Frankreich',
  imageSrc: 'https://images.unsplash.com/photo-1549294413-26f195200c16?w=1200&q=85',
  imageAlt: 'Retreat Finde Dein Glück - Château de Marigny in Frankreich'
}, {
  id: 'seminar-2026',
  title: 'Tagesseminar „Innere Kraft"',
  date: 'Sonntag, 03. Mai 2026, 09:30–17:00',
  shortLocation: 'Heerbrugg',
  imageSrc: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=85',
  imageAlt: 'Tagesseminar Innere Kraft - <span style="font-style: italic;">Rebirthing</span>-Atemreise nach UR-ATEM© Prozess'
}];
interface EventsPreviewSectionProps {
  onNavigate: (page: 'home' | 'about' | 'events' | 'contact' | 'atem' | 'massage' | 'inspiration', eventId?: string) => void;
}

// Visual Event Card with Image Background and Unique Image ID
const VisualEventCard: React.FC<{
  event: Event;
  onClick: () => void;
  index: number;
}> = ({
  event,
  onClick,
  index
}) => {
  // Generate unique image ID based on event ID
  const imageId = `img-preview-${event.id}`;
  return <motion.article initial={{
    opacity: 0,
    y: 30
  }} whileInView={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.6,
    delay: index * 0.15
  }} viewport={{
    once: true
  }} onClick={onClick} className="relative overflow-hidden rounded-2xl cursor-pointer group shadow-lg hover:shadow-2xl transition-all duration-500" style={{
    aspectRatio: '2/2'
  }}>
      {/* Background Image with Unique ID */}
      <div className="absolute inset-0">
        <img id={imageId} src={event.imageSrc} alt={event.imageAlt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Info Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center p-8 text-white">
        <motion.h3 className="text-2xl lg:text-3xl font-light leading-tight font-['Playfair_Display'] mb-4" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.3
      }}>
          {event.title}
        </motion.h3>

        <div className="flex flex-col gap-2 text-white/90 text-sm lg:text-base font-['Montserrat',_sans-serif]">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
            <span>{event.date}</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
            <span>{event.shortLocation}</span>
          </div>
        </div>

        {/* Hover Indicator */}
        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white font-['Montserrat',_sans-serif] font-semibold text-sm border-b-2 border-white pb-1">
            Details anzeigen →
          </span>
        </div>
      </div>
    </motion.article>;
};
export const EventsPreviewSection: React.FC<EventsPreviewSectionProps> = ({
  onNavigate
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const desktopCardsToShow = 3;
  const maxDesktopIndex = Math.max(0, events.length - desktopCardsToShow);
  const handlePrevious = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };
  const handleNext = () => {
    setCurrentIndex(prev => Math.min(maxDesktopIndex, prev + 1));
  };
  const handleCardClick = (eventId: string) => {
    // Navigate to events page with selected event (deep-linking)
    onNavigate('events', eventId);
  };
  return <section className="py-20 sm:py-28 lg:py-36 px-6 sm:px-8 lg:px-12 bg-[#faf9f7]" style={{
    height: "fit-content",
    minHeight: "fit-content"
  }}>
      <div className="max-w-[80rem] mx-auto flex flex-col space-y-12 sm:space-y-16 lg:space-y-20" style={{
      height: "fit-content",
      minHeight: "fit-content"
    }}>
        
        {/* Header Section */}
        <motion.header initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        ease: "easeOut"
      }} viewport={{
        once: true
      }} className="flex flex-col space-y-6 sm:space-y-8 max-w-3xl">
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] tracking-tight font-light font-['Playfair_Display'] text-[#89857e]" style={{
          fontWeight: "700",
          fontSize: 'clamp(32px, 4.5vw, 50px)',
          lineHeight: '1.3',
          overflowWrap: 'break-word',
          paddingLeft: "15px",
          paddingRight: "15px"
        }}>
            EVENTS
          </h2>
          
          <p className="text-[#5a5550] text-[clamp(1.0625rem,1.5vw,1.25rem)] leading-relaxed font-['Montserrat',_sans-serif]" style={{
          marginTop: "0px",
          paddingTop: "20px"
        }}>
            Hier findest du kommende Retreats, Atemabende in der Gruppe, Tagesseminare und Atemreisen im Warmen Wasser.
          </p>
        </motion.header>

        {/* Event Cards Gallery - Using Map Function */}
        <div className="relative">
          {/* Desktop: 3 cards with navigation */}
          <div className="hidden lg:block relative">
            {/* Navigation Arrows */}
            <button onClick={handlePrevious} disabled={currentIndex === 0} className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 bg-white hover:bg-gray-50 text-[#2c2923] rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 ${currentIndex === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} aria-label="Previous events">
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button onClick={handleNext} disabled={currentIndex >= maxDesktopIndex} className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 bg-white hover:bg-gray-50 text-[#2c2923] rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 ${currentIndex >= maxDesktopIndex ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} aria-label="Next events">
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Cards Container */}
            <div className="overflow-hidden">
              <div className="grid grid-cols-3 gap-8 lg:gap-10 transition-transform duration-500 ease-out" style={{
              transform: `translateX(-${currentIndex * (100 / desktopCardsToShow)}%)`
            }}>
                {events.map((event, index) => <VisualEventCard key={event.id} event={event} index={index} onClick={() => handleCardClick(event.id)} />)}
              </div>
            </div>
          </div>

          {/* Mobile: Vertical Stack - Using Map Function */}
          <div className="lg:hidden grid grid-cols-1 gap-6">
            {events.map((event, index) => <VisualEventCard key={event.id} event={event} index={index} onClick={() => handleCardClick(event.id)} />)}
          </div>
        </div>

        {/* Subtle Invitation Note */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }} viewport={{
        once: true
      }} className="max-w-2xl mx-auto text-center">
          <p className="text-[#6b6560] text-[0.9375rem] sm:text-[1.0625rem] leading-relaxed font-['Montserrat',_sans-serif] italic">
            Atem-Events können auf Wunsch auch an anderen Orten stattfinden. Sende mir einfach eine Einladung zu deiner Gruppe oder zu dir selbst per E-Mail.
          </p>
        </motion.div>

        {/* Call to Action Button */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.3
      }} viewport={{
        once: true
      }} className="flex justify-center pt-4">
          <button onClick={() => onNavigate('events')} className="group inline-flex items-center gap-3 px-8 sm:px-10 py-3 sm:py-4 bg-[#4d83a4] text-white rounded-full hover:bg-[#3d6a85] transition-all duration-300 shadow-md hover:shadow-lg font-['Montserrat',_sans-serif] font-semibold text-base lg:text-lg tracking-wide" aria-label="Alle Events anzeigen">
            Alle Events anzeigen
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </button>
        </motion.div>
      </div>
    </section>;
};