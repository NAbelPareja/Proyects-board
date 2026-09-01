import { FiSun, FiMoon, FiMonitor } from "react-icons/fi";

const options = [
  { key: "claro", label: "Claro", icon: FiSun },
  { key: "oscuro", label: "Oscuro", icon: FiMoon },
  { key: "sistema", label: "Sistema", icon: FiMonitor },
];

export const ThemeSelector = ({ value = "claro", handleChange = () => {} }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map(({ key, label, icon: Icon }) => {
  const active = key === value;

  return (
    <button
            key={key}
            type="button"
            onClick={() => {
              
              handleChange(key);
            }}
            aria-pressed={active}
            className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              active
                ? "bg-indigo-600 text-white shadow-sm shadow-indigo-200"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            <Icon className="h-4 w-4" />
            {label}
          </button>
  );
})}
    </div>
  );
};