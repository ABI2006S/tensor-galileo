import React from 'react';
import CircularGallery from '@/components/CircularGallery';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const presets = [
  { id: "p6", title: "Preset 6", image: "/assets/presets/pic 6.jpg" },
  { id: "p7", title: "Preset 7", image: "/assets/presets/pic 7.jpg" },
  { id: "p8", title: "Preset 8", image: "/assets/presets/pic 8.jpg" },
  { id: "p9", title: "Preset 9", image: "/assets/presets/pic 9.jpg" },
  { id: "p10", title: "Preset 10", image: "/assets/presets/pic 10.jpg" },
  { id: "p11", title: "Preset 11", image: "/assets/presets/Pic 11.jpg" },
  { id: "p12", title: "Preset 12", image: "/assets/presets/pic 12.jpg" },
  { id: "p13", title: "Preset 13", image: "/assets/presets/pic 13.jpg" },
  { id: "p14", title: "Preset 14", image: "/assets/presets/pic 14.jpg" },
  { id: "p15", title: "Preset 15", image: "/assets/presets/pic 15.jpg" },
  { id: "p16", title: "Preset 16", image: "/assets/presets/pic 16.jpg" },
  { id: "p18", title: "Preset 18", image: "/assets/presets/pic 18.jpg" },
  { id: "p19", title: "Preset 19", image: "/assets/presets/pic 19.jpg" },
  { id: "p20", title: "Preset 20", image: "/assets/presets/pic 20.jpg" }
];

export default function PresetsShowcase() {
  useScrollReveal();

  return (
    <section className="py-24 relative z-10">
      <div className="container" style={{ background: 'rgba(17,17,17,0.35)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderRadius: 'var(--radius)', border: '1px solid var(--border)', padding: '4rem 2rem' }}>
        <div className="text-center mb-12 reveal">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-[var(--foreground)] mb-4" style={{ fontFamily: 'var(--font-orbitron)', letterSpacing: '-0.02em' }}>Premium Presets</h2>
          <p className="text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto">Get the exact looks used by top creators instantly.</p>
        </div>
        <div className="relative w-full h-[500px] md:h-[800px] reveal reveal-delay-200">
          <CircularGallery 
            items={presets} 
            bend={3} 
            textColor="#ffffff" 
            borderRadius={0.05} 
            scrollSpeed={2} 
            scrollEase={0.05} 
          />
        </div>
      </div>
    </section>
  );
}
