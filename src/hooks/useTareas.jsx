import { useEffect, useReducer } from "react";
import { TareasReducer } from "../reducer/TareasReducer";
import { initialStateTareas } from "../data/initialStateTareas";


export const useTareas = () => {

    const [listaTareas, dispatch] = useReducer(TareasReducer, [], initialStateTareas)

    const agregartarea = (tarea) =>{
        const data = {
            id: crypto.randomUUID(),
            ...tarea
        }

        const action = {
            type: "agregarTarea",
            payload: data
        }
        dispatch(action)
    }

    const eliminarTarea = (id) =>{
        const action = {
            type: "eliminarTarea",
            payload: id
        }
        dispatch(action)
    }

    useEffect(() => {
    localStorage.setItem("listaTareas", JSON.stringify(listaTareas))
    }, [listaTareas])
    
  return {listaTareas ,agregartarea, eliminarTarea}

}


