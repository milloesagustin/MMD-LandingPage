import { motion } from 'motion/react';
import { Cpu, Users, Target, Zap } from 'lucide-react';

const pillars = [
  {
    icon: <Cpu size={24} />,
    title: "High-Tech",
    description: "Equipo técnico de alta tecnología y última generación."
  },
  {
    icon: <Users size={24} />,
    title: "Staff Experto",
    description: "Personal altamente calificado con amplia experiencia en ejecución."
  },
  {
    icon: <Target size={24} />,
    title: "Precisión",
    description: "Ejecución precisa y planificación meticulosa."
  },
  {
    icon: <Zap size={24} />,
    title: "Calidad",
    description: "Estándar top de la industria en todas las escalas."
  }
];

export function Commitment() {
  return (
    <section id="compromiso" className="py-24 px-8 md:px-16 bg-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest mb-6 flex items-center gap-3 opacity-60 text-white">
            <span className="w-8 h-px bg-neon-green"></span> 
            Nuestro Compromiso
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((pillar, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-black p-6 border border-white/5 hover:border-neon-green/40 transition-all group"
            >
              <div className="text-neon-green mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                {pillar.icon}
              </div>
              <h3 className="text-xs md:text-sm font-bold uppercase text-neon-green tracking-widest mb-2">{pillar.title}</h3>
              <p className="text-sm opacity-60 text-white">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
