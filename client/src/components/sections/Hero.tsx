import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import NikeButton from '@/components/ui/NikeButton';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // GSAP animation for the hero section
    if (heroRef.current && imageRef.current) {
      const tl = gsap.timeline();
      
      tl.from(imageRef.current, {
        opacity: 0,
        x: 100,
        duration: 1.2,
        ease: "power3.out"
      });
      
      // Add a subtle floating animation
      gsap.to(imageRef.current, {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    }
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-transparent z-10"></div>
      
      <div className="absolute inset-0 flex items-center">
        <div className="product-image-container w-full h-full absolute right-0 flex justify-end items-center">
          <motion.img 
            ref={imageRef}
            src="/nike-free-shoe-air-jordan-sneakers-running-shoes-8bb8c41d77347c2b5f28012d38c6c566.png" 
            alt="Nike Red Shoes" 
            className="product-image absolute -right-20 md:right-0 top-1/2 transform -translate-y-1/2 w-auto h-[140%] max-w-none float-animation" 
          />
        </div>
      </div>
      
      <div className="relative h-full flex flex-col justify-center px-6 md:px-16 z-20">
        <motion.div 
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-white leading-none mb-6">
            <span className="block">IGNITE YOUR</span>
            <span className="block text-[hsl(var(--nike-red))]">POTENTIAL</span>
          </h1>
          
          <motion.p 
            className="text-gray-300 text-xl md:text-2xl mb-10 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Elevate your performance with the latest Nike innovations designed to push the boundaries of what's possible.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <NikeButton href="#shop-now" color="red">
              SHOP NOW
            </NikeButton>
            <NikeButton href="#discover" variant="outline">
              DISCOVER
            </NikeButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
