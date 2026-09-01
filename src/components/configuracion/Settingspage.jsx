
import { ProfileSection } from "./Profilesection"
import { AppearanceSection } from "./Appearancesection"
import { DataSection } from "./Datasection"
import { ConfiguracionHeader } from "./ConfiguracionHeader";
import { useProyects } from "../../hooks/useProyects";
import { descargarJSON } from "../../utils/descargarJSON";
import { descargarCsv } from "../../utils/descargarCsv";

export const SettingsPage = () => {

  const {listaProyectos, listaTareas} =  useProyects();

  const handleExportPdf = () => {
    const datos = {
    proyectos: listaProyectos,
    tareas: listaTareas,
  };

  descargarJSON(datos, "devboard-backup.json");

  };

  const handleExportCsv =() =>{
    descargarCsv(listaProyectos,listaTareas, "devboard-backup.xlsx");
    console.log("exportando todos los datos en csv");
  }

  const handleDeleteAll = () => {
    console.log("Eliminando todos los datos...");
  };


  return (
    <main className="flex-1 overflow-y-auto bg-slate-50 px-4 py-6 sm:px-8 sm:py-8 dark:bg-slate-800 dark:text-slate-100">
      <div className="mx-auto max-w-3xl">
        <ConfiguracionHeader />
        <ProfileSection />
        <AppearanceSection />
        <DataSection onExportPdf={handleExportPdf} onExportCsv= {handleExportCsv} onDeleteAll={handleDeleteAll}  />
      </div>
    </main>
  );
};