"use client";

import React from 'react';
import { HeroSection } from './HeroSection';
import { AboutPreviewSection } from './AboutPreviewSection';
import { AtemPreviewSection } from './AtemPreviewSection';
import { MassagePreviewSection } from './MassagePreviewSection';
import { TestimonialsSection } from './TestimonialsSection';
import { EventsPreviewSection } from './EventsPreviewSection';
import { InspirationSection } from './InspirationSection';
import  GiftVoucherSection  from './GiftVoucherSection';
import { ClosingCTA } from './ClosingCTA';
import  NewsletterHero  from './NewsletterHero';

// Define the types to match MainApp
type PageType = 'home' | 'about' | 'events' | 'contact' | 'atem' | 'massage' | 'inspiration';
type CategoryType = 'meditationen' | 'lifestyle' | 'blog';

interface HomePageProps {
  onNavigate: (page: PageType, anchor?: string) => void;
  onArticleClick: (articleId: string, category: CategoryType) => void;
}

/**
 * HomePage Component
 * * Acting as the primary landing page container.
 * It passes navigation and article selection logic down to specialized sections.
 */
export default function HomePage({ onNavigate, onArticleClick }: HomePageProps) {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* 1. Hero & Brand Entry */}
      <HeroSection onNavigate={onNavigate} />

      {/* 2. Core Service Previews */}
      <AboutPreviewSection onNavigate={onNavigate} />
      
      <AtemPreviewSection onNavigate={onNavigate} />
      
      <MassagePreviewSection onNavigate={onNavigate} />

      {/* 3. Social Proof */}
      <TestimonialsSection />

      {/* 4. Dynamic Previews (Events & Articles) */}
      <EventsPreviewSection onNavigate={onNavigate} />
      
      {/* CRITICAL FIX: 
          Passing 'onArticleClick' ensures the cards in this 
          section can communicate back to the MainApp state. 
      */}
      <InspirationSection 
        onNavigate={onNavigate} 
        onArticleClick={onArticleClick} 
      />

      {/* 5. Secondary Conversions */}
      <GiftVoucherSection onNavigate={onNavigate} />
      
      <ClosingCTA onNavigate={onNavigate} />

      {/* 6. Lead Generation */}
      <NewsletterHero onNavigate={onNavigate} />
    </div>
  );
}