import {
  FiFolder,
  FiActivity,
  FiCheckSquare,
  FiBarChart2,
} from "react-icons/fi";

const iconMap = {
  folder: FiFolder,
  activity: FiActivity,
  tasks: FiCheckSquare,
  chart: FiBarChart2,
};

export const StatCard = ({
  title,
  value,
  change,
  description,
  icon,
  iconStyle,
  positive = true,
}) => {
    const Icon = iconMap[icon];
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-100/50">
      {/* Icono */}
      <div
        className={`flex h-8 w-8 items-center justify-center rounded-lg ${iconStyle}`}
      >
        <Icon size={15} />
      </div>

      {/* Valor */}
      <div className="mt-3">
        <p className="text-lg font-semibold leading-none text-slate-900">
          {value}
        </p>

        <p className="mt-1 text-[9px] text-slate-400">
          {title}
        </p>
      </div>

      {/* Cambio */}
      <div className="mt-3 flex items-center gap-1">
        <span
          className={`text-[8px] font-medium ${
            positive ? "text-emerald-500" : "text-red-500"
          }`}
        >
          {change}
        </span>

        {description && (
          <span className="text-[8px] text-slate-400">
            {description}
          </span>
        )}
      </div>
    </article>
  )
}

