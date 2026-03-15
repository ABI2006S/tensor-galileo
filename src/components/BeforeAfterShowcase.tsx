"use client";
import React from 'react';
import BeforeAfterSection from '@/components/BeforeAfterSection';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function BeforeAfterShowcase() {
  useScrollReveal();

  return (
    <section className="py-24 relative z-10">
      <div className="container" style={{ background: 'rgba(17,17,17,0.35)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderRadius: 'var(--radius)', border: '1px solid var(--border)', padding: '4rem 2rem' }}>
        <div className="text-center mb-12 reveal">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-[var(--foreground)] mb-4" style={{ fontFamily: 'var(--font-orbitron)', letterSpacing: '-0.02em' }}>See The Difference</h2>
          <p className="text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto">Experience the raw power of LumeFX grading instantly.</p>
        </div>
        
        <div className="reveal reveal-delay-200">
          <BeforeAfterSection />
        </div>
      </div>
    </section>
  );
}
