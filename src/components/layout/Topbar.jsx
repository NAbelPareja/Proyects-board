import {
  FiSearch,
  FiBell,
  FiChevronDown,
  FiMenu,
} from "react-icons/fi";

export const Topbar = ({ onMenuClick }) => {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-slate-200 bg-white px-4 md:px-6">
      <div className="flex items-center gap-3">
        {/* Menú móvil */}
        <button
          onClick={onMenuClick}
          className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 md:hidden"
        >
          <FiMenu size={19} />
        </button>

        {/* Buscador */}
        <div className="relative w-52 sm:w-64">
          <FiSearch
            size={14}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Buscar..."
            className="
              h-8 w-full rounded-md border-0 bg-slate-100
              pl-9 pr-3 text-[10px] text-slate-700
              outline-none placeholder:text-slate-400
              focus:ring-2 focus:ring-indigo-100
            "
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* Notificaciones */}
        <button className="relative rounded-lg p-1.5 text-slate-500 hover:bg-slate-100">
          <FiBell size={16} />

          <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-indigo-500" />
        </button>

        {/* Usuario */}
        <button className="flex items-center gap-2 rounded-lg px-1.5 py-1 hover:bg-slate-50">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-100 text-[10px] font-semibold text-amber-700">
            AG
          </div>

          <span className="hidden text-[11px] font-medium text-slate-700 sm:block">
            Abel García
          </span>

          <FiChevronDown
            size={13}
            className="hidden text-slate-400 sm:block"
          />
        </button>
      </div>
    </header>
  )
}
