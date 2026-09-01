import { FiFolder, FiCheckSquare, FiBarChart2 } from "react-icons/fi";

import dashboardImage from "../assets/dashboard.png";
import { Sidebar } from "../components/layout/Sidebar";
import { Topbar } from "../components/layout/Topbar";
import { useState } from "react";

export const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 dark:text-white">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="md:ml-52">
        <Topbar onMenuClick={() => setSidebarOpen(true)} />
        <div className="min-h-screen bg-[#f8f9fc] text-slate-900 dark:bg-slate-900 dark:text-white">
          {/* HERO */}
          <section className="px-6 pt-12 pb-14">
            <div className="mx-auto max-w-4xl text-center">
              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-[10px] font-medium text-indigo-500">
                <span>✦</span>
                Plataforma de gestión para desarrolladores
              </div>

              {/* Título */}
              <h1 className="text-4xl font-bold leading-[1.12] tracking-tight md:text-5xl">
                Gestiona tus proyectos de
                <br />
                desarrollo de forma
                <br />
                <span className="text-indigo-500">simple y eficiente</span>
              </h1>

              {/* Descripción */}
              <p className="mx-auto mt-6 max-w-xl text-sm leading-6 text-slate-400">
                Organiza tareas, proyectos y progreso desde un único dashboard.
                <br />
                Diseñado para desarrolladores que quieren enfocarse en lo que
                importa.
              </p>

            </div>
          </section>

          {/* IMAGEN DEL DASHBOARD */}
          <section className="px-6 pb-12">
            <div className="mx-auto max-w-5xl">
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                <img
                  src={dashboardImage}
                  alt="Vista previa del dashboard"
                  className="block h-auto w-full"
                />
              </div>
            </div>
          </section>

          {/* FUNCIONALIDADES */}
          <section className="px-6 py-10 pb-20">
            <div className="mx-auto max-w-5xl">
              {/* Título */}
              <div className="mb-8 text-center">
                <h2 className="text-2xl font-bold tracking-tight">
                  Todo lo que necesitas
                </h2>

                <p className="mt-2 text-xs text-slate-400">
                  DevBoard reúne las herramientas esenciales para tu flujo de
                  trabajo.
                </p>
              </div>

              {/* Cards */}
              <div className="grid gap-4 md:grid-cols-3">
                {/* Card 1 */}
                <div className="rounded-lg border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md dark:bg-slate-900 dark:text-white">
                  <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-md bg-indigo-50 text-indigo-500">
                    <FiFolder size={16} />
                  </div>

                  <h3 className="text-xs font-semibold">
                    Gestión de proyectos
                  </h3>

                  <p className="mt-2 text-[10px] leading-5 text-slate-400">
                    Organiza, prioriza y da seguimiento a todos tus proyectos en
                    un solo lugar.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="rounded-lg border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md dark:bg-slate-900 dark:text-white">
                  <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-md bg-indigo-50 text-indigo-500">
                    <FiCheckSquare size={16} />
                  </div>

                  <h3 className="text-xs font-semibold ">Gestión de tareas</h3>

                  <p className="mt-2 text-[10px] leading-5 text-slate-400">
                    Crea, asigna y gestiona tareas con estados, prioridades y
                    fechas límite.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="rounded-lg border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md dark:bg-slate-900 dark:text-white">
                  <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-md bg-indigo-50 text-indigo-500">
                    <FiBarChart2 size={16} />
                  </div>

                  <h3 className="text-xs font-semibold">
                    Seguimiento del progreso
                  </h3>

                  <p className="mt-2 text-[10px] leading-5 text-slate-400">
                    Visualiza el avance de tu trabajo con métricas claras y
                    actualizadas.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
