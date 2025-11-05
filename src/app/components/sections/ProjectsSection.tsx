import React from 'react';

interface ProjectsProps {
  isDark: boolean;
  language: 'es' | 'en';
  activeMenu: string;
}

export default function ProjectsSection({ isDark = false, language = 'es', activeMenu = '' }: ProjectsProps) {
  const t = {
    es: {
      title: 'Proyectos',
      viewProject: 'Ver proyecto',
      viewCode: 'Ver código',
      comingSoon: 'Próximamente',
      items: [
        { 
          title: 'Boleto de avión', 
          github: 'https://github.com/evelinpulsara/Boleto.git', 
          vercel: 'https://boleto-tawny.vercel.app', 
          img: '/imagenes/boleto.png',
          desc: 'Diseño interactivo de un boleto de avión digital',
          tags: ['HTML', 'CSS', 'JavaScript']
        },
        { 
          title: 'Invitación XV', 
          github: 'https://github.com/evelinpulsara/invitacion-Angely.git', 
          vercel: 'https://invitacion-angely.vercel.app', 
          img: '/imagenes/xv.png',
          desc: 'Invitación digital elegante para quinceañera',
          tags: ['React', 'Tailwind', 'Animations']
        },
        { 
          title: 'Formulario', 
          github: 'https://github.com/evelinpulsara/Cuarto-Taller.git', 
          vercel: 'https://taller-interfaz.vercel.app', 
          img: '/imagenes/interfaz.png',
          desc: 'Formulario con validación y diseño moderno',
          tags: ['React', 'Forms', 'Validation']
        },
        { 
          title: 'Interfaz', 
          github: 'https://github.com/evelinpulsara/responsive-design.git', 
          vercel: 'https://responsive-design-indol.vercel.app', 
          img: '/imagenes/netflix.png',
          desc: 'Clon responsive de interfaz de streaming',
          tags: ['React', 'Responsive', 'UI/UX']
        },
        { 
          title: 'Proyecto Futuro', 
          github: '-', 
          vercel: '#', 
          img: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
          desc: 'Nueva idea en desarrollo',
          tags: ['En desarrollo']
        },
        { 
          title: 'Proyecto Futuro', 
          github: '-', 
          vercel: '#', 
          img: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
          desc: 'Nueva idea en desarrollo',
          tags: ['En desarrollo']
        },
      ]
    },
    en: {
      title: 'Projects',
      viewProject: 'View project',
      viewCode: 'View code',
      comingSoon: 'Coming soon',
      items: [
        { 
          title: 'Flight Ticket', 
          github: 'https://github.com/evelinpulsara/Boleto.git', 
          vercel: 'https://boleto-tawny.vercel.app', 
          img: '/imagenes/boleto.png',
          desc: 'Interactive design of a digital flight ticket',
          tags: ['HTML', 'CSS', 'JavaScript']
        },
        { 
          title: 'XV Invitation', 
          github: 'https://github.com/evelinpulsara/invitacion-Angely.git', 
          vercel: 'https://invitacion-angely.vercel.app', 
          img: '/imagenes/xv.png',
          desc: 'Elegant digital invitation for quinceañera',
          tags: ['React', 'Tailwind', 'Animations']
        },
        { 
          title: 'Form', 
          github: 'https://github.com/evelinpulsara/Cuarto-Taller.git', 
          vercel: 'https://taller-interfaz.vercel.app', 
          img: '/imagenes/interfaz.png',
          desc: 'Form with validation and modern design',
          tags: ['React', 'Forms', 'Validation']
        },
        { 
          title: 'Interface', 
          github: 'https://github.com/evelinpulsara/responsive-design.git', 
          vercel: 'https://responsive-design-indol.vercel.app', 
          img: '/imagenes/netflix.png',
          desc: 'Responsive streaming interface clone',
          tags: ['React', 'Responsive', 'UI/UX']
        },
        { 
          title: 'Future Project', 
          github: '-', 
          vercel: '#', 
          img: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
          desc: 'New idea in development',
          tags: ['In development']
        },
        { 
          title: 'Future Project', 
          github: '-', 
          vercel: '#', 
          img: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
          desc: 'New idea in development',
          tags: ['In development']
        },
      ]
    }
  }[language];

  return (
    <section id="proyectos" className={`py-20 ${isDark ? 'bg-gradient-to-b from-[#0F1029] to-[#1a1642]' : 'bg-gradient-to-b from-[#F5F3FA] to-white'} scroll-mt-24`}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Título mejorado */}
          <div className="text-center mb-16">
            {activeMenu === 'Proyectos' ? (
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

          {/* Grid de proyectos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.items.map((project, idx) => {
              const isComingSoon = project.github === '-';
              
              return (
                <div
                  key={idx}
                  className={`group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105 ${
                    isDark 
                      ? 'bg-gradient-to-br from-[#1C1B2E] to-[#252341] hover:from-[#252341] hover:to-[#2D255A] shadow-xl hover:shadow-2xl hover:shadow-purple-500/20' 
                      : 'bg-white hover:bg-gradient-to-br hover:from-white hover:to-purple-50 shadow-lg hover:shadow-xl'
                  } border ${isDark ? 'border-purple-500/20 hover:border-purple-500/40' : 'border-purple-100 hover:border-purple-300'}`}
                >
                  {/* Imagen del proyecto */}
                  <div className="relative h-48 overflow-hidden">
                    {isComingSoon && (
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm z-10 flex items-center justify-center">
                        <div className={`px-4 py-2 rounded-full ${isDark ? 'bg-white/10' : 'bg-white/80'} border ${isDark ? 'border-white/20' : 'border-purple-200'}`}>
                          <p className={`text-sm font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                            {t.comingSoon}
                          </p>
                        </div>
                      </div>
                    )}
                    
                    <a 
                      href={isComingSoon ? undefined : project.vercel} 
                      target={isComingSoon ? undefined : "_blank"} 
                      rel={isComingSoon ? undefined : "noopener noreferrer"}
                      className={`block h-full ${isComingSoon ? 'cursor-default' : 'cursor-pointer'}`}
                      onClick={(e) => isComingSoon && e.preventDefault()}
                    >
                      <img 
                        src={project.img} 
                        alt={project.title}
                        className={`w-full h-full object-cover transition-transform duration-500 ${isComingSoon ? 'opacity-50' : 'group-hover:scale-110'}`}
                      />
                    </a>
                    
                    {/* Overlay con gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-[#1C1B2E] via-transparent' : 'from-white via-transparent'} opacity-60`}></div>
                  </div>

                  {/* Contenido */}
                  <div className="p-6 space-y-4">
                    {/* Título */}
                    <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-300`}>
                      {project.title}
                    </h3>

                    {/* Descripción */}
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} line-clamp-2`}>
                      {project.desc}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className={`px-2 py-1 rounded-md text-xs font-medium ${
                            isDark 
                              ? 'bg-purple-500/10 text-purple-300 border border-purple-500/20' 
                              : 'bg-purple-100 text-purple-700 border border-purple-200'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Botones de acción */}
                    {!isComingSoon && (
                      <div className="flex gap-3 pt-2">
                        <a
                          href={project.vercel}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                            isDark
                              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl'
                              : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-md hover:shadow-lg'
                          }`}
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          {t.viewProject}
                        </a>
                        
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center justify-center px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                            isDark
                              ? 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                              : 'bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-200'
                          }`}
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Efecto de brillo en hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] pointer-events-none"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}