// app/components/sections/TestimonialsSection.tsx
'use client';

import React from 'react';

interface TestimonialsProps {
  isDark: boolean;
  language: 'es' | 'en';
  activeMenu: string;
}

export default function TestimonialsSection({ isDark = false, language = 'es', activeMenu = '' }: TestimonialsProps) {
  const t = {
    es: {
      title: 'Testimonios',
      addTestimonial: 'Agregar testimonio',
      yourName: 'Tu nombre',
      yourRole: 'Tu rol/cargo',
      yourComment: 'Tu comentario',
      photoUpload: 'Sube tu foto (opcional)',
      submit: 'Enviar testimonio',
      cancel: 'Cancelar'
    },
    en: {
      title: 'Testimonials',
      addTestimonial: 'Add testimonial',
      yourName: 'Your name',
      yourRole: 'Your role/position',
      yourComment: 'Your comment',
      photoUpload: 'Upload your photo (optional)',
      submit: 'Submit testimonial',
      cancel: 'Cancel'
    }
  }[language];

  // ✅ Testimonios con fotos locales (desde /public/images/testimonios/)
  const testimonials = [
    { 
      text: 'Evelin es una persona amable, trabajadora y siempre dispuesta a aportar al equipo. Su compromiso y organización hacen que trabajar con ella sea una experiencia muy positiva', 
      name: 'Jesus Villota', 
      role: 'Docente',
      date: '15/04/2025',
      photo: '/images/testimonios/Jesus.jpeg' // ✅ Ruta local
    },

    { 
      text: 'Considero que la señorita Evelin Pulsara destaca por su sentido estético y su compromiso con ofrecer experiencias siempre agradables, visuales y responsivas a sus usuarios.', 
      name: 'Emanuel Castillo', 
      role: 'Docente',
      date: '15/04/2025',
      photo: '/images/testimonios/andrea.jpg' // ✅ Ruta local
    },

    { 
      text: 'Demuestra gran dedicación en cada proyecto, siempre busca soluciones creativas y bien estructuradas.', 
      name: 'Luna Martinez', 
      role: 'Docente',
      date: '15/04/2025',
      photo: '/images/testimonios/andrea.jpg' // ✅ Ruta local
    },
  ];

  return (
    <section id="testimonios" className={`py-20 ${isDark ? 'bg-gradient-to-b from-[#1a1642] to-[#0F1029]' : 'bg-gradient-to-b from-white to-[#F5F3FA]'} scroll-mt-24`}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Título mejorado */}
          <div className="text-center mb-16">
            {activeMenu === 'Testimonios' ? (
              <div className="inline-block">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 blur-xl opacity-30 rounded-full"></div>
                  <div className="relative px-8 py-4 rounded-full font-bold text-2xl bg-gradient-to-r from-[#DFC3EF] to-[#E9D5F5] text-gray-800 shadow-lg">
                    {t.title}
                  </div>
                </div>
              </div>
            ) : (
              <h2 className={`text-4xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {t.title}
              </h2>
            )}
            <div className={`w-20 h-1 mx-auto mt-4 rounded-full ${isDark ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-gradient-to-r from-purple-400 to-pink-400'}`}></div>
          </div>

          {/* ✅ Eliminado: Botón para agregar testimonio y formulario */}
          
          {/* Grid de testimonios */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className={`group relative p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
                  isDark 
                    ? 'bg-gradient-to-br from-[#1C1B2E] to-[#252341] hover:from-[#252341] hover:to-[#2D255A] shadow-xl hover:shadow-2xl hover:shadow-purple-500/20' 
                    : 'bg-white hover:bg-gradient-to-br hover:from-white hover:to-purple-50 shadow-lg hover:shadow-xl'
                } border ${isDark ? 'border-purple-500/20 hover:border-purple-500/40' : 'border-purple-100 hover:border-purple-300'}`}
              >
                <div className={`absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity ${isDark ? 'text-purple-300' : 'text-purple-400'}`}>
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <p className={`italic mb-6 text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  &quot;{testimonial.text}&quot;
                </p>

                <div className={`flex items-center gap-3 pt-4 border-t ${isDark ? 'border-purple-500/20' : 'border-purple-100'}`}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-md opacity-40 group-hover:opacity-60 transition-opacity"></div>
                    <img
                      src={testimonial.photo}
                      alt={testimonial.name}
                      className={`relative w-12 h-12 rounded-full object-cover border-2 ${isDark ? 'border-purple-500/30' : 'border-purple-200'} group-hover:scale-110 transition-transform duration-300`}
                    />
                  </div>
                  <div className="flex-1">
                    <p className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {testimonial.name}
                    </p>
                    <p className={`text-sm ${isDark ? 'text-purple-300' : 'text-purple-600'}`}>
                      {testimonial.role}
                    </p>
                    <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                      {testimonial.date}
                    </p>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] pointer-events-none rounded-2xl"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}