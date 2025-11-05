// app/about/page.tsx
'use client';

import React, { useEffect } from 'react';

interface AboutProps {
  isDark: boolean;
  language: 'es' | 'en';
  currentImageIndex: number;
  setCurrentImageIndex: (index: number) => void;
}

export default function AboutSection({
  isDark,
  language,
  currentImageIndex,
  setCurrentImageIndex
}: AboutProps) {
  const t = {
    es: {
      title: 'Sobre mi',
      p1: 'Soy estudiante de Ingeniería de Software, con interés en el desarrollo de aplicaciones y videojuegos. Busco fortalecer mis conocimientos, aportar soluciones y crecer profesionalmente.',
      p2: 'Me interesa el área de desarrollo frontend, con entusiasmo en la creación de interfaces dinámicas y en el diseño de videojuegos. Me definen la creatividad, la curiosidad y la perseverancia, cualidades que aplico en mis proyectos académicos y personales. Además de programar, disfruto pintar, leer, cocinar y jugar Roblox, actividades que alimentan mi imaginación y refuerzan mi capacidad de análisis. Aspiro a crecer profesionalmente y aportar soluciones innovadoras que integren técnica, arte y experiencias significativas.'
    },
    en: {
      title: 'About me',
      p1: 'I am a Software Engineering student, interested in application and video game development. I seek to strengthen my knowledge, provide solutions, and grow professionally.',
      p2: 'I am interested in frontend development, with enthusiasm for creating dynamic interfaces and video game design. I am defined by creativity, curiosity, and perseverance—qualities I apply in my academic and personal projects. Besides programming, I enjoy painting, reading, cooking, and playing Roblox, activities that fuel my imagination and reinforce my analytical skills. I aspire to grow professionally and contribute innovative solutions that integrate technology, art, and meaningful experiences.'
    }
  }[language];

  // Array de imágenes
  const images = [
    '/imagenes/Foto4.jpeg',
    '/imagenes/Foto5.jpeg',
    '/imagenes/Foto6.jpeg'
  ];

  // ✅ Corregido: se calcula el siguiente índice sin usar la forma callback
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentImageIndex, images.length, setCurrentImageIndex]);

  return (
    <section id="sobremi" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          <div className="lg:w-1/2 relative flex items-center justify-center">
            <div className="absolute inset-0 bg-[#DFC3EF] rounded-full blur-3xl opacity-30 transform scale-110" />
            <div className="relative w-full max-w-xs mx-auto">
              {/* Carrusel totalmente responsivo */}
              <div className="w-full aspect-square sm:max-w-[320px] md:max-w-[400px] lg:max-w-[480px] relative">
                {images.map((img, index) => {
                  const offset = (index - currentImageIndex + images.length) % images.length;
                  let transform = '';
                  let zIndex = 0;
                  let opacity = 0;
                  if (offset === 0) {
                    transform = 'translateX(0) translateY(0) scale(1)';
                    zIndex = 30;
                    opacity = 1;
                  } else if (offset === 1) {
                    transform = 'translateX(50%) translateY(-8%) scale(0.88)';
                    zIndex = 20;
                    opacity = 0.6;
                  } else if (offset === images.length - 1) {
                    transform = 'translateX(-50%) translateY(-8%) scale(0.88)';
                    zIndex = 10;
                    opacity = 0.6;
                  } else {
                    transform = 'translateX(0) translateY(0) scale(0.5)';
                    zIndex = 0;
                    opacity = 0;
                  }
                  return (
                    <div
                      key={index}
                      className="absolute inset-0 transition-all duration-700 ease-in-out"
                      style={{ transform, zIndex, opacity }}
                    >
                      <div className="w-full h-full rounded-[20px] overflow-hidden shadow-2xl bg-gradient-to-br from-purple-200 to-blue-200">
                        <img src={img} alt={`Foto ${index + 1}`} className="w-full h-full object-cover" />
                      </div>
                    </div>
                  );
                })}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-40 flex gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex ? 'bg-purple-400 w-6' : 'bg-gray-300 hover:bg-purple-300'
                      }`}
                      aria-label={`Ir a imagen ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#DFC3EF] rounded-full opacity-20 blur-2xl" />
            <div className="relative">
              <div className="inline-block mb-6 px-6 py-3 bg-[#DFC3EF] rounded-full">
                <h2 className="text-2xl font-semibold text-gray-800">{t.title}</h2>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {t.p1}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t.p2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}