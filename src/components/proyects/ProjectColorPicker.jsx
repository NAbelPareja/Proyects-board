const colors = [
  {
    id: "blue",
    className: "bg-indigo-500",
  },
  {
    id: "green",
    className: "bg-green-500",
  },
  {
    id: "orange",
    className: "bg-orange-500",
  },
  {
    id: "red",
    className: "bg-red-500",
  },
  {
    id: "purple",
    className: "bg-purple-500",
  },
  {
    id: "cyan",
    className: "bg-cyan-500",
  },
];

export const ProjectColorPicker = ({ value, onChange }) => {
  return (
    <div>
      <p className="mb-2 text-[11px] font-medium text-gray-800">
        Color del proyecto
      </p>

      <div className="flex items-center gap-2">
        {colors.map((color) => (
          <button
            key={color.id}
            type="button"
            onClick={() => onChange(color.id)}
            aria-label={`Seleccionar color ${color.id}`}
            className={`h-5 w-5 rounded-full ${color.className} transition ${
              value === color.id
                ? "ring-2 ring-gray-800 ring-offset-1"
                : "hover:scale-110"
            }`}
          />
        ))}
      </div>
    </div>
  );
};