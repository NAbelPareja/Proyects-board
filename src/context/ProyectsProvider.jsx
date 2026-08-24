import { useFormularioMovimiento } from "../hooks/useFormularioMovimiento";
import { useMovimiento } from "../hooks/useMovimiento";
import { ProyectsContext } from "./ProyectsContext";

export const ProyectsProvider = ({ children }) => {
  const { listaProyectos, agregarProyecto, editarProyecto, eliminarProyecto } =
    useMovimiento();
  const {
    form,
    setForm,
    handleInputChange,
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
      }}
    >
      {children}
    </ProyectsContext.Provider>
  );
};
