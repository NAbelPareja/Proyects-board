import { FiDownload, FiTrash2 } from "react-icons/fi";
import { SectionLabel } from "./SectionLabel";
import { DataActionRow } from "./DataActionRow";

export const DataSection = ({ onExport = () => {}, onDeleteAll = () => {} }) => {
  return (
    <section className="mt-8">
      <SectionLabel>Datos</SectionLabel>

      <div className="rounded-xl border border-slate-200 bg-white px-4 sm:px-5 dark:bg-slate-800 dark:text-slate-100">
        <DataActionRow
          title="Exportar datos"
          description="Descarga todos tus proyectos y tareas en formato JSON."
          actionLabel="Exportar"
          icon={FiDownload}
          onAction={onExport}
          variant="default"
        />
        <DataActionRow
          title="Eliminar todos los datos"
          description="Esta acción es irreversible. Se eliminarán todos tus datos."
          actionLabel="Eliminar"
          icon={FiTrash2}
          onAction={onDeleteAll}
          variant="danger"
          isLast
        />
      </div>
    </section>
  );
};