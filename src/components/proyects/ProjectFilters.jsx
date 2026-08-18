import {
  FiSearch,
  FiChevronDown,
  FiStar,
} from "react-icons/fi";

export const ProjectFilters = () => {
  return (
    <div className="mb-4 flex flex-col gap-2 lg:flex-row">
      {/* Buscador */}
      <div className="relative flex-1 lg:max-w-[310px]">
        <FiSearch
          size={12}
          className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          placeholder="Buscar proyectos..."
          className="
            h-8 w-full rounded-md border border-slate-200
            bg-white pl-7 pr-3 text-[9px] text-slate-600
            outline-none
            focus:border-indigo-300
            focus:ring-1 focus:ring-indigo-100
          "
        />
      </div>

      {/* Filtros */}
      <div className="flex flex-wrap gap-1.5">
        <button
          className="
            h-8 rounded-md border border-indigo-300
            bg-indigo-500 px-3 text-[9px]
            font-medium text-white
          "
        >
          Todos
        </button>

        <button className="flex h-8 items-center gap-1 rounded-md border border-slate-200 bg-white px-3 text-[9px] text-slate-600 hover:bg-slate-50">
          Estado
          <FiChevronDown size={10} />
        </button>

        <button className="flex h-8 items-center gap-1 rounded-md border border-slate-200 bg-white px-3 text-[9px] text-slate-600 hover:bg-slate-50">
          Prioridad
          <FiChevronDown size={10} />
        </button>

        <button className="flex h-8 items-center gap-1 rounded-md border border-slate-200 bg-white px-3 text-[9px] text-slate-600 hover:bg-slate-50">
          Favoritos
          <FiStar size={10} />
        </button>
      </div>
    </div>
  );
};