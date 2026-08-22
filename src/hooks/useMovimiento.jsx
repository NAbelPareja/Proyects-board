import { useEffect, useReducer } from "react"
import { MovimientoReducer } from "../reducer/MovimientoReducer"
import { initialState } from "../data/initialState"

export const useMovimiento = () => {
    const [listaProyectos, dispatch] = useReducer(MovimientoReducer, [], initialState)

    const agregarProyecto = (movimiento) =>{
        const nuevaNota = {
            id: crypto.randomUUID(),
            ...movimiento
        };

        const action = {
            type: "[MOVIMIENTO] agregar movimiento",
            payload: nuevaNota
        }
        dispatch(action)
    }

    const editarProyecto = (movimiento) =>{
        const action={
            type:"[MOVIMIENTO] editar movimiento",
            payload: movimiento
        }
        dispatch(action)
    }

    const eliminarProyecto = (id) =>{
        const action={
            type:"[MOVIMEINTO] elimnar movimiento",
            payload: id
        }
        dispatch(action)
    }   

    useEffect(() => {
    localStorage.setItem("listaProyectos", JSON.stringify(listaProyectos));
  }, [listaProyectos]);

  return {listaProyectos, agregarProyecto, editarProyecto, eliminarProyecto}
}
