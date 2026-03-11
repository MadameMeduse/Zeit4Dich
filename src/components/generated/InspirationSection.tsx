"use client";

import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { ARTICLE_DB } from '@/lib/articledata';

type CategoryType = 'meditationen' | 'lifestyle' | 'blog';
type PageType = 'home' | 'about' | 'events' | 'contact' | 'atem' | 'massage' | 'inspiration';

// PROPS ADDED HERE
interface InspirationSectionProps {
  onNavigate?: (page: PageType) => void;
  onArticleClick?: (id: string, category: CategoryType) => void;
}

export const InspirationSection: React.FC<InspirationSectionProps> = ({ 
  onNavigate, 
  onArticleClick 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const featuredArticles = useMemo(() => {
    const categories: CategoryType[] = ['meditationen', 'lifestyle', 'blog'];
    return categories.map(cat => {
      return Object.values(ARTICLE_DB)
        .filter(article => article.category === cat)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];
    }).filter(Boolean);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const desktopCardsToShow = 3;
  const maxDesktopIndex = Math.max(0, featuredArticles.length - desktopCardsToShow);

  const handlePrevious = () => setCurrentIndex(prev => Math.max(0, prev - 1));
  const handleNext = () => setCurrentIndex(prev => Math.min(maxDesktopIndex, prev + 1));

  return (
    <section id="inspiration" className="py-24 sm:py-32 bg-[#FCFAF8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-[#4d83a4] font-['Playfair_Display'] font-bold tracking-tight mb-6"
              style={{ fontSize: 'clamp(32px, 5vw, 48px)' }}>
            INSPIRATION
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-[#7A7568] text-lg sm:text-xl font-['Montserrat'] font-light leading-relaxed">
              Kurz-Meditationen, praktische Tipps und Blogtexte – eine kleine Oase für Geist, Herz und Körper.
            </p>
          </div>
        </motion.header>

        <div className="relative group">
          <div className="hidden md:flex absolute -top-16 right-0 gap-4">
            <button 
              onClick={handlePrevious} 
              disabled={currentIndex === 0}
              className="p-2 border border-stone-200 rounded-full disabled:opacity-30 transition-colors hover:bg-stone-100"
            >
              <ChevronLeft className="w-5 h-5 text-stone-600" />
            </button>
            <button 
              onClick={handleNext} 
              disabled={currentIndex >= maxDesktopIndex}
              className="p-2 border border-stone-200 rounded-full disabled:opacity-30 transition-colors hover:bg-stone-100"
            >
              <ChevronRight className="w-5 h-5 text-stone-600" />
            </button>
          </div>

          <div className="overflow-hidden">
            <motion.div 
              animate={{ x: `-${currentIndex * (100 / (isMobile ? 1 : desktopCardsToShow))}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex gap-6 lg:gap-8"
            >
              {featuredArticles.map((article) => (
                <div 
                  key={article.id} 
                  // ONCLICK ADDED HERE
                  onClick={() => onArticleClick?.(article.id, article.category)}
                  className="min-w-full sm:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-22px)] group/card cursor-pointer"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-stone-200 mb-6 shadow-sm group-hover/card:shadow-xl transition-shadow duration-500">
                    <img 
                      src={article.thumbnail} 
                      alt={article.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105" 
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-[10px] uppercase tracking-widest font-bold text-[#4d83a4]">
                        {article.categoryLabel}
                      </span>
                    </div>
                  </div>

                  <div className="px-2">
                    <h3 className="text-2xl font-['Playfair_Display'] text-[#2c4b5e] mb-3 group-hover/card:text-[#4d83a4] transition-colors leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-stone-500 font-['Montserrat'] font-light text-sm leading-relaxed mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-[#4d83a4] text-sm font-semibold uppercase tracking-wider">
                      <span>Lesen</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/card:translate-x-1" />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="mt-20 flex justify-center">
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            // NAVIGATION TRIGGERED HERE
            onClick={() => onNavigate?.('inspiration')}
            className="px-10 py-4 bg-[#4d83a4] text-white rounded-full font-['Montserrat'] font-medium tracking-wide shadow-lg shadow-blue-900/10 hover:bg-[#3d6a85] transition-all"
          >
            Alle Artikel ansehen
          </motion.button>
        </div>
      </div>
    </section>
  );
};