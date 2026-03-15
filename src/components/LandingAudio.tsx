"use client";

import React, { useEffect, useRef, useState } from 'react';

export default function LandingAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [hasUnmuted, setHasUnmuted] = useState(false);

  useEffect(() => {
    const initAudio = async () => {
      if (!audioRef.current || hasUnmuted) return;

      // Start muted to guarantee autoplay works
      audioRef.current.volume = 0;
      audioRef.current.muted = true;

      try {
        await audioRef.current.play();
      } catch (err) {
        console.log("Muted autoplay blocked (rare/strict mode). Waiting for interaction.");
      }
    };

    const handleInteraction = async (e: Event) => {
      const target = e.target;
      if (target instanceof Element) {
        if (target.closest('audio') || target.closest('.sfx-card') || target.closest('.sfx-disc')) {
          return;
        }
      }

      if (!audioRef.current || hasUnmuted) return;
      
      try {
        // Unmute and start fade in
        audioRef.current.muted = false;
        setHasUnmuted(true);
        removeListeners();

        // Check if it's actually playing, if not, start it
        if (audioRef.current.paused) {
           await audioRef.current.play();
        }

        // Fade in volume over 1 second
        let vol = 0;
        audioRef.current.volume = vol;
        const fadeInterval = setInterval(() => {
          if (vol < 0.95 && audioRef.current) {
            vol += 0.05;
            audioRef.current.volume = Math.min(vol, 1);
          } else {
            if (audioRef.current) audioRef.current.volume = 1;
            clearInterval(fadeInterval);
          }
        }, 50);

      } catch (err) {
        console.error("Failed to unmute/play audio even after interaction:", err);
      }
    };

    // Listeners that constitute a generic page interaction that isn't a specific audio trigger
    const listeners = ['click', 'touchstart', 'scroll'];
    
    const removeListeners = () => {
      listeners.forEach(event => {
        window.removeEventListener(event, handleInteraction);
      });
    };

    const addListeners = () => {
      listeners.forEach(event => {
        // Use passive: true where possible to not hurt scroll performance
        window.addEventListener(event, handleInteraction, { once: true, passive: true });
      });
    };

    // Attempt to start playing muted immediately
    initAudio();
    
    // Also attach listeners in case it's blocked
    addListeners();

    return () => {
      removeListeners();
    };
  }, [hasUnmuted]);

  return (
    <audio 
      ref={audioRef} 
      src="/audio/into.MP3" 
      preload="none"
      autoPlay 
      muted
      style={{ display: 'none' }} 
    />
  );
}
