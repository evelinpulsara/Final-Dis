// app/components/sections/TestimonialsSection.tsx
'use client';

import React, { useState } from 'react';

interface TestimonialsProps {
  isDark: boolean;
  language: 'es' | 'en';
  activeMenu: string;
}

export default function TestimonialsSection({ isDark = false, language = 'es', activeMenu = '' }: TestimonialsProps) {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    comment: '',
    photo: '' // seguirá siendo una string (URL de datos)
  });
  const [testimonials, setTestimonials] = useState([
    { 
      text: 'Demuestra gran dedicación en cada proyecto, siempre busca soluciones creativas y bien estructuradas.', 
      name: 'Andrea López', 
      role: 'Docente',
      date: '15/04/2025',
      photo: 'https://randomuser.me/api/portraits/women/30.jpg'
    },
    { 
      text: 'Trabajar con ella en equipo es inspirador; aporta ideas claras y mantiene una actitud positiva y profesional.', 
      name: 'Carlos Mendoza', 
      role: 'Compañero',
      date: '02/05/2025',
      photo: 'https://randomuser.me/api/portraits/men/31.jpg'
    },
    { 
      text: 'Tiene la habilidad de unir lo técnico con lo humano, logrando resultados sólidos y con valor práctico.', 
      name: 'Laura Jiménez', 
      role: 'Profesora',
      date: '20/05/2025',
      photo: 'https://randomuser.me/api/portraits/women/32.jpg'
    },
  ]);

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

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setFormData({ ...formData, photo: event.target.result as string });
        }
      };
      reader.readAsDataURL(file);
    } else {
      // Si no hay archivo, limpiamos el campo
      setFormData({ ...formData, photo: '' });
    }
  };

  const handleSubmit = () => {
    if (formData.name && formData.comment) {
      const newTestimonial = {
        text: formData.comment,
        name: formData.name,
        role: formData.role || 'Colaborador',
        date: new Date().toLocaleDateString('es-ES'),
        photo: formData.photo || `https://ui-avatars.com/api/?name=${encodeURIComponent(formData.name)}&background=B18BE8&color=fff`
      };
      setTestimonials([...testimonials, newTestimonial]);
      setFormData({ name: '', role: '', comment: '', photo: '' });
      setShowForm(false);
    }
  };

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

          {/* Botón para agregar testimonio */}
          <div className="flex justify-center mb-8">
            <button
              onClick={() => setShowForm(!showForm)}
              className={`group flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                isDark
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl hover:shadow-purple-500/50'
                  : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-md hover:shadow-lg'
              }`}
            >
              <svg className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              {t.addTestimonial}
            </button>
          </div>

          {/* Formulario para agregar testimonio */}
          {showForm && (
            <div className={`mb-12 p-8 rounded-2xl transition-all duration-300 ${
              isDark 
                ? 'bg-gradient-to-br from-[#1C1B2E] to-[#252341] shadow-2xl border border-purple-500/20' 
                : 'bg-white shadow-xl border border-purple-100'
            }`}>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {t.yourName} *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className={`w-full px-4 py-3 rounded-lg transition-all duration-200 ${
                        isDark
                          ? 'bg-white/5 border border-purple-500/30 text-white focus:border-purple-500 focus:bg-white/10'
                          : 'bg-purple-50 border border-purple-200 text-gray-900 focus:border-purple-500 focus:bg-white'
                      } outline-none`}
                      placeholder="Ej: Juan Pérez"
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {t.yourRole}
                    </label>
                    <input
                      type="text"
                      value={formData.role}
                      onChange={(e) => setFormData({...formData, role: e.target.value})}
                      className={`w-full px-4 py-3 rounded-lg transition-all duration-200 ${
                        isDark
                          ? 'bg-white/5 border border-purple-500/30 text-white focus:border-purple-500 focus:bg-white/10'
                          : 'bg-purple-50 border border-purple-200 text-gray-900 focus:border-purple-500 focus:bg-white'
                      } outline-none`}
                      placeholder="Ej: Desarrollador"
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t.yourComment} *
                  </label>
                  <textarea
                    value={formData.comment}
                    onChange={(e) => setFormData({...formData, comment: e.target.value})}
                    rows={4}
                    className={`w-full px-4 py-3 rounded-lg transition-all duration-200 resize-none ${
                      isDark
                        ? 'bg-white/5 border border-purple-500/30 text-white focus:border-purple-500 focus:bg-white/10'
                        : 'bg-purple-50 border border-purple-200 text-gray-900 focus:border-purple-500 focus:bg-white'
                    } outline-none`}
                    placeholder="Comparte tu experiencia trabajando conmigo..."
                  />
                </div>

                {/* ✅ Cambiado: ahora es un input de tipo file */}
                <div>
                  <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t.photoUpload}
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoChange}
                    className={`w-full px-4 py-3 rounded-lg transition-all duration-200 ${
                      isDark
                        ? 'bg-white/5 border border-purple-500/30 text-white focus:border-purple-500 focus:bg-white/10 file:bg-transparent file:text-white file:border-0'
                        : 'bg-purple-50 border border-purple-200 text-gray-900 focus:border-purple-500 focus:bg-white file:bg-transparent file:text-gray-900 file:border-0'
                    } outline-none`}
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={handleSubmit}
                    className="flex-1 px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    {t.submit}
                  </button>
                  <button
                    onClick={() => setShowForm(false)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      isDark
                        ? 'bg-white/10 text-white hover:bg-white/20'
                        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    }`}
                  >
                    {t.cancel}
                  </button>
                </div>
              </div>
            </div>
          )}

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