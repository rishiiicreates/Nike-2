import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ParallaxWrapper from '@/components/ui/ParallaxWrapper';
import NikeButton from '@/components/ui/NikeButton';

gsap.registerPlugin(ScrollTrigger);

const ParallaxShowcase = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    if (sectionRef.current && contentRef.current && imageRef.current) {
      // Content animation
      gsap.from(contentRef.current.children, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none"
        }
      });
      
      // Image animation
      gsap.from(imageRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none"
        }
      });
      
      // Add floating animation
      gsap.to(imageRef.current, {
        y: -15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    }
  }, []);

  return (
    <ParallaxWrapper
      ref={sectionRef}
      backgroundImage="https://images.unsplash.com/photo-1562183241-b937e95585b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      height="h-[80vh]"
      overlay="from-black via-black/70 to-transparent"
    >
      <div className="relative z-20 px-6 md:px-16 w-full max-w-7xl mx-auto">
        <div ref={contentRef} className="max-w-xl">
          <h2 className="text-5xl md:text-6xl text-white mb-6">
            DESIGNED TO <span className="text-[hsl(var(--nike-volt))]">MOVE</span> YOU
          </h2>
          <p className="text-gray-300 text-xl mb-8">
            Innovative technology that adapts to your movement, delivering unparalleled comfort and performance.
          </p>
          <NikeButton href="#explore" variant="outline">
            EXPLORE TECHNOLOGY
          </NikeButton>
        </div>
      </div>
      
      <div className="absolute right-0 bottom-0 z-10 md:mr-16 md:mb-16 mb-8 mr-8">
        <img 
          ref={imageRef}
          src="/pngwing.com 2.png" 
          alt="Nike Running Shoe" 
          className="w-auto h-80 md:h-96"
        />
      </div>
    </ParallaxWrapper>
  );
};

export default ParallaxShowcase;
