import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const CollectionShowcase = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  
  useEffect(() => {
    if (sectionRef.current && headingRef.current && descriptionRef.current) {
      gsap.from(headingRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
      
      gsap.from(descriptionRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
      
      // Animate collection cards
      const cards = sectionRef.current.querySelectorAll('.collection-card');
      gsap.from(cards, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.3,
        delay: 0.4,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none"
        }
      });
    }
  }, []);

  const collections = [
    {
      title: "JORDAN COLLECTION",
      description: "Legacy styles reimagined for a new generation.",
      image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "#jordan",
      cta: "SHOP JORDAN"
    },
    {
      title: "RUNNING COLLECTION",
      description: "Engineered for speed, built for comfort.",
      image: "https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
      link: "#running",
      cta: "SHOP RUNNING"
    }
  ];

  return (
    <section id="collections" ref={sectionRef} className="bg-black py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 ref={headingRef} className="text-4xl md:text-5xl text-white mb-2">COLLECTIONS</h2>
        <p ref={descriptionRef} className="text-gray-400 text-xl mb-12">
          Curated selections to match your style and performance needs
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {collections.map((collection, index) => (
            <motion.div
              key={index}
              className="collection-card relative rounded-xl overflow-hidden h-96 group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
              <img 
                src={collection.image} 
                alt={collection.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full transition-transform duration-500 transform translate-y-0 group-hover:translate-y-[-10px]">
                <h3 className="text-3xl text-white mb-2">{collection.title}</h3>
                <p className="text-gray-300 mb-6">{collection.description}</p>
                <a 
                  href={collection.link}
                  className="inline-block bg-white text-black px-6 py-3 rounded-full hover:bg-[hsl(var(--nike-red))] hover:text-white transition duration-300"
                >
                  {collection.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionShowcase;
