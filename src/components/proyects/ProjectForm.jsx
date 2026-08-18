import {
  FiCalendar,
  FiChevronDown,
  FiPlus,
  FiAlertCircle,
} from "react-icons/fi";
import { ProjectColorPicker } from "./ProjectColorPicker";

export const ProjectForm = ({
  onCancel,
  form,
  handleInputChange,
  handleGuardarProyecto,
  handleCheckboxChange,
  handleColorChange,
}) => {
  return (
    <form onSubmit={handleGuardarProyecto} className="space-y-4 px-5 py-4">
      <div className="space-y-4 px-5 py-4">
        <div>
          <label
            htmlFor="nombre"
            className="mb-1.5 block text-[11px] font-medium text-gray-800"
          >
            Nombre<span className="text-red-500">*</span>
          </label>

          <input
            id="nombre"
            name="nombre"
            type="text"
            value={form.nombre}
            onChange={handleInputChange}
            placeholder="Ej. MyLibrary"
            className="h-9 w-full rounded-lg border border-gray-200 px-3 text-xs text-gray-800 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        {/* Descripción */}
        <div>
          <label
            htmlFor="descripcion"
            className="mb-1.5 block text-[11px] font-medium text-gray-800"
          >
            Descripción
          </label>

          <textarea
            id="descripcion"
            name="descripcion"
            value={form.descripcion}
            onChange={handleInputChange}
            rows={3}
            placeholder="Biblioteca digital personal..."
            className="w-full resize-none rounded-lg border border-gray-200 px-3 py-2 text-xs text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        {/* Categoría + prioridad */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="categoria"
              className="mb-1.5 block text-[11px] font-medium text-gray-800"
            >
              Categoría
            </label>

            <div className="relative">
              <select
                id="categoria"
                name="categoria"
                value={form.categoria}
                onChange={handleInputChange}
                className="h-9 w-full appearance-none rounded-lg border border-gray-200 bg-white px-3 pr-8 text-xs text-gray-700 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
              >
                <option>Desarrollo</option>
                <option>Diseño</option>
                <option>Estudios</option>
                <option>Personal</option>
              </select>

              <FiChevronDown
                size={14}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="prioridad"
              className="mb-1.5 block text-[11px] font-medium text-gray-800"
            >
              Prioridad<span className="text-red-500">*</span>
            </label>

            <div className="relative">
              <select
                id="prioridad"
                name="prioridad"
                value={form.prioridad}
                onChange={handleInputChange}
                className="h-9 w-full appearance-none rounded-lg border border-gray-200 bg-white px-3 pr-8 text-xs text-gray-700 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
              >
                <option>Baja</option>
                <option>Media</option>
                <option>Alta</option>
              </select>

              <FiChevronDown
                size={14}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
            </div>
          </div>
        </div>

        {/* Fecha */}
        <div>
          <label
            htmlFor="fechaLimite"
            className="mb-1.5 block text-[11px] font-medium text-gray-800"
          >
            Fecha límite<span className="text-red-500">*</span>
          </label>

          <div className="relative">
            <input
              id="fechaLimite"
              name="fechaLimite"
              type="date"
              value={form.fechaLimite}
              onChange={handleInputChange}
              className="h-9 w-full rounded-lg border border-gray-200 px-3 pr-10 text-xs text-gray-700 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
            />

            <FiCalendar
              size={14}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>
        </div>

        {/* Color */}
        <ProjectColorPicker value={form.color} onChange={handleColorChange} />
        {/* Favorito */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] font-medium text-gray-800">
              Marcar como favorito
            </p>

            <p className="text-[9px] text-gray-400">
              Aparecerá destacado en tu dashboard
            </p>
          </div>

          <button
            type="button"
            onClick={() =>
              handleCheckboxChange({
                target: { name: "favorito", checked: !form.favorito },
              })
            }
            className={`relative h-4 w-7 rounded-full transition ${
              form.favorito ? "bg-indigo-500" : "bg-gray-300"
            }`}
          >
            <span
              className={`absolute top-0.5 h-3 w-3 rounded-full bg-white shadow-sm transition ${
                form.favorito ? "right-0.5" : "left-0.5"
              }`}
            />
          </button>
        </div>

        {/* Mensaje de error */}
        <div className="flex items-center gap-2 rounded-lg bg-red-50 px-3 py-2.5 text-[10px] text-red-500">
          <FiAlertCircle size={13} />

          <span>El nombre del proyecto es requerido.</span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col-reverse gap-2 border-t border-gray-200 px-5 py-3 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={onCancel}
          className="h-9 rounded-lg border border-gray-200 px-4 text-xs font-medium text-gray-700 transition hover:bg-gray-50"
        >
          Cancelar
        </button>

        <button
          type="submit"
          className="flex h-9 items-center justify-center gap-1.5 rounded-lg bg-indigo-500 px-4 text-xs font-medium text-white transition hover:bg-indigo-600"
        >
          <FiPlus size={14} />
          Crear proyecto
        </button>
      </div>
    </form>
  );
};
