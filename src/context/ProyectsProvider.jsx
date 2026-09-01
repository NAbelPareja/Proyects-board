import { useConfiguracion } from "../hooks/useConfiguracion";
import { useFormularioMovimiento } from "../hooks/useFormularioMovimiento";
import { useMovimiento } from "../hooks/useMovimiento";
import { useTareas } from "../hooks/useTareas";

import { ProyectsContext } from "./ProyectsContext";

export const ProyectsProvider = ({ children }) => {
  const { listaProyectos, agregarProyecto, editarProyecto, eliminarProyecto } =
    useMovimiento();

  const { listaTareas, agregartarea, eliminarTarea,eliminarTareashijas } = useTareas();

  const { tema, setTema, idioma, setIdioma } = useConfiguracion();

  const {
    form,
    setForm,
    formTareas,
    setFormTareas,
    handleInputChange,
    handleInputChangeTareas,
    handleCheckboxChange,
    handleColorChange,
    idEditando,
    setIdEditando,
    isModalOpen,
    setIsModalOpen,
  } = useFormularioMovimiento();

  return (
    <ProyectsContext.Provider
      value={{
        listaProyectos,
        agregarProyecto,
        editarProyecto,
        eliminarProyecto,
        form,
        setForm,
        handleInputChange,
        handleCheckboxChange,
        handleColorChange,
        idEditando,
        setIdEditando,
        isModalOpen,
        setIsModalOpen,
        listaTareas,
        agregartarea,
        eliminarTarea,
        eliminarTareashijas,
        formTareas,
        setFormTareas,
        handleInputChangeTareas,
        tema,
        setTema,
        idioma,
        setIdioma,
      }}
    >
      {children}
    </ProyectsContext.Provider>
  );
};
