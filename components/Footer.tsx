import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-obsidian text-white py-16 border-t border-white/5">
      <div className="container mx-auto px-8 md:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h2 className="font-display text-2xl md:text-3xl mb-1 text-white">Signature <span className="text-luxury-gold">Swiss</span></h2>
          </div>
          
          <div className="flex space-x-10 text-xs text-stone-500 tracking-super-wide uppercase font-sans">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Legal</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 text-xs text-stone-600 flex flex-col md:flex-row justify-between tracking-widest uppercase font-sans">
          <p>&copy; {new Date().getFullYear()} Signature Swiss.</p>
          <p className="mt-2 md:mt-0">Geneva • Madrid • Paris</p>
        </div>
      </div>
    </footer>
  );
};