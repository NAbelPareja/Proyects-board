import {
  FiCheckCircle,
  FiFilePlus,
  FiEdit3,
  FiUserPlus,
  FiAlertCircle,
} from "react-icons/fi";

const iconMap = {
  success: FiCheckCircle,
  project: FiFilePlus,
  edit: FiEdit3,
  member: FiUserPlus,
  alert: FiAlertCircle,
};

export const ActivityItem = ({ type, title, time }) => {
    const Icon = iconMap[type];

  const iconStyles = {
    success: "text-emerald-500",
    project: "text-indigo-500",
    edit: "text-orange-500",
    member: "text-purple-500",
    alert: "text-red-500",
  };
  return (
    <div className="flex gap-3 border-b border-slate-100 px-3 py-2.5 last:border-0">
      <div className={`mt-0.5 ${iconStyles[type]}`}>
        <Icon size={13} />
      </div>

      <div className="min-w-0">
        <p className="text-[9px] font-medium text-slate-600">
          {title}
        </p>

        <p className="mt-0.5 text-[8px] text-slate-400">
          {time}
        </p>
      </div>
    </div>
  )
}
