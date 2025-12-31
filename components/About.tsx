import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 bg-alabaster">
      <div className="container mx-auto px-8 md:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="relative">
                <img 
                    src="https://picsum.photos/seed/minimal_interior_bw/800/1000" 
                    alt="Luxury Interior" 
                    className="w-full h-[500px] object-cover filter grayscale"
                />
                <div className="absolute -bottom-6 -right-6 w-64 bg-obsidian text-white p-8 hidden md:block border border-white/10">
                    <span className="text-4xl font-light block mb-2 text-luxury-gold">100%</span>
                    <span className="text-xs uppercase tracking-super-wide leading-relaxed text-stone-400">Independent<br/>From Sellers</span>
                </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <span className="text-luxury-gold tracking-super-wide text-xs uppercase font-bold">Our Philosophy</span>
            <h2 className="mt-6 text-3xl md:text-5xl font-light text-obsidian leading-tight mb-8">
              We stand solely on <br/> <span className="font-normal text-stone-500">your side of the table.</span>
            </h2>
            <div className="space-y-6 text-base md:text-lg text-stone-600 font-light leading-relaxed">
              <p>
                In a market dominated by estate agents representing sellers, 
                <span className="font-normal text-obsidian"> Signature Swiss</span> was founded to restore balance. 
                We do not sell. We serve.
              </p>
              <p>
                Unburdened by a sales portfolio, we have the freedom to search the entire market—including off-market and private listings—to find the residence that meets your exacting standards.
              </p>
              <div className="pt-8 border-t border-stone-200/50">
                  <p className="text-xs uppercase tracking-super-wide text-obsidian">
                    Discretion • Independence • Excellence
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};