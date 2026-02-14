import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location?: string;
  sessionType?: string;
}
export const TestimonialsSection: React.FC = () => {
  // Mock testimonials data with lorem ipsum
  const testimonials: Testimonial[] = [{
    id: '1',
    quote: 'Liebe Tina, die Massage heute war hervorragend! Das war mit Abstand die beste Massage die ich bisher hatte... Besonders wie Du den Druck unterschiedlich dem Muskel anpasst... ist einzigartig.',
    author: 'Christina',
    location: '19. Mai 2013'
  }, {
    id: '2',
    quote: 'Liebe Tina Christina, noch einmal Danke für die intensive Massage inkl. Dehnungsübungen, \'Schulter-Check\', Atmung... es wird wieder mit dem Schulter :)',
    author: 'Andrea',
    location: 'Dez 2023'
  }, {
    id: '3',
    quote: 'Die Atemsessions waren unglaublich entspannend und haben mir sehr geholfen, mehr Ruhe und Gelassenheit in meinen Alltag zu bringen. Durch die liebevolle und klare Anleitung fiel es mir leicht, loszulassen...',
    author: 'Aida',
    location: 'Zahnärztin',
    sessionType: 'Sept 2025'
  }, {
    id: '4',
    quote: 'Die Massage war einfach unglaublich. Dieses tiefe Gefühl von Entspannung und Wohltat habe ich so bisher bei keinem anderen Masseur erlebt... Tina weiss genau, was sie tut.',
    author: 'Benjamin',
    location: 'Bauleiter',
    sessionType: 'Nov 2025'
  }, {
    id: '5',
    quote: 'Seit einigen Jahren bin ich regelmässig bei Tina zur Massage... Sie massiert nicht einfach, sondern sie ist in Resonanz mit dem Körper und macht genau das, was dem Körper gerade gut tut.',
    author: 'Karl',
    location: 'Unternehmer',
    sessionType: 'Dez 2025'
  }, {
    id: '6',
    quote: '30 Min gezieltes Kneten verspannter Muskelpartien um mein Schultergelenk erlöste mich von nächtlichen Beschwerden. Sie kennt sich auch mit Dehnübungen aus.',
    author: 'Johann',
    location: 'Jan 2026'
  }];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mobile-optimized animation durations
  const animDuration = isMobile ? 0.25 : 0.6;
  const headerDuration = isMobile ? 0.2 : 0.8;

  // Calculate items per view based on screen size
  const itemsPerView = isMobile ? 1 : 2;
  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  // Navigation handlers
  const goToNext = useCallback(() => {
    if (currentIndex < maxIndex) {
      setDirection('next');
      setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
    }
  }, [currentIndex, maxIndex]);
  const goToPrev = useCallback(() => {
    if (currentIndex > 0) {
      setDirection('prev');
      setCurrentIndex(prev => Math.max(prev - 1, 0));
    }
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        goToNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev]);

  // Touch swipe support
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrev();
    }
  };

  // Get visible testimonials
  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerView);
  return <section id="testimonials" className="py-20 sm:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="testimonials-heading" style={{
    paddingBottom: "50px",
    paddingTop: "100px"
  }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.header initial={{
        opacity: 0,
        y: isMobile ? 10 : 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: headerDuration
      }} viewport={{
        once: true
      }} className="mb-12 sm:mb-16 lg:mb-20 text-center">
          <h2 id="testimonials-heading" className="text-3xl sm:text-4xl lg:text-5xl text-[#7A7568] font-light tracking-wide font-['Playfair_Display'] leading-tight mb-6 sm:mb-8" style={{
          fontStyle: 'normal',
          textAlign: 'center',
          justifyContent: 'center',
          fontSize: 'clamp(32px, 4.5vw, 50px)',
          lineHeight: '1.3',
          overflowWrap: 'break-word',
          fontWeight: "700",
          letterSpacing: "-0.01em",
          paddingLeft: "15px",
          paddingRight: "15px"
        }}>Was andere über ihre Erfahrung sagen</h2>
          
          <p className="text-lg sm:text-xl text-[#7A7568]/80 font-['Montserrat',_sans-serif] font-light leading-relaxed max-w-3xl mx-auto" style={{
          display: "none"
        }}>
            Was andere über ihre Erfahrung sagen
          </p>
        </motion.header>

        {/* Testimonials Slider Container */}
        <div className="relative">
          {/* Slider Wrapper */}
          <motion.div initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: headerDuration,
          delay: isMobile ? 0.05 : 0.2
        }} viewport={{
          once: true
        }} className="overflow-hidden" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
            <div className="grid gap-6 sm:gap-8 lg:gap-10" style={{
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)'
          }}>
              <AnimatePresence mode="wait" custom={direction}>
                {visibleTestimonials.map(testimonial => <motion.article key={testimonial.id} initial={{
                opacity: 0,
                x: isMobile ? 0 : direction === 'next' ? 40 : -40
              }} animate={{
                opacity: 1,
                x: 0
              }} exit={{
                opacity: 0,
                x: isMobile ? 0 : direction === 'next' ? -40 : 40
              }} transition={{
                duration: animDuration,
                ease: [0.4, 0.0, 0.2, 1]
              }} className="bg-[#F5F3EF] rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12 flex flex-col justify-between" style={{
                background: "rgb(133 182 213 / 0.27)"
              }}>
                    {/* Quote Mark (optional) */}
                    <div className="mb-6 sm:mb-8">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#7A7568]/20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" style={{
                    background: "rgb(77 130 163 / 0)"
                  }}>
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>

                    {/* Quote Text */}
                    <blockquote className="flex-1 mb-8 sm:mb-10">
                      <p className="text-base sm:text-lg lg:text-xl text-[#7A7568] font-['Montserrat',_sans-serif] font-light leading-loose">
                        {testimonial.quote}
                      </p>
                    </blockquote>

                    {/* Author Info */}
                    <footer className="border-t border-[#7A7568]/10 pt-6">
                      <cite className="not-italic">
                        <div className="text-lg sm:text-xl text-[#7A7568] font-['Montserrat',_sans-serif] font-normal mb-2">
                          {testimonial.author}
                        </div>
                        {(testimonial.location || testimonial.sessionType) && <div className="text-sm sm:text-base text-[#7A7568]/60 font-['Montserrat',_sans-serif] font-light">
                            {[testimonial.location, testimonial.sessionType].filter(Boolean).join(' • ')}
                          </div>}
                      </cite>
                    </footer>
                  </motion.article>)}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 mt-10 sm:mt-12 lg:mt-16">
            {/* Previous Button */}
            <button onClick={goToPrev} disabled={currentIndex === 0} aria-label="Vorheriges Testimonial" className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full 
                       border-2 border-[#7A7568]/20 text-[#7A7568] 
                       transition-all duration-300 ease-in-out
                       hover:border-[#7A7568]/40 hover:bg-[#7A7568]/5
                       focus:outline-none focus:ring-2 focus:ring-[#7A7568]/40 focus:ring-offset-2 focus:ring-offset-white
                       disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-[#7A7568]/20 disabled:hover:bg-transparent
                       motion-safe:hover:scale-105 motion-safe:active:scale-95">
              <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 group-hover:-translate-x-0.5" strokeWidth={1.5} />
            </button>

            {/* Progress Indicator */}
            <div className="flex items-center gap-2">
              <span className="text-sm sm:text-base text-[#7A7568] font-['Montserrat',_sans-serif] font-light" style={{
              color: "#4d83a4"
            }}>
                {currentIndex + 1} / {maxIndex + 1}
              </span>
            </div>

            {/* Next Button */}
            <button onClick={goToNext} disabled={currentIndex >= maxIndex} aria-label="Nächstes Testimonial" className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full 
                       border-2 border-[#7A7568]/20 text-[#7A7568] 
                       transition-all duration-300 ease-in-out
                       hover:border-[#7A7568]/40 hover:bg-[#7A7568]/5
                       focus:outline-none focus:ring-2 focus:ring-[#7A7568]/40 focus:ring-offset-2 focus:ring-offset-white
                       disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-[#7A7568]/20 disabled:hover:bg-transparent
                       motion-safe:hover:scale-105 motion-safe:active:scale-95" style={{
            borderTopWidth: "2px",
            borderTopColor: "#4d83a4",
            borderRightWidth: "2px",
            borderRightColor: "#4d83a4",
            borderBottomWidth: "2px",
            borderBottomColor: "#4d83a4",
            borderLeftWidth: "2px",
            borderLeftColor: "#4d83a4",
            borderStyle: "solid",
            borderRadius: "9999px",
            color: "#4d83a4"
          }}>
              <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Accessibility Instructions (visually hidden) */}
        <div className="sr-only" aria-live="polite" aria-atomic="true">
          Showing testimonial {currentIndex + 1} of {testimonials.length}. Use arrow keys or swipe to navigate.
        </div>
      </div>
    </section>;
};