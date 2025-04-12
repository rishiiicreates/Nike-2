import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import ParallaxShowcase from "@/components/sections/ParallaxShowcase";
import NewReleases from "@/components/sections/NewReleases";
import CollectionShowcase from "@/components/sections/CollectionShowcase";
import Innovation from "@/components/sections/Innovation";
import ProductShowcase from "@/components/sections/ProductShowcase";
import CtaSection from "@/components/sections/CtaSection";
import { useQuery } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

const Home = () => {
  const { toast } = useToast();

  // Fetch all products
  const { data: products, error, isLoading } = useQuery({
    queryKey: ['/api/products'],
    staleTime: 60000, // 1 minute
  });

  // Handle error
  useEffect(() => {
    if (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load products. Please try again later.",
      });
    }
  }, [error, toast]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        
        <FeaturedProducts 
          products={products?.filter(p => p.featured) || []} 
          isLoading={isLoading}
        />
        
        <ParallaxShowcase />
        
        <NewReleases 
          products={products?.filter(p => p.newRelease) || []} 
          isLoading={isLoading}
        />
        
        <CollectionShowcase />
        
        <Innovation />
        
        <ProductShowcase 
          products={products?.filter(p => p.collection === "Icons") || []} 
          isLoading={isLoading}
        />
        
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
