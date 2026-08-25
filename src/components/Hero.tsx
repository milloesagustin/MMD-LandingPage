import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { useState, useEffect } from 'react';

const IMAGES = [
  '/images/IMG_1730.jpg',
  '/images/IMG_6376.JPEG',
  '/images/IMG_7221.JPEG',
  '/images/IMG_7669.JPEG',
  '/images/IMG_8757.JPEG',
  '/images/IMG_8768.JPEG',
  '/images/IMG_8792.JPEG',
  '/images/IMG_8796.JPEG',
  // Nuevas imágenes agregadas:
  '/images/IMG_1395.jpg',
  '/images/IMG_1962.jpg',
  '/images/IMG_1965.jpg',
  '/images/IMG_2225.jpg',
  '/images/IMG_2002.JPG.jpeg',
  '/images/IMG_2001.JPG.jpeg',
  '/images/IMG_2004.JPG.jpeg'
];

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // 1. PRECARGA DE IMÁGENES: Fuerza al navegador a guardarlas en caché en segundo plano
    IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    // 2. INTERVALO DE 3 SEGUNDOS
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % IMAGES.length);
    }, 3000); 
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-start px-8 md:px-16 overflow-hidden pt-20 bg-black">
      {/* Background carousel */}
      <div className="absolute top-0 right-0 w-full md:w-3/5 h-full z-0 opacity-40 md:opacity-60 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 z-10" 
          style={{ 
            background: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.8) 100%)',
          }} 
        />
        <div 
          className="absolute inset-0 z-10" 
          style={{ 
            background: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,1) 100%)',
          }} 
        />
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentImageIndex}
            src={IMAGES[currentImageIndex]}
            alt="Realización Técnica"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
        </AnimatePresence>
      </div>

      <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-neon-green/10 blur-[100px] pointer-events-none z-0" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 w-full max-w-5xl relative"
      >
        <h1 className="text-5xl sm:text-6xl md:text-[84px] font-black uppercase leading-[0.85] tracking-tighter mb-8 italic text-white drop-shadow-2xl">
          Realización<br />
          <span className="text-neon-green">Técnica</span><br />
          Integral
        </h1>
        
        <p className="text-base md:text-lg opacity-80 max-w-lg leading-relaxed border-l-2 border-neon-green pl-4 mb-12 text-white drop-shadow-lg">
          Audio, Iluminación, Pantallas LED, Escenarios, CCTV y Streaming de primer nivel.
          Llevamos tu producción al siguiente nivel tecnológico.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#cotiza" 
            className="px-8 py-4 bg-neon-green text-black font-black uppercase text-sm tracking-[0.2em] hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_20px_rgba(57,255,20,0.2)] text-center rounded"
          >
            Cotiza tu Evento
          </a>
          <a 
            href="#servicios" 
            className="px-8 py-4 bg-black/50 backdrop-blur-sm border border-white/20 text-white font-black uppercase text-sm tracking-[0.2em] hover:border-neon-green/50 transition-all text-center rounded"
          >
            Ver Servicios
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-8 md:left-16 animate-bounce opacity-60 text-white z-10 hidden md:block"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
}