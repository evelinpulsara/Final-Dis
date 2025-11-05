// app/components/MobileMenu.tsx
'use client';

import React from 'react';

interface MobileMenuProps {
  isDark: boolean;
  language: 'es' | 'en';
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
  setIsDark: (dark: boolean) => void;
  toggleLanguage: () => void;
  scrollToSection: (sectionId: string) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function MobileMenu({
  isDark,
  language,
  activeMenu,
  setActiveMenu,
  setIsDark,
  toggleLanguage,
  scrollToSection,
  isMenuOpen,
  setIsMenuOpen
}: MobileMenuProps) {
  const t = {
    es: {
      menu: ['Sobre mi', 'Educacion', 'Conocimientos', 'Proyectos', 'Testimonios', 'Contacto'],
    },
    en: {
      menu: ['About me', 'Education', 'Skills', 'Projects', 'Testimonials', 'Contact'],
    }
  }[language];

  if (!isMenuOpen) return null;

  return (
    <div className={`fixed inset-0 z-50 flex justify-end ${isDark ? 'bg-[#0F1029]' : 'bg-[#F5F3FA]'}`}>
      <div className={`w-3/4 max-w-sm p-6 ${isDark ? 'bg-[#0F1029]' : 'bg-[#F5F3FA]'}`}>
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => setIsMenuOpen(false)}
            className={`p-2 rounded-lg ${isDark ? 'text-white hover:bg-[#1C1B2E]' : 'text-gray-700 hover:bg-gray-200'}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="flex gap-4">
            <button
              onClick={toggleLanguage}
              className={`p-2 rounded-lg ${isDark ? 'text-white hover:bg-[#1C1B2E]' : 'text-gray-700 hover:bg-gray-200'}`}
              aria-label={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </button>
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-lg ${isDark ? 'text-white hover:bg-[#1C1B2E]' : 'text-gray-700 hover:bg-gray-200'}`}
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

        <nav className="flex flex-col space-y-4">
          {t.menu.map((item, idx) => (
            <button
              key={item}
              data-menu={item}
              onClick={() => {
                setActiveMenu(item);
                scrollToSection(['sobremi', 'educacion', 'conocimientos', 'proyectos', 'testimonios', 'contacto'][idx]);
                setIsMenuOpen(false); // 👈 Cerrar el menú después de hacer click
              }}
              className={`px-4 py-2 rounded-lg text-left transition-colors duration-200 ${
                activeMenu === item
                  ? isDark 
                    ? 'bg-[#B18BE8] text-white' // 👈 Burbuja en modo oscuro
                    : 'bg-[#D6C8F0] text-gray-800' // 👈 Burbuja en modo claro
                  : isDark 
                    ? 'text-white hover:bg-[#1C1B2E]' 
                    : 'text-gray-800 hover:bg-[#e3d3ed]'
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}