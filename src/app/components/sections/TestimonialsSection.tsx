// app/components/sections/TestimonialsSection.tsx
import React from 'react';

interface TestimonialsProps {
  isDark: boolean;
  language: 'es' | 'en';
  activeMenu: string;
}

export default function TestimonialsSection({ isDark, language, activeMenu }: TestimonialsProps) {
  const t = {
    es: {
      title: 'Testimonios',
      items: [
        { text: 'Demuestra gran dedicación en cada proyecto, siempre busca soluciones creativas y bien estructuradas.', name: 'Andrea López, Docente', date: '15/04/2025' },
        { text: 'Trabajar con ella en equipo es inspirador; aporta ideas claras y mantiene una actitud positiva y profesional.', name: 'Carlos Mendoza, Compañero', date: '02/05/2025' },
        { text: 'Tiene la habilidad de unir lo técnico con lo humano, logrando resultados sólidos y con valor práctico.', name: 'Laura Jiménez, Profesora', date: '20/05/2025' },
        { text: 'Quote', name: 'Title', date: '00/00/00' },
        { text: 'Quote', name: 'Title', date: '00/00/00' },
        { text: 'Quote', name: 'Title', date: '00/00/00' },
      ]
    },
    en: {
      title: 'Testimonials',
      items: [
        { text: 'She shows great dedication in every project, always seeking creative and well-structured solutions.', name: 'Andrea López, Teacher', date: '15/04/2025' },
        { text: 'Working with her on a team is inspiring; she brings clear ideas and maintains a positive and professional attitude.', name: 'Carlos Mendoza, Teammate', date: '02/05/2025' },
        { text: 'She has the ability to blend technical and human aspects, achieving solid and practical results.', name: 'Laura Jiménez, Professor', date: '20/05/2025' },
        { text: 'Quote', name: 'Title', date: '00/00/00' },
        { text: 'Quote', name: 'Title', date: '00/00/00' },
        { text: 'Quote', name: 'Title', date: '00/00/00' },
      ]
    }
  }[language];

  return (
    <section id="testimonios" className={`py-20 ${isDark ? 'bg-[#0F1029]' : 'bg-[#F5F3FA]'} scroll-mt-24`}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Título con burbuja solo si está activo */}
          {activeMenu === 'Testimonios' ? (
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.items.map((testimonial, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-xl shadow-inner border hover:shadow-lg transition-shadow ${
                  isDark 
                    ? 'bg-[#1C1B2E] border-[#333] text-white' 
                    : 'bg-white border-gray-300 text-gray-800'
                }`}
              >
                <p className="italic mb-4">{testimonial.text}</p>
                <div className="flex items-center gap-3">
                  <img
                    src={`https://randomuser.me/api/portraits/${idx % 2 === 0 ? 'women' : 'men'}/${30 + idx}.jpg`}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className={`font-medium ${isDark ? 'text-[#B18BE8]' : 'text-[#7A4FBF]'}`}>{testimonial.name}</p>
                    <p className={`text-sm ${isDark ? 'text-[#C7C7DB]' : 'text-[#5E5A72]'}`}>{testimonial.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}