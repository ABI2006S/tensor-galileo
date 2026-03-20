import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import CircularGallery from '@/components/CircularGallery';

const samples = [
    { id: "p1", title: "Cyberpunk Preset", image: "/assets/presets/preset-1.jpg" },
    { id: "p2", title: "Noir LUT", image: "/assets/presets/preset-2.jpg" },
    { id: "p3", title: "Cinematic Glow", image: "/assets/presets/preset-3.jpg" },
    { id: "s1", title: "Light Leaks", image: "/assets/previews/presets/preset-preview.jpg" },
    { id: "s2", title: "Vintage Film", image: "/assets/previews/luts/lut-preview.jpg" }
];

export default function SampleGallery() {
    useScrollReveal();

    return (
        <section id="reviews" className="gallery-section">
            <div className="container">
                <div className="section-header text-center reveal">
                    <h2 className="section-title">Preview the Toolkit</h2>
                </div>

                <div className="reveal reveal-delay-200 mt-8 mb-8">
                    <CircularGallery items={samples} />
                </div>

                <div className="text-center mt-12 reveal reveal-delay-300">
                    <button className="btn-secondary" onClick={() => document.getElementById('pricing')?.scrollIntoView()}>
                        View More Samples
                    </button>
                </div>
            </div>
        </section>
    );
}
