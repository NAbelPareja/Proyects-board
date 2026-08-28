import { useProyects } from "../../hooks/useProyects";
import { TaskRow } from "./TaskRow";

export const TaskTable = ({ tasks }) => {

  const {listaTareas} =useProyects();

  if (tasks.length === 0) {
    return (
      <div className="rounded-lg border border-slate-200 bg-white py-12 text-center">
        <p className="text-xs font-medium text-slate-600">
          No se encontraron tareas
        </p>

        <p className="mt-1 text-[9px] text-slate-400">
          Intenta modificar los filtros de búsqueda.
        </p>
      </div>
    );
  }

  return (
    <div
      className="
        overflow-hidden rounded-lg
        border border-slate-200
        bg-white
      "
    >
      {/* Header desktop */}
      <div
        className="
          hidden
          grid-cols-[minmax(220px,1fr)_90px_75px_105px_30px]
          gap-2
          bg-slate-50
          px-3 py-2
          text-[7px]
          font-medium
          uppercase
          text-slate-400
          md:grid
        "
      >
        <span>Tarea</span>
        <span>Estado</span>
        <span>Prioridad</span>
        <span>Fecha límite</span>
        <span />
      </div>

      {/* Mobile header */}
      <div className="border-b border-slate-100 bg-slate-50 px-3 py-2 md:hidden">
        <span className="text-[8px] font-medium uppercase text-slate-400">
          Tareas
        </span>
      </div>

      {listaTareas.map((task) => (
        <TaskRow
          key={task.id}
          task={task}
        />
      ))}
    </div>
  );
};