import {ActivityItem} from "./ActivityItem";

const activities = [
  {
    type: "success",
    title: 'Tarea "Navbar component" completada',
    time: "Hace 10 min",
  },
  {
    type: "project",
    title: 'Proyecto "EcoHuerta" creado',
    time: "Hace 1 h",
  },
  {
    type: "edit",
    title: 'Tarea "Filtros de búsqueda" actualizada',
    time: "Hace 2 h",
  },
  {
    type: "member",
    title: 'Miembro agregado a "Gasper"',
    time: "Hace 4 h",
  },
  {
    type: "alert",
    title: '"MyLibrary" vence en 3 días',
    time: "Ayer",
  },
];

export const RecentActivity = () => {
  return (
    <section>
      <div className="mb-3">
        <h2 className="text-xs font-semibold text-slate-800">
          Actividad reciente
        </h2>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm shadow-slate-100/50">
        {activities.map((activity, index) => (
          <ActivityItem
            key={index}
            {...activity}
          />
        ))}
      </div>
    </section>
  )
}
