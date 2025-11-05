// app/components/sections/ContactSection.tsx
import React from 'react';

interface ContactProps {
  isDark: boolean;
  language: 'es' | 'en';
  activeMenu: string;
}

export default function ContactSection({ isDark, language, activeMenu }: ContactProps) {
  const t = {
    es: {
      title: 'Contactos',
    },
    en: {
      title: 'Contacts',
    }
  }[language];

  return (
    <section id="contacto" className={`py-20 ${isDark ? 'bg-[#1C1B2E]' : 'bg-[#E9E2F7]'} scroll-mt-24`}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Título con burbuja solo si está activo */}
          {activeMenu === 'Contacto' ? (
            <div className="text-center mb-12">
              <div className="inline-block px-6 py-3 rounded-full font-semibold text-lg bg-[#DFC3EF]/80 text-gray-800 shadow-inner">
                {t.title}
              </div>
            </div>
          ) : (
            <h2 className={`text-3xl font-bold text-center mb-12 ${isDark ? 'text-white' : ''}`}>
              {t.title}
            </h2>
          )}

          <div className="flex flex-wrap justify-center gap-8">
            {[
              { name: 'GitHub', url: 'https://github.com/evelinpulsara', img: 'https://cdn-icons-png.flaticon.com/512/25/25231.png' },
              { name: 'Email', url: 'mailto:evelinpulsara@example.com', img: 'https://toppng.com/uploads/preview/outlook-logo-png-1764x1490-117357613016jetuonqfr.webp' },
              { name: 'Instagram', url: 'https://www.instagram.com/justevie_93/', img: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png' },
              { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61557542469129', img: 'https://images.vexels.com/media/users/3/223136/isolated/preview/984f500cf9de4519b02b354346eb72e0-icono-de-facebook-redes-sociales.png' },
              { name: 'X', url: 'https://x.com/JustEvie_93', img: 'https://img.freepik.com/vector-gratis/nuevo-diseno-icono-x-logotipo-twitter-2023_1017-45418.jpg?semt=ais_hybrid&w=740&q=80' },
              { name: 'LinkedIn', url: 'https://www.linkedin.com/in/evelin-pulsara-6790a3359/', img: 'https://cdn-icons-png.flaticon.com/512/174/174857.png' },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`block p-4 rounded-xl shadow-inner hover:shadow-lg transition-shadow ${
                  isDark ? 'bg-[#2D255A] text-white' : 'bg-white text-gray-800'
                }`}
              >
                <img src={social.img} alt={social.name} className="w-12 h-12 object-contain" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}