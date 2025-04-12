import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { type Product } from '@shared/schema';
import { Skeleton } from '@/components/ui/skeleton';
import { ChevronLeft, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface NewReleasesProps {
  products: Product[];
  isLoading: boolean;
}

const NewReleases = ({ products, isLoading }: NewReleasesProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Calculate total slides based on viewport size
  const getTotalSlides = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) {
        return Math.ceil(products.length / 3);
      } else if (window.innerWidth >= 768) {
        return Math.ceil(products.length / 2);
      }
    }
    return products.length;
  };
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % getTotalSlides());
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + getTotalSlides()) % getTotalSlides());
  };

  useEffect(() => {
    if (sectionRef.current) {
      gsap.from(sectionRef.current.querySelector('h2'), {
        y: 30,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
      
      gsap.from(sectionRef.current.querySelector('p'), {
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
    }
  }, []);

  // When currentSlide changes, scroll carousel
  useEffect(() => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth * currentSlide;
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }, [currentSlide]);

  // Generate gradient colors for carousel items
  const gradients = [
    "from-blue-500 to-blue-700",
    "from-red-500 to-red-700",
    "from-green-500 to-green-700",
    "from-purple-500 to-purple-700",
    "from-yellow-500 to-yellow-700",
    "from-indigo-500 to-indigo-700",
  ];

  // Placeholder for loading state
  const placeholderCount = 3;

  return (
    <section id="new-releases" ref={sectionRef} className="py-20 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl mb-2">NEW RELEASES</h2>
        <p className="text-gray-600 text-xl mb-12">
          The latest innovations to elevate your performance
        </p>
        
        <div className="relative overflow-hidden">
          <div 
            ref={carouselRef}
            className="carousel flex overflow-x-auto pb-8 -mx-4 scrollbar-hide snap-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {isLoading ? (
              // Loading skeletons
              Array(placeholderCount).fill(0).map((_, index) => (
                <div key={index} className="carousel-item flex-none w-[300px] px-4">
                  <div className="bg-gray-100 rounded-xl overflow-hidden">
                    <div className="pt-8 px-8 pb-4">
                      <Skeleton className="h-8 w-16 rounded-full" />
                      <Skeleton className="h-10 w-3/4 mt-4" />
                      <Skeleton className="h-6 w-1/2 mt-2" />
                    </div>
                    <div className="relative h-64 flex justify-center">
                      <Skeleton className="h-64 w-64" />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              // Actual product cards in a single row
              products.map((product, index) => (
                <motion.div 
                  key={product.id}
                  className="carousel-item flex-none w-[300px] px-4 snap-start"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`bg-gradient-to-br ${gradients[index % gradients.length]} rounded-xl overflow-hidden`}>
                    <div className="pt-8 px-8 pb-4">
                      <span className="bg-white px-3 py-1 rounded-full text-sm font-bold" 
                            style={{ color: `var(--tw-gradient-from)` }}>
                        NEW
                      </span>
                      <h3 className="text-3xl text-white mt-4">{product.name}</h3>
                      <p className="text-white/80 mt-2">{product.description}</p>
                    </div>
                    <div className="relative h-64 flex justify-center">
                      <img 
                        src={product.imageUrl} 
                        alt={product.name} 
                        className="absolute bottom-0 transform -rotate-12 scale-125 h-64 w-auto"
                      />
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
          
          {/* Carousel Controls */}
          <div className="flex justify-center mt-8 space-x-2">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full bg-black text-white hover:bg-red-600 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            {/* Dots indicator */}
            {Array.from({ length: getTotalSlides() }).map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-black' : 'bg-gray-300'}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
            
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full bg-black text-white hover:bg-red-600 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewReleases;
