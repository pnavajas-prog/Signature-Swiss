import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-obsidian text-white relative overflow-hidden">
      {/* Subtle Background Element */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(100%)'
        }}
      ></div>

      <div className="container mx-auto px-8 md:px-16 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          <div className="flex flex-col items-center text-center">
            {/* Branded Mark */}
            <div className="mb-16 opacity-80">
                <span className="font-display text-3xl text-luxury-gold italic">S</span>
                <span className="font-display text-3xl text-white">S</span>
                <div className="w-px h-12 bg-luxury-gold/30 mx-auto mt-4"></div>
            </div>

            <div className="mb-16">
                <span className="text-luxury-gold tracking-[0.5em] text-[10px] uppercase font-bold mb-6 block">Private Engagement</span>
                <h2 className="text-4xl md:text-6xl font-sans font-light text-white mb-10 tracking-tight leading-tight">
                  Begin your <span className="italic font-serif">acquisition</span> journey.
                </h2>
                <p className="text-stone-400 font-light text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-sans antialiased">
                  We invite you to schedule a confidential consultation to discuss your specific requirements across Switzerland, Spain, or France.
                </p>
            </div>

            {/* Contact Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 w-full max-w-4xl mb-20">
                <div className="bg-obsidian py-12 px-8 group transition-colors duration-700 hover:bg-charcoal">
                    <span className="text-luxury-gold text-[9px] tracking-[0.4em] uppercase block mb-4">Voice</span>
                    <a href="tel:+41225550102" className="text-xl md:text-2xl font-light text-white group-hover:text-luxury-gold transition-colors duration-500 font-sans tracking-widest">
                        +41 22 555 0102
                    </a>
                </div>
                <div className="bg-obsidian py-12 px-8 group transition-colors duration-700 hover:bg-charcoal">
                    <span className="text-luxury-gold text-[9px] tracking-[0.4em] uppercase block mb-4">Digital</span>
                    <a href="mailto:office@signatureswiss.ch" className="text-xl md:text-2xl font-light text-white group-hover:text-luxury-gold transition-colors duration-500 font-sans tracking-widest">
                        office@signatureswiss.ch
                    </a>
                </div>
            </div>

            {/* Locations Indicator */}
            <div className="flex flex-col items-center">
                <div className="text-stone-600 text-[10px] tracking-[0.6em] uppercase font-sans mb-4">
                    Geneva • Madrid • Paris
                </div>
                <div className="w-16 h-px bg-luxury-gold/20"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};