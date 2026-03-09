"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Wind, Waves, Sparkles, MessageCircle, Calendar, Download, AlertCircle, ChevronDown, ChevronUp, Sprout, Flower2, Sun } from 'lucide-react';
type PageType = 'home' | 'about' | 'events' | 'contact' | 'atem' | 'massage' | 'inspiration';
interface AtemPageProps {
  onNavigate?: (page: PageType) => void;
}

/**
 * AtemPage - UR-ATEM© Methode Service Page
 * Advanced redesign with:
 * - Uniform height alignment with 5-line clamp default
 * - Independent "Read More" functionality per section
 * - Smooth height transitions with gradient fade overlay
 * - Mobile carousel with dynamic height handling
 * - Unique IDs for each service image
 */
export default function AtemPage({
  onNavigate
}: AtemPageProps) {
  // Individual state for each expandable text section
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isRebirthingExpanded, setIsRebirthingExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const handleNavigate = (page: PageType) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  // Service data in new order
  const services = [{
    id: 'ur-atem-detail',
    title: 'Eine geführte Atemsession nach der UR-ATEM@ Methode',
    price: '180–225 CHF',
    duration: 'Variabel',
    subtitle: 'Tiefgehend und transformierend – ca 2 Stunden, im Liegen, mit Fokus auf Erleben',
    image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=1200&h=600&fit=crop',
    imageAlt: 'Person lying down comfortably in serene setting',
    ctaText: 'Deinen UR-ATEM© Prozess Starten',
    isFeatured: true,
    description: ['Der UR-ATEM© Prozess inklusive die wundersame <span style="font-style: italic;">Rebirthing</span>-Atemreise findet unter meiner Führung und Begleitung in einem pri­vaten, geschützten Rahmen statt. Es ist eine intensive, erholsame und transformierende Erfahrung, die Dich Blockaden loslassen, innere Ruhe finden und neue Lebendigkeit spüren lässt.', 'Während der Atemreise nutzen wir die <span style="font-style: italic;">Rebirthing</span>-Atemtechnik, um wieder voll und frei atmen zu können. Es beginnt mit einem ausführlichen Erstgespräch (ca. 45 Minuten). Die geführte Atemreise selbst dauert 1–1,5 Stunden, wobei die Zeit oft wie im Flug vergeht.', 'Das fördert Entspannung und kann lange unterdrückte, schmerzhafte Erfahrungen und Blockaden wie Wut, Angst, Trauer oder körperliche Verkrampfungen lösen. Die dabei freiwerdende Energie unterstützt dich darin, dich selbst wieder deutlicher zu spüren und dich innerlich stabiler, lebendiger und verbundener zu fühlen.', 'Anschließend findet ein Folgegespräch statt (ca. 30 Minuten), um alles sanft zu integrieren und wirken zu lassen.', 'Für kleine Stärkung stehen Wasser, Tee sowie Nüsse und getrocknete Früchte bereit. Auch ausreichend Kuscheldecken und Kissen sorgen dafür, dass Du es während der Session bequem und gemütlich hast.', 'Innerhalb von drei Tagen nach der Atemreise bekommst Du von mir Feedback und kleine Aufgaben per E-Mail. Auf Wunsch erstelle ich zusätzlich eine persönliche Meditation, die dich dabei unterstützt, die Affirmationen zu verankern, den Prozess zu vertiefen und dran zu bleiben.', 'Eine Serie von etwa sieben Einzelsitzungen ist empfehlenswert, um die bestmögliche Wirkung zu erzielen und danach den Atemprozess selbstständig durchführen zu können. Anschließend besteht auf Wunsch die Möglichkeit, an Atemreise im Warmen Wasser teilzunehmen.'],
    hasDocuments: true
  }, {
    id: 'atemcoaching-detail',
    title: 'Atemcoaching',
    price: '126 CHF',
    duration: '90 Min.',
    subtitle: 'ca. 90 Minuten, im Sitzen, mit Fokus auf Beratung',
    image: 'images/atem_sitting.jpg',
    imageAlt: 'Adult practicing breathing exercises peacefully',
    ctaText: 'Atemcoaching Buchen',
    isFeatured: false,
    description: ['Als Einstieg kannst Du bei mir ein Atemcoaching, also eine Atemarbeit-Einzelsession buchen, mit viel Raum für Austausch, tiefe Erkenntnisse und gezielte Atemübungen für Dich zum mitnehmen und praktizieren.'],
    benefits: ['Du kommst wieder in Ruhe, Verbindung, Selbstbestimmung und Kraft', 'Spannungen lösen sich', 'Du bist deinen Gefühlen nicht mehr ausgeliefert', 'Du findest deine innere Stabilität, auch wenn alles im Außen chaotisch wirkt', 'Du lässt Ängste hinter dir, die dich begrenzen', 'Du erlebst natürliche Lebensfreude']
  }, {
    id: 'warmwasser-detail',
    title: 'Atemreise im Warmen Wasser',
    price: 'Auf Anfrage',
    duration: 'Variabel',
    subtitle: 'Fortgeschrittene, im 35-36°C warmen Pool',
    image: 'images/waterbreatch.webp',
    imageAlt: 'Person floating peacefully in warm water',
    ctaText: 'Jetzt Anfragen',
    isFeatured: false,
    description: ['Wasser ist ein besonderes Element – unsere erste bekannte Umgebung, als wir im Mutterleib unseren kleinen Körper formten. Die Atemreise im Warmen Wasser ist eine bewährte, besonders kraftvolle und transformierende Methode, die ich heute mit großer Achtsamkeit und Freude anbiete. Sie verwendet <span style="font-style: italic;">Rebirthing</span>-Atemtechnik und kann dabei helfen, alte Muster auf tiefster Ebene zu erkennen, loszulassen und liebevoll neu zu gestalten.', 'Für Gruppen wird die Atemreise im Warmen Wasser in einem auf 35–36 °C aufgewärmten Pool durchgeführt. Zu Hause ist sie auch in der Badewanne möglich, wobei der Reisende in Badekleidung oder mit T-Shirt im Wasser liegt. Ich als Leiter bleibe außerhalb, assistiere und halte auf Wunsch sanft Deinen Kopf.', 'Es wird dringend empfohlen, bereits einige Atemreisen an Land erlebt zu haben, bevor man eine im Warmen Wasser macht.']
  }, {
    id: 'kids-detail',
    title: 'Atemcoaching für Kinder und Jugendliche',
    price: '90 CHF',
    duration: '60 Min.',
    subtitle: 'ca. 1 Stunde, im Sitzen, mit Fokus auf Beratung',
    image: 'images/atemkinder.webp',
    imageAlt: 'Child and adult practicing breathing exercises together',
    ctaText: 'Für Dein Kind Anmelden',
    isFeatured: false,
    description: ['Hat dein Kind häufig Kopf-, Schulter- oder Rückenschmerzen, wirkt verspannt oder zeigt Stress-Symptome wie emotionale Überempfindlichkeit, Konzentrationsschwierigkeiten, Angstzustände, Zähneknirschen oder Probleme beim Einschlafen?', 'Mit meinem Hintergrund aus vier Jahren Pädagogik-Studium und langjähriger Erfahrung in der Atemarbeit – auch als Mutter von zwei Kindern – begleite ich dein Kind einfühlsam und klar.', 'In Atemcoaching entwickeln wir gemeinsam einfache, wirksame Werkzeuge für den Alltag: kurze Time-Outs, kleine Entspannungsrituale und Konzentrationstricks, die sofort anwendbar sind. So entsteht eine stabile Fähigkeit zur Selbstregulation – eine innere Stärke, die dein Kind ein Leben lang begleitet.']
  }];

  // Advanced scroll to section - targets middle of image with title overlay visible
  // On mobile, also triggers carousel slide navigation
  const scrollToSection = (sectionId: string) => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      // Find the service index
      const serviceIndex = services.findIndex(s => s.id === sectionId);
      if (serviceIndex !== -1) {
        // First, scroll to carousel container
        const carouselContainer = document.getElementById('mobile-carousel-section');
        if (carouselContainer) {
          carouselContainer.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }

        // Then navigate to the correct slide
        setTimeout(() => {
          scrollToSlide(serviceIndex);
        }, 500);
      }
    } else {
      // Desktop behavior
      const element = document.getElementById(sectionId);
      if (element) {
        const imageElement = element.querySelector('.service-image') as HTMLElement;
        if (imageElement) {
          const imageHeight = imageElement.offsetHeight;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          // Scroll to middle of image so title overlay is visible at top of viewport
          const targetPosition = elementPosition + imageHeight / 2 - window.innerHeight / 2;
          window.scrollTo({
            top: Math.max(0, targetPosition),
            behavior: 'smooth'
          });
        }
      }
    }
  };

  // Toggle individual text expansion
  const toggleText = (textId: string) => {
    setExpandedId(prev => prev === textId ? null : textId);
  };

  // Mobile slider navigation
  const scrollToSlide = (index: number) => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.offsetWidth;
      sliderRef.current.scrollTo({
        left: slideWidth * index,
        behavior: 'smooth'
      });
      setActiveSlide(index);
    }
  };

  // Track scroll position to update active slide indicator
  useEffect(() => {
    const handleScroll = () => {
      if (sliderRef.current) {
        const slideWidth = sliderRef.current.offsetWidth;
        const scrollLeft = sliderRef.current.scrollLeft;
        const newIndex = Math.round(scrollLeft / slideWidth);
        setActiveSlide(newIndex);
      }
    };
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', handleScroll);
      return () => slider.removeEventListener('scroll', handleScroll);
    }
  }, []);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Animation variants - optimized for mobile
  const fadeInUp = {
    initial: {
      opacity: 0,
      y: isMobile ? 10 : 30
    },
    whileInView: {
      opacity: 1,
      y: 0
    },
    viewport: {
      once: true
    },
    transition: {
      duration: isMobile ? 0.2 : 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  };

  // Component to render expandable text with line-clamp, gradient fade, and smooth transitions
  const ExpandableText = ({
    text,
    textId
  }: {
    text: string;
    textId: string;
  }) => {
    const isExpanded = expandedId === textId;
    const words = text.replace(/<[^>]*>/g, '').split(' ');
    const isLong = words.length > 60; // Approximately 5 lines

    return <motion.div className="relative" initial={false} animate={{
      height: isExpanded ? 'auto' : undefined
    }} transition={{
      duration: isMobile ? 0.2 : 0.4,
      ease: [0.22, 1, 0.36, 1]
    }}>
        <div className="relative">
          <motion.p className={!isExpanded && isLong ? 'line-clamp-5' : ''} initial={false} animate={{
          opacity: 1
        }} transition={{
          duration: isMobile ? 0.15 : 0.3
        }} dangerouslySetInnerHTML={{
          __html: text
        }} />
          
          {/* Gradient fade overlay when collapsed */}
          {isLong && !isExpanded && <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />}
        </div>
        
        {isLong && <motion.button onClick={() => toggleText(textId)} className="mt-3 text-[#4d83a4] underline font-semibold flex items-center gap-1 transition-colors hover:text-[#3d6a85]" whileHover={{
        scale: 1.02
      }} whileTap={{
        scale: 0.98
      }}>
            {isExpanded ? <>
                Weniger anzeigen <ChevronUp className="w-4 h-4" />
              </> : <>
                Weiterlesen <ChevronDown className="w-4 h-4" />
              </>}
          </motion.button>}
      </motion.div>;
  };
  return <div className="min-h-screen bg-gradient-to-b from-[#F5F3EF] to-[#EAE7E0]">
      
      {/* Hero Section with Top Padding for Navbar */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-32 sm:pt-36 lg:pt-40 pb-16 px-4 sm:px-6 lg:px-8">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div id="img-hero-atem" className="w-full h-full" style={{
          backgroundImage: 'url(https://storage.googleapis.com/storage.magicpath.ai/user/351284685155995648/assets/c164b302-4436-4921-8f23-f6673ae27fcb.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: '50% 50%',
          filter: 'sepia(0.15) saturate(0.8)',
          opacity: 0.8
        }} />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F5F3EF]/70 via-[#F5F3EF]/50 to-[#EAE7E0]/90"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          <motion.div initial={{
          opacity: 0,
          y: isMobile ? 15 : 40
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: isMobile ? 0.25 : 1,
          ease: [0.22, 1, 0.36, 1]
        }}>
            <h1 className="font-['Playfair_Display'] text-5xl sm:text-6xl lg:text-7xl font-light text-[#4A4440] leading-tight mb-6" style={{
            fontSize: 'clamp(30px, 5vw, 72px)',
            lineHeight: '1.3',
            overflowWrap: 'break-word',
            hyphens: 'auto',
            padding: '0 15px'
          }}>
              Blockaden lösen. Energie entfalten. Du sein.<br />
              Nach der UR-ATEM© Methode
            </h1>
            
            <div className="w-24 h-px bg-[#4d83a4]/30 mx-auto mb-8"></div>
            
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl font-light text-[#4A4440] italic mb-8" style={{
            fontSize: 'clamp(26px, 3.5vw, 48px)',
            lineHeight: '1.35',
            overflowWrap: 'break-word',
            hyphens: 'auto',
            padding: '0 15px'
          }}>
              Zurück zum Ursprung - Zurück zu Dir
            </h2>
            
            <p className="font-['Montserrat'] text-lg sm:text-xl text-[#4A4440] max-w-3xl mx-auto leading-relaxed mb-12">
              Ich freue mich sehr, dass du hierher gefunden hast. Die UR-ATEM© Methode ist ein von mir entwickelter Prozess, 
              der tiefgreifende Atemarbeit mit sanfter Körperarbeit kombiniert.
            </p>

            {/* Primary CTA - Hidden on mobile (will be replaced by sticky button) */}
            <motion.button onClick={() => handleNavigate('contact')} whileHover={{
            scale: isMobile ? 1 : 1.05
          }} whileTap={{
            scale: 0.95
          }} className="hidden md:inline-flex items-center gap-3 px-10 py-4 bg-[#4d83a4] text-white rounded-full hover:bg-[#3d6a85] transition-all duration-300 shadow-lg hover:shadow-xl font-['Montserrat'] text-lg font-semibold">
              <Calendar className="w-5 h-5" />
              Termin vereinbaren
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Pricing Table - "Mein Angebot" */}
      <section id="mein-angebot" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F5F3EF] to-white">
        <div className="max-w-7xl mx-auto">
          <motion.h3 {...fadeInUp} className="font-['Playfair_Display'] text-3xl sm:text-4xl text-[#4A4440] font-light mb-6 text-center">
            Mein Angebot
          </motion.h3>
          
          <motion.p {...fadeInUp} className="text-center text-[#6B6560] font-['Montserrat'] text-lg mb-12 max-w-2xl mx-auto italic">
            "Entscheide ehrlich für dich – was ist dir diese Zeit mit dir selbst wert?"
          </motion.p>

          {/* Pricing Cards with "Mehr erfahren" buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Card: UR-ATEM© - Featured */}
            <motion.div initial={{
            opacity: 0,
            y: isMobile ? 10 : 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: isMobile ? 0.2 : 0.6
          }} className="relative bg-white rounded-2xl p-8 shadow-xl border-2 border-[#4d83a4] hover:shadow-2xl transition-all duration-300 flex flex-col">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#4d83a4] text-white px-4 py-1 rounded-full text-sm font-semibold font-['Montserrat'] shadow-lg">
                Beliebt
              </div>
              
              <h4 className="font-['Playfair_Display'] text-2xl font-medium text-[#4A4440] mb-3 text-center mt-2">Geführte Atemreise</h4>
              <p className="text-sm text-[#6B6560] font-['Montserrat'] mb-4 text-center">Blockaden lösen. Energie entfalten. Du sein.</p>
              <div className="text-center mb-4">
                <p className="text-3xl font-light text-[#4d83a4] font-['Playfair_Display']">180–225 CHF</p>
                <p className="text-sm text-[#6B6560] font-['Montserrat']">Variabel</p>
              </div>
              <p className="text-sm text-[#6B6560] font-['Montserrat'] text-center leading-relaxed mb-6 flex-grow">Tiefe & Transformation nach der UR-ATEM© Methode (im Liegen)</p>
              <button onClick={() => scrollToSection('ur-atem-detail')} className="w-full px-6 py-2.5 bg-[#4d83a4] text-white rounded-full hover:bg-[#3d6a85] transition-all duration-300 font-['Montserrat'] font-semibold text-sm shadow-md mt-auto">
                Mehr erfahren
              </button>
            </motion.div>

            {/* Card: Atemcoaching */}
            <motion.div initial={{
            opacity: 0,
            y: isMobile ? 10 : 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: isMobile ? 0.2 : 0.6,
            delay: isMobile ? 0 : 0.1
          }} className="bg-white rounded-2xl p-8 shadow-lg border border-[#4d83a4]/20 hover:shadow-xl transition-all duration-300 flex flex-col">
              <h4 className="font-['Playfair_Display'] text-2xl font-medium text-[#4A4440] mb-3 text-center">Atemcoaching, Erwachsene</h4>
              <p className="text-sm text-[#6B6560] font-['Montserrat'] mb-4 text-center">Atme frei. Lebe klar. Tipps & Tricks für den Alltag.</p>
              <div className="text-center mb-4">
                <p className="text-3xl font-light text-[#4d83a4] font-['Playfair_Display']">126 CHF</p>
                <p className="text-sm text-[#6B6560] font-['Montserrat']">90 Min.</p>
              </div>
              <p className="text-sm text-[#6B6560] font-['Montserrat'] text-center leading-relaxed mb-6 flex-grow">
                Fokus auf Beratung & Übungen (im Sitzen)
              </p>
              <button onClick={() => scrollToSection('atemcoaching-detail')} className="w-full px-6 py-2.5 border-2 border-[#4d83a4] text-[#4d83a4] rounded-full hover:bg-[#4d83a4] hover:text-white transition-all duration-300 font-['Montserrat'] font-semibold text-sm mt-auto">
                Mehr erfahren
              </button>
            </motion.div>

            {/* Card: Warmwasser-Reise */}
            <motion.div initial={{
            opacity: 0,
            y: isMobile ? 10 : 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: isMobile ? 0.2 : 0.6,
            delay: isMobile ? 0 : 0.2
          }} className="bg-white rounded-2xl p-8 shadow-lg border border-[#4d83a4]/20 hover:shadow-xl transition-all duration-300 flex flex-col">
              <h4 className="font-['Playfair_Display'] text-2xl font-medium text-[#4A4440] mb-3 text-center">Warmwasser-Atemreise</h4>
              <p className="text-sm text-[#6B6560] font-['Montserrat'] mb-4 text-center">Fortgeschrittene</p>
              <div className="text-center mb-4">
                <p className="text-3xl font-light text-[#4d83a4] font-['Playfair_Display']">Auf Anfrage</p>
                <p className="text-sm text-[#6B6560] font-['Montserrat']">Variabel</p>
              </div>
              <p className="text-sm text-[#6B6560] font-['Montserrat'] text-center leading-relaxed mb-6 flex-grow">Besonders kraftvoll; im 35-36°C warmen Pool oder Badewanne<br /></p>
              <button onClick={() => scrollToSection('warmwasser-detail')} className="w-full px-6 py-2.5 border-2 border-[#4d83a4] text-[#4d83a4] rounded-full hover:bg-[#4d83a4] hover:text-white transition-all duration-300 font-['Montserrat'] font-semibold text-sm mt-auto">
                Mehr erfahren
              </button>
            </motion.div>

            {/* Card: Coaching für Kids */}
            <motion.div initial={{
            opacity: 0,
            y: isMobile ? 10 : 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: isMobile ? 0.2 : 0.6,
            delay: isMobile ? 0 : 0.3
          }} className="bg-white rounded-2xl p-8 shadow-lg border border-[#4d83a4]/20 hover:shadow-xl transition-all duration-300 flex flex-col">
              <h4 className="font-['Playfair_Display'] text-2xl font-medium text-[#4A4440] mb-3 text-center">Coaching <br />für Kids</h4>
              <p className="text-sm text-[#6B6560] font-['Montserrat'] mb-4 text-center">Kinder/Jugendliche<br /></p>
              <div className="text-center mb-4">
                <p className="text-3xl font-light text-[#4d83a4] font-['Playfair_Display']">90 CHF</p>
                <p className="text-sm text-[#6B6560] font-['Montserrat']">60 Min.</p>
              </div>
              <p className="text-sm text-[#6B6560] font-['Montserrat'] text-center leading-relaxed mb-6 flex-grow">
                Hilfe bei Stress, Ängsten & Konzentration
              </p>
              <button onClick={() => scrollToSection('kids-detail')} className="w-full px-6 py-2.5 border-2 border-[#4d83a4] text-[#4d83a4] rounded-full hover:bg-[#4d83a4] hover:text-white transition-all duration-300 font-['Montserrat'] font-semibold text-sm mt-auto">
                Mehr erfahren
              </button>
            </motion.div>
          </div>

          {/* Recommendation Footer */}
          <motion.div {...fadeInUp} className="bg-[#4d83a4]/5 rounded-2xl p-6 text-center border border-[#4d83a4]/20">
            <p className="text-[#6B6560] font-['Montserrat'] text-base">
              <span className="font-semibold">Empfehlung:</span> Für eine nachhaltige Transformation empfehle ich eine Serie von etwa{' '}
              <span className="font-semibold text-[#4d83a4]">sieben Einzelsitzungen</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction & What is UR-ATEM© */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-white">
        <motion.div {...fadeInUp} className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-white to-[#F5F3EF] rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl border border-[#4d83a4]/20">
            <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl text-[#4A4440] font-light mb-8 text-center" style={{
            fontSize: 'clamp(28px, 4vw, 48px)',
            lineHeight: '1.3',
            overflowWrap: 'break-word',
            hyphens: 'auto',
            padding: '0 15px'
          }}>
              Was ist die UR-ATEM© Methode?
            </h2>
            
            <div className="space-y-6 text-[#6B6560] text-lg leading-relaxed font-['Montserrat']">
              <p className="text-xl font-medium text-center text-[#4A4440] italic">
                Der Atem ist wie ein Schlüssel, den wir immer bei uns tragen. 
                Wenn wir lernen, ihn bewusst einzusetzen, öffnen sich Türen zu innerer Ruhe und Selbstbestimmung.
              </p>
              
              <p style={{
              textAlign: "center"
            }}>Diese von mir entwickelte, ganzheitliche Methode basiert auf bewusst geführten körperlich-energetischen Atemreisen in Verbindung mit Alpha-Level-Visualmeditationen. In diesem Prozess reguliert sich dein Nervensystem, Blockaden beginnen zu lösen, und alte Glaubens- und Verhaltensmuster können sanft neu ausgerichtet werden. Du spürst sofort mehr Klarheit, Lebensenergie und eine kraftvolle Verbindung zu deinem wahren Selbst.  </p>      <p className="text-xl font-medium text-center text-[#4A4440] italic">Dein Atem. Deine Energie. Dein Leben
          </p>
            </div>

            {/* Methodology Section */}
            <div className="mt-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
                {[{
                icon: Wind,
                label: 'Gezielte Atemübungen'
              }, {
                icon: Waves,
                label: <><span style={{
                    fontStyle: 'italic'
                  }}>Rebirthing</span>-Techniken</>
              }, {
                icon: Heart,
                label: 'Körperarbeit'
              }, {
                icon: Sparkles,
                label: 'Alpha-Level-Visualmeditationen'
              }].map((item, index) => <motion.div key={index} initial={{
                opacity: 0,
                y: isMobile ? 10 : 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: isMobile ? 0.2 : 0.6,
                delay: isMobile ? 0 : index * 0.1
              }} className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 mb-4 bg-gradient-to-br from-[#4d83a4]/10 to-[#4d83a4]/20 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110">
                      <item.icon className="w-8 h-8 text-[#4d83a4]" />
                    </div>
                    <h4 className="font-['Playfair_Display'] text-lg font-medium text-[#4A4440]" style={{
                  fontStyle: "normal"
                }}>
                      {item.label}
                    </h4>
                  </motion.div>)}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* What is Rebirthing - Expanded Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-gradient-to-b from-[#F5F3EF] to-white">
        <motion.div {...fadeInUp} className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl border border-[#4d83a4]/20">
            <h3 className="font-['Playfair_Display'] text-3xl sm:text-4xl text-[#4A4440] font-light mb-4 text-center" style={{
            fontStyle: "normal"
          }}>
              Was ist <span style={{
              fontStyle: 'italic'
            }}>Rebirthing</span>?
            </h3>
            
            <div className="relative text-center mb-12 max-w-3xl mx-auto">
              <div className="relative">
                <div className="relative">
                  <p className={`text-[#6B6560] font-['Montserrat'] text-lg leading-relaxed ${!isRebirthingExpanded ? 'line-clamp-5' : ''}`}><span style={{
                    fontStyle: 'italic'
                  }}>Rebirthing</span> wird heutzutage auch oft als „Integratives Atmen" oder „Integrative Atemtherapie" bezeichnet. Durch diese spezielle Atemweise gelangt man in einen Zustand von erweitertem Bewusstsein, in welchem es einem Informationen zugänglich werden, welche im Alltagsbewusstein unzugänglich sind.<br /><br />Diese Informationen können auf negative Thematiken und Gedanken aus der Vergangenheit hinweisen, welche integriert werden wollen und können.<br /><br />«<span style={{
                    fontStyle: 'italic'
                  }}>Rebirthing</span> ist eine kraftvolle Technik, die deine persönliche Weiterentwicklung unterstützt und dir hilft, negative Erfahrungen zu erlösen, die du während der Geburt, in der Kindheit, in der Schule, durch Religion oder andere prägende Situationen erlebt hast und weiterhin mit dir trägst. <br /><br />Diese alten, oft unbewussten Traumata können körperliche Schmerzen, emotionale Blockaden oder Schwierigkeiten im privaten und beruflichen Bereich verursachen.<br /><br />Ein wichtiger Bestandteil dieses Prozesses ist die Arbeit mit Glaubenssätzen, denn unsere Gedanken beeinflussen direkt unsere Lebensqualität. Als Erwachsene tragen wir Verantwortung für unser eigenes Glück und Wohlbefinden.<br /><br /><span style={{
                    fontStyle: 'italic'
                  }}>Rebirthing</span> unterstützt dich Schritt für Schritt dabei, dein Leben gesund, liebevoll und großzügig zu gestalten und erinnert dich immer mehr an dein inneres, echtes Potential.»<br /><br />*Übersetzt aus dem Englischen „<span style={{
                    fontStyle: 'italic'
                  }}>Rebirthing</span> in the New Age" von Leonard Orr und Sondra Ray; 2007, Trafford Publishing. ISBN: ‎978-1425114169.</p>
                  
                  {/* Gradient fade overlay when collapsed */}
                  {!isRebirthingExpanded && <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />}
                </div>
                
                <motion.button onClick={() => setIsRebirthingExpanded(!isRebirthingExpanded)} className="mt-3 text-[#4d83a4] underline font-semibold flex items-center gap-1 transition-colors hover:text-[#3d6a85] mx-auto" whileHover={{
                scale: 1.02
              }} whileTap={{
                scale: 0.98
              }}>
                  {isRebirthingExpanded ? <>
                      Weniger lesen <ChevronUp className="w-4 h-4" />
                    </> : <>
                      Mehr lesen <ChevronDown className="w-4 h-4" />
                    </>}
                </motion.button>
              </div>
            </div>

            {/* The Path to Potential - Visual Journey */}
            <div className="relative mt-16">
              {/* Desktop: Horizontal Timeline */}
              <div className="hidden md:grid md:grid-cols-3 gap-8">
                {[{
                phase: 1,
                icon: Sprout,
                title: 'Der Ursprung',
                description: 'Lösung alter Traumata: Prägungen aus Geburt, Kindheit oder Schule.',
                colors: 'from-slate-100 to-slate-200 text-slate-600 bg-slate-100 text-slate-700 border-slate-200/60'
              }, {
                phase: 2,
                icon: Wind,
                title: 'Die Befreiung',
                description: 'Emotionale Freiheit: Sicheres Integrieren von Wut, Angst oder Trauer.',
                colors: 'from-[#4d83a4]/10 to-[#4d83a4]/20 text-[#4d83a4] bg-[#4d83a4]/10 text-[#4d83a4] border-[#4d83a4]/30'
              }, {
                phase: 3,
                icon: Sun,
                title: 'Das Potential',
                description: 'Potentialentfaltung: Freiwerdende Energie für Dein echtes, inneres Ich.',
                colors: 'from-amber-100 to-yellow-200 text-amber-600 bg-amber-100 text-amber-700 border-yellow-200/70'
              }].map((item, index) => <motion.div key={index} initial={{
                opacity: 0,
                y: isMobile ? 10 : 40,
                scale: isMobile ? 1 : 0.9
              }} whileInView={{
                opacity: 1,
                y: 0,
                scale: 1
              }} viewport={{
                once: true
              }} transition={{
                duration: isMobile ? 0.2 : 0.8,
                delay: isMobile ? 0 : index * 0.2
              }} whileHover={isMobile ? {} : {
                y: -8,
                boxShadow: "0 20px 40px rgba(77, 131, 164, 0.15)"
              }} className={`relative z-10 bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border-2 border-${item.colors.split(' ').pop()} transition-all duration-300`}>
                    <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${item.colors.split(' ')[0]} ${item.colors.split(' ')[1]} rounded-full flex items-center justify-center shadow-md`}>
                      <item.icon className={`w-10 h-10 ${item.colors.split(' ')[2]}`} />
                    </div>

                    <div className="text-center mb-4">
                      <span className={`inline-block px-4 py-1 ${item.colors.split(' ')[3]} ${item.colors.split(' ')[4]} rounded-full text-sm font-['Montserrat'] font-semibold mb-2`}>
                        Phase {item.phase}
                      </span>
                      <h4 className="font-['Playfair_Display'] text-2xl font-semibold text-[#4A4440] mb-2">
                        {item.title}
                      </h4>
                    </div>

                    <p className="text-[#6B6560] font-['Montserrat'] text-base leading-relaxed text-center">
                      {item.description}
                    </p>
                  </motion.div>)}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Process Timeline - "Dein Weg zur Sitzung" */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <motion.h3 {...fadeInUp} className="font-['Playfair_Display'] text-3xl sm:text-4xl text-[#4A4440] font-light mb-6 text-center">
            Dein Weg zur Sitzung: Was Dich erwartet
          </motion.h3>
          
          <motion.p {...fadeInUp} className="text-center text-[#6B6560] font-['Montserrat'] text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
            Transparenz ist mir wichtig. Damit du dich sicher und gehalten fühlst, 
            ist hier der Ablauf einer klassischen UR-ATEM© Einzelsitzung (ca. 2 Stunden):
          </motion.p>

          {/* Step-by-Step Timeline */}
          <div className="space-y-6">
            {[{
            num: 1,
            title: 'Das Erstgespräch',
            duration: 'ca. 45 Min.',
            description: 'Wir schauen gemeinsam, wo du gerade stehst und welche Ziele du hast. Wir klären Fragen und bereiten das Feld für deine Reise vor.'
          }, {
            num: 2,
            title: 'Die Atemsitzung',
            duration: '60–90 Min.',
            description: 'Du liegst bequem auf einer weichen Unterlage mit Decken und Kissen. Unter meiner achtsamen Führung nutzt du die <span style="font-style: italic;">Rebirthing</span>-Atemtechnik.'
          }, {
            num: 3,
            title: 'Integration & Nachgespräch',
            duration: 'ca. 30 Min.',
            description: 'Wir lassen die Erfahrung sanft ausklingen. Bei Tee und Nüssen besprechen wir, wie du das Erlebte in deinen Alltag integrierst.'
          }, {
            num: 4,
            title: 'Nachbetreuung',
            duration: '',
            description: 'Innerhalb von drei Tagen erhältst du Feedback und kleine Aufgaben per E-Mail, um den Prozess nachhaltig zu verankern.'
          }].map((step, index) => <motion.div key={index} initial={{
            opacity: 0,
            x: isMobile ? 0 : -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: isMobile ? 0.2 : 0.6,
            delay: isMobile ? 0 : index * 0.1
          }} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-[#4d83a4]/20">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#4d83a4]/10 rounded-full flex items-center justify-center">
                    <span className="font-['Playfair_Display'] text-xl font-semibold text-[#4d83a4]">{step.num}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-['Playfair_Display'] text-xl sm:text-2xl font-medium text-[#4A4440] mb-2">
                      {step.title} {step.duration && <span className="text-[#6B6560] font-['Montserrat'] text-base font-normal">({step.duration})</span>}
                    </h4>
                    <p className="text-[#6B6560] font-['Montserrat'] leading-relaxed" dangerouslySetInnerHTML={{
                  __html: step.description
                }} />
                  </div>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* SERVICE DETAIL SECTIONS - DESKTOP: Vertical scroll | MOBILE: Horizontal slider */}
      
      {/* Desktop: Traditional vertical layout (hidden on mobile) */}
      <div className="hidden md:block">
        {services.map((service, index) => <section key={service.id} id={service.id} className={`px-4 sm:px-6 lg:px-8 py-16 sm:py-20 ${index % 2 === 0 ? 'bg-gradient-to-b from-white to-[#F5F3EF]' : 'bg-white'}`}>
            <motion.div {...fadeInUp} className="max-w-6xl mx-auto">
              {/* Image with Overlay - Unique ID for each service */}
              <div id={`img-${service.id.replace('-detail', '')}`} className="relative mb-0 rounded-3xl overflow-hidden service-image" style={{
            boxShadow: 'none',
            borderTopWidth: "0px",
            borderTopColor: "rgb(229, 231, 235)",
            borderRightWidth: "0px",
            borderRightColor: "rgb(229, 231, 235)",
            borderBottomWidth: "0px",
            borderBottomColor: "rgb(229, 231, 235)",
            borderLeftWidth: "0px",
            borderLeftColor: "rgb(229, 231, 235)",
            borderStyle: "solid",
            borderRadius: "24px 24px 0px 0px"
          }}>
                <div className="w-full h-auto max-h-[50vh] md:h-[500px] md:max-h-[500px]" style={{
              backgroundImage: `url(${service.image})`,
              backgroundSize: "cover",
              backgroundPosition: "50% 50%",
              backgroundRepeat: "no-repeat",
              opacity: "1",
              minHeight: "300px"
            }} />
                {/* Gradient overlay - unique to each service via parent ID */}
                <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white`} style={{
              background: "linear-gradient(0deg, #ffffff 12.55%, rgba(0, 0, 0, 0.05) 100%)"
            }}></div>
                
                {/* Title, Price, Duration overlay on image */}
                <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
                  <div className="max-w-4xl mx-auto text-center">
                    <h3 className="font-['Playfair_Display'] text-4xl sm:text-5xl text-white font-light mb-3 drop-shadow-lg" style={{
                  color: "#4d83a4",
                  fontSize: 'clamp(28px, 4vw, 48px)',
                  lineHeight: '1.3',
                  overflowWrap: 'break-word',
                  hyphens: 'auto'
                }}>Eine geführte Atemsession nach der UR-ATEM©  Methode</h3>
                    <div className="flex items-center justify-center gap-4 text-white text-xl font-['Montserrat'] font-semibold drop-shadow-md">
                      <span style={{
                    color: "#4d83a4"
                  }}>{service.price}</span>
                      <span>•</span>
                      <span style={{
                    color: "#4d83a4"
                  }}>{service.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content section - seamless transition from image with uniform min-height */}
              <div className="bg-white rounded-b-3xl p-8 sm:p-12 shadow-lg -mt-1" style={{
            boxShadow: "0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)",
            paddingTop: "0px"
          }}>
                <p className="text-center text-[#4d83a4] font-['Montserrat'] text-lg mb-8 font-semibold" style={{
              fontSize: "22px"
            }}>
                  {service.subtitle}
                </p>
                
                {/* Description container with uniform min-height */}
                <div className="min-h-[200px] space-y-6 text-[#6B6560] text-lg leading-relaxed font-['Montserrat']">
                  {(() => {
                const isExpanded = expandedId === `desktop-${service.id}-main`;
                const paragraphsToShow = isExpanded ? service.description : service.description.slice(0, 2);
                const hasMoreParagraphs = service.description.length > 2;
                return <>
                        {paragraphsToShow.map((para, i) => <p key={i} className="md:block line-clamp-none" dangerouslySetInnerHTML={{
                    __html: para
                  }} />)}

                        {hasMoreParagraphs && <motion.button onClick={() => toggleText(`desktop-${service.id}-main`)} className="text-[#4d83a4] underline font-semibold flex items-center gap-1 transition-colors hover:text-[#3d6a85]" whileHover={{
                    scale: 1.02
                  }} whileTap={{
                    scale: 0.98
                  }}>
                            {isExpanded ? <>
                                Weniger anzeigen <ChevronUp className="w-4 h-4" />
                              </> : <>
                                Weiterlesen <ChevronDown className="w-4 h-4" />
                              </>}
                          </motion.button>}
                      </>;
              })()}
                </div>

                {/* CTA */}
                <div className="mt-8 text-center">
                  <motion.button onClick={() => handleNavigate('contact')} whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} className="inline-flex items-center gap-3 px-10 py-4 bg-[#4d83a4] text-white rounded-full hover:bg-[#3d6a85] transition-all duration-300 shadow-lg hover:shadow-xl font-['Montserrat'] text-lg font-semibold">
                    <Calendar className="w-5 h-5" />
                    {service.ctaText}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </section>)}
      </div>

      {/* Mobile: Horizontal swipeable slider (visible only on mobile) */}
      <div id="mobile-carousel-section" className="md:hidden py-12 bg-white">
        <div className="px-4 mb-6">
          <h3 className="font-['Playfair_Display'] text-3xl text-[#4A4440] font-light text-center mb-4">
            Unsere Angebote
          </h3>
          <p className="text-center text-[#6B6560] font-['Montserrat'] text-sm">
            Wische für weitere Angebote
          </p>
        </div>

        {/* Slider Container */}
        <div ref={sliderRef} className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 px-4" style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}>
          {services.map((service, index) => <div key={service.id} id={`mobile-${service.id}`} className="flex-shrink-0 w-full snap-center">
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-[#4d83a4]/20">
                {/* Image with Overlay - Unique ID for each service */}
                <div id={`img-mobile-${service.id.replace('-detail', '')}`} className="relative service-image" style={{
              boxShadow: 'none'
            }}>
                  <div className="w-full h-64 max-h-[50vh]" style={{
                backgroundImage: `url(${service.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }} />
                  {/* Gradient overlay - unique to each service */}
                  <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white`}></div>
                  
                  {/* Title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                    <h3 className="font-['Playfair_Display'] text-2xl text-white font-light mb-2 drop-shadow-lg">
                      {service.title}
                    </h3>
                    <div className="flex items-center justify-center gap-2 text-white text-base font-['Montserrat'] font-semibold drop-shadow-md">
                      <span>{service.price}</span>
                      <span>•</span>
                      <span>{service.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Content with uniform min-height */}
                <div className="p-6">
                  <p className="text-center text-[#4d83a4] font-['Montserrat'] text-sm mb-4 font-semibold">
                    {service.subtitle}
                  </p>
                  
                  {/* Description container with min-height for uniform cards */}
                  <div className="min-h-[280px] space-y-4 text-[#6B6560] text-base leading-relaxed font-['Montserrat']">
                    {service.description.slice(0, 2).map((para, i) => {
                  const textId = `mobile-${service.id}-${i}`;
                  return <ExpandableText key={i} text={para} textId={textId} />;
                })}

                    {service.benefits && <ul className="space-y-2">
                        {service.benefits.slice(0, 3).map((benefit, i) => <li key={i} className="flex items-start gap-2 text-sm">
                            <span className="text-[#4d83a4] font-bold flex-shrink-0">•</span>
                            <span>{benefit}</span>
                          </li>)}
                      </ul>}
                  </div>

                  {/* CTA */}
                  <div className="mt-6">
                    <button onClick={() => handleNavigate('contact')} className="w-full flex items-center justify-center gap-2 px-8 py-3 bg-[#4d83a4] text-white rounded-full hover:bg-[#3d6a85] transition-all duration-300 shadow-md font-['Montserrat'] font-semibold">
                      <Calendar className="w-5 h-5" />
                      {service.ctaText}
                    </button>
                  </div>
                </div>
              </div>
            </div>)}
        </div>

        {/* Slider Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {services.map((_, index) => <button key={index} onClick={() => scrollToSlide(index)} className={`w-2 h-2 rounded-full transition-all duration-300 ${activeSlide === index ? 'w-8 bg-[#4d83a4]' : 'bg-[#4d83a4]/30'}`} aria-label={`Go to slide ${index + 1}`} />)}
        </div>
      </div>

      {/* Safety & Trust Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-white/50">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeInUp}>
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-amber-200 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <AlertCircle className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
                <h3 className="font-['Playfair_Display'] text-3xl sm:text-4xl text-[#4A4440] font-light">
                  Wichtige Hinweise zur Sicherheit
                </h3>
              </div>
              
              <p className="text-[#6B6560] font-['Montserrat'] text-lg mb-6 leading-relaxed">
                Die Atemarbeit ist eine kraftvolle Methode zur Selbstheilung. 
                Bitte beachte für ein sicheres Erleben folgende Punkte:
              </p>

              <ul className="space-y-4 text-[#6B6560] font-['Montserrat']">
                <li className="flex items-start gap-3" style={{
                display: "none"
              }}>
                  <span className="text-[#4d83a4] font-bold text-xl flex-shrink-0">•</span>
                  <div>
                    <strong className="text-[#4A4440]">Eigenverantwortung:</strong> Jeder Teilnehmer ist für sich und seine Versicherungen selbst verantwortlich.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#4d83a4] font-bold text-xl flex-shrink-0">•</span>
                  <div>
                    <strong className="text-[#4A4440]">Transparenz:</strong> Die Sitzungen können intensive emotionale Prozesse auslösen. 
                    Dies dient der Reinigung, setzt jedoch eine normale psychische Belastbarkeit voraus.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#4d83a4] font-bold text-xl flex-shrink-0">•</span>
                  <div>
                    <strong className="text-[#4A4440]">Kein Ersatz für Medizin:</strong> Ich stelle keine Diagnosen. 
                    Meine Arbeit ersetzt keinen Besuch beim Arzt oder Therapeuten, kann diese aber wunderbar ergänzen.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#4d83a4] font-bold text-xl flex-shrink-0">•</span>
                  <div>
                    <strong className="text-[#4A4440]">Vorbereitung:</strong> Bitte lies vor deiner ersten Sitzung die Check-Liste, 
                    die du unten zum Download findest.
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action - Final Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-sand-50/30 to-[#4d83a4]/5">
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-6xl font-light text-[#4A4440] leading-tight" style={{
          fontSize: 'clamp(30px, 4.5vw, 60px)',
          lineHeight: '1.3',
          overflowWrap: 'break-word',
          hyphens: 'auto',
          padding: '0 15px'
        }}>Bereit für deinen ersten Atemzug mit mir?</h2>
          
          <p className="text-xl sm:text-2xl text-[#6B6560] font-['Montserrat'] leading-relaxed max-w-3xl mx-auto">
            Ich lade dich ein, dir selbst in Achtsamkeit zu begegnen. 
            In einem geschützten Raum, den wir gemeinsam erschaffen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <motion.button onClick={() => handleNavigate('contact')} whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="inline-flex items-center gap-3 px-10 py-4 bg-[#4d83a4] text-white rounded-full hover:bg-[#3d6a85] transition-all duration-300 shadow-xl hover:shadow-2xl font-['Montserrat'] text-lg font-semibold">
              <Calendar className="w-5 h-5" />
              Termin vereinbaren
            </motion.button>

            <motion.button whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="inline-flex items-center gap-3 px-10 py-4 bg-white text-[#4d83a4] border-2 border-[#4d83a4] rounded-full hover:bg-[#4d83a4]/5 transition-all duration-300 shadow-lg hover:shadow-xl font-['Montserrat'] font-semibold text-sm" style={{
            display: "none"
          }}>
              <Download className="w-5 h-5" />
              Check-Liste herunterladen
            </motion.button>
          </div>

          <p className="text-lg text-[#6B6560] font-['Montserrat'] italic pt-8">
            Ich freue mich darauf, dich auf deiner Reise zu begleiten.
          </p>
          
          <p className="text-2xl text-[#4A4440] font-['Playfair_Display'] font-medium">
            – Tina Christina Tomson
          </p>
        </motion.div>
      </section>

      {/* Link to Massage Page */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-white/70">
        <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-[#4d83a4]/5 to-[#F5F3EF] rounded-3xl p-8 sm:p-12 border border-[#4d83a4]/20 shadow-lg text-center">
            <Heart className="w-12 h-12 text-[#4d83a4] mx-auto mb-4" />
            <h4 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-light text-[#4A4440] mb-4">Eine wohltuende Atem-Massage Session</h4>
            <p className="text-lg text-[#6B6560] font-['Montserrat'] mb-6">Kombiniere Atem & Massage und erlebe die kraftvolle Verbindung von bewusstem Atem und achtsamer Berührung. <br /></p>
            <button onClick={() => handleNavigate('massage')} className="inline-flex items-center gap-2 px-8 py-3 bg-[#4d83a4] text-white rounded-full hover:bg-[#3d6a85] transition-all duration-300 font-['Montserrat'] font-medium shadow-lg hover:shadow-xl">
              Zur Massage-Seite
              <span className="transform transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </motion.div>
      </section>

      {/* Sticky Bottom CTA - Desktop ONLY (hidden on mobile < 768px) */}
      <motion.div initial={{
      opacity: 0,
      y: 100
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.6,
      delay: 1
    }} className="hidden md:block fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-[#4d83a4]/20 shadow-2xl px-4 py-3" style={{
      display: "none"
    }}>
        <div className="max-w-7xl mx-auto">
          <button onClick={() => handleNavigate('contact')} className="w-full max-w-md mx-auto block h-14 bg-[#4d83a4] text-white rounded-full shadow-lg hover:bg-[#3d6a85] active:scale-95 transition-all duration-300 font-['Montserrat'] text-base font-semibold flex items-center justify-center gap-2">
            <Calendar className="w-5 h-5" />
            Termin vereinbaren
          </button>
        </div>
      </motion.div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .line-clamp-5 {
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>;
}