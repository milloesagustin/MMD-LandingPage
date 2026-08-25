export function AboutUs() {
  return (
    <section id="nosotros" className="py-24 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Columna de Texto */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-black text-neon-green uppercase tracking-tighter mb-2">
              Quiénes Somos
            </h2>
            <div className="h-1 w-32 bg-neon-green mb-10"></div>
            
            <div className="space-y-6 text-gray-300 text-base md:text-lg leading-relaxed">
              <p>
                Somos <strong className="text-white font-bold">MMD</strong>, una empresa dedicada a la realización técnica integral de eventos en vivo.
              </p>
              <p>
                Nos especializamos en Sonido, Iluminación, Pantallas LED, CCTV, Streaming, Diseño y Operación de Visuales, entregando soluciones confiables y de alto estándar para asegurar el éxito de cada producción.
              </p>
            </div>
          </div>

          {/* Columna de Video (Bordes verdes eliminados) */}
          <div className="relative h-[400px] md:h-[500px] w-full rounded-xl overflow-hidden shadow-2xl">
            <video 
              src="/videos/video1.mp4" 
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}