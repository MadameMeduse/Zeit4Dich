"use client";

import React, { useState, useEffect, useLayoutEffect, useCallback, useRef, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, X } from 'lucide-react';

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location?: string;
  sessionType?: string;
}

type PauseReason = 'modal' | 'hover' | 'pointer' | 'focus' | 'hidden' | 'offscreen';

const AUTOPLAY_MS = 6000;
const SWIPE_MIN_DISTANCE = 48;

const TESTIMONIALS_CHRONOLOGICAL: Testimonial[] = [
  { id: '1', quote: 'Liebe Tina, die Massage heute war hervorragend! Das war mit Abstand die beste Massage die ich bisher hatte... Besonders wie Du den Druck unterschiedlich dem Muskel anpasst... ist einzigartig.', author: 'Christina', location: '19. Mai 2013' },
  { id: '2', quote: 'Liebe Tina Christina, noch einmal Danke für die intensive Massage inkl. Dehnungsübungen, \'Schulter-Check\', Atmung... es wird wieder mit dem Schulter :)', author: 'Andrea', location: 'Dez 2023' },
  { id: '3', quote: 'Die Atemsessions waren unglaublich entspannend und haben mir sehr geholfen, mehr Ruhe und Gelassenheit in meinen Alltag zu bringen. Durch die liebevolle und klare Anleitung fiel es mir leicht, loszulassen...', author: 'Aida', location: 'Zahnärztin', sessionType: 'Sept 2025' },
  { id: '4', quote: 'Die Massage war einfach unglaublich. Dieses tiefe Gefühl von Entspannung und Wohltat habe ich so bisher bei keinem anderen Masseur erlebt... Tina weiss genau, was sie tut.', author: 'Benjamin', location: 'Bauleiter', sessionType: 'Nov 2025' },
  { id: '5', quote: 'Seit einigen Jahren bin ich regelmässig bei Tina zur Massage... Sie massiert nicht einfach, sondern sie ist in Resonanz mit dem Körper und macht genau das, was dem Körper gerade gut tut.', author: 'Karl', location: 'Unternehmer', sessionType: 'Dez 2025' },
  { id: '6', quote: '30 Min gezieltes Kneten verspannter Muskelpartien um mein Schultergelenk erlöste mich von nächtlichen Beschwerden. Sie kennt sich auch mit Dehnübungen aus.', author: 'Johann', location: 'Jan 2026' },
  { id: '7', quote: 'Thank you a lot! Today i feel much better than yesterday. You have a creator given gift, of course you also worked on it, to screen peoples bodies for their incongruity. But further more i feel also your ability to connect to mind and soul, This helps to trust and release for a 100%. Thank you! ', author: 'Jürg', location: 'Apr 2026' },
  { id: '8', quote: 'Ich bin mit Schulterproblemen in die Massage zu Tina, nach 3-4 Massagen war der Schmerz weg. Gehe nun vorbeugend zur Massage, da sie nicht nur dem Körper sondern auch der Seele guttut.', author: 'Peter', location: 'May 2026' },
  { id: '9', quote: 'Eine Massage bei Tina ist mehr als eine Massage. Sie ist zugleich ein „in die Tiefe tauchen“ oder in den Wolken segeln. Danke für die Momente, dein Zuhören, die Worte. Ich komme wieder🙏🏼', author: 'Claudia', location: 'June 2026' },
  { id: '10', quote: 'Suuuuper entspannend gewesen. Tina macht es meega gut', author: 'BM', location: 'June 2026' },
  { id: '11', quote: 'Hervorragender Preis! Die Massage war hervorragend! Sehr angenehme Atmosphäre, professionelle Behandlung und genau die richtige Intensität. Tina spürt genau, was der Körper gerade braucht. Komme gerne wieder.', author: 'Martina', location: 'July 2026' },
  { id: '12', quote: 'Super entspannte massage u nacken verspannung gelöst. Vielen dank komme gerne wieder', author: 'Irene', location: 'July 2026' },
  { id: '13', quote: 'Tina ist wunderbar auf mich eingegangen. Sie spürte gezielt meine Problempunkte auf und massiert mit der passenden Intensität, erklärte dabei einfühlsam, wie Verspannungen entstehen. So fühlte ich mich verstanden, gut betreut und klar informiert. Herzlichen Dank! Komme gerne wieder.', author: 'Ilona', location: 'August 2026' },
  { id: '14', quote: 'Absolut empfehlenswert! Schon beim Betreten der Praxis herrscht eine sehr ruhige und saubere Atmosphäre, in der man sofort abschalten kann. Tina ist einfühlsam auf meine individuellen Bedürfnisse eingegangen und hat die schmerzenden, verspannten Stellen im Schulter- und Nackenbereich gezielt sowie professionell gelöst. Nach der Behandlung habe ich mich wie neu geboren und wunderbar entspannt gefühlt. Ich komme ganz sicher wieder!', author: 'Christof', location: 'August 2026' },
  { id: '15', quote: 'Die Massage ist hervorragend, egal ob bei Verspannungen oder einfach nur zum Entspannen, wenn man sich etwas Gutes tun möchte. Ich fühle mich bei Tina sehr gut aufgehoben.', author: 'Mick', location: 'August 2026' },
  { id: '16', quote: 'Super freundlich und sehr versiert. Empfehlenswert Gerne wieder. Danke', author: 'Yvonne', location: 'August 2026' },
  { id: '17', quote: 'Liebevolle & professionelle Massage! Gerne wieder! Top Empfehlung', author: 'Karin', location: 'September 2026' },
  { id: '18', quote: 'Verspannungen weg, tiefenentspannt & energiegeladen, top wirkungsvoll – sofort wieder!', author: 'Michi', location: 'September 2026' },
  { id: '19', quote: 'Danke für den schönen Atem-Abend, die verschiedenen Atemtechniken und dein grosses Wissen, das du mit uns geteilt hast. Ich bin gespannt auf die Atemreise.', author: 'Natalie', location: 'September 2026' },
  { id: '20', quote: 'Vielen Dank, ein super Massage, wie zwei Wochen Urlaub… Freue mich auf das nächste Mal', author: 'Charina', location: 'September 2026' },
  { id: '21', quote: 'Ich wurde sehr herzlich empfangen und habe mich vom ersten Moment an sehr wohlgefühlt. Schönes Ambiente, Parkplätze direkt vor dem Haus. Meine Anfahrt vom deutschen Bodenseeufer hat sich gelohnt – ich werde auf jeden Fall wiederkommen. Danke ', author: 'Stephan', location: 'September 2026' },
  { id: '22', quote: 'Danke für deine wertvolle Zeit und deine magischen Hände. Es ist einfach schön, dass du wieder hier bist und in meinen Körper hinein hörst. Du findest die Baustellen rasch und hilfst mir diese zu beseitigen. Du verbindest den Körper mit dem Geist und mit der Seele und bringst ihn dadurch in Einklang.', author: 'Jurg', location: 'September 2026' },
];

