import { FiSearch} from "react-icons/fi";
import { useProyects } from "../../hooks/useProyects";

export const TaskFilters = ({
  search,
  setSearch,
  marcarEstadoTarea,
  setMarcarEstadoTarea,
  marcarPrioridadTarea,
  setMarcarPrioridad,
  marcarProyecto,
  setMarcarProyecto,
}) => {

  const {listaProyectos} =useProyects()
  return (
    <div className="mb-3 flex flex-col gap-2 sm:flex-row ">
      {/* Search */}
      <div className="relative flex-1 sm:max-w-[310px]">
        <FiSearch
          size={12}
          className="
            absolute left-2.5 top-1/2
            -translate-y-1/2
            text-slate-400
            dark:bg-slate-800 dark:text-slate-100
          "
        />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar tarea..."
          className="
            h-8 w-full
            rounded-md
            border border-slate-200
            bg-white
            pl-7 pr-3
            text-[9px]
            text-slate-600
            outline-none
            transition
            placeholder:text-slate-400
            focus:border-indigo-300
            focus:ring-1
            focus:ring-indigo-100
            dark:bg-slate-800 dark:text-slate-100
          "
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-1.5">
        <button
          className="
            h-8 rounded-md
            border border-indigo-400
            bg-indigo-500
            px-3
            text-[9px]
            font-medium
            text-white
          "
        >
          Todos
        </button>

        <div>
          <select
            className="w-full h-9 rounded-lg border border-slate-200 px-2 text-xs text-slate-700 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition bg-white dark:bg-slate-800 dark:text-slate-100"
            id="estado"
            name="estado"
            value={marcarEstadoTarea}
            onChange={(e) => setMarcarEstadoTarea(e.target.value)}
          >
            <option value="">Estado</option>
            <option value="pendiente">Pendiente</option>
            <option value="en_progreso">En progreso</option>
            <option value="completado">Completado</option>
          </select>
        </div>

        <div>
          <select
            className="w-full h-9 rounded-lg border border-slate-200 px-2 text-xs text-slate-700 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition bg-white dark:bg-slate-800 dark:text-slate-100"
            id="prioridad"
            name="prioridad"
            value={marcarPrioridadTarea}
            onChange={(e) => setMarcarPrioridad(e.target.value)}
          >
            <option value="">Prioridad</option>
            <option value="baja">Baja</option>
            <option value="media">Media</option>
            <option value="alta">Alta</option>
          </select>
        </div>

        <div >
          <select
            className="w-full h-9 rounded-lg border border-slate-200 px-2 text-xs text-slate-700 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition bg-white dark:bg-slate-800 dark:text-slate-100"
            id="nombreProyecto"
            name="nombreProyecto"
            value={marcarProyecto}
            onChange={(e) => setMarcarProyecto(e.target.value)}
          >
          <option value="">Proyecto</option>
      {listaProyectos.map((valor) => (
          <option key={valor.id} value={valor.nombre}>{valor.nombre}</option>
      ))}

      </select>
      </div>
      </div>
    </div>
  );
};
