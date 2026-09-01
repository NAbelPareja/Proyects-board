import { FiEdit2 } from "react-icons/fi";
import { SectionLabel } from "./SectionLabel";
import { useState } from "react";
import { FiSave, FiX } from "react-icons/fi";

export const ProfileSection = ({
  user = {
    name: "Abel García",
    email: "abel@devboard.io",
    memberSince: "septiembre 2024",
    avatarUrl:
      "https://images.unsplash.com/photo-1618077360395-f3068be8e001?w=200&h=200&fit=crop&crop=faces",
  },
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Abel García",
    email: "abel@devboard.io",
  });
  const [tempProfile, setTempProfile] = useState({ ...profile });

  const handleEdit = () => {
    setTempProfile({ ...profile });
    setIsEditing(true);
  };

  const handleSave = () => {
    setProfile({ ...tempProfile }); // Guarda los cambios definitivos
    setIsEditing(false);
    console.log("Datos guardados en el servidor:", tempProfile);
  };

  const handleCancel = () => {
    setIsEditing(false); // Cierra sin guardar cambios
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTempProfile((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section>
      <SectionLabel>Perfil</SectionLabel>

      <div className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5 dark:bg-slate-800 dark:text-slate-100">
        <div className="flex items-center gap-4">
          <img
            src={user.avatarUrl}
            alt={user.name}
            className="h-14 w-14 shrink-0 rounded-full object-cover ring-2 ring-indigo-100"
          />
          <div>
            {isEditing ? (
              // VISTA DE EDICIÓN (CAMPOS INPUT)
              <div className="flex flex-col gap-2 max-w-xs">
                <input
                  type="text"
                  name="name"
                  value={tempProfile.name}
                  onChange={handleChange}
                  className="rounded-lg border border-slate-300 px-3 py-1 text-sm font-semibold focus:border-indigo-500 focus:outline-none dark:bg-slate-700"
                />
                <input
                  type="email"
                  name="email"
                  value={tempProfile.email}
                  onChange={handleChange}
                  className="rounded-lg border border-slate-300 px-3 py-1 text-sm text-slate-600 focus:border-indigo-500 focus:outline-none dark:bg-slate-700 dark:text-slate-300"
                />
              </div>
            ) : (
              // VISTA DE LECTURA (TEXTO ESTÁTICO)
              <div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                  {profile.name}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {profile.email}
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Miembro desde septiembre 2024
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="mt-4 flex gap-2">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 px-3.5 py-1.5 text-sm font-medium text-white hover:bg-indigo-700"
            >
              <FiSave className="h-4 w-4" />
              Guardar
            </button>
            <button
              onClick={handleCancel}
              className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-3.5 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-200"
            >
              <FiX className="h-4 w-4" />
              Cancelar
            </button>
          </>
        ) : (
          <button
            onClick={handleEdit}
            className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-50 px-3.5 py-1.5 text-sm font-medium text-indigo-600 hover:bg-indigo-100 dark:bg-slate-700 dark:text-indigo-400"
          >
            <FiEdit2 className="h-4 w-4" />
            Editar perfil
          </button>
        )}
      </div>
      </div>
    </section>
  );
};
