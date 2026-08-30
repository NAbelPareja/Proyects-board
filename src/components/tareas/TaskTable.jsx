
import { TaskRow } from "./TaskRow";

export const TaskTable = ({ listaFiltradaTareas }) => {


  if (listaFiltradaTareas.length === 0) {
    return (
      <div className="rounded-lg border border-slate-200 bg-white py-12 text-center">
        <p className="text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-100">
          No se encontraron tareas
        </p>

        <p className="mt-1 text-[9px] text-slate-400 dark:bg-slate-800 dark:text-slate-100">
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
          grid-cols-[minmax(150px,1fr)_80px_75px_95px_30px_30px]
          gap-5
          bg-slate-50
          px-3 py-2
          text-[7px]
          font-medium
          uppercase
          text-slate-400
          md:grid
          dark:bg-slate-800 dark:text-slate-100
        "
      >
        <span>Tarea</span>
        <span>Estado</span>
        <span>Prioridad</span>
        <span>Fecha límite</span>
        <span>Acciones</span>
        <span />
      </div>

      {/* Mobile header */}
      <div className="border-b border-slate-100 bg-slate-50 px-3 py-2 md:hidden dark:bg-slate-800 dark:text-slate-100">
        <span className="text-[8px] font-medium uppercase text-slate-400">
          Tareas
        </span>
      </div>

      {listaFiltradaTareas.map((task) => (
        <TaskRow
          key={task.id}
          task={task}
        />
      ))}
    </div>
  );
};