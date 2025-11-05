// app/components/Header.tsx
'use client';

import React from 'react';

interface HeaderProps {
  activeMenu: string;
  isDark: boolean;
  menuPosition: { x: number; width: number };
  setActiveMenu: (menu: string) => void;
  setIsDark: (dark: boolean) => void;
  toggleLanguage: () => void;
  language: 'es' | 'en';
  scrollToSection: (sectionId: string) => void;
}

export default function Header({
  activeMenu,
  isDark,
  menuPosition,
  setActiveMenu,
  setIsDark,
  toggleLanguage,
  language,
  scrollToSection
}: HeaderProps) {
  const t = {
    es: {
      menu: ['Sobre mi', 'Educacion', 'Conocimientos', 'Proyectos', 'Testimonios', 'Contacto'],
    },
    en: {
      menu: ['About me', 'Education', 'Skills', 'Projects', 'Testimonials', 'Contact'],
    }
  }[language];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${isDark ? 'bg-[#0F1029]/85' : 'bg-[#F5F3FA]/85'} backdrop-blur-sm shadow-sm`}>
      <nav className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 relative"> {/* 👈 Cambiado a gap-3 */}
            <div
              className="absolute h-10 bg-[#DFC3EF] rounded-full transition-all duration-300 ease-out shadow-inner"
              style={{
                left: `${menuPosition.x}px`,
                width: `${menuPosition.width + 32}px`,
                transform: 'translateX(-16px)'
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
                className={`relative z-10 px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeMenu === item
                    ? isDark ? 'text-white' : 'text-gray-800'
                    : isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800 hover:bg-[#e3d3ed] rounded-full shadow-inner'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className={`p-2 rounded-lg transition-colors ${isDark ? 'text-white hover:bg-[#1C1B2E]' : 'text-gray-700 hover:bg-gray-200'}`}
              aria-label={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </button>
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-lg transition-colors ${isDark ? 'text-white hover:bg-[#1C1B2E]' : 'text-gray-700 hover:bg-gray-200'}`}
            >
              {isDark ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}