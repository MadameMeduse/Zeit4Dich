"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Mail } from 'lucide-react';
type PageType = 'home' | 'about' | 'events' | 'contact' | 'atem' | 'massage' | 'inspiration';

// ============================
// 1. DATA SCHEMA (SOURCE OF TRUTH)
// ============================

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  shortLocation: string;
  fullDescription: string;
  details: string[];
  contactInfo?: string;
  imageSrc: string;
  imageAlt: string;
}
const EVENT_DATA: Event[] = [{
  id: 'group-sessions',
  title: 'Atem-Abende in der Gruppe',
  date: '23. Feb, 30. März, 27. Apr, 25. Mai, 29. Juni 2026, jeweils 19:00–21:00 Uhr',
  location: 'Verein Giraffen.Schule, Balgacherstrasse 202, Heerbrugg 9435',
  shortLocation: 'Heerbrugg',
  fullDescription: 'An jedem letzten Montag im Monat treffen wir uns im geschützten Kreis, um gemeinsam zur Ruhe zu kommen, uns auszutauschen und innere Stabilität zu kultivieren.',
  details: ['Wir treffen uns einmal im Monat im GfK Seminarraum des Vereins Giraffen.Schule um im geschützten Kreis anzukommen, uns auszutauschen und gemeinsam zur Ruhe zu kommen.', 'Mit Atemübungen, Entspannungstechniken und Affirmationen stärkst Du deine innere Stabilität und nimmst mehr Ruhe mit in deinen Alltag.', 'In einer vertrauensvollen Atmosphäre findest Du Raum für Dich selbst – zum Ankommen, zum Loslassen und zum bewussten Durchatmen.', 'Die Abende sind für alle offen, die mehr Achtsamkeit in ihren Alltag integrieren möchten. Keine Vorkenntnisse erforderlich.'],
  contactInfo: 'Mehr Infos gerne auf Anfrage per E-Mail.',
  imageSrc: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=85',
  imageAlt: 'Atem-Abende in der Gruppe - Gruppentreffen für bewusstes Atmen'
}, {
  id: 'retreat-2026',
  title: 'Retreat: Finde Dein Glück',
  date: 'Level 1: 14.–17. Feb 2026 | Level 2: 09.–12. April 2026',
  location: 'Château de Marigny, Frankreich (inkl. Unterkunft & Verpflegung)',
  shortLocation: 'Frankreich',
  fullDescription: 'Ein transformatives Retreat im malerischen Château de Marigny. Begleitet von Karl Haag und Tina Christina Tomson tauchst Du ein in eine Reise zur Selbstentdeckung und innerem Glück.',
  details: ['Nimm dir eine bewusste Auszeit. In sechs klaren Schritten auf die Suche nach dem Wesentlichen. Seminarleitung: Karl Haag, Tina Christina Tomson.', 'Level 1: 14.–17. Februar 2026 – Grundlagen der Selbstfindung und bewussten Lebensführung', 'Level 2: 09.–12. April 2026 – Vertiefung und Integration in den Alltag', 'In einem neu renovierten malerischen Schloss in Frankreich inklusive Unterkunft im Château, liebevoll zubereiteten Mahlzeiten und allen Retreat-Inhalten.', 'Mit geführten Atemreisen, Meditationen, kreativen Workshops und Zeit für Selbstreflexion findest Du zurück zu Deiner inneren Mitte.', 'Die Retreats bauen aufeinander auf, können aber auch einzeln besucht werden.'],
  contactInfo: 'Kontaktiere uns für genauere Infos zu Preisen, Anmeldung und dem vollständigen Programm.',
  imageSrc: 'https://images.unsplash.com/photo-1549294413-26f195200c16?w=1200&q=85',
  imageAlt: 'Retreat Finde Dein Glück - Château de Marigny in Frankreich'
}, {
  id: 'seminar-2026',
  title: 'Tagesseminar „Innere Kraft"',
  date: 'Sonntag, 03. Mai 2026, 09:30–17:00 (Pause 12:00–13:30)',
  location: 'Verein Giraffen.Schule, Heerbrugg',
  shortLocation: 'Heerbrugg',
  fullDescription: 'Ein intensiver Tag der Selbstentfaltung und des Neubeginns. Erlebe die transformative Kraft der <span style="font-style: italic;">Rebirthing</span>-Atemreise nach dem UR-ATEM© Prozess.',
  details: ['Erlebe die <span style="font-style: italic;">Rebirthing</span>-Atemreise nach dem UR-ATEM© Prozess. Selbstentfaltung, Neubeginn und frische Energie in achtsamer Atmosphäre.', 'Dieses Seminar lädt dich ein zu Selbstentfaltung, Neubeginn, frischer Energie und bewusstem Auftanken.', 'In einer geschützten, achtsamen Atmosphäre findest Du Raum, dich neu auszurichten, alte Blockaden loszulassen und die eigene innere Kraft zu entfalten.', 'Der UR-ATEM© Prozess verbindet bewusstes Atmen mit körperlicher Entspannung und emotionaler Öffnung.', 'Wir arbeiten in Kleingruppen, sodass jede/r Teilnehmer/in individuell begleitet werden kann.', 'Inkludiert: Alle Seminarunterlagen, Getränke und ein vegetarischer Mittagsimbiss.'],
  contactInfo: 'Anmeldung und weitere Infos per E-Mail. Begrenzte Teilnehmerzahl.',
  imageSrc: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=85',
  imageAlt: 'Tagesseminar Innere Kraft - <span style="font-style: italic;">Rebirthing</span>-Atemreise nach UR-ATEM© Prozess'
}];

