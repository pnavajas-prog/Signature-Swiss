import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-obsidian">
      {/* Background Image - Reverted to Original */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-50 transition-transform duration-[30s] hover:scale-105"
        style={{ 
          backgroundImage: `url('https://picsum.photos/seed/switzerland_minimal/1920/1080')`, 
          filter: 'grayscale(100%) contrast(110%)' 
        }}
      ></div>
      
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-obsidian/20 to-obsidian/95" />

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 pt-32">
        {/* Brand Title - Balanced presence for luxury appeal */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-4 leading-tight drop-shadow-2xl">
          Signature <span className="text-luxury-gold">Swiss</span>
        </h1>

        <h2 className="text-stone-300 tracking-[0.4em] text-[10px] md:text-xs uppercase font-semibold mb-12 font-sans opacity-90">
          The Private Buyer's Office
        </h2>
        
        <p className="text-stone-200 max-w-xl text-base md:text-xl font-light leading-relaxed mb-16 tracking-wide antialiased font-sans">
          Uncovering exceptional properties across Switzerland, Spain, and France for the world’s most discerning individuals.
        </p>
        
        <a 
          href="#locations" 
          className="group relative px-10 py-4 border border-white/10 hover:border-luxury-gold transition-colors duration-500 overflow-hidden"
        >
            <div className="absolute inset-0 w-0 bg-luxury-gold/10 transition-all duration-[500ms] ease-out group-hover:w-full"></div>
            <span className="relative z-10 text-[10px] tracking-[0.3em] uppercase text-white group-hover:text-luxury-gold transition-colors duration-300 font-sans">
              Explore
            </span>
        </a>
      </div>
    </div>
  );
};