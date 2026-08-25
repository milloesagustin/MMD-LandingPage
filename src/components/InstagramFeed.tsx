import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

interface InstaPost {
  id: string;
  media_type: string;
  media_url: string;
  permalink: string;
}

export const InstagramFeed = () => {
  const [posts, setPosts] = useState<InstaPost[]>([]);

  useEffect(() => {
    // Token de larga duración generado en Meta
    const token = 'IGAGMHNIzB6eFBZAGJGNS1kaTBMTGY4NEhiaDlBMHlRMXJVZAGZARcXBPcDJNbndhU0ZABcWcwZA3NmWnVXdTgweE9odnp6VnVkY2gxQWVxam9TdWlCbkcwSkFtT0FfRkVaRzBxcUIxRXNsZA0VHYTQwbmlCdzRwRk5aeXEzZADc5ZAEEtdwZDZD'; 
    
    // Petición a la API con límite de 50 publicaciones
    const url = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink&limit=50&access_token=${token}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.data) {
          // Filtramos solo imágenes, carruseles y videos válidos
          const fetchedPosts = data.data.filter(
            (post: InstaPost) => post.media_type === 'IMAGE' || post.media_type === 'CAROUSEL_ALBUM' || post.media_type === 'VIDEO'
          );
          
          if (fetchedPosts.length > 0) {
            // EL TRUCO: Multiplicamos el arreglo si hay menos de 10 posts
            // Esto le asegura a Swiper que siempre tendrá suficientes slides para hacer el loop infinito
            let duplicatedPosts = [...fetchedPosts];
            while (duplicatedPosts.length < 12) {
              duplicatedPosts = [...duplicatedPosts, ...fetchedPosts];
            }
            setPosts(duplicatedPosts);
          }
        }
      })
      .catch((err) => console.error('Error cargando el feed de Instagram:', err));
  }, []);

  return (
    <section id="trabajo" className="py-24 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-5xl font-black text-white text-center mb-12 uppercase tracking-tighter">
          Nuestros últimos <span className="text-neon-green">Trabajos</span>
        </h2>

        {/* Solo renderiza el Swiper si hay posts para evitar errores */}
        {posts.length > 0 && (
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={6000}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="insta-swiper"
          >
            {posts.map((post, index) => (
              // Usamos el id original + el index del loop para asegurar que la key sea única
              <SwiperSlide key={`${post.id}-${index}`}>
                <a 
                  href={post.permalink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block w-full h-80 overflow-hidden rounded-xl border-2 border-transparent hover:border-neon-green transition-colors duration-300 relative group"
                >
                  {/* Overlay oscuro sutil que desaparece al pasar el mouse */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
                  
                  {post.media_type === 'VIDEO' ? (
                    <video
                      src={post.media_url}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover z-0 relative"
                    />
                  ) : (
                    <img
                      src={post.media_url}
                      alt="MMD Technical Support Trabajo"
                      className="w-full h-full object-cover z-0 relative group-hover:scale-105 transition-transform duration-700"
                    />
                  )}
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};