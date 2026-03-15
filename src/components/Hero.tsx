import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Image from 'next/image';
import AdminEditableAsset from '@/components/AdminEditableAsset';

export default function Hero() {
    useScrollReveal();

    return (
        <section className="hero-section">
            <div className="hero-background-glow"></div>
            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className="hero-title reveal reveal-delay-100">
                        Turn Ordinary <br className="hidden md:block" />
                        Footage Into <br className="hidden md:block" />
                        Cinematic Edits In <br className="hidden md:block" />
                        Seconds
                    </h1>
                    <p className="hero-subtitle reveal reveal-delay-200">
                        The ultimate creator toolkit including 200+ presets, 150+ LUTs, premium fonts, overlays, sound effects, and creator AI tools designed for modern video creators.
                    </p>
                    <div className="hero-cta-wrapper reveal reveal-delay-300">
                        <button className="btn-primary btn-hero-cta" onClick={() => document.getElementById('pricing')?.scrollIntoView()}>
                            Get Lumefx Creator Bundle
                        </button>
                        <span className="hero-guarantee mt-4 block text-sm font-medium tracking-widest uppercase opacity-80" style={{ color: "var(--muted-foreground)" }}>
                            Instant Download • Lifetime Access • 64GB Creator Bundle
                        </span>

                        <div className="hero-trust mt-10 flex flex-col items-center gap-1.5 bg-black/40 px-10 py-5 rounded-2xl border border-[var(--border)] backdrop-blur-md shadow-[var(--shadow-card)]">
                            <div className="stars flex gap-1 mb-1">
                                {'★★★★★'.split('').map((star, i) => <span key={i} className="star-icon text-yellow-500 text-xl">{star}</span>)}
                            </div>
                            <span className="hero-trust-text font-bold text-white text-base tracking-wide uppercase">4.8/5 Creator Rating</span>
                            <span className="hero-trust-text font-medium text-sm text-[var(--accent)] mb-2">10,000+ Downloads</span>
                            <span className="hero-trust-text font-semibold text-[11px] text-[var(--muted-foreground)] uppercase tracking-wider bg-[var(--surface-2)]/80 px-4 py-1.5 rounded-full border border-[var(--border)]">
                                Works with Premiere Pro, After Effects, CapCut
                            </span>
                        </div>
                    </div>
                </div>

                <div className="hero-visual reveal reveal-delay-400">
                    <div className="hero-video-placeholder">
                        <AdminEditableAsset exactPath="/images/hero/preview.jpg">
                            <Image
                                src="/images/hero/preview.jpg"
                                alt="Cinematic Transformation Reel"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                style={{ objectFit: 'cover' }}
                                priority
                            />
                        </AdminEditableAsset>
                        <div className="play-button-overlay z-10">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32"><path d="M8 5v14l11-7z" /></svg>
                        </div>
                        <span className="video-placeholder-text z-10 relative">Cinematic Transformation Reel</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
