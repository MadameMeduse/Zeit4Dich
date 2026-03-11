"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Share2, Mail, Clock, Calendar, ChevronRight } from 'lucide-react';
import { ARTICLE_DB } from '@/lib/articledata';

type PageType = 'home' | 'about' | 'events' | 'contact' | 'atem' | 'massage' | 'inspiration';
type CategoryType = 'meditationen' | 'lifestyle' | 'blog';

interface ArticlePageProps {
  articleId: string;
  category: CategoryType; // ADD THIS LINE
  onNavigate?: (page: PageType) => void;
  onBack?: () => void;
  onArticleClick?: (articleId: string, category: CategoryType) => void;
}

export default function ArticlePage({
  articleId,
  onNavigate,
  category,
  onBack,
  onArticleClick
}: ArticlePageProps) {
  const [progress, setProgress] = useState(0);
  const article = useMemo(() => ARTICLE_DB[articleId], [articleId]);

  const relatedArticles = useMemo(() => {
    if (!article) return [];
    return Object.values(ARTICLE_DB)
      .filter(item => item.category === article.category && item.id !== article.id)
      .slice(0, 3);
  }, [article]);

  useEffect(() => {
    const handleScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress((window.scrollY / height) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!article) return <div className="p-20 text-center font-['Montserrat'] text-[#4A4440]">Artikel nicht gefunden.</div>;

  return (
    <div className="min-h-screen bg-[#c9c4ba] pb-32 selection:bg-[#4d83a4]/20 selection:text-[#4d83a4]">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-[100] bg-black/5">
        <motion.div 
          className="h-full bg-[#4d83a4] shadow-[0_0_10px_rgba(77,131,164,0.5)]" 
          style={{ scaleX: progress / 100, transformOrigin: "left" }} 
        />
      </div>

      {/* Floating Zurück Button */}
      <AnimatePresence>
        {progress > 5 && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={onBack}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 md:left-12 md:translate-x-0 z-50 flex items-center gap-3 px-6 py-4 bg-[#4d83a4] shadow-2xl rounded-full text-white font-medium hover:bg-[#4d83a4] transition-all"
          >
            <ArrowLeft size={18} /> <span className="text-sm tracking-wide">ZURÜCK</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Hero Header */}
      <header className="relative h-[75dvh] w-full overflow-hidden">
        <motion.img 
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src={article.heroImage} 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-[#c9c4ba]" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 mt-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-5 py-1.5 border border-white/30 backdrop-blur-md text-white text-[10px] font-bold rounded-full uppercase tracking-[0.3em] mb-8"
          >
            {article.categoryLabel}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-['Playfair_Display'] text-white mb-6 max-w-5xl leading-tight"
          >
            {article.title}
          </motion.h1>
          {article.subtitle && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-white/80 text-lg md:text-2xl font-['Playfair_Display'] italic max-w-2xl"
            >
              {article.subtitle}
            </motion.p>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto py-10 px-4 sm:px-6 -mt-32 relative z-10">
        <div className="bg-[#fcfaf7] rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] overflow-hidden">
          
          {/* Metadata Bar */}
          <div className="flex flex-wrap items-center justify-center gap-8 py-5 px-8 border-b border-stone-100 bg-stone-50/50">
            <div className="flex items-center gap-2 text-stone-400 text-xs font-semibold tracking-widest uppercase">
              <Calendar size={14} className="text-[#4d83a4]" /> {article.date}
            </div>
            <div className="flex items-center gap-2 text-stone-400 text-xs font-semibold tracking-widest uppercase">
              <Clock size={14} className="text-[#4d83a4]" /> 5 Min. Lesezeit
            </div>
          </div>

{/* Article Body Container */}
<div className="bg-white py-5 md:py-10 px-6 sm:px-12 md:px-24">
<article 
    className="article-container"
    dangerouslySetInnerHTML={{ __html: article.content }}
  />




            {/* Premium CTA Footer */}
            <div className="mt-24 p-12 bg-stone-100 rounded-[2.5rem] text-center relative overflow-hidden group">
              <h4 className="font-['Playfair_Display'] text-3xl md:text-4xl mb-6 text-[#4A4440]">
                Lust auf eine <span className="text-[#4d83a4]">Atemreise</span>?
              </h4>
              <p className="text-stone-500 mb-10 max-w-lg mx-auto font-light leading-relaxed">
                Spüre die Kraft deines Atems in einer geführten Einzelsitzung.
              </p>
              <button 
                onClick={() => onNavigate?.('contact')}
                className="px-12 py-5 bg-[#4d83a4] text-white rounded-full font-bold shadow-xl shadow-[#4d83a4]/20 hover:bg-[#3d6b88] hover:scale-105 transition-all flex items-center gap-3 mx-auto"
              >
                Jetzt Termin anfragen <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* RELATED ARTICLES SECTION */}
        {relatedArticles.length > 0 && (
          <section className="mt-32">
            <h3 className="font-['Playfair_Display'] text-4xl text-[#4A4440] mb-12">Ähnliche Inspirationen</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {relatedArticles.map((item) => (
                <motion.div 
                  key={item.id}
                  whileHover={{ y: -12 }}
                  onClick={() => onArticleClick?.(item.id, item.category)}
                  className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer group border border-stone-100"
                >
                  <div className="h-56 overflow-hidden relative">
                    <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-8">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#4d83a4] font-bold block mb-4">{item.categoryLabel}</span>
                    <h4 className="font-['Playfair_Display'] text-2xl mb-4 text-[#4A4440] group-hover:text-[#4d83a4] transition-colors leading-snug">{item.title}</h4>
                    <p className="text-sm text-stone-400 font-light line-clamp-2 leading-relaxed">{item.excerpt}</p>
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