"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Key, ChevronDown, ChevronUp } from 'lucide-react';
type PageType = 'home' | 'about' | 'events' | 'contact' | 'atem' | 'massage' | 'inspiration';
interface AboutPageProps {
  onNavigate?: (page: PageType) => void;
}

/**
 * AboutPage - Redesigned to Match Atem & Massage Pages
 * 
 * Updates:
 * - Brand blue (#7A7568) for all accents
 * - Hero section: Two-column (image left, text right) on desktop, stacked on mobile/tablet
 * - Increased top padding (pt-32 sm:pt-36 lg:pt-40) to clear navbar
 * - Responsive typography with smaller sizes on mobile/tablet
 * - Updated Massage & TCM section with new German content
 * - Expanded list of massage trainings with toggle
 */
export default function AboutPage({
  onNavigate
}: AboutPageProps) {
  const [showMassageList, setShowMassageList] = useState(false);
  const handleNavigate = (page: PageType) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };
  const fadeInUp = {
    initial: {
      opacity: 0,
      y: 40
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
  const staggerChildren = {
    initial: {
      opacity: 0
    },
    whileInView: {
      opacity: 1
    },
    viewport: {
      once: true
    },
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  };
  return <div className="pt-32 sm:pt-36 lg:pt-40 bg-gradient-to-b from-[#F5F3EF] to-[#EAE7E0] min-h-screen">

    {/* Hero/Intro Section with Portrait - Two Column Layout */}
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1]
        }} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Portrait - Left on Desktop */}
          <div className="order-1 flex justify-center">
            <div className="relative max-w-md w-full mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4CFC4]/30 to-[#A69B8E]/30 rounded-3xl transform rotate-3"></div>
              <img src="https://storage.googleapis.com/storage.magicpath.ai/user/351284685155995648/assets/ba3bdd01-ed98-4919-bd68-3d5a11ab25c7.jpeg" alt="Tina Christina - Atem- und Körperarbeit" className="relative rounded-3xl shadow-2xl w-full aspect-[3/4] object-cover" style={{
                boxShadow: ""
              }} />
            </div>
          </div>

          {/* Intro Text - Right on Desktop */}
          <div className="order-2 space-y-6 sm:space-y-8">
            <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-6xl text-[#4A4440] font-light leading-tight">
              Hallo, ich bin<br />Tina Christina.
            </h1>
            <div className="space-y-4 text-[#6B6560] text-base sm:text-lg leading-relaxed font-['Montserrat'] font-light">
              <p>
                Ich wurde in Estland geboren, habe einen schwedischen Ur-Opa und lebe bald seit zwei
                Jahrzehnten im deutschsprachigen Raum.
              </p>
              <p className="font-normal">Ich begleite Menschen seit über 23 Jahren mit Atem, Berührung und Präsenz. Durch gezielte Atemreisen nach UR-ATEM© Methode kann man innere Blockaden lösen, Klarheit gewinnen und die Lebensenergie frei fließen lassen – einzeln oder in Gruppen.  Meine Arbeit ist geprägt von Tiefe, Intuition und einem Ur-Vertrauen in das, was im Menschen selbst angelegt ist: die Kraft zur Wandlung, zur Entlastung – zur inneren Rückkehr nach Hause.<br /><br />Nach meinen Ausbildungen an drei verschiedenen Atemschulen in den USA, England und Schweden habe ich unterschiedliche Atemtechniken mit weiteren sanften Formen der Unterstützung verbunden und eine neue Atemmethode namens der UR-ATEM© entwickelt, in der Atemarbeit mit Körperarbeit und Alpha-Level Visualmeditationen kombiniert wird. 
So entsteht ein Raum, der sich ganz an dem orientiert, was Du gerade brauchst – ob im Einzelsetting, in Gruppen oder im warmen Wasser.
</p> <p className='font-normal'> Ich bin ein ruhiger, offener Mensch. Freude ist mir wichtig. Stille auch. Und echte Begegnung.
</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Biography - Wer ich bin */}


    {/* The Key Section */}
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <motion.div {...fadeInUp} className="max-w-5xl mx-auto">
        <div className="relative bg-gradient-to-br from-[#E8E4DC] to-[#D4CFC4] rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden" style={{
          backgroundImage: "url(https://storage.googleapis.com/storage.magicpath.ai/user/351284685155995648/assets/99257a6e-a693-4670-9ed1-15ea32f1b165.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}>
          <div className="absolute top-8 right-8 opacity-10">
            <Key size={120} className="text-[#8B7F77] transform -rotate-12" />
          </div>

          <div className="relative z-10">
            <div className="flex items-start gap-4 mb-6">
              <Key size={32} className="text-[#8B7F77] flex-shrink-0 mt-1" />
              <blockquote className="font-['Playfair_Display'] text-xl sm:text-2xl lg:text-3xl text-[#4A4440] font-light leading-relaxed italic">
                "Der Atem ist für mich ein Schlüssel."
              </blockquote>
            </div>
            <p className="text-[#6B6560] text-base sm:text-lg leading-relaxed ml-12 font-['Montserrat']">
            Ein Schlüssel zu inneren Räumen, zu Gefühlen, zu Erinnerungen – und zu dem, was sich lösen möchte, aber noch nicht konnte. Er bringt Dich aus dem Tun ins Spüren, aus der Anspannung in die Ruhe. Atem ist die unsichtbare Brücke zwischen Körper und Seele.
            </p>
          </div>
        </div>
      </motion.div>
    </section>

    {/* Three Schools Section */}
    <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-transparent to-[#8B9B8E]/10">
      <div className="max-w-7xl mx-auto">
        <motion.h2 {...fadeInUp} className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl text-[#4A4440] font-light text-center mb-12 lg:mb-16" style={{
          fontSize: 'clamp(28px, 4vw, 48px)',
          lineHeight: '1.3',
          overflowWrap: 'break-word',
          hyphens: 'auto',
          padding: '0 15px'
        }}>
          Meine Ausbildungen
        </motion.h2>

        <motion.div variants={staggerChildren} initial="initial" whileInView="whileInView" viewport={{
          once: true
        }} className="grid md:grid-cols-3 gap-8 lg:gap-10">
          <motion.div variants={fadeInUp} className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-6xl mb-6 text-center">🇺🇸</div>
            <h3 className="font-['Playfair_Display'] text-xl sm:text-2xl text-[#4A4440] font-light mb-4 text-center">USA</h3>
            <p className="text-[#6B6560] text-sm sm:text-base leading-relaxed font-['Montserrat']" style={{
              textAlign: "center",
              justifyContent: "center",
              fontWeight: "bold"
            }}>
              Professional Breathworker & Advanced Facilitator Training (2+2 Jahre).
            </p>
            <p className="text-[#6B6560] text-sm sm:text-base leading-relaxed font-['Montserrat']" style={{
              textAlign: "center",
              justifyContent: "center"
            }}>
             Dan Brulé's School of Breathwork at One Sky International Life Skills & Healing Arts Institute. 
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-6xl mb-6 text-center">🇬🇧</div>
            <h3 className="font-['Playfair_Display'] text-xl sm:text-2xl text-[#4A4440] font-light mb-4 text-center">England</h3>
            <p className="text-[#6B6560] text-sm sm:text-base leading-relaxed font-['Montserrat']" style={{
              textAlign: "center",
              justifyContent: "center",
              fontWeight: "bold"
            }}>
SOURCE Process & Breathwork Therapist (3 Jahre)            </p>
<p className="text-[#6B6560] text-sm sm:text-base leading-relaxed font-['Montserrat']" style={{
              textAlign: "center",
              justifyContent: "center"
            }}>
Binnie A. Dansby's SOURCE Process & Breathwork School 
</p>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-6xl mb-6 text-center">🇸🇪</div>
            <h3 className="font-['Playfair_Display'] text-xl sm:text-2xl text-[#4A4440] font-light mb-4 text-center">Schweden</h3>
            <p className="text-[#6B6560] text-sm sm:text-base leading-relaxed font-['Montserrat']" style={{
              textAlign: "center",
              justifyContent: "center",
              fontWeight: "bold"
            }}>
Lena-Kristina Tuulse's Joy Of Life School of Rebirthing & Breathwork            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* Massage & TCM Expertise - UPDATED CONTENT */}
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <motion.div {...fadeInUp} className="max-w-6xl mx-auto">
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl">
          <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl text-[#4A4440] font-light mb-6" style={{
            fontSize: 'clamp(28px, 4vw, 48px)',
            lineHeight: '1.3',
            overflowWrap: 'break-word',
            hyphens: 'auto',
            padding: '0 15px'
          }}>Massage mit Tiefe & Vielfalt</h2>

          <div className="space-y-6 text-[#6B6560] text-base sm:text-lg leading-relaxed font-['Montserrat'] mb-8">
            <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl text-[#4A4440] font-light" style={{
              display: "none"
            }}>
              Massagetherapie mit Tiefe & Vielfalt
            </h3>

            <p>
              Seit dem Jahr 2000 habe ich rund 20 Aus- und Weiterbildungen in verschiedenen Massagearten gemacht, darunter:
            </p>

            {/* Always visible massage trainings list */}
            <ul className="space-y-3 pl-6">
              <li className="flex items-start gap-3">
                <span className="text-[#7A7568] text-xl font-bold">•</span>
                <span>Chinesische Akupressurmassage (TCM)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#7A7568] text-xl font-bold">•</span>
                <span>Japanische Shin-Do Massage</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#7A7568] text-xl font-bold">•</span>
                <span>Shiatsu</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#7A7568] text-xl font-bold">•</span>
                <span>Westliche medizinische Akupunktur & Akupressur</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#7A7568] text-xl font-bold">•</span>
                <span>Klassische Schwedische Massage</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#7A7568] text-xl font-bold">•</span>
                <span>Aromamassagen</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#7A7568] text-xl font-bold">•</span>
                <span>Lava-Stein-Massage</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#7A7568] text-xl font-bold">•</span>
                <span>Hamam Warm Water Relax</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#7A7568] text-xl font-bold">•</span>
                <span>Kälte-Therapie mit Marmorsteinen</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#7A7568] text-xl font-bold">•</span>
                <span>Verschiedene Pflegepackungen- & Beautybehandlungen</span>
              </li>
            </ul>

            <p>
              Ein Jahr lang habe ich Traditionelle Chinesische Medizin (TCM) studiert und Kurse in Qi Gong und Tai Chi besucht – denn die östliche Sicht auf das bioenergetische Wesen Mensch ist so ganzheitlich, so holistisch, dass sie in mir schon immer großen Respekt hervorgerufen hat.
            </p>

            <p>
              Auch in der Körperarbeit zeigt sich für mich immer wieder: Die Kombination verschiedener Methoden – achtsam und gezielt eingesetzt – wirkt am besten.
            </p>
          </div>

          <div className="mt-10 pt-8 border-t border-[#D4CFC4]" style={{
            borderTopWidth: "0px",
            borderRightWidth: "0px",
            borderBottomWidth: "0px",
            borderLeftWidth: "0px",
            borderStyle: "none",
            borderRadius: "0px"
          }}>
            <button onClick={() => handleNavigate('atem')} className="inline-flex items-center gap-2 text-[#7A7568] hover:text-[#5d5950] transition-colors duration-300 text-base sm:text-lg group cursor-pointer font-['Montserrat']" style={{
              color: "#4d83a4"
            }}>
              <span className="border-b-2 border-[#7A7568] group-hover:border-[#5d5950] transition-colors" style={{
                fontWeight: "400",
                fontStyle: "normal"
              }}>
                Lies mehr über Atem-Massage & Atemcoaching
              </span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>
      </motion.div>
    </section>

    {/* Personal Connection */}
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-1 lg:col-span-2 mb-6" style={{
            display: "none"
          }}>
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl text-[#4A4440] font-light">
              Persönlich...
            </h2>
          </div>

          <div className="order-2 lg:order-1">
            <img src="public/images/Tina_riding_horse.jpg" alt="Pferde in nordischer Natur" className="rounded-3xl shadow-2xl w-full aspect-[4/3] object-cover" style={{
              objectFit: "cover",
              objectPosition: "50% 50%",
              opacity: "1"
            }} />
          </div>

          <div className="order-1 lg:order-2 space-y-5 text-[#6B6560] text-base sm:text-lg leading-relaxed font-['Montserrat']">
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl text-[#4A4440] font-light mb-6" style={{
              fontSize: 'clamp(28px, 4vw, 48px)',
              lineHeight: '1.3',
              overflowWrap: 'break-word',
              hyphens: 'auto',
              padding: '0 15px'
            }}>
              Persönlich...
            </h2>
            <p>
              Ich spreche fließend <strong className="text-[#4A4440]">Deutsch, Englisch, Estnisch</strong> (meine Muttersprache), <strong className="text-[#4A4440]">Spanisch</strong>, und verstehe gut Rheintaler Schweizerdeutsch.
            </p>
            <p>
              Über zehn Jahre lang war ich Dolmetscherin auf internationalen Seminaren – auch das hat meine Fähigkeit geschult, <em>zwischen den Zeilen zu hören</em>.
            </p>
            <p>In meiner Freizeit schreibe und singe ich nordische Volksmusik – inspiriert von meiner estnischen Heimat.<br />Ich liebe Bäume und Tiere – besonders Pferde – und finde oft in der Natur das, was ich auch in der Atemarbeit suche: Stille, Verbindung, Kraft.</p>
            <p className="text-lg sm:text-xl font-medium text-[#4A4440]" style={{
              display: "none"
            }}>
              Ich liebe Bäume und Tiere – besonders Pferde – und finde oft in der Natur das, was ich auch in der Atemarbeit suche: Stille, Verbindung, Kraft.
            </p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Philosophical Deep-Dive */}
    <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#8B9B8E]/15 to-[#A8B5A8]/20">
      <div className="max-w-5xl mx-auto">
        <motion.div {...fadeInUp} className="space-y-10">
          <div>
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl text-[#4A4440] font-light mb-6" style={{
              textAlign: "center",
              justifyContent: "center",
              fontSize: 'clamp(28px, 4vw, 48px)',
              lineHeight: '1.3',
              overflowWrap: 'break-word',
              hyphens: 'auto',
              padding: '0 15px'
            }}>Warum ich tue, was ich tue?<br /></h2>
            <div className="space-y-5 text-[#6B6560] text-base sm:text-lg leading-relaxed font-['Montserrat']">
              <p style={{
                textAlign: "center",
                justifyContent: "center"
              }}>Es gibt kaum etwas Schöneres, als zu sehen, wie ein Mensch loslässt, aufatmet und aufblüht.<br />Wenn sich ein Herz erleichtert, ein Körper befreit oder eine Seele wieder lachen kann, fühle ich mich reich beschenkt. Es ist für mich eine große Ehre, mit Menschen arbeiten zu dürfen.<br />Und ich vertraue darauf, dass genau die Menschen zu mir finden, denen ich am meisten dienen kann.</p>
              <p style={{
                textAlign: "center",
                justifyContent: "center"
              }}>Es gibt kaum etwas Schöneres, als zu sehen, wie ein Mensch loslässt, aufatmet und aufblüht.<br />Wenn sich ein Herz erleichtert, ein Körper befreit oder eine Seele wieder lachen kann, fühle ich mich reich beschenkt. Es ist für mich eine große Ehre, mit Menschen arbeiten zu dürfen.<br />Und ich vertraue darauf, dass genau die Menschen zu mir finden, denen ich am meisten dienen kann.</p>
              <p style={{
                textAlign: "center",
                justifyContent: "center",
                fontSize: "20px",
                fontStyle: "italic",
                fontWeight: "700",
                display: "none"
              }}>Du bist herzlich willkommen in einem Raum der Heilung, des Lernens und des Loslassens – einem Raum, den wir gemeinsam erschaffen, nur für dich.<br /></p>
              <p className="font-medium text-[#4A4440]" style={{
                display: "none"
              }}>
                Manchmal braucht es einfach nur das: gesehen werden, gehalten werden, atmen dürfen.
              </p>
            </div>
          </div>

          <div className="flex justify-center pt-6">
            <button onClick={() => handleNavigate('contact')} className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-[#7A7568] text-white rounded-full hover:bg-[#5d5950] transition-all duration-300 shadow-lg hover:shadow-xl text-base lg:text-lg font-['Montserrat'] font-semibold cursor-pointer" style={{
              background: "#4d83a4"
            }}>Für eine Atem-Session anmelden</button>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Why I Do What I Do */}
    <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#A8B5A8]/20 to-[#8B9B8E]/10" style={{
      display: "none"
    }}>
      <motion.div {...fadeInUp} className="max-w-5xl mx-auto">
        <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl text-[#4A4440] font-light mb-8 text-center" style={{
          fontSize: 'clamp(28px, 4vw, 48px)',
          lineHeight: '1.3',
          overflowWrap: 'break-word',
          hyphens: 'auto',
          padding: '0 15px'
        }}>
          Warum ich tue, was ich tue
        </h2>
        <div className="space-y-6 text-[#6B6560] text-base sm:text-lg leading-relaxed font-['Montserrat']">
          <p className="text-center italic text-xl sm:text-2xl text-[#4A4440] font-['Playfair_Display']">
            Weil ich selbst erfahren habe, wie heilsam es ist, gehalten zu werden.
          </p>
          <p className="text-center">Weil ich glaube, dass jeder Mensch das Recht hat, sich selbst zu begegnen – ohne Urteil, ohne Druck, ohne Erwartung. Weil Atem universell ist. Er gehört niemandem – und zugleich uns allen.<br />Und weil ich zutiefst daran glaube: In jedem von uns liegt bereits alles, was wir brauchen.</p>
          <p className="font-medium text-[#4A4440] text-center pt-6" style={{
            display: "none"
          }}>
            Und weil ich zutiefst daran glaube: In jedem von uns liegt bereits alles, was wir brauchen.
          </p>
        </div>
      </motion.div>
    </section>

    {/* Final Call-to-Action */}
    <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
      <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center space-y-10">
        <blockquote className="font-['Playfair_Display'] text-2xl sm:text-3xl lg:text-4xl text-[#4A4440] font-light leading-tight italic">
          "Wenn du bereit bist, dir selbst zu begegnen –<br />
          lade ich dich ein, dies in einem Raum zu tun,<br />
          der dich hält."
        </blockquote>

        <div className="space-y-5 text-[#6B6560] text-base sm:text-lg leading-relaxed font-['Montserrat']">
          <p>In Ruhe. In Achtsamkeit. Im Atem. Ich freue mich auf dich.</p>
          <p className="font-medium text-[#4A4440]" style={{
            fontWeight: "400",
            color: "#6b6560",
            display: "none"
          }}>Ich freue mich auf dich.</p>
          <p className="italic text-xl sm:text-2xl font-['Playfair_Display'] font-semibold text-[#4A4440]">
            – Tina Christina
          </p>
        </div>

        <button onClick={() => handleNavigate('contact')} className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-[#7A7568] text-white rounded-full hover:bg-[#5d5950] transition-all duration-300 shadow-xl hover:shadow-2xl text-base lg:text-lg font-['Montserrat'] font-semibold transform hover:scale-105 cursor-pointer" style={{
          background: "#4d83a4"
        }}>
          Vereinbare hier deinen Termin
        </button>
      </motion.div>
    </section>
  </div>;
}