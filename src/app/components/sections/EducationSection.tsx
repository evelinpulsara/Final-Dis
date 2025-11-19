import React from 'react';

interface EducationProps {
  isDark: boolean;
  language: 'es' | 'en';
  activeMenu: string;
}

export default function EducationSection({ isDark = false, language = 'es', activeMenu = '' }: EducationProps) {
  const t = {
    es: {
      title: 'Educación',
      items: [
        { 
          title: 'Ingeniería de software', 
          status: 'Activo', 
          org: 'Universidad Cooperativa', 
          date: '2023 - Presente',
          link: 'https://ucc.edu.co',
          description: 'Carrera profesional en desarrollo de software'
        },
        { 
          title: 'Técnico en electrónica', 
          status: 'Terminado', 
          org: 'Cinar Sistemas', 
          date: '2018 - 2020',
          link: 'https://cinarsistemas.edu.co',
          description: 'Especialización en circuitos y sistemas electrónicos'
        },
        { 
          title: 'Técnico en sistemas', 
          status: 'Terminado', 
          org: 'SistemPlus', 
          date: '2020 - 2022',
          link: 'https://systemplus.tech',
          description: 'Formación técnica en sistemas computacionales y redes'
        },
      ]
    },
    en: {
      title: 'Education',
      items: [
        { 
          title: 'Software Engineering', 
          status: 'Active', 
          org: 'Universidad Cooperativa', 
          date: '2023 - Present',
          link: 'https://ucc.edu.co',
          description: 'Professional career in software development'
        },
        { 
          title: 'Electronics Technician', 
          status: 'Completed', 
          org: 'Cinar Sistemas', 
          date: '2018 - 2020',
          link: 'https://cinarsistemas.edu.co',
          description: 'Specialization in circuits and electronic systems'
        },
        { 
          title: 'Systems Technician', 
          status: 'Completed', 
          org: 'SistemPlus', 
          date: '2020 - 2022',
          link: 'https://systemplus.tech',
          description: 'Technical training in computer systems and networks'
        },
      ]
    }
  }[language];

  return (
    <section id="educacion" className={`py-20 ${isDark ? 'bg-gradient-to-b from-[#0F1029] to-[#1a1642]' : 'bg-gradient-to-b from-[#F5F3FA] to-white'} scroll-mt-24`}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Título mejorado */}
          <div className="text-center mb-16">
            {activeMenu === 'Educacion' ? (
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

          {/* Timeline vertical en móvil, grid en desktop */}
          <div className="relative">
            {/* Línea de tiempo vertical (visible solo en desktop) */}
            <div className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 ${isDark ? 'bg-gradient-to-b from-purple-500/30 via-pink-500/30 to-purple-500/30' : 'bg-gradient-to-b from-purple-300 via-pink-300 to-purple-300'}`}></div>
            
            <div className="space-y-12">
              {t.items.map((item, idx) => {
                const isCompleted = item.status === 'Terminado' || item.status === 'Completed';
                const statusColor = isCompleted ? 'text-gray-500' : 'text-green-500';
                const statusBg = isCompleted ? 'bg-gray-500/10' : 'bg-green-500/10';
                const statusBorder = isCompleted ? 'border-gray-500' : 'border-green-500';
                const pulseClass = !isCompleted ? 'animate-pulse' : '';
                
                // Alternar posición en desktop
                const isLeft = idx % 2 === 0;
                
                return (
                  <div key={idx} className="relative">
                    {/* Punto central en la línea de tiempo (solo desktop) */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-2 w-6 h-6 items-center justify-center z-10">
                      <div className={`w-6 h-6 rounded-full ${isDark ? 'bg-[#0F1029]' : 'bg-white'} border-4 ${statusBorder} ${pulseClass}`}></div>
                    </div>

                    {/* Card */}
                    <div className={`md:w-[calc(50%-3rem)] ${isLeft ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'}`}>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group block p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 ${
                          isDark 
                            ? 'bg-gradient-to-br from-[#1C1B2E] to-[#252341] hover:from-[#252341] hover:to-[#2D255A] shadow-xl hover:shadow-2xl hover:shadow-purple-500/20' 
                            : 'bg-white hover:bg-gradient-to-br hover:from-white hover:to-purple-50 shadow-lg hover:shadow-xl'
                        } border ${isDark ? 'border-purple-500/20 hover:border-purple-500/40' : 'border-purple-100 hover:border-purple-300'}`}
                      >
                        {/* Header con logo y badge de estado */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className={`w-14 h-14 rounded-xl shadow-md p-2 ${isDark ? 'bg-white/10' : 'bg-purple-50'} group-hover:scale-110 transition-transform duration-300`}>
                              <img
                                src={
                                  idx === 0
                                    ? "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/U._Cooperativa_de_Colombia_logo.svg/2276px-U._Cooperativa_de_Colombia_logo.svg.png"
                                    : idx === 1
                                      ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVTULg_1QeoH6jdICwT-C1bj7VMJU9sXCg8g&s"
                                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnKbc9YpxUwySM6rEAv_K3jfJgW6lZDtglGw&s"
                                }
                                alt={`Logo ${item.org}`}
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <div>
                              <p className={`font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.org}</p>
                              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{item.date}</p>
                            </div>
                          </div>
                          
                          {/* Badge de estado */}
                          <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${statusBg} border ${statusBorder}`}>
                            <span className={`w-2 h-2 rounded-full ${isCompleted ? 'bg-gray-500' : 'bg-green-500'} ${pulseClass}`}></span>
                            <span className={`text-xs font-semibold ${statusColor}`}>{item.status}</span>
                          </div>
                        </div>

                        {/* Título del curso */}
                        <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'} group-hover:text-purple-500 transition-colors`}>
                          {item.title}
                        </h3>

                        {/* Descripción */}
                        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                          {item.description}
                        </p>

                        {/* Indicador de enlace */}
                        <div className={`mt-4 flex items-center gap-2 text-sm font-medium ${isDark ? 'text-purple-400' : 'text-purple-600'} opacity-0 group-hover:opacity-100 transition-opacity`}>
                          <span>Ver más</span>
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}