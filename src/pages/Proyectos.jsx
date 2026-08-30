import { useState } from "react";

import { Sidebar } from "../components/layout/Sidebar";
import { Topbar } from "../components/layout/Topbar";

import { ProjectsHeader } from "../components/proyects/ProjectsHeader";
import { ProjectFilters } from "../components/proyects/ProjectFilters";
import { ProjectGrid } from "../components/proyects/ProjectGrid";

import { useProyects } from "../hooks/useProyects";
import { useFormularioMovimiento } from "../hooks/useFormularioMovimiento";

export const Proyectos = () => {
  const { listaProyectos, eliminarProyecto } = useProyects();

  const {
    form,
    setForm,
    isModalOpen,
    setIsModalOpen,
  } = useFormularioMovimiento();


  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [marcarFavorito, setMarcarFavorito] = useState(false);
  const [marcarPrioridad, setMarcarPrioridad] = useState("");
  const [marcarCategoria, setMarcarCategoria] = useState("");
  const [buscar, setBuscar] = useState("");

  const listaProyectosFiltrado = listaProyectos.filter((lista) => {
    const nombre = lista?.nombre?.toLowerCase();
    const categoria = lista.categoria;
    const prioridad = lista.prioridad;
    const favorito = lista.favorito;

    const cumpleNombre = !buscar || nombre.includes(buscar);
    const cumpleCategoria =
      !marcarCategoria || categoria.includes(marcarCategoria);
    const cumplePrioridad =
      !marcarPrioridad || prioridad.includes(marcarPrioridad);
    const cumpleFavorito = !marcarFavorito || favorito === marcarFavorito;

    return cumpleNombre && cumpleCategoria && cumplePrioridad && cumpleFavorito;
  });


  return (
    <div className=" min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-800 dark:text-slate-100">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="md:ml-52">
        <Topbar onMenuClick={() => setIsSidebarOpen(true)} />

        <main className="mx-auto max-w-[1400px] px-4 py-6 sm:px-6 lg:px-7">
          <div className="mx-auto max-w-[1180px]">
            <ProjectsHeader
            />

            <ProjectFilters
              marcarFavorito={marcarFavorito}
              setMarcarFavorito={setMarcarFavorito}
              setMarcarPrioridad={setMarcarPrioridad}
              setMarcarCategoria={setMarcarCategoria}
              marcarPrioridad={marcarPrioridad}
              marcarCategoria={marcarCategoria}
              buscar={buscar}
              setBuscar={setBuscar}
            />

            <ProjectGrid
              listaProyectosFiltrado={listaProyectosFiltrado}
              eliminarProyecto={eliminarProyecto}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              form={form}
              setForm={setForm}
            />
          </div>
        </main>
      </div>
    </div>
  );
};
