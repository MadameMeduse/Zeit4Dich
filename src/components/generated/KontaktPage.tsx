"use client";

import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, AlertCircle, CheckCircle, Clock } from "lucide-react";

type PageType = 'home' | 'about' | 'events' | 'contact' | 'atem' | 'massage' | 'inspiration';

interface KontaktPageProps {
  onNavigate?: (page: PageType) => void;
}

const CONTACT_DETAILS = [
  {
    title: "Adresse",
    content: <address className="not-italic">Tina Christina Tomson<br />Balgacherstrasse 202<br />9435 Heerbrugg SG, Schweiz</address>,
    icon: MapPin,
    type: "text"
  },
  {
    title: "Telefon",
    content: "+41 76 408 24 42",
    icon: Phone,
    type: "link",
    href: "tel:+41764082442"
  },
  {
    title: "E-Mail",
    content: "info@zeit4dich.ch",
    icon: Mail,
    type: "link",
    href: "mailto:info@zeit4dich.ch"
  }
];

const MAP_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2703.359744158913!2d9.62744337684614!3d47.40485990119858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479b139044390669%3A0xb36b532729e24673!2sBalgacherstrasse%20202%2C%209435%20Heerbrugg!5e0!3m2!1sen!2sch!4v1700000000000!5m2!1sen!2sch";

export default function KontaktPage({ onNavigate }: KontaktPageProps) {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name fehlt";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Ungültige E-Mail";
    if (!formData.subject) newErrors.subject = "Thema wählen";
    if (!formData.message.trim()) newErrors.message = "Nachricht fehlt";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitSuccess(false);
    }, 3000);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen bg-white py-10 font-['Montserrat'] text-[#4A4440]">
      <section className="px-4 sm:px-6  lg:px-8 pt-24 sm:pt-32 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Contact & Hours */}
            <motion.div {...fadeInUp} className="space-y-8">
              <div>
                <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-light mb-4">Kontakt</h2>
                <p className="text-[#6B6560] leading-relaxed max-w-md">
                  Erreiche mich direkt oder vereinbare einen Termin für ein persönliches Gespräch.
                </p>
              </div>

              {/* Detail Cards */}
              <div className="space-y-3">
                {CONTACT_DETAILS.map((item, idx) => {
                  const Wrapper = item.type === "link" ? "a" : "div";
                  return (
                    <Wrapper 
                      key={idx} 
                      href={item.href} 
                      className={`flex items-start gap-4 p-4 rounded-xl border border-[#4d83a4]/10 transition-all ${item.type === 'link' ? 'hover:bg-[#4d83a4]/10' : ''}`}
                    >
                      <item.icon className="w-5 h-5 text-[#4d83a4] mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xs font-bold uppercase tracking-widest mb-1 text-[#4d83a4]">{item.title}</h3>
                        <div className="text-sm text-[#6B6560]">{item.content}</div>
                      </div>
                    </Wrapper>
                  );
                })}

                {/* Opening Hours moved here */}
                <div className="flex items-start gap-4 p-4 rounded-xl border border-[#4d83a4]/10 ">
                  <Clock className="w-5 h-5 text-[#4d83a4] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest mb-1 text-[#4d83a4]">Öffnungszeiten</h3>
                    <div className="text-sm text-[#6B6560] space-y-1">
                      <p>Mo–Fr: 08:00 – 21:00 Uhr</p>
                      <p>Sa–So: 09:00 – 21:00 Uhr</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Contact Form */}
            <motion.div {...fadeInUp} className=" rounded-2xl mt-auto p-6 sm:p-10 border border-[#4d83a4]/5">
              <h3 className="font-['Playfair_Display'] text-2xl font-light mb-6">Nachricht senden</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Inline Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest ml-1">Name *</label>
                    <input 
                      type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} 
                      placeholder="Dein Name"
                      className={`w-full px-4 py-3 text-sm border rounded-lg focus:ring-2 focus:ring-[#4d83a4]/10 outline-none transition-all ${errors.name ? 'border-red-300' : 'border-[#4d83a4]/20'}`}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest ml-1">E-Mail *</label>
                    <input 
                      type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} 
                      placeholder="deine@email.com"
                      className={`w-full px-4 py-3 text-sm border rounded-lg focus:ring-2 focus:ring-[#4d83a4]/10 outline-none transition-all ${errors.email ? 'border-red-300' : 'border-[#4d83a4]/20'}`}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-[10px] font-bold uppercase tracking-widest ml-1">Thema *</label>
                  <select 
                    id="subject" name="subject" value={formData.subject} onChange={handleInputChange}
                    className="w-full px-4 py-3 text-sm border border-[#4d83a4]/20 rounded-lg bg-white outline-none focus:ring-2 focus:ring-[#4d83a4]/10"
                  >
                    <option value="">Bitte wählen...</option>
                    <option value="massage">Massage</option>
                    <option value="breathwork">Atemarbeit</option>
                    <option value="consultation">Kostenlose Konsultation</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-widest ml-1">Nachricht *</label>
                  <textarea 
                    id="message" name="message" rows={5} value={formData.message} onChange={handleInputChange}
                    className="w-full px-4 py-3 text-sm border border-[#4d83a4]/20 rounded-lg outline-none focus:ring-2 focus:ring-[#4d83a4]/10 resize-none"
                    placeholder="Wie kann ich dir helfen?"
                  />
                </div>

                <button 
                  type="submit" disabled={isSubmitting}
                  className="w-full py-4 bg-[#4d83a4] text-white rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-[#3d6a85] transition-all flex items-center justify-center gap-2 shadow-sm disabled:bg-gray-400"
                >
                  {isSubmitting ? "Wird gesendet..." : <><Send className="w-4 h-4" /> Nachricht senden</>}
                </button>

                {submitSuccess && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-green-600 text-xs font-bold mt-4">
                    ✓ Nachricht erfolgreich gesendet!
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>

          {/* Full Width Map at the Bottom */}
          <motion.div {...fadeInUp} className="mt-16 sm:mt-24">
             <div className="flex items-center justify-between mb-6">
                <h3 className="font-['Playfair_Display'] text-2xl font-light">Standort</h3>
                <span className="h-[1px] flex-grow bg-[#4d83a4]/10 ml-6"></span>
             </div>
             <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#4d83a4]/10 grayscale-[30%] hover:grayscale-0 transition-all duration-700">
                <iframe 
                  src={MAP_URL} 
                  width="100%" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  title="Google Maps Standort"
                ></iframe>
             </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}