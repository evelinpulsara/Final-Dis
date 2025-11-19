import React from 'react';

interface HeroSectionProps {
  isDark: boolean;
  language: 'es' | 'en';
  scrollToSection: (sectionId: string) => void;
}

export default function HeroSection({ 
  isDark = false, 
  language = 'es',
  scrollToSection = () => {}
}: HeroSectionProps) {
  const t = {
    es: {
      title1: 'DESARROLLADORA',
      title2: 'DE SOFTWARE',
      subtitle: 'Especializado en crear soluciones innovadoras con tecnologías modernas.',
      quote: 'Trabaja duro, en silencio, deja que el éxito haga ruido.',
      author: 'Evelin Pulsara',
      viewProjects: 'Ver proyectos',
      downloadCV: 'Descargar CV',
      scroll: 'Desplázate para explorar'
    },
    en: {
      title1: 'SOFTWARE',
      title2: 'DEVELOPER',
      subtitle: 'Specialized in creating innovative solutions with modern technologies.',
      quote: 'Work hard, silently, let success make the noise.',
      author: 'Evelin Pulsara',
      viewProjects: 'View projects',
      downloadCV: 'Download CV',
      scroll: 'Scroll to explore'
    }
  }[language];

  // URL de tu CV - Reemplaza con la ruta real de tu archivo CV
  const cvUrl = '/cv/Evelin-Pulsara-CV.pdf';

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Evelin-Pulsara-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
      isDark 
        ? 'bg-gradient-to-br from-[#0F1029] via-[#1a1642] to-[#0F1029]' 
        : 'bg-gradient-to-br from-purple-100 via-pink-100 to-purple-200'
    }`}>
      {/* Efectos de fondo decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Círculos con blur */}
        <div className={`absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-30 animate-pulse ${
          isDark ? 'bg-purple-500' : 'bg-purple-300'
        }`}></div>
        <div className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-30 animate-pulse ${
          isDark ? 'bg-pink-500' : 'bg-pink-300'
        }`} style={{ animationDelay: '1s' }}></div>
        
        {/* Efectos de luz brillante - colores púrpura/rosa */}
        <div className="absolute inset-0">
          <div className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-20 ${
            isDark ? 'bg-fuchsia-400' : 'bg-fuchsia-300'
          }`}></div>
          <div className={`absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-20 ${
            isDark ? 'bg-violet-400' : 'bg-violet-300'
          }`}></div>
        </div>

        {/* Grid decorativo */}
        <div className={`absolute inset-0 opacity-5 ${isDark ? 'opacity-10' : 'opacity-5'}`}
          style={{
            backgroundImage: `linear-gradient(${isDark ? '#fff' : '#000'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? '#fff' : '#000'} 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          {/* Título principal con efecto glow */}
          <div className="space-y-4">
            <h1 className={`text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              <span className="inline-block animate-fade-in-up bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent" style={{
                textShadow: isDark 
                  ? '0 0 40px rgba(217, 70, 239, 0.5), 0 0 80px rgba(217, 70, 239, 0.3)' 
                  : 'none'
              }}>
                {t.title1}
              </span>
              <br />
              <span className="inline-block animate-fade-in-up bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent" style={{ 
                animationDelay: '0.2s',
                textShadow: isDark 
                  ? '0 0 40px rgba(217, 70, 239, 0.5), 0 0 80px rgba(217, 70, 239, 0.3)' 
                  : 'none'
              }}>
                {t.title2}
              </span>
            </h1>

            {/* Subtítulo */}
            <p className={`text-lg md:text-xl lg:text-2xl font-light animate-fade-in-up ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`} style={{ animationDelay: '0.4s' }}>
              {t.subtitle}
            </p>
          </div>

          {/* Frase motivacional */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className={`max-w-3xl mx-auto p-8 md:p-10 rounded-3xl ${
              isDark 
                ? 'bg-gradient-to-br from-[#1C1B2E]/80 to-[#252341]/80 border border-purple-500/20' 
                : 'bg-white/80 border border-purple-200'
            } backdrop-blur-sm shadow-2xl relative overflow-hidden`}>
              {/* Efecto de brillo en la tarjeta */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent animate-pulse"></div>
              
              {/* Comillas decorativas */}
              <div className={`absolute top-4 left-4 text-6xl opacity-20 ${
                isDark ? 'text-fuchsia-400' : 'text-fuchsia-400'
              }`}>&quot;</div>
              
              <blockquote className="relative">
                <p className={`text-2xl md:text-3xl lg:text-4xl font-semibold italic mb-4 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {t.quote}
                </p>
                <footer className={`text-lg md:text-xl font-medium ${
                  isDark ? 'text-purple-300' : 'text-purple-600'
                }`}>
                  — {t.author}
                </footer>
              </blockquote>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            {/* Botón Ver Proyectos */}
            <button
              onClick={() => scrollToSection('proyectos')}
              className={`group relative px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 ${
                isDark
                  ? 'bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 text-white shadow-2xl hover:shadow-fuchsia-500/50'
                  : 'bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 text-white shadow-2xl hover:shadow-fuchsia-400/50'
              }`}
            >
              <span className="relative z-10 flex items-center gap-3">
                {t.viewProjects}
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-20 transition-opacity blur-xl"></div>
            </button>

            {/* Botón Descargar CV */}
            <button
              onClick={handleDownloadCV}
              className={`group relative px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 ${
                isDark
                  ? 'bg-white/5 text-white border-2 border-fuchsia-400 hover:bg-gradient-to-r hover:from-purple-600 hover:via-fuchsia-500 hover:to-pink-500 hover:border-transparent shadow-xl'
                  : 'bg-white/80 text-gray-900 border-2 border-fuchsia-400 hover:bg-gradient-to-r hover:from-purple-500 hover:via-fuchsia-500 hover:to-pink-500 hover:text-white hover:border-transparent shadow-xl'
              } backdrop-blur-sm`}
            >
              <span className="relative z-10 flex items-center gap-3">
                {t.downloadCV}
                <svg className="w-6 h-6 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
            </button>
          </div>

          {/* Indicador de scroll */}
          <div className="pt-12 animate-bounce" style={{ animationDelay: '1s' }}>
            <div className="flex flex-col items-center gap-3">
              <p className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {t.scroll}
              </p>
              <svg className={`w-6 h-6 ${isDark ? 'text-fuchsia-400' : 'text-fuchsia-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divisor inferior */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            fill={isDark ? '#0F1029' : 'white'}
          />
        </svg>
      </div>

      {/* Estilos de animación */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}