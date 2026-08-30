
import { SectionLabel } from "./SectionLabel";
import { ThemeSelector } from "./Themeselector"
import { useProyects } from "../../hooks/useProyects";

export const AppearanceSection = () => {
  const {tema, setTema} = useProyects();
  
  const handleChange = (value) => {
    setTema(value);
  };

  return (
    <section className="mt-8">
      <SectionLabel>Apariencia</SectionLabel>

      <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5 dark:bg-slate-800 dark:text-slate-100">
        <p className="text-sm font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-100">Tema de la interfaz</p>
        <p className="mb-4 mt-0.5 text-sm text-slate-500">
          Selecciona cómo quieres que se vea DevBoard.
        </p>
        <ThemeSelector value={tema} handleChange={handleChange} />
      </div>
    </section>
  );
};