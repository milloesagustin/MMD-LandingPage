/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hero } from './components/Hero';
import { Commitment } from './components/Commitment';
import { Services } from './components/Services';
import { InstagramFeed } from './components/InstagramFeed';
import { AboutUs } from './components/AboutUs';
import { QuoteForm } from './components/QuoteForm';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black selection:bg-neon-green selection:text-black">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 md:gap-4">
            <img 
              src="/images/LOGO%20MMD%20ALPHA.png" 
              alt="MMD Technical Logo" 
              className="h-14 md:h-16 object-contain" 
            />
          </div>
          <div className="hidden md:flex gap-6 text-xs uppercase tracking-[0.2em] font-bold opacity-60 text-white">
            <a href="#trabajo" className="hover:text-neon-green hover:opacity-100 transition-colors">Trabajo</a>
            <a href="#nosotros" className="hover:text-neon-green hover:opacity-100 transition-colors">Nosotros</a>
            <a href="#compromiso" className="hover:text-neon-green hover:opacity-100 transition-colors">Compromiso</a>
            <a href="#servicios" className="hover:text-neon-green hover:opacity-100 transition-colors">Soluciones</a>
          </div>
          <a 
            href="#cotiza" 
            className="text-xs uppercase tracking-[0.1em] font-black bg-neon-green text-black px-6 py-2.5 rounded hover:bg-[#32e011] transition-colors"
          >
            Cotizar
          </a>
        </div>
      </nav>

      <main>
        <Hero />
        <InstagramFeed />
        {/* Nueva sección insertada aquí */}
        <AboutUs />
        <Commitment />
        <Services />
        <QuoteForm />
      </main>
      
      <Footer />
    </div>
  );
}