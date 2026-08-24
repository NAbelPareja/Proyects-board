import { FiSearch, FiChevronDown, FiStar } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";


export const ProjectFilters = ({
  marcarFavorito,
  setMarcarFavorito,
  marcarPrioridad,
  setMarcarPrioridad,
  marcarCategoria,
  setMarcarCategoria,
  buscar,
  setBuscar
}) => {
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
          value={buscar}
          onChange={(e) => setBuscar(e.target.value.toLocaleLowerCase())}
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
        

        <div className="relative">
          <select
            id="prioridad"
            name="prioridad"
            value={marcarPrioridad}
            onChange={(e) => setMarcarPrioridad(e.target.value)}
            className="h-9 w-full appearance-none rounded-lg border border-gray-200 bg-white px-3 pr-8 text-xs text-gray-700 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
          >
            <option value="">Prioridad</option>
            <option value="Baja">Baja</option>
            <option value="Media">Media</option>
            <option value="Alta">Alta</option>
          </select>

          <FiChevronDown
            size={14}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
        </div>

        <div className="relative">
          <select
            id="categoria"
            name="categoria"
            value={marcarCategoria}
            onChange={(e) => setMarcarCategoria(e.target.value)}
            className="h-9 w-full appearance-none rounded-lg border border-gray-200 bg-white px-3 pr-8 text-xs text-gray-700 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
          >
            <option value="">Categoria</option>
            <option value="Desarrollo">Desarrollo</option>
            <option value="Diseño">Diseño</option>
            <option value="Estudios">Estudios</option>
            <option value="Personal">Personal</option>
          </select>

          <FiChevronDown
            size={14}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
        </div>

        <button
          className="flex h-8 items-center gap-1 rounded-md border border-gray-200 bg-white px-3 transition-colors text-xs text-gray-700 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
          type="button"
          onClick={() => setMarcarFavorito(!marcarFavorito)}
        >
          Favoritos
          {marcarFavorito ? (
            <AiFillStar size={18} className="text-yellow-500" />
          ) : (
            <FiStar size={15} />
          )}
        </button>
      </div>
    </div>
  );
};