const MONTHS: Record<string, number> = {
  jan: 0, januar: 0,
  feb: 1, februar: 1,
  mar: 2, märz: 2, maerz: 2,
  apr: 3, april: 3,
  may: 4, mai: 4,
  jun: 5, june: 5, juni: 5,
  jul: 6, july: 6, juli: 6,
  aug: 7, august: 7,
  sep: 8, sept: 8, september: 8,
  oct: 9, okt: 9, oktober: 9,
  nov: 10, november: 10,
  dec: 11, dez: 11, dezember: 11,
};

const testimonialTimestamp = (item: Testimonial, fallbackIndex: number) => {
  const raw = `${item.location ?? ''} ${item.sessionType ?? ''}`;
  const yearMatch = raw.match(/(20\d{2}|19\d{2})/);
  if (!yearMatch) return fallbackIndex;
  const monthEntry = Object.entries(MONTHS).find(([name]) =>
    new RegExp(`\\b${name}\\b`, 'i').test(raw)
  );
  const dayMatch = raw.match(/\b(\d{1,2})\./);
  return Date.UTC(
    Number(yearMatch[1]),
    monthEntry ? monthEntry[1] : 0,
    dayMatch ? Number(dayMatch[1]) : 1
  );
};

const testimonials: Testimonial[] = TESTIMONIALS_CHRONOLOGICAL
  .map((item, index) => ({ item, index }))
  .sort((a, b) => {
    const delta = testimonialTimestamp(b.item, b.index) - testimonialTimestamp(a.item, a.index);
    return delta !== 0 ? delta : b.index - a.index;
  })
  .map(({ item }) => item);

const formatMeta = (item: Testimonial) =>
  [item.location, item.sessionType].filter(Boolean).join(' • ');

