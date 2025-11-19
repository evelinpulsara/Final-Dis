// app/components/MobileMenu.tsx
'use client';

import React, { useState, useRef, useEffect } from 'react';

interface MobileMenuProps {
  isDark: boolean;
  language: 'es' | 'en';
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
  setIsDark: (dark: boolean) => void;
  setLanguage: (lang: 'es' | 'en') => void;
  scrollToSection: (sectionId: string) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function MobileMenu({
  isDark = false,
  language = 'es',
  activeMenu = 'Sobre mi',
  setActiveMenu = () => {},
  setIsDark = () => {},
  setLanguage = () => {},
  scrollToSection = () => {},
  isMenuOpen = false,
  setIsMenuOpen = () => {}
}: MobileMenuProps) {
  const t = {
    es: {
      menu: ['Sobre mi', 'Educacion', 'Conocimientos', 'Proyectos', 'Testimonios', 'Contacto'],
      title: 'Menú',
      close: 'Cerrar'
    },
    en: {
      menu: ['About me', 'Education', 'Skills', 'Projects', 'Testimonials', 'Contact'],
      title: 'Menu',
      close: 'Close'
    }
  }[language];

  // ✅ CORREGIDO: Cada <svg> tiene `key` único → elimina errores de ESLint
  const menuIcons = [
    <svg key="profile" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>,
    <svg key="education" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>,
    <svg key="skills" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>,
    <svg key="projects" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>,
    <svg key="testimonials" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>,
    <svg key="contact" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ];

  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);

  // Cerrar menú de idioma al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!isMenuOpen) return null;

  return (
    <>
      {/* Overlay con backdrop blur */}
      <div 
        className={`fixed inset-0 z-50 backdrop-blur-sm transition-opacity duration-300 ${
          isDark ? 'bg-black/60' : 'bg-gray-900/40'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Panel deslizante */}
      <div 
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-xs h-[80vh] transform transition-transform duration-300 ease-out ${
          isDark 
            ? 'bg-gradient-to-b from-[#0F1029] to-[#1a1642]' 
            : 'bg-gradient-to-b from-white to-purple-50'
        } shadow-2xl`}
      >
        {/* Decoración de fondo */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className={`absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl ${isDark ? 'bg-purple-500' : 'bg-purple-300'}`}></div>
          <div className={`absolute top-1/2 -left-20 w-64 h-64 rounded-full blur-3xl ${isDark ? 'bg-pink-500' : 'bg-pink-300'}`}></div>
        </div>

        {/* Contenido */}
        <div className="relative h-full flex flex-col p-4"> {/* ✅ Reducido padding */}
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {t.title}
              </h2>
              <div className="w-12 h-1 mt-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
            </div>
            
            <button
              onClick={() => setIsMenuOpen(false)}
              className={`p-2 rounded-xl transition-all duration-300 ${
                isDark 
                  ? 'text-white hover:bg-white/10 border border-purple-500/20' 
                  : 'text-gray-700 hover:bg-purple-50 border border-purple-100'
              } hover:rotate-90`}
              aria-label={t.close}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu items */}
          <nav className="flex-1 space-y-2">
            {t.menu.map((item, idx) => (
              <button
                key={item}
                onClick={() => {
                  setActiveMenu(item);
                  scrollToSection(['sobremi', 'educacion', 'conocimientos', 'proyectos', 'testimonios', 'contacto'][idx]);
                  setIsMenuOpen(false);
                }}
                className={`group w-full flex items-center gap-4 px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                  activeMenu === item
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105'
                    : isDark 
                      ? 'text-gray-300 hover:text-white hover:bg-white/5 hover:translate-x-2' 
                      : 'text-gray-700 hover:text-gray-900 hover:bg-purple-50 hover:translate-x-2'
                }`}
              >
                <div className={`flex-shrink-0 ${
                  activeMenu === item 
                    ? 'text-white' 
                    : isDark 
                      ? 'text-purple-400' 
                      : 'text-purple-600'
                }`}>
                  {menuIcons[idx]}
                </div>
                <span className="font-semibold text-base">{item}</span>
                <svg 
                  className={`ml-auto w-5 h-5 transition-transform ${
                    activeMenu === item ? 'translate-x-0' : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                  }`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ))}
          </nav>

          {/* Footer con controles */}
          <div className={`pt-4 mt-4 border-t ${isDark ? 'border-purple-500/20' : 'border-purple-200'}`}>
            <div className="flex items-center justify-center gap-4">
              {/* Menú desplegable de idioma */}
              <div className="relative" ref={langMenuRef}>
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className={`flex items-center justify-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                    isDark 
                      ? 'bg-white/5 text-white hover:bg-white/10 border border-purple-500/20' 
                      : 'bg-purple-50 text-purple-700 hover:bg-purple-100 border border-purple-200'
                  } hover:scale-105`}
                  aria-label="Seleccionar idioma"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                  <span className="font-semibold text-sm">{language === 'es' ? 'Español' : 'English'}</span>
                </button>

                {/* Menú desplegable */}
                {isLangMenuOpen && (
                  <div className={`absolute bottom-full mb-2 w-36 rounded-xl shadow-lg py-2 z-50 right-0 ${
                    isDark 
                      ? 'bg-[#1C1B2E] border border-purple-500/30' 
                      : 'bg-white border border-purple-200'
                  }`}>
                    <button
                      onClick={() => {
                        setLanguage('es');
                        setIsLangMenuOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm font-medium ${
                        language === 'es'
                          ? 'text-purple-500 font-bold'
                          : isDark ? 'text-gray-300' : 'text-gray-700'
                      } hover:${isDark ? 'bg-white/5' : 'bg-purple-50'} transition-colors`}
                    >
                      Español
                    </button>
                    <button
                      onClick={() => {
                        setLanguage('en');
                        setIsLangMenuOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm font-medium ${
                        language === 'en'
                          ? 'text-purple-500 font-bold'
                          : isDark ? 'text-gray-300' : 'text-gray-700'
                      } hover:${isDark ? 'bg-white/5' : 'bg-purple-50'} transition-colors`}
                    >
                      English
                    </button>
                  </div>
                )}
              </div>

              {/* Botón de tema */}
              <button
                onClick={() => setIsDark(!isDark)}
                className={`flex items-center justify-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                  isDark 
                    ? 'bg-white/5 text-white hover:bg-white/10 border border-purple-500/20' 
                    : 'bg-purple-50 text-purple-700 hover:bg-purple-100 border border-purple-200'
                } hover:scale-105`}
                aria-label="Cambiar tema"
              >
                {isDark ? (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span className="font-semibold text-sm">Light</span>
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                    <span className="font-semibold text-sm">Dark</span>
                  </>
                )}
              </button>
            </div>

            {/* Firma */}
            <div className="mt-4 text-center">
              <p className={`text-sm font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent`}>
                Made by Evelin Pulsara
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}