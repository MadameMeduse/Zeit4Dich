"use client";

import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, AlertCircle, CheckCircle } from "lucide-react";
type PageType = 'home' | 'about' | 'events' | 'contact' | 'atem' | 'massage' | 'inspiration';
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}
interface KontaktPageProps {
  onNavigate?: (page: PageType) => void;
}

/**
 * KontaktPage - Redesigned Contact Page
 * 
 * Features:
 * - Airy, blue-toned design matching Atem and Massage pages
 * - Primary blue (#4d83a4) for accents, buttons, and icons
 * - Light background (#F5F3EF or white) with generous whitespace
 * - WCAG AA compliant (4.5:1 contrast ratio)
 * - Visible permanent labels (not placeholders)
 * - Clear focus states for keyboard navigation
 * - Error handling with icons and high-contrast text
 * - Two-column desktop layout (Contact Details | Form)
 * - Interactive Google Map
 * - Mobile-optimized with 44x44px touch targets
 */
export default function KontaktPage({
  onNavigate
}: KontaktPageProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Bitte gib deinen Namen ein";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Bitte gib deine E-Mail-Adresse ein";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Bitte gib eine gültige E-Mail-Adresse ein";
    }
    if (!formData.subject) {
      newErrors.subject = "Bitte wähle ein Thema aus";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Bitte gib eine Nachricht ein";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
        setSubmitSuccess(false);
      }, 3000);
    }, 1000);
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
  return <div className="min-h-screen bg-gradient-to-b from-[#F5F3EF] to-white">
      {/* Main Content: Two-Column Layout (Desktop) / Stacked (Mobile) */}
      <section className="px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* LEFT COLUMN: Contact Details */}
            <motion.div {...fadeInUp} className="space-y-8">
              <div>
                <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl text-[#4A4440] font-light mb-6">
                  Kontaktinformationen
                </h2>
                <p className="font-['Montserrat'] text-lg text-[#6B6560] leading-relaxed mb-8">
                  Erreiche mich direkt oder vereinbare einen Termin für ein persönliches Gespräch.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {/* Address */}
                <div className="bg-[#4d83a4]/5 rounded-2xl p-6 border border-[#4d83a4]/20 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#4d83a4] rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-['Montserrat'] text-lg font-semibold text-[#4A4440] mb-2">
                        Adresse
                      </h3>
                      <address className="not-italic font-['Montserrat'] text-base text-[#6B6560] leading-relaxed">
                        Tina Christina Tomson<br />
                        Staatsstrasse 24a<br />
                        9437 Marbach, St.Gallen<br />
                        Schweiz
                      </address>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <a href="tel:+41764082442" className="block bg-[#4d83a4]/5 rounded-2xl p-6 border border-[#4d83a4]/20 hover:bg-[#4d83a4]/10 hover:shadow-lg transition-all duration-300" aria-label="Anrufen: +41 76 408 2442">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#4d83a4] rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-['Montserrat'] text-lg font-semibold text-[#4A4440] mb-1">
                        Telefon
                      </h3>
                      <p className="font-['Montserrat'] text-base text-[#6B6560]">
                        +41 76 408 2442
                      </p>
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a href="mailto:info@zeit4dich.ch" className="block bg-[#4d83a4]/5 rounded-2xl p-6 border border-[#4d83a4]/20 hover:bg-[#4d83a4]/10 hover:shadow-lg transition-all duration-300" aria-label="E-Mail senden an info@zeit4dich.ch">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#4d83a4] rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-['Montserrat'] text-lg font-semibold text-[#4A4440] mb-1">
                        E-Mail
                      </h3>
                      <p className="font-['Montserrat'] text-base text-[#6B6560]">
                        info@zeit4dich.ch
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              {/* Google Map */}
              <div className="mt-8">
                <h3 className="font-['Playfair_Display'] text-2xl text-[#4A4440] font-light mb-4">
                  So findest Du mich
                </h3>
                <div className="rounded-2xl overflow-hidden shadow-xl border border-[#4d83a4]/20">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2698.8239486866834!2d9.5494!3d47.4494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479b1e6c8b9c8b9d%3A0x1e6c8b9c8b9c8b9d!2sStaatsstrasse%2024a%2C%209437%20Marbach%2C%20Switzerland!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus" width="100%" height="350" style={{
                  border: 0,
                  filter: 'grayscale(20%) saturate(80%)'
                }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Standort von Tina Christina Tomson"></iframe>
                </div>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: Contact Form */}
            <motion.div {...fadeInUp} className="lg:pl-8">
              <div className="bg-gradient-to-br from-white to-[#F5F3EF] rounded-3xl p-8 sm:p-10 lg:p-12 shadow-xl border border-[#4d83a4]/20">
                <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl text-[#4A4440] font-light mb-3">
                  Schreib mir eine Nachricht
                </h2>
                <p className="font-['Montserrat'] text-base text-[#6B6560] mb-8 leading-relaxed">
                  Fülle das Formular aus, und ich melde mich so schnell wie möglich bei dir zurück.
                </p>

                {/* Success Message */}
                {submitSuccess && <motion.div initial={{
                opacity: 0,
                y: -10
              }} animate={{
                opacity: 1,
                y: 0
              }} className="mb-6 p-4 bg-green-50 border-2 border-green-500 rounded-xl flex items-start gap-3" role="alert" aria-live="polite">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-['Montserrat'] font-semibold text-green-800 text-base">
                        Nachricht erfolgreich gesendet!
                      </p>
                      <p className="font-['Montserrat'] text-sm text-green-700 mt-1">
                        Ich melde mich in Kürze bei dir.
                      </p>
                    </div>
                  </motion.div>}

                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block font-['Montserrat'] text-sm font-semibold text-[#4A4440] mb-2">
                      Name <span className="text-[#4d83a4]" aria-label="Pflichtfeld">*</span>
                    </label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className={`w-full min-h-[48px] px-4 py-3 bg-white border-2 rounded-xl font-['Montserrat'] text-[#4A4440] placeholder-[#6B6560]/50 
                        transition-all duration-300
                        ${errors.name ? 'border-red-500 focus:border-red-600 focus:ring-4 focus:ring-red-100' : 'border-[#4d83a4]/30 focus:border-[#4d83a4] focus:ring-4 focus:ring-[#4d83a4]/10'}
                        focus:outline-none`} placeholder="Dein vollständiger Name" aria-required="true" aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />
                    {errors.name && <p id="name-error" className="mt-2 flex items-center gap-2 text-sm font-['Montserrat'] text-red-700" role="alert">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                        Bitte gib deinen Namen ein
                      </p>}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block font-['Montserrat'] text-sm font-semibold text-[#4A4440] mb-2">
                      E-Mail <span className="text-[#4d83a4]" aria-label="Pflichtfeld">*</span>
                    </label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className={`w-full min-h-[48px] px-4 py-3 bg-white border-2 rounded-xl font-['Montserrat'] text-[#4A4440] placeholder-[#6B6560]/50 
                        transition-all duration-300
                        ${errors.email ? 'border-red-500 focus:border-red-600 focus:ring-4 focus:ring-red-100' : 'border-[#4d83a4]/30 focus:border-[#4d83a4] focus:ring-4 focus:ring-[#4d83a4]/10'}
                        focus:outline-none`} placeholder="deine@email.com" aria-required="true" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />
                    {errors.email && <p id="email-error" className="mt-2 flex items-center gap-2 text-sm font-['Montserrat'] text-red-700" role="alert">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                        {errors.email.includes('gültige') ? 'Bitte gib eine gültige E-Mail-Adresse ein' : 'Bitte gib deine E-Mail-Adresse ein'}
                      </p>}
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block font-['Montserrat'] text-sm font-semibold text-[#4A4440] mb-2">
                      Thema <span className="text-[#4d83a4]" aria-label="Pflichtfeld">*</span>
                    </label>
                    <select id="subject" name="subject" value={formData.subject} onChange={handleInputChange} className={`w-full min-h-[48px] px-4 py-3 bg-white border-2 rounded-xl font-['Montserrat'] text-[#4A4440]
                        transition-all duration-300 cursor-pointer
                        ${errors.subject ? 'border-red-500 focus:border-red-600 focus:ring-4 focus:ring-red-100' : 'border-[#4d83a4]/30 focus:border-[#4d83a4] focus:ring-4 focus:ring-[#4d83a4]/10'}
                        focus:outline-none appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M7%207l3%203%203-3%22%20stroke%3D%22%234d83a4%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.5rem] bg-[right_0.5rem_center] bg-no-repeat pr-10`} aria-required="true" aria-invalid={!!errors.subject} aria-describedby={errors.subject ? "subject-error" : undefined}>
                      <option value="" disabled>
                        Bitte wählen...
                      </option>
                      <option value="massage">Massage</option>
                      <option value="breathwork">Atemarbeit</option>
                      <option value="consultation">Kostenlose Konsultation</option>
                      <option value="voucher">Geschenkgutschein</option>
                      <option value="other">Sonstiges</option>
                    </select>
                    {errors.subject && <p id="subject-error" className="mt-2 flex items-center gap-2 text-sm font-['Montserrat'] text-red-700" role="alert">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                        {errors.subject}
                      </p>}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block font-['Montserrat'] text-sm font-semibold text-[#4A4440] mb-2">
                      Nachricht <span className="text-[#4d83a4]" aria-label="Pflichtfeld">*</span>
                    </label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} rows={6} className={`w-full px-4 py-3 bg-white border-2 rounded-xl font-['Montserrat'] text-[#4A4440] placeholder-[#6B6560]/50 
                        transition-all duration-300 resize-none
                        ${errors.message ? 'border-red-500 focus:border-red-600 focus:ring-4 focus:ring-red-100' : 'border-[#4d83a4]/30 focus:border-[#4d83a4] focus:ring-4 focus:ring-[#4d83a4]/10'}
                        focus:outline-none`} placeholder="Teile mir mit, wie ich dir helfen kann..." aria-required="true" aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} />
                    {errors.message && <p id="message-error" className="mt-2 flex items-center gap-2 text-sm font-['Montserrat'] text-red-700" role="alert">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                        Bitte gib eine Nachricht ein
                      </p>}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <motion.button type="submit" disabled={isSubmitting} whileHover={!isSubmitting ? {
                    scale: 1.02
                  } : {}} whileTap={!isSubmitting ? {
                    scale: 0.98
                  } : {}} className={`w-full min-h-[56px] px-8 py-4 rounded-full font-['Montserrat'] text-lg font-semibold 
                        transition-all duration-300 shadow-lg hover:shadow-xl
                        flex items-center justify-center gap-3
                        ${isSubmitting ? 'bg-[#6B6560] text-white/70 cursor-not-allowed' : 'bg-[#4d83a4] text-white hover:bg-[#3d6a85]'}
                        focus:outline-none focus:ring-4 focus:ring-[#4d83a4]/30`} aria-label={isSubmitting ? "Nachricht wird gesendet" : "Nachricht absenden"}>
                      {isSubmitting ? <>
                          <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true"></div>
                          Wird gesendet...
                        </> : <>
                          <Send className="w-5 h-5" aria-hidden="true" />
                          Nachricht senden
                        </>}
                    </motion.button>
                  </div>

                  {/* Required Fields Note */}
                  <p className="text-sm font-['Montserrat'] text-[#6B6560] text-center">
                    <span className="text-[#4d83a4]">*</span> Pflichtfelder
                  </p>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-gradient-to-b from-[#F5F3EF] to-white">
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
          <div className="bg-[#4d83a4]/5 rounded-3xl p-8 sm:p-12 border border-[#4d83a4]/20">
            <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl text-[#4A4440] font-light mb-4">
              Ich freue mich auf deine Nachricht
            </h3>
            <p className="font-['Montserrat'] text-lg text-[#6B6560] leading-relaxed mb-6">
              In der Regel antworte ich innerhalb von 24 Stunden. Für dringende Anliegen 
              erreichst du mich am besten telefonisch.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-['Montserrat'] text-[#6B6560]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#4d83a4] rounded-full"></div>
                <span>Mon–Frei: 08:00–21:00</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#4d83a4] rounded-full"></div>
                <span>Wochenende: 09:00–21:00</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>;
}