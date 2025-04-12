import { Link } from 'wouter';
import NikeLogo from '@/assets/NikeLogo';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const productLinks = [
    { label: 'Shoes', href: '#' },
    { label: 'Clothing', href: '#' },
    { label: 'Accessories', href: '#' },
    { label: 'Collections', href: '#' },
    { label: 'Sale', href: '#' },
  ];

  const sportsLinks = [
    { label: 'Running', href: '#' },
    { label: 'Basketball', href: '#' },
    { label: 'Football', href: '#' },
    { label: 'Gym & Training', href: '#' },
    { label: 'Tennis', href: '#' },
  ];

  const collectionsLinks = [
    { label: 'Jordan', href: '#' },
    { label: 'Air Max', href: '#' },
    { label: 'Air Force 1', href: '#' },
    { label: 'Flyknit', href: '#' },
    { label: 'Dri-FIT', href: '#' },
  ];

  const aboutLinks = [
    { label: 'News', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Investors', href: '#' },
    { label: 'Sustainability', href: '#' },
    { label: 'Purpose', href: '#' },
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: '#' },
    { icon: <Twitter className="h-5 w-5" />, href: '#' },
    { icon: <Instagram className="h-5 w-5" />, href: '#' },
    { icon: <Youtube className="h-5 w-5" />, href: '#' },
  ];

  return (
    <footer className="bg-black text-white pt-16 pb-8 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 pb-10 border-b border-white/20">
          {/* Products Column */}
          <div>
            <h4 className="font-bold text-lg mb-6">PRODUCTS</h4>
            <ul className="space-y-3">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sports Column */}
          <div>
            <h4 className="font-bold text-lg mb-6">SPORTS</h4>
            <ul className="space-y-3">
              {sportsLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections Column */}
          <div>
            <h4 className="font-bold text-lg mb-6">COLLECTIONS</h4>
            <ul className="space-y-3">
              {collectionsLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Column */}
          <div>
            <h4 className="font-bold text-lg mb-6">ABOUT NIKE</h4>
            <ul className="space-y-3">
              {aboutLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Join Us Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h4 className="font-bold text-lg mb-6">JOIN US</h4>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  className="bg-white/10 hover:bg-white/20 rounded-full w-10 h-10 flex items-center justify-center transition duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              Sign up for Nike emails to be the first to know about new products, exclusive offers, and more.
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center">
            <NikeLogo className="w-10 h-10 mr-3" />
            <span className="text-sm text-gray-400">
              © {new Date().getFullYear()} Nike, Inc. All Rights Reserved
            </span>
          </div>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <Link href="#" className="text-sm text-gray-400 hover:text-white transition duration-200">
              Terms of Use
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white transition duration-200">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white transition duration-200">
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
