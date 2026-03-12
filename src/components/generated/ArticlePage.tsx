"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, ChevronRight } from 'lucide-react';
import { ARTICLE_DB } from '@/lib/articledata';

/**
 * Types and Interfaces
 */
type PageType = 'home' | 'about' | 'events' | 'contact' | 'atem' | 'massage' | 'inspiration';
type CategoryType = 'meditationen' | 'lifestyle' | 'blog';

interface ArticlePageProps {
  articleId: string;
  category: CategoryType;
  onNavigate?: (page: PageType) => void;
  onBack?: () => void;
  onArticleClick?: (articleId: string, category: CategoryType) => void;
}

/**
 * ArticlePage Component
 * Optimized for readability, accessibility, and tablet/mobile responsiveness.
 */
export default function ArticlePage({
  articleId,
  onNavigate,
  onBack,
  onArticleClick
}: ArticlePageProps) {
  const [progress, setProgress] = useState(0);

  // Memoize article data to prevent unnecessary re-renders
  const article = useMemo(() => ARTICLE_DB[articleId], [articleId]);

  // Logic for "Related Articles" (Same category, excluding current)
  const relatedArticles = useMemo(() => {
    if (!article) return [];
    return Object.values(ARTICLE_DB)
      .filter(item => item.category === article.category && item.id !== article.id)
      .slice(0, 3);
  }, [article]);

  // Scroll Progress Logic
  useEffect(() => {
    const handleScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      if (height > 0) {
        setProgress((window.scrollY / height) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#c9c4ba] font-sans text-stone-600">
        <p>Artikel nicht gefunden.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#c9c4ba] pb-24 selection:bg-[#4d83a4]/20 selection:text-[#4d83a4]">
      
      {/* 1. Progress Bar - Fixed at top */}
      <div 
        className="fixed top-0 left-0 w-full h-1 z-[100] bg-black/5" 
        role="progressbar" 
        aria-valuenow={progress} 
        aria-valuemin={0} 
        aria-valuemax={100}
      >
        <motion.div 
          className="h-full bg-[#4d83a4] shadow-[0_0_10px_rgba(77,131,164,0.3)]" 
          style={{ scaleX: progress / 100, transformOrigin: "left" }} 
        />
      </div>

{/* 2. Fixed Zurück Button - Bottom Left, Non-Stretched */}
<AnimatePresence>
        {progress > 5 && (
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            onClick={onBack}
            className="fixed bottom-8 left-6 z-[110] flex items-center gap-3 px-6 py-4 bg-[#4d83a4] text-white rounded-full shadow-2xl hover:bg-[#3d6b88] transition-all active:scale-95 focus:ring-4 focus:ring-[#4d83a4]/30 outline-none w-fit"
          >
            <ArrowLeft size={18} />
            <span className="text-xs font-bold tracking-[0.2em]">ZURÜCK</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* 3. Hero Header - Dynamic height for tablet/mobile */}
      <header className="relative h-[65dvh] md:h-[75dvh] w-full overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          src={article.heroImage} 
          className="absolute inset-0 w-full h-full object-cover" 
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-[#c9c4ba]" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 mt-12">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-5 py-1.5 border border-white/30 backdrop-blur-md text-white text-[10px] font-bold rounded-full uppercase tracking-[0.3em] mb-6"
          >
            {article.categoryLabel}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl font-['Playfair_Display'] text-white mb-6 max-w-4xl leading-[1.1]"
          >
            {article.title}
          </motion.h1>
          {article.subtitle && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-white/80 text-lg md:text-2xl font-['Playfair_Display'] italic max-w-2xl px-4"
            >
              {article.subtitle}
            </motion.p>
          )}
        </div>
      </header>

      {/* 4. Main Article Section */}
      <main className="max-w-5xl mx-auto py-10 px-4 sm:px-8 md:px-12 -mt-24 relative z-10">
        <div className="bg-[#fcfaf7] rounded-[2.5rem] md:rounded-[4rem] shadow-2xl overflow-hidden">
          
          {/* Metadata Bar */}
          <div className="flex flex-row items-center justify-center gap-8 py-6 border-b border-stone-100 bg-stone-50/50">
            <div className="flex items-center gap-2 text-stone-400 text-[10px] font-bold tracking-widest uppercase">
              <Calendar size={14} className="text-[#4d83a4]" /> {article.date}
            </div>
            <div className="flex items-center gap-2 text-stone-400 text-[10px] font-bold tracking-widest uppercase">
              <Clock size={14} className="text-[#4d83a4]" /> 5 Min. Lesezeit
            </div>
          </div>

          {/* Article Body */}
          <div className="px-6 pt-1 pb-6 md:px-10 md:pt-2 md:pb-10 bg-white">
            <article className={`
              prose prose-stone mx-auto
              /* Senior Constraint: Keep text measure readable on wide screens/tablets */
              max-w-2xl lg:max-w-3xl
              sm:prose-lg lg:prose-xl 
              
              /* Heading Styles */
              prose-h2:font-['Playfair_Display'] prose-h2:text-3xl prose-h2:text-stone-800 prose-h2:mt-16 prose-h2:mb-8
              prose-h3:font-['Playfair_Display'] prose-h3:text-2xl prose-h3:text-stone-800 prose-h3:mt-12
              
              /* Body Text Styles */
              prose-p:leading-[1.8] prose-p:text-stone-700 prose-p:mb-8
              prose-li:text-stone-700
              prose-a:text-[#4d83a4] prose-a:font-medium hover:prose-a:text-stone-900 transition-colors
              
              /* Media Styles */
              prose-img:rounded-[2rem] prose-img:shadow-xl prose-img:my-16
              
              /* List Customization */
              prose-li:marker:text-[#4d83a4]
            `}>
              <div 
                dangerouslySetInnerHTML={{ __html: article.content }} 
                className="article-html-content"
              />
            </article>

            {/* Premium CTA Box */}
            <section className="mt-24 p-8 md:p-16 bg-stone-50 rounded-[3rem] text-center border border-stone-100 relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="font-['Playfair_Display'] text-3xl md:text-4xl mb-6 text-stone-800">
                  Lust auf eine <span className="text-[#4d83a4]">Atemreise</span>?
                </h4>
                <p className="text-stone-500 mb-10 max-w-md mx-auto leading-relaxed">
                  Spüre die Kraft deines Atems in einer geführten Einzelsitzung – persönlich oder online.
                </p>
                <button 
                  onClick={() => onNavigate?.('contact')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-12 py-5 bg-[#4d83a4] text-white rounded-full font-bold shadow-xl shadow-[#4d83a4]/20 hover:bg-[#3d6b88] transition-all active:scale-95"
                >
                  Jetzt Termin anfragen <ChevronRight size={20} />
                </button>
              </div>
            </section>
          </div>
        </div>

        {/* 5. Related Content Grid */}
        {relatedArticles.length > 0 && (
          <section className="mt-32 px-4">
            <h3 className="font-['Playfair_Display'] text-3xl md:text-4xl text-stone-800 mb-12 text-center md:text-left">
              Ähnliche Inspirationen
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {relatedArticles.map((item) => (
                <motion.div 
                  key={item.id}
                  whileHover={{ y: -8 }}
                  onClick={() => onArticleClick?.(item.id, item.category)}
                  className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer group border border-stone-100"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img 
                      src={item.thumbnail} 
                      alt="" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                  </div>
                  <div className="p-8">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#4d83a4] font-bold block mb-4">
                      {item.categoryLabel}
                    </span>
                    <h4 className="font-['Playfair_Display'] text-2xl mb-4 text-stone-800 group-hover:text-[#4d83a4] transition-colors leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-sm text-stone-400 font-light line-clamp-2 leading-relaxed">
                      {item.excerpt}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}