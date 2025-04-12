import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import NikeLogo from '@/assets/NikeLogo';
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
      className={`fixed w-full z-50 px-6 md:px-8 py-4 flex items-center justify-between transition-all duration-300 ${
        scrolled ? 'bg-black py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="flex items-center">
        <Link href="/" className="mr-8">
          <NikeLogo className="w-12 h-12 text-white" />
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="font-bold text-lg text-white hover:text-[hsl(var(--nike-volt))] transition duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="flex items-center space-x-6">
        <button className="text-white">
          <Search className="h-6 w-6" />
        </button>
        <button className="text-white">
          <ShoppingBag className="h-6 w-6" />
        </button>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger asChild>
            <button className="md:hidden text-white">
              <Menu className="h-8 w-8" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-black text-white">
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
