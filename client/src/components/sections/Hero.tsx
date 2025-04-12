import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const Hero = () => {
  const [isHovering, setIsHovering] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const shapeRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

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
      
      // Animate the decorative shapes
      if (shapeRef.current && circleRef.current) {
        gsap.to(shapeRef.current, {
          rotation: 360,
          duration: 20,
          repeat: -1,
          ease: "none"
        });
        
        gsap.to(circleRef.current, {
          scale: 1.1,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      }
    }
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen overflow-hidden bg-gradient-to-br from-[#f8e9e9] to-[#e6f0f9]">
      {/* Decorative elements */}
      <div ref={shapeRef} className="absolute top-20 right-20 w-40 h-40 border border-[#ff8896] rounded-full opacity-30 z-0"></div>
      <div ref={circleRef} className="absolute bottom-40 left-20 w-20 h-20 bg-[#8896ff] rounded-full opacity-20 z-0"></div>
      <div className="absolute top-1/3 left-1/4 w-5 h-5 bg-[#ff8896] rounded-full opacity-40 z-0"></div>
      <div className="absolute bottom-1/4 right-1/3 w-8 h-8 border border-[#8896ff] rounded-full opacity-30 z-0"></div>
      
      <div 
        className="absolute inset-0 flex items-center justify-center"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <motion.img 
          ref={imageRef}
          src="/nike-free-shoe-air-jordan-sneakers-running-shoes-8bb8c41d77347c2b5f28012d38c6c566.png" 
          alt="Nike Red Shoes" 
          className="w-auto h-[80vh] max-w-none object-contain z-10 cursor-pointer" 
          whileHover={{ scale: 1.05, rotate: -5 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      
      <motion.div 
        ref={textRef}
        className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
      >
        <motion.h1 
          className="text-7xl md:text-9xl font-sans font-extrabold tracking-tight"
          style={{
            WebkitTextStroke: isHovering ? '2px black' : '0px',
            color: isHovering ? 'transparent' : 'black',
            transition: 'all 0.3s ease-in-out',
            textShadow: isHovering ? '0 0 5px rgba(255,255,255,0.6)' : 'none'
          }}
        >
          JUST <span style={{
            WebkitTextStroke: isHovering ? '2px #ff8896' : '0px',
            color: isHovering ? 'transparent' : '#ff8896',
            transition: 'all 0.3s ease-in-out'
          }}>DO</span> IT
        </motion.h1>
      </motion.div>
      
      {/* Additional elements */}
      <motion.div
        className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <p className="text-black/70 text-xl text-center max-w-md">
          Experience innovation with every step. The new Air Jordan collection.
        </p>
        <motion.button
          className="bg-black text-white px-8 py-3 rounded-full hover:bg-[#ff8896] transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          EXPLORE NOW
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
