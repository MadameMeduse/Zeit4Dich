"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Key } from 'lucide-react';

type PageType = 'home' | 'about' | 'events' | 'contact' | 'atem' | 'massage' | 'inspiration';

interface AboutPageProps {
  onNavigate?: (page: PageType) => void;
}

// Extracting static content to keep the component clean
const MASSAGE_TRAININGS = [
  "Chinesische Akupressurmassage (TCM)",
  "Japanische Shin-Do Massage",
  "Shiatsu",
  "Westliche medizinische Akupunktur & Akupressur",
  "Klassische Schwedische Massage",
  "Aromamassagen",
  "Lava-Stein-Massage",
  "Hamam Warm Water Relax",
  "Kälte-Therapie mit Marmorsteinen",
  "Verschiedene Pflegepackungen- & Beautybehandlungen"
];

const EDUCATION_DATA = [
  {
    flag: "🇺🇸",
    country: "USA",
    title: "Professional Breathworker & Advanced Facilitator Training (2+2 Jahre).",
    school: "Dan Brulé's School of Breathwork at One Sky International Life Skills & Healing Arts Institute."
  },
  {
    flag: "🇬🇧",
    country: "England",
    title: "SOURCE Process & Breathwork Therapist (3 Jahre)",
    school: "Binnie A. Dansby's SOURCE Process & Breathwork School"
  },
  {
    flag: "🇸🇪",
    country: "Schweden",
    title: "Lena-Kristina Tuulse's Joy Of Life School of Rebirthing & Breathwork",
    school: ""
  }
];

// Reusable Animation Constants
const FADE_IN_UP = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const STAGGER_CONTAINER = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.15, delayChildren: 0.2 }
};

