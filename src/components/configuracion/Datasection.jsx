import { FiDownload, FiTrash2 } from "react-icons/fi";
import { SectionLabel } from "./Sectionlabel";
import { DataActionRow } from   "./Dataactionrow";

export const DataSection = ({ onExportPdf = () => {},onExportCsv = () => {} , onDeleteAll = () => {} }) => {
  return (
    <section className="mt-8">
      <SectionLabel>Datos</SectionLabel>

      <div className="rounded-xl border border-slate-200 bg-white px-4 py-2 sm:px-5 dark:bg-slate-800 dark:text-slate-100">
        <DataActionRow
          title="Exportar datos JSON"
          description="Descarga todos tus proyectos y tareas en formato JSON."
          actionLabel="Exportar JSON"
          icon={FiDownload}
          onAction={onExportPdf}
          variant="default"
        />
        <DataActionRow
          title="Exportar datos csv"
          description="Descarga todos tus proyectos y tareas en formato CSV."
          actionLabel="Exportar CSV"
          icon={FiDownload}
          onAction={onExportCsv}
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