import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import ParallaxWrapper from '@/components/ui/ParallaxWrapper';
import NikeButton from '@/components/ui/NikeButton';

gsap.registerPlugin(ScrollTrigger);

const CtaSection = () => {
  const [email, setEmail] = useState('');
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (sectionRef.current && contentRef.current) {
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
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here would be the API call to handle email submission
    console.log('Email submitted:', email);
    // Reset form
    setEmail('');
    // Show success toast or feedback
  };

  return (
    <ParallaxWrapper
      backgroundImage="https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      height="h-[80vh]"
      overlay="from-black via-black/70 to-transparent"
    >
      <div 
        ref={sectionRef}
        className="relative z-20 h-full flex flex-col justify-center px-6 md:px-16"
      >
        <motion.div 
          ref={contentRef}
          className="max-w-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl text-white leading-none mb-6">
            <span className="block">JOIN THE</span>
            <span className="block text-[hsl(var(--nike-volt))]">MOVEMENT</span>
          </h2>
          
          <p className="text-gray-300 text-xl mb-10 max-w-lg">
            Become a Nike Member and get first access to the newest styles and exclusive products.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address" 
              className="bg-white/10 border border-white/30 text-white px-6 py-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(var(--nike-red))] placeholder-gray-400 flex-grow"
              required
            />
            <NikeButton type="submit" color="red">
              JOIN US
            </NikeButton>
          </form>
        </motion.div>
      </div>
    </ParallaxWrapper>
  );
};

export default CtaSection;
