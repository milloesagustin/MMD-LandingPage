import { useState } from 'react';
import { motion } from 'motion/react';

export function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventType: '',
    date: '',
    services: [] as string[],
    message: ''
  });

  const availableServices = [
    "Audio", "Iluminación", "Pantallas LED", "Estructuras", "CCTV y Streaming", "Creación de Visuales"
  ];

  const handleServiceChange = (service: string) => {
    setFormData(prev => {
      if (prev.services.includes(service)) {
        return { ...prev, services: prev.services.filter(s => s !== service) };
      }
      return { ...prev, services: [...prev.services, service] };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar datos básicos
    if (!formData.name || !formData.email) return;

    // Número de contacto de Felipe Muñoz
    const phoneNumber = "56959009712";
    
    // Formatear mensaje para WhatsApp
    const text = `*NUEVA SOLICITUD DE COTIZACIÓN - MMD*%0A----------------------------------%0A*Cliente:* ${formData.name}%0A*Email:* ${formData.email}%0A*Evento:* ${formData.eventType || 'No especificado'}%0A*Fecha:* ${formData.date || 'No especificada'}%0A*Requerimientos:* ${formData.services.length > 0 ? formData.services.join(', ') : 'Por definir'}%0A*Mensaje:* ${formData.message || 'Sin mensaje adicional'}%0A----------------------------------%0A_Enviado desde Landing Page_`;

    // Abrir WhatsApp Web/App en nueva pestaña
    const url = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(url, '_blank');
  };

  return (
    <section id="cotiza" className="py-24 px-8 md:px-16 bg-zinc-900/50 relative overflow-hidden flex flex-col justify-center">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-neon-green/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-3xl mx-auto w-full relative z-10">
        <div className="mb-12">
          <h2 className="text-4xl md:text-[56px] font-black uppercase tracking-tighter leading-none text-white">
            Cotiza tu<br />
            <span className="text-neon-green">Próximo Evento</span>
          </h2>
          <p className="text-sm opacity-60 mt-4 text-white">
            Respuesta inmediata vía WhatsApp Business
          </p>
        </div>

        <motion.form 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-xs uppercase font-black text-neon-green tracking-widest mb-1.5">
                Nombre o Empresa *
              </label>
              <input 
                required
                type="text" 
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                className="w-full bg-black/60 border-b border-white/20 p-4 text-base text-white focus:border-neon-green outline-none transition-colors"
                placeholder="Ej. Juan Pérez"
              />
            </div>
            <div>
              <label className="block text-xs uppercase font-black text-neon-green tracking-widest mb-1.5">
                Email *
              </label>
              <input 
                required
                type="email" 
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                className="w-full bg-black/60 border-b border-white/20 p-4 text-base text-white focus:border-neon-green outline-none transition-colors"
                placeholder="Ej. contacto@empresa.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-xs uppercase font-black text-neon-green tracking-widest mb-1.5">
                Tipo de Producción
              </label>
              <select 
                value={formData.eventType}
                onChange={e => setFormData({...formData, eventType: e.target.value})}
                className="w-full bg-black/60 border-b border-white/20 p-4 text-base text-white focus:border-neon-green outline-none appearance-none"
              >
                <option value="">Selecciona...</option>
                <option value="Concierto/Festival">Concierto / Festival</option>
                <option value="Corporativo">Corporativo</option>
                <option value="Matrimonio/Fiesta">Matrimonio / Fiesta</option>
                <option value="Streaming">Streaming / Broadcast</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
            <div>
              <label className="block text-xs uppercase font-black text-neon-green tracking-widest mb-1.5">
                Fecha Est.
              </label>
              <input 
                type="date" 
                value={formData.date}
                onChange={e => setFormData({...formData, date: e.target.value})}
                className="w-full bg-black/60 border-b border-white/20 p-4 text-base text-white focus:border-neon-green outline-none [color-scheme:dark]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase font-black text-neon-green tracking-widest mb-4">
              Servicios Requeridos
            </label>
            <div className="flex flex-wrap gap-3">
              {availableServices.map((service) => (
                <label 
                  key={service} 
                  className={`px-4 py-2 text-xs uppercase font-bold tracking-widest border cursor-pointer transition-colors ${
                    formData.services.includes(service) 
                      ? 'border-neon-green bg-neon-green/10 text-neon-green' 
                      : 'border-white/10 bg-black/60 text-white/50 hover:border-white/30'
                  }`}
                >
                  <input 
                    type="checkbox" 
                    className="sr-only"
                    checked={formData.services.includes(service)}
                    onChange={() => handleServiceChange(service)}
                  />
                  {service}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase font-black text-neon-green tracking-widest mb-1.5">
              Especificaciones Técnicas
            </label>
            <textarea 
              rows={3}
              value={formData.message}
              onChange={e => setFormData({...formData, message: e.target.value})}
              className="w-full bg-black/60 border-b border-white/20 p-4 text-base text-white focus:border-neon-green outline-none resize-none placeholder:opacity-30"
              placeholder="Ej: Audio 500 personas, Pantalla LED 4x3..."
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-neon-green text-black font-black uppercase py-5 hover:scale-[1.02] active:scale-95 transition-all text-sm tracking-[0.2em] shadow-[0_0_20px_rgba(57,255,20,0.2)] mt-4 rounded"
          >
            Generar Cotización WhatsApp
          </button>
        </motion.form>
      </div>
    </section>
  );
}
