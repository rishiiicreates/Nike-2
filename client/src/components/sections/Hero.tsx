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
      <div className="relative h-full w-full">
        {/* The shoe image centered - placed first/bottom layer */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <motion.div className="relative h-full flex items-center justify-center">
            <motion.img 
              ref={imageRef}
              src="/nike-free-shoe-air-jordan-sneakers-running-shoes-8bb8c41d77347c2b5f28012d38c6c566.png" 
              alt="Nike Red Shoes" 
              className="h-[85vh] max-w-none object-contain cursor-pointer" 
              whileHover={{ scale: 1.05, rotate: -5 }}
              transition={{ duration: 0.5 }}
              style={{ filter: 'drop-shadow(0px 30px 20px rgba(0,0,0,0.15))' }}
            />
          </motion.div>
        </div>
        
        {/* Single text layer with filled text */}
        <motion.div 
          ref={textRef}
          className="absolute inset-0 flex items-center justify-end z-30 pr-10 md:pr-16 lg:pr-24 pointer-events-none"
        >
          <h1 className="text-8xl md:text-[10rem] xl:text-[12rem] font-sans font-black tracking-tighter leading-none text-right text-black">
            JUST <span className="text-[#ff8896]">DO</span> IT
          </h1>
        </motion.div>
      </div>
      
      {/* Additional elements */}
      <motion.div
        className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <p className="text-black/80 text-xl font-medium text-center max-w-md">
          Experience innovation with every step. The new Air Jordan collection.
        </p>
        <motion.button
          className="bg-black text-white px-10 py-4 rounded-full hover:bg-[#ff8896] transition-colors duration-300 font-bold"
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
