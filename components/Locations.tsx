import React from 'react';
import { LocationCardProps } from '../types';

const locations: LocationCardProps[] = [
  {
    name: "Switzerland",
    description: "Lake Geneva • Gstaad • Zurich",
    // Image: Lake Geneva (Lavaux Vineyards/Lake view) - Elegant and iconic
    image: "https://images.unsplash.com/photo-1533519803108-7248e35824dc?q=80&w=1920&auto=format&fit=crop",
    features: ["Lake Geneva"]
  },
  {
    name: "Spain",
    description: "San Sebastián • Barcelona • Ibiza",
    // Image: Barcelona Architecture (Eixample/Classic facades) - Warm and structural
    image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?q=80&w=1920&auto=format&fit=crop",
    features: ["San Sebastián", "Barcelona"]
  },
  {
    name: "France",
    description: "Biarritz • Paris • Riviera",
    // Image: Biarritz Coastline/Rocher de la Vierge - Dramatic and coastal
    image: "https://images.unsplash.com/photo-1619623916290-79287c8d8b62?q=80&w=1920&auto=format&fit=crop",
    features: ["Biarritz"]
  }
];

export const Locations: React.FC = () => {
  return (
    <section id="locations" className="py-24 bg-alabaster">
      <div className="container mx-auto px-8 md:px-16">
        <div className="text-center mb-20">
          <span className="text-luxury-gold tracking-super-wide text-xs uppercase font-bold">Our Reach</span>
          <h2 className="mt-6 text-4xl md:text-5xl font-sans font-light tracking-wide text-obsidian">Prime Locations</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {locations.map((loc, idx) => (
            <div key={idx} className="group relative h-[600px] overflow-hidden cursor-pointer bg-obsidian">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-105 opacity-60 group-hover:opacity-30"
                style={{ backgroundImage: `url(${loc.image})`, filter: 'grayscale(100%)' }}
              />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-center items-center text-white z-10 transition-all duration-500">
                <h3 className="text-3xl font-sans font-light mb-4 tracking-wide">{loc.name}</h3>
                <div className="h-px w-0 bg-luxury-gold mb-6 transition-all duration-700 group-hover:w-16" />
                
                {/* Hover Content */}
                <div className="flex flex-col items-center gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-100">
                    {loc.features.map((city, i) => (
                         <span key={i} className="text-stone-300 font-normal text-sm tracking-super-wide uppercase">
                            {city}
                         </span>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};