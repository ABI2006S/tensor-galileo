"use client";
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function BeforeAfterSection() {
    useScrollReveal();
    const [sliderPos, setSliderPos] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setSliderPos(percent);
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging) return;
        handleMove(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
        if (!isDragging) return;
        handleMove(e.touches[0].clientX);
    };

    const handleMouseUp = () => setIsDragging(false);

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
            window.addEventListener('touchmove', handleTouchMove);
            window.addEventListener('touchend', handleMouseUp);
        } else {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleMouseUp);
        }
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleMouseUp);
        };
    }, [isDragging]);

    return (
        <section className="w-full flex justify-center py-8">
            <div 
                ref={containerRef}
                className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-[var(--border)] shadow-[var(--shadow-card)] cursor-ew-resize select-none bg-[var(--surface-1)] min-h-[350px] md:min-h-[500px]"
                onMouseDown={(e) => {
                    setIsDragging(true);
                    handleMove(e.clientX);
                }}
                onTouchStart={(e) => {
                    setIsDragging(true);
                    handleMove(e.touches[0].clientX);
                }}
                style={{ touchAction: 'none' }}
            >
                {/* After Image (Base) */}
                <div className="absolute inset-0 w-full h-full">
                    <Image 
                        src="/before-after/after1.jpg" 
                        alt="After Color Grading" 
                        fill 
                        style={{ objectFit: 'cover', objectPosition: 'center' }} 
                        priority
                    />
                </div>

                {/* Before Image (Clipped) */}
                <div 
                    className="absolute inset-0 h-full w-full overflow-hidden"
                    style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
                >
                    <Image 
                        src="/before-after/before1.jpg" 
                        alt="Before Original" 
                        fill 
                        style={{ objectFit: 'cover', objectPosition: 'center' }} 
                        priority
                    />
                </div>

                {/* Slider Handle */}
                <div 
                    className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10"
                    style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 17L3 12L8 7V17ZM16 7L21 12L16 17V7Z" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}
