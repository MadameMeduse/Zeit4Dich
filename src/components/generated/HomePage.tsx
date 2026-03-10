import React from 'react';
import { HeroSection } from './HeroSection';
import { AtemPreviewSection } from './AtemPreviewSection';
import { AboutPreviewSection } from './AboutPreviewSection';
import { MassagePreviewSection } from './MassagePreviewSection';
import GiftVoucherSection from './GiftVoucherSection';
import { EventsPreviewSection } from './EventsPreviewSection';
import { InspirationSection } from './InspirationSection';
import { TestimonialsSection } from './TestimonialsSection';
import NewsletterHero from './NewsletterHero';
import { ClosingCTA } from './ClosingCTA';
type PageType = 'home' | 'about' | 'events' | 'contact' | 'atem' | 'massage' | 'inspiration';
interface HomePageProps {
  onNavigate?: (page: PageType, eventIdOrAnchor?: string) => void;
}

/**
 * HomePage - Main Landing Page
 * 
 * Clean production version without "Standalone" suffix.
 */
export default function HomePage({
  onNavigate
}: HomePageProps) {
  return <div className="min-h-screen bg-[#C9C4BA] pt-32" style={{
    paddingTop: "0px"
  }}>
      <HeroSection onNavigate={onNavigate || (() => {})} />
      <AboutPreviewSection onNavigate={onNavigate || (() => {})} />
      <AtemPreviewSection onNavigate={onNavigate || (() => {})} />
      <MassagePreviewSection onNavigate={onNavigate || (() => {})} />
      <TestimonialsSection  />
      <EventsPreviewSection onNavigate={onNavigate || (() => {})} />
      <InspirationSection />
      <GiftVoucherSection onNavigate={onNavigate || (() => {})} />
      <ClosingCTA onNavigate={onNavigate || (() => {})} />
      <NewsletterHero onNavigate={onNavigate || (() => {})} />

    </div>;
}