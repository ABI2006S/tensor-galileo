import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const benefits = [
    {
        id: "b1",
        title: "Save Hours of Editing",
        desc: "Apply professional cinematic looks instantly without tweaking settings forever.",
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 3"></path><path d="M12 3v-1"></path><path d="M19 5l-1-1"></path></svg>
    },
    {
        id: "b2",
        title: "Professional Quality",
        desc: "Perfect color grading, text styling, and transitions for Reels and YouTube.",
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 7l-7 5 7 5V7z"></path><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
    },
    {
        id: "b3",
        title: "All-In-One Toolkit",
        desc: "Everything you need to elevate your videos included in one massive 64GB bundle.",
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
    }
];

export default function CreatorBenefits() {
    useScrollReveal();

    return (
        <section className="benefits-section">
            <div className="container">
                <div className="section-header text-center reveal">
                    <h2 className="section-title">Why Creators Choose Lumefx</h2>
                </div>

                <div className="benefits-grid">
                    {benefits.map((b, idx) => (
                        <div key={b.id} className={`benefit-card reveal reveal-delay-${(idx % 3) * 100 + 100}`}>
                            <div className="benefit-icon">{b.icon}</div>
                            <h3 className="benefit-title">{b.title}</h3>
                            <p className="benefit-desc">{b.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
