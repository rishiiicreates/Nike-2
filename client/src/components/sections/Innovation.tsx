import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Innovation = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (sectionRef.current && imageRef.current && contentRef.current) {
      // Animate the content
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
      
      // Animate the image
      gsap.from(imageRef.current, {
        x: 100,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none"
        }
      });
      
      // Add floating animation to the image
      gsap.to(imageRef.current, {
        y: -15,
        rotation: -5,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    }
  }, []);

  const features = [
    "Precision-engineered for strength and breathability",
    "Reduces material waste by an average of 60%",
    "Dynamic fit adapts to your movement"
  ];

  return (
    <section id="innovation" ref={sectionRef} className="py-20 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl mb-2">INNOVATION</h2>
        <p className="text-gray-600 text-xl mb-12">
          Breakthrough technologies that redefine athletic performance
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div ref={contentRef} className="order-2 lg:order-1 flex flex-col justify-center">
            <h3 className="text-3xl mb-4">
              NIKE <span className="text-[hsl(var(--nike-red))]">FLYKNIT</span> TECHNOLOGY
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              Ultra-lightweight, breathable support that revolutionized athletic footwear. 
              Created with high-strength fibers precisely engineered for lightweight, 
              form-fitting, and virtually seamless uppers.
            </p>
            
            <ul className="mb-8 space-y-4">
              {features.map((feature, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 * index }}
                  viewport={{ once: true }}
                >
                  <Check className="h-6 w-6 text-[hsl(var(--nike-red))] mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </motion.li>
              ))}
            </ul>
            
            <a 
              href="#flyknit-technology" 
              className="inline-block bg-black text-white px-8 py-4 rounded-md hover:bg-[hsl(var(--nike-red))] transition duration-300"
            >
              EXPLORE FLYKNIT
            </a>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl h-full flex items-center justify-center overflow-hidden">
              <img 
                ref={imageRef}
                src="/nike-free-shoe-air-jordan-sneakers-running-shoes-8bb8c41d77347c2b5f28012d38c6c566.png" 
                alt="Flyknit Technology" 
                className="transform rotate-[-25deg] scale-125"
              />
            </div>
            <motion.div 
              className="absolute top-10 right-10 bg-[hsl(var(--nike-red))] text-white rounded-full w-24 h-24 flex items-center justify-center font-bold text-lg rotate-12"
              animate={{ rotate: 12 }}
              whileHover={{ scale: 1.1, rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              NEW
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;
