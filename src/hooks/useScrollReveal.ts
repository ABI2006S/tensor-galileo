import { useEffect, useRef } from 'react';

// Singleton observer — shared across all hook calls, created once.
let sharedObserver: IntersectionObserver | null = null;

function getObserver(): IntersectionObserver {
  if (!sharedObserver && typeof window !== 'undefined') {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            sharedObserver?.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -5% 0px',
        threshold: 0.1,
      }
    );
  }
  return sharedObserver!;
}

export function useScrollReveal() {
  const observedRef = useRef<Element[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observer = getObserver();

    // Small delay to let the component fully paint before observing
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll<Element>(
        '.reveal:not(.reveal-visible)'
      );
      elements.forEach((el) => {
        if (!observedRef.current.includes(el)) {
          observer.observe(el);
          observedRef.current.push(el);
        }
      });
    }, 50);

    return () => {
      clearTimeout(timer);
      // Don't disconnect sharedObserver — it's reused.
      // Just unobserve the elements we added.
      observedRef.current.forEach((el) => observer.unobserve(el));
      observedRef.current = [];
    };
  }, []);
}
