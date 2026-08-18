import { ProjectCard } from "./ProjectCard";

export const ProjectGrid = ({ projects }) => {
  if (projects.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-slate-200 bg-white py-12 text-center">
        <p className="text-xs font-medium text-slate-600">
          No se encontraron proyectos
        </p>

        <p className="mt-1 text-[9px] text-slate-400">
          Prueba con otro término de búsqueda.
        </p>
      </div>
    );
  }

  return (
    <div
      className="
        grid grid-cols-1 gap-3
        sm:grid-cols-2
        xl:grid-cols-3
      "
    >
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
};