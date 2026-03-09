"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
type CategoryType = 'meditationen' | 'lifestyle' | 'blog';
interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: CategoryType;
  thumbnail: string;
}
export const InspirationSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const animDuration = isMobile ? 0.2 : 0.8;
  const cardDuration = isMobile ? 0.2 : 0.6;

  // Featured articles - one newest from each category (Meditation, DIY, Blog)
  const featuredArticles: Article[] = [{
    id: 'm1',
    title: 'Realität kreieren',
    excerpt: 'Eine kraftvolle Visualisierung, um deine Wunschrealität bewusst zu gestalten und manifestieren.',
    category: 'meditationen',
    date: '21. Dez 2025',
    thumbnail: 'images/visualisation.webp'
  }, {
    id: 'd1',
    title: 'Wasser-Detox-Ritual',
    excerpt: 'Ein einfaches, wirkungsvolles Do-It-Yourself-Ritual für zuhause – Detox mit Wasser, Affirmationen und bewusster Intention.',
    category: 'lifestyle',
    date: '20. Dez 2025',
    thumbnail: 'images/wasserdetox.webp'
  }, {
    id: 'b1',
    title: 'Die Kunst des Ankommens',
    excerpt: 'Gedanken darüber, wie wir im Hier und Jetzt wirklich ankommen können und präsent sein.',
    category: 'blog',
    date: '19. Dez 2025',
    thumbnail: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&h=600&fit=crop'
  }];
  const desktopCardsToShow = 3;
  const maxDesktopIndex = Math.max(0, featuredArticles.length - desktopCardsToShow);
  const handlePrevious = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };
  const handleNext = () => {
    setCurrentIndex(prev => Math.min(maxDesktopIndex, prev + 1));
  };
  const handleCardClick = (articleId: string, category: CategoryType) => {
    // Navigate to article detail page
    console.log(`Navigating to article: ${articleId} in category: ${category}`);
  };
  const getCategoryLabel = (category: CategoryType): string => {
    const labels = {
      'meditationen': 'Meditationen',
      'lifestyle': 'Lifestyle',
      'blog': 'Blog'
    };
    return labels[category];
  };
  return <section id="inspiration" className="py-20 sm:py-28 lg:py-36 px-6 sm:px-8 lg:px-12 bg-white" aria-labelledby="inspiration-heading" style={{
    paddingTop: "100px",
    paddingBottom: "0px"
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
        duration: animDuration
      }} viewport={{
        once: true
      }} className="mb-12 sm:mb-16 lg:mb-20 text-center">
          <h2 id="inspiration-heading" className="text-3xl sm:text-4xl lg:text-5xl text-[#7A7568] font-light tracking-wide font-['Playfair_Display'] leading-tight mb-8 sm:mb-10" style={{
          fontStyle: "normal",
          textAlign: "center",
          justifyContent: "center",
          fontWeight: "700",
          fontSize: 'clamp(32px, 4.5vw, 50px)',
          lineHeight: '1.3',
          overflowWrap: 'break-word',
          letterSpacing: "-0.01em",
          paddingLeft: "15px",
          paddingRight: "15px"
        }}>
            INSPIRATION
          </h2>
          
          {/* Introductory Text */}
          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6 text-[#7A7568]">
            <p className="text-lg sm:text-xl lg:text-2xl font-light leading-relaxed font-['Montserrat',_sans-serif]">
              Kurz-Meditationen, praktische Tipps und Blogtexte
            </p>
            
            <div className="space-y-4 text-base sm:text-lg leading-loose font-['Montserrat',_sans-serif] font-light">
              <p>
                Das ist eine kleine Oase für Geist, Herz und Körper – liebevoll von mir zusammengestellt, um
                dich im Alltag mit praktischen Werkzeugen zu unterstützen und Impulse zu schenken. Für Dich.
              </p>
              
              <p className="font-normal" style={{
              display: "none"
            }}>
                Du bist wertvoll – es ist Zeit, dir etwas Gutes zu tun.
                <br />
                Ich freue mich, dich auf deiner Reise zu begleiten.
              </p>
            </div>
          </div>
        </motion.header>

        {/* Featured Articles Slider */}
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
      }} className="mb-12 sm:mb-16 lg:mb-20 relative">
          
          {/* Desktop: 3-Column Slider with Navigation */}
          <div className="hidden sm:block relative">
            {/* Desktop Navigation Arrows */}
            <button onClick={handlePrevious} disabled={currentIndex === 0} className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 bg-white hover:bg-gray-50 text-[#7A7568] rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 ${currentIndex === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} aria-label="Previous articles">
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button onClick={handleNext} disabled={currentIndex >= maxDesktopIndex} className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 bg-white hover:bg-gray-50 text-[#7A7568] rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 ${currentIndex >= maxDesktopIndex ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} aria-label="Next articles">
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Desktop Grid with Transform Transition */}
            <div className="overflow-hidden p-2">
              <div className="grid grid-cols-3 gap-6 lg:gap-8 xl:gap-10 transition-transform duration-500 ease-out" style={{
              transform: `translateX(-${currentIndex * (100 / desktopCardsToShow)}%)`
            }}>
                {featuredArticles.map((article, index) => <motion.article key={article.id} initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5,
                delay: 0.1 * index
              }} viewport={{
                once: true
              }} className="bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-md cursor-pointer
                           transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col" onClick={() => handleCardClick(article.id, article.category)} role="button" tabIndex={0} aria-label={`Artikel lesen: ${article.title}`}>
                    {/* Date Header */}
                    <div className="px-6 pt-5 pb-3">
                      <p className="text-xs sm:text-sm text-[#7A7568]/60 font-['Montserrat',_sans-serif] font-light tracking-wide uppercase">
                        {article.date}
                      </p>
                    </div>

                    {/* Thumbnail Image with Title Overlay */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img src={article.thumbnail} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" loading="lazy" />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                      {/* Title Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                        <h3 className="text-xl lg:text-2xl text-white font-['Playfair_Display'] font-light leading-snug">
                          {article.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="px-6 py-5 flex-grow">
                      <p className="text-sm lg:text-base text-[#7A7568]/80 font-['Montserrat',_sans-serif] font-light leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>

                    {/* Read More Button */}
                    <div className="px-6 pb-6">
                      <button className="group flex items-center gap-2 text-[#7A7568] font-['Montserrat',_sans-serif] font-normal text-sm lg:text-base
                               transition-all duration-300 hover:gap-3" aria-label={`${article.title} weiterlesen`}>
                        Mehr lesen
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                    </div>
                  </motion.article>)}
              </div>
            </div>
          </div>

          {/* Mobile: Touch-friendly Horizontal Slider with visible arrows */}
          <div className="sm:hidden relative">
            {/* Mobile Navigation Arrows */}
            <button onClick={handlePrevious} disabled={currentIndex === 0} className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-[#7A7568] rounded-full p-2 shadow-lg transition-all duration-300 ${currentIndex === 0 ? 'opacity-50' : 'opacity-100'}`} aria-label="Previous articles">
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button onClick={handleNext} disabled={currentIndex >= featuredArticles.length - 1} className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-[#7A7568] rounded-full p-2 shadow-lg transition-all duration-300 ${currentIndex >= featuredArticles.length - 1 ? 'opacity-50' : 'opacity-100'}`} aria-label="Next articles">
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="overflow-x-auto scrollbar-hide -mx-4 px-4" onScroll={e => {
            const scrollLeft = e.currentTarget.scrollLeft;
            const cardWidth = e.currentTarget.scrollWidth / featuredArticles.length;
            const newIndex = Math.round(scrollLeft / cardWidth);
            if (newIndex !== currentIndex) {
              setCurrentIndex(newIndex);
            }
          }}>
              <div className="flex gap-4 pb-4" style={{
              scrollSnapType: 'x mandatory'
            }}>
                {featuredArticles.map((article, index) => <motion.article key={article.id} initial={{
                opacity: 0,
                x: 20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} transition={{
                duration: 0.5,
                delay: 0.1 * index
              }} viewport={{
                once: true
              }} className="bg-white rounded-2xl overflow-hidden shadow-md flex-shrink-0
                             w-[83vw] max-w-[20rem] cursor-pointer flex flex-col
                             transition-all duration-300 hover:shadow-xl" style={{
                scrollSnapAlign: 'start'
              }} onClick={() => handleCardClick(article.id, article.category)} role="button" tabIndex={0} aria-label={`Artikel lesen: ${article.title}`}>
                    {/* Date Header */}
                    <div className="px-5 pt-4 pb-2">
                      <p className="text-xs text-[#7A7568]/60 font-['Montserrat',_sans-serif] font-light tracking-wide uppercase">
                        {article.date}
                      </p>
                    </div>

                    {/* Thumbnail Image with Title Overlay */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img src={article.thumbnail} alt={article.title} className="w-full h-full object-cover" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-lg text-white font-['Playfair_Display'] font-light leading-snug">
                          {article.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="px-5 py-4 flex-grow">
                      <p className="text-sm text-[#7A7568]/80 font-['Montserrat',_sans-serif] font-light leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>

                    {/* Read More Button */}
                    <div className="px-5 pb-5">
                      <button className="group flex items-center gap-2 text-[#7A7568] font-['Montserrat',_sans-serif] font-normal text-sm" aria-label={`${article.title} weiterlesen`}>
                        Mehr lesen
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.article>)}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.4
      }} viewport={{
        once: true
      }} className="flex justify-center">
          <a href="#inspiration-page" className="inline-block px-8 sm:px-10 lg:px-12 py-3 sm:py-4 text-[#7A7568] font-['Montserrat',_sans-serif] 
                       text-base lg:text-lg font-light tracking-wide
                       transition-all duration-300 hover:text-[#5A5348] underline underline-offset-4
                       focus:outline-none focus:ring-2 focus:ring-[#7A7568] focus:ring-offset-2 focus:ring-offset-[#ffffff] rounded-full" aria-label="Zur vollständigen Inspiration-Seite" style={{
          background: "#4d83a4",
          color: "#ffffff",
          fontWeight: "400",
          fontStyle: "normal"
        }}>
            Zur Inspiration-Seite
          </a>
        </motion.div>
      </div>

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>;
};