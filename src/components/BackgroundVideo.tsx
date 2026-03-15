'use client';

import React from 'react';

export default function BackgroundVideo() {
  return (
    <>
      <div className="global-bg-fallback" />
      <video
        className="global-bg-video"
        src="/hyper.webm"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
      />
      <div className="global-bg-overlay" />
    </>
  );
}
