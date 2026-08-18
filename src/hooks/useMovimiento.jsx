import { useReducer } from "react"
import { MovimientoReducer } from "../reducer/MovimientoReducer"
import { initialState } from "../data/initialState"


export const useMovimiento = () => {
    const [listaProyectos, dispatch] = useReducer(MovimientoReducer, [], initialState)

    const agregarProyecto = (movimiento) =>{
        const nuevaNota = {
            id: Date.nom(),
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

    const elimnarProyecto = (id) =>{
        const action={
            type:"[MOVIMEINTO] elimnar movimiento",
            payload: id
        }
        dispatch(action)
    }   
    

  return {listaProyectos, agregarProyecto, editarProyecto, elimnarProyecto}
}
