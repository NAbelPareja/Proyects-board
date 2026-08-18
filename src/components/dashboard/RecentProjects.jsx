import { FiArrowRight } from "react-icons/fi";
import {ProjectCard} from "./ProjectCard";

const projects = [
  {
    category: "Desarrollo",
    title: "MyLibrary",
    description: "Biblioteca digital personal",
    progress: 80,
    tasks: 8,
    date: "20 Sep",
    priority: "Alta",
    status: "Activo",
    favorite: true,
  },
  {
    category: "Finanzas",
    title: "Gasper",
    description: "Finanzas personales y presupuesto",
    progress: 55,
    tasks: 12,
    date: "12 Oct",
    priority: "Media",
    status: "Activo",
    favorite: false,
  },
];


export const RecentProjects = () => {
  return (
    <section>
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-xs font-semibold text-slate-800">
          Proyectos recientes
        </h2>

        <button className="flex items-center gap-1 text-[9px] font-medium text-indigo-500 hover:text-indigo-600">
          Ver todos
          <FiArrowRight size={10} />
        </button>
      </div>

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            {...project}
          />
        ))}
      </div>
    </section>
  )
}

