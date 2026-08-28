import {
  FiStar,
  FiMoreHorizontal,
  FiClock,
  FiCalendar,
} from "react-icons/fi";

export const ProjectCard = ({
  project
}) => {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm shadow-slate-100/50">
      {/* Header */}
      <div className="flex items-start justify-between">
        <span className="rounded-md bg-slate-100 px-2 py-1 text-[8px] font-medium text-slate-500">
          {project.categoria}
        </span>

        <div className="flex items-center gap-1">
          <button className="rounded p-1 hover:bg-slate-50">
            <FiStar
              size={12}
              className={
                project.favorito
                  ? "fill-amber-400 text-amber-400"
                  : "text-slate-400"
              }
            />
          </button>

          <button className="rounded p-1 text-slate-400 hover:bg-slate-50">
            <FiMoreHorizontal size={14} />
          </button>
        </div>
      </div>

      {/* Información */}
      <div className="mt-2">
        <h3 className="text-xs font-semibold text-slate-800">
          {project.nombre}
        </h3>

        <p className="mt-1 text-[9px] text-slate-400">
          {project.descripcion}
        </p>
      </div>

      {/* Progress */}
      <div className="mt-4">
        <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-emerald-500 transition-all"
            style={{ width: `${project.progreso}%` }}
          />
        </div>

        <div className="mt-1 text-right text-[8px] text-slate-400">
          {project.progreso}%
        </div>
      </div>

      {/* Metadata */}
      <div className="mt-2 flex items-center gap-3 text-[8px] text-slate-400">
        <span className="flex items-center gap-1">
          <FiClock size={10} />
          {project.tareas} tareas
        </span>

        <span className="flex items-center gap-1">
          <FiCalendar size={10} />
          {project.fechaLimite}
        </span>
      </div>

      {/* Tags */}
      <div className="mt-2 flex items-center justify-end gap-2">
        <span className="rounded-md bg-red-50 px-2 py-1 text-[7px] font-medium text-red-500">
          {project.prioridad}
        </span>

        <span className="rounded-md bg-emerald-50 px-2 py-1 text-[7px] font-medium text-emerald-500">
          {project.estado}
        </span>
      </div>

      {/* Botón */}
      <button className="mt-3 h-7 w-full rounded-md bg-indigo-50 text-[9px] font-medium text-indigo-500 transition hover:bg-indigo-100">
        Abrir proyecto
      </button>
    </article>
  )
}
