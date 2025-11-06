import React, { useEffect, useState } from 'react';

interface AboutProps {
  isDark: boolean;
  language: 'es' | 'en';
  currentImageIndex: number;
  setCurrentImageIndex: (index: number) => void;
  activeMenu: string;
}

export default function AboutSection({
  isDark = false,
  language = 'es',
  currentImageIndex = 0,
  setCurrentImageIndex,
  activeMenu = ''
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

  const images = [
    '/imagenes/Foto4.jpeg',
    '/imagenes/Foto5.jpeg',
    '/imagenes/Foto6.jpeg'
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const goToPrevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  const goToNextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  useEffect(() => {
    if (!isMobile) {
      const interval = setInterval(() => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [currentImageIndex, images.length, setCurrentImageIndex, isMobile]);

  return (
    <section id="sobremi" className={`py-20 relative ${isDark ? 'bg-gradient-to-b from-[#0F1029] to-[#1a1642]' : 'bg-gradient-to-b from-white to-[#F5F3FA]'}`}>
      <div className="container mx-auto px-6">
        <div className={`flex ${isMobile ? 'flex-col' : 'lg:flex-row'} items-center gap-12 max-w-6xl mx-auto`}>
          {/* Sección de texto */}
          <div className={`${isMobile ? 'w-full' : 'lg:w-1/2'} relative`}>
            {/* Efecto de fondo decorativo */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-10 blur-3xl" />
            
            <div className="relative">
              {/* Título con diseño coherente */}
              <div className="mb-8">
                {activeMenu === 'Sobre mi' ? (
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
                <div className={`w-20 h-1 mt-4 rounded-full ${isDark ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-gradient-to-r from-purple-400 to-pink-400'}`}></div>
              </div>

              {/* Card de contenido */}
              <div className={`p-8 rounded-2xl transition-all duration-300 ${
                isDark 
                  ? 'bg-gradient-to-br from-[#1C1B2E] to-[#252341] shadow-2xl border border-purple-500/20' 
                  : 'bg-white shadow-xl border border-purple-100'
              }`}>
                <div className="space-y-6">
                  {/* Primer párrafo con icono decorativo */}
                  <div className="flex gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg ${isDark ? 'bg-purple-500/20' : 'bg-purple-100'} flex items-center justify-center`}>
                      <svg className={`w-6 h-6 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <p className={`leading-relaxed text-base ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {t.p1}
                    </p>
                  </div>

                  {/* Divisor decorativo */}
                  <div className={`h-px ${isDark ? 'bg-gradient-to-r from-transparent via-purple-500/30 to-transparent' : 'bg-gradient-to-r from-transparent via-purple-300 to-transparent'}`}></div>

                  {/* Segundo párrafo */}
                  <div className="flex gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg ${isDark ? 'bg-pink-500/20' : 'bg-pink-100'} flex items-center justify-center`}>
                      <svg className={`w-6 h-6 ${isDark ? 'text-pink-400' : 'text-pink-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <p className={`leading-relaxed text-base ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {t.p2}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sección del carrusel */}
          <div className={`${isMobile ? 'w-full mt-8' : 'lg:w-1/2'} relative flex items-center justify-center`}>
            {/* Efecto de fondo */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl opacity-20 transform scale-110" />
            
            <div className="relative w-full max-w-[280px] mx-auto">
              <div className={`w-full aspect-square sm:max-w-[280px] md:max-w-[320px] lg:max-w-[480px] relative ${isMobile ? 'mb-4' : ''}`}>
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
                      <div className="w-full h-full rounded-[20px] overflow-hidden shadow-2xl bg-gradient-to-br from-purple-200 to-pink-200 border-4 border-white/20">
                        <img src={img} alt={`Foto ${index + 1}`} className="w-full h-full object-cover" />
                      </div>
                    </div>
                  );
                })}
                
                {/* Indicadores de página (solo desktop) */}
                {!isMobile && (
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-40 flex gap-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`transition-all rounded-full ${
                          index === currentImageIndex 
                            ? 'w-8 h-2 bg-gradient-to-r from-purple-500 to-pink-500' 
                            : 'w-2 h-2 bg-gray-300 hover:bg-purple-300'
                        }`}
                        aria-label={`Ir a imagen ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Controles móviles */}
              {isMobile && (
                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={goToPrevImage}
                    className={`p-3 rounded-xl transition-all duration-300 ${
                      isDark 
                        ? 'bg-gradient-to-br from-[#1C1B2E] to-[#252341] text-white hover:from-[#252341] hover:to-[#2D255A]' 
                        : 'bg-white text-gray-800 hover:bg-purple-50'
                    } shadow-lg hover:shadow-xl border ${isDark ? 'border-purple-500/20' : 'border-purple-100'}`}
                    aria-label="Imagen anterior"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  {/* Indicadores móviles */}
                  <div className="flex gap-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`transition-all rounded-full ${
                          index === currentImageIndex 
                            ? 'w-8 h-2 bg-gradient-to-r from-purple-500 to-pink-500' 
                            : 'w-2 h-2 bg-gray-300'
                        }`}
                        aria-label={`Ir a imagen ${index + 1}`}
                      />
                    ))}
                  </div>
                  
                  <button
                    onClick={goToNextImage}
                    className={`p-3 rounded-xl transition-all duration-300 ${
                      isDark 
                        ? 'bg-gradient-to-br from-[#1C1B2E] to-[#252341] text-white hover:from-[#252341] hover:to-[#2D255A]' 
                        : 'bg-white text-gray-800 hover:bg-purple-50'
                    } shadow-lg hover:shadow-xl border ${isDark ? 'border-purple-500/20' : 'border-purple-100'}`}
                    aria-label="Imagen siguiente"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}