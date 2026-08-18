import { FiEdit2 } from "react-icons/fi";
import { SectionLabel } from "./SectionLabel";

export const ProfileSection = ({
  user = {
    name: "Abel García",
    email: "abel@devboard.io",
    memberSince: "septiembre 2024",
    avatarUrl:
      "https://images.unsplash.com/photo-1618077360395-f3068be8e001?w=200&h=200&fit=crop&crop=faces",
  },
  onEditProfile = () => {},
}) => {
  return (
    <section>
      <SectionLabel>Perfil</SectionLabel>

      <div className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
        <div className="flex items-center gap-4">
          <img
            src={user.avatarUrl}
            alt={user.name}
            className="h-14 w-14 shrink-0 rounded-full object-cover ring-2 ring-indigo-100"
          />
          <div>
            <p className="text-sm font-semibold text-slate-900">{user.name}</p>
            <p className="text-sm text-slate-500">{user.email}</p>
            <p className="mt-0.5 text-xs text-slate-400">Miembro desde {user.memberSince}</p>
          </div>
        </div>

        <button
          type="button"
          onClick={onEditProfile}
          className="inline-flex items-center justify-center gap-1.5 self-start rounded-lg bg-indigo-50 px-3.5 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-100 sm:self-auto"
        >
          <FiEdit2 className="h-3.5 w-3.5" />
          Editar perfil
        </button>
      </div>
    </section>
  );
};