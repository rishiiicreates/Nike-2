import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP animation for the hero section
    if (heroRef.current && imageRef.current && textRef.current) {
      const tl = gsap.timeline();
      
      tl.from(imageRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 1.2,
        ease: "power3.out"
      });
      
      tl.from(textRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.5");
      
      // Add a subtle floating animation
      gsap.to(imageRef.current, {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    }
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen overflow-hidden bg-gradient-to-br from-[#f8e9e9] to-[#e6f0f9]">
      <div className="absolute inset-0 z-10"></div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.img 
          ref={imageRef}
          src="/nike-free-shoe-air-jordan-sneakers-running-shoes-8bb8c41d77347c2b5f28012d38c6c566.png" 
          alt="Nike Red Shoes" 
          className="w-auto h-[80vh] max-w-none object-contain z-10" 
        />
      </div>
      
      <motion.div 
        ref={textRef}
        className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
      >
        <h1 className="text-7xl md:text-9xl font-sans font-extrabold tracking-tight" style={{
          WebkitTextStroke: '2px black',
          color: 'transparent',
          textShadow: '0 0 5px rgba(255,255,255,0.6)'
        }}>
          JUST <span style={{ WebkitTextStroke: '2px #ff8896' }}>DO</span> IT
        </h1>
      </motion.div>
    </section>
  );
};

export default Hero;
