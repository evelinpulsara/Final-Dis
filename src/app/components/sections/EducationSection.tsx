// app/components/sections/EducationSection.tsx
import React from 'react';

interface EducationProps {
  isDark: boolean;
  language: 'es' | 'en';
  activeMenu: string;
}

export default function EducationSection({ isDark, language, activeMenu }: EducationProps) {
  const t = {
    es: {
      title: 'Educación',
      items: [
        { 
          title: 'Técnico en sistemas', 
          status: 'Terminado', 
          org: 'SistemPlus', 
          date: 'Date',
          link: 'https://systemplus.tech' // 👈 Cambia esta URL por la real
        },
        { 
          title: 'Técnico en electrónica', 
          status: 'Terminado', 
          org: 'Cinar Sistemas', 
          date: 'Date',
          link: 'https://cinarsistemas.edu.co' // 👈 Cambia esta URL por la real
        },
        { 
          title: 'Ingeniería de software', 
          status: 'Activo', 
          org: 'Universidad Cooperativa', 
          date: '----',
          link: 'https://ucc.edu.co ' // 👈 Cambia esta URL por la real
        },
      ]
    },
    en: {
      title: 'Education',
      items: [
        { 
          title: 'Systems Technician', 
          status: 'Completed', 
          org: 'SistemPlus', 
          date: 'Date',
          link: 'https://systemplus.tech'
        },
        { 
          title: 'Electronics Technician', 
          status: 'Completed', 
          org: 'Cinar Sistemas', 
          date: 'Date',
          link: 'https://cinarsistemas.edu.co'
        },
        { 
          title: 'Software Engineering', 
          status: 'Active', 
          org: 'Universidad Cooperativa', 
          date: '----',
          link: 'https://ucc.edu.co'
        },
      ]
    }
  }[language];

  return (
    <section id="educacion" className={`py-20 ${isDark ? 'bg-[#0F1029]' : 'bg-[#F5F3FA]'} scroll-mt-24`}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Título con burbuja solo si está activo */}
          {activeMenu === 'Educacion' ? (
            <div className="text-center mb-12">
              <div className="inline-block px-6 py-3 rounded-full font-semibold text-lg bg-[#DFC3EF]/80 text-gray-800 shadow-inner">
                {t.title}
              </div>
            </div>
          ) : (
            <h2 className={`text-3xl font-bold text-center mb-12 ${isDark ? 'text-white' : ''}`}>
              {t.title}
            </h2>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.items.map((item, idx) => {
              // Colores para modo oscuro
              const darkColors = ['#1C1B2E', '#322F56', '#2D255A'];
              // Color de fondo según modo
              const bgColor = isDark ? darkColors[idx] : 'bg-[#E9E2F7]';
              // Color del texto del estado
              const statusColor = item.status === 'Terminado' || item.status === 'Completed' 
                ? 'text-red-500' 
                : 'text-green-500';
              // Clase para el punto titilante
              const pulseClass = item.status === 'Activo' || item.status === 'Active' 
                ? 'animate-pulse' 
                : '';

              return (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block p-6 rounded-xl shadow-inner hover:shadow-lg transition-shadow ${bgColor} ${isDark ? 'text-white' : 'text-gray-800'}`}
                >
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`w-2 h-2 rounded-full ${statusColor} ${pulseClass}`}></span>
                    <p className={statusColor}>{item.status}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white p-1">
                      <img
                        src={
                          idx === 0
                            ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnKbc9YpxUwySM6rEAv_K3jfJgW6lZDtglGw&s"
                            : idx === 1
                              ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVTULg_1QeoH6jdICwT-C1bj7VMJU9sXCg8g&s"
                              : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/U._Cooperativa_de_Colombia_logo.svg/2276px-U._Cooperativa_de_Colombia_logo.svg.png"
                        }
                        alt={`Logo ${item.org}`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{item.org}</p>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{item.date}</p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}