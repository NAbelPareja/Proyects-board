import { FiArrowRight } from "react-icons/fi";
import {ProjectCard} from "./ProjectCard";
import { useProyects } from "../../hooks/useProyects";


export const RecentProjects = () => {
  const {listaProyectos}=useProyects()
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
        {listaProyectos.slice(-3).map((project) => (
          <ProjectCard
            key={project.id}
            project= {project}
          />
        ))}
      </div>
    </section>
  )
}

