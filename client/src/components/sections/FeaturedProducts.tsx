import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProductCard from '@/components/ui/ProductCard';
import { type Product } from '@shared/schema';
import { Skeleton } from '@/components/ui/skeleton';

gsap.registerPlugin(ScrollTrigger);

interface FeaturedProductsProps {
  products: Product[];
  isLoading: boolean;
}

const FeaturedProducts = ({ products, isLoading }: FeaturedProductsProps) => {
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
      
      // Animate cards
      const cards = sectionRef.current.querySelectorAll('.product-card');
      gsap.from(cards, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        delay: 0.4,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none"
        }
      });
    }
  }, [products]);

  // Fallback products if data is not loaded yet
  const placeholderCount = 3;

  return (
    <section id="featured" ref={sectionRef} className="py-20 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 ref={headingRef} className="text-4xl md:text-5xl mb-2">FEATURED</h2>
        <p ref={descriptionRef} className="text-gray-600 text-xl mb-12">
          Iconic silhouettes reimagined for the modern era
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {isLoading ? (
            // Loading skeletons
            Array(placeholderCount).fill(0).map((_, index) => (
              <div key={index} className="bg-gray-100 rounded-xl overflow-hidden">
                <Skeleton className="h-80 w-full" />
                <div className="p-6">
                  <Skeleton className="h-8 w-2/3 mb-2" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-6 w-16" />
                    <Skeleton className="h-10 w-28 rounded-full" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            // Actual product cards
            products.map((product) => (
              <ProductCard 
                key={product.id}
                product={product}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
