import React, { useState } from 'react';

interface HeaderProps {
  activeMenu: string;
  isDark: boolean;
  menuPosition: { x: number; width: number };
  setActiveMenu: (menu: string) => void;
  setIsDark: (dark: boolean) => void;
  toggleLanguage: () => void;
  language: 'es' | 'en';
  scrollToSection: (sectionId: string) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function Header({
  activeMenu = 'Sobre mi',
  isDark = false,
  menuPosition = { x: 0, width: 100 },
  setActiveMenu = () => {},
  setIsDark = () => {},
  toggleLanguage = () => {},
  language = 'es',
  scrollToSection = () => {},
  isMenuOpen = false,
  setIsMenuOpen = () => {}
}: HeaderProps) {
  const t = {
    es: {
      menu: ['Sobre mi', 'Educacion', 'Conocimientos', 'Proyectos', 'Testimonios', 'Contacto'],
      hero: {
        title: 'Trabaja duro, en silencio, deja que el éxito haga ruido.',
        subtitle: 'Evelin Pulsara',
        cta: 'Ver proyectos',
        scroll: 'Desplázate para explorar'
      }
    },
    en: {
      menu: ['About me', 'Education', 'Skills', 'Projects', 'Testimonials', 'Contact'],
      hero: {
        title: 'Work hard, silently, let success make the noise.',
        subtitle: 'Evelin Pulsara',
        cta: 'View projects',
        scroll: 'Scroll to explore'
      }
    }
  }[language];

  return (
    <>
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 ${isDark ? 'bg-[#0F1029]/90' : 'bg-white/90'} backdrop-blur-md shadow-lg border-b ${isDark ? 'border-purple-500/20' : 'border-purple-100'} w-full transition-all duration-300`}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo/Name */}
            <div className="hidden md:block">
              <h1 className={`text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent`}>
                EP
              </h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-2 relative">
              {/* Burbuja animada de fondo */}
              <div
                className="absolute h-11 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-300 ease-out shadow-lg"
                style={{
                  left: `${menuPosition.x}px`,
                  width: `${menuPosition.width + 32}px`,
                  transform: 'translateX(-16px)',
                  opacity: 0.2
                }}
              />
              {t.menu.map((item, idx) => (
                <button
                  key={item}
                  data-menu={item}
                  onClick={() => {
                    setActiveMenu(item);
                    scrollToSection(['sobremi', 'educacion', 'conocimientos', 'proyectos', 'testimonios', 'contacto'][idx]);
                  }}
                  className={`relative z-10 px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ${
                    activeMenu === item
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105'
                      : isDark 
                        ? 'text-gray-300 hover:text-white hover:bg-white/5' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-purple-50'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={() => setIsMenuOpen(true)}
                className={`p-2.5 rounded-xl transition-all duration-300 ${
                  isDark 
                    ? 'text-white hover:bg-white/10 border border-purple-500/20' 
                    : 'text-gray-700 hover:bg-purple-50 border border-purple-100'
                }`}
                aria-label="Abrir menú"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            {/* Right side buttons */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={toggleLanguage}
                className={`p-2.5 rounded-xl transition-all duration-300 ${
                  isDark 
                    ? 'text-white hover:bg-white/10 border border-purple-500/20' 
                    : 'text-gray-700 hover:bg-purple-50 border border-purple-100'
                } hover:scale-110`}
                aria-label={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </button>
              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-2.5 rounded-xl transition-all duration-300 ${
                  isDark 
                    ? 'text-white hover:bg-white/10 border border-purple-500/20' 
                    : 'text-gray-700 hover:bg-purple-50 border border-purple-100'
                } hover:scale-110`}
                aria-label="Cambiar tema"
              >
                {isDark ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${isDark ? 'bg-gradient-to-br from-[#0F1029] via-[#1a1642] to-[#2D255A]' : 'bg-gradient-to-br from-purple-100 via-pink-50 to-purple-200'}`}>
        {/* Decorative background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Círculos decorativos animados */}
          <div className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-30 animate-pulse ${isDark ? 'bg-purple-500' : 'bg-purple-300'}`}></div>
          <div className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse ${isDark ? 'bg-pink-500' : 'bg-pink-300'}`} style={{ animationDelay: '1s' }}></div>
          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-10 ${isDark ? 'bg-purple-400' : 'bg-purple-200'}`}></div>
          
          {/* Líneas decorativas onduladas */}
          <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0,200 Q250,100 500,200 T1000,200"
              stroke={isDark ? 'rgba(168, 85, 247, 0.3)' : 'rgba(168, 85, 247, 0.5)'}
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
            />
            <path
              d="M0,400 Q250,300 500,400 T1000,400"
              stroke={isDark ? 'rgba(236, 72, 153, 0.3)' : 'rgba(236, 72, 153, 0.5)'}
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
              style={{ animationDelay: '0.5s' }}
            />
            <circle
              cx="200"
              cy="150"
              r="100"
              stroke={isDark ? 'rgba(168, 85, 247, 0.2)' : 'rgba(168, 85, 247, 0.4)'}
              strokeWidth="2"
              fill="none"
            />
            <circle
              cx="800"
              cy="300"
              r="150"
              stroke={isDark ? 'rgba(236, 72, 153, 0.2)' : 'rgba(236, 72, 153, 0.4)'}
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Main Title */}
            <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
              <span className="inline-block animate-fade-in">{t.hero.title.split(',')[0]},</span>
              <br />
              <span className="inline-block animate-fade-in bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent" style={{ animationDelay: '0.2s' }}>
                {t.hero.title.split(',')[1]}
              </span>
            </h1>

            {/* Subtitle */}
            <div className="flex items-center justify-center gap-3 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className={`h-px w-12 ${isDark ? 'bg-purple-500' : 'bg-purple-400'}`}></div>
              <p className={`text-xl md:text-2xl font-medium ${isDark ? 'text-purple-300' : 'text-purple-700'}`}>
                {t.hero.subtitle}
              </p>
              <div className={`h-px w-12 ${isDark ? 'bg-pink-500' : 'bg-pink-400'}`}></div>
            </div>

            {/* CTA Button */}
            <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <button
                onClick={() => scrollToSection('proyectos')}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110"
              >
                <span>{t.hero.cta}</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity blur-xl"></div>
              </button>
            </div>

            {/* Scroll indicator */}
            <div className="pt-16 animate-bounce">
              <div className="flex flex-col items-center gap-2">
                <p className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {t.hero.scroll}
                </p>
                <svg className={`w-6 h-6 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider at bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
              fill={isDark ? '#0F1029' : '#F5F3FA'}
            />
          </svg>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </>
  );
}