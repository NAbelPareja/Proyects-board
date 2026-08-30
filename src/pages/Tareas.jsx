import { useState } from "react";

import { Sidebar } from "../components/layout/Sidebar";
import { Topbar } from "../components/layout/Topbar";

import { TasksHeader } from "../components/tareas/TasksHeader";
import { TaskFilters } from "../components/tareas/TaskFilters";
import { TaskTable } from "../components/tareas/TaskTable";
import { useProyects } from "../hooks/useProyects";

export const Tareas = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");

  const { listaTareas } = useProyects();
  const [marcarEstadoTarea, setMarcarEstadoTarea] = useState("");
  const [marcarPrioridadTarea, setMarcarPrioridad] = useState("");
  const [marcarProyecto, setMarcarProyecto] = useState("");

  const listaFiltradaTareas = listaTareas.filter((valor) => {
    const nombretarea = valor.nombre.toLowerCase();
    const estadoTarea = valor.estado.toLowerCase();
    const prioridadTarea = valor.prioridad.toLowerCase();
    const proyecto = valor.nombreProyecto.toLowerCase();

    const cumpleNombreTarea = !search || nombretarea.includes(search);
    const cumpleEstadoTarea =
      !marcarEstadoTarea || estadoTarea.includes(marcarEstadoTarea);
      console.log(cumpleEstadoTarea)
    const cumpleCategoriaTarea =
      !marcarPrioridadTarea || prioridadTarea.includes(marcarPrioridadTarea);
    const cumpleProyectoTarea =
      !marcarProyecto || proyecto.includes(marcarProyecto);

    return (
      cumpleNombreTarea &&
      cumpleEstadoTarea &&
      cumpleCategoriaTarea &&
      cumpleProyectoTarea
    );
  });

  return (
    <div className=" min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-800 dark:text-slate-100">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="md:ml-52">
        <Topbar onMenuClick={() => setIsSidebarOpen(true)} />

        <main className="mx-auto max-w-[1400px] px-4 py-6 sm:px-6 lg:px-7">
          <div className="mx-auto max-w-[1180px]">
            <TasksHeader />

            <TaskFilters
              search={search}
              setSearch={setSearch}
              marcarEstadoTarea={marcarEstadoTarea}
              setMarcarEstadoTarea={setMarcarEstadoTarea}
              marcarPrioridadTarea={marcarPrioridadTarea}
              setMarcarPrioridad={setMarcarPrioridad}
              marcarProyecto={marcarProyecto}
              setMarcarProyecto={setMarcarProyecto}
            />

            <TaskTable listaFiltradaTareas={listaFiltradaTareas} />
          </div>
        </main>
      </div>
    </div>
  );
};
