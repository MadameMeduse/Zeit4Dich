"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';

type PageType = 'home' | 'about' | 'events' | 'contact' | 'atem' | 'massage' | 'inspiration';
type CategoryType = 'meditationen' | 'lifestyle' | 'blog';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: CategoryType;
  date: string;
  thumbnail: string;
}

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

export default function InspirationPage({ onNavigate, onArticleClick }: { 
  onNavigate?: (page: PageType) => void; 
  onArticleClick?: (id: string, cat: CategoryType) => void;
}) {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('meditationen');

  const categories = {
    meditationen: {
      title: 'Meditationen',
      description: 'Kurz-Meditationen & Visualisierungen – kleine Auszeiten für zwischendurch, die dich zentrieren und dein inneres Gleichgewicht stärken.',
      articles: [
        { id: 'm1', title: 'Lichtfeld-Aktivierung', excerpt: 'Erinnere dich an dein eigenes Licht – eine Reise in dein energetisches Feld.', category: 'meditationen' as CategoryType, date: '21. Dez 2025', thumbnail: 'images/innerlight.webp' },
        { id: 'm2', title: 'Feld-Reset', excerpt: 'Klare Schritte für einen energetischen Reset mit Fokus auf Schutz und Abgrenzung.', category: 'meditationen' as CategoryType, date: '18. Dez 2025', thumbnail: 'images/boundaries.webp' },
        { id: 'm3', title: 'Zurück in die Mitte', excerpt: 'Stille finden und dich an dein schöpferisches Selbst erinnern.', category: 'meditationen' as CategoryType, date: '15. Dez 2025', thumbnail: 'images/creative2.webp' }
      ]
    },
    lifestyle: {
      title: 'Lifestyle',
      description: 'Einfache Praktiken und Rituale, die dich erden und deinen Alltag mit Klarheit und bewusster Intention bereichern.',
      articles: [
        { id: 'd1', title: 'Wasser-Detox-Ritual', excerpt: 'Wirkungsvolles DIY-Ritual für zuhause – Detox mit bewusster Intention.', category: 'lifestyle' as CategoryType, date: '20. Dez 2025', thumbnail: 'images/wasserdetox.webp' },
        { id: 'd2', title: 'Gesprächs-Magnet', excerpt: 'Nutze dein Energiefeld, um wichtige Gespräche positiv vorzuprogrammieren.', category: 'lifestyle' as CategoryType, date: '17. Dez 2025', thumbnail: 'https://media.istockphoto.com/id/1050287390/photo/businesswoman-and-businessman-hr-manager-interviewing-woman.jpg?s=612x612&w=0&k=20&c=dRUcgzI-tdZIzbl-ezMitdmgyuYlpT0ncfcOCZBLL9k=' },
        { id: 'd3', title: 'Realitätsgestaltung', excerpt: 'Gestalte dein Leben als Resonanzfeld durch die Verbindung von Atem und Geist.', category: 'lifestyle' as CategoryType, date: '14. Dez 2025', thumbnail: 'images/reality.png' }
      ]
    },
    blog: {
      title: 'Blog',
      description: 'Persönliche Gedanken und Impulse, die helfen, bewusster zu leben und dein volles Potenzial zu entfalten.',
      articles: [
        { id: 'b1', title: 'Die Kunst des Ankommens', excerpt: 'Wie wir im Hier und Jetzt wirklich präsent sein können.', category: 'blog' as CategoryType, date: '19. Dez 2025', thumbnail: 'images/arrive.webp' },
        { id: 'b2', title: 'Selbstfürsorge als Basis', excerpt: 'Warum gut für sich zu sorgen die Voraussetzung für alles andere ist.', category: 'blog' as CategoryType, date: '16. Dez 2025', thumbnail: 'images/selfcare.webp' },
        { id: 'b3', title: 'Der Atem als Anker', excerpt: 'Wie bewusstes Atmen uns stabil durch herausfordernde Zeiten trägt.', category: 'blog' as CategoryType, date: '13. Dez 2025', thumbnail: 'images/ancor.webp' }
      ]
    }
  };

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
          {(Object.keys(categories) as CategoryType[]).map((key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-8 py-3 rounded-full font-['Montserrat'] font-semibold transition-all duration-300 ${
                activeCategory === key 
                ? 'bg-[#4d83a4] text-white shadow-lg scale-105' 
                : 'bg-white/20 text-white hover:bg-white/30 border border-white/40'
              }`}
            >
              {categories[key].title}
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
              {categories[activeCategory].description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          <AnimatePresence mode="popLayout">
            {categories[activeCategory].articles.map((article, index) => (
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
  
  {/* The Gradient: Slightly darker on mobile to ensure immediate text legibility */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 lg:via-black/20 to-transparent" />
  
  <div className="relative p-6 sm:p-8 text-white">
    <span className="text-xs font-bold font-['Montserrat'] uppercase tracking-widest text-[#4d83a4] mb-2 block">
      {article.date}
    </span>
    
    <h3 className="text-2xl font-['Playfair_Display'] font-light mb-3 leading-tight">
      {article.title}
    </h3>

    {/* MOBILE FIX: 
        - On mobile (default), opacity is 90 and translate-y is 0 (visible).
        - On desktop (lg:), we hide it (opacity-0) and slide it down (translate-y-4).
        - It then reveals on hover (group-hover). 
    */}
    <div className="space-y-4 opacity-90 lg:opacity-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-500">
      <p className="text-sm font-['Montserrat'] line-clamp-2 lg:line-clamp-3">
        {article.excerpt}
      </p>
      
      <div className="flex items-center gap-2 text-sm font-semibold text-[#4d83a4] lg:text-white">
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