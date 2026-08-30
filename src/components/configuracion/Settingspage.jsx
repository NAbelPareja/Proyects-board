
import { ProfileSection } from "./Profilesection"
import { AppearanceSection } from "./Appearancesection"
import { DataSection } from "./Datasection"
import { ConfiguracionHeader } from "./ConfiguracionHeader";

export const SettingsPage = () => {

  const handleExport = () => {
    console.log("Exportando datos...");
  };

  const handleDeleteAll = () => {
    console.log("Eliminando todos los datos...");
  };


  return (
    <main className="flex-1 overflow-y-auto bg-slate-50 px-4 py-6 sm:px-8 sm:py-8 dark:bg-slate-800 dark:text-slate-100">
      <div className="mx-auto max-w-3xl">
        <ConfiguracionHeader />
        <ProfileSection />
        <AppearanceSection />
        <DataSection onExport={handleExport} onDeleteAll={handleDeleteAll} />
      </div>
    </main>
  );
};