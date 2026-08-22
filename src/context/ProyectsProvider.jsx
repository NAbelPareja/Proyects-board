import { useMovimiento } from "../hooks/useMovimiento";
import { ProyectsContext } from "./ProyectsContext";

export const ProyectsProvider = ({ children }) => {
  const { listaProyectos, agregarProyecto, editarProyecto, eliminarProyecto } =
    useMovimiento();


  return (
    <ProyectsContext.Provider value={{listaProyectos,
        agregarProyecto,
        editarProyecto,
        eliminarProyecto,}}>  
        {children}
    </ProyectsContext.Provider>
  );
};
