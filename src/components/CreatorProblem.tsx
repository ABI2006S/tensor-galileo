import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';



export default function CreatorProblem() {
    useScrollReveal();

    return (
        <section className="problem-section">
            <div className="container">
                <div className="problem-header text-center reveal">
                    <h2 className="section-title">Editing Shouldn&apos;t Take Hours</h2>
                    <p className="section-subtitle">
                        Most creators spend hours trying to achieve cinematic video quality.<br />
                        Lumefx simplifies the process by giving creators professional editing tools that work instantly.
                    </p>
                </div>

                <div className="problem-grid">
                    <div className="problem-card reveal reveal-delay-100">
                        <div className="card-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></div>
                        <div className="card-flow">
                            <p className="flow-problem">Unpolished</p>
                            <div className="flow-arrow">↓</div>
                            <p className="flow-solution">Cinematic &amp; Pro</p>
                        </div>
                    </div>

                    <div className="problem-card reveal reveal-delay-200">
                        <div className="card-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 4H6v4l5 6-5 6v4h12v-4l-5-6 5-6V4z"></path></svg></div>
                        <div className="card-flow">
                            <p className="flow-problem">Hours of Editing</p>
                            <div className="flow-arrow">↓</div>
                            <p className="flow-solution">Done in Seconds</p>
                        </div>
                    </div>

                    <div className="problem-card reveal reveal-delay-300">
                        <div className="card-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline><polyline points="16 17 22 17 22 11"></polyline></svg></div>
                        <div className="card-flow">
                            <p className="flow-problem">Low Engagement</p>
                            <div className="flow-arrow">↓</div>
                            <p className="flow-solution">Viral Retention</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
