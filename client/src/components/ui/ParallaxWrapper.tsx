import { forwardRef, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ParallaxWrapperProps {
  children: React.ReactNode;
  backgroundImage: string;
  height?: string;
  overlay?: string;
}

const ParallaxWrapper = forwardRef<HTMLElement, ParallaxWrapperProps>(
  ({ children, backgroundImage, height = "h-screen", overlay = "from-black/70 to-transparent" }, ref) => {
    const bgRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
      if (bgRef.current) {
        gsap.to(bgRef.current, {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: bgRef.current.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, []);

    return (
      <section ref={ref} className={`parallax-container relative ${height} flex items-center bg-black overflow-hidden`}>
        <div className={`absolute inset-0 bg-gradient-to-r ${overlay} z-10`}></div>
        <div 
          ref={bgRef}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
        {children}
      </section>
    );
  }
);

ParallaxWrapper.displayName = 'ParallaxWrapper';

export default ParallaxWrapper;
