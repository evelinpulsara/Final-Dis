// app/components/sections/ProjectsSection.tsx
import React from 'react';

interface ProjectsProps {
  isDark: boolean;
  language: 'es' | 'en';
}

export default function ProjectsSection({ isDark, language }: ProjectsProps) {
  const t = {
    es: {
      title: 'Proyectos',
      items: [
        { title: 'Boleto de avión', github: 'https://github.com/evelinpulsara/Boleto.git', vercel: 'https://boleto-tawny.vercel.app', img: '/imagenes/boleto.png' },
        { title: 'Invitación XV', github: 'https://github.com/evelinpulsara/invitacion-Angely.git', vercel: 'https://invitacion-angely.vercel.app', img: '/imagenes/xv.png' },
        { title: 'Formulario', github: 'https://github.com/evelinpulsara/Cuarto-Taller.git', vercel: 'https://taller-interfaz.vercel.app', img: '/imagenes/interfaz.png' },
        { title: 'Interfaz', github: 'https://github.com/evelinpulsara/responsive-design.git', vercel: 'https://responsive-design-indol.vercel.app', img: '/imagenes/netflix.png' },
        { title: 'Title', github: '-', vercel: '#', img: 'https://cdn-icons-png.flaticon.com/512/25/25231.png' },
        { title: 'Title', github: '-', vercel: '#', img: 'https://cdn-icons-png.flaticon.com/512/25/25231.png' },
      ]
    },
    en: {
      title: 'Projects',
      items: [
        { title: 'Flight Ticket', github: 'https://github.com/evelinpulsara/Boleto.git', vercel: 'https://boleto-tawny.vercel.app', img: '/imagenes/boleto.png' },
        { title: 'XV Invitation', github: 'https://github.com/evelinpulsara/invitacion-Angely.git', vercel: 'https://invitacion-angely.vercel.app', img: '/imagenes/xv.png' },
        { title: 'Form', github: 'https://github.com/evelinpulsara/Cuarto-Taller.git', vercel: 'https://taller-interfaz.vercel.app', img: '/imagenes/interfaz.png' },
        { title: 'Interface', github: 'https://github.com/evelinpulsara/responsive-design.git', vercel: 'https://responsive-design-indol.vercel.app', img: '/imagenes/netflix.png' },
        { title: 'Title', github: '-', vercel: '#', img: 'https://cdn-icons-png.flaticon.com/512/25/25231.png' },
        { title: 'Title', github: '-', vercel: '#', img: 'https://cdn-icons-png.flaticon.com/512/25/25231.png' },
      ]
    }
  }[language];

  return (
    <section id="proyectos" className={`py-20 ${isDark ? 'bg-[#0F1029]' : 'bg-[#F5F3FA]'}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-12 ${isDark ? 'text-white' : ''}`}>{t.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.items.map((project, idx) => (
              <div
                key={idx}
                className={`${isDark ? 'bg-[#1C1B2E]' : idx === 0 ? 'bg-[#C7D9F7]' : idx === 1 ? 'bg-[#D6C8F0]' : idx === 2 ? 'bg-[#B18BE8]' : idx === 3 ? 'bg-[#E9E2F7]' : idx === 4 ? 'bg-[#EFD8F6]' : 'bg-[#A9B7F2]'} p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div className="mb-4">
                  <a href={project.vercel} target="_blank" rel="noopener noreferrer" className="block w-full h-32 rounded-lg overflow-hidden">
                    <img src={project.img} alt={`Vista previa de ${project.title}`} className="w-full h-full object-cover" />
                  </a>
                </div>
                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : ''}`}>{project.title}</h3>
                <p className={isDark ? 'text-[#B18BE8] mb-2' : 'text-gray-600 mb-2'}>Link GitHub:</p>
                <ul className="list-disc pl-5">
                  <li>
                    {project.github === '-' ? (
                      <span className={isDark ? 'text-[#B18BE8]' : 'text-gray-700'}>-</span>
                    ) : (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-[#B18BE8] hover:text-[#D6C8F0] transition-colors ${isDark ? '' : 'hover:underline'}`}
                      >
                        {project.github}
                      </a>
                    )}
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}