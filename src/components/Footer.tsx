import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 px-8 md:px-16 flex flex-col gap-12 shrink-0">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-sm font-bold uppercase tracking-widest mb-8 flex items-center gap-3 opacity-60 text-white">
          <span className="w-8 h-px bg-neon-green"></span> 
          Contacto
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <div className="text-neon-green">
              <Phone size={24} />
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">Teléfono</h3>
              <a href="https://wa.me/56959009712" target="_blank" rel="noopener noreferrer" className="text-base text-white hover:text-neon-green transition-colors">+569 59009712</a>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <div className="text-neon-green">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">Correo</h3>
              <a href="mailto:felipe@mmd.cl" className="text-base text-white hover:text-neon-green transition-colors">felipe@mmd.cl</a>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <div className="text-neon-green">
              <Instagram size={24} />
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">Instagram</h3>
              <a href="https://www.instagram.com/mmdtechnicalsupport/" target="_blank" rel="noopener noreferrer" className="text-base text-white hover:text-neon-green transition-colors">@mmdtechnicalsupport</a>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <div className="text-neon-green">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">Ubicación</h3>
              <p className="text-base text-white leading-relaxed">
                La Capitanía 80 of 108,<br />
                Las Condes, Región Metropolitana<br />
                de Santiago, Chile.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="opacity-30 tracking-widest font-normal text-white text-center text-xs uppercase mt-8 pt-8 border-t border-white/10 max-w-7xl mx-auto w-full">
        MMD Technical Support Chile • All Systems Operational • {new Date().getFullYear()}
      </div>
    </footer>
  );
}
