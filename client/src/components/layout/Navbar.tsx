import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import NewNikeLogo from '@/assets/NewNikeLogo';
import { Search, ShoppingBag, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

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
    <header 
      className={`fixed top-0 w-full z-50 px-6 md:px-8 py-3 flex items-center justify-between transition-all duration-300 ${
        scrolled ? 'bg-black/70 backdrop-blur-md' : 'bg-black/40 backdrop-blur-sm'
      }`}
    >
      <div className="flex items-center">
        <Link href="/" className="mr-8">
          <NewNikeLogo className="w-12 h-12" />
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="font-bold text-lg text-white hover:text-[hsl(var(--pastel-pink))] transition duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="flex items-center space-x-6">
        <button className="text-white hover:text-[hsl(var(--pastel-blue))] transition duration-300">
          <Search className="h-6 w-6" />
        </button>
        <button className="text-white hover:text-[hsl(var(--pastel-blue))] transition duration-300">
          <ShoppingBag className="h-6 w-6" />
        </button>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger asChild>
            <button className="md:hidden text-white">
              <Menu className="h-8 w-8" />
            </button>
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
      </div>
    </header>
  );
};

export default Navbar;
