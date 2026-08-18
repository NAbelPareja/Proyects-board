const statusStyles = {
  "En progreso": "bg-indigo-50 text-indigo-500",
  Pendiente: "bg-slate-100 text-slate-500",
  Completado: "bg-emerald-50 text-emerald-500",
};

const priorityStyles = {
  Alta: "bg-red-50 text-red-500",
  Media: "bg-amber-50 text-amber-500",
  Baja: "bg-emerald-50 text-emerald-500",
};

export const TaskBadge = ({ type, value }) => {
  const styles =
    type === "status"
      ? statusStyles[value]
      : priorityStyles[value];

  return (
    <span
      className={`
        inline-flex items-center justify-center
        whitespace-nowrap rounded-full
        px-2 py-0.5
        text-[7px] font-medium
        ${styles}
      `}
    >
      {value}
    </span>
  );
};