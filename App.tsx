import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Locations } from './components/Locations';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-alabaster text-obsidian font-sans selection:bg-luxury-gold selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Locations />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;