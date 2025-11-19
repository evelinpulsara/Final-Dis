import React from 'react';

interface SkillsProps {
  isDark: boolean;
  language: 'es' | 'en';
  activeMenu: string;
}

export default function SkillsSection({ isDark = false, language = 'es', activeMenu = '' }: SkillsProps) {
  const t = {
    es: {
      title: 'Conocimientos',
      items: [
        {
          title: 'Java',
          desc: 'Tengo conocimientos en programación orientada a objetos, creación de aplicaciones y estructuras de datos. He trabajado en proyectos académicos donde implementé sistemas de gestión y bases de datos, aplicando buenas prácticas de desarrollo.',
          tags: ['POO', 'Spring Boot', 'Bases de Datos']
        },
        {
          title: 'Python',
          desc: 'Uso Python para resolver problemas, practicar algoritmos y trabajar con estructuras de datos. También lo empleo en proyectos de automatización y ejercicios que fortalecen mi lógica de programación.',
          tags: ['Algoritmos', 'Automatización', 'Data Structures']
        },
        {
          title: 'Unity',
          desc: 'Me interesa el desarrollo de videojuegos y la creación de experiencias interactivas. He practicado con Unity para aprender sobre diseño de entornos, animaciones y lógica de interacción dentro de juegos.',
          tags: ['Game Dev', 'C#', 'Diseño 3D']
        },
      ]
    },
    en: {
      title: 'Skills',
      items: [
        {
          title: 'Java',
          desc: 'I have knowledge in object-oriented programming, application development, and data structures. I have worked on academic projects implementing management systems and databases, applying good development practices.',
          tags: ['OOP', 'Spring Boot', 'Databases']
        },
        {
          title: 'Python',
          desc: 'I use Python to solve problems, practice algorithms, and work with data structures. I also use it for automation projects and exercises that strengthen my programming logic.',
          level: 70,
          tags: ['Algorithms', 'Automation', 'Data Structures']
        },
        {
          title: 'Unity',
          desc: 'I am interested in video game development and creating interactive experiences. I have practiced with Unity to learn about environment design, animations, and interaction logic within games.',
          tags: ['Game Dev', 'C#', '3D Design']
        },
      ]
    }
  }[language];

  return (
    <section id="conocimientos" className={`py-20 ${isDark ? 'bg-gradient-to-b from-[#1a1642] to-[#0F1029]' : 'bg-gradient-to-b from-white to-[#F5F3FA]'} scroll-mt-24`}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Título mejorado */}
          <div className="text-center mb-16">
            {activeMenu === 'Conocimientos' ? (
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

          <div className="space-y-6">
            {t.items.map((item, idx) => {
              // Colores de acento por tecnología
              const accentColors = [
                { gradient: 'from-orange-500 to-red-500', bg: 'bg-orange-500/10', border: 'border-orange-500/30', text: 'text-orange-500' },
                { gradient: 'from-blue-500 to-yellow-500', bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-500' },
                { gradient: 'from-gray-700 to-gray-900', bg: 'bg-gray-500/10', border: 'border-gray-500/30', text: 'text-gray-600' }
              ];
              
              const colors = accentColors[idx];

              return (
                <div
                  key={idx}
                  className={`group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.02] ${
                    isDark 
                      ? 'bg-gradient-to-br from-[#1C1B2E] to-[#252341] hover:from-[#252341] hover:to-[#2D255A] shadow-xl hover:shadow-2xl hover:shadow-purple-500/20' 
                      : 'bg-white hover:bg-gradient-to-br hover:from-white hover:to-purple-50 shadow-lg hover:shadow-xl'
                  } border ${isDark ? 'border-purple-500/20 hover:border-purple-500/40' : 'border-purple-100 hover:border-purple-300'}`}
                >
                  {/* Barra de acento lateral */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${colors.gradient} opacity-80 group-hover:w-2 transition-all duration-300`}></div>
                  
                  {/* Efecto de brillo en hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 group-hover:translate-x-full"></div>

                  <div className="relative p-6 md:p-8 flex flex-col md:flex-row items-start gap-6">
                    {/* Logo con efecto */}
                    <div className="relative flex-shrink-0">
                      <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 rounded-2xl`}></div>
                      <div className={`relative w-20 h-20 md:w-24 md:h-24 rounded-2xl ${isDark ? 'bg-white/10' : 'bg-purple-50'} p-3 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <img
                          src={
                            idx === 0
                              ? "https://images.icon-icons.com/2108/PNG/512/java_icon_130901.png"
                              : idx === 1
                                ? "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
                                : "https://cdn.worldvectorlogo.com/logos/unity-69.svg"
                          }
                          alt={`${item.title} Logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>

                    {/* Contenido */}
                    <div className="flex-1 space-y-4">
                      {/* Header con título */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <h3 className={`text-2xl md:text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} group-hover:bg-gradient-to-r group-hover:${colors.gradient} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                          {item.title}
                        </h3>
                        
                        {/* ✅ Eliminado: Badge de nivel (porcentaje) */}
                      </div>

                      {/* Descripción */}
                      <p className={`text-sm md:text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        {item.desc}
                      </p>

                      {/* ✅ Eliminado: Barra de progreso */}
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag, tagIdx) => (
                          <span
                            key={tagIdx}
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              isDark 
                                ? 'bg-white/10 text-gray-300 hover:bg-white/20' 
                                : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                            } transition-colors duration-200 cursor-default`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Nota decorativa */}
          <div className={`mt-12 text-center ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            <p className="text-sm italic">En constante aprendizaje y mejora 🚀</p>
          </div>
        </div>
      </div>
    </section>
  );
}