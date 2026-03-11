"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { ARTICLE_DB } from '@/lib/articledata'; 

type PageType = 'home' | 'about' | 'events' | 'contact' | 'atem' | 'massage' | 'inspiration';
type CategoryType = 'meditationen' | 'lifestyle' | 'blog';

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const CATEGORY_META = {
  meditationen: {
    title: 'Meditationen',
    description: 'Kurz-Meditationen & Visualisierungen – kleine Auszeiten für zwischendurch, die dich zentrieren und dein inneres Gleichgewicht stärken.',
  },
  lifestyle: {
    title: 'Lifestyle',
    description: 'Einfache Praktiken und Rituale, die dich erden und deinen Alltag mit Klarheit und bewusster Intention bereichern.',
  },
  blog: {
    title: 'Blog',
    description: 'Persönliche Gedanken und Impulse, die helfen, bewusster zu leben und dein volles Potenzial zu entfalten.',
  }
};

export default function InspirationPage({ onNavigate, onArticleClick }: { 
  onNavigate?: (page: PageType) => void; 
  onArticleClick?: (id: string, cat: CategoryType) => void;
}) {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('meditationen');

  const filteredArticles = useMemo(() => {
    return Object.values(ARTICLE_DB).filter(article => article.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-[#c9c4ba]">
      {/* Hero Section */}
      <section className="relative min-h-[70dvh] flex items-center justify-center pt-[128px] px-4">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://storage.googleapis.com/storage.magicpath.ai/user/351284685155995648/assets/4344ac1d-0f13-4155-9a09-4f33f3e13f43.jpg" 
            className="w-full h-full object-cover opacity-60 sepia-[0.15]" 
            alt="Inspiration"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <motion.div initial="hidden" animate="visible" variants={FADE_UP} className="relative z-10 text-center max-w-4xl text-white">
          <h1 className="font-['Playfair_Display'] text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            INSPIRATION
          </h1>
          <p className="font-['Montserrat'] text-lg sm:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
            Für Dich, zum Ankommen, Entspannen und Wachsen. Entdecke Oasen für Geist und Herz.
          </p>
        </motion.div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Category Navigation */}
        <nav className="flex flex-wrap justify-center gap-4 mb-12">
          {(Object.keys(CATEGORY_META) as CategoryType[]).map((key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-8 py-3 rounded-full font-['Montserrat'] font-semibold transition-all duration-300 ${
                activeCategory === key 
                ? 'bg-[#4d83a4] text-white shadow-lg scale-105' 
                : 'bg-white/20 text-white hover:bg-white/30 border border-white/40'
              }`}
            >
              {CATEGORY_META[key].title}
            </button>
          ))}
        </nav>

        {/* Category Description */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <p className="text-white text-lg sm:text-xl font-['Montserrat'] font-light italic opacity-90">
              {CATEGORY_META[activeCategory].description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredArticles.map((article, index) => (
              <motion.article
                key={article.id}
                variants={FADE_UP}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => onArticleClick?.(article.id, activeCategory)}
                className="group relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer shadow-xl border-4 border-white flex flex-col justify-end bg-white"
              >
                <img 
                  src={article.thumbnail} 
                  alt={article.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 lg:group-hover:scale-110" 
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#4d83a4]/95 via-[#4d83a4]/50 lg:via-[#4d83a4]/40 to-transparent" />
                
                <div className="relative p-6 sm:p-8 text-white">
                  <span className="text-xs font-bold font-['Montserrat'] uppercase tracking-widest text-white mb-2 block">
                    {article.date}
                  </span>
                  
                  <h3 className="text-2xl font-['Playfair_Display'] font-light mb-3 leading-tight">
                    {article.title}
                  </h3>

                  {/* PREVIEW TEXT: Always visible (opacity-90) */}
                  <div className="space-y-4">
                    <p className="text-sm font-['Montserrat'] line-clamp-2 lg:line-clamp-3 opacity-90">
                      {article.excerpt}
                    </p>
                    
                    {/* BUTTON: Hidden by default on desktop, shown on hover */}
                    <div className="flex items-center gap-2 text-sm font-semibold text-[#4d83a4] lg:text-white transition-all duration-300 lg:opacity-0 lg:translate-y-2 lg:group-hover:opacity-100 lg:group-hover:translate-y-0">
                      Mehr lesen <ChevronRight size={16} />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Brand Footer Info */}
        <motion.footer variants={FADE_UP} initial="hidden" whileInView="visible" className="mt-28 pt-16 border-t border-white/20 text-center text-white space-y-6">
          <p className="font-['Montserrat'] text-lg opacity-90 max-w-2xl mx-auto">
            Übungen und Meditationen basieren auf dem <span className="font-bold">UR-ATEM© Prozess</span>. 
            Begib dich Schritt für Schritt zu mehr Ruhe und Energie.
          </p>
          <button 
            onClick={() => onNavigate?.('contact')}
            className="px-10 py-4 bg-white text-[#4d83a4] rounded-full font-bold hover:bg-[#4d83a4] hover:text-white transition-all shadow-xl active:scale-95"
          >
            Individuelle Begleitung anfragen
          </button>
        </motion.footer>
      </div>
    </div>
  );
}