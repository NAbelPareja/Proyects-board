
import { ProfileSection } from "./ProfileSection";
import { AppearanceSection } from "./AppearanceSection";
import { DataSection } from "./DataSection";
import { ConfiguracionHeader } from "./ConfiguracionHeader";

export const SettingsPage = () => {
  const handleExport = () => {
    console.log("Exportando datos...");
  };

  const handleDeleteAll = () => {
    console.log("Eliminando todos los datos...");
  };

  const handleThemeChange = (theme) => {
    console.log("Tema seleccionado:", theme);
  };

  return (
    <main className="flex-1 overflow-y-auto bg-slate-50 px-4 py-6 sm:px-8 sm:py-8">
      <div className="mx-auto max-w-3xl">
        <ConfiguracionHeader />
        <ProfileSection />
        <AppearanceSection onThemeChange={handleThemeChange} />
        <DataSection onExport={handleExport} onDeleteAll={handleDeleteAll} />
      </div>
    </main>
  );
};