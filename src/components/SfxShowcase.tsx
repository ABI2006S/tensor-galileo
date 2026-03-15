"use client";

import React, { useState, useRef, useEffect } from 'react';

const sfxTracks = [
  { id: 'cinematic-riser', name: 'Cinematic Riser', src: '/audio/cinematic-riser.mp3', durationStr: '0:05' },
  { id: 'deep-impact-hit', name: 'Deep Impact Hit', src: '/audio/deep-impact-hit.mp3', durationStr: '0:03' },
  { id: 'whoosh-transition', name: 'Whoosh Transition', src: '/audio/whoosh-transition.mp3', durationStr: '0:02' }
];

export default function SfxShowcase() {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement | null }>({});
  const [progresses, setProgresses] = useState<{ [key: string]: number }>({});
  const animationRef = useRef<number>(0);

  const togglePlay = (id: string) => {
    const audio = audioRefs.current[id];
    if (!audio) return;

    if (playingId === id) {
      audio.pause();
      setPlayingId(null);
    } else {
      // Pause currently playing
      if (playingId && audioRefs.current[playingId]) {
        audioRefs.current[playingId]!.pause();
        audioRefs.current[playingId]!.currentTime = 0; // reset
      }
      audio.currentTime = 0;
      audio.play();
      setPlayingId(id);
    }
  };

  const updateProgress = () => {
    if (playingId && audioRefs.current[playingId]) {
      const audio = audioRefs.current[playingId]!;
      const prog = (audio.currentTime / (audio.duration || 1)) * 100;
      setProgresses(prev => ({ ...prev, [playingId]: prog }));
    }
    animationRef.current = requestAnimationFrame(updateProgress);
  };

  useEffect(() => {
    animationRef.current = requestAnimationFrame(updateProgress);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [playingId]);

  return (
    <section className="py-12 bg-transparent px-4 sm:px-6 lg:px-8 mt-4 mb-16 relative z-10">
      <div className="sfx-showcase-container reveal">
        <h3 className="sfx-title">Sound Effects</h3>
        
        <div className="sfx-grid">
          {sfxTracks.map((track) => (
            <div key={track.id} className={`sfx-card ${playingId === track.id ? 'active' : ''}`}>
              <div 
                className={`sfx-disc ${playingId === track.id ? 'playing' : ''}`}
                onClick={() => togglePlay(track.id)}
              >
                {/* SVG Play/Pause Button */}
                {playingId === track.id ? (
                  <svg className="sfx-play-icon pause" viewBox="0 0 24 24" style={{ fill: 'currentColor' }}>
                    <rect x="6" y="4" width="4" height="16" rx="1"></rect>
                    <rect x="14" y="4" width="4" height="16" rx="1"></rect>
                  </svg>
                ) : (
                  <svg className="sfx-play-icon" viewBox="0 0 24 24">
                    <path d="M7 4V20L19 12L7 4Z" style={{ fill: 'currentColor' }} />
                  </svg>
                )}
              </div>
              
              <div className="sfx-info">
                <h4 className="sfx-name" title={track.name}>{track.name}</h4>
                <div className="sfx-duration">
                   <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                     <circle cx="12" cy="12" r="10" />
                     <polyline points="12 6 12 12 16 14" />
                   </svg>
                   {track.durationStr}
                </div>
                <div className="sfx-progress-bar">
                  <div 
                    className="sfx-progress-fill" 
                    style={{ width: `${playingId === track.id ? (progresses[track.id] || 0) : 0}%` }}
                  ></div>
                </div>
              </div>

              <audio 
                ref={el => { audioRefs.current[track.id] = el; }}
                src={track.src}
                onEnded={() => {
                  setPlayingId(null);
                  setProgresses(prev => ({ ...prev, [track.id]: 0 }));
                }}
              />
            </div>
          ))}
        </div>

        <div className="sfx-badge-container">
             <div className="fonts-included-badge inline-block px-8 py-3 rounded-[2rem] border border-[var(--border)] bg-background text-[var(--foreground)] text-sm font-bold tracking-[0.15em] uppercase shadow-lg z-10" style={{
               boxShadow: '0 0 20px rgba(255, 0, 0, 0.1)',
               borderColor: 'rgba(255, 0, 0, 0.3)'
             }}>
                 + 500+ more sound effects..
             </div>
        </div>
      </div>
    </section>
  );
}
