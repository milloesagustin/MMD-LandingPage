import { motion } from 'motion/react';

const services = [
  {
    num: "[01]",
    title: "Audio",
    description: "Contamos con diversos sistemas de amplificación, consolas digitales y microfonía."
  },
  {
    num: "[02]",
    title: "Iluminación",
    description: "Diseño de iluminación con cabezas móviles, barras led, lasers, etc."
  },
  {
    num: "[03]",
    title: "Pantallas LED",
    description: "Contamos con pantallas de distintos pitch para ajustarnos a las necesidades, procesadores NovaStar serie VX y H."
  },
  {
    num: "[04]",
    title: "Estructuras",
    description: "Sistemas Layher, escenarios, tarimas, mangrullos, pasarelas y estructuras truss para el soporte de equipos audiovisuales."
  },
  {
    num: "[05]",
    title: "CCTV y Streaming",
    description: "Circuito cerrado para tu evento con cámaras y switch profesionales, con la posibilidad de levantar un streaming o guardar el registro del evento."
  },
  {
    num: "[06]",
    title: "Creación de Visuales",
    description: "Contamos con el servicio de creación del contenido visual para el evento."
  }
];

export function Services() {
  return (
    <section id="servicios" className="py-24 px-8 md:px-16 bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest mb-6 flex items-center gap-3 opacity-60 text-white">
            <span className="w-8 h-px bg-neon-green"></span> 
            NUESTRAS SOLUCIONES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group bg-black p-6 border border-white/5 hover:border-neon-green/40 transition-all cursor-default"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="text-xs md:text-sm text-neon-green font-bold tracking-tighter uppercase">
                  {service.num} {service.title}
                </div>
                <span className="text-neon-green opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </div>
              <div className="text-base font-normal tracking-tight opacity-60 text-white leading-relaxed">
                {service.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
