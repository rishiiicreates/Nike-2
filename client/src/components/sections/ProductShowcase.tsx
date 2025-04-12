import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { type Product } from '@shared/schema';
import { Skeleton } from '@/components/ui/skeleton';

gsap.registerPlugin(ScrollTrigger);

interface ProductShowcaseProps {
  products: Product[];
  isLoading: boolean;
}

const ProductShowcase = ({ products, isLoading }: ProductShowcaseProps) => {
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
    }
  }, []);

  // Fallback products for showcase
  const fallbackProducts = [
    {
      id: 1,
      name: "AIR FORCE 1",
      description: "First released in 1982, a basketball icon turned street style staple.",
      imageUrl: "/air-force-1-sneakers-skate-shoe-nike-nike-927c59bd1411b7be2dafb3b0054db4ab.png"
    },
    {
      id: 2,
      name: "AIR JORDAN 1",
      description: "The shoe that started it all, forever changing the game of basketball.",
      imageUrl: "/nike-free-shoe-air-jordan-sneakers-running-shoes-8bb8c41d77347c2b5f28012d38c6c566.png"
    },
    {
      id: 3,
      name: "AIR MAX",
      description: "Visible air cushioning technology that revolutionized comfort.",
      imageUrl: "/nike-free-nike-air-max-sneakers-shoe-red-shoes-78c3ee1eb5170ce50ef0c55755e33899.png"
    },
    {
      id: 4,
      name: "AIR PEGASUS",
      description: "A running classic that has evolved through generations of runners.",
      imageUrl: "/sneakers-skate-shoe-nike-one-nike-shoe-9110c7d3e23d590d1e880f9be7818222.png"
    }
  ];

  // Use actual products or fallback if loading/empty
  const displayProducts = products.length > 0 ? products : fallbackProducts;
  
  // Placeholder for loading state
  const placeholderCount = 4;

  return (
    <section ref={sectionRef} className="py-20 px-6 md:px-16 bg-[hsl(var(--nike-gray))]">
      <div className="max-w-7xl mx-auto">
        <h2 ref={headingRef} className="text-4xl md:text-5xl mb-2">ICONIC SILHOUETTES</h2>
        <p ref={descriptionRef} className="text-gray-600 text-xl mb-12">
          Legendary designs that defined generations
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {isLoading ? (
            // Loading skeletons
            Array(placeholderCount).fill(0).map((_, index) => (
              <div key={index} className="bg-white rounded-xl p-6">
                <div className="h-64 flex items-center justify-center mb-6">
                  <Skeleton className="h-48 w-48" />
                </div>
                <Skeleton className="h-6 w-2/3 mb-2" />
                <Skeleton className="h-4 w-full mb-4" />
                <Skeleton className="h-4 w-1/3" />
              </div>
            ))
          ) : (
            // Actual product showcase
            displayProducts.map((product, index) => (
              <motion.div 
                key={product.id} 
                className="bg-white rounded-xl p-6 product-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="product-image-container h-64 flex items-center justify-center mb-6">
                  <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="product-image h-48 w-auto"
                  />
                </div>
                <h3 className="text-xl mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <a 
                  href={`#${product.name.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="inline-block text-black font-bold border-b-2 border-black pb-1 hover:text-[hsl(var(--nike-red))] hover:border-[hsl(var(--nike-red))] transition duration-300"
                >
                  SHOP NOW
                </a>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
