export const TaskForm = ({
  handleGuardarTarea,
  formTareas,
  handleInputChangeTareas,
  listaProyectos,
}) => {
  return (
    <form onSubmit={handleGuardarTarea} className="space-y-4 px-5 py-4">
      <div>
        <label className="block text-[10px] font-medium text-slate-500 uppercase tracking-wider mb-1">
          Nombre de la tarea
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          value={formTareas.nombre}
          onChange={handleInputChangeTareas}
          placeholder="Ej. Diseñar flujo de login"
          className="w-full h-9 rounded-lg border border-slate-200 px-3 text-xs text-slate-800 placeholder-slate-400 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
        />
      </div>

      <div >
          <label className="block text-[10px] font-medium text-slate-500 uppercase tracking-wider mb-1">
            Proyecto
          </label>
          <select
            className="w-full h-9 rounded-lg border border-slate-200 px-2 text-xs text-slate-700 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition bg-white"
            id="nombreProyecto"
            name="nombreProyecto"
            value={formTareas.nombreProyecto}
            onChange={handleInputChangeTareas}
          >
          <option value="">Selecciona un proyecto</option>
      {listaProyectos.map((valor) => (
          <option key={valor.id} value={valor.nombre}>{valor.nombre}</option>
      ))}

      </select>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-[10px] font-medium text-slate-500 uppercase tracking-wider mb-1">
            Estado
          </label>
          <select
            className="w-full h-9 rounded-lg border border-slate-200 px-2 text-xs text-slate-700 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition bg-white"
            id="estado"
            name="estado"
            value={formTareas.estado}
            onChange={handleInputChangeTareas}
          >
            <option value="">Estado...</option>
            <option value="pendiente">Pendiente</option>
            <option value="en_progreso">En progreso</option>
            <option value="completado">Completado</option>
          </select>
        </div>

        <div>
          <label className="block text-[10px] font-medium text-slate-500 uppercase tracking-wider mb-1">
            Prioridad
          </label>
          <select
            className="w-full h-9 rounded-lg border border-slate-200 px-2 text-xs text-slate-700 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition bg-white"
            id="prioridad"
            name="prioridad"
            value={formTareas.prioridad}
            onChange={handleInputChangeTareas}
          >
            <option value="">Prioridad...</option>
            <option value="baja">Baja</option>
            <option value="media">Media</option>
            <option value="alta">Alta</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-[10px] font-medium text-slate-500 uppercase tracking-wider mb-1">
          Fecha límite
        </label>
        <input
          id="fechaLimite"
          name="fechaLimite"
          type="date"
          value={formTareas.fechaLimite}
          onChange={handleInputChangeTareas}
          className="w-full h-9 rounded-lg border border-slate-200 px-3 text-xs text-slate-700 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
        />
      </div>

      <div className="flex items-center justify-end gap-2 border-t border-slate-100 pt-3 mt-5">
        <button
          type="button"
          className="h-8 rounded-lg px-4 text-xs font-medium text-slate-500 hover:bg-slate-50 transition"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="h-8 rounded-lg bg-indigo-600 px-4 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 transition"
        >
          Guardar tarea
        </button>
      </div>
    </form>
  );
};
