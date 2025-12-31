import React from 'react';
import { Search, ShieldCheck, Handshake, Globe2, Lock } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "Bespoke Search",
    description: "Identifying properties that fit exact requirements through a private network of owners and developers.",
    icon: Search
  },
  {
    title: "Due Diligence",
    description: "Technical and legal reviews, benchmarking market value to rigorously protect your interests.",
    icon: ShieldCheck
  },
  {
    title: "Negotiation",
    description: "Confidential negotiation management, liaising with legal teams to ensure optimal terms.",
    icon: Handshake
  },
  {
    title: "Cross-Border",
    description: "Seamless operation across Switzerland, Spain, and France, coordinating local expertise.",
    icon: Globe2
  },
  {
    title: "Discretion",
    description: "Quiet, efficient execution with full respect for privacy and identity protection.",
    icon: Lock
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-8 md:px-16">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-stone-100 pb-10">
            <div>
                <span className="text-luxury-gold tracking-super-wide text-xs uppercase font-bold">What We Do</span>
                <h2 className="mt-4 text-4xl font-light text-obsidian">The Buyer’s Advantage</h2>
            </div>
            <p className="text-stone-400 max-w-md text-right text-sm md:text-base font-light mt-6 md:mt-0 leading-relaxed">
                A comprehensive service designed to remove complexity and risk from international acquisition.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {services.map((service, index) => (
            <div key={index} className="group cursor-default">
              <service.icon size={24} strokeWidth={1} className="text-stone-800 mb-6 group-hover:text-luxury-gold transition-colors duration-500" />
              <h3 className="text-xl font-normal text-obsidian mb-3">{service.title}</h3>
              <p className="text-stone-500 font-light leading-relaxed text-base">
                {service.description}
              </p>
            </div>
          ))}
          
          {/* Minimalist Promise Box */}
          <div className="bg-obsidian text-white p-10 flex flex-col justify-center items-center text-center">
            <h3 className="text-2xl font-light mb-4 text-luxury-gold">Our Promise</h3>
            <p className="text-stone-400 font-light text-base leading-relaxed mb-6">
              "Every search is unique; every transaction is confidential."
            </p>
            <div className="w-8 h-px bg-luxury-gold/50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};