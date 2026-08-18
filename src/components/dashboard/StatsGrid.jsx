import {StatCard} from "./StatCard";

const stats = [
  {
    title: "Total de proyectos",
    value: "8",
    change: "↗ +1 este mes",
    icon: "folder",
    iconStyle: "bg-indigo-50 text-indigo-500",
  },
  {
    title: "Proyectos activos",
    value: "3",
    change: "↗ Sin cambios",
    icon: "activity",
    iconStyle: "bg-emerald-50 text-emerald-500",
  },
  {
    title: "Total de tareas",
    value: "24",
    change: "↗ +6 esta semana",
    icon: "tasks",
    iconStyle: "bg-amber-50 text-amber-500",
  },
  {
    title: "Progreso general",
    value: "67%",
    change: "↗ +12%",
    description: "vs semana pasada",
    icon: "chart",
    iconStyle: "bg-purple-50 text-purple-500",
  },
];

export const StatsGrid = () => {
  return (
    <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <StatCard
          key={stat.title}
          {...stat}
        />
      ))}
    </section>
  )
}
