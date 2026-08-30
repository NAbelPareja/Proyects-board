import { FiFolderPlus, FiX } from "react-icons/fi";
import { ProjectForm } from "./ProjectForm";
import { useProyects } from "../../hooks/useProyects";

export const ProjectModal = ({
  onClose,
  handleCheckboxChange,
  handleColorChange,
}) => {
  const { agregarProyecto, editarProyecto,form, setForm, setIdEditando,idEditando, } = useProyects();

  const handleGuardarProyecto = (e) => {
    e.preventDefault();
    if (idEditando) {
      editarProyecto(form);
    } else {
      agregarProyecto(form);
    }
    setIdEditando(null);
    setForm({
      nombre: "",
      descripcion: "",
      categoria: "",
      prioridad: "",
      fechaLimite: "",
      color: "",
      tareas:0,
      progreso:0,
      favorito: false,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 ">
      <div className="w-full max-w-[520px] overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-slate-800 dark:text-slate-100">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
              <FiFolderPlus size={15} />
            </div>

            <h2 className="text-sm font-semibold text-gray-900 dark:bg-slate-800 dark:text-slate-100">
              Crear nuevo proyecto
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 transition hover:text-gray-700"
            aria-label="Cerrar modal"
          >
            <FiX size={17} />
          </button>
        </div>

        {/* Formulario */}
        <ProjectForm
          idEditando={idEditando}
          onCancel={onClose}
          handleGuardarProyecto={handleGuardarProyecto}
          handleCheckboxChange={handleCheckboxChange}
          handleColorChange={handleColorChange}
        />
      </div>
    </div>
  );
};
