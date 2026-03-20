"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const IMAGES = [
  '/toolkit/1.png',
  '/toolkit/2.png',
  '/toolkit/3.png',
  '/toolkit/4.png',
  '/toolkit/5.png',
  '/toolkit/6.png',
  '/toolkit/7.png',
  '/toolkit/8.png',
  '/toolkit/9.png',
];

const TOTAL = IMAGES.length;
const TRANSITION_MS = 500;
const AUTOPLAY_MS  = 4000;

export default function UltimateToolkitSection() {
  useScrollReveal();

  // Use refs so interval callbacks always see fresh values
  const currentRef  = useRef(0);
  const animatingRef = useRef(false);

  const [displayIdx, setDisplayIdx]   = useState(0);   // the slide shown
  const [exitIdx,    setExitIdx]      = useState<number | null>(null);
  const [dir,        setDir]          = useState<'next' | 'prev'>('next');
  const [animating,  setAnimating]    = useState(false);
  const [progressKey, setProgressKey] = useState(0);

  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Core navigation — works even if called while animating by cancelling prev anim
  const goTo = (target: number, direction: 'next' | 'prev') => {
    const from = currentRef.current;
    if (target === from) return;

    // If already animating, instant-commit the current slide before starting new
    animatingRef.current = true;
    setAnimating(true);
    setDir(direction);
    setExitIdx(from);
    setDisplayIdx(target);
    currentRef.current = target;

    clearTimeout((goTo as any).__timer);
    (goTo as any).__timer = setTimeout(() => {
      setExitIdx(null);
      setAnimating(false);
      animatingRef.current = false;
      setProgressKey(k => k + 1);
    }, TRANSITION_MS);
  };

  const goNext = () => {
    const next = (currentRef.current + 1) % TOTAL;
    goTo(next, 'next');
  };

  const goPrev = () => {
    const prev = (currentRef.current - 1 + TOTAL) % TOTAL;
    goTo(prev, 'prev');
  };

  const startAutoplay = () => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(goNext, AUTOPLAY_MS);
  };

  const stopAutoplay = () => {
    if (autoRef.current) {
      clearInterval(autoRef.current);
      autoRef.current = null;
    }
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <style>{`
        .ubs-section {
          padding: 3rem 0;
          position: relative;
          z-index: 10;
        }
        .ubs-inner {
          max-width: 780px;
          margin: 0 auto;
          padding: 1.75rem 1.5rem 2rem;
          background: rgba(12,12,12,0.65);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-radius: 20px;
          border: 1px solid rgba(255,26,26,0.14);
          box-shadow: 0 0 50px rgba(255,26,26,0.06), 0 16px 48px rgba(0,0,0,0.55);
        }

        /* Header */
        .ubs-header {
          text-align: center;
          margin-bottom: 1.25rem;
        }
        .ubs-header h2 {
          font-family: var(--font-orbitron);
          font-size: clamp(1.1rem, 2.5vw, 1.6rem);
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: -0.02em;
          color: #fff;
          margin-bottom: 0.3rem;
        }
        .ubs-header p {
          font-size: 0.8rem;
          color: var(--muted-foreground);
        }

        /* Viewport */
        .ubs-viewport {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10;
          border-radius: 12px;
          overflow: hidden;
          background: #060606;
          box-shadow: 0 0 0 1px rgba(255,255,255,0.05), 0 6px 28px rgba(0,0,0,0.7);
          cursor: pointer;
        }

        /* Slides */
        .ubs-slide {
          position: absolute;
          inset: 0;
          will-change: transform, opacity, filter;
        }
        /* Active / resting */
        .ubs-active {
          z-index: 2;
          opacity: 1;
          transform: scale(1) translateX(0);
          filter: blur(0);
        }
        /* Entering from right (next) */
        .ubs-enter-right {
          z-index: 2;
          animation: ubsEnterR ${TRANSITION_MS}ms cubic-bezier(0.22,1,0.36,1) both;
        }
        /* Entering from left (prev) */
        .ubs-enter-left {
          z-index: 2;
          animation: ubsEnterL ${TRANSITION_MS}ms cubic-bezier(0.22,1,0.36,1) both;
        }
        /* Exiting to left (next) */
        .ubs-exit-left {
          z-index: 1;
          animation: ubsExitL ${TRANSITION_MS}ms cubic-bezier(0.22,1,0.36,1) both;
        }
        /* Exiting to right (prev) */
        .ubs-exit-right {
          z-index: 1;
          animation: ubsExitR ${TRANSITION_MS}ms cubic-bezier(0.22,1,0.36,1) both;
        }

        @keyframes ubsEnterR {
          from { opacity:0; transform: scale(1.05) translateX(5%);  filter: blur(8px); }
          to   { opacity:1; transform: scale(1)    translateX(0);   filter: blur(0); }
        }
        @keyframes ubsEnterL {
          from { opacity:0; transform: scale(1.05) translateX(-5%); filter: blur(8px); }
          to   { opacity:1; transform: scale(1)    translateX(0);   filter: blur(0); }
        }
        @keyframes ubsExitL {
          from { opacity:1; transform: scale(1)    translateX(0);   filter: blur(0); }
          to   { opacity:0; transform: scale(0.95) translateX(-5%); filter: blur(8px); }
        }
        @keyframes ubsExitR {
          from { opacity:1; transform: scale(1)    translateX(0);  filter: blur(0); }
          to   { opacity:0; transform: scale(0.95) translateX(5%); filter: blur(8px); }
        }

        /* Gradient + counter overlay */
        .ubs-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 50%);
          z-index: 3;
          pointer-events: none;
        }
        .ubs-counter {
          position: absolute;
          bottom: 10px;
          right: 14px;
          z-index: 4;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          color: rgba(255,255,255,0.55);
          pointer-events: none;
          font-variant-numeric: tabular-nums;
        }

        /* Progress bar */
        .ubs-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          background: linear-gradient(90deg, #ff1a1a, #ff6b6b);
          box-shadow: 0 0 8px rgba(255,26,26,0.8);
          z-index: 5;
          animation: ubsBar ${AUTOPLAY_MS}ms linear both;
          pointer-events: none;
        }
        @keyframes ubsBar {
          from { width: 0% }
          to   { width: 100% }
        }

        /* Arrow buttons */
        .ubs-arrows {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 10px;
          z-index: 6;
          pointer-events: none;
        }
        .ubs-arrow {
          pointer-events: all;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(0,0,0,0.5);
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #fff;
          flex-shrink: 0;
          transition: background 0.18s, border-color 0.18s, box-shadow 0.18s;
        }
        .ubs-arrow:hover {
          background: rgba(255,26,26,0.32);
          border-color: rgba(255,26,26,0.55);
          box-shadow: 0 0 14px rgba(255,26,26,0.4);
        }
        .ubs-arrow:active { opacity: 0.7; }

        /* Thumbnails */
        .ubs-thumbs {
          display: flex;
          justify-content: center;
          gap: 5px;
          margin-top: 10px;
          flex-wrap: wrap;
        }
        .ubs-thumb {
          position: relative;
          width: 48px;
          height: 32px;
          border-radius: 5px;
          overflow: hidden;
          cursor: pointer;
          border: 2px solid transparent;
          transition: border-color 0.2s, transform 0.18s, box-shadow 0.2s;
          background: #111;
          flex-shrink: 0;
        }
        .ubs-thumb:hover {
          transform: translateY(-2px);
          border-color: rgba(255,255,255,0.28);
        }
        .ubs-thumb.active-thumb {
          border-color: var(--accent);
          box-shadow: 0 0 10px rgba(255,26,26,0.45);
          transform: translateY(-3px);
        }
        .ubs-thumb-dim {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.38);
          transition: background 0.2s;
        }
        .ubs-thumb.active-thumb .ubs-thumb-dim,
        .ubs-thumb:hover .ubs-thumb-dim { background: transparent; }

        /* Badge */
        .ubs-badge {
          margin-top: 1rem;
          text-align: center;
        }
        .ubs-badge span {
          display: inline-block;
          padding: 0.28rem 1rem;
          border-radius: 100px;
          background: rgba(0,0,0,0.55);
          border: 1px solid rgba(255,26,26,0.22);
          color: rgba(255,255,255,0.6);
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          backdrop-filter: blur(6px);
        }

        /* Buy Now button */
        .ubs-buy-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 0.7rem 2.2rem;
          border-radius: 100px;
          background: linear-gradient(135deg, #ff1a1a 0%, #cc0000 100%);
          color: #fff;
          font-family: var(--font-orbitron);
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          box-shadow: 0 0 24px rgba(255,26,26,0.4), 0 4px 16px rgba(0,0,0,0.4);
          transition: transform 0.18s, box-shadow 0.18s;
        }
        .ubs-buy-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 60%);
          pointer-events: none;
        }
        .ubs-buy-btn:hover {
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 0 36px rgba(255,26,26,0.6), 0 8px 24px rgba(0,0,0,0.5);
        }
        .ubs-buy-btn:active {
          transform: scale(0.97);
        }
        .ubs-buy-wrap {
          margin-top: 1.25rem;
          text-align: center;
        }
      `}</style>

      <section className="ubs-section" id="toolkit">
        <div className="container">
          <div className="ubs-inner reveal">

            {/* Header */}
            <div className="ubs-header">
              <h2>Ultimate Editing Toolkit</h2>
              <p>The complete toolkit — everything you need in one place.</p>
            </div>

            {/* Slideshow viewport */}
            <div
              className="ubs-viewport"
              onMouseEnter={stopAutoplay}
              onMouseLeave={startAutoplay}
            >
              {/* Exiting slide */}
              {exitIdx !== null && (
                <div
                  key={`exit-${exitIdx}`}
                  className={`ubs-slide ${dir === 'next' ? 'ubs-exit-left' : 'ubs-exit-right'}`}
                >
                  <Image
                    src={IMAGES[exitIdx]}
                    alt={`Toolkit image ${exitIdx + 1}`}
                    fill
                    style={{ objectFit: 'contain', background: '#060606' }}
                    sizes="(max-width:768px) 100vw, 800px"
                  />
                </div>
              )}

              {/* Current slide */}
              <div
                key={`slide-${displayIdx}`}
                className={`ubs-slide ${animating
                  ? (dir === 'next' ? 'ubs-enter-right' : 'ubs-enter-left')
                  : 'ubs-active'
                }`}
              >
                <Image
                  src={IMAGES[displayIdx]}
                  alt={`Toolkit image ${displayIdx + 1}`}
                  fill
                  style={{ objectFit: 'contain', background: '#060606' }}
                  sizes="(max-width:768px) 100vw, 800px"
                  priority={displayIdx === 0}
                />
              </div>

              {/* Gradient overlay */}
              <div className="ubs-overlay" />

              {/* Counter only — no label */}
              <span className="ubs-counter">
                {String(displayIdx + 1).padStart(2, '0')}&nbsp;/&nbsp;{String(TOTAL).padStart(2, '0')}
              </span>

              {/* Progress bar */}
              <div className="ubs-bar" key={progressKey} />

              {/* Arrows — always clickable */}
              <div className="ubs-arrows">
                <button
                  className="ubs-arrow"
                  onClick={() => { stopAutoplay(); goPrev(); startAutoplay(); }}
                  aria-label="Previous image"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button
                  className="ubs-arrow"
                  onClick={() => { stopAutoplay(); goNext(); startAutoplay(); }}
                  aria-label="Next image"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Thumbnail strip */}
            <div className="ubs-thumbs">
              {IMAGES.map((src, idx) => (
                <button
                  key={src}
                  className={`ubs-thumb ${idx === displayIdx ? 'active-thumb' : ''}`}
                  onClick={() => {
                    stopAutoplay();
                    goTo(idx, idx > currentRef.current ? 'next' : 'prev');
                    startAutoplay();
                  }}
                  aria-label={`Go to image ${idx + 1}`}
                >
                  <Image
                    src={src}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="52px"
                    loading="lazy"
                  />
                  <div className="ubs-thumb-dim" />
                </button>
              ))}
            </div>

            {/* Badge */}
            <div className="ubs-badge">
              <span>Total 64 GB Creator Toolkit</span>
            </div>

            {/* Buy Now */}
            <div className="ubs-buy-wrap">
              <button
                className="ubs-buy-btn"
                onClick={() => {
                  const el = document.getElementById('pricing');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                Buy Now
              </button>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
