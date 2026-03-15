import React from 'react';
import Masonry from '@/components/Masonry';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const masonryItems = [
  { id: "l1", img: "/assets/luts/1.png", height: 140 },
  { id: "l2", img: "/assets/luts/2.png", height: 100 },
  { id: "l3", img: "/assets/luts/3.png", height: 160 },
  { id: "l4", img: "/assets/luts/4.png", height: 120 },
  { id: "l5", img: "/assets/luts/5.png", height: 150 },
  { id: "l6", img: "/assets/luts/6.png", height: 110 },
  { id: "l7", img: "/assets/luts/7.png", height: 140 },
  { id: "l8", img: "/assets/luts/8.png", height: 170 }
];

export default function LutsShowcase() {
  useScrollReveal();

  return (
    <section className="py-24 relative z-10">
      <div className="container" style={{ background: 'rgba(17,17,17,0.35)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderRadius: 'var(--radius)', border: '1px solid var(--border)', padding: '4rem 2rem' }}>
        <div className="text-center mb-12 reveal">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-[var(--foreground)] mb-4" style={{ fontFamily: 'var(--font-orbitron)', letterSpacing: '-0.02em' }}>Cinematic LUTs</h2>
          <p className="text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto">Color grade like a professional Hollywood editor.</p>
        </div>
        <div className="relative w-full pb-16 reveal reveal-delay-300">
          <Masonry
            items={masonryItems}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover
            hoverScale={0.97}
            blurToFocus
            colorShiftOnHover={false}
          />
        </div>
      </div>
    </section>
  );
}
