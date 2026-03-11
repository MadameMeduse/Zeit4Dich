"use client";

import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * ScrollToTop Component
 * Optimized for performance and right-hand side placement.
 */
export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Throttle scroll events to improve performance
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    
    const toggleVisibility = () => {
      if (timeoutId) return;

      timeoutId = setTimeout(() => {
        if (window.scrollY > 400) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
        timeoutId = null;
      }, 150); // Check every 150ms
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1, backgroundColor: '#3d6b88' }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          // Changed from left-6 to right-6
          className="fixed bottom-8 right-8 z-[60] p-4 rounded-full bg-[#4d83a4] text-white shadow-[0_10px_25px_-5px_rgba(77,131,164,0.4)] transition-colors focus:outline-none focus:ring-2 focus:ring-[#4d83a4] focus:ring-offset-2"
          aria-label="Nach oben scrollen"
        >
          <ChevronUp size={24} strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}