import { FiCalendar, FiFolder } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { TaskBadge } from "./TaskBadge";
import { useProyects } from "../../hooks/useProyects";

export const TaskRow = ({ task }) => {
  const {eliminarTarea} = useProyects();
  return (
    <>
      {/* Desktop / Tablet */}
      <div
        className="
          hidden
          grid-cols-[minmax(150px,1fr)_90px_75px_105px_30px_25px]
          items-center gap-5
          border-t border-slate-100
          px-3 py-2.5
          transition
          hover:bg-slate-50/70 
          md:grid
          dark:bg-slate-800 dark:text-slate-100
        "
      >
        <div className="min-w-0">
          <p className="truncate text-[9px] font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-100">
            {task.nombre}
          </p>

          <div className="mt-0.5 flex items-center gap-1 text-[7px] text-slate-400">
            <FiFolder size={8} />
            {task.nombreProyecto}
          </div>
        </div>

        <TaskBadge type="status" value={task.estado} />

        <TaskBadge type="priority" value={task.prioridad} />

        <div className="flex items-center gap-1 text-[7px] text-slate-400">
          <FiCalendar size={9} />
          {task.fechaLimite}
        </div>
         <button
          className="flex items-center  text-[8px] w-12 rounded border border-red-500 p-1 bg-red-50 text-red-600 hover:bg-red-100 font-bold"
          onClick={() => eliminarTarea(task.id)}
        >
          {" "}
          <MdDelete />
          eliminar
        </button>
      </div>

      {/* Mobile */}
      <div
        className="
          border-t border-slate-100
          p-3
          md:hidden
        "
      >
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[10px] font-medium text-slate-700">
              {task.nombre}
            </p>

            <div className="mt-1 flex items-center gap-1 text-[8px] text-slate-400">
              <FiFolder size={9} />
              {task.nombreProyecto}
            </div>
          </div>
        </div>

        <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
          <TaskBadge type="status" value={task.estado} />

          <TaskBadge type="priority" value={task.prioridad} />

          <span className="flex items-center gap-1 text-[8px] text-slate-400">
            <FiCalendar size={9} />
            {task.fechaLimite}
          </span>
          <button
          className="flex flex-row items-center text-[8px] rounded border border-red-500 p-1 bg-red-50 text-red-600 hover:bg-red-100 font-bold"
          onClick={() => eliminarTarea(task.id)}
        >
          {" "}
          <MdDelete />
          eliminar
        </button>
        </div>

         

        
      </div>
    </>
  );
};
