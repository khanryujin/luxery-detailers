import React from 'react';
import { motion } from 'motion/react';
import { Car, Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-brand-bg/80 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-brand-accent rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(61,126,255,0.3)] group-hover:scale-110 transition-transform">
            <Car className="text-white w-6 h-6" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight uppercase">LuxeDetail</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Services', 'Gallery', 'Process', 'Testimonials'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-brand-text-muted hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
          <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-brand-accent hover:text-white transition-all shadow-lg">
            Book Now
          </button>
        </div>

        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-brand-bg border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
        >
          {['Services', 'Gallery', 'Process', 'Testimonials'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-lg font-medium text-brand-text-muted"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="bg-brand-accent text-white px-6 py-3 rounded-xl font-bold uppercase tracking-wider">
            Book Now
          </button>
        </motion.div>
      )}
    </nav>
  );
};
