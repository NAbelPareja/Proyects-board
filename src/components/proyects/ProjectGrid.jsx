import { useProyects } from "../../hooks/useProyects";
import { ProjectCard } from "./ProjectCard";

export const ProjectGrid = ({
  listaProyectosFiltrado

}) => {

  const {setIdEditando,setForm , listaProyectos } = useProyects()

  const handleEditaProyecto = (id) => {
      setIdEditando(id);
      const edit = listaProyectos.find((proyecto) => proyecto.id === id);
      if (edit) {
        setForm(edit);
      }
    };
  return (
    <div
      className="
        grid grid-cols-1 gap-3
        sm:grid-cols-2
        xl:grid-cols-3
      "
    >
      {listaProyectosFiltrado.map((project) => (
        <ProjectCard
          handleEditaProyecto={handleEditaProyecto}
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
};
