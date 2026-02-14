import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
type PageType = 'home' | 'about' | 'events' | 'contact' | 'atem' | 'massage' | 'inspiration';
type CategoryType = 'meditationen' | 'diy-praktiken' | 'blog';
interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: CategoryType;
  image?: string;
  date: string;
  thumbnail: string;
}
interface InspirationPageProps {
  onNavigate?: (page: PageType) => void;
  onArticleClick?: (articleId: string, category: CategoryType) => void;
}

/**
 * InspirationPage - Redesigned to Match Atem/Massage Visual Language
 * 
 * Features:
 * - Consistent brand blue (#4d83a4) accents throughout
 * - Increased hero padding to prevent navbar overlap
 * - Responsive typography with proper mobile/tablet scaling
 * - Enhanced tabs with brand blue active states and smooth scrolling
 * - Unified spacing and visual hierarchy
 * - Professional card hover effects matching other pages
 */
export default function InspirationPage({
  onNavigate,
  onArticleClick
}: InspirationPageProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('meditationen');

  // Category data with descriptions and articles
  const categories = {
    meditationen: {
      title: 'Meditationen',
      description: 'Kurz-Meditationen & Visualisierungen – kleine Auszeiten für zwischendurch, die dich zentrieren, Energie schenken und dein inneres Gleichgewicht stärken. Z.B. Realität kreieren, energetischer Schutz, von Angst zu Liebe, Trauerarbeit und vieles mehr.',
      articles: [{
        id: 'm1',
        title: 'Lichtfeld-Aktivierung',
        excerpt: 'Diese Meditation ist eine Erinnerung an dein eigenes Licht – sie führt dich in dein eigenes Lichtfeld, in dem Körper, Bewusstsein und Lebensenergie miteinander schwingen.',
        category: 'meditationen' as CategoryType,
        date: '21. Dez 2025',
        thumbnail: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop'
      }, {
        id: 'm2',
        title: 'Feld-Reset',
        excerpt: 'Eine klare Schritt-für-Schritt-Meditation für einen regelmäßigen Feld-Reset mit Fokus auf Atem, Schutz und bewusste Energieabgrenzung.',
        category: 'meditationen' as CategoryType,
        date: '18. Dez 2025',
        thumbnail: 'https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?w=800&h=600&fit=crop'
      }, {
        id: 'm3',
        title: 'Zurück in die Mitte',
        excerpt: 'Erinnerung an dein schöpferisches Selbst – eine kleine Praxis, um in die Stille zurückzukehren und dich zu erinnern, wer du bist.',
        category: 'meditationen' as CategoryType,
        date: '15. Dez 2025',
        thumbnail: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=800&h=600&fit=crop'
      }]
    },
    'diy-praktiken': {
      title: 'DIY-Praktiken',
      description: 'Do-it-yourself-Praktiken & Lifestyle-Tipps – einfache, alltagstaugliche Übungen, Rituale und Tricks, die dich erden, schützen, dir Klarheit verschaffen und deinen Tag bereichern. Z.B. Wasser-Detox-Ritual, Gesprächs-Magnet, Realitätsgestaltung, Heilkräuter-Ritual und weitere inspirierende Praktiken.',
      articles: [{
        id: 'd1',
        title: 'Wasser-Detox-Ritual',
        excerpt: 'Ein einfaches, wirkungsvolles Do-It-Yourself-Ritual für zuhause – Detox mit Wasser, Affirmationen und bewusster Intention.',
        category: 'diy-praktiken' as CategoryType,
        date: '20. Dez 2025',
        thumbnail: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop'
      }, {
        id: 'd2',
        title: 'Gesprächs-Magnet',
        excerpt: 'Lerne, wie du dein Bewusstseins-Energiefeld nutzt, um wichtige Gespräche vorzuprogrammieren. Erziele dein gewünschtes Outcome durch innere Ruhe und klare Intention.',
        category: 'diy-praktiken' as CategoryType,
        date: '17. Dez 2025',
        thumbnail: 'https://storage.googleapis.com/storage.magicpath.ai/user/351284685155995648/assets/6f5dc41f-50e9-4e96-a8c9-c58dfed44cfd.png'
      }, {
        id: 'd3',
        title: 'Realitätsgestaltung',
        excerpt: 'Erfahre, wie du dein Leben als Resonanzfeld gestaltest. Durch die Verbindung von Atemarbeit und schöpferischer Manifestation programmierst du deine Vision direkt in dein Energiefeld.',
        category: 'diy-praktiken' as CategoryType,
        date: '14. Dez 2025',
        thumbnail: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&h=600&fit=crop'
      }]
    },
    blog: {
      title: 'Blog',
      description: 'Mein Blog / Briefe & Texte – persönliche Gedanken, Geschichten und Impulse zu Themen, die helfen, bewusster zu leben, dich zu spüren und dein Potenzial zu entfalten.',
      articles: [{
        id: 'b1',
        title: 'Die Kunst des Ankommens',
        excerpt: 'Gedanken darüber, wie wir im Hier und Jetzt wirklich ankommen können und präsent sein.',
        category: 'blog' as CategoryType,
        date: '19. Dez 2025',
        thumbnail: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&h=600&fit=crop'
      }, {
        id: 'b2',
        title: 'Warum Selbstfürsorge kein Luxus ist',
        excerpt: 'Ein persönlicher Brief über die Notwendigkeit, gut für sich selbst zu sorgen und achtsam zu sein.',
        category: 'blog' as CategoryType,
        date: '16. Dez 2025',
        thumbnail: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop'
      }, {
        id: 'b3',
        title: 'Der Atem als Anker',
        excerpt: 'Wie bewusstes Atmen uns durch herausfordernde Zeiten trägt und stabilisiert.',
        category: 'blog' as CategoryType,
        date: '13. Dez 2025',
        thumbnail: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop'
      }]
    }
  };
  const currentCategoryData = categories[activeCategory];
  const handleArticleClick = (articleId: string) => {
    if (onArticleClick) {
      onArticleClick(articleId, activeCategory);
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
  return <div className="min-h-screen bg-gradient-to-b from-[#F5F3EF] to-[#EAE7E0]">
      
      {/* Hero Section with Increased Top Padding */}
      <section className="relative min-h-[75vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden pt-32 sm:pt-36 lg:pt-40 pb-16 px-4 sm:px-6 lg:px-8">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img src="https://storage.googleapis.com/storage.magicpath.ai/user/351284685155995648/assets/4344ac1d-0f13-4155-9a09-4f33f3e13f43.jpg" alt="Inspiration Hero" className="w-full h-full max-h-[70vh] md:max-h-none object-cover" style={{
          filter: 'sepia(0.15) saturate(0.8)',
          objectFit: "cover",
          objectPosition: "50% 50%",
          opacity: "1"
        }} />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F5F3EF]/70 via-[#F5F3EF]/50 to-[#EAE7E0]/90" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6 sm:space-y-8">
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
            <h1 className="font-['Playfair_Display'] text-3xl sm:text-5xl lg:text-6xl font-light text-[#4A4440] leading-tight mb-4 sm:mb-6" style={{
            fontSize: 'clamp(28px, 4.5vw, 60px)',
            lineHeight: '1.3',
            overflowWrap: 'break-word',
            hyphens: 'auto',
            padding: '0 15px'
          }}>Für Dich, zum Ankommen,<br />Entspannen und Wachsen</h1>
            
            <div className="w-24 h-px bg-[#4d83a4]/30 mx-auto mb-6 sm:mb-8" />
            
            <p className="font-['Montserrat'] text-base sm:text-lg lg:text-xl text-[#4A4440] max-w-3xl mx-auto leading-relaxed px-4">Hier findest Du kleine Oasen für Geist, Herz und Körper – liebevoll zusammengestellt, um dich zu unterstützen und zu begleiten.</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        
        {/* Introduction */}
        <motion.header {...fadeInUp} className="mb-12 sm:mb-16 lg:mb-20 text-center" style={{
        display: "none"
      }}>
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-5 lg:space-y-6 text-[#6B6560]">
            <p className="text-sm sm:text-base lg:text-lg font-light leading-relaxed font-['Montserrat']">
              Ganz gleich, ob Du einen Moment der Ruhe suchst, praktische Werkzeuge für deinen Alltag 
              oder Gedanken, die dich zum Nachdenken und Spüren bringen – hier ist alles für Dich.
            </p>

            <p className="text-sm sm:text-base lg:text-lg font-light leading-relaxed font-['Montserrat']" style={{
            display: "none"
          }}>
              Alle Inhalte sind übersichtlich in drei Bereiche gegliedert: Meditationen, DIY-Praktiken und Blog – 
              so findest du schnell, was dich gerade am meisten anspricht.
            </p>

            <p className="text-xs sm:text-sm lg:text-base font-light leading-relaxed font-['Montserrat'] max-w-3xl mx-auto text-[#6B6560]/80 italic">
              Viele der Übungen, Meditationen und Tipps sind inspiriert von der UR-ATEM©-Methode – 
              für mehr Klarheit und innere Balance im Alltag.
            </p>
          </div>
        </motion.header>

        {/* Navigation Tabs - Redesigned with Brand Blue */}
        <motion.div {...fadeInUp} className="mb-0">
          {/* Desktop: Advanced Tabs with Brand Blue */}
          <div className="hidden md:flex justify-center items-center gap-2 lg:gap-4" style={{
          borderTopWidth: "0px",
          borderRightWidth: "0px",
          borderBottomWidth: "0px",
          borderLeftWidth: "0px",
          borderStyle: "none",
          borderRadius: "0px"
        }}>
            {Object.entries(categories).map(([key, {
            title
          }]) => <button key={key} onClick={() => setActiveCategory(key as CategoryType)} className={`
                  px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-['Montserrat'] font-medium
                  transition-all duration-300 relative
                  ${activeCategory === key ? 'text-[#4d83a4] font-semibold bg-white/80 backdrop-blur-sm border border-[#4d83a4]/10 border-b-0 shadow-md' : 'text-[#6B6560] hover:text-[#4d83a4]/80'}
                `} style={activeCategory === key ? {
            borderTopLeftRadius: '16px',
            borderTopRightRadius: '16px',
            borderBottomLeftRadius: '0px',
            borderBottomRightRadius: '0px',
            borderBottom: 'none'
          } : {}}>
                {title}
                {activeCategory === key && <motion.div layoutId="activeTabIndicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4d83a4]" transition={{
              type: 'spring',
              stiffness: 380,
              damping: 30
            }} style={{
              display: 'none'
            }} />}
              </button>)}
          </div>

          {/* Mobile: Horizontally Scrollable Pills with Brand Blue */}
          <div className="md:hidden overflow-x-auto scrollbar-hide -mx-4 px-4 mb-0 pb-0">
            <div className="flex gap-3 min-w-max">
              {Object.entries(categories).map(([key, {
              title
            }]) => <button key={key} onClick={() => setActiveCategory(key as CategoryType)} className={`
                    px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-['Montserrat'] font-medium
                    transition-all duration-300 whitespace-nowrap
                    ${activeCategory === key ? 'bg-white/80 backdrop-blur-sm text-[#4d83a4] shadow-lg border border-[#4d83a4]/10 border-b-0' : 'bg-transparent text-[#6B6560] border-2 border-[#4d83a4]/20 hover:border-[#4d83a4]/40 rounded-full'}
                  `} style={activeCategory === key ? {
              borderTopLeftRadius: '16px',
              borderTopRightRadius: '16px',
              borderBottomLeftRadius: '0px',
              borderBottomRightRadius: '0px',
              borderBottom: 'none'
            } : {}}>
                  {title}
                </button>)}
            </div>
          </div>
        </motion.div>

        {/* Category Description */}
        <AnimatePresence mode="wait">
          <motion.div key={activeCategory} initial={{
          opacity: 0,
          y: 10
        }} animate={{
          opacity: 1,
          y: 0
        }} exit={{
          opacity: 0,
          y: -10
        }} transition={{
          duration: 0.3
        }} className="mb-10 sm:mb-12 lg:mb-16 max-w-4xl mx-auto" style={{
          marginTop: 0
        }}>
            <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 shadow-lg border border-[#4d83a4]/10" style={{
            borderTopLeftRadius: '0px',
            borderTopRightRadius: '0px',
            borderBottomLeftRadius: '16px',
            borderBottomRightRadius: '16px',
            borderTop: 'none',
            borderTopWidth: "0px",
            borderTopColor: "oklch(0.145 0 0)",
            borderRightWidth: "1px",
            borderRightColor: "rgba(77, 131, 164, 0.1)",
            borderBottomWidth: "1px",
            borderBottomColor: "rgba(77, 131, 164, 0.1)",
            borderLeftWidth: "1px",
            borderLeftColor: "rgba(77, 131, 164, 0.1)",
            borderStyle: "none solid solid",
            borderRadius: "16px"
          }}>
              <p className="text-sm sm:text-base lg:text-lg text-[#6B6560] font-['Montserrat'] font-light leading-relaxed text-center">
                {currentCategoryData.description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Articles Grid */}
        <AnimatePresence mode="wait">
          <motion.div key={activeCategory} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} exit={{
          opacity: 0,
          y: -20
        }} transition={{
          duration: 0.5
        }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {currentCategoryData.articles.map((article, index) => <motion.article key={article.id} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: 0.1 * index
            }} className="bg-white rounded-3xl overflow-hidden shadow-lg cursor-pointer
                             transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col
                             border border-[#4d83a4]/10" onClick={() => handleArticleClick(article.id)} role="button" tabIndex={0} aria-label={`Artikel lesen: ${article.title}`}>
                  {/* Date Header */}
                  <div className="px-5 sm:px-6 pt-4 sm:pt-5 pb-2 sm:pb-3 bg-[#4d83a4]/5">
                    <p className="text-xs sm:text-sm text-[#4d83a4] font-['Montserrat'] font-medium tracking-wide uppercase">
                      {article.date}
                    </p>
                  </div>

                  {/* Thumbnail Image with Title Overlay */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={article.thumbnail} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" loading="lazy" />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    {/* Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 lg:p-6">
                      <h3 className="text-lg sm:text-xl lg:text-2xl text-white font-['Playfair_Display'] font-light leading-snug">
                        {article.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="px-5 sm:px-6 py-4 sm:py-5 flex-grow">
                    <p className="text-xs sm:text-sm lg:text-base text-[#6B6560] font-['Montserrat'] font-light leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  {/* Read More Button with Brand Blue */}
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                    <button className="group flex items-center gap-2 text-[#4d83a4] font-['Montserrat'] font-semibold text-sm lg:text-base
                                 transition-all duration-300 hover:gap-3" aria-label={`${article.title} weiterlesen`}>
                      Mehr lesen
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </motion.article>)}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Footer / Call to Action */}
        <motion.footer {...fadeInUp} className="mt-16 sm:mt-20 lg:mt-24 pt-12 sm:pt-16 lg:pt-20 border-t-2 border-[#4d83a4]/20">
          <div className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-8">
            <p className="text-xs sm:text-sm text-[#6B6560]/80 font-['Montserrat'] font-light leading-relaxed" style={{
            fontSize: "18px"
          }}>
              Die Atemübungen basieren auf den Prinzipien des{' '}
              <span className="font-medium text-[#4d83a4]">UR-ATEM© Prozesses</span> – 
              eine registrierte Marke von Tina Christina Tomson – und bringen dich Schritt für Schritt 
              zu mehr Ruhe, Energie und Präsenz.
            </p>

            <p className="text-sm sm:text-base lg:text-lg text-[#6B6560] font-['Montserrat'] font-light leading-relaxed" style={{
            fontSize: "16px"
          }}>
              Wenn Du Fragen hast oder tiefer in den UR-ATEM©-Prozess eintauchen möchtest, 
              schreibe mir gerne – ich begleite Dich auf deinem Weg.
            </p>

            {/* Quick Links with Brand Blue */}
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 lg:gap-6 text-xs sm:text-sm lg:text-base font-['Montserrat']">
              <button onClick={() => setActiveCategory('meditationen')} className="text-[#4d83a4] hover:text-[#3d6a85] transition-colors underline underline-offset-4 font-medium">Meditationen</button>
              <span className="text-[#4d83a4]/40">|</span>
              <button onClick={() => setActiveCategory('diy-praktiken')} className="text-[#4d83a4] hover:text-[#3d6a85] transition-colors underline underline-offset-4 font-medium">DIY-Praktiken</button>
              <span className="text-[#4d83a4]/40">|</span>
              <button onClick={() => setActiveCategory('blog')} className="text-[#4d83a4] hover:text-[#3d6a85] transition-colors underline underline-offset-4 font-medium">
                Blog
              </button>
            </div>
          </div>
        </motion.footer>
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
    </div>;
}