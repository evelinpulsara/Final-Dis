// app/testimonials/page.tsx
import React from 'react';

interface TestimonialsProps {
  isDark: boolean;
  language: 'es' | 'en';
}

export default function TestimonialsSection({ isDark, language }: TestimonialsProps) {
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
    <section id="testimonios" className={`py-20 ${isDark ? 'bg-[#0F1029]' : 'bg-[#F5F3FA]'}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-12 ${isDark ? 'text-white' : ''}`}>{t.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.items.map((testimonial, idx) => (
              <div
                key={idx}
                className={`${isDark ? 'bg-[#1C1B2E] border-[#333]' : 'bg-[#D6C8F0] border-gray-300'} p-6 rounded-xl shadow-md border hover:shadow-lg transition-shadow`}
              >
                <p className={`${isDark ? 'text-white' : 'text-gray-800'} italic mb-4`}>
                  {testimonial.text}
                </p>
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