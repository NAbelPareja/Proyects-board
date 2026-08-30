export const DataActionRow = ({
  title,
  description,
  actionLabel,
  icon: Icon,
  onAction = () => {},
  variant = "default",
  isLast = false,
}) => {
  const variantStyles = {
    default: {
      title: "text-slate-900",
      button: "bg-indigo-50 text-indigo-600 hover:bg-indigo-100",
    },
    danger: {
      title: "text-red-600",
      button: "bg-red-50 text-red-600 hover:bg-red-100",
    },
  };

  const styles = variantStyles[variant];

  return (
    <div
      className={`flex flex-col gap-3 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between dark:bg-slate-800 dark:text-slate-100 ${
        !isLast ? "border-b border-slate-100" : ""
      }`}
    >
      <div>
        <p className={`text-sm font-semibold  ${styles.title}`}>{title}</p>
        <p className="mt-0.5 text-sm text-slate-500 ">{description}</p>
      </div>

      <button
        type="button"
        onClick={onAction}
        className={`inline-flex items-center justify-center gap-1.5 self-start rounded-lg px-3.5 py-2 text-sm font-medium sm:self-auto ${styles.button}`}
      >
        {Icon && <Icon className="h-3.5 w-3.5" />}
        {actionLabel}
      </button>
    </div>
  );
};