const wrapIndex = (index: number) =>
  (index + testimonials.length) % testimonials.length;

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);
  const readMoreRef = useRef<HTMLButtonElement>(null);
  const pauseReasonsRef = useRef(new Set<PauseReason>(['offscreen']));
  const timerRef = useRef<number | null>(null);
  const dialogTitleId = useId();

  const current = testimonials[currentIndex];

  const stopTimer = useCallback(() => {
    if (timerRef.current == null) return;
    window.clearTimeout(timerRef.current);
    timerRef.current = null;
  }, []);

  // Single timeout loop. prefers-reduced-motion only skips slide animation — it
  // used to also cancel autoplay, which is why the slider never advanced on this OS.
  const startTimer = useCallback(() => {
    stopTimer();
    if (pauseReasonsRef.current.size > 0) return;
    timerRef.current = window.setTimeout(() => {
      timerRef.current = null;
      setDirection(1);
      setCurrentIndex((prev) => wrapIndex(prev + 1));
    }, AUTOPLAY_MS);
  }, [stopTimer]);

  const setPauseReason = useCallback((reason: PauseReason, active: boolean) => {
    const reasons = pauseReasonsRef.current;
    const has = reasons.has(reason);
    if (active === has) return;
    if (active) reasons.add(reason);
    else reasons.delete(reason);
    startTimer();
  }, [startTimer]);

  const goTo = useCallback((index: number, dir: number) => {
    setDirection(dir);
    setCurrentIndex(wrapIndex(index));
  }, []);

  const goToNext = useCallback(() => goTo(currentIndex + 1, 1), [currentIndex, goTo]);
  const goToPrev = useCallback(() => goTo(currentIndex - 1, -1), [currentIndex, goTo]);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReducedMotion(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    setPauseReason('modal', isModalOpen);
  }, [isModalOpen, setPauseReason]);

  useEffect(() => {
    const onVisibility = () => setPauseReason('hidden', document.hidden);
    onVisibility();
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, [setPauseReason]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setPauseReason('offscreen', !entry.isIntersecting),
      { threshold: 0, rootMargin: '80px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [setPauseReason]);

  useEffect(() => {
    const releasePointer = () => setPauseReason('pointer', false);
    window.addEventListener('pointerup', releasePointer);
    window.addEventListener('pointercancel', releasePointer);
    return () => {
      window.removeEventListener('pointerup', releasePointer);
      window.removeEventListener('pointercancel', releasePointer);
    };
  }, [setPauseReason]);

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, [startTimer, stopTimer, currentIndex]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setDirection(0);
    requestAnimationFrame(() => readMoreRef.current?.focus());
  }, []);

  const handlePointerEnter = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'mouse') setPauseReason('hover', true);
  };
  const handlePointerLeave = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'mouse') setPauseReason('hover', false);
  };
  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse') setPauseReason('pointer', true);
  };

  const handleFocusCapture = (event: React.FocusEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).matches?.(':focus-visible')) {
      setPauseReason('focus', true);
    }
  };
  const handleBlurCapture = (event: React.FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setPauseReason('focus', false);
    }
  };

  const slideTransition = reducedMotion || isModalOpen
    ? { duration: 0 }
    : {
        x: { type: 'spring' as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 }
      };

  const variants = {
    enter: (dir: number) => ({
      x: reducedMotion || isModalOpen ? 0 : dir > 0 ? 100 : -100,
      opacity: reducedMotion || isModalOpen ? 1 : 0,
      scale: reducedMotion || isModalOpen ? 1 : 0.95
    }),
    center: { zIndex: 1, x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({
      zIndex: 0,
      x: reducedMotion || isModalOpen ? 0 : dir < 0 ? 100 : -100,
      opacity: reducedMotion || isModalOpen ? 1 : 0,
      scale: reducedMotion || isModalOpen ? 1 : 0.95
    })
  };

  return (
    <section id="testimonials" className="py-8 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <motion.header
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center sm:mb-5"
        >
          <h2
            className="text-[#4d83a4] font-['Playfair_Display'] font-bold tracking-tight mb-4"
            style={{ fontSize: 'clamp(30px, 4vw, 45px)' }}
          >
            STIMMEN & ERFAHRUNGEN
          </h2>
          <div className="h-1 w-20 bg-[#4d83a4]/20 mx-auto rounded-full" />
        </motion.header>

        <div
          className="relative"
          onPointerEnter={handlePointerEnter}
          onPointerLeave={handlePointerLeave}
          onPointerDown={handlePointerDown}
          onFocusCapture={handleFocusCapture}
          onBlurCapture={handleBlurCapture}
        >
          <div ref={trackRef} className="relative overflow-hidden rounded-[3rem]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={slideTransition}
                className="w-full"
              >
                <TestimonialCard
                  item={current}
                  isModalOpen={isModalOpen}
                  readMoreRef={readMoreRef}
                  onReadMore={openModal}
                />
              </motion.div>
            </AnimatePresence>

            {([
              ['prev', goToPrev],
              ['next', goToNext],
            ] as const).map(([direction, onClick]) => (
              <SlideArrow key={direction} direction={direction} onClick={onClick} />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <SlideDots index={currentIndex} total={testimonials.length} />
          </div>
        </div>
      </div>

      <TestimonialModal
        isOpen={isModalOpen}
        items={testimonials}
        index={currentIndex}
        titleId={dialogTitleId}
        reducedMotion={reducedMotion}
        onIndexChange={goTo}
        onClose={closeModal}
      />
    </section>
  );
};

function SlideArrow({
  direction,
  onClick,
}: {
  direction: 'prev' | 'next';
  onClick: () => void;
}) {
  const previous = direction === 'prev';
  const Icon = previous ? ChevronLeft : ChevronRight;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={previous ? 'Previous testimonial' : 'Next testimonial'}
      className={`absolute top-0 bottom-0 z-20 flex w-11 cursor-pointer items-center justify-center bg-transparent text-[#4d83a4] transition-colors motion-reduce:transition-none hover:bg-[#4d83a4]/10 active:bg-[#4d83a4]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4d83a4] focus-visible:[outline-offset:-4px] sm:w-16 ${
        previous ? 'left-0' : 'right-0'
      }`}
    >
      <Icon className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={1} aria-hidden="true" />
    </button>
  );
}

function SlideDots({ index, total }: { index: number; total: number }) {
  const active = index === 0 ? 0 : index === total - 1 ? 2 : 1;

  return (
    <div className="flex h-1.5 w-[4.5rem] items-center gap-3" aria-hidden="true">
      {[0, 1, 2].map((position) => (
        <span
          key={position}
          className={`h-1.5 rounded-full transition-all duration-500 motion-reduce:transition-none ${
            position === active ? 'w-8 bg-[#4d83a4]' : 'w-2 bg-[#4d83a4]/20'
          }`}
        />
      ))}
    </div>
  );
}

function TestimonialCard({
  item,
  isModalOpen,
  readMoreRef,
  onReadMore,
}: {
  item: Testimonial;
  isModalOpen: boolean;
  readMoreRef: React.RefObject<HTMLButtonElement | null>;
  onReadMore: () => void;
}) {
  const quoteRef = useRef<HTMLParagraphElement>(null);
  const [isTruncated, setIsTruncated] = useState(false);

  useLayoutEffect(() => {
    const el = quoteRef.current;
    if (!el) return;
    let frame = 0;

    const check = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setIsTruncated(el.scrollHeight > el.clientHeight);
      });
    };

    check();
    const ro = new ResizeObserver(check);
    ro.observe(el);
    void document.fonts?.ready.then(check);

    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
    };
  }, [item.id]);

  return (
    <div className="relative rounded-[3rem] bg-[#4d83a4]/5 px-14 py-10 sm:px-20 sm:py-16">
      <Quote className="absolute top-10 left-14 sm:left-20 text-[#4d83a4]/10 w-16 h-16 -z-0" />

      <blockquote className="relative z-10 flex flex-col">
        <div className="testimonial-quote-frame">
          <p
            ref={quoteRef}
            className="testimonial-quote text-stone-600 font-['Montserrat'] font-light italic"
            style={{ display: '-webkit-box' }}
          >
            "{item.quote}"
          </p>
        </div>

        <div className="mt-4 h-8 flex items-center">
          <button
            ref={readMoreRef}
            type="button"
            aria-haspopup="dialog"
            aria-expanded={isModalOpen}
            tabIndex={isTruncated ? 0 : -1}
            onClick={(event) => {
              event.stopPropagation();
              onReadMore();
            }}
            className="testimonial-nav text-[#4d83a4] font-['Montserrat'] text-sm tracking-wide uppercase hover:text-[#2c4b5e] transition-colors"
            style={{ visibility: isTruncated ? 'visible' : 'hidden' }}
          >
            Mehr lesen
          </button>
        </div>

        <footer className="mt-6 flex flex-col gap-1">
          <span className="text-[#2c4b5e] font-semibold tracking-wide uppercase text-sm font-['Montserrat'] block h-[1.25em] overflow-hidden text-ellipsis whitespace-nowrap">
            {item.author}
          </span>
          <span className="text-[#4d83a4]/60 text-xs font-['Montserrat'] uppercase tracking-[0.2em] block h-[1.5em] overflow-hidden text-ellipsis whitespace-nowrap">
            {formatMeta(item)}
          </span>
        </footer>
      </blockquote>
    </div>
  );
}

