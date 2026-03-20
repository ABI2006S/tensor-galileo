import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Montserrat, Inter, Bebas_Neue } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '500', '700', '900'] });
const inter = Inter({ subsets: ['latin'], weight: ['400', '600'] });
const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: '400' });

export default function FontsShowcase() {
  useScrollReveal();

  return (
    <section className="py-24 relative z-10">
      <div className="container fonts-showcase-container">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-[var(--foreground)] mb-4" style={{ fontFamily: 'var(--font-orbitron)', letterSpacing: '-0.02em' }}>Lumefx premium Fonts</h2>
          <p className="text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto">Modern typography pack used for viral reels, bold thumbnails, and creator branding.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal reveal-delay-200">

          {/* Card 1: Montserrat */}
          <div className="font-card group">
            <div className="font-header">
              <div className="font-aa-block">
                <span className={`font-aa-letter ${montserrat.className}`} style={{ fontWeight: 900 }}>Aa</span>
              </div>
              <div className="font-title-group">
                <h3 className={`font-title ${montserrat.className}`}>Montserrat</h3>
                <span className="font-category">Sans-Serif / Geometric</span>
              </div>
            </div>
            <p className="font-description">
              Clean, bold, and modern font widely used by creators, agencies, and premium websites. Perfect for headlines and viral captions.
            </p>
          </div>

          {/* Card 2: Inter */}
          <div className="font-card group">
            <div className="font-header">
              <div className="font-aa-block">
                <span className={`font-aa-letter ${inter.className}`} style={{ fontWeight: 600 }}>Aa</span>
              </div>
              <div className="font-title-group">
                <h3 className={`font-title ${inter.className}`}>Inter</h3>
                <span className="font-category">UI / Reading</span>
              </div>
            </div>
            <p className="font-description">
              Highly readable modern UI font used by top SaaS companies and creator brands. Ideal for website body text and subtitles.
            </p>
          </div>

          {/* Card 3: Bebas Neue */}
          <div className="font-card group">
            <div className="font-header">
              <div className="font-aa-block relative overflow-hidden">
                <div className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-10 blur-xl transition-all"></div>
                <span className={`font-aa-letter ${bebasNeue.className}`} style={{ letterSpacing: '0.05em', fontSize: '3rem' }}>Aa</span>
              </div>
              <div className="font-title-group">
                <h3 className={`font-title uppercase tracking-wider ${bebasNeue.className}`} style={{ fontSize: '1.75rem', lineHeight: 1 }}>Bebas Neue</h3>
                <span className="font-category">Display / Impact</span>
              </div>
            </div>
            <p className="font-description">
              Strong uppercase display font used in viral thumbnails, cinematic titles, and high-impact creator content.
            </p>
          </div>

        </div>

        <div className="mt-16 text-center reveal reveal-delay-300">
          <div className="fonts-included-badge">
            + 1000 Included Options
          </div>
        </div>

      </div>
    </section>
  );
}
