import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import NewNikeLogo from '@/assets/NewNikeLogo';
import { Search, ShoppingBag, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { href: '#featured', label: 'Featured' },
    { href: '#new-releases', label: 'New Releases' },
    { href: '#collections', label: 'Collections' },
    { href: '#innovation', label: 'Innovation' }
  ];

  return (
    <>
      {/* Logo in top left */}
      <motion.div 
        className="fixed top-6 left-6 z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Link href="/">
          <NewNikeLogo className="w-16 h-16" />
        </Link>
      </motion.div>

      {/* Search and cart in top right */}
      <motion.div 
        className="fixed top-6 right-6 z-50 flex items-center space-x-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.button 
          className="text-black hover:text-[hsl(var(--pastel-pink))] transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Search className="h-6 w-6" />
        </motion.button>
        <motion.button 
          className="text-black hover:text-[hsl(var(--pastel-pink))] transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ShoppingBag className="h-6 w-6" />
        </motion.button>
      </motion.div>

      {/* Main navigation at the bottom */}
      <motion.nav 
        className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 rounded-full py-3 px-6 flex items-center justify-center transition-all duration-300 ${
          scrolled ? 'bg-black/70 backdrop-blur-md' : 'bg-black/40 backdrop-blur-sm'
        }`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <motion.a 
              key={link.href} 
              href={link.href} 
              className="font-bold text-lg text-white hover:text-[hsl(var(--pastel-pink))] transition duration-300"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Mobile menu button */}
        <Sheet>
          <SheetTrigger asChild>
            <motion.button 
              className="md:hidden text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Menu className="h-8 w-8" />
            </motion.button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-black/80 backdrop-blur-lg text-white">
            <nav className="mt-12 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  className="font-bold text-xl"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </motion.nav>
    </>
  );
};

export default Navbar;
