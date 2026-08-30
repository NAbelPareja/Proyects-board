import { useProyects } from "../../hooks/useProyects";
import { StatCard } from "./StatCard";


export const StatsGrid = () => {
  const { listaProyectos } = useProyects();

  const totalProyectos = listaProyectos.length;


  const ProyectosActivos = listaProyectos.filter((valor) => valor.estado === "Activo")


  const totalTareas = listaProyectos.reduce((acumulador, proyecto) => {
     const tareasDeEsteProyecto = proyecto.tareas ? proyecto.tareas : 0;
     return acumulador + tareasDeEsteProyecto;
  },0)

  const progresoGeneral = listaProyectos.reduce((acumulador, proyecto) =>{
    return acumulador + (proyecto.progreso || 0)
  },0)

  const promedioProgreso = listaProyectos.length > 0 ? Math.round(progresoGeneral/listaProyectos.length) : 0

  const stats = [
  {
    title: "Total de proyectos",
    value: String(totalProyectos),
    change: "↗ +1 este mes",
    icon: "folder",
    iconStyle: "bg-indigo-50 text-indigo-500",
  },
  {
    title: "Proyectos activos",
    value: String(ProyectosActivos.length),
    change: "↗ Sin cambios",
    icon: "activity",
    iconStyle: "bg-emerald-50 text-emerald-500",
  },
  {
    title: "Total de tareas",
    value: String(totalTareas),
    change: "↗ +6 esta semana",
    icon: "tasks",
    iconStyle: "bg-amber-50 text-amber-500",
  },
  {
    title: "Progreso general",
    value: `${promedioProgreso}%`,
    change: "↗ +12%",
    description: "vs semana pasada",
    icon: "chart",
    iconStyle: "bg-purple-50 text-purple-500",
  },
];

  return (
    <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4 ">
      {stats.map((stat) => (
        <StatCard key={stat.title} {...stat} />
      ))}
    </section>
  );

};
