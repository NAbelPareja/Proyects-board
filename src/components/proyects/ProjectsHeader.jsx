import { FiPlus } from "react-icons/fi";
import { useState } from "react";
import { ProjectModal } from "./ProjectModal"

export const ProjectsHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-base font-semibold text-slate-800">
          Proyectos
        </h1>

        <p className="mt-0.5 text-[9px] text-slate-400">
          Gestiona y organiza todos tus proyectos de desarrollo.
        </p>
      </div>

      <button
        className="
          inline-flex h-8 items-center justify-center gap-1.5
          rounded-md bg-indigo-500 px-3
          text-[9px] font-medium text-white
          shadow-sm transition
          hover:bg-indigo-600
        "
        onClick={() => setIsModalOpen(true)}
      >
        <FiPlus size={12} />
        Nuevo proyecto
      </button>
      {isModalOpen && (
        <ProjectModal
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};