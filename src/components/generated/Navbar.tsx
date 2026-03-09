import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
const Logo = () => <img width="80" height="80" src="/images/Zeit4Dich_Logo.png" alt="Zeit Für Dich Logo" className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" style={{
  objectFit: "contain",
  objectPosition: "50% 50%",
  opacity: "1"
}} />;
type PageType = 'home' | 'about' | 'events' | 'contact' | 'atem' | 'massage' | 'inspiration';
interface NavbarProps {
  currentPage?: PageType;
  onNavigate?: (page: PageType, anchor?: string) => void;
}

/**
 * Navbar Component - Standalone Navigation Header
 * 
 * Independent, editable navigation component with mobile menu support.
 * Features:
 * - Smart hide/show behavior on scroll (disappears on scroll down, reappears on scroll up)
 * - Smooth transitions
 * - Auto-scroll to top on navigation
 * - Full-screen mobile menu overlay with body scroll lock
 * - Dropdown menus for 'Atem' and 'Massage' with sub-services
 * - Smart scroll: remembers position and scrolls to active link on menu open
 */
export default function Navbar({
  currentPage = 'home',
  onNavigate
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState<'atem' | 'massage' | null>(null);
  const [hasOpenedMenuBefore, setHasOpenedMenuBefore] = useState(false);
  const atemDropdownRef = useRef<HTMLDivElement>(null);
  const massageDropdownRef = useRef<HTMLDivElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const activeLinkRefs = useRef<{
    [key: string]: HTMLDivElement | HTMLButtonElement | null;
  }>({});

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';

      // Smart scroll logic
      if (hasOpenedMenuBefore && currentPage !== 'home') {
        // If user has navigated before, scroll to the active link
        setTimeout(() => {
          const activeRef = activeLinkRefs.current[currentPage];
          if (activeRef && mobileNavRef.current) {
            activeRef.scrollIntoView({
              behavior: 'smooth',
              block: 'center'
            });
          }
        }, 100);
      } else {
        // First time opening, scroll to top
        if (mobileNavRef.current) {
          mobileNavRef.current.scrollTop = 0;
        }
      }

      // Mark that the menu has been opened
      if (!hasOpenedMenuBefore) {
        setHasOpenedMenuBefore(true);
      }
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen, currentPage, hasOpenedMenuBefore]);
  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY === 0) {
        // At the top of the page, always show navbar
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show navbar
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px - hide navbar
        setIsVisible(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (atemDropdownRef.current && !atemDropdownRef.current.contains(event.target as Node)) {
        if (activeDropdown === 'atem') {
          setActiveDropdown(null);
        }
      }
      if (massageDropdownRef.current && !massageDropdownRef.current.contains(event.target as Node)) {
        if (activeDropdown === 'massage') {
          setActiveDropdown(null);
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown]);
  const handleNavigate = (page: PageType, anchor?: string) => {
    if (onNavigate) {
      onNavigate(page, anchor);
    }
    // Close mobile menu
    setMobileMenuOpen(false);
    setActiveDropdown(null);

    // Scroll to top instantly if no anchor
    if (!anchor) {
      window.scrollTo(0, 0);
    }
  };
  const handleAtemSubItemClick = (sectionId: string) => {
    if (currentPage === 'atem') {
      // Already on Atem page - use scrollToSection
      const scrollToSection = (id: string) => {
        const isMobile = window.innerWidth < 768;
        if (isMobile) {
          const carouselContainer = document.getElementById('mobile-carousel-section');
          if (carouselContainer) {
            carouselContainer.scrollIntoView({
              behavior: 'smooth',
              block: 'center'
            });
          }
        } else {
          const element = document.getElementById(id);
          if (element) {
            const imageElement = element.querySelector('.service-image') as HTMLElement;
            if (imageElement) {
              const imageHeight = imageElement.offsetHeight;
              const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
              const targetPosition = elementPosition + imageHeight / 2 - window.innerHeight / 2;
              window.scrollTo({
                top: Math.max(0, targetPosition),
                behavior: 'smooth'
              });
            }
          }
        }
      };
      scrollToSection(sectionId);
      setActiveDropdown(null);
      setMobileMenuOpen(false);
    } else {
      // Navigate to Atem page with anchor
      handleNavigate('atem', sectionId);
    }
  };
  const handleMassageSubItemClick = (sectionId: string) => {
    if (currentPage === 'massage') {
      // Already on Massage page - smooth scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
      setActiveDropdown(null);
      setMobileMenuOpen(false);
    } else {
      // Navigate to Massage page with anchor
      handleNavigate('massage', sectionId);
    }
  };
  const navLinks: {
    label: string;
    page: PageType;
    hasDropdown?: boolean;
    dropdownType?: 'atem' | 'massage';
  }[] = [{
    label: 'Über Mich',
    page: 'about'
  }, {
    label: 'Atem',
    page: 'atem',
    hasDropdown: true,
    dropdownType: 'atem'
  }, {
    label: 'Massage',
    page: 'massage',
    hasDropdown: true,
    dropdownType: 'massage'
  }, {
    label: 'Events',
    page: 'events'
  }, {
    label: 'Inspiration',
    page: 'inspiration'
  }];
  const atemSubItems = [{
    label: 'UR-ATEM© Prozess',
    sectionId: 'ur-atem-detail'
  }, {
    label: 'Atemcoaching',
    sectionId: 'atemcoaching-detail'
  }, {
    label: 'Warmwasser-Reise',
    sectionId: 'warmwasser-detail'
  }, {
    label: 'Coaching für Kids',
    sectionId: 'kids-detail'
  }];
  const massageSubItems = [{
    label: 'Expertise',
    sectionId: 'massage-expertise'
  }, {
    label: 'Angebot',
    sectionId: 'mein-angebot'
  }, {
    label: 'Atem-Massage',
    sectionId: 'atem-massage'
  }, {
    label: 'Behandlungsablauf',
    sectionId: 'massage-ablauf'
  }];
  const isActive = (page: PageType) => currentPage === page;
  return <header className={`fixed top-0 left-0 right-0 z-50 bg-[#C9C4BA]/95 backdrop-blur-sm transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => handleNavigate('home')} className="flex items-center gap-2 sm:gap-3 hover:opacity-90 transition-opacity" aria-label="Go to home">
          <Logo />
          <span className="text-white text-lg sm:text-xl lg:text-2xl font-light tracking-wide font-['Playfair_Display']" style={{
          display: "none"
        }}>
            Zeit Für Dich
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main navigation">
          {navLinks.map(link => {
          if (link.hasDropdown && link.dropdownType === 'atem') {
            return <div key={link.label} className="relative" ref={atemDropdownRef} onMouseEnter={() => setActiveDropdown('atem')} onMouseLeave={() => setActiveDropdown(null)}>
                  <button onClick={() => handleNavigate(link.page)} className={`flex items-center gap-1 text-white uppercase font-['Montserrat',_sans-serif] font-semibold text-base xl:text-lg hover:opacity-80 transition-opacity duration-300 ${isActive(link.page) ? 'opacity-100 border-b-2 border-white pb-1' : ''}`}>
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'atem' ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Dropdown Menu with AnimatePresence */}
                  <AnimatePresence>
                    {activeDropdown === 'atem' && <motion.div initial={{
                  opacity: 0,
                  y: -10
                }} animate={{
                  opacity: 1,
                  y: 0
                }} exit={{
                  opacity: 0,
                  y: -10
                }} transition={{
                  duration: 0.2
                }} className="absolute top-full left-0 mt-2 w-64 bg-white/90 backdrop-blur-md rounded-lg shadow-xl border border-white/20 py-2 z-50">
                        {atemSubItems.map(item => <button key={item.sectionId} onClick={() => handleAtemSubItemClick(item.sectionId)} className="w-full text-left px-4 py-3 text-[#4A4440] font-['Montserrat'] font-medium hover:bg-[#4d83a4]/10 transition-colors duration-200">
                            {item.label}
                          </button>)}
                      </motion.div>}
                  </AnimatePresence>
                </div>;
          }
          if (link.hasDropdown && link.dropdownType === 'massage') {
            return <div key={link.label} className="relative" ref={massageDropdownRef} onMouseEnter={() => setActiveDropdown('massage')} onMouseLeave={() => setActiveDropdown(null)}>
                  <button onClick={() => handleNavigate(link.page)} className={`flex items-center gap-1 text-white uppercase font-['Montserrat',_sans-serif] font-semibold text-base xl:text-lg hover:opacity-80 transition-opacity duration-300 ${isActive(link.page) ? 'opacity-100 border-b-2 border-white pb-1' : ''}`}>
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'massage' ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Dropdown Menu with AnimatePresence */}
                  <AnimatePresence>
                    {activeDropdown === 'massage' && <motion.div initial={{
                  opacity: 0,
                  y: -10
                }} animate={{
                  opacity: 1,
                  y: 0
                }} exit={{
                  opacity: 0,
                  y: -10
                }} transition={{
                  duration: 0.2
                }} className="absolute top-full left-0 mt-2 w-64 bg-white/90 backdrop-blur-md rounded-lg shadow-xl border border-white/20 py-2 z-50">
                        {massageSubItems.map(item => <button key={item.sectionId} onClick={() => handleMassageSubItemClick(item.sectionId)} className="w-full text-left px-4 py-3 text-[#4A4440] font-['Montserrat'] font-medium hover:bg-[#4d83a4]/10 transition-colors duration-200">
                            {item.label}
                          </button>)}
                      </motion.div>}
                  </AnimatePresence>
                </div>;
          }
          return <button key={link.label} onClick={() => handleNavigate(link.page)} className={`text-white uppercase font-['Montserrat',_sans-serif] font-semibold text-base xl:text-lg hover:opacity-80 transition-opacity duration-300 ${isActive(link.page) ? 'opacity-100 border-b-2 border-white pb-1' : ''}`}>
                {link.label}
              </button>;
        })}
        </nav>

        {/* Desktop Contact Button */}
        <button onClick={() => handleNavigate('contact')} className="hidden lg:block px-6 xl:px-8 py-2.5 xl:py-3 bg-[#4d83a4] text-white border-2 border-[#4d83a4] rounded-full hover:bg-[#3d6a85] hover:border-[#3d6a85] transition-all duration-300 tracking-wide font-['Montserrat',_sans-serif] font-semibold text-base xl:text-lg">
          Kontakt
        </button>

        {/* Mobile Menu Button */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-white p-2" aria-label="Toggle menu" aria-expanded={mobileMenuOpen}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation Menu - Full Screen Overlay */}
      {mobileMenuOpen && <div ref={mobileNavRef} className="lg:hidden fixed top-0 left-0 w-full h-[100dvh] bg-[#C9C4BA] z-[999] flex flex-col justify-center overflow-y-auto">
          {/* Close Button */}
          <button onClick={() => setMobileMenuOpen(false)} className="absolute top-4 right-4 text-white p-2 hover:opacity-80 transition-opacity" aria-label="Close menu">
            <X size={32} />
          </button>

          {/* Navigation Links - Vertically Centered */}
          <nav className="px-8 space-y-6 flex flex-col items-center py-8" aria-label="Mobile navigation">
            {navLinks.map(link => {
          if (link.hasDropdown && link.dropdownType === 'atem') {
            return <div key={link.label} className="w-full max-w-xs" ref={el => {
              if (isActive(link.page)) {
                activeLinkRefs.current[link.page] = el;
              }
            }}>
                    {/* Parent Link - Now navigates to page */}
                    <button onClick={() => handleNavigate(link.page)} className={`w-full text-center text-white uppercase font-['Montserrat',_sans-serif] py-3 hover:opacity-80 transition-opacity text-xl sm:text-2xl no-underline ${isActive(link.page) ? 'font-bold' : 'font-semibold'}`}>
                      {link.label}
                    </button>
                    
                    {/* Mobile Submenu - Always Expanded with Visual Hierarchy */}
                    <div className="mt-3 space-y-2 pl-4 border-l-2 border-white/30">
                      {atemSubItems.map(item => <button key={item.sectionId} onClick={() => handleAtemSubItemClick(item.sectionId)} className="block w-full text-left text-white/90 font-['Montserrat'] font-medium py-2 pl-4 hover:text-white hover:bg-white/10 rounded transition-all text-base no-underline">
                          {item.label}
                        </button>)}
                    </div>
                  </div>;
          }
          if (link.hasDropdown && link.dropdownType === 'massage') {
            return <div key={link.label} className="w-full max-w-xs" ref={el => {
              if (isActive(link.page)) {
                activeLinkRefs.current[link.page] = el;
              }
            }}>
                    {/* Parent Link - Now navigates to page */}
                    <button onClick={() => handleNavigate(link.page)} className={`w-full text-center text-white uppercase font-['Montserrat',_sans-serif] py-3 hover:opacity-80 transition-opacity text-xl sm:text-2xl no-underline ${isActive(link.page) ? 'font-bold' : 'font-semibold'}`}>
                      {link.label}
                    </button>
                    
                    {/* Mobile Submenu - Always Expanded with Visual Hierarchy */}
                    <div className="mt-3 space-y-2 pl-4 border-l-2 border-white/30">
                      {massageSubItems.map(item => <button key={item.sectionId} onClick={() => handleMassageSubItemClick(item.sectionId)} className="block w-full text-left text-white/90 font-['Montserrat'] font-medium py-2 pl-4 hover:text-white hover:bg-white/10 rounded transition-all text-base no-underline">
                          {item.label}
                        </button>)}
                    </div>
                  </div>;
          }
          return <button key={link.label} onClick={() => handleNavigate(link.page)} className={`text-white uppercase font-['Montserrat',_sans-serif] py-3 hover:opacity-80 transition-opacity text-xl sm:text-2xl no-underline ${isActive(link.page) ? 'font-bold' : 'font-semibold'}`} ref={el => {
            if (isActive(link.page)) {
              activeLinkRefs.current[link.page] = el;
            }
          }}>
                  {link.label}
                </button>;
        })}
            <button onClick={() => handleNavigate('contact')} className={`px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-[#C9C4BA] transition-all duration-300 tracking-wide font-['Montserrat',_sans-serif] text-xl sm:text-2xl mt-4 no-underline ${isActive('contact') ? 'font-bold' : 'font-semibold'}`} ref={el => {
          if (isActive('contact')) {
            activeLinkRefs.current['contact'] = el;
          }
        }}>
              Kontakt
            </button>
          </nav>
        </div>}
    </header>;
}