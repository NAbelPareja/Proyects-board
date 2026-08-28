import {
  FiCheckCircle,
  FiClock,
  FiAlertCircle,
} from "react-icons/fi";

// 1. Mapeamos las llaves directamente con los nombres de tus estados
const iconMap = {
  "Completado": FiCheckCircle,
  "En progreso": FiClock, // Cambiado por un reloj que queda mejor con "En progreso"
  "Pendiente": FiAlertCircle,
};

const iconStyles = {
  "Completado": "text-emerald-500",
  "En progreso": "text-orange-500",
  "Pendiente": "text-red-500",
};


export const ActivityItem = ({tareas}) => {
  const Icon = iconMap[tareas.estado] || FiAlertCircle;
  const currentStyle = iconStyles[tareas.estado] || "text-slate-500";
  return (
    <div className="flex gap-3 border-b border-slate-100 px-3 py-2.5 last:border-0">
      <div className={`mt-0.5 ${currentStyle}`}>
        <Icon size={13} />
      </div>

      <div className="min-w-0">
        <p className="text-[9px] font-medium text-slate-600">
          {tareas.nombre}
        </p>

        <p className="mt-0.5 text-[8px] text-slate-400">
          {tareas.prioridad}
        </p>
      </div>
    </div>
  )
}