function TestimonialModal({
  isOpen,
  items,
  index,
  titleId,
  reducedMotion,
  onIndexChange,
  onClose,
}: {
  isOpen: boolean;
  items: Testimonial[];
  index: number;
  titleId: string;
  reducedMotion: boolean;
  onIndexChange: (index: number, direction: number) => void;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const pointerStart = useRef<{ x: number; y: number } | null>(null);
  const openedAtRef = useRef(0);
  const onCloseRef = useRef(onClose);
  const indexRef = useRef(index);
  const onIndexChangeRef = useRef(onIndexChange);
  const item = items[index];

  onCloseRef.current = onClose;
  indexRef.current = index;
  onIndexChangeRef.current = onIndexChange;

  const goPrev = () => onIndexChangeRef.current(indexRef.current - 1, -1);
  const goNext = () => onIndexChangeRef.current(indexRef.current + 1, 1);

  useLayoutEffect(() => {
    if (isOpen) bodyRef.current?.scrollTo({ top: 0 });
  }, [index, isOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) dialog.showModal();
      openedAtRef.current = Date.now();
      closeRef.current?.focus();
    } else if (dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const onCancel = (event: Event) => {
      event.preventDefault();
      onCloseRef.current();
    };
    const onBackdropClick = (event: MouseEvent) => {
      if (event.target !== dialog) return;
      // Ignore the click that opened the dialog (same gesture / Strict Mode remount).
      if (Date.now() - openedAtRef.current < 400) return;
      onCloseRef.current();
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (!dialog.open) return;
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        goPrev();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        goNext();
      }
    };

    dialog.addEventListener('cancel', onCancel);
    dialog.addEventListener('click', onBackdropClick);
    dialog.addEventListener('keydown', onKeyDown);
    return () => {
      dialog.removeEventListener('cancel', onCancel);
      dialog.removeEventListener('click', onBackdropClick);
      dialog.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    pointerStart.current = { x: event.clientX, y: event.clientY };
  };
  const onPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    const start = pointerStart.current;
    pointerStart.current = null;
    if (!start) return;
    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;
    if (Math.abs(dx) < SWIPE_MIN_DISTANCE || Math.abs(dx) <= Math.abs(dy)) return;
    if (dx < 0) goNext();
    else goPrev();
  };

  return (
    <dialog ref={dialogRef} className="testimonial-dialog" aria-labelledby={titleId}>
      <div
        className="relative flex flex-col w-full max-h-[85dvh] bg-white rounded-[2rem] shadow-lg overflow-hidden"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="testimonial-nav absolute top-5 right-5 z-10 p-2 text-[#4d83a4] hover:bg-[#4d83a4]/5 rounded-full transition-colors"
        >
          <X size={22} strokeWidth={1.5} />
        </button>

        <div
          ref={bodyRef}
          className="flex-1 min-h-0 overflow-y-auto px-8 sm:px-12 pt-12 pb-6"
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerCancel={() => { pointerStart.current = null; }}
        >
          <Quote className="text-[#4d83a4]/10 w-12 h-12 mb-4" />
          <div
            aria-live="polite"
            className={`testimonial-dialog-fade ${reducedMotion ? '' : 'transition-opacity duration-200'}`}
          >
            <blockquote key={item.id}>
              <p className="text-xl sm:text-2xl text-stone-600 font-['Montserrat'] font-light leading-relaxed italic mb-8">
                "{item.quote}"
              </p>
              <footer className="flex flex-col gap-1">
                <span
                  id={titleId}
                  className="text-[#2c4b5e] font-semibold tracking-wide uppercase text-sm font-['Montserrat']"
                >
                  {item.author}
                </span>
                <span className="text-[#4d83a4]/60 text-xs font-['Montserrat'] uppercase tracking-[0.2em]">
                  {formatMeta(item)}
                </span>
              </footer>
            </blockquote>
          </div>
        </div>

        <div className="shrink-0 flex items-center justify-between gap-4 px-8 sm:px-12 py-5 border-t border-[#4d83a4]/10">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous testimonial"
            className="testimonial-nav p-2 text-[#4d83a4] hover:bg-[#4d83a4]/5 rounded-full transition-colors"
          >
            <ChevronLeft size={28} strokeWidth={1} />
          </button>
          <span className="text-[#4d83a4]/70 font-['Montserrat'] text-xs uppercase tracking-[0.2em]">
            {index + 1} / {items.length}
          </span>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next testimonial"
            className="testimonial-nav p-2 text-[#4d83a4] hover:bg-[#4d83a4]/5 rounded-full transition-colors"
          >
            <ChevronRight size={28} strokeWidth={1} />
          </button>
        </div>
      </div>
    </dialog>
  );
}
