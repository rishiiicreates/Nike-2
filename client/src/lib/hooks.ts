import { useState, useEffect, useRef } from 'react';

// Hook to determine if component is in viewport
export const useInView = (threshold = 0.1) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const current = ref.current;
    if (!current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold,
      }
    );

    observer.observe(current);
    return () => {
      observer.unobserve(current);
    };
  }, [threshold]);

  return { ref, inView };
};

// Hook to animate on scroll
export const useScrollAnimation = (start = "top 80%") => {
  const ref = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    // This is where you'd implement the GSAP animation
    // Would need to import gsap from 'gsap'
    
    return () => {
      // Clean up if needed
    };
  }, [start]);
  
  return ref;
};

// Hook to handle parallax effect
export const useParallax = (speed = 0.5) => {
  const ref = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current;
      if (!element) return;
      
      const scrollTop = window.pageYOffset;
      const elementRect = element.getBoundingClientRect();
      const elementTop = elementRect.top + scrollTop;
      const elementVisible = elementTop - window.innerHeight;
      
      if (scrollTop > elementVisible) {
        const yPos = (scrollTop - elementVisible) * speed;
        element.style.transform = `translateY(${yPos}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);
  
  return ref;
};

// Hook for carousel functionality
export const useCarousel = (totalSlides: number, autoplayInterval = 5000) => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  const next = () => {
    setCurrent((prev) => (prev + 1) % totalSlides);
  };
  
  const prev = () => {
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
  };
  
  const goTo = (index: number) => {
    setCurrent(index);
  };
  
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(next, autoplayInterval);
    return () => clearInterval(interval);
  }, [autoplay, autoplayInterval, totalSlides]);
  
  return { current, next, prev, goTo, setAutoplay };
};
