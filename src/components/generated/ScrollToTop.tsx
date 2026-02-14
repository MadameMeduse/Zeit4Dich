import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

/**
 * ScrollToTop Component
 * 
 * Back to Top button that appears after scrolling down 300px.
 * Features:
 * - Fixed position at bottom-left corner
 * - Smooth scroll to top on click
 * - Elegant fade-in/fade-out animation
 * - Responsive design that avoids footer overlap
 */
export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when user scrolls down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <>
      {isVisible && <button onClick={scrollToTop} className="fixed bottom-6 left-6 z-40 p-3 rounded-full bg-[#4A4440] text-white shadow-lg hover:bg-[#8B9B8E] transition-all duration-300 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#8B9B8E] focus:ring-offset-2 animate-fade-in" aria-label="Scroll to top" style={{
      animation: 'fadeIn 0.3s ease-in-out'
    }}>
          <ChevronUp size={24} strokeWidth={2.5} />
        </button>}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>;
}