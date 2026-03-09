"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Logo = () => (
  <img 
    width="80" 
    height="80" 
    src="images/Zeit4Dich_Logo.png" 
    alt="Zeit Für Dich Logo" 
    className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-contain" 
  />
);

type PageType = 'home' | 'about' | 'events' | 'contact' | 'atem' | 'massage' | 'inspiration';

interface NavbarProps {
  currentPage?: PageType;
  onNavigate?: (page: PageType, anchor?: string) => void;
}

export default function Navbar({
  currentPage = 'home',
  onNavigate
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileMenuOpen]);

  // Smart Header Hide/Show on Scroll
  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY === 0) {
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const handleNavigate = (page: PageType) => {
    if (onNavigate) onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const navLinks: { label: string; page: PageType }[] = [
    { label: 'Über Mich', page: 'about' },
    { label: 'Atem', page: 'atem' },
    { label: 'Massage', page: 'massage' },
    { label: 'Events', page: 'events' },
    { label: 'Inspiration', page: 'inspiration' }
  ];

  const isActive = (page: PageType) => currentPage === page;

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[1001] bg-[#C9C4BA]/95 backdrop-blur-sm transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => handleNavigate('home')} className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <Logo />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map(link => (
              <button 
                key={link.label} 
                onClick={() => handleNavigate(link.page)} 
                className={`text-white uppercase font-['Montserrat'] font-semibold text-base xl:text-lg hover:opacity-80 transition-opacity ${isActive(link.page) ? 'border-b-2 border-white pb-1' : ''}`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop Contact CTA */}
          <button 
            onClick={() => handleNavigate('contact')} 
            className="hidden lg:block px-8 py-2.5 bg-[#4d83a4] text-white border-2 border-[#4d83a4] rounded-full hover:bg-[#3d6a85] transition-all font-semibold"
          >
            Kontakt
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="lg:hidden text-white p-2 relative z-[1100]"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </header>

      {/* Mobile Navigation Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-[#C9C4BA] z-[1000] lg:hidden"
          >
            <div className="flex flex-col items-center justify-start h-full overflow-y-auto pt-32 pb-12 px-8">
              <nav className="w-full max-w-xs space-y-12 flex flex-col items-center">
                {navLinks.map(link => {
                  const isLinkActive = isActive(link.page);
                  return (
                    <button 
                      key={link.label}
                      onClick={() => handleNavigate(link.page)} 
                      className={`inline-block text-white uppercase font-['Montserrat'] py-1 text-2xl transition-all ${isLinkActive ? 'font-bold border-b-2 border-white' : 'font-semibold'}`}
                    >
                      {link.label}
                    </button>
                  );
                })}
                
                <button 
                  onClick={() => handleNavigate('contact')} 
                  className={`px-12 py-4 border-2 border-white text-white rounded-full font-bold text-xl mt-4 transition-all ${isActive('contact') ? 'bg-white text-[#C9C4BA]' : ''}`}
                >
                  Kontakt
                </button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}