import { NavLink } from "react-router-dom";
import {
  FiGrid,
  FiFolder,
  FiCheckSquare,
  FiCalendar,
  FiSettings,
  FiUser,
  FiX,
} from "react-icons/fi";

const menuItems = [
  {
    label: "Dashboard",
    icon: FiGrid,
    active: true,
    path: "/dashboard",
  },
  {
    label: "Proyectos",
    icon: FiFolder,
    path: "/proyectos",
  },
  {
    label: "Tareas",
    icon: FiCheckSquare,
    path: "/tareas",
  },
  {
    label: "Calendario",
    icon: FiCalendar,
    path: "/calendario",
  },
];
export const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay para móvil */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-slate-900/30 transition-opacity md:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        className={`
          fixed left-0 top-0 z-50 flex h-screen w-64 flex-col
          border-r border-slate-200 bg-white
          transition-transform duration-300
          md:w-52 md:translate-x-0 dark:bg-slate-800 dark:text-slate-100
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Logo */}
        <div className="flex h-14 items-center justify-between border-b border-slate-100 px-4 dark:bg-slate-800 dark:text-slate-100">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-500 text-white ">
              <FiGrid size={14} />
            </div>

            <span className="text-sm font-semibold text-slate-800 dark:bg-slate-800 dark:text-slate-100">
              DevBoard
            </span>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 md:hidden "
          >
            <FiX size={18} />
          </button>
        </div>

        {/* Navegación */}
        <nav className="flex-1 px-3 py-4">
          <p className="mb-2 px-3 text-[10px] font-medium uppercase tracking-wider text-slate-400">
            Menú
          </p>

          <div className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.label}
                  to={item.path}
                  className={({ isActive }) => `
          flex w-full items-center gap-3 rounded-lg px-3 py-2
          text-xs transition
          ${
            isActive
              ? "bg-indigo-50 font-medium text-indigo-600 dark:text-slate-900"
              : "text-slate-600 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-500"
          }
        `}
                >
                  <Icon size={15} />
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </div>

          <div className="my-4 border-t border-slate-100" />

          <NavLink to="/configuracion" className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-xs text-slate-600 transition hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-500">
            <FiSettings size={15} />
            <span>Configuración</span>
          </NavLink>
        </nav>

        {/* Usuario */}
        <div className="border-t border-slate-100 p-3">
          <div className="flex items-center gap-2.5 rounded-lg p-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-50 text-indigo-500">
              <FiUser size={13} />
            </div>

            <div className="min-w-0">
              <p className="truncate text-[10px] font-semibold text-slate-700">
                Abel García
              </p>

              <p className="truncate text-[9px] text-slate-400">
                abel@devboard.io
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