// ============================
// 2. REUSABLE EVENT CARD (TOP & BOTTOM NAV)
// ============================

const EventNavigationCard: React.FC<{
  event: Event;
  onClick: () => void;
  index: number;
}> = ({
  event,
  onClick,
  index
}) => {
  const imageId = `img-nav-${event.id}`;
  return <motion.article initial={{
    opacity: 0,
    y: 30
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.6,
    delay: index * 0.1
  }} onClick={onClick} className="relative overflow-hidden rounded-2xl cursor-pointer group shadow-lg hover:shadow-2xl transition-all duration-500" style={{
    aspectRatio: '3/2'
  }}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img id={imageId} src={event.imageSrc} alt={event.imageAlt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Info Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8 text-white">
        <h3 className="text-xl lg:text-2xl font-light leading-tight font-['Playfair_Display'] mb-3">
          {event.title}
        </h3>

        <div className="flex flex-col gap-2 text-white/90 text-sm font-['Montserrat',_sans-serif]">
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
        <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white font-['Montserrat',_sans-serif] font-semibold text-sm border-b-2 border-white pb-1">
            Details anzeigen →
          </span>
        </div>
      </div>
    </motion.article>;
};

// ============================
// 3. ACTIVE EVENT DETAIL SECTION
// ============================

const EventDetail: React.FC<{
  event: Event;
}> = ({
  event
}) => {
  const detailImageId = `img-detail-${event.id}`;
  return <motion.article initial={{
    opacity: 0,
    y: 40
  }} animate={{
    opacity: 1,
    y: 0
  }} exit={{
    opacity: 0,
    y: -40
  }} transition={{
    duration: 0.6,
    ease: 'easeInOut'
  }} className="bg-white rounded-2xl overflow-hidden shadow-2xl" id="event-detail-section">
      {/* Hero Image - 50vh with 400px max-height constraint */}
      <div className="relative w-full h-[30vh] lg:h-[50vh] lg:max-h-[400px] overflow-hidden">
        <img id={detailImageId} src={event.imageSrc} alt={event.imageAlt} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Content Section - Full height, no scroll */}
      <div className="p-8 sm:p-10 lg:p-16 max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8 lg:mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#2c2923] font-light leading-tight font-['Playfair_Display'] mb-6" style={{
          fontSize: 'clamp(28px, 4vw, 48px)',
          lineHeight: '1.3',
          overflowWrap: 'break-word',
          hyphens: 'auto',
          padding: '0 15px'
        }}>
            {event.title}
          </h2>

          {/* Date & Location */}
          <div className="flex flex-col gap-3 lg:gap-4 text-[#6b6560] text-base lg:text-lg">
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 lg:w-6 lg:h-6 flex-shrink-0 mt-1" aria-hidden="true" />
              <span className="font-['Montserrat',_sans-serif] font-medium">{event.date}</span>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 lg:w-6 lg:h-6 flex-shrink-0 mt-1" aria-hidden="true" />
              <span className="font-['Montserrat',_sans-serif] font-medium">{event.location}</span>
            </div>
          </div>
        </div>

        {/* Full Description */}
        <div className="mb-8">
          <p className="text-lg sm:text-xl lg:text-2xl text-[#2c2923] font-light leading-relaxed font-['Playfair_Display']" dangerouslySetInnerHTML={{
          __html: event.fullDescription
        }}>
          </p>
        </div>

        {/* Detailed Content */}
        <div className="space-y-5 lg:space-y-6 text-[#5a5550] text-base lg:text-lg leading-relaxed font-['Montserrat',_sans-serif]">
          {event.details.map((detail, idx) => <motion.p key={idx} initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.5,
          delay: idx * 0.1
        }} dangerouslySetInnerHTML={{
          __html: detail
        }}>
            </motion.p>)}
        </div>

        {/* Contact Info */}
        {event.contactInfo && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.5,
        delay: 0.5
      }} className="mt-10 pt-8 border-t border-gray-200">
            <p className="text-[#6b6560] text-base lg:text-lg font-['Montserrat',_sans-serif] flex items-start gap-3">
              <Mail className="w-5 h-5 lg:w-6 lg:h-6 flex-shrink-0 mt-1" aria-hidden="true" />
              {event.contactInfo}
            </p>
          </motion.div>}
      </div>
    </motion.article>;
};

