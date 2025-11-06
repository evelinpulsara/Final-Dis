// app/components/Header.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import MobileMenu from './MobileMenu';

interface HeaderProps {
  activeMenu: string;
  isDark: boolean;
  menuPosition: { x: number; width: number };
  setActiveMenu: (menu: string) => void;
  setIsDark: (dark: boolean) => void;
  setLanguage: (lang: 'es' | 'en') => void;
  language: 'es' | 'en';
  scrollToSection: (sectionId: string) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function Header({
  activeMenu,
  isDark,
  menuPosition,
  setActiveMenu,
  setIsDark,
  setLanguage,
  language,
  scrollToSection,
  isMenuOpen,
  setIsMenuOpen
}: HeaderProps) {
  const t = {
    es: {
      menu: ['Sobre mi', 'Educacion', 'Conocimientos', 'Proyectos', 'Testimonios', 'Contacto'],
    },
    en: {
      menu: ['About me', 'Education', 'Skills', 'Projects', 'Testimonials', 'Contact'],
    }
  }[language];

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

  const handleLanguageChange = (lang: 'es' | 'en') => {
    setLanguage(lang);
    setIsLangMenuOpen(false);
  };

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
              {/* Menú desplegable de idioma */}
              <div className="relative" ref={langMenuRef}>
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className={`p-2.5 rounded-xl transition-all duration-300 ${
                    isDark 
                      ? 'text-white hover:bg-white/10 border border-purple-500/20' 
                      : 'text-gray-700 hover:bg-purple-50 border border-purple-100'
                  } hover:scale-110`}
                  aria-label="Seleccionar idioma"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </button>

                {/* Menú desplegable */}
                {isLangMenuOpen && (
                  <div className={`absolute right-0 mt-2 w-32 rounded-xl shadow-lg py-2 z-50 ${
                    isDark 
                      ? 'bg-[#1C1B2E] border border-purple-500/30' 
                      : 'bg-white border border-purple-200'
                  }`}>
                    <button
                      onClick={() => handleLanguageChange('es')}
                      className={`block w-full text-left px-4 py-2 text-sm font-medium ${
                        language === 'es'
                          ? 'text-purple-500 font-bold'
                          : isDark ? 'text-gray-300' : 'text-gray-700'
                      } hover:${isDark ? 'bg-white/5' : 'bg-purple-50'} transition-colors`}
                    >
                      Español
                    </button>
                    <button
                      onClick={() => handleLanguageChange('en')}
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

              {/* Botón de modo oscuro */}
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

      {/* Menú móvil */}
      <MobileMenu
        isDark={isDark}
        language={language}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        setIsDark={setIsDark}
        setLanguage={setLanguage}
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
    </>
  );
}