export default function AboutPage({ onNavigate }: AboutPageProps) {
  
  const handleNavigate = (page: PageType) => {
    onNavigate?.(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="pt-32 sm:pt-36 lg:pt-40 bg-gradient-to-b from-[#F5F3EF] to-[#EAE7E0] min-h-screen">
      
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-0 sm:py-16 lg:py-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} 
            className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start"
          >
            {/* Mobile First: Text appears above image on small screens via order-1 */}
            <div className="order-1 lg:order-2 space-y-6 sm:space-y-8">
              <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-6xl text-[#4A4440] font-light leading-tight">
                Hallo, ich bin Tina Christina.
              </h1>
              <div className="space-y-4 text-[#6B6560] text-base sm:text-lg leading-relaxed font-['Montserrat'] font-light">
                <p>
                  Ich wurde in Estland geboren, habe einen schwedischen Ur-Opa und lebe bald seit zwei
                  Jahrzehnten im deutschsprachigen Raum.
                </p>
                <p className="font-normal">
                  Ich begleite Menschen seit über 23 Jahren mit Atem, Berührung und Präsenz. Durch gezielte Atemreisen nach UR-ATEM© Methode kann man innere Blockaden lösen, Klarheit gewinnen und die Lebensenergie frei fließen lassen – einzeln oder in Gruppen. Meine Arbeit ist geprägt von Tiefe, Intuition und einem Ur-Vertrauen in das, was im Menschen selbst angelegt ist: die Kraft zur Wandlung, zur Entlastung – zur inneren Rückkehr nach Hause.
                  <br /><br />
                  Nach meinen Ausbildungen an drei verschiedenen Atemschulen in den USA, England und Schweden habe ich unterschiedliche Atemtechniken mit weiteren sanften Formen der Unterstützung verbunden und eine neue Atemmethode namens der UR-ATEM© entwickelt, in der Atemarbeit mit Körperarbeit und Alpha-Level Visualmeditationen kombiniert wird. 
                  So entsteht ein Raum, der sich ganz an dem orientiert, was Du gerade brauchst – ob im Einzelsetting, in Gruppen oder im warmen Wasser.
                </p> 
                <p className='font-normal'>
                  Ich bin ein ruhiger, offener Mensch. Freude ist mir wichtig. Stille auch. Und echte Begegnung.
                </p>
              </div>
            </div>

            <div className="order-2 lg:order-1 flex justify-center">
              <div className="relative max-w-md w-full">
                <img 
                  src="https://storage.googleapis.com/storage.magicpath.ai/user/351284685155995648/assets/ba3bdd01-ed98-4919-bd68-3d5a11ab25c7.jpeg" 
                  alt="Tina Christina Portrait" 
                  className="rounded-3xl shadow-2xl w-full aspect-[3/4] object-cover" 
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

{/* The Key Section */}
<section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <motion.div {...FADE_IN_UP} className="max-w-6xl mx-auto">
          <div className="bg-[#E8E4DC] rounded-3xl overflow-hidden shadow-lg border border-[#D4CFC4]">
            <div className="grid lg:grid-cols-2">
              
              {/* Text Column - Left (Order-1 on all screen sizes) */}
              <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center order-1 relative">
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-6">
                    <Key size={32} className="text-[#8B7F77] flex-shrink-0 mt-1" />
                    <blockquote className="font-['Playfair_Display'] text-xl sm:text-2xl lg:text-3xl text-[#4A4440] font-light leading-relaxed italic">
                      "Der Atem ist für mich ein Schlüssel."
                    </blockquote>
                  </div>
                  <p className="text-[#6B6560] text-base sm:text-lg leading-relaxed ml-0 sm:ml-12 font-['Montserrat']">
                    Ein Schlüssel zu inneren Räumen, zu Gefühlen, zu Erinnerungen – und zu dem, was sich lösen möchte, aber noch nicht konnte. Er bringt Dich aus dem Tun ins Spüren, aus der Anspannung in die Ruhe. Atem ist die unsichtbare Brücke zwischen Körper und Seele.
                  </p>
                </div>
              </div>

              {/* Image Column - Right (Order-2 on all screen sizes) */}
              <div className="relative h-64 sm:h-80 lg:h-full min-h-[300px] order-2 object-cover">
                <img 
                  src="images/keysmall.jpg" 
                  alt="Der Schlüssel zum Atem" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-[#8B7F77]/10" />
              </div>

            </div>
          </div>
        </motion.div>
      </section>

      {/* Education Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-gradient-to-b from-transparent to-[#8B9B8E]/10">
        <div className="max-w-7xl mx-auto">
          <motion.h2 {...FADE_IN_UP} className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl text-[#4A4440] font-light text-center mb-16 px-4">
            Meine Ausbildungen
          </motion.h2>

          <motion.div variants={STAGGER_CONTAINER} initial="initial" whileInView="whileInView" className="grid md:grid-cols-3 gap-8">
            {EDUCATION_DATA.map((edu, idx) => (
              <motion.div key={idx} variants={FADE_IN_UP} className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center">
                <div className="text-6xl mb-6">{edu.flag}</div>
                <h3 className="font-['Playfair_Display'] text-xl sm:text-2xl text-[#4A4440] font-light mb-4">{edu.country}</h3>
                <p className="text-[#6B6560] text-sm sm:text-base font-bold mb-2">{edu.title}</p>
                <p className="text-[#6B6560] text-sm sm:text-base">{edu.school}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Massage Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <motion.div {...FADE_IN_UP} className="max-w-6xl mx-auto bg-white/60 backdrop-blur-sm rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl">
          <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl text-[#4A4440] font-light mb-8">
            Massage mit Tiefe & Vielfalt
          </h2>

          <div className="space-y-6 text-[#6B6560] text-base sm:text-lg font-['Montserrat']">
            <p>Seit dem Jahr 2000 habe ich rund 20 Aus- und Weiterbildungen in verschiedenen Massagearten gemacht, darunter:</p>
            
            <ul className="grid sm:grid-cols-2 gap-4 pl-6">
              {MASSAGE_TRAININGS.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[#4d83a4] font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p>
              Ein Jahr lang habe ich Traditionelle Chinesische Medizin (TCM) studiert und Kurse in Qi Gong und Tai Chi besucht – denn die östliche Sicht auf das bioenergetische Wesen Mensch ist so ganzheitlich, so holistisch, dass sie in mir schon immer großen Respekt hervorgerufen hat.
            </p>
            <p>
              Auch in der Körperarbeit zeigt sich für mich immer wieder: Die Kombination verschiedener Methoden – achtsam und gezielt eingesetzt – wirkt am besten.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-[#D4CFC4]">
            <button 
              onClick={() => handleNavigate('atem')} 
              className="group inline-flex items-center gap-2 text-[#4d83a4] hover:text-[#3d6a85] transition-colors font-['Montserrat']"
            >
              <span className="border-b-2 border-transparent group-hover:border-[#3d6a85] pb-1">
                Lies mehr über Atem-Massage & Atemcoaching
              </span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </motion.div>
      </section>

      {/* Personal Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div {...FADE_IN_UP} className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="images/Tina_riding_horse.webp" 
                alt="Tina Christina Natur" 
                className="rounded-3xl shadow-2xl w-full aspect-[4/3] object-cover" 
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl text-[#4A4440] font-light">
                Persönlich...
              </h2>
              <div className="space-y-5 text-[#6B6560] text-base sm:text-lg leading-relaxed font-['Montserrat']">
                <p>
                  Ich spreche fließend <strong className="text-[#4A4440]">Deutsch, Englisch, Estnisch</strong> (meine Muttersprache), <strong className="text-[#4A4440]">Spanisch</strong>, und verstehe gut Rheintaler Schweizerdeutsch.
                </p>
                <p>
                  Über zehn Jahre lang war ich Dolmetscherin auf internationalen Seminaren – auch das hat meine Fähigkeit geschult, <em>zwischen den Zeilen zu hören</em>.
                </p>
                <p>
                  In meiner Freizeit schreibe und singe ich nordische Volksmusik – inspiriert von meiner estnischen Heimat.
                  <br />Ich liebe Bäume und Tiere – besonders Pferde – und finde oft in der Natur das, was ich auch in der Atemarbeit suche: Stille, Verbindung, Kraft.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 lg:py-32 bg-gradient-to-b from-[#8B9B8E]/15 to-[#A8B5A8]/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...FADE_IN_UP} className="space-y-12">
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl text-[#4A4440] font-light">
              Warum ich tue, was ich tue?
            </h2>
            <div className="space-y-8 text-[#6B6560] text-base sm:text-lg leading-relaxed font-['Montserrat']">
              <p>
                Es gibt kaum etwas Schöneres, als zu sehen, wie ein Mensch loslässt, aufatmet und aufblüht.
                Wenn sich ein Herz erleichtert, ein Körper befreit oder eine Seele wieder lachen kann, fühle ich mich reich beschenkt.
                Es ist für mich eine große Ehre, mit Menschen arbeiten zu dürfen.
                Und ich vertraue darauf, dass genau die Menschen zu mir finden, denen ich am meisten dienen kann.
              </p>
              <p className="italic text-xl sm:text-2xl text-[#4A4440] font-['Playfair_Display']">
                "Weil ich selbst erfahren habe, wie heilsam es ist, gehalten zu werden."
              </p>
              <p>
                Weil ich glaube, dass jeder Mensch das Recht hat, sich selbst zu begegnen – ohne Urteil, ohne Druck, ohne Erwartung. 
                Weil Atem universell ist. Er gehört niemandem – und zugleich uns allen.
                Und weil ich zutiefst daran glaube: In jedem von uns liegt bereits alles, was wir brauchen.
              </p>
            </div>
            <button 
              onClick={() => handleNavigate('contact')} 
              className="inline-block px-10 py-4 bg-[#4d83a4] text-white rounded-full hover:bg-[#3d6a85] transition-all shadow-lg font-semibold font-['Montserrat']"
            >
              Für eine Atem-Session anmelden
            </button>
          </motion.div>
        </div>
      </section>

      {/* Final Call-to-Action */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 lg:py-32 bg-white">
        <motion.div {...FADE_IN_UP} className="max-w-4xl mx-auto text-center space-y-12">
          <blockquote className="font-['Playfair_Display'] text-2xl sm:text-3xl lg:text-4xl text-[#4A4440] font-light leading-snug italic">
            "Wenn du bereit bist, dir selbst zu begegnen –<br />
            lade ich dich ein, dies in einem Raum zu tun,<br />
            der dich hält."
          </blockquote>

          <div className="space-y-2">
            <p className="text-[#6B6560] text-lg sm:text-xl font-['Montserrat']">In Ruhe. In Achtsamkeit. Im Atem. Ich freue mich auf dich.</p>
            <p className="italic text-2xl sm:text-3xl font-['Playfair_Display'] font-semibold text-[#4A4440]">
              – Tina Christina
            </p>
          </div>

          <button 
            onClick={() => handleNavigate('contact')} 
            className="inline-block px-12 py-5 bg-[#4d83a4] text-white rounded-full hover:bg-[#3d6a85] transition-all shadow-xl font-bold text-lg font-['Montserrat'] transform hover:scale-105"
          >
            Vereinbare hier deinen Termin
          </button>
        </motion.div>
      </section>
    </div>
  );
}