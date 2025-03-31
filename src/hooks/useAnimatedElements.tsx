
import { useEffect, useRef } from 'react';

/**
 * Hook for animating elements when they come into view
 * @returns {Array} - Array ref to attach to elements for animation
 */
export const useAnimatedElements = () => {
  const elementsRef = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    const elements = elementsRef.current.filter(Boolean) as HTMLElement[];
    elements.forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      elements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return elementsRef;
};

export default useAnimatedElements;
