import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `fixed w-full z-50 transition-all duration-500 ease-in-out ${
    isScrolled 
      ? 'bg-obsidian/95 backdrop-blur-sm py-4 border-b border-white/5' 
      : 'bg-transparent py-8'
  }`;

  const linkClasses = `text-[10px] tracking-super-wide uppercase hover:text-luxury-gold transition-colors duration-300 font-medium font-sans ${
      isScrolled ? 'text-white/80' : 'text-white'
  }`;

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-8 md:px-16 flex justify-between items-center">
        {/* Brand Logo - Flourished */}
        <div className={`font-display text-2xl md:text-3xl text-white`}>
          Signature <span className="text-luxury-gold">Swiss</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12">
          <a href="#philosophy" className={linkClasses}>Philosophy</a>
          <a href="#services" className={linkClasses}>Services</a>
          <a href="#locations" className={linkClasses}>Locations</a>
          <a href="#contact" className={linkClasses}>Contact</a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white hover:text-luxury-gold transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} strokeWidth={1} /> : <Menu size={20} strokeWidth={1} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-obsidian z-40 transition-transform duration-500 flex flex-col justify-center items-center space-y-8 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <a href="#philosophy" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-light text-white hover:text-luxury-gold font-serif">Philosophy</a>
          <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-light text-white hover:text-luxury-gold font-serif">Services</a>
          <a href="#locations" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-light text-white hover:text-luxury-gold font-serif">Locations</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-light text-white hover:text-luxury-gold font-serif">Contact</a>
      </div>
    </nav>
  );
};