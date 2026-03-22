"use client";
import React, { useEffect, useState } from 'react';

interface MobileStickyCTAProps {
    hide?: boolean;
}

export default function MobileStickyCTA({ hide = false }: MobileStickyCTAProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            const pricingSection = document.getElementById('pricing');
            const pricingTop = pricingSection?.getBoundingClientRect().top || Infinity;
            
            // Show only if:
            // 1. We've scrolled past initial 400px
            // 2. We haven't reached the pricing section (pricingTop should be > 80% of window height)
            // 3. Not explicitly hidden via props (e.g. modal open)
            if (window.scrollY > 400 && pricingTop > window.innerHeight * 0.8 && !hide) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        // Initial check
        toggleVisibility();
        
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, [hide]);

    return (
        <div className={`mobile-sticky-wrapper ${isVisible ? 'visible' : ''}`}>
            <button className="btn-primary" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
                Get Lumefx Toolkit
            </button>
        </div>
    );
}
