import { ProjectCard } from "./ProjectCard";

export const ProjectGrid = ({ listaProyectosFiltrado, eliminarProyecto, handleEditaProyecto }) => {
  return (
    <div
      className="
        grid grid-cols-1 gap-3
        sm:grid-cols-2
        xl:grid-cols-3
      "
    >
      {listaProyectosFiltrado.map((project) => (
        <ProjectCard eliminarProyecto={eliminarProyecto} handleEditaProyecto={handleEditaProyecto}
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
};