import { useEffect, useRef } from 'react';

/**
 * Custom hook for safely using IntersectionObserver with proper cleanup
 * @param callback Function to call when elements intersect
 * @param options IntersectionObserver options
 * @returns Ref to be used for the elements to observe
 */
export const useIntersectionObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverOptions = { threshold: 0.1 }
) => {
  // Use a ref to store elements to observe
  const elementsRef = useRef<Set<Element>>(new Set());
  // Use a ref to store the observer instance
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Create the observer
    const observer = new IntersectionObserver(callback, options);
    observerRef.current = observer;
    
    // Observe all current elements
    elementsRef.current.forEach(element => {
      observer.observe(element);
    });
    
    // Cleanup function to disconnect observer when component unmounts
    return () => {
      observer.disconnect();
      observerRef.current = null;
    };
  }, [callback, options]);

  // Function to register an element for observation
  const observe = (element: Element | null) => {
    if (!element) return;
    
    // Add to our set
    elementsRef.current.add(element);
    
    // If observer exists, observe the element
    if (observerRef.current) {
      observerRef.current.observe(element);
    }
  };

  // Function to unobserve an element
  const unobserve = (element: Element | null) => {
    if (!element) return;
    
    // Remove from our set
    elementsRef.current.delete(element);
    
    // If observer exists, unobserve the element
    if (observerRef.current) {
      observerRef.current.unobserve(element);
    }
  };

  return { observe, unobserve };
};

// Define types for options
interface IntersectionObserverOptions {
  root?: Element | Document | null;
  rootMargin?: string;
  threshold?: number | number[];
} 