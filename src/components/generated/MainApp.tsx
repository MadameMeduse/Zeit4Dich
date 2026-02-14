import { useState, useMemo } from 'react';
import Navbar from './Navbar';
import FooterComponent from './FooterComponent';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import AtemPage from './AtemPage';
import MassagePage from './MassagePage';
import EventsPage from './EventsPage';
import InspirationPage from './InspirationPage';
import KontaktPage from './KontaktPage';
import ArticlePage from './ArticlePage';
import { ScrollToTop } from './ScrollToTop';
type PageType = 'home' | 'about' | 'events' | 'contact' | 'atem' | 'massage' | 'inspiration';
type CategoryType = 'meditationen' | 'diy-praktiken' | 'blog';

/**
 * MainApp Component
 * 
 * Main application component that integrates all standalone page components.
 * Manages navigation state and renders the appropriate page based on user selection.
 * 
 * This component pulls together:
 * - Navbar (navigation header)
 * - FooterComponent (footer)
 * - HomePage, AtemPage, MassagePage, etc. (pages)
 * 
 * Each component can be edited independently on the canvas.
 */
export default function MainApp() {
  const [currentPage, setCurrentPage] = useState<PageType>('atem');
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [currentArticle, setCurrentArticle] = useState<{
    id: string;
    category: CategoryType;
  } | null>(null);
  const handleNavigate = (page: PageType, eventIdOrAnchor?: string) => {
    setCurrentPage(page);
    setCurrentArticle(null); // Reset article when navigating to different page

    // Handle event deep-linking
    if (page === 'events' && eventIdOrAnchor) {
      setSelectedEventId(eventIdOrAnchor);
      // Update URL with query parameter
      const url = new URL(window.location.href);
      url.searchParams.set('selection', eventIdOrAnchor);
      window.history.pushState({}, '', url.toString());
    } else {
      setSelectedEventId(null);
      // Clean URL parameters when navigating away from events
      if (page !== 'events') {
        const url = new URL(window.location.href);
        url.searchParams.delete('selection');
        window.history.pushState({}, '', url.toString());
      }
    }
    window.scrollTo(0, 0);

    // Handle anchor scroll for non-event pages (like atem, massage services)
    if (eventIdOrAnchor && page !== 'events') {
      // Delay scroll to ensure page has rendered
      setTimeout(() => {
        const element = document.getElementById(eventIdOrAnchor);
        if (element) {
          // For mobile carousel, detect if we're on mobile and handle differently
          const isMobile = window.innerWidth < 768;
          if (isMobile) {
            // On mobile, scroll to the carousel and set active slide
            const imageElement = element.querySelector('.service-image') as HTMLElement;
            if (imageElement) {
              const imageHeight = imageElement.offsetHeight;
              const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
              const targetPosition = elementPosition + imageHeight / 2 - window.innerHeight / 2;
              window.scrollTo({
                top: Math.max(0, targetPosition),
                behavior: 'smooth'
              });
            } else {
              element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }
          } else {
            // Desktop: scroll with offset to show image and title
            const imageElement = element.querySelector('.service-image') as HTMLElement;
            if (imageElement) {
              const imageHeight = imageElement.offsetHeight;
              const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
              const targetPosition = elementPosition + imageHeight / 2 - window.innerHeight / 2;
              window.scrollTo({
                top: Math.max(0, targetPosition),
                behavior: 'smooth'
              });
            } else {
              element.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
              });
            }
          }
        }
      }, 300);
    }
  };
  const handleArticleClick = (articleId: string, category: CategoryType) => {
    setCurrentArticle({
      id: articleId,
      category
    });
    window.scrollTo(0, 0);
  };
  const handleBackToInspiration = () => {
    setCurrentArticle(null);
    window.scrollTo(0, 0);
  };

  // Render current page content
  const renderPage = () => {
    // If viewing an article, show ArticlePage
    if (currentPage === 'inspiration' && currentArticle) {
      return <ArticlePage articleId={currentArticle.id} category={currentArticle.category} onNavigate={handleNavigate} onBack={handleBackToInspiration} onArticleClick={handleArticleClick} />;
    }
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'atem':
        return <AtemPage onNavigate={handleNavigate} />;
      case 'massage':
        return <MassagePage onNavigate={handleNavigate} />;
      case 'events':
        return <EventsPage onNavigate={handleNavigate} selectedEventId={selectedEventId || undefined} />;
      case 'inspiration':
        return <InspirationPage onNavigate={handleNavigate} onArticleClick={handleArticleClick} />;
      case 'contact':
        return <KontaktPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };
  return useMemo(() => {
    return <div className="min-h-screen flex flex-col bg-[#C9C4BA]">
        <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
        <main className="flex-1" style={{
        paddingTop: "0px",
        paddingLeft: "0px",
        background: "rgb(145 141 134 / 0)"
      }}>
          {renderPage()}
        </main>
        <FooterComponent onNavigate={handleNavigate} />
        <ScrollToTop />
      </div>;
  }, [currentPage, currentArticle]);
}