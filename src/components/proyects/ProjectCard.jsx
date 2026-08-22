import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FiStar, FiCheckSquare, FiCalendar } from "react-icons/fi";
import { useProyects } from "../../hooks/useProyects";
import { ProjectModal } from "./ProjectModal";

const priorityStyles = {
  Alta: "bg-red-50 text-red-500",
  Media: "bg-amber-50 text-amber-500",
  Baja: "bg-green-50 text-green-500",
};

const statusStyles = {
  Activo: "bg-green-50 text-green-500",
  Pausado: "bg-amber-50 text-amber-500",
  Completado: "bg-slate-100 text-slate-500",
};

export const ProjectCard = ({
  project,
  eliminarProyecto,
  handleEditaProyecto,
}) => {
  const { isModalOpen, setIsModalOpen } = useProyects();
  return (
    <article
      className="
        rounded-lg border border-slate-200
        bg-white p-3
        shadow-[0_1px_2px_rgba(15,23,42,0.02)]
        transition
        hover:border-indigo-200
        hover:shadow-sm
      "
    >
      {/* Cabecera */}
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <span
            className="
              inline-flex rounded-full bg-slate-50
              px-2 py-1 text-[7px] font-medium
              text-slate-400
            "
          >
            {project.categoria}
          </span>

          <h2 className="mt-1.5 truncate text-[10px] font-semibold text-slate-700">
            {project.nombre}
          </h2>

          <p className="mt-0.5 truncate text-[8px] text-slate-400">
            {project.descripcion}
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-1">
          <button
            className={`
              rounded p-1
              ${project.favorito ? "text-amber-400" : "text-slate-300"}
              hover:bg-slate-50
            `}
          >
            <FiStar
              size={11}
              fill={project.favorito ? "currentColor" : "none"}
            />
          </button>

          <div className="flex flex-row gap-1">
            <button
              className="flex felx-row items-center text-[8px] rounded border border-red-500 p-1 bg-red-50 text-red-600 hover:bg-red-100 font-bold "
              onClick={() => {
                (handleEditaProyecto(project.id), setIsModalOpen(true));
              }}
            >
              {" "}
              <FaEdit />
              editar
            </button>
            {/* {isModalOpen && (
              <ProjectModal onClose={() => setIsModalOpen(false)
              }
              
              />
            )}   */}
            <button
              className="flex flex-row items-center text-[8px] rounded border border-amber-500 p-1 bg-amber-50 text-amber-600 hover:bg-amber-100 font-bold"
              onClick={() => eliminarProyecto(project.id)}
            >
              {" "}
              <MdDelete />
              eliminar
            </button>
          </div>
        </div>
      </div>

      {/* Progreso */}
      <div className="mt-3">
        <div className="flex items-center justify-between">
          <div className="h-1 flex-1 overflow-hidden rounded-full bg-slate-100">
            <div
              className={`
                h-full rounded-full
                ${
                  project.progreso === 100
                    ? "bg-green-500"
                    : project.progreso < 40
                      ? "bg-amber-500"
                      : "bg-green-500"
                }
              `}
              style={{
                width: `${project.progreso}%`,
              }}
            />
          </div>

          <span className="ml-2 text-[7px] text-slate-400">
            {project.progreso}%
          </span>
        </div>
      </div>

      {/* Información */}
      <div className="mt-2.5 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-[7px] text-slate-400">
          <span className="flex items-center gap-1">
            <FiCheckSquare size={9} />
            {project.tareas} tareas
          </span>

          <span className="flex items-center gap-1">
            <FiCalendar size={9} />
            {project.fecha}
          </span>
        </div>
      </div>

      {/* Badges */}
      <div className="mt-2 flex items-center justify-between">
        <div className="flex gap-1">
          <span
            className={`
              rounded-full px-2 py-0.5
              text-[7px] font-medium
              ${priorityStyles[project.prioridad]}
            `}
          >
            {project.prioridad}
          </span>

          <span
            className={`
              rounded-full px-2 py-0.5
              text-[7px] font-medium
              ${statusStyles[project.estado]}
            `}
          >
            {project.estado}
          </span>
        </div>
      </div>

      {/* Botón */}
      <button
        className="
          mt-2.5 h-7 w-full rounded-sm
          border border-indigo-300
          bg-indigo-50/40
          text-[8px] font-medium text-indigo-500
          transition hover:bg-indigo-50
        "
      >
        Abrir proyecto
      </button>
    </article>
  );
};
