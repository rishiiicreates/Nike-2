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
    { href: '#new-releases', label: 'New\u00A0Releases' },
    { href: '#collections', label: 'Collections' },
    { href: '#innovation', label: 'Innovation' }
  ];

  return (
    <>
      {/* Logo in top left */}
      <motion.div 
        className="fixed top-6 left-6 lg:top-8 lg:left-8 z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Link href="/">
          <NewNikeLogo className="w-12 h-12 md:w-14 md:h-14" />
        </Link>
      </motion.div>

      {/* Search and cart in top right */}
      <motion.div 
        className="fixed top-6 right-6 lg:top-8 lg:right-8 z-50 flex items-center space-x-6"
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

      {/* Main navigation at the bottom - responsive width */}
      <div className="fixed bottom-8 left-0 right-0 flex justify-center items-center z-50">
        <motion.nav 
          className={`rounded-full py-4 flex items-center justify-center transition-all duration-300 ${
            scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-black/60 backdrop-blur-sm'
          } w-[90%] max-w-[600px]`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="hidden md:flex items-center justify-center space-x-8 w-full px-8 mx-auto">
            {navLinks.map((link, index) => (
              <motion.a 
                key={link.href} 
                href={link.href} 
                className="font-bold text-lg text-white hover:text-[hsl(var(--pastel-pink))] transition duration-300 whitespace-nowrap"
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
                    className="font-bold text-xl text-center whitespace-nowrap"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </motion.nav>
      </div>
    </>
  );
};

export default Navbar;