// ============================
// 4. MAIN EVENTS PAGE COMPONENT
// ============================

interface EventsPageProps {
  onNavigate?: (page: PageType) => void;
  selectedEventId?: string;
}
export default function EventsPage({
  onNavigate,
  selectedEventId
}: EventsPageProps) {
  // State: Default to first event (Atem-Abende) or selected event from Home
  const [activeEventId, setActiveEventId] = useState<string>(selectedEventId || EVENT_DATA[0].id);

  // Update active event when selectedEventId changes (deep-linking from Home)
  useEffect(() => {
    if (selectedEventId) {
      setActiveEventId(selectedEventId);
      // Scroll to detail section after state update
      setTimeout(() => {
        const detailSection = document.getElementById('event-detail-section');
        if (detailSection) {
          detailSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  }, [selectedEventId]);

  // Card click handler - updates state and scrolls to detail section
  const handleCardClick = (eventId: string) => {
    setActiveEventId(eventId);

    // Smooth scroll to detail section
    setTimeout(() => {
      const detailSection = document.getElementById('event-detail-section');
      if (detailSection) {
        detailSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };
  const handleNavigate = (page: PageType) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  // Get active event and other events dynamically
  const activeEvent = EVENT_DATA.find(e => e.id === activeEventId) || EVENT_DATA[0];
  const otherEvents = EVENT_DATA.filter(e => e.id !== activeEventId);
  return <section className="min-h-screen pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 px-6 sm:px-8 lg:px-12 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto">
        
        {/* TOP NAVIGATION: Event Cards */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="mb-16" style={{
        marginTop: "70px",
        marginLeft: "0px"
      }}>
          <h2 className="text-2xl lg:text-3xl text-[#2c2923] font-light leading-tight font-['Playfair_Display'] mb-8">
            Alle Events
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {EVENT_DATA.map((event, index) => <EventNavigationCard key={event.id} event={event} onClick={() => handleCardClick(event.id)} index={index} />)}
          </div>
        </motion.div>

        {/* MIDDLE: Active Event Detail */}
        <AnimatePresence mode="wait">
          <motion.div key={activeEvent.id} initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} transition={{
          duration: 0.5
        }} className="mb-16">
            <EventDetail event={activeEvent} />
          </motion.div>
        </AnimatePresence>

        {/* BOTTOM NAVIGATION: Event Cards (Duplicate for easy navigation) */}
        {otherEvents.length > 0 && <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="mb-16">
            <h2 className="text-2xl lg:text-3xl text-[#2c2923] font-light leading-tight font-['Playfair_Display'] mb-8">
              Weitere Events
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {otherEvents.map((event, index) => <EventNavigationCard key={event.id} event={event} onClick={() => handleCardClick(event.id)} index={index} />)}
            </div>
          </motion.div>}

        {/* Call to Action */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="bg-[#7a8f92] rounded-2xl p-10 lg:p-16 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl text-white font-light leading-tight font-['Playfair_Display'] mb-6">
            Interesse an einem Event?
          </h2>

          <p className="text-white text-lg lg:text-xl leading-relaxed font-['Montserrat',_sans-serif] mb-8 max-w-2xl mx-auto">
            Kontaktiere mich gerne für weitere Informationen, Anmeldungen oder wenn du ein
            individuelles Event organisieren möchtest.
          </p>

          <button onClick={() => handleNavigate('contact')} className="inline-block px-10 py-4 bg-[#4d83a4] text-white rounded-full hover:bg-[#3d6a85] transition-all duration-300 shadow-lg hover:shadow-xl font-['Montserrat',_sans-serif] font-semibold text-lg">
            Jetzt Kontakt aufnehmen
          </button>
        </motion.div>
      </div>
    </section>;
}