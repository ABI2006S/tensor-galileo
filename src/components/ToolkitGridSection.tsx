import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const toolkitItems = [
    { id: 1, title: '150+ Cinematic LUTs', desc: 'Industry-standard color profiles (.cube)', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line></svg> },
    { id: 2, title: '200 Editing Presets', desc: 'Drag & drop Premiere & After Effects styling', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg> },
    { id: 3, title: 'Premium Fonts', desc: 'High-converting typography for thumbnails', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line></svg> },
    { id: 4, title: 'Shapes & Overlays', desc: 'Vector graphics and motion film grain', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> },
    { id: 5, title: 'Sound Effects', desc: 'Whooshes, risers, and cinematic hits', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg> },
    { id: 6, title: 'Creator AI Tools', desc: '10x your workflow with our curated AI list', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg> },
];

export default function ToolkitGridSection() {
    useScrollReveal();

    return (
        <section id="what-you-get" className="toolkit-grid-section">
            <div className="container">
                <div className="section-header text-center reveal">
                    <h2 className="section-title">What&apos;s Inside the Toolkit</h2>
                    <p className="section-subtitle">Everything you need to create viral, engaging content today.</p>
                </div>

                <div className="toolkit-visual-grid">
                    {toolkitItems.map((item, idx) => (
                        <div key={item.id} className={`toolkit-grid-card reveal reveal-delay-${(idx + 1) * 100}`}>
                            <div className="toolkit-card-icon flex items-center justify-center p-3 bg-[#111] rounded-xl border border-[#222] text-[#ff7373]">{item.icon}</div>
                            <h3 className="toolkit-card-title">{item.title}</h3>
                            <p className="toolkit-card-desc">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="toolkit-total-size reveal reveal-delay-800">
                    <div className="glow-orb"></div>
                    <span className="size-label">Total Toolkit Size:</span>
                    <span className="size-value">64GB+</span>
                </div>
            </div>
        </section>
    );
}
