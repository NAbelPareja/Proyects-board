import { useState } from "react";
import { SectionLabel } from "./SectionLabel";
import { ThemeSelector } from "./ThemeSelector";

export const AppearanceSection = ({ initialTheme = "claro", onThemeChange = () => {} }) => {
  const [theme, setTheme] = useState(initialTheme);

  const handleChange = (value) => {
    setTheme(value);
    onThemeChange(value);
  };

  return (
    <section className="mt-8">
      <SectionLabel>Apariencia</SectionLabel>

      <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
        <p className="text-sm font-semibold text-slate-900">Tema de la interfaz</p>
        <p className="mb-4 mt-0.5 text-sm text-slate-500">
          Selecciona cómo quieres que se vea DevBoard.
        </p>

        <ThemeSelector value={theme} onChange={handleChange} />
      </div>
    </section>
  );
};