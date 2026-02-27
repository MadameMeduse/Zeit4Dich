"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Clock, Award, ChevronLeft, ChevronRight, Calendar, Wind, ChevronDown } from 'lucide-react';
type PageType = 'home' | 'about' | 'events' | 'contact' | 'atem' | 'massage' | 'inspiration';
interface MassagePageProps {
  onNavigate?: (page: PageType) => void;
}
interface MassageService {
  name: string;
  duration: string;
  price: string;
  description?: string;
  isSpecialized?: boolean;
}

/**
 * MassagePage - Redesigned to Match Atem Page Style
 * 
 * Features:
 * - Primary blue (#4d83a4) color palette with soft blue gradients
 * - Staggered layout with images between text blocks
 * - No accordion - all content revealed
 * - Consolidated service cards with duration ranges
 * - Playfair Display for headers, Montserrat for body text
 * - Spacious, airy layout
 * - Dedicated Atem-Massage section with specialized styling
 */
export default function MassagePage({
  onNavigate
}: MassagePageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [showAtemDetails, setShowAtemDetails] = useState(false);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle slider scroll position for pagination
  useEffect(() => {
    if (!isMobile || !sliderRef.current) return;
    const handleScroll = () => {
      if (sliderRef.current) {
        const scrollPosition = sliderRef.current.scrollLeft;
        const cardWidth = sliderRef.current.scrollWidth / 3;
        const newSlide = Math.round(scrollPosition / cardWidth);
        setCurrentSlide(newSlide);
      }
    };
    const slider = sliderRef.current;
    slider.addEventListener('scroll', handleScroll);
    return () => slider.removeEventListener('scroll', handleScroll);
  }, [isMobile]);
  const handleNavigate = (page: PageType) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  // Handle smooth scroll to Atem-Massage section
  const scrollToAtemMassage = () => {
    const element = document.getElementById('atem-massage');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  // Consolidated Massage Services Data with duration ranges
  const massageServices: MassageService[] = [{
    name: "Ganzkörper-Massage",
    duration: "60–90 Min",
    price: "90.–135. CHF"
  }, {
    name: "Ganzkörper-Verwöhnmassage",
    duration: "75 Min",
    price: "115. CHF"
  }, {
    name: "Rücken-Nacken-Schulterbereich",
    duration: "30 Min",
    price: "45. CHF"
  }, {
    name: "Rücken-Intensiv-Massage",
    duration: "40 Min",
    price: "65. CHF"
  }, {
    name: "Kopf-Nacken-Gesicht (Indische Ayurveda)",
    duration: "30 Min",
    price: "45. CHF"
  }, {
    name: "Beine und Fußsohlen (Japanische Shin-Do)",
    duration: "30–60 Min",
    price: "45.–90. CHF"
  }, {
    name: "Aromamassage mit Ätherischen Ölen",
    duration: "75 Min",
    price: "135. CHF"
  }, {
    name: "Schwangerschaftsmassage",
    duration: "40–60 Min",
    price: "60.–90. CHF"
  }, {
    name: "Lava-Stein-Massage inkl. Edelsteine",
    duration: "90–120 Min",
    price: "162.–225. CHF"
  }, {
    name: "Atem-Massage",
    duration: "60–90 Min",
    price: "108.–126. CHF",
    isSpecialized: true
  }, {
    name: "Aloe-Vera & Jojoba (Gesicht & Décolleté)",
    duration: "30 Min",
    price: "49. CHF"
  }, {
    name: "Kombinationen Deiner Wahl",
    duration: "Individuell",
    price: "Preis auf Anfrage",
    description: "Individuell zusammengestellt"
  }];

  // Hero Images
  const heroImages = ["https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop&q=80", "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&h=600&fit=crop&q=80", "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&fit=crop&q=80"];
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % heroImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Horizontal scroll helpers
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };
  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  // Animation variants
  const fadeInUp = {
    initial: {
      opacity: 0,
      y: 30
    },
    whileInView: {
      opacity: 1,
      y: 0
    },
    viewport: {
      once: true
    },
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  };

  // Trust Badges Data
  const trustBadges = [{
    icon: Award,
    title: "25 Jahre Erfahrung",
    description: "Professionelle Expertise in TCM und westlichen Techniken"
  }, {
    icon: Heart,
    title: "Bio-Qualität",
    description: "Hochwertige organische Öle für Ihre Behandlung"
  }, {
    icon: Sparkles,
    title: "Individuelle Behandlung",
    description: "Jede Massage wird auf Ihre Bedürfnisse abgestimmt"
  }];
  return <div className="min-h-screen bg-gradient-to-b from-[#F5F3EF] to-[#EAE7E0]">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-32 sm:pt-36 lg:pt-40 pb-16 px-4 sm:px-6 lg:px-8">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence >
            <motion.div key={currentImageIndex} className="w-full h-full" style={{
            backgroundImage: `url(${heroImages[currentImageIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'sepia(0.15) saturate(0.8)'
          }} initial={{
            opacity: 0,
            scale: 1.1
          }} animate={{
            opacity: 0.7,
            scale: 1
          }} exit={{
            opacity: 0
          }} transition={{
            duration: 1.5
          }} />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-b from-[#F5F3EF]/70 via-[#F5F3EF]/50 to-[#EAE7E0]/90"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          <motion.div initial={{
          opacity: 0,
          y: 40
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1]
        }}>
            <h1 className="font-['Playfair_Display'] text-5xl sm:text-6xl lg:text-7xl font-light text-[#4A4440] leading-tight mb-6" style={{
            fontSize: 'clamp(30px, 5vw, 72px)',
            lineHeight: '1.3',
            overflowWrap: 'break-word',
            hyphens: 'auto',
            padding: '0 15px'
          }}>
              Massage ist mehr als Technik
            </h1>
            
            <div className="w-24 h-px bg-[#4d83a4]/30 mx-auto mb-8"></div>
            
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl font-light text-[#4A4440] italic mb-8">
              Es ist eine Resonanz mit dem Körper
            </h2>
            
            <p className="font-['Montserrat'] text-lg sm:text-xl text-[#4A4440] max-w-3xl mx-auto leading-relaxed mb-12">Durch meine über 20 Aus- und Weiterbildungen (TCM - Traditioneller Chinesischer Medizin - Akupressur-Massage und westlichen Techniken) verbinde ich körperliches Wissen mit intuitivem Spüren.</p>

            {/* Primary CTA - Hidden on mobile */}
            <motion.button onClick={() => handleNavigate('contact')} whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="hidden md:inline-flex items-center gap-3 px-10 py-4 bg-[#4d83a4] text-white rounded-full hover:bg-[#3d6a85] transition-all duration-300 shadow-lg hover:shadow-xl font-['Montserrat'] text-lg font-semibold">
              <Calendar className="w-5 h-5" />
              Termin vereinbaren
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges - Moved directly under Hero */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Desktop: Grid Layout */}
          <motion.div {...fadeInUp} className="hidden md:grid grid-cols-1 sm:grid-cols-3 gap-8">
            {trustBadges.map((badge, index) => {
            const Icon = badge.icon;
            return <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-3xl shadow-lg border border-[#4d83a4]/20 transition-all duration-300 hover:shadow-xl">
                  <Icon className="w-12 h-12 text-[#4d83a4] mb-4" />
                  <h3 className="font-['Playfair_Display'] text-2xl font-medium text-[#4A4440] mb-2">
                    {badge.title}
                  </h3>
                  <p className="font-['Montserrat'] text-base text-[#6B6560]">
                    {badge.description}
                  </p>
                </div>;
          })}
          </motion.div>

          {/* Mobile: Horizontal Slider with Pagination */}
          <div className="md:hidden">
            <div ref={sliderRef} className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-6 px-2" style={{
            scrollPaddingLeft: '1rem'
          }}>
              {trustBadges.map((badge, index) => {
              const Icon = badge.icon;
              return <motion.div key={index} initial={{
                opacity: 0,
                x: 30
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                duration: 0.6,
                delay: index * 0.1
              }} className="flex-shrink-0 w-[85%] snap-start">
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-3xl shadow-lg border border-[#4d83a4]/20 h-full">
                      <Icon className="w-12 h-12 text-[#4d83a4] mb-4" />
                      <h3 className="font-['Playfair_Display'] text-2xl font-medium text-[#4A4440] mb-2">
                        {badge.title}
                      </h3>
                      <p className="font-['Montserrat'] text-base text-[#6B6560]">
                        {badge.description}
                      </p>
                    </div>
                  </motion.div>;
            })}
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {trustBadges.map((_, index) => <button key={index} onClick={() => {
              if (sliderRef.current) {
                const cardWidth = sliderRef.current.scrollWidth / 3;
                sliderRef.current.scrollTo({
                  left: cardWidth * index,
                  behavior: 'smooth'
                });
              }
            }} className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index ? 'w-8 bg-[#4d83a4]' : 'w-2 bg-[#4d83a4]/30'}`} aria-label={`Go to slide ${index + 1}`} />)}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy & TCM Section - Two Column Layout */}
      <section id="massage-expertise" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-[#F5F3EF]">
        <motion.div {...fadeInUp} className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-white to-[#F5F3EF] rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl border border-[#4d83a4]/20">
            <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl text-[#4A4440] font-light mb-12 text-center" style={{
            fontSize: 'clamp(28px, 4vw, 48px)',
            lineHeight: '1.3',
            overflowWrap: 'break-word',
            hyphens: 'auto',
            padding: '0 15px'
          }}>Meine Expertise</h2>
            
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 text-[#6B6560] text-lg leading-relaxed font-['Montserrat']">
              {/* Left Column - Technical TCM Background */}
              <div className="space-y-6">
                <h3 className="font-['Playfair_Display'] text-2xl font-medium text-[#4A4440] mb-4">Ausbildung und Erfahrung</h3>
                <p>Ich begleite Menschen seit über 25 Jahren mit Atem, Berührung und Präsenz. Seit dem Jahr 2000 habe ich rund 20 Aus- und Weiterbildungen in verschiedenen Massagearten absolviert, um Massagen mit Tiefe und Vielfalt anbieten zu können.</p>
                <p>Ich arbeite intuitiv, mit einem feinen Gespür für Blockaden – und für Wege, sie zu lösen.<br />Freude ist mir wichtig. Stille auch. Und echte Begegnung.</p>
              </div>

              {/* Right Column - Intuitive Approach */}
              <div className="space-y-6">
                <h3 className="font-['Playfair_Display'] text-2xl font-medium text-[#4A4440] mb-4">
                  Intuitives Spüren
                </h3>
                <p>Es gibt kaum etwas Schöneres, als zu sehen, wie ein Mensch loslässt, aufatmet und aufblüht. Wenn sich ein Herz erleichtert, ein Körper befreit oder eine Seele wieder lachen kann, fühle ich mich reich beschenkt.<br />Es ist für mich eine große Ehre, mit Menschen arbeiten zu dürfen.<br /></p>
                <p>Und ich vertraue darauf, dass genau die Menschen zu mir finden, denen ich am meisten dienen kann.</p>
              </div>
            </div>

            {/* Highlighted Standout Paragraph */}
            <div className="mt-12 bg-gradient-to-r from-[#4d83a4]/10 via-[#4d83a4]/5 to-[#4d83a4]/10 rounded-2xl p-8 border-l-4 border-r-4 border-[#4d83a4] shadow-lg">
              <p className="font-['Playfair_Display'] text-xl sm:text-2xl text-[#4A4440] text-center leading-relaxed italic">
                Du bist herzlich willkommen in einem Raum der Heilung, des Lernens und des Loslassens – einem Raum, den wir gemeinsam erschaffen, nur für dich.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Mein Angebot - Moved directly under Philosophy */}
      <section id="mein-angebot" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h3 {...fadeInUp} className="font-['Playfair_Display'] text-3xl sm:text-4xl text-[#4A4440] font-light mb-6 text-center">
            Mein Angebot
          </motion.h3>
          <motion.p {...fadeInUp} className="text-center text-[#6B6560] font-['Montserrat'] text-lg mb-12 max-w-2xl mx-auto">Wer sich heute was Gutes tut, hat morgen eine schöne Vergangenheit.
          </motion.p>
          
          <motion.p {...fadeInUp} className="text-center text-[#6B6560] font-['Montserrat'] text-lg mb-12 max-w-2xl mx-auto">Von sanften Verwöhnmassagen mit Aromaöl oder heissen Lava-Steinen über spezifische Kopf- und Fussbehandlungen bis hin zu Deep-Tissue-Rücken-Intensivmassagen</motion.p>
          


          {/* Consolidated Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {massageServices.map((service, index) => {
            const isAtemMassage = service.isSpecialized;
            return <motion.div key={index} initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: index * 0.05
            }} onClick={isAtemMassage ? scrollToAtemMassage : undefined} whileHover={isAtemMassage ? {
              scale: 1.02
            } : undefined} className={`bg-white rounded-3xl p-6 shadow-xl transition-all duration-300 ${isAtemMassage ? 'border-2 border-[#4d83a4] bg-[#4d83a4]/5 cursor-pointer hover:shadow-2xl' : 'border border-[#4d83a4]/20 hover:shadow-2xl'}`}>
                  <h4 className="font-['Playfair_Display'] text-xl font-medium text-[#4A4440] mb-4 text-center">
                    {service.name}
                  </h4>
                  <div className="text-center mb-3">
                    <p className="text-2xl font-light text-[#4d83a4] font-['Playfair_Display']">
                      {service.price}
                    </p>
                    <p className="text-sm text-[#6B6560] font-['Montserrat'] flex items-center justify-center gap-2 mt-2">
                      <Clock className="w-4 h-4 text-[#4d83a4]" />
                      {service.duration}
                    </p>
                  </div>
                  {isAtemMassage && <div className="flex items-center justify-center gap-2 mt-4 text-[#4d83a4] font-['Montserrat'] text-sm font-medium">
                      <span>Mehr erfahren</span>
                      <ChevronDown className="w-4 h-4" />
                    </div>}
                </motion.div>;
          })}
          </div>

          {/* Recommendation Footer */}
          <motion.div {...fadeInUp} className="bg-[#4d83a4]/5 rounded-2xl p-6 text-center border border-[#4d83a4]/20 mt-8 space-y-3">
            <p className="text-[#6B6560] font-['Montserrat'] text-base" style={{
            fontWeight: "400"
          }}>Bio-Qualität: Ich verwende ausschliesslich hochwertige, organische Öle in nativer Rohkostqualität für Deine Behandlung</p>
            <div className="flex items-center justify-center gap-2 pt-2">
              <Sparkles className="w-5 h-5 text-[#4d83a4]" />
              <p className="text-[#4d83a4] font-['Montserrat'] text-base font-semibold">
                Geschenk-Gutscheine erhältlich!
              </p>
              <Sparkles className="w-5 h-5 text-[#4d83a4]" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Session Flow - Staggered Layout with Images */}
      <section id="massage-ablauf" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F5F3EF] to-white">
        <div className="max-w-6xl mx-auto">
          <motion.h3 {...fadeInUp} className="font-['Playfair_Display'] text-3xl sm:text-4xl text-[#4A4440] font-light mb-12 text-center">Öle in Bio-Qualität</motion.h3>

          {/* Section 1: The Foundation (TCM & Anatomy) - Text Left, Image Right */}
          <motion.div {...fadeInUp} className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-20 items-center" style={{
          display: "none"
        }}>
            <div className="space-y-6 text-[#6B6560] text-lg leading-relaxed font-['Montserrat']">
              <h4 className="font-['Playfair_Display'] text-2xl font-medium text-[#4A4440]">Wieso wirkt es? <br /></h4>
              <p>Der Mensch ist ein komplexes Wesen. Unser Körper speichert Erinnerungen, ist eng mit unserer Psyche verbunden und spiegelt sie wider. Muskuläre Spannungen, die durch schwere körperliche Arbeit entstehen, lassen sich gut mit Massage und/oder Dehnübungen lösen.</p>
              <p>Spannungen, die durch bestimmte Ereignisse, Schockerlebnisse oder durch dauerhaften Stress und mentale Belastungen entstehen, sind dagegen mit reinem Anfassen meist schwerer zu lösen. Diese im Körper gespeicherten, emotional belasteten Spannungen nennt man auch Blockaden, da sie auf mehreren Ebenen existieren und den eigenen Energiefluss dauerhaft hemmen.</p>
            </div>
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl">
              <div className="w-full h-full max-h-[50vh] md:max-h-[400px]" style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=1200&h=800&fit=crop&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }} />
            </div>
          </motion.div>

          {/* Section 2: The Flow (Intuitive & Global) - Image Left, Text Right */}
          <motion.div {...fadeInUp} className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative h-auto max-h-[50vh] md:h-[400px] md:max-h-[400px] rounded-3xl overflow-hidden shadow-xl md:order-first order-last">
              <div className="w-full h-full" style={{
              backgroundImage: "url(https://storage.googleapis.com/storage.magicpath.ai/user/351284685155995648/assets/bba9fd9f-84eb-42ec-bacb-a95865e7cd78.png)",
              backgroundSize: "cover",
              backgroundPosition: "50% 50%",
              backgroundRepeat: "no-repeat",
              opacity: "1",
              minHeight: "300px"
            }} />
            </div>
            <div className="space-y-6 text-[#6B6560] text-lg leading-relaxed font-['Montserrat']">
              <h4 className="font-['Playfair_Display'] text-2xl font-medium text-[#4A4440]">Organische Öle in nativer Rohkostqualität</h4>
              <p>Deine Haut ist mir besonders wichtig. In der Massage verwende ich ausschließlich hochwertigste, unraffinierte, biologische, kaltgepresste Fairtrade Öle in Rohkost-Qualität, wie Mandelöl (ein leichtes, allergiearmes Pflegeöl, besonders geeignet für Pitta-Hauttypen nach Ayurveda), Sesamöl (besonders passend für Vata-Hauttypen) und Kokosöl (nativ oder geruchlos).</p>
              <p>Für das Gesicht stehen Jojoba- und Arganöl bereit, pur oder verfeinert – zum Beispiel mit Rosen-, Lavendel- oder Geranienöl.<br />Auf Wunsch kombiniere ich die Basisöle mit biologischen ätherischen Ölen aus meinem Sortiment – ca 30 verschiedene Öle stehen zur Auswahl. </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dedicated Atem-Massage Section */}
      <section id="atem-massage" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-[#F5F3EF]">
        <motion.div {...fadeInUp} className="max-w-6xl mx-auto">
          <div className="bg-[#4d83a4]/5 rounded-3xl p-8 sm:p-12 lg:p-16 border-2 border-[#4d83a4]/30 shadow-xl">
            {/* Header with Wind Icon */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <Wind className="w-10 h-10 text-[#4d83a4]" />
              <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl text-[#4d83a4] font-light text-center">
                Atem-Massage
              </h2>
              <Wind className="w-10 h-10 text-[#4d83a4]" />
            </div>

            {/* Two Column Layout: Image Left, Text Right */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Column: Image */}
              <div className="relative h-auto max-h-[50vh] md:h-[500px] md:max-h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <div className="w-full h-full" style={{
                backgroundImage: "url(https://storage.googleapis.com/storage.magicpath.ai/user/351284685155995648/assets/cd7f192f-df15-4874-8c10-083b0fd3f4f3.png)",
                backgroundSize: "cover",
                backgroundPosition: "bottom right",
                backgroundRepeat: "no-repeat",
                opacity: "1",
                minHeight: "300px"
              }} />
              </div>

              {/* Right Column: Text Content */}
              <div className="space-y-6 text-[#6B6560] text-lg leading-relaxed font-['Montserrat']">
                <p>
                  Die <strong>Atem-Massage</strong> ist eine von mir entwickelte Methode, in der Atemarbeit mit Massage und Körperarbeit kombiniert wird – die klassische Massage bildet dabei die Grundlage. Das Ergebnis ist <strong>Tiefenentspannung</strong>.
                </p>
                <p>
                  Der Klient nimmt dabei eine innerlich aktive Rolle ein. Die Behandlung findet auf der Massageliege statt. Durch die bewusste Atemführung lösen wir gemeinsam körperliche Spannungen, wobei durch den Atemfokus auch tiefere Blockaden, zum Beispiel psychische, mit einbezogen werden können.
                </p>
                <p>
                  Diese Methode ist besonders hilfreich, wenn reine Massage nicht die gewünschten Ergebnisse erzielt.
                </p>

                {/* CTA Buttons - Horizontal Layout */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button onClick={() => setShowAtemDetails(!showAtemDetails)} className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-[#4d83a4] text-[#4d83a4] rounded-full hover:bg-[#4d83a4] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg font-['Montserrat'] font-medium" style={{
                  fontSize: "14px"
                }}>
                    {showAtemDetails ? 'Weniger anzeigen' : 'Mehr erfahren'}
                    <motion.span animate={{
                    rotate: showAtemDetails ? 180 : 0
                  }} transition={{
                    duration: 0.3
                  }}>
                      <ChevronDown className="w-5 h-5" />
                    </motion.span>
                  </button>
                  <motion.button onClick={() => handleNavigate('contact')} whileHover={{
                  scale: 1.05
                }} whileTap={{
                  scale: 0.95
                }} className="inline-flex items-center gap-3 px-8 py-3 bg-[#4d83a4] text-white rounded-full hover:bg-[#3d6a85] transition-all duration-300 shadow-lg hover:shadow-xl font-['Montserrat'] text-base font-semibold" style={{
                  fontSize: "14px"
                }}>
                    <Calendar className="w-5 h-5" />
                    Termin vereinbaren
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Read More Section */}
            <div className="mt-12">
              <AnimatePresence>
                {showAtemDetails && <motion.div initial={{
                opacity: 0,
                height: 0
              }} animate={{
                opacity: 1,
                height: 'auto'
              }} exit={{
                opacity: 0,
                height: 0
              }} transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1]
              }} className="overflow-hidden">
                    <div className="mt-8 space-y-6 text-[#6B6560] text-lg leading-relaxed font-['Montserrat']">
                      <h4 className="font-['Playfair_Display'] text-2xl font-medium text-[#4A4440]">
                        Wieso wirkt es?
                      </h4>
                      <p>
                        Der Mensch ist ein komplexes Wesen. Unser Körper speichert Erinnerungen, ist eng mit unserer Psyche verbunden und spiegelt sie wider. Muskuläre Spannungen, die durch schwere körperliche Arbeit entstehen, lassen sich gut mit Massage und/oder Dehnübungen lösen.
                      </p>
                      <p>
                        Spannungen, die durch bestimmte Ereignisse, Schockerlebnisse oder durch dauerhaften Stress und mentale Belastungen entstehen, sind dagegen mit reinem Anfassen meist schwerer zu lösen. Diese im Körper gespeicherten, emotional belasteten Spannungen nennt man auch Blockaden, da sie auf mehreren Ebenen existieren und den eigenen Energiefluss dauerhaft hemmen.
                      </p>
                      <p>
                        In solchen Fällen ist es hilfreicher, die Blockaden bewusst anzugehen. So sind die Ergebnisse nachhaltiger, und die gewonnene Entspannung und innere Ruhe bleiben dauerhaft erhalten.
                      </p>
                    </div>
                  </motion.div>}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Trust Badges */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-white/50" style={{
      display: "none"
    }}>
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg border border-[#4d83a4]/20">
              <Award className="w-12 h-12 text-[#4d83a4] mb-4" />
              <h3 className="font-['Playfair_Display'] text-2xl font-medium text-[#4A4440] mb-2">
                25 Jahre Erfahrung
              </h3>
              <p className="font-['Montserrat'] text-base text-[#6B6560]">
                Professionelle Expertise in TCM und westlichen Techniken
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg border border-[#4d83a4]/20">
              <Heart className="w-12 h-12 text-[#4d83a4] mb-4" />
              <h3 className="font-['Playfair_Display'] text-2xl font-medium text-[#4A4440] mb-2">
                Bio-Qualität
              </h3>
              <p className="font-['Montserrat'] text-base text-[#6B6560]">
                Hochwertige organische Öle für Ihre Behandlung
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg border border-[#4d83a4]/20">
              <Sparkles className="w-12 h-12 text-[#4d83a4] mb-4" />
              <h3 className="font-['Playfair_Display'] text-2xl font-medium text-[#4A4440] mb-2">
                Individuelle Behandlung
              </h3>
              <p className="font-['Montserrat'] text-base text-[#6B6560]">
                Jede Massage wird auf Ihre Bedürfnisse abgestimmt
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white to-[#4d83a4]/5">
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-6xl font-light text-[#4A4440] leading-tight" style={{
          fontSize: 'clamp(30px, 4.5vw, 60px)',
          lineHeight: '1.3',
          overflowWrap: 'break-word',
          hyphens: 'auto',
          padding: '0 15px'
        }}>
            Bereit für Ihre Auszeit?
          </h2>
          
          <p className="text-xl sm:text-2xl text-[#6B6560] font-['Montserrat'] leading-relaxed max-w-3xl mx-auto" style={{
          fontStyle: "normal"
        }}>Gönnen Sie sich die Entspannung, die Sie verdienen. Erleben Sie, wie erholsam professionelle Massage sein kann. </p>

          <p className="text-lg text-[#6B6560] font-['Montserrat'] italic pt-8" style={{
          paddingTop: "0px"
        }}>Ich freue mich darauf, Sie auf Ihrer Reise zu innerem Wohlbefinden zu begleiten.</p>
          
          <p className="text-2xl text-[#4A4440] font-['Playfair_Display'] font-medium">
            – Tina Christina Tomson
          </p>

          <motion.button onClick={() => handleNavigate('contact')} whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} className="inline-flex items-center gap-3 px-10 py-4 bg-[#4d83a4] text-white rounded-full hover:bg-[#3d6a85] transition-all duration-300 shadow-xl hover:shadow-2xl font-['Montserrat'] text-lg font-semibold">
            <Calendar className="w-5 h-5" />
            Jetzt Termin buchen
          </motion.button>
        </motion.div>
      </section>

      {/* Link to Atem Page */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-white/70">
        <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-[#4d83a4]/5 to-[#F5F3EF] rounded-3xl p-8 sm:p-12 border border-[#4d83a4]/20 shadow-lg text-center">
            <Heart className="w-12 h-12 text-[#4d83a4] mx-auto mb-4" />
            <h4 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-light text-[#4A4440] mb-4">
            Geführte Atemreise
            </h4>
            <p className="text-lg text-[#6B6560] font-['Montserrat'] mb-6">
            Nach der UR-ATEM© Methode 
Blockaden lösen. Energie entfalten. Du sein.
            </p>
            <button onClick={() => handleNavigate('atem')} className="inline-flex items-center gap-2 px-8 py-3 bg-[#4d83a4] text-white rounded-full hover:bg-[#3d6a85] transition-all duration-300 font-['Montserrat'] font-medium shadow-lg hover:shadow-xl">
              Zur Atem-Seite
              <span className="transform transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </motion.div>
      </section>

      {/* Sticky Bottom CTA Bar - Mobile Only */}
      <motion.div initial={{
      opacity: 0,
      y: 100
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 0.5,
      duration: 0.6
    }} className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-[#4d83a4]/20 shadow-2xl px-4 py-3">
        <button onClick={() => handleNavigate('contact')} className="w-full h-14 bg-[#4d83a4] text-white rounded-full shadow-lg hover:bg-[#3d6a85] active:scale-95 transition-all duration-300 font-['Montserrat'] text-base font-semibold flex items-center justify-center gap-2" style={{
        minHeight: '56px'
      }}>
          <Calendar className="w-5 h-5" />
          Termin buchen
        </button>
      </motion.div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>;
}